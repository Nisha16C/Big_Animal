
<template>
  <header class="fixed top-0 z-50 bg-red-400 w-full">
    <nav class="mx-auto flex w-11/12 items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <h1 class="text-lg font-semibold">Big Animal</h1>
        </a>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="leading-6 text-gray-900">Products</a>
        <a href="#" class="leading-6 text-gray-900">Marketplace</a>
        <a href="#" class="leading-6 text-gray-900">Features</a>
        <a href="#" class="leading-6 text-gray-900">Company</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- <div @click="userToggle" class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
          {{ getFirstLetter(Username) }}
        </div> -->
        <button @click="userToggle" type="button" class="flex text-sm mt-3 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-10 h-10 rounded-full" src="@/assets/static/admin.jpeg" alt="user photo">
              </button>
      </div>

      <div :class="{ 'hidden': !UserToggle }" class="fixed top-5 right-1
            z-50 mt-16 text-base list-none bg-white divide-y divide-gray-100
            rounded shadow dark:bg-gray-700 dark:divide-gray-600" style="background-color: #1e293b;">
        <div class="px-4 py-3" role="none">
          <p class="text-sm text-gray-200 dark:text-white" role="none">
            {{ Username }}
          </p>
          <p class="text-sm font-medium text-gray-200 truncate dark:text-gray-300" role="none">
            {{ Username }}comapny.com
          </p>
        </div>
        <ul class="py-1" role="none">
          <li>
            <a href="#"
              class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">Dashboard</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">Billing</a>
          </li>
          <li>
            <a @click.prevent="logout" href="#"
              class="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">Sign out</a>
          </li>
        </ul>
      </div>

    </nav>

  </header>
  <!-- transition-transform -translate-x-full -->

  <aside id="logo-sidebar" class="fixed top-0 z-40 left-0 w-72 h-screen pt-20 bg-slate-800" aria-label="Sidebar">

    <div class="h-full px-3 pb-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="/home"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="folder" width="1em" height="1em" fill="currentColor"
              aria-hidden="true">
              <path
                d="M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z">
              </path>
            </svg>
            <span class="ml-3">Preeti's Dashboard</span>
          </a>
        </li>
        <hr>
        <li>
          <a href="/overview"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="layout" width="1em" height="1em" fill="currentColor"
              aria-hidden="true">
              <path
                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z">
              </path>
            </svg>
            <span class="ml-3">Overview</span>
          </a>
        </li>
        <li>
          <a href="#HOM"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="database" width="1em" height="1em"
              fill="currentColor" aria-hidden="true">
              <path
                d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z">
              </path>
            </svg>
            <span class="ml-3">Cluster</span>
          </a>
        </li>
        <li>
          <a href="#HOM"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="pie-chart" width="1em" height="1em"
              fill="currentColor" aria-hidden="true">
              <path
                d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z">
              </path>
            </svg>
            <span class="ml-3">Regions</span>
          </a>
        </li>
        <li>
          <a href="#HOM"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="user" width="1em" height="1em" fill="currentColor"
              aria-hidden="true">
              <path
                d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z">
              </path>
            </svg>
            <span class="ml-3">Users</span>
          </a>
        </li>
        <li>
          <a href="#HOM"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="cloud" width="1em" height="1em" fill="currentColor"
              aria-hidden="true">
              <path
                d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z">
              </path>
            </svg>
            <span class="ml-3">Cloud Providers</span>
          </a>
        </li>
        <li>
          <a href="#HOM"
            class="flex items-center p-2 mt-3 text-gray-200 rounded-lg hover:text-red-400 hover:drop-shadow-lg">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="unordered-list" width="1em" height="1em"
              fill="currentColor" aria-hidden="true">
              <path
                d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z">
              </path>
            </svg>
            <span class="ml-3">Activity Log</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  data() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      isDark,
      toggleDark,

      isDropdownOpen: false,

      UserToggle: false,
      Username: ''

    };
  },
  created() {
    this.Username = sessionStorage.getItem('username')
  },

  methods: {
    toggleDarkMode() {
      this.toggleDark();
    },
    toggleDropdown() {

      this.isDropdownOpen = !this.isDropdownOpen
    },
    userToggle() {

      this.UserToggle = !this.UserToggle;
    },

    logout() {
      console.log("logout");
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('username');
      window.location.reload()
    },
    getFirstLetter(username) {
      //  return username.charAt(0,1).toUpperCase();
    },
  },

};

</script>
