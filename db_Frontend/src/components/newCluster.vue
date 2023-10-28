<template>
    <HomeView></HomeView>
    <div class="cluster bg-gray-100">
        <div class="w-full mt-18 h-15 border-b-2 border-solid text-center">
            <h1 class="p-4 text-gray-900 text-2xl font-semibold">Create Cluster</h1>
        </div>
        <h1 class="ml-20 mt-10 py-4 text-gray-900 text-xl font-semibold">Select the type of cluster you want to use</h1>
        <div class="ml-20">
            

            <div class="col-span-2 mb-5">
                <div>
                    <h1 class="py-4 text-gray-900 text-xl font-semibold">Cluster Type</h1>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="h-72 w-72 mx-15 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
                        <h1 class="pt-8 text-gray-900 font-semibold">Single Node cluster</h1>
                        <p class="pt-8 px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
                            obcaecati pariatur? Minostrum dolores quo ipsa debitis ullam corrupti ipsum.</p>
                    </div>
                    <div class="h-72 w-72 mx-15 bg-white border-t-8 border-t-slate-800 rounded-md text-center">
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
</template>

<script>
import HomeView from '../views/HomeView.vue';

export default{
    components:{
        HomeView,
    }
}
</script>

<style>
.cluster {
    margin-top: 75px;
    margin-left: 290px;
    max-height: 80rem;
    min-height: 80rem;
}
</style>