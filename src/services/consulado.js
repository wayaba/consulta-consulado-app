//const API_URL = 'http://localhost:5000/turnos-pasaporte'
const API_URL = 'https://consulta-consulado-api.vercel.app/turnos-pasaporte'
export const getNextOpeningPassport = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error al hacer fetch')
    }
    return await response.json()
  } catch (e) {
    console.log('error en el fetch', e)
  }
}
