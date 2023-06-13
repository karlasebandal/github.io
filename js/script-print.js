var cardsPerPage = 3;
var currentPage = 1;
var totalCards = 6;

function loadMoreCards() {
  var cardRow = document.getElementById("cardRow");
  var cardContainer = document.getElementById("cardContainer");

  // Calculate the starting and ending index for the next set of cards
  var startIndex = (currentPage - 1) * cardsPerPage;
  var endIndex = startIndex + cardsPerPage;
  
//var row = document.createElement("div");
//row.className = "row";

var cardRowHTML = '';
  
  for (var i = startIndex; i < endIndex; i++) {
    if (i >= totalCards) {
        // No more cards to load, disable the button
        document.querySelector("button").disabled = true;
        break;
      }

      var card = `
      <div class="col-sm-4 mb-4">
        <div class="card m-3" style="border-width: 0px; border-radius: 30px;">
          <img src="../images/prints/image${i + 1}.png" class="card-img-top" alt="Card Image">
        </div>
      </div>
    `;

    cardRowHTML += card;
  }

  cardRow.innerHTML += cardRowHTML;
  currentPage++;
}