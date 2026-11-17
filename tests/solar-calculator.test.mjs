import test from "node:test";
import assert from "node:assert/strict";
import { calculateSolarSystem, DEFAULT_SOLAR_SETTINGS, householdExample, validateSolarInputs, buildSolarQuote, panelConfigurations, SYSTEM_ACCESSORIES, solarWhatsAppUrl } from "../src/lib/solar-calculator.ts";

const settings = { ...DEFAULT_SOLAR_SETTINGS };
const load = (patch = {}) => ({ id: "test", name: "جهاز تجريبي", watts: 100, quantity: 2, hours: 5, everyDays: 1, dutyPercent: 100, nightPercent: 50, surgeFactor: 1, ...patch });
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 0.001, `${actual} != ${expected}`);

test("energy units, quantity, and duty cycle are distinct from running watts", () => {
  const result = calculateSolarSystem([load({ dutyPercent: 40 })], settings);
  close(result.averageWh, 400);
  close(result.runningWatts, 200);
  close(result.minimumInverterWatts, 250);
});
test("infrequent use reduces average, not design-day energy or inverter", () => {
  const result = calculateSolarSystem([load({ watts: 500, quantity: 1, hours: 1.5, everyDays: 4, surgeFactor: 3 })], settings);
  close(result.averageWh, 187.5);
  close(result.designWh, 750);
  close(result.runningWatts, 500);
  close(result.surgeWatts, 1500);
});
test("five minutes every three days is not five hours", () => {
  const result = calculateSolarSystem([load({ watts: 400, quantity: 1, hours: 5 / 60, everyDays: 3 })], settings);
  close(result.averageWh, 100 / 9);
});
test("sample household has reproducible energy and rounded equipment counts", () => {
  const r = calculateSolarSystem(householdExample(), settings);
  close(r.averageWh, 2536.611111);
  close(r.designWh, 3121.333333);
  assert.equal(r.panelCount, 3);
  assert.equal(r.batteryCount, 2);
  assert.equal(r.inverterKw, 2);
  assert.ok(r.arrayWatts >= r.pvWatts);
  assert.ok(r.installedBatteryWh >= r.nominalBatteryWh);
  close(r.surgeVa, 3951.25);
});
test("night-only storage follows each appliance's night share", () => {
  const full = calculateSolarSystem([load()], { ...settings, inverterIdleWatts: 0 });
  const night = calculateSolarSystem([load()], { ...settings, inverterIdleWatts: 0, storageMode: "night" });
  close(night.nominalBatteryWh, full.nominalBatteryWh / 2);
  close(night.pvWatts, full.pvWatts);
});
test("extra autonomy increases storage, not ordinary daily PV consumption", () => {
  const first = calculateSolarSystem([load()], settings);
  const double = calculateSolarSystem([load()], { ...settings, autonomyDays: 2 });
  close(double.nominalBatteryWh, first.nominalBatteryWh * 2);
  close(double.pvWatts, first.pvWatts);
});
test("lower sunlight increases PV size without changing storage", () => {
  const first = calculateSolarSystem([load()], settings);
  const darker = calculateSolarSystem([load()], { ...settings, sunHours: 2.5 });
  close(darker.pvWatts, first.pvWatts * 2);
  close(darker.nominalBatteryWh, first.nominalBatteryWh);
});
test("lead battery quantities form complete 48V groups", () => {
  const r = calculateSolarSystem(householdExample(), { ...settings, battery: "lead200" });
  assert.equal(r.bankVoltage, 48);
  assert.equal(r.batteryCount % 4, 0);
  close(r.installedBatteryWh, r.batteryCount * 12 * 200);
  assert.ok(r.installedBatteryWh >= r.nominalBatteryWh);
});
test("multiple motor starts and poor power factor are covered separately", () => {
  const r = calculateSolarSystem([load({ watts: 100, quantity: 2, surgeFactor: 5 }), load({ watts: 500, quantity: 1, surgeFactor: 3 })], settings);
  close(r.surgeWatts, 2500);
  close(r.surgeVa, 3125);
  close(r.minimumInverterVa, 1093.75);
});
test("zero-hour devices do not inflate instantaneous demand", () => {
  const r = calculateSolarSystem([load(), load({ hours: 0, watts: 3000 })], settings);
  close(r.runningWatts, 200);
  close(r.designWh, 1000);
});
test("invalid and empty inputs never produce a recommendation", () => {
  for (const bad of [load({ watts: NaN }), load({ quantity: 1.5 }), load({ hours: -1 }), load({ hours: 25 }), load({ everyDays: 0 }), load({ nightPercent: 101 }), load({ surgeFactor: Infinity })]) {
    assert.throws(() => calculateSolarSystem([bad], settings));
  }
  assert.throws(() => calculateSolarSystem([], settings));
  assert.throws(() => calculateSolarSystem([load({ hours: 0 })], settings));
  assert.throws(() => calculateSolarSystem([load()], { ...settings, sunHours: 0 }));
  assert.throws(() => calculateSolarSystem([load()], { ...settings, battery: "invalid" }));
  assert.ok(validateSolarInputs([load()], { ...settings, powerFactor: NaN }).length);
});
test("higher losses and reserves cannot reduce required equipment", () => {
  const first = calculateSolarSystem(householdExample(), settings);
  const higher = calculateSolarSystem(householdExample(), { ...settings, pvLossPercent: 40, reservePercent: 40, inverterEfficiency: 80 });
  assert.ok(higher.panelCount >= first.panelCount);
  assert.ok(higher.batteryCount >= first.batteryCount);
});
test("quote includes inputs and assumptions without sample customer's personal data", () => {
  const text = buildSolarQuote(householdExample(), settings, "صنعاء");
  assert.match(text, /صنعاء/);
  assert.match(text, /3 × 550W/);
  assert.match(text, /BMS/);
  assert.match(text, /ساعات شمس/);
  assert.match(text, /كل 4 يوم/);
  assert.doesNotMatch(text, /@|Visitor IP|Phone\n|Email\n/);
});

test("equivalent panel options cover an exact 1000W requirement", () => {
  const options = panelConfigurations(1000);
  assert.equal(options.find((o) => o.watts === 200).count, 5);
  assert.equal(options.find((o) => o.watts === 500).count, 2);
  assert.equal(options.find((o) => o.watts === 1000).count, 1);
  assert.ok(options.every((o) => o.totalWatts >= 1000));
});
test("panel alternatives round up at boundaries and preserve custom panel sizes", () => {
  const options = panelConfigurations(1000.01, 575);
  assert.equal(options.find((o) => o.watts === 500).count, 3);
  assert.equal(options.find((o) => o.watts === 575).totalWatts, 1150);
  assert.equal(new Set(options.map((o) => o.watts)).size, options.length);
  for (const target of [NaN, Infinity, 0, -50]) assert.throws(() => panelConfigurations(target));
  assert.throws(() => panelConfigurations(1000, 0));
});
test("changing panel distribution changes only installed array, not underlying demand", () => {
  const first = calculateSolarSystem(householdExample(), settings);
  const smaller = calculateSolarSystem(householdExample(), { ...settings, panelWatts: 200 });
  assert.equal(smaller.panelCount, 7);
  close(smaller.arrayWatts, 1400);
  close(smaller.pvWatts, first.pvWatts);
  close(smaller.nominalBatteryWh, first.nominalBatteryWh);
  close(smaller.runningWatts, first.runningWatts);
});
test("quote contains load totals, minimum sizes, chosen distribution, and every accessory", () => {
  const text = buildSolarQuote(householdExample(), { ...settings, panelWatts: 500 }, "صنعاء");
  assert.match(text, /1281 واط/);
  assert.match(text, /1317 واط ذروة/);
  assert.match(text, /3 × 500W = 1500/);
  assert.match(text, /6.24 kWh/);
  assert.match(text, /122Ah عند 51.2V/);
  assert.match(text, /2.01 kVA/);
  assert.match(text, /بدائل حسابية/);
  for (const item of SYSTEM_ACCESSORIES) assert.ok(text.includes(item.title));
});
test("one-click WhatsApp URL encodes the complete current report without loss", () => {
  const text = buildSolarQuote(householdExample(), settings, "صنعاء & إب / شرق؟");
  const url = new URL(solarWhatsAppUrl("+967 780177177", text));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/967780177177");
  assert.equal(url.searchParams.get("text"), text);
  assert.equal([...url.searchParams].length, 1);
});
