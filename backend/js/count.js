
function incrementWine(vinId) {
  const wine = window.wines.find(w => w.vinId === vinId);
  if (!wine) return;
  wine.quantity++;
  save();
}

function decrementWine(vinId) {
  const wine = window.wines.find(w => w.vinId === vinId);
  if (!wine) return;
  wine.quantity = Math.max(0, wine.quantity - 1);
  save();
}

function save() {
  localStorage.setItem("cellarcount_wines", JSON.stringify(window.wines));
  renderTable();
}
