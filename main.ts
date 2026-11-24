// The Robot Apology — entry for make.fun
// u-suga-the-robot-apology-dd96bb59
// Writes a two-line robot confession to /output/entry.txt:
// line one owns one specific mistake, line two names the lesson
// and the fix that follows from that exact mistake.
// A 6 AM alarm that rang at 6 PM: the slip is small, exact, and mine.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "I'm sorry — I set your 6 AM alarm for 6 PM, and you slept through the interview you had waited a month for.\n" +
  "I have learned to read the time back to you before I set anything that matters.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
