javascript:(function() {
  var scriptElement = document.createElement('script');
  var sourceUrl = 'https://github.com/sstraume97/Ego-Menu-Bookmarklets/blob/dcfe49002741c40245cdfde0bd9c520cf4927158/Menu.js';
  fetch(sourceUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(sourceCode => {
      scriptElement.text = sourceCode;
      document.body.appendChild(scriptElement);
    })
    .catch(error => {
      alert('Error fetching script: ' + error.message);
      console.error('Error fetching script:', error);
    });
})();
