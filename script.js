console.log('I am connected');
var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
  // url to redirect user to search results page ./search-results.html
  //value of searchinput val
  //format parameter
  // //and format input val parameter
  // var queryString =
  //   './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  // location.assign(queryString); //if we use.replace() we can't use back button, it will take back to google.com instead of our created website
  // // could also do this below
  // location.href = queryString;
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
