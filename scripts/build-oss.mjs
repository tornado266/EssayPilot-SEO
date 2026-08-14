import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const nextBin = resolve("node_modules/next/dist/bin/next");
const result = spawnSync(process.execPath, [nextBin, "build"], {
  env: { ...process.env, ESSAYPILOT_STATIC_EXPORT: "1" },
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const requiredFiles = [
  "out/index.html",
  "out/404.html",
  "out/robots.txt",
  "out/sitemap.xml",
  "out/baidu_verify_codeva-TmHgSGcRPz.html",
];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    throw new Error(`Static export is missing ${file}`);
  }
}
