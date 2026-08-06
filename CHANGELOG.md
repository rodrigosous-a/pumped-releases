# Pumped release history

Every build ever published to this source, newest first. Nightly keeps only its
latest download, so a version listed here may no longer be installable -- it is
still spent, and never reused.

Written by `scripts/publish-sideload.sh` in the app repo. Do not edit by hand.

<!-- nightly-1.9.2-202608060900 -->
## 1.9.2 — nightly — 2026-08-06

Build 202608060900 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.2-202608060900/Pumped-nightly-1.9.2-202608060900.ipa)

Keyboards, mostly: pick any emoji your phone has for a journal item, see what
you are typing, and close a keyboard that will not go away.

**Improved**
- Adding your own journal item no longer limits you to the 32 icons we happened
  to think of. Tap the icon and your own keyboard opens — pick any emoji your
  phone has, flags and skin tones included.
- Writing a note in the journal used to happen behind the keyboard. Sheets now
  ride above the keyboard instead of under it, so you can see what you are
  typing — in the journal and everywhere else a sheet asks for text.

**Fixed**
- A keyboard could get stuck on screen with no way to close it, most visibly on
  the sign-in screen and on number pads, which have no return key. Every
  keyboard now has a chevron in the corner that closes it.

<!-- nightly-1.9.1-202608060826 -->
## 1.9.1 — nightly — 2026-08-06

Build 202608060826 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.1-202608060826/Pumped-nightly-1.9.1-202608060826.ipa)

**Improved**
- The rest timer used to vanish the instant it hit zero, so glancing down a
  second late told you nothing — had the rest just ended, or had you been
  standing around for two minutes? The bar now stays put at 0:00, labelled
  "Rest complete", until you tap Done or open the next set. +15 from there gives
  you a fresh fifteen seconds if you want a little more.

<!-- nightly-1.9.0-202608052159 -->
## 1.9.0 — nightly — 2026-08-05

Build 202608052159 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.0-202608052159/Pumped-nightly-1.9.0-202608052159.ipa)

Pumped nightly 1.9.0 (202608052159)

<!-- nightly-1.8.3-202608052105 -->
## 1.8.3 — nightly — 2026-08-05

Build 202608052105 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.8.3-202608052105/Pumped-nightly-1.8.3-202608052105.ipa)

**New**
- Your weekly snapshot is back on Home: workouts, time trained and weight
  moved, each against last week. Tap it to open Training.

**Changed**
- The activity rings are hidden for now. Two of their three metrics work, but
  they were built around step counts and a sideloaded build can't get Apple
  Health access. They return when it can.

<!-- nightly-1.8.2-202608051350 -->
## 1.8.2 — nightly — 2026-08-05

Build 202608051350 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.8.2-202608051350/Pumped-nightly-1.8.2-202608051350.ipa)

**Fixed**
- Tapping the activity rings on Home did nothing. The rings themselves were
  swallowing the tap. They open the Activity screen now, and there's a chevron
  so it's clear they're tappable.
- Apple Health is confirmed unavailable on sideloaded builds — iOS never grants
  the permission, so the steps ring stays hidden and the app no longer waits on
  it.

<!-- nightly-1.8.1-202608051204 -->
## 1.8.1 — nightly — 2026-08-05

Build 202608051204 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.8.1-202608051204/Pumped-nightly-1.8.1-202608051204.ipa)

**Fixed**
- The steps ring sat empty on Home because this build can't reach Apple Health.
  It is hidden until Health works, so the rings show what they can actually
  measure. When Health connects, steps come back as the outer ring.
- The Activity screen now says why Health is unavailable instead of leaving a
  blank ring unexplained.

<!-- nightly-1.8.0-202608051107 -->
## 1.8.0 — nightly — 2026-08-05

Build 202608051107 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.8.0-202608051107/Pumped-nightly-1.8.0-202608051107.ipa)

**Run `supabase/migrations/038_daily_activity_goals.sql` before installing.**
It widens the goals table so daily targets can live in it, and seeds sensible
ones. Without it the rings still draw, but changing a goal fails to save.

- Home leads with activity rings. Three of them: steps outermost, workout
  minutes, then cardio. Swipe the card sideways for the week's totals, or tap
  it for the last 30 days as a strip of rings you can scroll back through and
  tap to inspect — and for the goals themselves, which you set right there
  with + and −.
- **A rest day has no workout target.** Its ring is drawn empty and neutral
  rather than as 0% of something, so a day you were never meant to train does
  not read as a day you missed.
- The three "This week" tiles are gone; the rings and their second page
  replace them.
- Steps need Apple Health, which the sideload build still cannot ask for — the
  steps ring says "No data" rather than zero, and workout and cardio work
  regardless.
- Apple Health, when it does connect, now reports the week's steps, the daily
  average and a streak. Those three have been declared in the code since it
  was written and never once filled in.

- Groundwork for Apple Health on the nightly build, plus everything below that
  has not shipped yet. Health itself is **not** connected: the build now
  declares what it would read and the module is linked again, but these builds
  are packaged unsigned and that strips the entitlement Health needs, so it
  cannot ask for access yet. If a Health prompt does appear on first launch,
  tell me — it would mean SideStore grants more than expected.

- A past workout's date and duration line up with its title instead of sitting
  centred under it.

- A past workout showed its name twice — once in the bar, once again below it.
  The bar's copy now behaves like the rest of the app: the name starts large
  under the bar and shrinks into it as you scroll past. Edit, share and delete
  moved into the bar with it.
- Your profile has a back arrow. It was pushed from Home with no way out but
  the tab bar.

- The activity calendar on Training is readable now. Days were dark red
  squares with a 9pt number crammed inside, and one workout looked much like
  three. They are pills on a ramp of three distinct colours — lime for one
  activity, green for two, teal for three or more — with the count spelled out
  underneath instead of a cryptic "1 2 3+". Today is outlined in blue. The
  numbers are gone: at seven columns to half a screen there was never room to
  read them, and the calendar drawer is where you go for a specific date.

- Feed cards are tighter: smaller type throughout, a smaller avatar, and the
  PR count moved up next to your name as a chip. Three fit on screen where two
  did.

- Feed cards are one layout for everything, built around what you called the
  session. A strength workout shows "Lower"; a cardio one shows "Stairs" — the
  name you picked, not the category. Under it, four columns: Type, Working
  sets, Weight moved and Time for a workout; Type, whatever the activity
  recorded, and Time for cardio. The chip takes the colour you gave the
  workout, so a Push and a Pull are told apart at a glance.

- Today's workout is a chip under the date instead of a card taking up a third
  of the screen above your week. Same three states — tap it to start, tap it to
  review what you did, or see that today is a rest day — just the name, no
  card.

- The large title on Home, Training, Library and Pump did not move when you
  scrolled. It sat over the content instead of shrinking into the bar, and
  whatever you scrolled slid across it, unblurred and up over the clock. All
  four collapse properly now, with content dimming as it passes underneath.

- Launching no longer flashes black. The splash used to disappear almost
  immediately and leave you on a black screen for over a second while the app
  worked out who you were and drew the first screen; now it stays up until
  there is a screen to hand over to, and cross-fades into it. Measured on a
  release build: 1.2s of black before, about 0.2s after, and that is inside
  the fade.
- Timers, and every other number that ticks, no longer jitter as the digits
  change. They were set in a typewriter face to hold their width — they now
  use the system font with fixed-width figures, the way Clock and Fitness do,
  so they match the rest of the app.

- Library has the same navigation bar as the rest of the app now, so all three
  tabs match. Its search is the system's own search field rather than a text
  box drawn in the page: it sits under the title, hides as you scroll, and has
  a Cancel button. The Exercises/Workouts/Plans picker and the muscle filter
  scroll with the list instead of being pinned.

<!-- nightly-1.7.0-202608051025 -->
## 1.7.0 — nightly — 2026-08-05

Build 202608051025 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.7.0-202608051025/Pumped-nightly-1.7.0-202608051025.ipa)

- Groundwork for Apple Health on the nightly build, plus everything below that
  has not shipped yet. Health itself is **not** connected: the build now
  declares what it would read and the module is linked again, but these builds
  are packaged unsigned and that strips the entitlement Health needs, so it
  cannot ask for access yet. If a Health prompt does appear on first launch,
  tell me — it would mean SideStore grants more than expected.

- A past workout's date and duration line up with its title instead of sitting
  centred under it.

- A past workout showed its name twice — once in the bar, once again below it.
  The bar's copy now behaves like the rest of the app: the name starts large
  under the bar and shrinks into it as you scroll past. Edit, share and delete
  moved into the bar with it.
- Your profile has a back arrow. It was pushed from Home with no way out but
  the tab bar.

- The activity calendar on Training is readable now. Days were dark red
  squares with a 9pt number crammed inside, and one workout looked much like
  three. They are pills on a ramp of three distinct colours — lime for one
  activity, green for two, teal for three or more — with the count spelled out
  underneath instead of a cryptic "1 2 3+". Today is outlined in blue. The
  numbers are gone: at seven columns to half a screen there was never room to
  read them, and the calendar drawer is where you go for a specific date.

- Feed cards are tighter: smaller type throughout, a smaller avatar, and the
  PR count moved up next to your name as a chip. Three fit on screen where two
  did.

- Feed cards are one layout for everything, built around what you called the
  session. A strength workout shows "Lower"; a cardio one shows "Stairs" — the
  name you picked, not the category. Under it, four columns: Type, Working
  sets, Weight moved and Time for a workout; Type, whatever the activity
  recorded, and Time for cardio. The chip takes the colour you gave the
  workout, so a Push and a Pull are told apart at a glance.

- Today's workout is a chip under the date instead of a card taking up a third
  of the screen above your week. Same three states — tap it to start, tap it to
  review what you did, or see that today is a rest day — just the name, no
  card.

- The large title on Home, Training, Library and Pump did not move when you
  scrolled. It sat over the content instead of shrinking into the bar, and
  whatever you scrolled slid across it, unblurred and up over the clock. All
  four collapse properly now, with content dimming as it passes underneath.

- Launching no longer flashes black. The splash used to disappear almost
  immediately and leave you on a black screen for over a second while the app
  worked out who you were and drew the first screen; now it stays up until
  there is a screen to hand over to, and cross-fades into it. Measured on a
  release build: 1.2s of black before, about 0.2s after, and that is inside
  the fade.
- Timers, and every other number that ticks, no longer jitter as the digits
  change. They were set in a typewriter face to hold their width — they now
  use the system font with fixed-width figures, the way Clock and Fitness do,
  so they match the rest of the app.

- Library has the same navigation bar as the rest of the app now, so all three
  tabs match. Its search is the system's own search field rather than a text
  box drawn in the page: it sits under the title, hides as you scroll, and has
  a Cancel button. The Exercises/Workouts/Plans picker and the muscle filter
  scroll with the list instead of being pinned.

<!-- nightly-1.6.0-202608041511 -->
## 1.6.0 — nightly — 2026-08-04

Build 202608041511 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.6.0-202608041511/Pumped-nightly-1.6.0-202608041511.ipa)

- The tab bar is now the real iOS one instead of a drawing of one. It shrinks
  out of the way as you scroll down and comes back as you scroll up, it grows
  with your text size, and VoiceOver reads it as a tab bar.
- Pump is a tab now rather than a circle beside the bar, and it carries a dot
  when a workout is in progress. A tab bar cannot lay out a detached shape, so
  this is the trade the native bar asked for.
- Home and Training use the real navigation bar too. The title starts large and
  shrinks into the bar as you scroll, and content blurs underneath it rather
  than stopping at its edge. On Home the calendar moved into the bar on the
  left, because a native title is not something you can tap.
- A workout's personal records were a row of chips that spilled onto a third
  line and ended in "+3 PRs". It is one line with a medal and a count now; the
  exercises that earned them are still on the workout itself.
- Library still has the old hand-drawn header; it is next.

- The same workout reported a different number of working sets depending on
  where you looked at it. Home, the calendar and Training counted every set
  that wasn't a warm-up; a public profile, a past workout's detail screen and
  the text you get from exporting a workout counted only sets labelled
  "Working", so backoff, dropset, myo-reps, rest-pause and partial sets
  vanished from the total. There is one rule now, and it is the generous one.
  The export was the worst of the three, because the wrong number left the app.
- A public profile's Weight moved was too high: it added up sets you had
  skipped.
- Opening your own profile from a feed or a search result navigated away
  mid-render, which could leave the screen blank.

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
