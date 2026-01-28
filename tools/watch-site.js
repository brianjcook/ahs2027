const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content");
const INPUT_GLOB = /_questions\.(docx|md)$/i;

let timer = null;

function runBuild() {
  const proc = spawn("node", [path.join(__dirname, "build-site.js")], {
    stdio: "inherit",
    cwd: ROOT,
  });
  proc.on("exit", (code) => {
    if (code !== 0) console.error(`build-site exited with code ${code}`);
  });
}

function debounceBuild() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(runBuild, 250);
}

function watchDir(dir) {
  fs.watch(dir, { persistent: true }, (eventType, filename) => {
    if (!filename) return;
    if (!INPUT_GLOB.test(filename) && filename !== "criteria.json") return;
    debounceBuild();
  });
}

console.log("Watching question files for SharePoint build...");
watchDir(ROOT);
if (fs.existsSync(CONTENT_DIR)) {
  watchDir(CONTENT_DIR);
}
runBuild();
