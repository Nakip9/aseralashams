# Solar load calculator

Local route: `/calculator`. Arabic, RTL, client-only; no customer data is persisted or sent automatically. Navigation and footer use the shared `NAV_LINKS`. The primary quote link opens WhatsApp directly with the complete current report in one click; the visitor confirms sending inside WhatsApp. Preview and copy are optional. No price list exists in the product schema, so no prices or stock claims are fabricated.

The summary leads with simultaneous load watts and daily energy, then total required PV watts, nominal battery kWh/Ah at a stated voltage, and inverter size. Panel alternatives use `ceil(required watts / panel watts)` for 200/400/500/550/600/1000W and any custom 100–1000W input. These are arithmetic alternatives, not stock claims or electrically interchangeable string layouts. For 1000W required, 5 ×200W, 2 ×500W, and 1 ×1000W are equivalent by nominal power only. The selected alternative updates the summary and both WhatsApp links immediately. Required minimums are rounded upward for display.

The quote also includes a preliminary scope for MPPT (integrated or external), mounts, cables/connectors, DC/AC protection, earthing, and commissioning. Component ratings, cable lengths/cross-sections and installation quantities require site design and are intentionally not invented. Battery nominal-voltage current labels distinguish full rated inverter load from the actual entered appliances' starting load; the latter can be lower.

## Calculation contract

- `W × quantity × hours × duty cycle` gives Wh on a use day. Divide by the repeat interval for the multi-day average.
- Design-day energy sums every appliance's use-day energy. This deliberately covers the washing/blending day; it is not a forecast or detailed hourly simulation.
- Running and start power assume all enabled appliances operate/start simultaneously. Duty cycle and repeat interval never reduce instantaneous demand. Zero-hour loads are disabled.
- Inverter continuous minimum is running watts × 1.25. W/PF also produces a separate minimum VA rating; surge VA is summed start watts/PF. The displayed kW size is a nominal class, conditional on both VA and surge-duration capability. It is not a verified catalog product.
- PV Wp = `(design Wh / inverter efficiency + idle W × 24) × reserve / (peak sun hours × PV performance factor × battery round-trip efficiency)`. All energy passing through storage is a conservative simplifying assumption. The 20% PV derate covers temperature, soiling, wiring and controller losses, excluding inverter/storage losses.
- Nominal storage Wh = `(backup AC Wh / inverter efficiency + idle W × backup hours) × autonomy × reserve / (DoD × discharge efficiency)`.
- Full-day backup uses 24 hours and design-day energy; night mode uses a 12-hour night and each appliance's entered night-energy share. PV always covers the full design day. Additional autonomy increases storage only; recovery after multiple sunless days needs a separate charging analysis.
- LFP defaults: 51.2V, 100Ah or 200Ah, 80% DoD, 95% discharge efficiency, 90% round trip. Lead defaults: 12V/200Ah, four per 48V group, 50% DoD, 85% discharge efficiency, 80% round trip. These are editable design choices via battery selection, not manufacturer claims. Lead-acid rate/temperature/aging effects are not simulated.
- Panel units and complete battery groups are rounded up. Battery count is energy-based. Nominal-voltage continuous and start-current estimates are shown for BMS verification; lower voltage requires higher current. No automatic compatibility, conductor, protection, MPPT voltage-window or PV-string sizing is claimed.
- Peak sun hours default to 5 as an explicit placeholder, not a Yemen location measurement. Location is quote context only. Use site/worst-season irradiation and datasheets before procurement.

## Example

The supplied household is represented without personal contact data. Assumptions include TV 5h; refrigerator 120W running, 24h with 40% duty and ×5 start; 8 lamps ×12W ×6h; 5 chargers ×10W ×2h; laptop 65W ×4h; washer 500W without heating ×1.5h every four days; blender 400W ×5min every three days. The original refrigerator's “peak” wording requires clarification and the washer's 8kg capacity does not determine watts.

With the default settings: average 2.5366kWh/day, design 3.1213kWh/day, 3 ×550W panels, nominal storage requirement 6.2339kWh rounded to 2 ×5.12kWh modules, inverter class 2kW subject to at least 2.0016kVA continuous and 3.9513kVA start capability. These results change with confirmed inputs.

## References and validation

General design principles: [Victron system design](https://www.victronenergy.com/media/pg/Energy_Storage_System/en/system-design.html). PV loss separation/modeling: [NREL PVWatts manual](https://www.nrel.gov/docs/fy14osti/62641.pdf). This calculator is not PVWatts and does not use its location/weather model or imply its loss defaults are universal.

Run `npm run test:solar` with Node 22.18+ (native TypeScript stripping). The independent calculation module is tested for units, intermittent loads, design-day vs average demand, duty cycles, surge and PF, night/full-day autonomy, complete battery groups, loss sensitivity, invalid inputs, and quote content. Production validation: `npm run build`; type check: `npx tsc --noEmit`.
