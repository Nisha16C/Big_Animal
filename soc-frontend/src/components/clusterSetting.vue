<template>
<leftSidebar/>
<div class="p-4 sm:ml-64   ">
  <div class="w-6/6">
    <div class="   mt-20">
      <h1>Cluster Name and Password</h1>      
       
            <div class="mb-6">
            <label for="cname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cluster Name</label>
            <input type="text" id="cname" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cluster Name" required>
            </div>
            <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
            <input type="password" id="password" placeholder="*************" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <p class="text-gray-400 mt-2">We do not store your password and cannot retrieve it. If you forget your password, you can simply change it on the "Edit Cluster" page.</p>
           
    </div>

    <div class="mt-5">
        <h1>Database Type and Versions</h1>      
            <p class="mb-3">  Postgres Type</p>
            <button class="p-3  bg-gray-600 hover:bg-gray-800">PostgreSQL</button>
            <button class="p-3  bg-gray-800 hover:bg-gray-600">Postgres Advanced Server</button>
                 
            <p class="mt-3 mb-3">  Postgres Version </p>
                <select class="select">
                    <option value="15">15</option>
                    <option value="14">14</option>
                    <option value="13">13</option>
                </select>

                <div class="bg-blue-900 w-36 p-2 rounded-xl mt-3 ">
                    <button type="submit" class="btn">Create Cluster</button>
                </div>
             
    </div>
  </div>  
</div>
    
<div class="container2">

   
    </div>
<fooTer/>    
</template>

<script>
import leftSidebar from '@/components/leftSidebar.vue'

import fooTer from '@/components/fooTer.vue'

export default {
  components: {
    leftSidebar,
    fooTer,
  },
  data() {
    return {
      selectedTools: [],

    };
  },

};
</script>

<style scoped>
   
  h1 {
    font-weight: bold;
    margin-bottom: 20px;
  }
   
 
 
  #heading{
    margin-bottom: 31px;
  }
   
  .password-info {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
   


  .select {
    width: 100px;
    padding: 5px;
    border: 1px solid #000000;
    border-radius: 5px;
    margin-bottom: 10px;
  }
input{
    width: 400px;
}
</style>