<template>
  <div class="flex items-center lg:order-2">
    <button
      type="button"
      class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown"
    >
      <span class="sr-only">Open user menu</span>

      <!-- TODO: user avatar -->
      <img
        class="w-8 h-8 rounded-full"
        src="/img/logo.svg"
        alt="user photo"
      />
    </button>

    <div
      class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
      id="dropdown"
    >
      <!-- User info -->
      <div class="py-3 px-4">
        <span class="block text-sm font-semibold text-gray-900 dark:text-white">Kacper Dobrowolski</span>
        <span class="block text-sm text-gray-900 truncate dark:text-white">example@example.pl</span>
      </div>

      <!-- Top list -->
      <ul
        class="py-1 text-gray-700 dark:text-gray-300"
        aria-labelledby="dropdown"
      >
        <li>
          <a
            href="#"
            class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Ustawienia
          </a>
        </li>
      </ul>

      <!-- Bottom list -->
      <ul
        class="py-1 text-gray-700 dark:text-gray-300"
        aria-labelledby="dropdown"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Wyloguj się
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
