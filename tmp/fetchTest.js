fetch('https://ipinfo.io/8.8.8.8')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 