/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegramPlane,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import SocialCircle from "./socialCircle";

const navigation = [
  { name: "Tokenomics", href: "#" },
  { name: "Story", href: "#" },
  { name: "Contact", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="z-90">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-6 sm:pt-5 bg-blue-400">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-grow justify-between sm:items-center sm:px-10 ">
                <div>
                  <h1 className="ml-12 sm:ml-0 font-extrabold text-2xl text-white">
                    SURFER INU
                  </h1>
                </div>

                <div className="hidden md:block ">
                  <div className="flex lg:space-x-24 sm:space-x-16 content-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white font-semibold hover:underline text-md lg:text-xl"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-6 justify-self-end self-end">
                  <SocialCircle icon={faTwitter} />
                  <SocialCircle icon={faDiscord} />
                  <SocialCircle icon={faTelegramPlane} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-blue-900 ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-white hover:underline text-md lg:text-lg block px-3 py-2 rounded-md font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
