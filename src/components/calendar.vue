<template>
  <div>
    <vue-cal
      :events="events"
      selected-date="2021-02-09"
      :time-from="10 * 60"
      hide-weekends
      events-count-on-year-view
      events-on-month-view="short"
    >
      <template v-slot:no-event="">
        No event
      </template>
     <!-- <i v-slot:arrow-prev aria-hidden="true" class="v-icon material-icons">arrow_back</i> -->
      <!--<i v-slot:arrow-next aria-hidden="true" class="v-icon material-icons">arrow_forward</i> -->
  </vue-cal>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/zh-cn.js'
import 'vue-cal/dist/vuecal.css'
export default {
  name: 'Calendar',
  components: {
    VueCal
  },
  data () {
    return {
      events: [
        {
          start: '2021-02-09 10:35',
          end: '2021-02-09 11:30',
          title: 'Doctor appointment',
          content: '<i class="icon material-icons">block</i><br>I am not draggable, not resizable and not deletable.',
          class: 'blue-event'
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.blue-event
  background:blue
</style>
