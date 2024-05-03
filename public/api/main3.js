fetch('http://localhost:8000/api/signup')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Process the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
