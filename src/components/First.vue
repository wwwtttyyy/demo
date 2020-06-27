<template>
  <div class="app">
    <!-- <a-button type="primary">AAAAA</a-button>
    <button @click="jump"> +</button>
    <h1>{{msg}}</h1>
    <slot></slot>

    <router-link to="/first/news" tag="button">news</router-link>
    <router-link  to="/first/message">message</router-link>
    <router-link :to="{path:'/hello',query:{name:'wty',age:'18'} }">message111</router-link> //传递参数 在函数中写的形参也是对象的形式
     -->
    <!-- <router-view></router-view> -->
    我是first
  </div>
</template>

<script>
// import HelloWorldVue from '../HelloWorld.vue';
export default {
  name:"First.vue",
  data(){
      return {
          msg:'hahaha',
      }
  },
  methods:{
      jump(){
          // this.$router.go(-1);//turn back
          this.$router.push({name:'myvue'});//路由
      }
  },

}
</script>

<style lang="less">

</style>