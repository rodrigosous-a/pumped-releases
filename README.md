# Pumped — SideStore source

Public distribution for [Pumped](https://github.com/rodrigosous-a/pumped), a workout tracker.

Builds here are **unsigned IPAs**. SideStore re-signs them on your device with your own Apple ID — nothing is signed by a shared certificate and no TestFlight invite is needed.

## Install

1. Install [SideStore](https://sidestore.io) and pair it with your device.
2. Add the Pumped source:

   **[Add to SideStore](sidestore://source?url=https://raw.githubusercontent.com/rodrigosous-a/pumped-releases/main/source.json)**

   If the link doesn't open, add this URL manually in SideStore → Sources → +:

   ```
   https://raw.githubusercontent.com/rodrigosous-a/pumped-releases/main/source.json
   ```

3. Open the source and install **Pumped Beta**.

## Things to know

- **Free Apple accounts sign for 7 days.** Refresh Pumped in SideStore before the signature expires or the app stops opening. Your workout data is untouched by a refresh.
- **Free accounts allow 3 sideloaded apps at a time.** SideStore itself uses one slot, so you have two left.
- **Free accounts allow 10 new App IDs per week.** Installing Pumped for the first time uses one; refreshing does not.
- **Apple Health sync and Live Activities are disabled** in these builds. Both require entitlements a free Apple developer account can't provision. Everything else works.

## Updates

SideStore checks the source for new versions. When one appears, refresh from inside SideStore — it installs over the existing app and keeps your data.

## Files

| File | What it is |
| --- | --- |
| `source.json` | AltSource v2 feed for the Beta channel. This is the one to add. |
| `nightly.json` | Nightly channel. Unstable owner builds; not meant for general use. |
| `channels.json` | Source of truth for both feeds. Written by the publish script. |
| `scripts/generate-source.js` | Regenerates `source.json` and `nightly.json` from `channels.json`. |

`source.json` and `nightly.json` are generated — edit `channels.json` and re-run the generator instead.
