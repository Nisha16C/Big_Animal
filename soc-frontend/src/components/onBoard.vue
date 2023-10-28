
<template>
    <leftSidebar/>
    <leftSidebar></leftSidebar>
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20" >   
           <div class="p-5 lex items-center justify-center h-auto mb-4 m-10 rounded bg-gray-50 dark:bg-gray-800">

                 <p class="text-gray-800  dark:text-white">On Board Your Servers </p> <br>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="server_ip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Server IP:</label>
                        <input type="text" id="server_ip" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0.0.0" required>
                    </div>
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User: </label>
                        <input type="text" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required>
                    </div>
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="server_ip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password</label>
                        <input type="password"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" required>
                    </div>
                </div>

                <button  class="flex  items-center  bg-gray-800 hover:bg-gray-600 dark:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg ">
                    OnBoard
                  </button>

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
}

</script>