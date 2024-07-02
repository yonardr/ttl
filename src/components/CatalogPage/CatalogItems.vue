<template>
  <div class="wrapper">
    <div v-for="item in services">
      <router-link :to="{path: 'catalog' + `/${item.id}`}" style="text-decoration: none; display: flex; justify-content: center">
      <div class="container__service">
        <div class="service__img">
          <img :src="imgUrl(item.imgs[0].path)" />
        </div>
        <div class="service__title">{{item.title}}</div>
        <div class="service__des">
          <p class="demo-1">{{item.des}}</p>
          </div>
        <div class="btn">
          <BlueButton>Подробнее</BlueButton>
        </div>

      </div>
      </router-link>
    </div>
  </div>

</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import BlueButton from "../UI/BlueButton.vue";

export default {
  components: {BlueButton},
  setup(){
    const store = useStore()

    onMounted(()=> store.dispatch('fetchServices'))
    const services = computed(()=> store.getters.getServices)

    const imgUrl = (path) => new URL(`${import.meta.env.VITE_APP_API_URL}${path}`, import.meta.url).href

    return {services, imgUrl}
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
   display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container__service{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 11px 11px 11px 11px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  height: 350px;
  padding: 10px;
  justify-content: space-between;
  margin: 20px;
  width: 400px;
  color: #404040;
  .service__img{
    padding: 5px;
  }
  img{
    border-radius: 30px 30px 0px 0px;
    width: 100%;
    height: 140px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .service__title{
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .service__des{
    color: #404040;
    text-align: center;
    line-height: 120%;
  }
  .demo-1 {
    width: 100%;
    max-height: 40px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .btn{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 10px;
  }
}
@media (max-width: 1024px){
  .container__service {
    width: 300px;
  }
}
@media (max-width: 768px) {
  .container__service{
    width: 80%;
    height: 80%;
    img{
      height: 100%;
    }
  }
}
</style>