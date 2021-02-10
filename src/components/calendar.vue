<template>
  <div>
    <vue-cal
      :events="events"
      selected-date="2021-02-09"
      :time-from="10 * 60"
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
  props:['events'],
  components: {
    VueCal
  },
  data () {
    return {
  
    }
  }
}
</script>
<style lang="scss">
.blue-event {
  background:blue
}
.border {
  border: 1px solid rgba(0,0,0,0.12)
}
.vuecal__time-column .vuecal__time-cell {background: white;}
.vuecal__body {background-color: rgba(94, 255, 0, 0.74);color: white;}
.vuecal__menu, .vuecal__cell-events-count {background-color: #5442b9;}
.vuecal__menu button{border-bottom-color: #fff;color: #fff;}
.vuecal__menu button.active {background-color: rgba(255, 255, 255, 0.15);}
.vuecal__title-bar {background-color: #e4f5ef;}
.vuecal__cell.today, .vuecal__cell.current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell.selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell.selected:before {border-color: rgba(66, 185, 131, 0.5);}
.vuecal__cell.disabled {text-decoration: line-through;}
.vuecal__cell.disabled.before-min {color: #b6d6c7;}
.vuecal__cell.disabled.after-max {color: #008b8b;}
// event
.vuecal__event.leisure {background-color: rgba(253, 240, 66, 0.698);border: 1px solid rgb(233, 230, 46);color: #fff;}
// month
.vuecal--month-view .vuecal__cell {height: 80px;}
.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}
.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
