function filterNews(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}

function searchNews() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
