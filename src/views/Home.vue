<template>
  <div class="home mt-4">
    <AccountList/>
    <div class="mt-4">
      <h4 class="heading is-size-4 text-uppercase">History</h4>
      <div class="border rounded">
	    <b-input-group class="p-1">
          <b-dropdown text="All" variant="outline-secondary" slot="prepend">
            <b-dropdown-item>All</b-dropdown-item>
            <b-dropdown-item>In</b-dropdown-item>
            <b-dropdown-item>Out</b-dropdown-item>
          </b-dropdown>
          <b-form-input placeholder="Search for amount or hash"></b-form-input>
		  <b-button variant="outline-secondary" slot="append">
              <i class="fas fa-search"></i>
          </b-button>
	    </b-input-group>
        <b-table striped show-empty>
          <thead>
          <tr style="border-bottom: 1px solid rgb(234, 239, 236); color: rgb(26, 26, 26); height: 48px;">
            <th>Amount</th>
            <th>Status</th>
            <th>From</th>
            <th>&nbsp;</th>
            <th>To</th>
            <th></th>
          </tr>
          </thead>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    AccountList: require('@/components/AccountList.vue').default
  }
}
</script>
