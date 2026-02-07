const list = document.getElementById("book-list");
const search = document.getElementById("search");

function renderBooks(data) {
  list.innerHTML = "";
  data.forEach(book => {
    list.innerHTML += `
      <div class="bg-white p-4 shadow rounded">
        <img src="${book.cover}" class="h-48 mx-auto mb-4">
        <h3 class="font-bold">${book.title}</h3>
        <p class="text-sm">${book.author}</p>
        <a href="book.html?id=${book.id}" class="block mt-3 text-blue-600">View Details</a>
      </div>
    `;
  });
}
renderBooks(books);

search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  renderBooks(
    books.filter(b =>
      b.title.toLowerCase().includes(term) ||
      b.author.toLowerCase().includes(term)
    )
  );
});
