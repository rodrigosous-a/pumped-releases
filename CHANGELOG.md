# Pumped release history

Every build ever published to this source, newest first. Nightly keeps only its
latest download, so a version listed here may no longer be installable -- it is
still spent, and never reused.

Written by `scripts/publish-sideload.sh` in the app repo. Do not edit by hand.

<!-- nightly-1.21.0-202609301926 -->
## 1.21.0 — nightly — 2026-09-30

Build 202609301926 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.21.0-202609301926/Pumped-nightly-1.21.0-202609301926.ipa)

A redesign. A + beside the tab bar starts anything in one tap, Home opens
on what to do today, Training becomes a short overview, and every editor now
works the same way.

### New

- The Pump tab is now a + beside the tab bar. It opens a menu with your
  split's next workout ready to start, and four other ways in: Custom, Split
  workout, Cardio session and All templates. While a session is running, the
  menu offers to resume it instead.
- Split workout lists every day of your split, so you can train any of them
  today. The one that's due is marked.
- Cardio session opens a grid of the six cardio types.
- All templates is searchable and marks the templates in your split.

- Home is redesigned. It opens on today: your split's next workout, ready to
  start in one tap (or the session in progress, today's finished workout and
  what's next, or a rest day). Below it, this week as a row of days with your
  weekly goal, then today's journal at a glance, then activity.
- Activity cards lead with the workout's name and show time, volume and sets,
  plus the first exercises you trained.

- Training is redesigned as an overview. One timeframe (4 weeks, 3 months or
  12 months) drives the whole screen: a chart of volume, time or workouts
  with the change against the period before, then workouts, average session,
  records and your week streak. Below, compact cards for the muscles you've
  trained, your top lifts, 13 weeks of consistency, and your latest sessions.
  Each opens its full view, and your history now has its own screen under
  "See all".

- Creating and editing templates, exercises, splits and cardio is
  redesigned around one pattern. The name comes first; details are rows you
  tap; each item in a list has a single ⋯ menu with everything you can do to
  it; rarer actions like archive, export and delete sit in the ⋯ at the top.
- Add several exercises to a template at once: tick them, then Add. New
  exercises can be created without leaving the list.
- An exercise card in a template shows its sets, reps and rest as chips. Tap
  them to change everything for that exercise in one place. Supersets are
  joined by a coloured line.
- Logging and editing cardio use the same form, and the type can be changed
  when editing.
- Split days are one list you tap to pick a template or a rest day. Days in a
  rolling split can now be reordered.

### Improved

- Every editor asks before throwing away unsaved changes.
- Saving or cancelling an edit returns you to where you started, instead of
  the Library or Home.
- Empty workout is now called Custom workout.
- "Start a workout" buttons across the app open the new menu.
- Buttons and list row titles now use SF Rounded too, to match the headings.
  Body text stays in SF Pro.

### Fixed

- Editing a cardio session more than 30 days old no longer moves it to today.
- Changing only a template's progression setting now counts as an unsaved
  change.

<!-- nightly-1.20.0-202609301503 -->
## 1.20.0 — nightly — 2026-09-30

Build 202609301503 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.20.0-202609301503/Pumped-nightly-1.20.0-202609301503.ipa)

A new look: neutral greys in place of black and blue-tinted greys, tighter
corners, and rounded headings.

### Improved

- The app's background is now a soft dark grey instead of pure black, and
  cards, fills and dividers are neutral greys with no blue tint. Secondary
  text is a little lighter, so it reads more easily.
- Corners are tighter: cards and buttons are slightly less rounded, and chips
  and input fields are nearly square.
- The search fields and the Exercises / Templates / Splits switch now use the
  same greys as the rest of the app.
- Working sets have their own colour, a muted navy, wherever set types are
  shown in colour.
- The five template colours are refreshed and a little richer, and the colour
  picker shows exactly the colour the feed uses.
- Headings use SF Rounded: screen titles, sheet titles, profile names, the
  session name and today's workout. Body text stays in SF Pro.

<!-- nightly-1.19.1-202609301255 -->
## 1.19.1 — nightly — 2026-09-30

Build 202609301255 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.19.1-202609301255/Pumped-nightly-1.19.1-202609301255.ipa)

Fixes for the live workout and for past sessions: cardio can be logged again,
adding an exercise and opening a session no longer freeze, and the exercise
card is simpler.

### Fixed

- Add cardio opened as an empty sheet, so a cardio session couldn't be logged.
  The form is back. The same fault pushed the content of other sheets down
  the screen: the calendar, adding a body measurement, setting a goal,
  logging a past workout, and the split and template editors.
- Adding an exercise mid-workout, after logging a set, could flash the "Where
  should it go?" menu and then leave the screen unresponsive. The menu now
  stays until you choose, and the workout carries on.
- Skipping a set no longer leaves its exercise marked as the one you're on.
  The highlighted card, the jump button and the Live Activity move on to the
  next exercise, and the Live Activity's set count leaves skipped sets out.
- Discarding a workout now ends its rest timer too, instead of leaving it on
  screen.
- Opening a past session could get stuck on the loading placeholder and stop
  responding. It now opens every time.
- On a past session, the total volume no longer runs into the body figure
  beside it. A large number shrinks to fit.

### Improved

- Each exercise card during a workout is simpler. What you did last time is a
  full-width button under the name, such as "3 days ago  80 kg × 8, 8, 7",
  and tapping it opens History. An exercise you've never done says "No
  history". History and Add set have moved from the bottom of the card into
  its ••• menu.
- When a rest runs out, the timer keeps going and counts the time over it,
  such as "−0:15", until you tap Done or log your next set. The Live Activity
  still stops at 0:00.

<!-- nightly-1.19.0-202609281543 -->
## 1.19.0 — nightly — 2026-09-28

Build 202609281543 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.19.0-202609281543/Pumped-nightly-1.19.0-202609281543.ipa)

Logging a set is quicker: weight and reps sit in one sheet, the last session
is on every exercise card, and the workout screen tells you where you are.

### New

- During a workout, an exercise you have done before shows what you did last
  time in a pill under its name, such as "4 days ago  80 kg × 8, 8, 7". Tap it
  to open that exercise's History. An exercise you are doing for the first
  time shows no pill.
- The rest you took between two exercises now shows between their cards, from
  the last set of one to the first set of the next.
- When you scroll away from the exercise you are on, a button with its name
  appears at the bottom of the screen. Tap it to jump back.

### Improved

- Weight and reps for a set are now one sheet with a tab for each, so you can
  change both without closing it. A timed set gets Weight and Time. One button
  sets both.
- Exercises in a workout and in the template editor now move with up and down
  arrows. The drag handle, which lagged and could drop an exercise in the
  wrong place, is gone.
- Adding an exercise mid-workout asks where it should go: up next, after the
  exercise you were just doing, or at the end. Before your first logged set
  it goes straight to the end.

### Fixed

- The back button at the top of a workout works again. With nothing to go back
  to, it takes you Home.
- On Home, tapping today's workout opens it ready to start, the same as on
  Pump, instead of taking you to Training. Once it's done, tapping it opens that
  session.

<!-- nightly-1.18.2-202609281515 -->
## 1.18.2 — nightly — 2026-09-28

Build 202609281515 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.18.2-202609281515/Pumped-nightly-1.18.2-202609281515.ipa)

A session whose template you edited mid-workout saves again.

### Fixed

- Finishing a session no longer fails when its template was edited or deleted
  while you were training. The sets save; the session just stops pointing at
  the old version of the template.
- A session that won't save no longer tells you to check your connection when
  the connection is fine. It only says that when the network is the problem.

<!-- nightly-1.18.1-202609271343 -->
## 1.18.1 — nightly — 2026-09-27

Build 202609271343 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.18.1-202609271343/Pumped-nightly-1.18.1-202609271343.ipa)

### Improved

- The muscle figure is the same body everywhere. The muscle map no longer has
  a Male / Female switch, and the figure on templates, the summary and History
  always matches it.
- The muscle map, Strength by muscle group and the activity summary can show
  the last 7 days, alongside 30 days, 3, 6 and 12 months.

<!-- nightly-1.18.0-202609271147 -->
## 1.18.0 — nightly — 2026-09-27

Build 202609271147 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.18.0-202609271147/Pumped-nightly-1.18.0-202609271147.ipa)

Fixes from a first week with 1.17: dark title bars everywhere, a session screen
that stays put, every PR you set on the summary, and smoother scrolling. Plus
the muscles a template works, alternatives that put the same muscles first, and
History on every exercise in a session.

### New

- A template shows the muscles it works on the muscle figure, front and back:
  the main muscles bright, the ones they assist fainter. It sits under Muscles
  worked on the template's page (the heading that used to say Muscle groups),
  and appears while you build or edit a template as soon as it has an
  exercise.

### Improved

- Each exercise in a session now ends with History and Add set. History opens
  with your last session of that exercise, set by set, above its records and
  past sessions. The "Last" line under the sets is gone.
- Notes on an exercise are under its ••• menu, as Add note or Edit note. A
  note you have written still shows on the card, and tapping it edits it.
- Tapping the tick on a logged set takes the tick off and keeps its weight and
  reps (or its hold), so one more tap logs it again. Clear logged values in the
  set's menu still empties it. Un-ticking the set you logged last also stops
  its rest timer.
- When you add an alternative to an exercise in a template, or browse for a
  swap during a session, exercises that work the same muscles come first under
  Works the same muscles, each marked Same primary muscle or Shares a muscle.
  Everything else follows under All exercises, and favourites still lead
  within each group.
- Swipe actions on a row are all the same width.

### Fixed

- Title bars are dark everywhere again: no white bar while a screen loads, on
  Goals and the other secondary screens, on sheets, or during a session.
- Swiping right no longer takes you out of a session. Leave with the back
  button, or Home when there is nothing to go back to.
- The summary lists every PR from the session, even if you left the session
  screen or the app restarted along the way. Each exercise shows its best
  weight, volume and rep record from the session once, and logging the same
  record twice celebrates it once.
- Scrolling should feel smoother in Home, Training, the Library and the
  Journal. A card no longer shrinks under your thumb when a scroll starts on
  it, and long lists do less work as they load more.
- Browsing for a swap no longer lists the exercise you are swapping out. After
  a swap, the original stays in the list so you can swap back.
- The set editor's Last line reads the way History does: "80 kg" for a set
  with no reps rather than "80kg × 0", and a timed set shows its hold.
- Last-session figures, and the values filled in from them, only ever come
  from your own sessions.

<!-- nightly-1.17.0-202609262241 -->
## 1.17.0 — nightly — 2026-09-26

Build 202609262241 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.17.0-202609262241/Pumped-nightly-1.17.0-202609262241.ipa)

The whole app moves onto one design language: native title bars and sheets on
every screen, numbers as the centrepiece, the accent kept for what is live,
happening now or a record, and the same cards, lists, empty states and copy
everywhere. Along the way the app got faster to open and scroll, and picked up
month paging in the calendar, session swiping and sharing in history, quick
actions on the app icon, pull to refresh, and a Library that can favourite,
duplicate and edit in place.

### New

- Duplicate a template from its long-press menu in the Library. The copy is
  named "… copy" and keeps its exercises, alternatives, supersets, rest times
  and progression. Notes on its exercises are not copied.
- Tap a day on Training's activity grid to open the calendar on that day.
- Swipe between months in the calendar, up to a year either way.
- A muscle figure now appears faintly behind Training's title and above the
  empty exercise screens. On the workout summary and in history it sits
  behind the big number, with the session's main muscles lit.
- Swipe left or right on a finished session to open the next or previous
  one. On someone else's session, the swipe stays in their history.
- Share a session's summary as an image: the headline number, durations,
  strain, totals and records. The full text version is under Share as text
  in the ••• menu.
- Press and hold the app icon to start an empty workout (or resume the
  session in progress), log body stats, open the Journal or find people.
- Date a body stats entry, for measurements taken on another day.
- Editing a weekly split, switch training days on and off from a strip of
  weekdays, then give every training day the same template in one go with
  Apply to all training days.

### Improved

- A new look for the whole app: the greys are cooler and consistent from
  screen to screen, cards and sheets have softer, matching corners, and every
  sheet has the same rounded top.
- Numbers now use a rounded typeface with even-width digits: the workout
  clock, the rest countdown, weights and reps in the set editor, and the
  totals on the workout summary.
- Every icon in the app is now a native iOS symbol, at three consistent
  sizes.
- Set types have a new, easier-to-tell-apart set of colours, and working sets
  no longer wear the accent colour.
- The red accent now only marks what is live or a record: the running rest
  timer, the set you are on, personal records, and the main button on a
  screen. Switches are green, loading spinners are grey.
- Cards and lists have a quieter, more consistent look: no outlines, grouped
  settings rows like the rest of iOS, and the same margins on every tab.
- Empty screens and loading failures say plainly what is going on, with one
  button that gets you back to training.
- Library, Pump, the Training charts and the journal use native segmented
  controls, and the timeframe for each Training chart sits at the top of its
  card.
- Swipe left on a history entry, a journal item, a set during a workout, a
  body-stats entry or an exercise to reach its action.
- Drag exercises by their handle to reorder them in the template editor and
  during a workout. Reordering set types saves straight away.
- Buttons and rows respond to a press the same way everywhere.
- Loading placeholders pulse together, and a template, your profile and the
  Training charts show their shape while they load.
- Home, Training and the calendar open instantly when you come back to them.
- Home keeps loading older activity as you scroll, instead of stopping after
  the most recent.
- Training's history loads 50 entries at a time and fetches older ones as you
  scroll, and the calendar loads one month at a time, instead of everything
  at once.
- If older activity fails to load on Home or Training, the foot of the list
  says "Couldn't load older activity" with a Try again button.
- Profile totals load without downloading your whole history.
- Profile pictures are cached and fade in.
- The Library keeps your search and filters on each tab when you switch
  between Exercises, Templates and Splits.
- The active workout opens faster, and the exercise picker opens instantly,
  even with a weak signal once it has loaded.
- Pump stays usable while a workout is running. The workout sits pinned at
  the top with Resume and Discard, and everything below it still works.
- The workout in progress on Home shows how long it has been running and how
  many sets you have logged.
- Pump has one Empty workout button. On iPhone it asks for a name before it
  starts.
- Clearing a logged set happens straight away, with Undo, instead of asking
  first.
- The workout summary leads with one big number: the heaviest set of a new
  weight record, otherwise your total volume. Records are listed on the page
  rather than in a pop-up, and history shows a finished session the same way.
- The summary saves your note by itself, and Update template moves into the
  summary's menu. Deleting a session is done from its history page.
- A template's preview estimates its time from your last five sessions of
  it, and its alternatives open in place.
- Long-press a history entry, a template, an exercise or a set for its
  actions: share or delete an entry; start, edit, duplicate, archive or
  delete a template; edit or delete one of your exercises; edit, note, clear,
  skip or remove a set.
- History and a split each keep their actions in one menu button. The
  summary keeps Share on its own, with its other actions in a menu.
- Forgot password, setting a goal, importing someone's template and choosing
  a template for a split open as sheets, and every sheet during a workout
  slides up and away the same way.
- Tapping a day on a profile's activity grid opens that session.
- Cardio fills in speed, distance and pace from each other as you type,
  flags a value that cannot be right under its field, including one worked
  out from another field, and opens the session once it is saved.
- Haptic feedback when you answer a journal item, complete a journal day,
  step a daily goal or switch a segmented control, and an error buzz with
  every message that says something failed.
- The exercise card's footer opens its notes, and choosing an alternative
  from Browse all asks whether to save it once the list has closed.
- Star exercises as favourites right from the Library list.
- Swipe an exercise in the Library to edit it, as well as to delete it.
- Exercise cards in the Library and the exercise picker show up to four
  muscles, then "+N" for the rest.
- Home's empty timeline offers to start a workout, with a link to find
  people.
- Timeline cards no longer say "finished a workout" on every row; the type
  shown on the card says what was done.
- Today's workout and your weekly numbers are one card on Home, and it opens
  Training. Once you have trained, it names the workout you finished. Home no
  longer starts today's workout; start it from Pump.
- A session looks the same in Training's history as on Home. Cardio's
  average heart rate and a workout's total set count are on the session's
  own page.
- Journal values are now the button: tap the amount to change it. An
  unanswered item shows a quieter placeholder with its unit.
- Skipped journal items say Skipped instead of a dash.
- Customize journal is now Edit journal, with the standard search bar, and
  the section filter scrolls with the list.
- "Log a past session" is now the + beside Select in Activity history.
- Selecting a day in the calendar brings its details into view.
- The calendar's filters are two rows, one for the kind of activity and one
  for muscle groups. Cardio is greyed out while a muscle group is chosen.
- Training's activity grid shows a loading pulse instead of an empty year.
- The muscle map's "Tap a muscle" hint goes away once you have tapped one.
- Achievement sections have icons instead of emoji. The rest notification
  reads "Rest complete" with "Time for your next set.", and the Live
  Activity's resting line has no emoji.
- The Library's tabs are Exercises, Templates and Splits. Templates are
  called templates in the Library's lists and on Pump, and nothing calls a
  split a plan any more.
- When something fails, the alert says what failed (for example "Couldn't
  delete the set") instead of a bare "Error".
- Titles, buttons and labels are in sentence case with British spelling
  throughout, and the app no longer uses exclamation marks. New personal
  records read "Weight PR: 80kg"; workouts saved before keep their old
  label.
- Mistakes in a form now appear in red under the field that needs fixing,
  and VoiceOver reads them, instead of in an alert: sign-in, sign-up and
  password reset all work this way.
- Adding cardio and adding body stats have Previous, Next and Done above the
  keyboard, so you can move between fields without closing it.
- In the template, split and journal item forms, the return key moves on to
  the next field.
- Log a past session picks its start time with the system time picker
  instead of a typed time.
- Adding cardio picks the start date and time with the system picker, and
  any past date works, not just the last 30 days.
- Sign-in opens with the app icon above the name, and the screen eases in
  when the app opens.
- After you create an account, sign-in already has your email filled in.
- Set types is one list. Each type has a switch to show it in sessions,
  which takes effect at once; if the change doesn't save, the switch goes
  back and says so.
- Profile shows your lifetime workouts, sets and volume as large figures in
  one panel. Big totals shorten (12.3k, 1.3M) instead of running out of
  room.
- A new profile photo appears at once, with a spinner until it has
  uploaded.
- Followers and Following are rows under Privacy and social. The Weight
  unit row is gone: Pumped only uses kg, so it had nothing to change.
- Follow and Unfollow change on the tap, and the follower count moves with
  them. If it doesn't go through, both go back and Pumped tells you why.
- Followers and following lists show the most recent follow first and open
  instantly when you go back to one you've seen. In someone else's list,
  your own row says You and opens your profile.
- On someone's profile, the title no longer jumps from Profile to their
  name, their counts use large figures, and each public template says
  Import.
- Goals: each section loads on its own, the section headers stay in view as
  you scroll, Add is always there, and your weekly goals are one list whose
  bars fill in.
- Today's steps moved off Goals: daily targets live with the activity rings,
  one tap away under Daily goals.
- Goals, your streak and achievements show straight away when you come back
  to them.
- Setting a weekly goal uses − and + buttons instead of a slider, so you can
  land on exactly the number you want. Hold a button to go faster.
- Achievements: each category is one list, and the progress bar fills in.
- Activity: daily goals change the moment you tap, rings included, and
  holding − or + goes faster. The change saves once you stop, even if you
  leave the screen straight away.
- Activity opens faster: the 30-day strip draws its rings at once, with a
  placeholder while it loads. A new account sees a line explaining how the
  rings fill.
- Activity summary has a Done button, shows placeholders while it loads
  instead of a flat zero line, and its totals use the app's number face.
- On someone's profile, the activity grid shades each day against their
  usual session, so one big day no longer lightens the rest. It always ends
  with this week, and VoiceOver reads each day.
- Body stats shows Current and Trends in one screen. Trends is a line chart
  for any measurement, from 1 month to all time, and the history is grouped
  by month.
- Adding body stats shows the last value you logged in each field.
- An exercise's chart is now a line with dated axes, with sessions, average
  and best under it in large figures.
- An exercise's history shows its name, muscle and equipment in the title
  bar, and the shape of the page while it loads instead of a spinner.
  Opened from Training, it shows its chart straight away. The heaviest-set
  card is labelled Weight PR.
- Splits in the Library say how many days they train, such as "Weekly · 3
  of 7 days training".
- Tap a split in Training splits to make it the active one: the tick moves
  at once. Each split's schedule, Edit, Archive and Delete, and Deactivate
  for the active one, are in the ••• button on its row, and archived splits
  have their own view, opened from the top bar.
- A split's schedule marks today and shows all seven days of the week. Its
  screen shows its description and how many days it trains, and its menu
  can archive it.
- Choosing a template for a split day shows which one the day already has.
- Deleting a split names it and says your templates and sessions stay.
- Tapping the session on your Lock Screen or in the Dynamic Island opens
  it. If Pumped wasn't running, a Home button at the top left takes you on
  from there.
- Pull down to refresh the Library, your splits and a split, a template, a
  finished session, Edit journal and a journal item, achievements,
  Activity, body stats, follower lists and another person's profile. A
  refresh keeps what is on screen.
- People search keeps showing results while you type instead of flashing
  placeholders.
- A workout you have done is called a session in alerts, history and the
  Live Activity: Finish session, Discard session, "Delete this session?",
  Log a past session, Session in progress. Profile counts still say
  Workouts. Starting a workout, the empty workout and today's workout keep
  their names, and a template's menu is Template options.

### Fixed

- The Training tab crashed on open.
- Tapping a planned workout in the calendar opens it instead of an empty
  screen.
- Editing a goal could open with another goal's values.
- Starting a workout from Pump's split or All templates list did not move a
  rolling split on; it now does whenever that workout is in the split.
- A session that fails to save now offers Try again, with your sets kept,
  instead of an error box.
- Sign-in no longer shows Apple and Google buttons that did nothing.
- Unfollowing someone from their profile now takes them off the Following
  list you opened them from when you go back.
- An expired or already-used password reset link now says so, instead of
  showing the form and failing with a vague error.
- After resetting your password you go straight into the app, instead of
  being told to sign in when you already were.
- Asking for reset links too quickly says to wait a minute.
- Set types no longer says there are eight built-in types. There are nine.
- Reordering set types right after hiding one could bring the hidden type
  back if the reorder failed to save.
- A follower list that fails to load says so and offers Try again, instead
  of saying nobody follows.
- The follower count on someone's profile no longer changes when a follow
  fails.
- A profile that is private or no longer exists says Profile not available
  instead of asking you to check your connection.
- A template with one exercise says 1 exercise.
- Another person's profile no longer labels their activity grid "Your
  activity".
- The activity grid no longer shows days after today, or before the
  account existed, as missed days, and skipped sets no longer count towards
  a day's shade.
- Goals no longer offers to set goals you already have when it can't load
  them; it says so and lets you try again.
- A new account's Goals screen says No achievements yet instead of showing
  an empty section.
- Daily goals stay within sensible limits (steps 1,000 to 40,000, minutes 5
  to 240).
- Activity no longer says you have nothing in the last 30 days when it
  couldn't load.
- A period with the same total as the one before no longer shows a green
  up-arrow on the activity summary.
- Body stats fields accept decimals again, including with a comma.
- A measurement's change is against the last time you measured it, instead
  of showing its whole value as the change.
- Your latest weight and other measurements stay visible after an entry
  that recorded only some of them, such as girths alone.
- The session summary's calorie estimate uses your latest weight even when
  your newest body stats entry had none.
- Coming back to Body stats no longer blanks the screen while it reloads.
- A change that shows as "No change" is no longer coloured red or green.
- Archiving the active split from its edit screen now also stops it being
  your active split, so nothing is scheduled from a split you've hidden.
- A weekly split can no longer be saved with a training day that has no
  template. You're asked to choose one or make it a rest day.
- The splits list and a split's screen show your changes as soon as you
  come back to them, and turning a split on or off no longer blanks the
  list.
- If activating a split fails, you're told, instead of the tick silently
  going back.
- On someone else's session, the previous and next arrows stay in their
  history instead of jumping to yours.
- Editing a set in a finished session no longer flashes the screen blank and
  scrolls you back to the top.
- People search could show results for something you had already deleted.
- Adding an exercise to a template no longer says there are no exercises
  while your library is still loading.

<!-- nightly-1.16.1-202609230816 -->
## 1.16.1 — nightly — 2026-09-23

Build 202609230816 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.16.1-202609230816/Pumped-nightly-1.16.1-202609230816.ipa)

### Fixed

- The top bar showed a white band on the active workout and on other pushed
  screens; it is black again.
- The active workout no longer has its own big chevron button top-left. The
  standard back button is there instead, and swiping back still keeps the
  workout running.

<!-- nightly-1.16.0-202609230743 -->
## 1.16.0 — nightly — 2026-09-23

Build 202609230743 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.16.0-202609230743/Pumped-nightly-1.16.0-202609230743.ipa)

### Improved

- Every screen now uses the iOS navigation bar: the title collapses as you
  scroll, the bar blurs what passes under it, and swiping back works from
  anywhere on the screen, not just the edge.
- Cardio logging, "log a past workout", body-stat entry and the template
  editors open as sheets you can drag down to dismiss.
- The active workout screen no longer redraws itself every second, so long
  sessions with many exercises scroll and respond as smoothly at minute 90 as
  at minute 1.
- Goals, Body stats and Splits now open as pages you can swipe back from,
  instead of sliding up as modals.
- A workout template's ⋯ menu (Edit, Archive, Delete) is now the standard iOS
  action sheet.
- The Library's "New" button moved into the top bar, freeing the bottom of the
  list.
- Bottom sheets and the in-workout toast are now translucent, matching the
  rest timer.
- The active workout's set count reads "No sets yet" before the first set.

<!-- nightly-1.15.0-202609212003 -->
## 1.15.0 — nightly — 2026-09-21

Build 202609212003 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.15.0-202609212003/Pumped-nightly-1.15.0-202609212003.ipa)

The biggest release so far, and mostly one idea: the app should have an opinion
about your training instead of just remembering it. Turn progression on and
each session opens with the weight the rule says comes next, and a sentence
saying why. Around that: supersets, a muscle map, estimated 1RM, logging a
workout you did on paper, and the screen finally staying awake between sets.

**New**
- Progression. Turn it on for a workout and each session opens with the weight
  the rule says comes next, instead of whatever you did last time. Clear the
  top of the rep range in every set and the weight goes up; fall short and it
  holds while the target climbs toward the top. Tap any weight to see the
  sentence explaining why it is that number. After three sessions stuck at the
  same weight it offers a lighter one — offers, never applies. Off for every
  existing workout until you switch it on, and you can turn it off for a single
  exercise.
- Supersets. Pair an exercise with the one next to it — when you build the
  workout, or mid-session from the ⋯ menu — and work through them back to back
  with a single rest at the end of each round, for as long as the harder of the
  two asked for. The card says SUPERSET · A of 2, so a missing rest reads as
  the plan rather than a bug. Leave the superset at any time, and a pair left
  with one member becomes an ordinary exercise again.
- A muscle map on the Training tab. A front-and-back body with every muscle
  shaded by how much of your training landed on it, over the last 30 days, 3
  months, 6 months or a year. Switch between sets and volume, tap a muscle to
  see its total, and pick the male or female figure. Underneath it names the
  muscles you have not trained in that window, which is the part a bar chart
  cannot do.
- Estimated 1RM on every exercise's progress screen: the heaviest single rep
  your best set implies, with the set it came from and a trend beside it. It is
  a calculation, not a record — it will not fire a PR celebration, and it is not
  computed above twelve reps, where the formulas start disagreeing enough that
  the number would say more about the formula than about you. The post-workout
  summary names any exercise whose estimate is now at its all-time high.
- Log a workout after the fact. Forgot your phone, trained on paper, or came
  from another app? From Training, pick the day, when you started and how long
  it ran, choose one of your workouts or go freestyle, and log it on the normal
  workout screen. It is filed on the day it happened, not today — and it will
  not claim a personal record against workouts you did after it.
- Rest time per exercise. Heavy triples and curls do not want the same break,
  so any exercise in a workout can carry its own. Set it in the Rest field when
  you build or edit a workout; leave it empty and it uses your default, which
  the field shows you. It travels with a workout you import from someone else.
- Favourite exercises. Tap the star on any exercise in your library or in the
  picker and it sorts to the top from then on — within whatever filter you have
  applied, so a starred chest exercise is first among your chest exercises
  rather than pinned above everything. Favourites are yours alone and are not
  part of a workout you share.
- The screen stays on while you are training. No more unlocking the phone
  between sets to find your place again. It holds only for the length of the
  workout and gives the display straight back when you finish, so it costs
  nothing the rest of the day. Switch it off under Profile → Workout Settings →
  Keep Screen Awake if you would rather it did not.

**Fixed**
- Warm-up sets no longer count as personal records. A warm-up of 20 kg × 20
  could take the rep record at 20 kg, fire the celebration mid-warm-up, and then
  hold that record against the working sets that should have claimed it. Some
  existing rep records will drop as a result — those were never really yours.

<!-- nightly-1.14.0-202609181623 -->
## 1.14.0 — nightly — 2026-09-18

Build 202609181623 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.14.0-202609181623/Pumped-nightly-1.14.0-202609181623.ipa)

Five things asked for after 1.13.0: moving between workouts in History, exporting
a stretch of it, a share that carries the whole workout, faster steppers, and a
set type for planks and hangs.

**New**
- Timed sets. A new set type, "Timed", for anything measured in seconds rather
  than reps — a plank, a dead hang, a wall sit. Pick it from the set menu and the
  reps pill becomes a time pill. Tap it to type a time, or run the built-in
  stopwatch while you hold and stop it when you drop. Weight is optional, for a
  weighted plank. The time shows in your history, the post-workout summary and
  any text export, and a timed set counts as a working set but adds nothing to
  volume. Needs the server update in this build; until it is applied the type
  does not appear.
- Select and export from History. A Select button above your activity history
  turns every workout and cardio session into a checkbox. Pick as many as you
  like, or Select all, and Export opens the share sheet with one text document
  covering all of them, newest first — every set, weight, rep and rest for each
  workout, and the distance, pace and heart rate for each cardio session. Paste
  it to a coach, a chat, or an assistant.
- Arrows on a past workout. The date line on a workout's detail screen now has a
  chevron on each side: left goes to the workout before it, right to the one
  after. Back still returns to History.

**Improved**
- Sharing from the post-workout summary now sends the whole workout, in the same
  text format as History's export, with your PRs at the end — instead of a
  three-line headline.
- Hold a + or − button to keep stepping. On the weight and reps sheets, the full
  set editor and the new time sheet, a tap moves one step and a hold moves faster
  and faster the longer you keep it down, so a hundred reps is a few seconds
  rather than a hundred taps.

<!-- nightly-1.13.0-202609021120 -->
## 1.13.0 — nightly — 2026-09-02

Build 202609021120 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.13.0-202609021120/Pumped-nightly-1.13.0-202609021120.ipa)

Two new ways to log cardio, and every cardio session can now carry your average
heart rate.

**New**
- Indoor Bike, a new cardio type for a stationary or spin bike. Log distance,
  average speed, resistance level, cadence and average power alongside the
  duration — every one of them optional, so a bike that tells you nothing but
  the clock is still worth logging.
- An incline field on Indoor Walk, in percent, for the treadmill.
- Average heart rate on every cardio session, from an indoor walk to an outdoor
  run. It shows up next to the session in your history and on the calendar.

**Fixed**
- The intensity level on a Stairs session now saves. It never did: the level you
  picked was rejected on the way to the server, silently, so it was gone the next
  time you opened the session. Levels you set before this build were never
  stored and cannot be recovered.
- A Stairs session in your history shows "Level 12" rather than a bare "12".
- Indoor Run no longer shows a bicycle next to it in the cardio list.

<!-- nightly-1.12.1-202608271546 -->
## 1.12.1 — nightly — 2026-08-27

Build 202608271546 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.12.1-202608271546/Pumped-nightly-1.12.1-202608271546.ipa)

The exercise you are on is now easy to find on a long workout screen.

**Improved**
- The exercise you are currently on is outlined in the app's accent colour
  while you train. It is the first exercise you have not finished and have not
  skipped, so the outline moves down the list on its own as you log your last
  set of each one, and disappears when there is nothing left to log.

<!-- nightly-1.12.0-202608251011 -->
## 1.12.0 — nightly — 2026-08-25

Build 202608251011 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.12.0-202608251011/Pumped-nightly-1.12.0-202608251011.ipa)

You can step out of a workout to check the feed without losing it, and a workout
you walked away from no longer sits there running until you notice.

**New**
- A workout that goes quiet asks whether you are still training. Fifteen minutes
  with no sets logged and Pumped checks in; another fifteen with no answer and it
  finishes the workout for you, ending it at your last set rather than whenever
  you happen to open the app again. Nothing is lost — the workout lands in your
  history with the duration you actually trained for.

**Improved**
- A button to put a workout down. Tap the chevron at the top of the workout
  screen and you are back in the app, with the timer still running, free to look
  at the feed or somebody else's session and pick yours back up from the banner
  on Home.
- Removed the `+` beside Activity history on the Training tab. It opened the
  text importer and then threw the result away — no workout was added, which is
  what the button looked like it was for. Importing exercises from text still
  lives where it works: inside a workout template.

**Fixed**
- Pasting an exported workout back into the app failed on the first line. The
  `WORKOUT:` line that export writes is now ignored on import, so a plan can go
  out to a coach, come back edited, and go straight in.

<!-- nightly-1.11.1-202608200941 -->
## 1.11.1 — nightly — 2026-08-20

Build 202608200941 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.11.1-202608200941/Pumped-nightly-1.11.1-202608200941.ipa)

Buttons across the app get their shape back, sheets stop hiding against the
screen behind them, and user search opens instead of crashing.

**Fixed**
- User search no longer crashes the app. Tapping the magnifying glass opened a
  screen that died on the spot; it opens and searches again.
- Buttons across the app had lost their backgrounds, their padding and their
  centring — Log Set and Cancel during a workout, the sign-in buttons, the rows
  and the browse button in Change Exercise, and more. Every one of them is
  drawn properly again. Icons and labels that were stacking on top of each
  other now sit side by side as they should.
- The calendar button in the Home header sits inside its circle instead of
  hanging off the edge of it.
- Add and Edit in the journal's Customize screen no longer draw their title bar
  on top of the first item. The bar is opaque and the list starts below it.

**Improved**
- Sheets that slide up over a screen — exercise history, the set editor, the
  exercise pickers, Reset Password — are a shade lighter than the screen behind
  them, so you can see where the sheet ends and the app begins. Each one now
  shows the small handle that says it can be swiped away.
- Changing a journal item's icon takes one tap. The circle empties when you tap
  it and shows the old icon faintly behind, so the emoji you pick replaces it
  instead of landing next to it, and the ring around the circle tells you it is
  waiting for one.
- During a workout, an exercise's "Last: 40kg × 8" now sits under its sets
  rather than above them, next to the History button, where it reads as a
  comparison against what you just logged.

<!-- nightly-1.11.0-202608181502 -->
## 1.11.0 — nightly — 2026-08-18

Build 202608181502 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.11.0-202608181502/Pumped-nightly-1.11.0-202608181502.ipa)

Looking backwards at an exercise is now one screen instead of two,
exercises can share a name when the equipment differs, and a rolling split
follows the workout you actually did.

**New**
- Two exercises can share a name as long as the equipment differs, so a
  machine Chest Press and a dumbbell Chest Press can both just be called
  "Chest Press". Whichever list they appear in, the equipment is written
  underneath so you can tell them apart. The second one has to have its
  equipment set — that is the thing doing the telling.

**Fixed**
- A rolling split now continues from the workout you actually did. If Upper 1
  was next but you trained Upper 2, tomorrow follows Upper 2 instead of
  offering Upper 2 all over again. A workout that is not part of the split no
  longer moves it at all.

**Improved**
- During a workout each exercise now shows its equipment under the name
  instead of the muscle it trains — the machine is the thing you have to walk
  to. Exercises with no equipment set still show the muscle.
- History and Progression were two different screens showing the same thing.
  There is now one History sheet: your personal best and recent sessions
  first, the chart a tap away, and it opens without leaving your workout.
  The exercise card's second footer button is now **History**.

<!-- nightly-1.10.1-202608181411 -->
## 1.10.1 — nightly — 2026-08-18

Build 202608181411 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.10.1-202608181411/Pumped-nightly-1.10.1-202608181411.ipa)

**Fixed**
- 1.10.0 crashed the moment the active workout screen opened — starting a
  workout, resuming one from Home, or tapping the Live Activity all killed
  the app. The set checkmark's new animation was the culprit; it no longer
  takes the app down with it.

<!-- nightly-1.10.0-202608181100 -->
## 1.10.0 — nightly — 2026-08-18

Build 202608181100 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.10.0-202608181100/Pumped-nightly-1.10.0-202608181100.ipa)

**New**
- Password managers finally work: sign-in offers your saved credentials,
  sign-up suggests a strong password, and every auth field autofills the way
  a native app should.

**Improved**
- The sign-in, sign-up and password-reset screens no longer hide their
  buttons behind the keyboard, and the sign-up form has real field labels
  instead of placeholders that vanish as you type.
- The rest timer no longer covers the tab bar mid-rest — the tabs stay
  reachable — and it sits exactly on the home indicator on every device, with
  a translucent material instead of a flat block.
- The dead space under "Start Workout" and the other bottom bars is gone
  (the safe area was being counted twice).
- The calendar and activity-summary now open as half-height sheets you can
  drag up, like the system's own.
- User search uses the real iOS search bar in the navigation bar, with the
  system Cancel button; the Android-style back arrows are gone.
- The workout ⋮ menu is a native action sheet instead of a floating box; the
  keyboard-dismiss chevron rides the keyboard's real animation instead of
  teleporting; swipe-to-delete in the Library runs on the modern engine.
- Body-stat history rows now open a menu — tapping them used to lead to a
  screen that doesn't exist, and delete hid behind an unmarked long-press.
- Logging a set now animates: the checkmark tints and pops instead of
  teleporting to green, and the glyph no longer shifts a pixel on every tap.
- The weight/reps wheels finally behave like iOS pickers: the highlighted
  value follows your finger instead of lagging until the wheel stops, and
  every detent ticks.
- The bottom sheets' drag handle is now real — drag down to dismiss, flick to
  dismiss faster, let go to snap back with your hand's momentum. Sheets also
  close on the same curve they open on, with the dim tracking the panel
  exactly. The exercise-swap sheet no longer vanishes 40ms before it finishes
  sliding, and the Android back button closes it.
- The rest timer's progress bar moves smoothly instead of stepping five times
  a second.
- A new personal record now lands with one real bounce instead of four small
  lurches, can be tapped away, is announced to VoiceOver — and a second PR in
  quick succession gets its own celebration instead of silently eating the
  first.
- In-workout toasts fade cleanly even when several arrive back-to-back, and
  are spoken to VoiceOver.
- Adding, removing and reordering sets and exercises now slides neighbours
  into place instead of snapping. The set-editing rows in workout history get
  a real staggered fade instead of popping in one by one.
- Buttons across the app press down with a subtle scale instead of an
  imperceptible dim; the most-tapped chips (set types, quick reps, bar
  presets, plates) acknowledge the touch, and the tappable plates on the
  barbell are much easier to hit.
- Charts animate: trend lines ease into place when you switch metric or
  range, progress bars grow in place, and the activity rings and strain ring
  sweep to their value.
- All new motion respects the system Reduce Motion setting.

**Improved (under the hood)**
- Creating and editing workouts (and plans) now share one editor, so the two
  screens can't drift apart again — and the create screen picks up the edit
  screen's nicer inputs and row actions along the way.

**Improved (accessibility)**
- VoiceOver can now run a workout: every stepper says what it adjusts and by
  how much, the set checkmark announces its state, sheets and menus are
  labelled, selected tabs say they're selected, and disabled options say so
  instead of silently doing nothing.
- Rest completing, toasts, and personal records are spoken aloud.
- Reduce Motion is respected everywhere, the confetti sits out entirely, and
  loading placeholders pulse more gently.
- Big numbers no longer clip at large text sizes, and small controls got
  bigger touch areas.

**Improved (design)**
- Text you actually read got more readable: the dimmest caption gray was
  below accessibility contrast on cards and has been lightened, and the
  accent colour was darkened a touch so white text on buttons meets the
  contrast standard too.
- One green means "done" everywhere now (the app had five), one red means
  "delete" (it had two), and the mid-gray text colour is the same gray on
  every screen instead of two near-identical ones.
- The active workout screen and the advanced set editor now use the same
  palette, spacing and corner radii as the rest of the app instead of their
  own — cards, pills and chips line up and match.
- Big numbers (rest countdown, set readouts, profile counts) use fixed-width
  digits so nothing jitters as values change, and small caption text sits at
  a readable minimum size.
- Labels like "REST COMPLETE" and "BAR WEIGHT" are properly letter-spaced
  small caps instead of shouted strings.

**Improved (copy)**
- Error messages are written for people now: instead of raw database text
  like "duplicate key value violates unique constraint", the app says what
  went wrong and what to do next — wrong password, no connection, a name
  that's already taken.
- Confirmation dialogs name what they're about to do: delete buttons say
  "Delete Workout" or "Delete Plan" rather than a bare "Delete", the
  "Are you sure?" bodies say what will actually be lost, and the swap
  dialog's bare Yes/No is now Save / Not Now.
- The journal's customize search says which query had no results.

<!-- nightly-1.9.5-202608181041 -->
## 1.9.5 — nightly — 2026-08-18

Build 202608181041 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.5-202608181041/Pumped-nightly-1.9.5-202608181041.ipa)

**Fixed**
- Finishing a workout could quietly lose sets: if part of the save failed
  mid-way, the app still showed the summary as if everything had been stored.
  A failed save now keeps the workout on your phone, tells you, and lets you
  hit Finish again.
- The same workout could report three different volume totals on the summary,
  the feed and the history detail, because dropsets and rest-pause clusters
  were counted in some places and ignored in others. Every screen now counts
  them the same way — and the summary's working-set count no longer drops
  backoffs, dropsets and the other non-plain set types.
- Set-type badges in an exercise's history could render invisible when a set
  type wasn't in the database, and a set type recoloured in Settings showed the
  old colour on some screens. One colour source now feeds them all.
- In the rest timer, the highlighted preset chip followed the countdown — 3:00
  lit up for one second as the clock passed it, then went dark. The chip now
  shows the rest length you actually picked.
- The Pump tab flashed "No active split" and "No workout templates yet" for a
  moment on every visit before your real workouts appeared. It now shows
  loading placeholders until they've actually loaded.
- The Live Activity (Dynamic Island) died the moment you swiped back from the
  workout screen — exactly when it matters. It now survives navigation
  anywhere in the app for the whole workout. It also stops re-sending itself
  every second, which iOS punishes by dropping updates; the rest countdown
  still ticks natively. The elapsed-time string is gone from it — the widget
  can't tick it natively, and a frozen clock reads as broken.
- Saving a workout note (during finish or on the summary screen) no longer
  fails silently — if it doesn't stick, you're told.

<!-- nightly-1.9.4-202608141208 -->
## 1.9.4 — nightly — 2026-08-14

Build 202608141208 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.4-202608141208/Pumped-nightly-1.9.4-202608141208.ipa)

**Improved**
- Opening a workout now shows the full preview straight away — exercise count,
  total sets, estimated time and the muscles it hits — instead of a plainer list
  that made you tap Start once to see it and again to actually begin. Starting a
  workout is one tap shorter, and every route in (Library, the Pump sheet, your
  split's workout for today) lands on the same screen.

**Fixed**
- The button for logging a set showed a play arrow until you tapped it, which
  read like it would start something. It is a checkmark now, greyed out until
  the set is logged and green afterwards.

<!-- nightly-1.9.3-202608061343 -->
## 1.9.3 — nightly — 2026-08-06

Build 202608061343 · [download](https://github.com/rodrigosous-a/pumped-releases/releases/download/nightly-1.9.3-202608061343/Pumped-nightly-1.9.3-202608061343.ipa)

**Fixed**
- Every list, sheet and drawer wore a grey band across its first rows on iOS 26,
  which swallowed the top of the weight picker, the set menu and the exercise
  history. The band is gone.
- Swapping an exercise mid-workout was a one-way door: the sheet listed the
  alternatives you had set up, but never the exercise you started with, so
  changing your mind meant hunting for it in the full exercise list. The
  original is now the first thing the sheet offers.
- The exercise you had just swapped to was still listed as one of its own
  alternatives.

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
