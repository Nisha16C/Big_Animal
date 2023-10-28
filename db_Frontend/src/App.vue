

<template>
  <router-view></router-view>
  <!-- <div class="main-container">
      <HomeView/>
      <HomeView @item-clicked="openRightPanel" /> 
      <RightView />
    </div> -->
  
</template>

<script>
import HomeView from './views/HomeView.vue'
import RightView from './views/RightView.vue'

export default {
  components: {
    HomeView,
    RightView,
  },
  
}
</script>

<style scoped>

</style>
