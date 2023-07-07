function submitSearch(event) {
    event.preventDefault(); // Prevent form submission
  
    var searchInput = document.getElementById("searchInput").value;
    var encodedSearchInput = encodeURIComponent(searchInput); // Encode the search query
  
    // Redirect to the search results page
    window.location.href = searchInput+".html?q=" + encodedSearchInput;
  }
  