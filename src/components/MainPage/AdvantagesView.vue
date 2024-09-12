<template>
  <article>
    <h2>Преимущества</h2>

    <div class="header__content">
      <div class="__container__phone">
        <div class="message">
          <div class="title">Чем могу вам помочь ?</div>
          <a href="tel:88432407717">
          <blue-button class="btn">Позвонить</blue-button>
          </a>
        </div>
        <div class="phone" :style="{background: `url(${imagePhone}) center no-repeat`, backgroundSize: '100% 100%' }">
          <div class="wallpaper"
               :style="{background: `url(${imageWallpaper}) center no-repeat` , backgroundSize: '100% 100%'}">
            <img :src="imageRectangle"/>
          </div>
        </div>
      </div>


      <div class="list">
        <div class="title">
          TTL Electronics
        </div>
        — Гарантия после ремонтных работ и постгарантийное обслуживание.
        <br><br>
        — Сотрудничаем с рядом крупных предприятий, занимающих ведущую роль в обслуживании электротранспорта на
        территории РФ (Штрих-М, Умный город, Позитрон, МППТ).
        <br><br>
        — Участвуем в НИОКРах разработки сложных электронных интеллектуальных систем, востребованных на рынке РФ, в
        качестве индустриального партнера КФУ.
      </div>

      <div class="list">
        <div class="item">
          <img src="../../assets/advantages/pointList.svg">
          Схемотехники с опытом работы от 15 лет
        </div>
        <div class="item">
          <img src="../../assets/advantages/pointList.svg">
          Аккредитация в качестве ИТ компании
        </div>
        <div class="item">
          <img src="../../assets/advantages/pointList.svg">
          Осуществляем прямые поставки
        </div>
        <div class="item">
          <img src="../../assets/advantages/pointList.svg">
          Собственное производство запчастей
        </div>
      </div>
    </div>


    <div class="footer__content">
      <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <section>
        <div class="icon__container">
          <img src="../../assets/advantages/chat%201.svg" />
        </div>
        <h3 class="name">
          Ремонт бортового оборудования электротранспорта.
          Сотрудничество с КФУ в качестве индустриального партнера
        </h3>
      </section>
      </aos-vue>
      <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <section>
        <div class="icon__container">
          <img src="../../assets/advantages/Rectangle%20163.svg" />
        </div>
        <h3 class="name">
          Производство запчастей для электротранспорта: трамваев, троллейбусов и поездов метро
        </h3>
      </section>
      </aos-vue>
      <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <section>
        <div class="icon__container">
          <img src="../../assets/advantages/Vector.svg" />
        </div>
        <h3 class="name">
          Массовое производство чехлов для рулей с подогревом для оптовых продаж (бренд Легенда-М)
        </h3>
      </section>
      </aos-vue>
      <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <section>
        <div class="icon__container">
          <img src="../../assets/advantages/Group%20298.svg" />
        </div>
        <h3 class="name">
          Разработка, внедрение и проектирование систем автоматизации на городском транспорте
        </h3>
      </section>
      </aos-vue>
      <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <section>
        <div class="icon__container">
          <img src="../../assets/advantages/Rectangle%20163.svg" />
        </div>
        <h3 class="name">
          Автоматизация энергосистемы электротранспорта. Ремонт плат управления приводов поездов метро
        </h3>
      </section>
      </aos-vue>
    </div>

  </article>
</template>

<script>
import imagePhone from '../../assets/advantages/smart 1.png';
import imageWallpaper from '../../assets/advantages/Rectangle 8.png';
import imageRectangle from '../../assets/advantages/sirius6 1.png'
import BlueButton from "../UI/BlueButton.vue";
import AosVue from "aos-vue";
export default {
  components: {BlueButton, AosVue},
  setup() {
    return {imagePhone, imageWallpaper, imageRectangle}
  }
}
</script>

<style lang="scss" scoped>
article{
  height: 840px;
}
h2 {
  margin: 18px;
  margin-top: 150px;
}

.header__content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 1092px;
}

.__container__phone {
  position: relative;
  top: -100px;
  margin-right: 70px;
}

.message {
  position: relative;
  background-color: #fff;
  top: 100px;
  left: 100px;
  padding: 20px;
  width: 144px;
  border-radius: 12px;
  box-shadow: 0 13px 40px 10px #BBA6FF78;
  font-family: GothamMedium, serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  text-align: center;
  .btn {
    margin-top: 6px;
    font-family: GothamMedium, serif;
    font-size: 14px;
    background: linear-gradient(to right, #2641D1 0%, #3333A3 100%), linear-gradient(to right, #784DFF 0%, #4614E8 100%);
    &:hover{
      color: #fff;
    }
  }
}

.phone {
  z-index: -10;
  width: 219px;
  height: 410px;
  padding-top: 20px;

  .wallpaper {
    margin: 0 auto;
    width: 190px;
    height: 382px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.list {
  width: 438px;
  line-height: 150%;
  font-size: 16px;
  margin-top: 10px;

  .title {
    margin-left: 25px;
    font-family: GothamBold, serif;
    color: #34449C;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: 3px;
  }

  .item {
    margin: 24px 0;
    img{
      margin-right: 12px  ;
    }
  }
}

.footer__content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: -188px;
  margin-bottom: 100px;
  section{
    width: 180px;
    height: 272px;
    border-radius: 20px;
    margin: 9px;
    padding: 32px 42px 0 32px ;
    font-family: GothamMedium,serif;
    font-size: 16px;
    line-height: 23px;
    box-shadow: 0 4px 100px 30px rgba(208, 218, 227, 0.57);
    background: linear-gradient(#FFFFFF 0%, #F4F9FF 100%);
    .icon__container{
      margin-bottom: 19px;
    }
  }
}
@media (max-width: 1024px) {

  article{
    height: 100%;
    width: 100%;

  }
  .header__content{
    position: static;
    width: 100%;
    margin: 0;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    .list{
      display: none;
    }
  }
  .__container__phone{
    display: none;
  }
  .footer__content{
    width: 100%;
    position: static;
    justify-content: center;
    align-items: center;
  flex-wrap: wrap;
    section{
      width: 200px;
      height: 100%;
      padding: 30px;
    }
  }
  .icon__container{
    margin-bottom: 5px !important;
  }
}
</style>