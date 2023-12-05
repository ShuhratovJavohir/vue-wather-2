<template>
  <div class="main-current">
    <div class="main-current-left">
      <h2 class="main-current-left__temp">
        {{ Math.round(wether.data.current.temp) }}°
      </h2>
      <h2 class="main-current-left__day">Сегодня</h2>
      <p class="main-current-left__date">Время: {{ getTime }}</p>
      <p class="main-current-left__city">Город: {{ wether.name }}</p>
      <div class="main-current-left__img">
        <img :src="getImg" alt="sun icon" />
      </div>
    </div>
    <div class="main-current-right">
      <div class="main-current-right-item">
        <div class="main-current-right-item__img">
          <img src="../assets/images/temp.svg" alt="" />
        </div>
        <span class="main-current-right-item__name">Температура</span>
        <p class="main-current-right-item__desc">
          {{ wether.data.current.temp }} - ощущается как
          {{ wether.data.current.feels_like }}
        </p>
      </div>
      <div class="main-current-right-item">
        <div class="main-current-right-item__img">
          <img src="../assets/images/press.svg" alt="" />
        </div>
        <span class="main-current-right-item__name">Давление </span>
        <p class="main-current-right-item__desc">
          {{ wether.data.current.pressure }} мм ртутного столба -{{
            getPress
          }}
          м/с юго-запад - {{ getPress < 760 ? "Пониженный" : "Повышенный" }}
        </p>
      </div>
      <div class="main-current-right-item">
        <div class="main-current-right-item__img">
          <img src="../assets/images/osadka.svg" alt="" />
        </div>
        <span class="main-current-right-item__name">Осадки</span>
        <p class="main-current-right-item__desc">Без осадков</p>
      </div>
      <div class="main-current-right-item">
        <div class="main-current-right-item__img">
          <img src="../assets/images/wind.svg" alt="" />
        </div>
        <span class="main-current-right-item__name">Ветер</span>
        <p class="main-current-right-item__desc">
          {{ getWind }} м/с юго-запад -
          {{ getWind < 5 ? "легкий ветер" : "Сильный ветер" }}
        </p>
      </div>
      <img
        src="../assets/images/earth.png"
        alt=""
        class="main-current-right-item__earth"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { weatherName } from "../icons";
export default {
  computed: {
    ...mapState(["wether"]),
    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.wether.data.timezone,
        timeStyle: "short",
        hourCycle: "h23",
      });
    },
    getWind() {
      return Math.round(this.wether.data.current.wind_speed);
    },
    getPress() {
      return this.wether.data.current.pressure;
    },
    description() {
      return this.wether.data.current.weather[0].description;
    },
    getImg(){
      return weatherName[this.description] || weatherName['ясно']
    }
  },
};
</script>

<style lang="scss" scoped>
</style>