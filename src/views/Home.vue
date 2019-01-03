<template>
  <div class="home mt-4">
    <AccountList/>
    <History/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    AccountList: require('@/components/AccountList.vue').default,
    History: require('@/components/History.vue').default
  }
}
</script>
