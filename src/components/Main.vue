<template>
  <main class="main container">
    <MainCurrent/>
    <MainWeek/>
  </main>
</template>

<script>
import MainCurrent from './MainCurrent.vue'
import MainWeek from './MainWeek.vue'
  export default {
    components: {
      MainCurrent,
      MainWeek
    }
  }
</script>
