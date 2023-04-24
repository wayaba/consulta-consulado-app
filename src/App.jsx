import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PassportCard } from './components/PassportCard'

function App() {
  return (
    <main className="grid h-screen place-content-center text-center bg-slate-900 font-roboto">
      <Header title="Turnos Consulado Español" />
      <PassportCard />
      <Footer author="Pablo Pedraza" github="wayaba" />
    </main>
  )
}

export default App
