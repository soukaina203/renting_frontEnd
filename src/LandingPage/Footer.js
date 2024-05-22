import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer
        class="flex flex-col items-center bg-black mt-[4rem]
   text-white text-center text-surface ">
        <div class="container px-6 pt-6">
          <div class="mb-6 flex justify-between items-center space-x-2 
 p-[4rem] translate-y-[-50%] bg-[#E81041]  ">

            <h1 className="  text-2xl font-bold uppercase p-[1.2rem] text-white
         bg-[#E81041] lg:ml-[2rem]">
              BestCar
            </h1>
            <div className="ml-4">
              <p>Requesting A Call</p>
              <p className="font-bold">(629) 555-0129</p>
            </div>


            <div className='flex gap-2 '>
              <div className="group bg-[#e36e89] rounded-md p-4 hover:bg-white transition duration-300 ease-in-out">
                <FaFacebookF className="text-white text-[1rem] transition duration-300 ease-in-out group-hover:text-[#EB335D]" />
              </div>

              <div className="group bg-[#e36e89]   rounded-md p-4 hover:bg-white transition duration-300 ease-in-out">
                <FaTwitter className="text-white text-[1rem] transition duration-300 ease-in-out group-hover:text-[#EB335D]" />
              </div>

              <div className="group bg-[#e36e89]  rounded-md p-4 hover:bg-white transition duration-300 ease-in-out">
                <FaInstagram className="text-white text-[1rem] transition duration-300 ease-in-out group-hover:text-[#EB335D]" />
              </div>
            </div>



          </div>

          <div>
            <form action="">
              <div
                class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div class="md:mb-6 md:ms-auto">
                  <p>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="relative md:mb-6" data-twe-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputEmail"
                    placeholder="Email address" />
                  <label
                    for="exampleFormControlInputEmail"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >Email address
                  </label>
                </div>

                <div class="mb-6 md:me-auto">
                  <button
                    type="submit"
                    class="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4">
            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Company
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">About
                  </a>
                </li>
                <li>
                  <a href="#!">Team</a>
                </li>
                <li>
                  <a href="#!">Faq
                  </a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Contact</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">(+888) 123 456 765</a>
                </li>
                <li>
                  <a href="#!">infoname@mail.com</a>
                </li>
                <li>
                  <a href="#!">Old city Street,USA
1212 New york-3500</a>
                </li>
               
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Services</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">Mechanic Masters</a>
                </li>
                <li>
                  <a href="#!">Speedy Auto Repair</a>
                </li>
                <li>
                  <a href="#!">Mobile Car Repair</a>
                </li>
                <li>
                  <a href="#!">Pro Auto Fix</a>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Links</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full bg-black/5 p-4 text-center">
          © 2023 Copyright:
          <a class="font-semibold "  href="https://tw-elements.com/"
          >
              BESTCAR

          </a>
          
        </div>
      </footer>
    </div>
  )
}

