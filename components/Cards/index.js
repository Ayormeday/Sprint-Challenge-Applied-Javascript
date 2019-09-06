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


const container = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)
 
    const articles = response.data.articles;

    for (let item in articles) {
        articles[item].forEach(item => {
            container.append(createArticles(item))
            
    });
}

    
    })
  .catch(error => { 
  
  });


  function createArticles (article){
    //   element list
    const divContainer = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

//   element classlist
    divContainer.classList.add('card');
    divHeadline.classList.add('headline');
    divAuthor.classList.add('author');
    divImg.classList.add('img-container');

// element attributes 
    img.setAttribute('src', article.authorPhoto)

// element text content
    divHeadline.textContent = `${article.headline}`
    // divImg.textContent = img;
    span.textContent = `by ${article.authorName}`
  
    divImg.appendChild(img);
    divAuthor.append(divImg,span);
    divContainer.append(divHeadline,divAuthor);

    return divContainer;
};


