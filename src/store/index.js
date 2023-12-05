import {
  createStore
} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    apiKey: '0dc4c42edd3bfedbf2cc94a830639e98',
    wether: null
  },
  mutations: {
    getWeather(state, payload){
      state.wether = payload
    }
  },
  actions: {
    async getWeather(context, city) {
      try {
        let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${context.state.apiKey}`)
        let {lat, lon, local_names} = response.data[0]
        if(local_names.ru.toLowerCase() == city.toLowerCase()){
          let response2 = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${context.state.apiKey}&units=metric&lang=ru`)
          let watherInfo = {...response2, name: city}
          context.commit('getWeather', watherInfo)
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
})