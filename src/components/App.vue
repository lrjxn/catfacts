<template>
<div class="has-background-dark">
  <div class="tabs is-centered is-large">
    <ul>
      <li v-for="(item,index) in items"
      :key="index"
      :class="{'is-active': index === active}"
      @click="active = index">
        <router-link :to="item.path" class="has-text-light">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
  <section class="section">
    <router-view></router-view>
  </section>
</div>
</template>

<script>

export default {
    created(){
      this.active = this.items.findIndex(item => item.path == this.$route.path);
    },
    data(){
      return {
        active: 0,
        items: [

          {title:'Api', path:'/api'},
          
        ]
      }
    }
}
</script>

<style>

</style>