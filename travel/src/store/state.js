let defaultCity = "沈阳"
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
// eslint-disable-next-line no-empty
}catch (e){} 

export default {
  city: defaultCity
}