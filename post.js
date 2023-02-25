const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#search")
const displayPost = document.querySelector("#displayPost")
const postArray = getArrayFromFirebase("Post")
const displayAfter = document.querySelector(".displayAfter")

searchBtn.addEventListener("click", () => {
    let searchResult = searchInput.value;
    if (logic) {
      searchBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass-minus "></i>`;
      displayPost.style.display = "none";
      let post = [];
      let found = false;
      postArray.forEach((element) => {
        if (element.data.title == searchResult) {
          found = true;
          post.push(element);
        }
      });
      if (found) {
        displayAfter.style.display = "flex";
        post.forEach((element) => {
          displayData(displayAfter, element.data, element.userid);
        });
      } else {
        displayPost.style.display = "flex";
        searchBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
        displayAlert(
          "ვერ მოიძებნა",
          "ქარდი რომელსაც ეძებთ არ არსებობს",
          "question"
        );
      }
    } else {
      displayAfter.style.display = "none";
      displayAfter.innerHTML = "";
      searchBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
      displayPost.style.display = "flex";
    }
    logic = !logic;
    searchInput.value = "";
  });
  
  function displayData(displayElement, element, key) {
    displayElement.innerHTML += `
    <div class="card">
    <div class="card-img"><img src="${element.imgSrc}" alt=""></div>
    <div class="card-title">${element.title}</div>
    <div class="card-buy-btn"><button><div class="card-price">${element.title}₾</div> Buy <i class="fa-solid fa-arrow-right"></i></button></div>
  </div>
    `;
  }