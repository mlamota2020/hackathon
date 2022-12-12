import Layout from 'components/Layout'
import { useSession, signIn } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Example() {
  const [open, setOpen] = useState(true)
  
  const { data: session, status } = useSession()

  if (status === 'authenticated') {


  return (    <Layout title="Crear reporte" description="Apoya con un reporte.">
    <div className="max-w-none on_secondary lg:rounded-tl-3xl rounded-none h-screen">
      <div className="max-w-screen md:w-96 space-y-8 mx-6 md:mx-auto pt-6">
        <form className="mt-8 space-y-6" action="/api/reports" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <input type="hidden" name="image" value={session.user.image} />
          <input type="hidden" name="name" value={session.user.name} />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">
                Nombre
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-blue-300 secondary_text secondary_container rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Título"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="report" className="sr-only">
                Reporte
              </label>
              <textarea
                id="report"
                name="report"
                type="report"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-blue-300 secondary_text secondary_container rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Reporte"
                rows="10"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white primary_container hover:on_primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Crear reporte
            </button>
          </div>
        </form>
      </div>
      </div>
</Layout>
  ) 
} else {
    return (
        <Transition.Root show={open} as={Fragment}>
  <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div className="inline-block align-bottom on_secondary rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium on_primary_container_text">
                No has iniciado sesión.
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm primary_text">
                  No has iniciado sesión. Da click en el botón para iniciar sesión.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 on_tertiary_container text-base font-medium tertiary_container hover:tertiary sm:mt-0 sm:col-start-2 sm:text-sm"
                  onClick={() => signIn()}
                >
                  Iniciar sesión
                </button>
                <a
                href="/"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 on_secondary_container text-base font-medium secondary_container_text hover:secondary sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Volver
                </a>
              </div>
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition.Root>
    )
}
}