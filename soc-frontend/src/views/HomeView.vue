<template>
   <leftSidebar />

   <div class="main p-4 sm:ml-64 mt-20">
      <div class="box-border h-96 w-2/3 border-2 border-red-400 rounded-md shadow-md shadow-red-400/50">
      <div class="text-center">
      <h1 class="pt-20 text-4xl font-bold">Hello User!</h1>
      <h2 class="pt-5 text-xl font-medium">Let's create a cluster</h2>
      <div class="pt-5">
      <router-link to="/socDashboard" class="bg-slate-800 w-96  p-3 h-10 text-center text-gray-200 rounded-md">
                              Create New Cluster
      </router-link>
      </div>
      </div>
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

