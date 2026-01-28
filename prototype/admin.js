const editor = document.getElementById("editor");
const loadBuild = document.getElementById("loadBuild");
const loadAdmin = document.getElementById("loadAdmin");
const saveAdmin = document.getElementById("saveAdmin");
const downloadJson = document.getElementById("downloadJson");

function formatJson(data) {
  return JSON.stringify(data, null, 2);
}

function stripGenerated(data) {
  if (data.generatedAt) delete data.generatedAt;
  return data;
}

function loadFromBuild() {
  fetch(`/data/questions.json?t=${Date.now()}`)
    .then((res) => res.json())
    .then((data) => {
      editor.value = formatJson(stripGenerated(data));
    })
    .catch(() => {
      editor.value = "Failed to load build data.";
    });
}

function loadFromAdmin() {
  fetch(`/admin/load?t=${Date.now()}`)
    .then((res) => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then((data) => {
      editor.value = formatJson(data);
    })
    .catch(() => {
      editor.value = "No admin content found.";
    });
}

function saveToAdmin() {
  try {
    const parsed = JSON.parse(editor.value);
    if (!parsed || !Array.isArray(parsed.criteria)) {
      alert("JSON must include a top-level 'criteria' array.");
      return;
    }
    fetch("/admin/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        alert("Saved to content/criteria.json");
      })
      .catch((err) => alert(err.message));
  } catch (err) {
    alert(`Invalid JSON: ${err.message}`);
  }
}

function downloadCurrent() {
  const blob = new Blob([editor.value], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "criteria.json";
  a.click();
  URL.revokeObjectURL(url);
}

loadBuild.addEventListener("click", loadFromBuild);
loadAdmin.addEventListener("click", loadFromAdmin);
saveAdmin.addEventListener("click", saveToAdmin);
downloadJson.addEventListener("click", downloadCurrent);

loadFromBuild();
