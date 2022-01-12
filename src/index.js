let Vue = require('vue/dist/vue.common.dev');
require('bulma');
import Router from 'vue-router';
Vue.use(Router);


import App from './components/App.vue';
Vue.component('app', App);


import ApiExample from './components/ApiExample.vue';


let router = new Router({
    routes: [
        
        {path:'/api', component: ApiExample},
        
    ]
})


new Vue({
    el: '#app',
    router 
});
