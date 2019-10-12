// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const Article = articleData => {
    // Card div creation
    const articleCard = document.createElement('div');
    articleCard.classList.add('card');

    // Headline creation
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = articleData.headline;

    // Author div creation
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');


        // Author img-container div creation
    const authorImgDiv = document.createElement('div');
    authorImgDiv.classList.add('img-container');

            // Author img element creation and appendment to parent (authorImgDiv)
    const authorImg = document.createElement('img');
    authorImg.src = articleData.authorPhoto;
    authorImgDiv.appendChild(authorImg);

        // AuthorimgDiv appendment to parent (authorDiv)
    authorDiv.appendChild(authorImgDiv);


    // Author name ("By") span creation and appendment to parent (authorDiv)
    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = articleData.authorName;
    authorDiv.appendChild(authorNameSpan);

    return wrapAndAdd(articleCard, [headline, authorDiv], '.cards-container');
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const articles = res.data.articles
        Object.keys(articles).forEach(topic => {
            articles[topic].forEach(articleData => Article(articleData));
        });
    })
    .catch(err => console.log(err));