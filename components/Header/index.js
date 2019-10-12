// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


            // If I could edit the HTML I would import this function as a module script, instead I'm going to break DRY and copy-paste it.
const wrapAndAdd = (wrapper, childElementsInOrder, insertionLocation) => {
    childElementsInOrder.forEach(element => wrapper.appendChild(element));
    return document.querySelector(`${insertionLocation}`).appendChild(wrapper);
}

(function Header() {
    // Div creation
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    // Date span 
    const dateSpan  = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'March 28, 2019';

    // Header Title
    const headTitle = document.createElement('h1');
    headTitle.textContent = 'Lambda Times';

    // Temp span
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';

    return wrapAndAdd(headerDiv, [dateSpan, headTitle, tempSpan], '.header-container');
})();