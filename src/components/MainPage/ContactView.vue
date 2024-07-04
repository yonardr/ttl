<template>
  <article>
<h2>Контакты</h2>
    <div class="__content">
      <div class="map__container">
        <YandexMap :settings="settings"
                   :coordinates="[55.779474, 49.128126]"
                   :zoom="14"
                   :controls="['fullscreenControl']"
                   class="map">
          <YandexMarker
              :coordinates="[55.779474, 49.128126]"
              :options="{
            preset: 'islands#dotIcon',
            iconColor: '#3c1e8f'
          }"

          ></YandexMarker>
        </YandexMap>
      </div>
      <div class="b-side">
        <div class="field">
          <img src="../../assets/application/tild3837-6239-4266-b137-666237323663__vector-2.svg" />
          Центральный офис:
          <a href="tel:88432407717" style="text-decoration: none">
        <div>
          8 (843) 240-77-17
        </div>
          </a>
        </div>
        <div class="field">
          <img src="../../assets/application/tild3837-6239-4266-b137-666237323663__vector-2.svg" />
          Электролаборатория:
          <a href="tel:88432407717" style="text-decoration: none">
        <div >
          +7-843-240-77-17
        </div>
          </a>
        <div>
          zima200883@mail.ru
        </div>
        </div>
        <div class="field">
          <img src="../../assets/application/tild3837-6239-4266-b137-666237323663__vector-2.svg" />
          IT Департамент:
          <a href="tel:88432407717" style="text-decoration: none">
          <div >
            +7-843-240-77-17
          </div>
          </a>
          <div>
            zima200883@mail.ru
          </div>
        </div>
        <div class="field">
          График работы:
        <div>
          С 8:00 до 22:00 без выходных
        </div>
        </div>
        <div class="field">
          Наш адрес:
        <div>
          г. Казань, ул. Спартаковская, 2
        </div>
          Находимся в ИТ-парк им. Башира Рамеева, технопарк, Спартаковская 2.
        </div>
        <div class="social__icons">
          <img src="../../assets/application/tild3164-3566-4132-b230-623461383964__vk_1.svg" />
          <img src="../../assets/application/tild6136-3964-4238-b966-376136613231__telegram_1_1.svg" />
          <img src="../../assets/application/tild3331-6637-4262-b563-366262303762__group_1330.svg" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import {YandexMap, YandexMarker} from 'vue-yandex-maps'
import { loadYmap } from 'vue-yandex-maps';

export default {
  components: { YandexMap, YandexMarker},
  data() {
    return {
      settings: {
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
      },
    }
  },
  async mounted() {
    await loadYmap(this.settings);
  },
  setup(){

  }
}
</script>

<style lang="scss" scoped>
h2{
  margin-top: 100px;
  margin-bottom: 20px;
}
.__content{
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.map__container{
  width: 100%;
  margin-right: 50px;
  border-radius: 20px;
}
.map{
  height: 400px;
  width: 100%;
  border-radius: 20px;
}
.b-side{
  font-family: GothamMedium,serif;
  width: 400px;

  border-radius: 20px;
  padding: 0 30px;
  padding-top: 13px;
  .field{
    margin-bottom: 13px;
    color: #737373;
    div{
      color: #404040;
margin: 2px;
    }
    img{
      width: 18px;
      margin-bottom: -3px;
      margin-right: 2px;
    }
  }
}
.social__icons{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: left;
  img{
    margin-right:10px;
  }
}
@media (max-width: 1024px) {
  .__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .map__container{
      width: 100% !important;
      margin-right: 0;
    }
    .map{
      width: 100% !important;
    }
    .b-side{
width: 80% !important;
      padding: 20px 0;
      .field{
        margin: 15px;
      }
      .social__icons{
        margin: 15px;
      }
    }
  }
}
</style>