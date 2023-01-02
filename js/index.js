// get filter element
const filterElement = document.querySelector('header input');

// get cards elements
const cards = document.querySelectorAll('.cards li');

// add input event for the filter element
filterElement.addEventListener('input', filterCards)

// filter function
function filterCards() {
  console.log('alooooooooo')

  // if the filter is not empty
  if(filterElement.textContent != '') {

    // for each card of cards
      // get card heading (title)
      // tranform to lower case
      // transform filter text to lower case
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  } else {

    // for each card of cards
    // unhide the card element
  }
}