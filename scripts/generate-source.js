#!/usr/bin/env node
//
// Regenerates the AltSource v2 files SideStore reads, from channels.json.
// Dependency-free — run with `node scripts/generate-source.js`.
//
//   source.json   Beta only. This is the public, shareable source.
//   nightly.json  Nightly only. Owner-only; not linked from the README.
//
// channels.json is the source of truth and is written by
// scripts/publish-sideload.sh in the main Pumped repo. Don't hand-edit the
// generated files — they get overwritten on the next publish.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const RAW_BASE =
  "https://raw.githubusercontent.com/rodrigosous-a/pumped-releases/main";

const CHANNELS = {
  beta: {
    outFile: "source.json",
    sourceName: "Pumped",
    sourceIdentifier: "com.rodrigosousa.pumped.source",
    appName: "Pumped Beta",
    bundleIdentifier: "com.rodrigosousa.pumped.beta",
    subtitle: "Workout tracking, in beta.",
    // Beta forgoes Live Activities so it stays at a single app slot.
    features: [
      "Apple Health sync isn't available in sideloaded builds — it needs an",
      "entitlement a free Apple developer account can't provision. Live",
      "Activities are left out too, so this stays at one of your three app",
      "slots rather than two.",
    ],
  },
  nightly: {
    outFile: "nightly.json",
    sourceName: "Pumped Nightly",
    sourceIdentifier: "com.rodrigosousa.pumped.source.nightly",
    appName: "Pumped Nightly",
    bundleIdentifier: "com.rodrigosousa.pumped.nightly",
    subtitle: "Bleeding-edge Pumped builds.",
    features: [
      "Apple Health sync isn't available in sideloaded builds — it needs an",
      "entitlement a free Apple developer account can't provision. Live",
      "Activities do work here, but the widget extension takes a second app",
      "slot, so this plus SideStore fills all three.",
    ],
  },
};

const DESCRIPTION_BASE = [
  "Pumped is a workout tracker: build templates, log sets as you lift, follow a",
  "split, and watch your lifts trend up over time.",
  "",
  "Sideloaded builds are re-signed on-device with your own Apple ID. On a free",
  "Apple account the signature expires after 7 days — refresh it in SideStore",
  "before then to keep the app opening.",
  "",
];

const describe = (channel) => [...DESCRIPTION_BASE, ...channel.features].join("\n");

function versionEntry(v) {
  return {
    version: v.version,
    buildVersion: v.buildVersion,
    date: v.date,
    localizedDescription: v.notes,
    downloadURL: v.downloadURL,
    size: v.sizeBytes,
    minOSVersion: v.minOSVersion || "16.1",
  };
}

function buildSource(channelKey, builds) {
  const channel = CHANNELS[channelKey];
  const latest = builds[0];

  return {
    name: channel.sourceName,
    identifier: channel.sourceIdentifier,
    subtitle: channel.subtitle,
    description: describe(channel),
    iconURL: `${RAW_BASE}/icon.png`,
    website: "https://github.com/rodrigosous-a/pumped-releases",
    apps: [
      {
        name: channel.appName,
        bundleIdentifier: channel.bundleIdentifier,
        developerName: "Rodrigo Sousa",
        subtitle: channel.subtitle,
        localizedDescription: describe(channel),
        iconURL: `${RAW_BASE}/icon.png`,
        tintColor: "FF2056",
        category: "lifestyle",
        screenshots: [],
        versions: builds.map(versionEntry),
        // Read off the real build by scripts/build-sideload.sh — SideStore
        // compares these against the installed app, so they must not drift.
        appPermissions: latest.appPermissions,
      },
    ],
    news: [],
  };
}

const channels = JSON.parse(
  fs.readFileSync(path.join(ROOT, "channels.json"), "utf8")
);

for (const [key, channel] of Object.entries(CHANNELS)) {
  const builds = channels[key] || [];
  const outPath = path.join(ROOT, channel.outFile);

  if (builds.length === 0) {
    // Nothing published on this channel yet — emit a valid but empty source so
    // SideStore can still add the URL without erroring.
    const empty = buildSource(key, [{ appPermissions: { entitlements: [], privacy: [] } }]);
    empty.apps = [];
    fs.writeFileSync(outPath, JSON.stringify(empty, null, 2) + "\n");
    console.log(`${channel.outFile}: no builds yet`);
    continue;
  }

  // Newest first, so SideStore treats versions[0] as the current release.
  const sorted = [...builds].sort((a, b) =>
    b.buildVersion.localeCompare(a.buildVersion, undefined, { numeric: true })
  );

  fs.writeFileSync(
    outPath,
    JSON.stringify(buildSource(key, sorted), null, 2) + "\n"
  );
  console.log(
    `${channel.outFile}: ${sorted.length} version(s), latest ${sorted[0].version} (${sorted[0].buildVersion})`
  );
}
