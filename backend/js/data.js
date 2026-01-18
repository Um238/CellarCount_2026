
window.wines = JSON.parse(localStorage.getItem("cellarcount_wines") || "[]");

if (window.wines.length === 0) {
  window.wines = [
    { vinId:"VIN001", name:"Château Margaux", type:"Rødvin", quantity:12 },
    { vinId:"VIN002", name:"Chablis Grand Cru", type:"Hvidvin", quantity:8 }
  ];
  localStorage.setItem("cellarcount_wines", JSON.stringify(window.wines));
}

function renderTable() {
  const tbody = document.getElementById("wineTable");
  tbody.innerHTML = "";
  window.wines.forEach(v => {
    tbody.innerHTML += `
      <tr>
        <td>${v.name}</td>
        <td>${v.type}</td>
        <td>${v.quantity}</td>
        <td><button onclick="incrementWine('${v.vinId}')">+</button></td>
        <td><button onclick="decrementWine('${v.vinId}')">-</button></td>
      </tr>
    `;
  });
}

renderTable();
