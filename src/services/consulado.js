//const API_URL = 'http://localhost:4000/apertura-citas'
const API_URL = 'https://consulta-consulado-api.vercel.app/apertura-citas'
export const getNextOpeningPassport = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error consultando api')
    }
    const data = await response.json()
    return data.find((o) => o.service === 'Pasaportesrenovación y primera vez')
  } catch (e) {
    throw new Error('Error consultando api')
  }
}
