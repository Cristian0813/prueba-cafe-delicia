'use client';

import Link from 'next/link';
import menuNavegacion from '@/data/menu';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '/public/logo-white.png';
import { Comforter_Brush } from 'next/font/google';

const comforter_brush = Comforter_Brush({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-center items-center w-full">
      <Disclosure
        as="nav"
        className={`backdrop-blur-sm bg-black/60 absolute z-10 ${
          menuOpen ? 'rounded-b-lg ' : 'rounded-full'
        } w-11/12 sm:w-8/12 md:w-7/12 top-10`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-14 items-center justify-between">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <Image src={Logo} width={25} height={25} alt="Logo" />
                  <a href="" className="ml-2">
                    <span className="font-semibold text-xl tracking-tight mr-2">
                      Café
                    </span>
                    <span
                      className={`${comforter_brush.className} font-semibold text-xl tracking-tight`}
                    >
                      Delicia
                    </span>
                  </a>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center space-x-4 sm:hidden">
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="absolute -inset-0.5 " />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="sm:flex sm:items-center sm:justify-end">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {menuNavegacion.map((item) => (
                        <Link
                          legacyBehavior
                          key={item.id}
                          href={item.route}
                          passHref
                        >
                          <a
                            className={`${
                              item.current
                                ? 'text-white hover:text-[#968875]'
                                : 'text-gray-300'
                            } rounded-md px-3 py-2 text-sm font-medium`}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.text}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {menuNavegacion.map((item) => (
                  <Link legacyBehavior key={item.id} href={item.route} passHref>
                    <a
                      className={`${
                        item.current
                          ? 'text-white hover:text-[#968875]'
                          : 'text-gray-300'
                      } block rounded-md px-3 py-2 text-base font-medium`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
