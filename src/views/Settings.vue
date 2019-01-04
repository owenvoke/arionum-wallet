<template>
  <div class="settings mt-4">
    <h2>Settings</h2>

    <b-form-group class="mt-3" label="Node URI:">
      <b-form-input v-model="$aro.settings.node.uri" class="mb-2" placeholder="Enter node URI"></b-form-input>
    </b-form-group>

    <b-button @click="$aro.saveSettings" variant="primary">Save</b-button>
  </div>
</template>

<script>
export default {
  name: 'settings'
}
</script>
