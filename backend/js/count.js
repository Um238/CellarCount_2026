
// count.js – Fase B Trin 1
// Forudsætter at window.wines allerede findes (fra ZIP 8)

function incrementWine(vinId) {
  const wine = window.wines.find(w => w.vinId === vinId);
  if (!wine) return alert("Ukendt vin");
  wine.quantity = (wine.quantity || 0) + 1;
  saveAndRender();
}

function decrementWine(vinId) {
  const wine = window.wines.find(w => w.vinId === vinId);
  if (!wine) return alert("Ukendt vin");
  wine.quantity = Math.max(0, (wine.quantity || 0) - 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("cellarcount_wines", JSON.stringify(window.wines));
  if (typeof renderTable === "function") renderTable();
}

console.log("count.js loaded – optælling aktiv");
