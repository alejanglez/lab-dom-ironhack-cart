

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  //... your code goes here

  const allProducts = document.getElementsByClassName("product");
  let totalSum = 0;

  for ( i=0; i< allProducts.length; i++){
  updateSubtotal(allProducts[i])
  totalSum += updateSubtotal(allProducts[i])
  };
  
  
  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = totalSum
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelectorAll('.create-product input')[0].value;
  const newProductPrice = document.querySelectorAll('.create-product input')[1].value;
  console.log("damn it finally");
const newProductLine = document.createElement("tr");
newProductLine.classList.add('product');
newProductLine.innerHTML =`
<td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
          `;
          document.querySelector('tbody').appendChild(newProductLine);
          document.querySelectorAll('.create-product input')[0].value = '';
          document.querySelectorAll('.create-product input')[1].value = 0;

  //... your code goes here



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const btnRemove = document.querySelectorAll('.btn-remove');
  for (let btn of btnRemove) {
  btn.addEventListener('click', removeProduct);
  }
  //... your code goes here
});

window.addEventListener('load', () => {
  const createLine = document.getElementById('create');
  createLine.addEventListener('click', createProduct);
  //... your code goes here
});
