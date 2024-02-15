var data = [];
var cardData = document.getElementById('cardData');
var navLink = document.querySelectorAll('.navbar  .nav-link');
console.log(navLink);

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function (e) {
    var currentlink = e.target.text;
    console.log(currentlink);
    getApiData(currentlink);
  });
}

getApiData('carrot');

function getApiData(meal) {
  var https = new XMLHttpRequest();

  https.open(
    'GET',
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}`
  );
  https.send();

  https.addEventListener('readystatechange', function () {
    if (https.readyState == 4) {
      data = JSON.parse(https.response).data.recipes;
      displayData();
    }
  });
}

function displayData() {
  var cols = '';
  for (var i = 0; i < data.length; i++) {
    cols += `
    <div class="col-md-4 g-4 ">
          <div class="card " >
            <img
              src="${data[i].image_url}"
              class="card-img-top mody"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Title: ${data[i].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              b5
            </div>
          </div>
        </div>
    `;
  }

  cardData.innerHTML = cols;
}
