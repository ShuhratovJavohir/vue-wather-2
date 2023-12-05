<template>
  <header class="header container">
    <nav class="nav">
      <div class="nav__logo">
        <img class="nav__logo-img" src="../assets/images/logo.svg" alt="logo" />
        <span class="nav__logo-text">VUE Weather</span>
      </div>
      <div class="nav__search">
        <img
          class="nav__search-img"
          src="../assets/images/kaplya.svg"
          alt="kaplya"
        />
        <input
          class="nav__search-input"
          type="text"
          placeholder="Выбрать город"
          v-model="city"
          @keydown.enter="getWeather(city)"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      city: "",
    };
  },
  methods: {
    ...mapActions(['getWeather']),
  },
};
</script>

<style lang="scss" scoped>
</style>