# Pumped — SideStore source

Public distribution for [Pumped](https://github.com/rodrigosous-a/pumped), a workout tracker.

Builds here are **unsigned IPAs**. SideStore re-signs them on your device with your own Apple ID — nothing is signed by a shared certificate and no TestFlight invite is needed.

## What Pumped does

Pumped is a gym log for people who lift to a plan. You build workout templates, run them in the gym, and the app keeps the record.

- **Log a workout as you train.** Pick a template or start empty, then log each set — weight, reps, set type (warm-up, working, drop, failure). Weights and reps pre-fill from the last time you did the exercise, so most sets are two taps. A rest timer starts when you finish a set, and plate math tells you what to load on the bar.
- **Templates and an exercise library.** Save a workout once, reuse it forever. Exercises are shared across the app and filterable by body part, and each one can have alternatives defined for when a machine is taken.
- **Splits and a schedule.** Set up a weekly split (Monday = Push, and so on) or a rolling one that just advances to the next day whenever you train. The home screen tells you what today's workout is; the schedule view shows planned and completed sessions on a calendar or timeline.
- **Progress and PRs.** Per-exercise history with weight and volume charts, plus automatic PR detection — you get a celebration on the spot when you beat a previous best.
- **Goals, streaks, achievements.** Weekly targets for workouts, volume, or time; a streak that warns you before it breaks; 20 achievements to collect.
- **Body stats.** Log weight and measurements over time and see the trend.
- **Social, if you want it.** Follow other lifters, see their finished workouts in a feed, and import their public templates with attribution. Profiles are private by default.

Everything is kg in the database and converted to lbs on display if that's your preference. An active workout lives on your device and only syncs when you hit Finish, so bad gym Wi-Fi can't cost you a session — and if the app is killed mid-workout, it picks up where you left off.

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
- **Apple Health sync is disabled** in these builds — it needs an entitlement a free Apple developer account can't provision. Everything else works.
- **Live Activities aren't in Beta.** Not a signing limit: a Live Activity needs a widget extension, and every extension costs one of your three app slots. Beta stays at a single slot so you keep room for other sideloaded apps.

## Updates

SideStore checks the source for new versions. When one appears, refresh from inside SideStore — it installs over the existing app and keeps your data.

New versions can take up to five minutes to show up — the source files are served through a cache. If SideStore still shows the old version, pull to refresh the source.

**[CHANGELOG.md](CHANGELOG.md)** lists every build ever published here, newest first: what changed, when, and on which channel. Nightly keeps only its latest download, so that file is the only lasting record of what the older builds were.

## Files

| File | What it is |
| --- | --- |
| `CHANGELOG.md` | Every build published here, newest first. Appended by the publish script. |
| `source.json` | AltSource v2 feed for the Beta channel. This is the one to add. |
| `nightly.json` | Nightly channel. Unstable owner builds; not meant for general use. |
| `channels.json` | Source of truth for both feeds. Written by the publish script. |
| `scripts/generate-source.js` | Regenerates `source.json` and `nightly.json` from `channels.json`. |

`source.json` and `nightly.json` are generated — edit `channels.json` and re-run the generator instead.
