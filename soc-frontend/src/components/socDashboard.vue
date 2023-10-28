<template>
   <leftSidebar />

   <div class="cluster bg-gray-100 p-4 sm:ml-64 flex">

  
   <div class="cluster bg-gray-100 mt-20 w-auto  ">
      <div class="w-full h-15 border-b-2 border-solid text-center">
         <h1 class="p-4 text-gray-900 text-2xl ">Create Cluster</h1>
      </div>
      <h1 class="ml-[40px] mt-10 py-4 text-gray-900 text-xl font-semibold">Select the type of cluster you want to use</h1>
      <div class="ml-[40px]">
         <div class="col-span-2 mb-5">
            <div>
               <h1 class="py-4 text-gray-900 text-xl font-semibold">Cluster Type</h1>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
               <div class="h-72 w-72 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                  <h1 class="pt-8 text-gray-900 font-semibold">Single Node cluster</h1>
                  <p class="pt-8 px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
                     obcaecati pariatur? Minostrum dolores quo ipsa debitis ullam corrupti ipsum.</p>
               </div>
               <div class="h-72 w-72 ml-12 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                  <h1 class="pt-8 text-gray-900 font-semibold">Primary/Standby High Availability</h1>
                  <p class="pt-8 px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
                     obcaecati pariatur? Minostrum dolores quo ipsa debitis ullam corrupti ipsum.</p>
               </div>
            </div>
            <div class="mb-5">
               <h1 class="py-4 text-gray-900 text-xl font-semibold">Where to Deploy</h1>
               <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div class="h-48 w-48 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                     <h1 class="pt-8 text-gray-900 font-semibold">Option 1</h1>

                  </div>
                  <div class="h-48 w-48 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                     <h1 class="pt-8 text-gray-900 font-semibold">Option 2</h1>

                  </div>
               </div>
            </div>
            <div class="mb-5">
               <h1 class="py-4 text-gray-900 text-xl font-semibold">Select Region</h1>
               <div class="grid grid-cols-6 md:grid-cols-3 gap-4">
                  <div class="h-48 w-48 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                     <h1 class="pt-8 text-gray-900 font-semibold">Option 1</h1>

                  </div>
                  <div class="h-48 w-48 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                     <h1 class="pt-8 text-gray-900 font-semibold">Option 2</h1>
                  </div>
                  <div class="h-48 w-48 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                     <h1 class="pt-8 text-gray-900 font-semibold">Option 2</h1>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class=" cluster-sum  h-auto mt-20 p-5">
      <h1 class="text-2xl mb-5">Cluster Summary</h1>
       <table class="bg-pink-400 ">
         <tr>
           <th>Cluster Type</th>
           <td>Single Node</td>
         </tr>
         <tr>
           <th>Cluster Nodes</th>
           <td>1 node</td>
         </tr>
         <tr>
           <th>Deployment</th>
           <td>BitBlast</td>
         </tr>
         <tr>
           <th>Provider</th>
           <td>VMware (BitBlast)</td>
         </tr>
         <!-- <tr>
           <th>Region</th>
           <td>US East 1</td>
         </tr> -->
         <tr>
           <th>Cluster Name</th>
           <td>Default</td>
         </tr>
         <tr>
           <th>Postgres Type</th>
           <td>PostgreSQL</td>
         </tr>
         <tr>
           <th>Postgres Version</th>
           <td>15</td>
         </tr>
         <tr>
           <th>Instance Size</th>
           <td>m5.large, 2vCPU, 8GB RAM</td>
         </tr>
         <tr>
           <th>Volume Type</th>
           <td>General Purpose SSD (gp3)</td>
         </tr>
         <tr>
           <th>Volume Properties</th>
           <td>4 Gi, 3000 IOPS, 125 MB/s Disk Throughput</td>
         </tr>
         <tr>
           <th>Networking</th>
           <td>Public</td>
         </tr>
         <tr>
           <th>Backups Retention</th>
           <td>30 Days</td>
         </tr>
         <tr>
           <th>Maintenance Window</th>
           <td>Not Enabled</td>
         </tr>
         <tr>
           <th>PgBouncer</th>
           <td>Not Enabled</td>
         </tr>
         <tr>
           <th>pgvector</th>
           <td>Not Enabled</td>
         </tr>
       </table>
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
</style> 