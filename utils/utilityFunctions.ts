import axios from 'axios'

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')

    const countries = response.data.map(
      (obj: { name: { common: any } }) => obj.name.common
    )
    return countries.sort()
  } catch (error) {
    console.error('Error fetching countries:', error)
    return []
  }
}

export default fetchCountries
