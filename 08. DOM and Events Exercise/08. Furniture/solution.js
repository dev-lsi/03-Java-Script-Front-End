function solve() {
  //image, name, a price, decoration factor, mark


  const inputButton = document.querySelector('button');
  inputButton.addEventListener('click', resolveInput);
  const buyButton = document.querySelectorAll('button')[1];
  buyButton.addEventListener('click', buy);
}

function getCurrRowValues(rows) {
  const outputObj = {
    names: [],
    total: 0,
    count: 0,
    decorationFactor: 0,

  }

  rows.forEach(row => {
    outputObj.count++;
    (outputObj.names).push(row.children[1].innerText);
    outputObj.total = Number(outputObj.total) + Number(row.children[2].textContent);
    outputObj.decorationFactor += Number(row.children[3].textContent);

  });

  console.log(outputObj.names.join(','));
  console.log(outputObj.total);
  console.log(outputObj.decorationFactor / outputObj.count);
}

function buy() {

  const checks = document.querySelectorAll('tbody input[type=checkbox] ');
  const soldProducts = [];

  checks.forEach(check => {
    if (check.checked) {

      const row = (check.parentElement).parentElement;

      soldProducts.push(row);

    }
  })

  getCurrRowValues(soldProducts);
}


//...........................................................
function resolveInput() {
  const input = document.querySelector('textarea').value;
  const objects = JSON.parse(input);

  objects.forEach(obj => {

    const trHTML = `<td>
  <img
      src=${obj.img}>
</td>
<td>
  <p>${obj.name}</p>
</td>
<td>
  <p>${obj.price}</p>
</td>
<td>
  <p>${obj.decFactor}</p>
</td>
<td>
  <input type="checkbox" enabled />
</td>`

    const row = document.createElement('tr');
    row.innerHTML = trHTML;

    const table = document.querySelector('tbody')
    table.appendChild(row);
  });

  const checkBoxes = document.querySelectorAll('tbody input[type=checkbox] ');

  checkBoxes.forEach(checkBox => {
    checkBox.disabled = false;
  })

}

