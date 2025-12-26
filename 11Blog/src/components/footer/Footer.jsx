import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-2 bg-[#3E2723] dark:bg-[#261C15] border border-t-2 border-t-[#1A120B] dark:border-t-[#1A120B] transition-colors duration-300">
      <div className="relative z-10 mx-auto w-full px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-white dark:text-[#F5F5DC]">
                  &copy; Copyright 2025. All Rights Reserved by Ayush Singh.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white dark:text-[#F5F5DC]">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-[#F5F5DC] hover:text-[#C04000] dark:hover:text-[#C04000]"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white dark:text-gray-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="https://x.com/aayuuuushh"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;