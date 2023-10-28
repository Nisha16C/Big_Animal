<template>
    <nav class="Navbar fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
      
              <router-link to='/' class="flex ml-2 md:mr-24">
                <img src="@/assets/static/DURGA.png" class=" mr-3 w-6 h-8 rounded-full" alt="DURGA Logo" />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Security Operations And Security</span>
              </router-link>
            </div>
            <div class="flex items-center">
                <div class=" flex items-center ml-3" >
                  <div class="flex">
                     <button v-if="isDark ===false" @click="toggleDarkMode" id="theme-toggle" type="button" class=" mr-5 flex text-gray-500  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-dark-icon" class=" w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button> 
                    <button v-else @click="toggleDarkMode" id="theme-toggle" type="button" class="mr-5 flex text-gray-500  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5">
                        <svg id="theme-toggle-light-icon" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>      
                    </button> 
                   
                    
                    <button @click="userToggle" type="button" class="flex text-sm mt-3 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                      <span class="sr-only">Open user menu</span>
                      <img class="w-8 h-8 rounded-full" src="@/assets/static/admin.jpeg" alt="user photo">
                    </button>
                  </div>
                  <div :class="{ 'hidden' : !UserToggle }" class="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div class="px-4 py-3" role="none">
                      <p class="text-sm text-gray-900 dark:text-white" role="none">
                        Admin
                      </p>
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        admin.soc@os3.com
                      </p>
                    </div>
                    <ul class="py-1" role="none">
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Billing</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>
<leftSidebar/>
<div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20" >   
       <div class="items-center p-4 justify-center h-auto  m-10 rounded bg-gray-50 dark:bg-gray-800">

        <h1 class="items-center text-gray-800 dark:text-white text-xl font-bold"> Choose Your Rules</h1>
        <div class="flex items-center m-4">
            <input id="default-checkbox" v-model="selectedRules" type="checkbox" value="rule-1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Alert When user created and deleted within 60 min.
            </label>
        </div>
        <div class="flex items-center m-4">
            <input  id="-checkbox" v-model="selectedRules" type="checkbox" value="rule-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                File Changes Detections
            </label>
        </div>
        <div class="flex items-center m-4">
            <input  id="-checkbox" v-model="selectedRules" type="checkbox" value="rule-3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Unauthorised Login Protections
            </label>
        </div>
    
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <h1 class="items-center text-gray-800 dark:text-white text-xl font-bold"> Choose Your Servers </h1>
        <div class="flex items-center m-4" v-for="(server,index) in servers" :key="index">
            <input  id="-checkbox" v-model="SelectedServer" type="checkbox" :value="server.ip" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {{ server.name }} 
            </label>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

        <button @click="toggleModal" v-if="applybtshow" class="flex  items-center  bg-gray-800 hover:bg-gray-600 dark:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg ">
            Apply
          </button>
       </div>   
    </div>
 </div>


<!-- Modal -->
<div id="modal" v-show="isModalVisible"  tabindex="-1" class="fixed top-0 left-0 right-0 bottom-0 
z-50 flex  justify-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0">
  <div class="relative w-[700px] ">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

          <button @click="toggleModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
          </button>
          
          <div class="p-6 ">
              <h3 class="mb-5 text-lg font-normal text-black dark:text-gray-400"> 
                You are going to apply the  rules on these systems. </h3>
              <div class=" mb-6" v-for="(server, index) in SelectedServer" :key="index">
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-md">
                      <div class="text-gray-400 dark:text-white">
                          {{ server }}
                      </div>
                      
                    </div>               
            </div>
            <button @click.prevent="triggerPipeline"
                    class=" py-2.5 px-4 text-xs font-medium text-center text-blsck bg-black text-white mr-2 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Proceed
            </button>
            <button @click="toggleModal" type="button" class="py-2.5 px-4 text-xs font-medium text-center text-blsck bg-red-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Cancle
          </button>
          </div>
      </div>
  </div>
</div>
</template>

<script>

import leftSidebar from './leftSidebar.vue';

export default {
    components:{
      leftSidebar,
    },
    computed:{
      applybtshow(){
        return this.selectedRules.length >0
      }
    },
    data(){
        return{
            selectedRules: [],
            SelectedServer:[],
            servers: [
             { name: 'Ubuntu Server', ip: '192.168.1.1' },
             { name: 'Redhat  Server ', ip: '192.168.1.2' },
             { name: 'Suse Server ', ip: '192.168.1.3' },
       
      ],
      isModalVisible: false,
        }
    },
    methods:{
        toggleModal() {
            this.isModalVisible = !this.isModalVisible;
    },
    }
}

</script>