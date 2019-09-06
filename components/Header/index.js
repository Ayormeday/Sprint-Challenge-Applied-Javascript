// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const divHeader = document.createElement('div');
    const divSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');


    divHeader.classList.add('header');
    divSpan.classList.add('date');
    span.classList.add('temp');

    divSpan.textContent = 'SMARCH 28, 2019'
    h1.textContent = 'Lambda Times'
    span.textContent = '98°';

    divHeader.append(divSpan,h1,span);

    return divHeader;
};

// const headerComponent = document.createElement('div');
// headerComponent.classList.add('headerContainer');
const getHeaderContainer = document.querySelector('.header-container')

getHeaderContainer.appendChild(Header());
