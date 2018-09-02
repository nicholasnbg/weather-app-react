const weatherApi = {
  call: 'https://api.darksky.net/forecast/',
  key: 'f815af3a03b5f0d8c1fbfea0f95d1794/',
  corsAnywhere: 'https://cors-anywhere.herokuapp.com/'
}

const getLocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    console.log('Location aquired');
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      }
      resolve(coords)
    })
  } else {
    alert('Sorry, you need to enable location services in your browser')
  }
})

module.exports = {
  getLocation,
  weatherApi
}