const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SITE_DIR =
  "C:\\Users\\Brian.Cook\\ALLIANCE FOR A HEALTHIER GENERATION\\Technology Team - Prototype";

const SITE_DIR = process.env.SITE_DIR || DEFAULT_SITE_DIR;
const SITE_DATA_DIR = path.join(SITE_DIR, "data");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildQuestions() {
  execFileSync("node", [path.join(__dirname, "build-questions.js")], {
    stdio: "inherit",
    cwd: ROOT,
  });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function writeFile(dest, content) {
  ensureDir(path.dirname(dest));
  fs.writeFileSync(dest, content, "utf8");
}

function buildSite() {
  buildQuestions();

  const srcIndex = path.join(ROOT, "prototype", "index.html");
  const srcApp = path.join(ROOT, "prototype", "app.js");
  const srcStyles = path.join(ROOT, "prototype", "styles.css");
  const srcData = path.join(ROOT, "data", "questions.json");

  const indexHtml = fs
    .readFileSync(srcIndex, "utf8")
    .replace(/\/prototype\/styles\.css/g, "./styles.css")
    .replace(/\/prototype\/app\.js/g, "./app.js");

  const appJs = fs
    .readFileSync(srcApp, "utf8")
    .replace("fetch(`/data/questions.json", "fetch(`./data/questions.json");

  ensureDir(SITE_DIR);
  ensureDir(SITE_DATA_DIR);

  writeFile(path.join(SITE_DIR, "index.html"), indexHtml);
  writeFile(path.join(SITE_DIR, "app.js"), appJs);
  copyFile(srcStyles, path.join(SITE_DIR, "styles.css"));
  copyFile(srcData, path.join(SITE_DATA_DIR, "questions.json"));

  console.log(`Site built to: ${SITE_DIR}`);
}

buildSite();
