<template>
<div>
    <button class="button is-primary" @click="goToHome">Go to home</button>
    <google-maps :lat="lat" :lng="lng" :zoom="zoom"></google-maps>
</div>
</template>

<script>
import GoogleMaps from './GoogleMaps.vue'
export default {
  components: { GoogleMaps },
  data(){
      return {
          lat: 59.426976,
          lng: 24.7434596,
          zoom: 18.25
      }
  },
  methods: {
      goToHome(){
          this.lat = 59.435273;
          this.lng = 24.7165657;
          this.zoom = 19.75;
      }
  }
}
</script>

<style>

</style>