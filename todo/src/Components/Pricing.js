import React from "react";

const Pricing = () => {
  return (
    <section class="mb-32 text-white">
      <h2 class="mb-6 text-center text-white text-3xl font-bold">Pricing</h2>

      <p class="mb-12 text-center text-white dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet.
      </p>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
        <div class="mb-6 lg:mb-0">
          <div class="block h-full rounded-lg bg-card shadow-card  dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Hobby</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>Free</strong>
              </h3>

              <button
                type="button"
                class="inline-block w-full rounded border-2 border-primary bg-primary/70 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Unlimited updates
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block h-full rounded-lg bg-card shadow-card dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Basic</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 129</strong>
                <small class="text-sm text-neutral-500 dark:text-neutral-300">
                  /year
                </small>
              </h3>

              <button
                type="button"
                className="inline-block w-full rounded border-2 border-primary bg-primary/70 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Buy
              </button>
            </div>
            <div className="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Unlimited updates
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Git repository
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  npm installation
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block h-full rounded-lg border border-primary bg-grey  shadow-card dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Advanced</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 299</strong>
                <small class="text-sm text-neutral-500 dark:text-neutral-300">
                  /year
                </small>
              </h3>

              <button
                type="button"
                class="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[1px_4px_9px_-1px_#F71953] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_#F71953] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Unlimited updates
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Git repository
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  npm installation
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Code examples
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Premium snippets
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block h-full rounded-lg bg-card shadow-card dark:bg-neutral-700">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Enterprise</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 499</strong>
                <small class="text-sm text-neutral-500 dark:text-neutral-300">
                  /year
                </small>
              </h3>

              <button
                type="button"
                className="inline-block w-full rounded border-2 border-primary bg-primary/70 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Buy
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Unlimited updates
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Git repository
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  npm installation
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Code examples
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Premium snippets
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Premium support
                </li>
                <li class="mb-4 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Drag&amp;Drop builder
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
