const enterButton = document.getElementById("enter");
const tbody = document.getElementById("body-table");
const table = document.getElementById("table");
const message = document.getElementById("message");

enterButton.addEventListener("click", (event) => {
  //Implementar lógica del button submit
  event.preventDefault();
  document.getElementById("inputText");
  getresults(document.getElementById("inputText").value);
});

const getRowTemplate = (row, index) => {
  function processObject(row, index) {
    let rowHTML = `<td>${index}</td>`;
    for (const property in row) {
      rowHTML += `<td>${row[property]}</td>`;
    }
    return rowHTML;
  }
  return `<tr class="rowData">${processObject(row, index)}</tr>`;
};

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?goal=${heightRef}`);
  const data = await resp.json();
  let body = "";
  if (data.msg) {
    message.style.display = "";
    message.innerHTML = data.msg;
    table.style.display = "none";

    return;
  }
  table.style.display = "";
  message.style.display = "none";
  data.players.forEach((pair, index) => {
    body += getRowTemplate(pair, 1 + index);
  });
  tbody.innerHTML = body;
  //printValues(data);
}

