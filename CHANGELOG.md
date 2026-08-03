# Pumped release history

Every build ever published to this source, newest first. Nightly keeps only its
latest download, so a version listed here may no longer be installable -- it is
still spent, and never reused.

Written by `scripts/publish-sideload.sh` in the app repo. Do not edit by hand.

<!-- nightly-1.4.0-202608030841 -->
## 1.4.0 — nightly — 2026-08-03

Build 202608030841 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.4.0-202608030841/Pumped-nightly-1.4.0-202608030841.ipa)

## 1.4.0 — 2026-08-03

Your exercises and your workouts are yours again, and other people are findable
again. **Run `supabase/migrations/037_private_exercise_library.sql` before
installing this build** — it is the whole fix for the first three bullets, and
the app changes on their own only hide the leak from the app.

- Everyone's custom exercises were pooled into one library, so exercises you
  created showed up in other people's pickers and theirs showed up in yours. The
  library is now private to whoever created it. Exercise names still appear
  alongside a workout you are allowed to see — the feed and a public profile's
  history would otherwise read "Unknown Exercise" — but nobody can browse or
  search your library, and an exercise you have never performed is yours alone.
- Workout templates were readable by anyone holding the app's public key, your
  own private ones included, and the Library and split pickers listed other
  users' workouts as if they were yours. Templates are back to owner-only, and
  the app now filters by owner as well as trusting the database to.
- Nobody was discoverable: new profiles were created private, so search came
  back empty and your followers list dropped everyone in it. Profiles are public
  by default now and existing profiles have been switched over — you can still
  go private from Profile → Public profile. Viewing someone else's followers or
  following list also returned nothing at all and reported a count of zero;
  both work now.
- A public profile means other signed-in people can see your workouts. It no
  longer means anyone at all can: workout, set and session history is now
  restricted to signed-in users.
- Picking a workout for a day of a split cut the name off if it was longer than
  the row, taking the chevron with it. An unfilled slot in a rolling split also
  read "Rest Day" when it was not one — it now says "Select workout".
- Workouts in the split picker and in the Library show when they were created or
  last edited, so two workouts both called "Push" can be told apart. Editing a
  split now resolves the names of archived workouts instead of showing
  "Unknown".
- Plans can be archived by swiping a row in the Library, the same as workouts.
  The Plans tab already had an "Archived" toggle but the only way to put a plan
  behind it was the plan's own edit screen. Archiving the active plan now
  deactivates it rather than leaving it scheduling workouts while hidden.
- Exercise names are no longer globally unique: two people can each have a
  "Lateral Raise" without the second one failing to save.

<!-- nightly-1.3.3-202607311231 -->
## 1.3.3 — nightly — 2026-07-31

Build 202607311231 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.3.3-202607311231/Pumped-nightly-1.3.3-202607311231.ipa)

Exporting a completed workout now produces a log of what you lifted rather than a plan of what you meant to.

- Sharing a past workout reported numbers nobody performed: no weights at all, reps averaged across sets, and a set count that excluded warmups and any set entered but not ticked complete. Only the first set's type was shown, for the whole exercise.
- The export now lists every set with its weight and reps, its set type by name, and the rest taken after it — plus work time where recorded, and per-exercise and per-session totals. Dropsets keep their ladder (80→60→40 kg x 8→6→5), rest-pause sets their clusters (x 10+4+3), and skipped sets and exercises stay visible as skipped.
- Rest that predates set timing reads "rest not recorded" rather than 0:00.
- Total Weight on a past workout counted a rest-pause set as zero volume.
- The post-workout share post no longer lists a skipped exercise as "0 sets".


---

## Before this file

Reconstructed on 2026-07-31 from this repo's commit history, which is the only
surviving record of these builds — their downloads are gone, since nightly
keeps one. Early nightlies rebuilt the same version several times; the rule that
a version is spent once published came later.

| Version | Channel | Date | Build | What it was |
| --- | --- | --- | --- | --- |
| 1.3.2 | nightly | 2026-07-31 | 202607311219 | The workout-export rewrite, published before the number was recorded. Reissued as 1.3.3. |
| 1.3.1 | nightly | 2026-07-31 | 202607311013 | A rolling split's rest day ends when the day does, instead of parking there forever. Needs migration `035`. |
| 1.3.0 | nightly | 2026-07-31 | 202607310913 | Past workouts show what the post-workout summary shows; per-set work and rest time saved. Needs migration `034`. |
| 1.2.3 | nightly | 2026-07-30 | 202607301936 | Live Activities restored in nightly; starting a workout from Pump works again; rest timer bar stops disappearing. |
| 1.2.2 | nightly | 2026-07-29 | 202607291526 | Fixes the 1.2.1 tab bar, where the pill shrank and the tabs drew on top of each other. |
| 1.2.1 | nightly | 2026-07-29 | 202607291450 | Liquid glass tab pill on iOS 26, even bar margins, honest rest days on Home. |
| 1.2.0 | beta | 2026-07-29 | 202607291136 | Nav, Home, Training, muscle taxonomy and Library refactor. Needs migrations `031`–`033`. |
| 1.2.0 | nightly | 2026-07-29 | 202607291131 | Same, on nightly. |
| 1.1.0 | nightly | 2026-07-29 | 202607291117 | SideStore distribution: beta and nightly channels. |
| 1.1.0 | nightly | 2026-07-28 | 202607282052 | Rebuild. |
| 1.0.0 | nightly | 2026-07-28 | 202607282030 | Rebuild. |
| 1.0.0 | beta | 2026-07-28 | 202607282019 | First public beta of Pumped. |
| 1.0.0 | nightly | 2026-07-28 | 202607282002 | Rebuild. |
| 1.0.0 | nightly | 2026-07-28 | 202607281953 | First sideload build. |
