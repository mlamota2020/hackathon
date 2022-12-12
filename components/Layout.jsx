import Link from "next/link";
import Image from "next/image";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  BellIcon,
  MenuAlt1Icon,
  XIcon,
  FlagIcon,
  CheckIcon,
  PlusIcon,
  ChatAlt2Icon,
  HomeIcon,
  MapIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { useSession, signOut } from 'next-auth/react'

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

export default function Layout({ children, title, description, activePage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession()

  if (title && description) {
    return (
      <div className="relative h-screen flex overflow-hidden secondary_container">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 flex z-40 lg:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 surface bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 secondary_container">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <span className="ml-3 text-lg text-white font-semibold">
                  Reportex
                </span>
                <nav
                  className="mt-5 flex-shrink-0 h-full secondary_container overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    <Link href="/dashboard">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <HomeIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Inicio
                      </a>
                    </Link>

                    <Link href="/dashboard/reports/add">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Crear reporte
                      </a>
                    </Link>

                    <Link href="/map">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <MapIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Mapa
                      </a>
                    </Link>
                  </div>
                  <div className="mt-24">
                  <div
                    className="px-6 py-5 flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={session.user.image} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium primary_text">{session.user.name}</p>
                      <p className="text-sm on_primary_container_text truncate">{session.user.email}</p>
                    </div>
                  </div>
                </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0 min-h-screen overflow-hidden">
          <div className="flex flex-col w-64 overflow-hidden">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow secondary_container pt-5 pb-4 overflow-y-hidden">
              <span className="ml-3 text-lg text-white font-semibold">Reportex</span>
              <nav
                className="mt-5 flex-shrink-0 h-full overflow-y-hidden secondary_container"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  <Link href="/dashboard">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <svg
                        className="mr-4 flex-shrink-0 h-6 w-6 primary_text"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Inicio
                    </a>
                  </Link>

                  <Link href="/dashboard/reports/add">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Crear reporte
                    </a>
                  </Link>

                  <Link href="/map">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <MapIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Mapa
                    </a>
                  </Link>
                </div>
                <div className="mt-24">
                  <div
                    className="px-6 py-5 flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={session.user.image} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium primary_text">{session.user.name}</p>
                      <p className="text-sm on_primary_container_text truncate">{session.user.email}</p>
                    </div>
                  </div>
                  <button
        type="button"
        className="inline-flex items-center ml-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white tertiary_container hover:on_tertiary tertiary_text"
        onClick={() => signOut()}
      >
        Cerrar sesión
      </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto focus:outline-none">
          <div className="relative z-10 flex-shrink-0 flex h-16 on_secondary lg:hidden visible">
            <button
              className="px-4 text-neutral-400 focus:outline-none lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto">
            <div className="secondary_container">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          <h1 className="ml-3 text-2xl font-bold leading-7 secondary_text sm:leading-9 sm:truncate">
                            {title}
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Descripción</dt>
                          <dd className="mt-3 ml-3 lg:ml-0 flex items-center text-sm on_secondary_container_text font-medium sm:mr-6 sm:mt-0">
                            {description}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen flex overflow-hidden surface_variant">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 flex z-40 lg:hidden"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 secondary bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 on_primary">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <Image
                    className="h-8 w-auto"
                    src="/icons/logo-white.png"
                    alt="Reportex"
                    width={32}
                    height={32}
                  />
                  <span className="ml-3 text-lg text-white font-semibold">
                    Reportex
                  </span>
                </div>
                <nav
                  className="mt-5 flex-shrink-0 h-full divide-y divide-blue-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    <Link href="/dashboard">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <HomeIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Inicio
                      </a>
                    </Link>

                    <Link href="/dashboard/reports/add">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Crear reporte
                      </a>
                    </Link>

                    <Link href="/blog">
                      <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                        <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                        Mapa
                      </a>
                    </Link>

                    <img src={session.user.image} alt="" />
                    <p>{session.user.name}</p>
                    <p>{session.user.email}</p>
                    <button onClick={() => signOut()}></button>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0 min-h-screen overflow-hidden">
          <div className="flex flex-col w-64 overflow-hidden">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow primary_container pt-5 pb-4 overflow-y-hidden">
              <div className="flex items-center flex-shrink-0 px-4 text-white font-semibold text-xl">
                <Image
                  className="h-8 w-auto"
                  src="/icons/logo-white.png"
                  alt="Reportex"
                  width={32}
                  height={32}
                />
                <span className="ml-3">Reportex</span>
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-blue-800 overflow-y-hidden"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  <Link href="/dashboard">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <svg
                        className="mr-4 flex-shrink-0 h-6 w-6 primary_text"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Inicio
                    </a>
                  </Link>

                  <Link href="/dashboard/reports" aria-current="page">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <FlagIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Reportes
                    </a>
                  </Link>

                  <Link href="/dashboard/reports/resolved">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <CheckIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Resueltos
                    </a>
                  </Link>

                  <Link href="/dashboard/reports/add">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <PlusIcon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Crear reporte
                    </a>
                  </Link>

                  <Link href="/blog">
                    <a className="on_primary_container_text hover:text-white hover:tertiary_container group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <ChatAlt2Icon className="mr-4 flex-shrink-0 h-6 w-6 primary_text" />
                      Blog
                    </a>
                  </Link>
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    <Link href="/user/settings">
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md on_primary_container_text hover:text-white hover:tertiary_container">
                        <svg
                          className="mr-4 h-6 w-6 primary_text"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Ajustes
                      </a>
                    </Link>

                    <Link href="/help">
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md on_primary_container_text hover:text-white hover:tertiary_container">
                        <svg
                          className="mr-4 h-6 w-6 primary_text"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Ayuda
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto focus:outline-none">
          <div className="relative z-10 flex-shrink-0 flex h-16 on_secondary border-b border-blue-900 lg:border-none">
            <button
              className="px-4 border-r border-blue-900 text-neutral-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  }
}
