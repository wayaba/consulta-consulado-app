import { useEffect, useState } from 'react'
import { getNextOpeningPassport } from '../services/consulado'

export function usePassportNextOpening() {
  const [error, setError] = useState('')
  const [nextOpening, setNextOpening] = useState('')
  const [requestLink, setRequestLink] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const getNextOpening = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await getNextOpeningPassport()
      console.log('response', response)
      setNextOpening(response.nextOpening)
      setRequestLink(response.requestLink)
      if (response.nextOpening === 'fecha por confirmar') setIsOpen(false)
      else setIsOpen(true)
    } catch (error) {
      setError('Error consultando API')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getNextOpening()
  }, [])

  return { loading, nextOpening, requestLink, isOpen, getNextOpening, error }
}
