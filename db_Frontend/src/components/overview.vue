<template>
    <HomeView></HomeView>
    <div class="main">
        <div class="box-border h-96 w-2/3 border-2 border-red-400 rounded-md shadow-md shadow-red-400/50">
            <div class="text-center">
                <h1 class="pt-20 text-4xl font-bold">Hello User!</h1>
                <h2 class="pt-5 text-xl font-medium">Let's create a cluster</h2>
                <div class="pt-5">
                    <button  @click="redirectToNewPage" class="bg-slate-800 w-96 h-10 text-center text-gray-200 rounded-md">
                        Create New Cluster
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomeView from '../views/HomeView.vue';
export default {

    components:{
        HomeView,
    },

  methods: {
    redirectToNewPage() {
      // Use Vue Router to navigate to the desired route
      this.$router.push('/cluster/new'); // Replace '/new-route' with your actual route
    }
  }
}
</script>

<style>

.main{
   margin-top: 250px;
   margin-left: 650px;
}
</style>