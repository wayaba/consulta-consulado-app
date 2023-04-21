//const API_URL = 'http://localhost:5000/turnos-pasaporte'
const API_URL = 'https://consulta-consulado-api.vercel.app/turnos-pasaporte'
export const getNextOpeningPassport = async () => {
  console.log('antes del fetch')
  try {
    const response = await fetch(API_URL)

    console.log('ya hice el fetch')
    if (!response.ok) {
      throw new Error('Error al hacer fetch')
    }
    const data = await response.json()
    return data
  } catch (e) {
    console.log('error en el fetch', e)
  }
}
