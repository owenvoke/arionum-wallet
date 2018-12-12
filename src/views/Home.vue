<template>
  <div class="home">
    <img alt="Arionum logo" src="../assets/logo.png">
    <HelloWorld msg="Arionum Wallet"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
