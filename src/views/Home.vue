<template>
  <div class="home mt-4">
    <div>
      <AccountList/>
    </div>
    <div class="mt-4">
      <h4 class="heading is-size-4 text-uppercase">History</h4>
      <div style="border-radius: 1px; background-color: rgb(255, 255, 255);">
        <div style="border: 1px solid rgb(234, 239, 236);">
          <div class="_9vPGV7Eqa0NzocH_CjwYL">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">All</button>
                <button class="btn btn-outline-secondary" type="button">In</button>
                <button class="btn btn-outline-secondary" type="button">Out</button>
              </div>
              <input type="text" class="form-control" placeholder="Search for amount or hash">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div>
              <div style="height: auto; overflow: auto;">
                <div>
                  <table
                    style="background: rgb(255, 255, 255); width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: fixed; font-family: Rubik, Roboto, sans-serif;">
                    <thead style="border-bottom: 1px solid rgb(234, 239, 236);">
                    <tr style="border-bottom: 1px solid rgb(234, 239, 236); color: rgb(26, 26, 26); height: 48px;">
                      <th class="_1JGAslc1Kc4IO5yuELQSCK _2kktaTV-FrnwrpykESK9FA"
                          style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit;">
                        Amount
                      </th>
                      <th class="_1JGAslc1Kc4IO5yuELQSCK"
                          style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit; width: 72px;">
                        Status
                      </th>
                      <th class="_1JGAslc1Kc4IO5yuELQSCK"
                          style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit;">
                        From
                      </th>
                      <th class="r_YOJuKJL70AVtL4H1DVM"
                          style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit;">
                        &nbsp;
                      </th>
                      <th class="_1JGAslc1Kc4IO5yuELQSCK"
                          style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit;">
                        To
                      </th>
                      <th
                        style="font-weight: normal; font-size: 12px; padding-left: 24px; padding-right: 24px; height: 56px; text-align: left; white-space: nowrap; text-overflow: ellipsis; color: rgb(177, 191, 183); position: relative; background-color: inherit; width: 8px;"></th>
                    </tr>
                    </thead>
                  </table>
                </div>
                <div style="height: inherit; overflow-x: hidden; overflow-y: auto;">
                  <div rownumber="0" style="padding: 20px; color: rgb(128, 128, 128);"> There are
                    no
                    transactions.
                  </div>
                  <table
                    style="background: rgb(255, 255, 255); width: 100%; border-collapse: collapse; border-spacing: 0px; table-layout: fixed; font-family: Rubik, Roboto, sans-serif;">
                    <tbody>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
