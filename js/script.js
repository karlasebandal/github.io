function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    
    if (password === "1234") {
        window.location.href = "../folio/branding.html"; // Replace "redirect.html" with the desired redirect page
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}



var cardsPerPage = 3;
var currentPage = 1;
var totalCards = 6;

function loadMoreCards() {
  var cardContainer = document.getElementById("cardContainer");

  // Calculate the starting and ending index for the next set of cards
  var startIndex = (currentPage - 1) * cardsPerPage;
  var endIndex = startIndex + cardsPerPage;
  
//   var row = document.createElement("div");
//   row.className = "row";

  
  for (var i = startIndex; i < endIndex; i++) {
    if (i >= totalCards) {
        // No more cards to load, disable the button
        document.querySelector("button").disabled = true;
        break;
      }

    var card = document.createElement("div");
    
    card.className = "col-sm-4 mb-4";
    card.innerHTML = `
        <div class="card m-3" style="border-width: 0px; border-radius: 30px;">
            <img src="../images/branding/image${i + 1}.png" class="card-img-top" alt="Card Image">
        </div>
    `;

    cardContainer.appendChild(card);
  }

  currentPage++;
}