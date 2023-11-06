"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Phone, Home, User2, MenuSquare, Star, BookUser } from "lucide-react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Button, Modal } from "antd";
import Cart from "./components/Cart";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Page sections */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <Home />
                        <p className=" ml-2 text-start">Home </p>
                      </div>
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <User2 />
                        <p className=" ml-2 text-start">About </p>
                      </div>
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <MenuSquare />
                        <p className=" ml-2 text-start">Menu </p>
                      </div>
                    </a>
                  </div>

                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <Star />
                        <p className=" ml-2 text-start">Reviews </p>
                      </div>
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <BookUser />
                        <p className=" ml-2 text-start">Contact Us </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Links */}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <div className="flex flex-row items-center">
                        <Phone width={20} height={20} />
                        <p className=" ml-2 text-start">(07443353419) </p>
                      </div>
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <Image
                      src="/svg/union-jack.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                      width={100}
                      height={100}
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      GBP
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-green-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over £30
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex  flex-row lg:ml-0">
                <a href="#">
                  <span className="sr-only">Aahar Flavours</span>
                  <Image
                    src="/images/logo/logo-removebg-preview.png"
                    alt="Aahar Flavours Logo"
                    width={50}
                    height={50}
                  />
                </a>
                <h2 className=" ml-2  justify-center  text-xl mt-3  text-green-500  font-sans italic font-extrabold">
                  Aahar Flavours
                </h2>
              </div>
              {/* Section buttons here */}
              <div className=" hidden lg:ml-6 lg:flex lg:space-x-8">
                <a
                  key="#"
                  href="#"
                  className="  flex items-center text-sm font-medium text-gray-700 hover:text-white  hover:bg-blue-500   rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  key="#"
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-white  hover:bg-blue-500   rounded-lg p-2"
                >
                  About
                </a>
                <a
                  key="#"
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-white  hover:bg-blue-500   rounded-lg p-2"
                >
                  Menu
                </a>
                <a
                  key="#"
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-white  hover:bg-blue-500   rounded-lg p-2"
                >
                  Reviews
                </a>
                <a
                  key="#"
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-white  hover:bg-blue-500   rounded-lg p-2"
                >
                  Contact Us
                </a>
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800 flex flex-row justify-center items-center"
                  >
                    <Phone width={20} height={20} />
                    <p className=" ml-2 text-start">(07443353419) </p>
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Order
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <Image
                      src="/svg/union-jack.svg"
                      alt="United Kingdom flag"
                      className="block h-auto w-5 flex-shrink-0"
                      width={50}
                      height={50}
                    />
                    <span className="ml-3 block text-sm font-medium">GBP</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    className="group -m-2 flex items-center p-2"
                    onClick={showModal}
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Button>
                  <Modal
                    title="Shopping Cart"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Cart />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
