<template>
  <div class="main-card">
    <h3>{{index == 0 ? "Сегодня" : index == 1 ? "Завтра" : getWeekday}}</h3>
    <p>{{getDay}} {{getMonth}}</p>
    <img :src="getImg" alt="" />
    <h3>{{ Math.round(day.temp.day) }}°</h3>
    <p class="main-card__feels">{{ Math.round(day.temp.night) }}°</p>
    <p>{{ day.weather[0].description }}</p>
  </div>
</template>

<script>
import { weatherName } from "@/icons";
import unix from '../unix'
export default {
  props: {
    day: { typeof: Object },
    index: {typeof: Number}
  },
  computed: {
    description() {
      return this.day.weather[0].description;
    },
    getImg() {
      return weatherName[this.description] || weatherName["ясно"];
    },
    getDay(){
      return unix(this.day.dt, 'day')
    },
    getWeekday(){
      return unix(this.day.dt, 'weekday')
    },
    getMonth(){
      return unix(this.day.dt, 'month')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>