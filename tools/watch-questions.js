const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const INPUT_GLOB = /_questions\.(docx|md)$/i;
const CONTENT_DIR = path.join(ROOT, "content");
const BUILD_CMD = ["node", [path.join(__dirname, "build-questions.js")]];

let timer = null;

function runBuild() {
  const [cmd, args] = BUILD_CMD;
  const proc = spawn(cmd, args, { stdio: "inherit", cwd: ROOT });
  proc.on("exit", (code) => {
    if (code !== 0) console.error(`build-questions exited with code ${code}`);
  });
}

function debounceBuild() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(runBuild, 200);
}

function watchDir(dir) {
  fs.watch(dir, { persistent: true }, (eventType, filename) => {
    if (!filename) return;
    if (!INPUT_GLOB.test(filename)) return;
    debounceBuild();
  });
}

console.log("Watching for question updates...");
watchDir(ROOT);
if (fs.existsSync(CONTENT_DIR)) {
  watchDir(CONTENT_DIR);
}
runBuild();
