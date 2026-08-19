#!/usr/bin/env python3
"""Parse the scraped Asr Al-Shams homepage JSON and extract clean content."""
import json
import re
from pathlib import Path
from html.parser import HTMLParser

SRC = Path("/home/z/my-project/scripts/aseralshams_home.json")
OUT_TXT = Path("/home/z/my-project/scripts/asr_content.txt")
OUT_LINKS = Path("/home/z/my-project/scripts/asr_links.txt")
OUT_IMG = Path("/home/z/my-project/scripts/asr_images.txt")

with SRC.open("r", encoding="utf-8") as f:
    payload = json.load(f)

data = payload.get("data", {})
title = data.get("title", "")
description = data.get("description", "")
url = data.get("url", "")
html = data.get("html", "")

print(f"TITLE: {title}")
print(f"URL: {url}")
print(f"DESCRIPTION length: {len(description)}")
print(f"HTML length: {len(html)}")

# Extract all text content
class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts: list[str] = []
        self._skip = 0
    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "noscript"):
            self._skip += 1
    def handle_endtag(self, tag):
        if tag in ("script", "style", "noscript") and self._skip > 0:
            self._skip -= 1
    def handle_data(self, data):
        if self._skip == 0:
            txt = data.strip()
            if txt:
                self.parts.append(txt)

p = TextExtractor()
p.feed(html)
text_parts = p.parts

with OUT_TXT.open("w", encoding="utf-8") as f:
    f.write(f"=== TITLE ===\n{title}\n\n")
    f.write(f"=== URL ===\n{url}\n\n")
    f.write(f"=== DESCRIPTION ===\n{description}\n\n")
    f.write(f"=== TEXT CONTENT ({len(text_parts)} blocks) ===\n\n")
    for part in text_parts:
        f.write(part + "\n")

# Extract links
links = re.findall(r'href=["\']([^"\']+)["\']', html)
links = sorted(set(links))
with OUT_LINKS.open("w", encoding="utf-8") as f:
    for l in links:
        f.write(l + "\n")

# Extract images
imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
imgs = sorted(set(imgs))
with OUT_IMG.open("w", encoding="utf-8") as f:
    for i in imgs:
        f.write(i + "\n")

print(f"Wrote {OUT_TXT} ({len(text_parts)} text blocks)")
print(f"Wrote {OUT_LINKS} ({len(links)} links)")
print(f"Wrote {OUT_IMG} ({len(imgs)} images)")

# Print first chunk of text to inspect
print("\n--- First 4000 chars of text ---")
print("\n".join(text_parts)[:4000])
