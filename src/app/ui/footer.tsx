import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row mb-2">
            <Instagram className="mx-2" />
            <Facebook className="mx-2" />
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Aayaam Limited™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <ul className="flex flex-wrap flex-row items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 text-black text-base"
            >
              <h2 className=" text-lg"> Find Us</h2>

              <p className=" text-gray-500">
                Hurst Road, <br /> Twyford Reading <br />
                RG10 0AH
              </p>
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap flex-row items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 text-black text-base"
            >
              <h2 className=" text-lg">Order</h2>
              <p className=" text-gray-500">
                07443353419 <br />
                aahargroups@gmail.com <br />
                Whatsapp : 07443353419
              </p>
            </a>
          </li>
        </ul>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Opening Hours
          </h5>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Monday: Closed </span>
            </li>
            <li>
              <span className="font-bold">Tuesday: Closed </span>
            </li>
            <li>
              <span className="font-bold">Wednesday: </span> 12:00 AM - 3:00 PM
            </li>
            <li>
              <span className="font-bold">Thursday: </span> 12:00 AM - 3:00 PM
            </li>
            <li>
              <span className="font-bold">Friday: </span> 12:00 AM - 3:00 PM
            </li>
            <li>
              <span className="font-bold">Saturday: </span> 12:00 AM - 3:00 PM
            </li>
            <li>
              <span className="font-bold">Sunday: </span> 5:00 PM - 10:00 PM
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
