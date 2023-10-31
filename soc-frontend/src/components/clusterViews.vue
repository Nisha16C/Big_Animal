<template>
  <leftSidebar />
  <div class="cluster p-4 sm:ml-64 mt-40 flex">
    <div class="text-black font-semibold text-4xl">
      Clusters
    </div>
    <div class="ml-auto">
      <router-link to="/DbDashboard" class="bg-slate-800 w-96 p-3 h-10 text-center text-gray-200 rounded-md">
        Create New Cluster
      </router-link>
    </div>
  </div>
  <div class="w-full h-15 border-b-2 p-4 sm:ml-64 border-solid mt-40 flex items-center">
    <ul class="flex space-x-10 mx-10">
      <!-- Adjust mx-10 for the desired left space -->
      <li><a href="#" class="link-style text-2xl" :class="{ 'link-style-default': isActive }" @mouseenter="isActive = true" @mouseleave="isActive = false">Active</a></li>
      <li><a href="#" class="link-style text-2xl" :class="{ 'link-style-default': isDeleted }" @mouseenter="isDeleted = true" @mouseleave="isDeleted = false">Deleted</a></li>
    </ul>
    <div class="relative ml-4">
      <input
        type="text"
        class="pl-8 pr-3 py-2 border rounded-lg w-48 bg-white border-gray-400 focus:border-primary-500 focus:ring-primary-500"
        placeholder="Search"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <!-- Search Icon (You can customize this part) -->
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-5.2-5.2M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="w-full h-30 p-4 sm:ml-64 border-solid mt-4 ml-64 items-center">
      <div class="mx-auto">
          <span class="text-gray-400 mb-2 text-2xl">No Data</span>
         
      </div>
  </div>

  <fooTer />
</template>

<script>
import leftSidebar from '@/components/leftSidebar.vue';
import fooTer from '@/components/fooTer.vue';

export default {
  components: {
    leftSidebar,
    fooTer,
  },
  data() {
    return {
      isActive: false,
      isDeleted: false,
    };
  },
};
</script>

<style scoped>
.link-style {
  text-decoration: none;
  color: black;
  font-weight: 600;
  transition: color 0.2s, border-bottom-color 0.2s;
}

.link-style-default {
  color: #ff007f;
  border-bottom: 2px solid #ff007f;
}
</style>