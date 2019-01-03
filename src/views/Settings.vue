<template>
  <div class="settings mt-4">
    <h2>Settings</h2>

  <b-form-group>
    <b-form-input v-model="settings.nodeUri"></b-form-input>
  </b-form-group>

  <b-button @click="saveSettings" variant="primary">Save</b-button>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      settings: {
        nodeUri: 'https://peer1.arionum.com'
      }
    }
  },
  mounted () {
    if (localStorage.getItem('~/settings')) {
      this.settings = JSON.parse(localStorage.getItem('~/settings'))
    }
  },
  methods: {
    saveSettings: function () {
      localStorage.setItem('~/settings', JSON.stringify(this.settings))
    }
  }
}
</script>
