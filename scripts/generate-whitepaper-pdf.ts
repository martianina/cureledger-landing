/**
 * Generates public/cureledger-whitepaper-2026.pdf from the canonical markdown.
 * Run: bun run whitepaper:pdf (from guthrie-site)
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import mdToPdf from "md-to-pdf";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const mdPath = join(root, "cureledger-whitepaper", "Cureledger Whitepaper 2026.md");
const outDir = join(root, "public");
const pdfPath = join(outDir, "cureledger-whitepaper-2026.pdf");

await mkdir(outDir, { recursive: true });

await mdToPdf(
  { path: mdPath },
  {
    dest: pdfPath,
    pdf_options: {
      format: "Letter",
      margin: { top: "18mm", right: "16mm", bottom: "18mm", left: "16mm" },
      printBackground: true,
    },
  },
);

console.log(`Wrote ${pdfPath}`);
