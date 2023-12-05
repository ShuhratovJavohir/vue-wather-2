<template>
  <div class="main-week">
    <h3 class="main-week__title">На неделю</h3>
    <div class="main-week-cards">
      <MainWeekCard v-for="(day, index) in getWeek" :key="index" :day="day" :index="index"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainWeekCard from "./MainWeekCard.vue";
export default {
  components: {
    MainWeekCard,
  },
  computed: {
    ...mapState(["wether"]),
    
    getWeek(){
      return this.wether.data.daily
    }
  }
};
</script>

<style lang="scss" scoped>
</style>