<template>
   <leftSidebar />

   <div class="cluster bg-gray-100 p-4 sm:ml-64 flex">
   <div class="cluster bg-gray-100 mt-20 w-auto  ">
      <div class="w-full h-15 border-b-2 border-solid text-center">
         <ul class="flex justify-center space-x-10 mx-10"> 
            <li><router-link to="/DbDashboard" >Cluster Info</router-link></li>
            <li><router-link to="/cluster-setting" >Cluster Settings</router-link></li>
            <li><a href="#" class="link-style">DB Configuration</a></li>
            <li><a href="#" class="link-style">Additional Settings</a></li>
         </ul>
      </div>
     
      <h1 class="ml-[40px] mt-10 py-4 text-gray-900 text-xl font-semibold">Select the type of cluster you want to use</h1>
      <div class="ml-[40px]">
         <div class="col-span-2 mb-5">
            <div>
               <h1 class="py-4 text-gray-900 text-xl font-semibold">Cluster Type</h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
               <div class="h-72 w-72 bg-white border-4 border-t-slate-800 rounded-md text-center" :class="{ 'selected': selectedType == 'single' }">
 
                  <label for="single">
                      <input type="radio" id="single" class="hidden" value="single" v-model="selectedType"
                          @change="updateType">
                      <h1 class="pt-8 text-gray-900 font-semibold">Single Node cluster</h1>
                      <p class="pt-8 px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Cumque,
                          obcaecati pariatur? Minostrum dolores quo ipsa debitis ullam corrupti ipsum.</p>
                  </label>
              </div>

              <div class="h-72 w-72 ml-12 bg-white border-4 border-t-slate-800 rounded-md text-center" :class="{ 'selected': selectedType == 'multiple' }">

                  <label for="multiple">
                      <input type="radio" id="multiple" class="hidden" value="multiple" v-model="selectedType"
                          @change="updateType">
                      <h1 class="pt-8 text-gray-900 font-semibold">Primary/Standby High Availability</h1>
                      <p class="pt-8 px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Cumque,
                          obcaecati pariatur? Minostrum dolores quo ipsa debitis ullam corrupti ipsum.</p>
                  </label>
              </div>
            </div>

            <!-- Where to Deploy -->
            <div class="mt-5">
               <h1 class="py-4 text-gray-900 text-xl font-semibold">Where to Deploy</h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
               <div class="h-72 w-72 bg-white border-t-8 border-t-slate-800 rounded-md text-center">                 
                  <div>
                     <p class="object-contain h-72 w-72 max-w-full rounded-lg"> 
                        BitBlast
                     </p>
                 </div>
               </div>
               <div class="h-72 w-72 ml-12 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                  <div>
                     <p class="object-contain h-72 w-72 max-w-full "> Other </p>
                  </div>             
               </div>
            </div>

            <!-- Providers Type -->
            <div class="mt-5">
               <h1 class="py-4 text-gray-900 text-xl font-semibold"> Providers </h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
               <div class="h-72 w-72 bg-white border-t-8 border-t-slate-800 rounded-md text-center">                 
                  <div>
                     <img class="object-contain h-72 w-72 max-w-full rounded-lg" src="@/assets/static/cloudstack.png" alt="">
                 </div>
               </div>
               <div class="h-72 w-72 ml-12 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                  <div>
                     <img class="object-contain h-72 w-72 max-w-full rounded-lg" src="@/assets/static/vmware.png" alt="">
                 </div>               </div>
            </div>

         </div>
      </div>
   </div>
<!-- Cluster summary -->
   <clusterSum/>
</div>
   <fooTer />
</template>

<script>
import leftSidebar from '@/components/leftSidebar.vue';
import fooTer from '@/components/fooTer.vue';
import clusterSum from '@/components/clusterSummary.vue';

export default {
   components: {
      leftSidebar,
      fooTer,clusterSum
   },
   data(){
      return{
         selectedType: 'single',
         options: [
                { value: 'single', label: 'single' },
                { value: 'multiple', label: 'multiple' },
         ],

      }
   },
   methods:{
      updateType() {
            this.selectedType = this.selectedType
        },
   }
}
</script>


<style > 
table, th, td {
  border: none; 
  border-collapse: separate;
}
th, td {
  padding: 5px 10px;
}

table {
  width: 100%;
}
.link-style {
   text-decoration: none; /* Remove the default underline */
   /* Set the dfault text color */
   font-weight: 600; /* Set the default font weight to make it bold */
   transition: color 0.2s, border-bottom-color 0.2s; /* Add a smooth transition effect */
 }
  
 .selected {
   color: rgb(229 231 235);
   box-shadow: grey;
   border-color: rgb(30 41 59);
}
</style> 