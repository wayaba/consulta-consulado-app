import { useEffect, useState } from 'react'
import { Spinner } from './components/Spinner'
import { getNextOpeningPassport } from './services/consulado'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const [nextOpening, setNextOpening] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const getNextOpening = async () => {
    setLoading(true)
    const response = await getNextOpeningPassport()
    setNextOpening(response.nextOpening)
    setIsOpen(response.isOpen)
    setLoading(false)
  }

  useEffect(() => {
    getNextOpening()
  }, [])

  return (
    <main className="grid h-screen place-content-center text-center bg-slate-900 font-roboto">
      <Header title="Turnos Consulado Español" />
      <div>{loading ? <Spinner /> : null}</div>
      <div className=" rounded-lg border border-solid p-4 w-3/4 ml-auto mr-auto mt-6 mb-8 justify-center">
        <h1 className="text-2xl">Pasaportes renovación y primera vez</h1>
        <p>
          {nextOpening} {isOpen ? '🙂' : '😢'}
        </p>
        <button
          className="border rounded-lg hover:bg-slate-500 p-2 w-fit m-4"
          onClick={() => getNextOpening()}
        >
          Volver a consultar
        </button>
      </div>
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
