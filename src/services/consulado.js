//const API_URL = 'http://localhost:5000/turnos-pasaporte'
const API_URL = 'https://consulta-consulado-api.vercel.app/apertura-citas'
export const getNextOpeningPassport = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error al hacer fetch')
    }
    const data = await response.json()
    return data.find((o) => o.service === 'Pasaportesrenovación y primera vez')
  } catch (e) {
    console.log('error en el fetch', e)
  }
}
