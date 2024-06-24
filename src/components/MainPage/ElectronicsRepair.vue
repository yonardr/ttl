<template>
  <article>
    <h2>
      Ремонт промышленной электроники
    </h2>
    <swiper
        :slidesPerView="3"
        :grid="{
      rows: 2,
    }"
        :spaceBetween="30"
        :pagination="{
      clickable: true,
    }"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="item in data">
        <router-link :to="{path: `catalog/${item.id}`}" style="text-decoration: none">
        <div class="_container_slide">
          <img :src="imgUrl(item.imgs[0].path)" />
          <div class="title">
            {{item.title}}
          </div>
        </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
    </swiper>
  </article>
</template>

<script>
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/vue";
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {useFetchFromType} from "../hooks/useFetchFromType.js";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(){
    const {data} = useFetchFromType()

    const imgUrl = (path) => new URL(`${import.meta.env.VITE_APP_API_URL}${path}`, import.meta.url).href

    return {
      data, imgUrl,
      modules: [Grid, Pagination],
    }
  }
}
</script>

<style lang="scss" scoped>
h2{
  margin-top: 100px;
  margin-bottom: 20px;
}
article{

}
.swiper {
  width: 100%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
._container_slide{
  display: flex;
  align-items: center;
  img{
    width: 250px;
    border-radius: 20px;
    margin: 10px;
    height: 200px;
  }
  .title{
    color: #404040;
    font-family: GothamMedium, serif;
  }
}

</style>