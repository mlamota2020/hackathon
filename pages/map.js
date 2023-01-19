import { useSession, signIn } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Script from 'next/script'

export default function Map() {
    const [open, setOpen] = useState(true)

    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return (
            <>
            <Link href="/dashboard">
              <a className="on_primary_container p-5 rounded-full m-10 fixed top-1 left-1 shadow-md font-extrabold on_primary_text z-50">Volver</a>
            </Link>
            <div className="w-screen h-screen" id="mapview"></div>
            <Script id="mapscript">
                {`
                mapboxgl.accessToken = 'pk.eyJ1IjoibWxhbW90YTIwMjAiLCJhIjoiY2xjNWdyZXplNTd4czNvcGxzenp3YnUydSJ9.vU6MF5MJ8j4SmrkhbW00wg';
                const map = new mapboxgl.Map({
                container: 'mapview',
                style: 'mapbox://styles/mlamota2020/clc5h5f7e002y14n2jxh4xgtc',
                center: [-80.082, -2.236],
                zoom: 14,
                });

                const geojson = {
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [-80.084, -2.240]
                        },
                        properties: {
                          title: 'Colibrí',
                          description: 'No se encuentra información de seguridad de esta zona.'
                        }
                      },
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [-80.080, -2.236]
                        },
                        properties: {
                          title: 'Centro',
                          description: 'No se encuentra información de seguridad de esta zona.'
                        }
                      },
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [-80.074, -2.231]
                        },
                        properties: {
                          title: 'La Renta',
                          description: 'No se encuentra información de seguridad de esta zona.'
                        }
                      }
                    ]
                  };

                // add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        \`<h3>\${feature.properties.title}</h3><p>\${feature.properties.description}</p>\`
      )
  )
  .addTo(map);
}

                
                `}
            </Script>
</>
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
                                    <Link
                href="/"
                  
                >
                  <a className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 on_secondary_container text-base font-medium secondary_container_text hover:secondary sm:mt-0 sm:col-start-1 sm:text-sm">Volver</a>
                </Link>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }
}