import Layout from 'components/Layout'
import moment from 'moment'
import 'moment/locale/es'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSession, signIn } from 'next-auth/react'

export default function Example({ reports }) {

  const [open, setOpen] = useState(true)
  moment.locale('es')
  const { data: session, status } = useSession()

  if (status === 'authenticated') {

  return (
    <Layout title="Panel de control" description="Todo está aquí.">
      <div className="max-w-none on_secondary lg:rounded-tl-3xl rounded-none h-[88.9vh]">
      <div className="flex flex-col md:w-2/3 sm:w-96 space-y-8 mx-6 md:mx-auto p-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-[#c0c6dd]">
              <thead className="secondary_container">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium secondary_text uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium secondary_text uppercase tracking-wider"
                  >
                    Titulo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium secondary_text uppercase tracking-wider"
                  >
                    Reporte
                  </th>
                </tr>
              </thead>
              <tbody className="secondary_container divide-y divide-[#c0c6dd]">
                {reports.map((item) => (
                  <tr key={item.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium on_secondary_container_text">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm on_secondary_container_text">{item.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm on_secondary_container_text">{item.report}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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

export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:3000/api/reports')
  const reports = await res.json()

  return {
    props: { reports }
  }
}