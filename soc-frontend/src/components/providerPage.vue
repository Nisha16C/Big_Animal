<template>
    <leftSidebar />
    <div class="provider bg-gray-100 p-4 sm:ml-64 mt-20 flex">
      <div class="text-black font-semibold text-4xl">Providers</div>
    </div>
 
    <!-- Deployment Section -->
  <div class="provider  p-4 sm:ml-64 mt-4">
    <div class="text-black font-semibold text-2xl mb-2">Deployment</div>
    <button class="btn" @click="showConnectedProviders">BigAnimal</button>
    <button class="btn" @click="showNotConnectedProviders">Your Cloud Account</button>
  </div>
 
   <!-- Connection Status -->
   <div class="text-gray-700 text-sm sm:ml-64 mt-2 flex justify-center">
  Connection Status
</div>
 
 
    <!-- VMware Provider -->
    <div class="provider-item rounded border border-gray-300 p-4 sm:ml-64 mt-4 flex justify-between">
      <div>
        <img src="@/assets/static/vmware-logo.png" alt="VMware Logo" class="provider-logo" />
        <div class="provider-title">VMware</div>
      </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <div class="text-green-500">Connected</div>
      </div>
    </div>
  
    <!-- Harvester Provider -->
    <div class="provider-item rounded border border-gray-300 p-4 sm:ml-64 mt-4 flex justify-between">
      <div>
        <img src="@/assets/static/harvester-logo.png" alt="Harvester Logo" class="provider-logo" />
        <div class="provider-title">Harvester</div>
      </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <div class="text-green-500">Connected</div>
      </div>
    </div>
  
    <!-- Apache CloudStack Provider -->
    <div class="provider-item rounded border border-gray-300 p-4 sm:ml-64 mt-4 flex justify-between">
      <div>
        <img src="@/assets/static/apachecloudstack.png" alt="Apache CloudStack Logo" class="provider-logo" />
        <div class="provider-title">Apache CloudStack</div>
      </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <div class="text-green-500">Connected</div>
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
    }
  }
  </script>
  
  <style scoped>
  .provider-item {
    text-align: center;
  }
  
  .provider-logo {
    max-width: 100px;
  }
  .btn {
  margin-right: 10px;
  padding: 8px 16px;
  border: 2px solid #9BC666;
  border-radius: 8px;
  background-color: #fff;
  color: #9BC666;
  cursor: pointer;
}
 
.btn:hover {
  background-color: #9BC666;
  color: #fff;
}
  
  .provider-title {
    margin-top: 8px;
    font-weight: bold;
  }
  </style>