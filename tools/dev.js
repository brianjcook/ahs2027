const { spawn } = require("child_process");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

function run(cmd, args) {
  const proc = spawn(cmd, args, { cwd: ROOT, stdio: "inherit" });
  proc.on("exit", (code) => {
    if (code !== 0) console.error(`${cmd} exited with code ${code}`);
  });
  return proc;
}

console.log("Starting watch + dev server...");
run("node", [path.join(__dirname, "watch-questions.js")]);
run("node", [path.join(__dirname, "dev-server.js")]);
