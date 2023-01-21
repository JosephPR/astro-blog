// import { config } from '../scripts/config'

// const mainDiv = document.querySelector("main");
// const inputField = document.querySelector("#topic-input");
// const filterButton = document.querySelector("#filter-button");
// const API_KEY = config.API_KEY;

// // Check the value of the darkMode key in localStorage when the page is loaded
// if (localStorage.getItem("darkMode") === "true") {
//   // Add the dark-mode class to the body element
//   document.body.classList.add("dark-mode");
// }

// // Add an event listener to the filter button
// filterButton.addEventListener("click", function () {
//   // Get the user input
//   const topic = inputField.value;

//   const title = document.getElementById("heading");
//   title.innerText = `${topic} News`;

//   if (topic.length > 0) {
//     // Make a request to the NewsAPI
//     fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Filter articles by topic
//         const filteredArticles = filterByTopic(data.articles, topic);
//         //sort articles by date
//         const sortedArticles = sortByDate(filteredArticles);
//         // Display articles on the page
//         displayArticles(sortedArticles);
//         inputField.value = "";
//       })
//       .catch((error) => console.log(error));
//   }
// });

// // Execute a function when the user presses a key on the keyboard
// inputField.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element
//     filterButton.click();
//     inputField.value = "";
//   }
// });

// //NEWS FUNCTIONS
// // Function to filter articles by topic
// const filterByTopic = (articles, topic) =>
//   articles.filter((article) =>
//     article.title.toLowerCase().includes(topic.toLowerCase())
//   );

// // Function to sort articles by date
// const sortByDate = (articles) =>
//   articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

// // Function to display articles on the page
// const displayArticles = (articles) => {
//   mainDiv.innerHTML = ""; //clear the current content
//   if (articles.length === 0) {
//     mainDiv.innerHTML =
//       '<div class="no-results">Your search turned up nothing</div>';
//   } else {
//     articles.forEach((article) => {
//       const card = document.createElement("div");
//       const articleH2 = document.createElement("h2");
//       const articleContent = document.createElement("p");
//       const date = document.createElement("span");
//       const br = document.createElement("br");
//       const br2 = document.createElement("br");
//       const source = document.createElement("span");
//       const link = document.createElement("a");
//       const image = document.createElement("img");


//       link.setAttribute("href", `${article.url}`);
//       image.setAttribute("src", `${article.urlToImage}`);
//       image.setAttribute("width", "300px")
//       link.setAttribute("target", "_blank");

//       articleH2.innerText = `${article.title}`;
//       {
//         article.content
//           ? (articleContent.innerText = `${article.content.substring(0, 200)}`)
//           : "";
//       }
//       link.innerText = "Link to Article";
//       source.innerText = `Source: ${article.source.name}`;

//       date.innerText = `Published: ${article.publishedAt.substring(0, 10)}   `;
//       if (article.urlToImage !== null) {
//         card.append(image);
//       }
//       card.append(articleH2);
//       card.append(articleContent);
//       card.append(date);
//       card.append(br2);
//       card.append(source);
//       card.append(br);
//       card.append(link);
//       card.classList.add("card");
//       mainDiv.append(card);
//     });
//   }
// };
// // function to fetch the top headlines news
// function fetchTopNews() {

//   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
//     .then((res) => res.json())
//     .then((data) => {
//       displayArticles(data.articles);
//     })
//     .catch((error) => console.log(error));
// }

// //fetch top news on initial load
// fetchTopNews();