import fs from "fs";
import path from "path";

// The source .md files (content/legal/) are kept as the full authoring
// reference, including the internal "DRAFT FOR REVIEW" reviewer note. This
// strips that note plus the file's own leading "# Title" line (the page
// renders its own h1 via SectionHeading instead) before publishing, so the
// two never render as a duplicate H1 or leak an internal-only warning onto
// the live page.
export function getLegalMarkdown(filename: string): string {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/legal", filename),
    "utf-8",
  );

  return raw
    .replace(/^#\s+.+\n+/, "")
    .replace(/^>\s*\*\*DRAFT FOR REVIEW[^\n]*\n+/m, "");
}
