const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.prices');
  
  let total = 0;
	priceElements.forEach(element => {
    const price = parseFloat(element.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });
	const table = document.querySelector('table');
	const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
	totalCell.setAttribute('colspan', '2'); 
  totalCell.setAttribute('id', 'ans'); // Good practice for identification/testing
  totalCell.textContent = `Total Price: ${total}`;
	totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

