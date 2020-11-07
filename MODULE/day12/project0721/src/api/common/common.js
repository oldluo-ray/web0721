import axios from 'axios'
export function getCountryData() {
  return axios('/common/countryData', {
    method: 'GET'
  })
}
