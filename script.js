const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-img");
const memeAuthor = document.querySelector(".meme-author");
const container = document.querySelector(".meme-container");
const loader = document.querySelector(".loader");

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  container.classList.add("hidden");
  showLoader();
  setTimeout(() => {
    container.classList.remove("hidden");
  }, 300);
  try {
    const url = "https://meme-api.com/gimme/darkmemers";
    const response = await fetch(url);

    showLoader();
    if (!response.ok) {
      throw new Error("something went wrong...");
    }
    const data = await response.json();
    showMemes(data);
  } catch (error) {
    console.log(error);
  }
});

function showMemes(data) {
  memeTitle.textContent = data.title;
  memeAuthor.textContent = `Meme By : ${data.author}`;
  memeImage.src = data.url;
}

function showLoader() {
  if (loader.className === "loader hidden") {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}
