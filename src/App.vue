<template>
  <div class="wrapper" v-if="wether">
    <Header />
    <Main />
  </div>
  <Loader v-else/>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Loader from './components/Loader.vue'
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Header,
    Main,
    Loader
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  computed: {
    ...mapState(["wether"]),
  },
  created() {
    this.getWeather("Ташкент");
  },
};
</script>

<style lang="scss" scoped>
</style>