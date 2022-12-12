import Link from 'next/link'

export default function Example() {
  return (
    <div className="on_secondary h-screen">
      <header>
      <div className="flex justify-center items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-center md:space-x-10 lg:px-8">
                <div className="flex justify-center lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Reportex</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/favicon.ico"
                      alt=""
                    />
                  </a>
                </div>
                </div>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 secondary_container" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 on_primary mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Reporta los robos</span>
                    <span className="block on_primary_container_text">en tu comunidad</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl on_primary_container_text sm:max-w-3xl">
                  Comunica a tu comunidad a través de tus reportes, y mantente seguro.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <Link
                        href="/login"
                        
                      >
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm on_tertiary_text primary hover:bg-opacity-90 sm:px-8">Entrar</a> 
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="secondary_container" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
          <div className="pt-8 md:flex md:items-center md:justify-center">
            <p className="mt-8 text-base text-neutral-400 text-center md:mt-0 md:order-1">
              &copy; 2022 Reportex. Creado por Tecnobot.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
