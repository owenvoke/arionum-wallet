<template>
  <div class="mt-4">
    <h4 class="heading is-size-4 text-uppercase">History</h4>
      <div class="border rounded">
	    <b-input-group class="p-1">
          <b-form-input placeholder="Search for amount or hash"></b-form-input>
		  <b-button variant="outline-secondary" slot="append">
            <i class="fas fa-search"></i>
          </b-button>
	    </b-input-group>
      <b-table striped show-empty></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>
