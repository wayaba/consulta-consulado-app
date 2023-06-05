import { usePassportNextOpening } from '../hooks/usePassportNextOpening'
import { Spinner } from './Spinner'

export function PassportCard() {
  const { loading, nextOpening, requestLink, isOpen, getNextOpening, error } =
    usePassportNextOpening()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" rounded-lg border border-solid p-4 w-3/4 ml-auto mr-auto mt-6 mb-8 justify-center">
          <h1 className="text-2xl">Pasaportes renovación y primera vez</h1>

          {error != '' ? (
            <div className="m-4 text-red-400">{error}</div>
          ) : (
            <>
              <p className="m-4">
                {nextOpening} {isOpen ? '🙂' : '😢'}
              </p>
              <div className="m-4">
                {isOpen && (
                  <a
                    className="border rounded-lg hover:bg-slate-500 p-2 w-fit"
                    href={requestLink}
                  >
                    Pedí turno
                  </a>
                )}
              </div>
            </>
          )}

          <button
            className="border rounded-lg hover:bg-slate-500 p-2 w-fit"
            onClick={() => getNextOpening()}
          >
            Volver a consultar
          </button>
        </div>
      )}
    </>
  )
}
