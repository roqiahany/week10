var nameProductInput = document.getElementById('productName');
var priceProductInput = document.getElementById('productPrice');
var categoryProductInput = document.getElementById('productCategory');
var descriptionProductInput = document.getElementById('productDescription');
// console.log(nameProductInput);
var searchInput = document.getElementById('searchInput');

var addBTN = document.getElementById('addBTN');
var updateBTN = document.getElementById('updateBTN');
var indexNum = 0;

var producrContainer = [];
if (localStorage.getItem('products') != null) {
  producrContainer = JSON.parse(localStorage.getItem('products'));
  displayData();
}

function addProduct() {
  if (
    validationName() == true &&
    validationPrice() == true &&
    validationCateg() == true &&
    validationDesc()
  ) {
    var product = {
      name: nameProductInput.value,
      price: priceProductInput.value,
      cate: categoryProductInput.value,
      desc: descriptionProductInput.value,
    };
    producrContainer.push(product);
    console.log(producrContainer);
    localStorage.setItem('products', JSON.stringify(producrContainer));
    displayData();
    clearForm();
    removeIsValid();
  }
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < producrContainer.length; i++) {
    cartona += `<tr>
              <td>${producrContainer[i].name}</td>
              <td>${producrContainer[i].price}</td>
              <td>${producrContainer[i].cate}</td>
              <td>${producrContainer[i].desc}</td>
              <td>
                <button class="btn btn-outline-warning btn-sm" onClick='setProduct(${i})'>update</button>
                <button class="btn btn-outline-danger btn-sm "  onclick="deleteProduct(${i})">delete</button>
                </td>
            </tr>`;
  }
  document.getElementById('tableData').innerHTML = cartona;
}

function deleteProduct(elementNum) {
  producrContainer.splice(elementNum, 1);
  localStorage.setItem('products', JSON.stringify(producrContainer));
  displayData();
}

function searchProduct() {
  var term = searchInput.value;
  var cartona = '';
  for (var i = 0; i < producrContainer.length; i++) {
    if (producrContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `<tr>
              <td>${producrContainer[i].name}</td>
              <td>${producrContainer[i].price}</td>
              <td>${producrContainer[i].cate}</td>
              <td>${producrContainer[i].desc}</td>
              <td>
                <button class="btn btn-outline-warning btn-sm" >update</button>
                <button class="btn btn-outline-danger btn-sm "  onclick="deleteProduct(${i})">delete</button>
                </td>
            </tr>`;
    }
    document.getElementById('tableData').innerHTML = cartona;
  }
}

function setProduct(index) {
  indexNum = index;
  var currentProduct = producrContainer[index];
  nameProductInput.value = currentProduct.name;
  priceProductInput.value = currentProduct.price;
  categoryProductInput.value = currentProduct.cate;
  descriptionProductInput.value = currentProduct.desc;

  addBTN.classList.add('d-none');
  updateBTN.classList.remove('d-none');
}

function updateProduct() {
  var product = {
    name: nameProductInput.value,
    price: priceProductInput.value,
    cate: categoryProductInput.value,
    desc: descriptionProductInput.value,
  };
  producrContainer.splice(indexNum, 1, product);
  console.log(producrContainer);
  displayData();
  localStorage.setItem('products', JSON.stringify(producrContainer));

  addBTN.classList.remove('d-none');
  updateBTN.classList.add('d-none');

  clearForm();
}

function clearForm() {
  nameProductInput.value = '';
  priceProductInput.value = '';
  categoryProductInput.value = '';
  descriptionProductInput.value = '';
}

// var regexName = /^[A-Z][a-z]{2,8}$/;

// var text = 'Roqia';
// var text_2 = 'roqia';

// console.log(regexName.test(text)); // true
// console.log(regexName.test(text_2)); // false

function validationName() {
  var messageName = document.getElementById('messageName');
  var regexName = /^[A-Z][a-z]{2,8}$/;
  var text = nameProductInput.value;
  console.log(regexName.test(text));
  if (regexName.test(text)) {
    // valid
    nameProductInput.classList.add('is-valid');
    nameProductInput.classList.remove('is-invalid');
    messageName.classList.add('d-none');
    return true;
  } else {
    // not Valid
    nameProductInput.classList.remove('is-valid');
    nameProductInput.classList.add('is-invalid');
    messageName.classList.remove('d-none');
    return false;
  }
}
function validationPrice() {
  var messagePrice = document.getElementById('messagePrice');
  var regexPrice = /^[1-9][0-9]$/;
  var text = priceProductInput.value;
  console.log(regexPrice.test(text));
  if (regexPrice.test(text)) {
    // valid
    priceProductInput.classList.add('is-valid');
    priceProductInput.classList.remove('is-invalid');
    messagePrice.classList.add('d-none');
    return true;
  } else {
    // not Valid
    priceProductInput.classList.remove('is-valid');
    priceProductInput.classList.add('is-invalid');
    messagePrice.classList.remove('d-none');
    return false;
  }
}
function validationCateg() {
  var messageCateg = document.getElementById('messageCateg');
  //  category is Invalid You must enter just char and at least 3 char
  var regexCateg = /^[A-Z]?[a-z]{2,100}$/;
  var text = categoryProductInput.value;
  console.log(regexCateg.test(text));
  if (regexCateg.test(text)) {
    // valid
    categoryProductInput.classList.add('is-valid');
    categoryProductInput.classList.remove('is-invalid');
    messageCateg.classList.add('d-none');
    return true;
  } else {
    // not Valid
    categoryProductInput.classList.remove('is-valid');
    categoryProductInput.classList.add('is-invalid');
    messageCateg.classList.remove('d-none');
    return false;
  }
}
function validationDesc() {
  var messageDesc = document.getElementById('messageDesc');
  //  Descory is Invalid You must enter just char and at least 3 char
  var regexDesc = /^[A-Z]?[a-z]{2,100}$/;
  var text = descriptionProductInput.value;
  console.log(regexDesc.test(text));
  if (regexDesc.test(text)) {
    // valid
    descriptionProductInput.classList.add('is-valid');
    descriptionProductInput.classList.remove('is-invalid');
    messageDesc.classList.add('d-none');
    return true;
  } else {
    // not Valid
    descriptionProductInput.classList.remove('is-valid');
    descriptionProductInput.classList.add('is-invalid');
    messageDesc.classList.remove('d-none');
    return false;
  }
}

function removeIsValid() {
  nameProductInput.classList.remove('is-valid');
  priceProductInput.classList.remove('is-valid');
  categoryProductInput.classList.remove('is-valid');
  descriptionProductInput.classList.remove('is-valid');
}
