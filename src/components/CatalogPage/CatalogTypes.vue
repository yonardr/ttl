<template>
  <div class="wrapper">
    <select v-model="selectedType" @change="onSelectChange">
      <option :value="null">Все услуги</option>
      <option v-for="item in types" :key="item.id" :value="item.id">
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    // Загружаем типы услуг при монтировании
    onMounted(() => store.dispatch('fetchServicesTypes'));
    const types = computed(() => store.getters.getServiceTypes);

    // Для хранения выбранного типа
    const selectedType = ref(null);

    // Метод для обработки выбора
    const onSelectChange = () => {
      if (selectedType.value === null) {
        resetFilter();
      } else {
        changeActiveType(selectedType.value);
      }
    };

    // Методы для смены фильтров
    const changeActiveType = (id) => store.commit('filterService', { id: id });
    const resetFilter = () => store.commit('resetFilter');

    return { types, selectedType, onSelectChange, changeActiveType, resetFilter };
  }
};
</script>

<style lang="scss" scoped>
select{
  width: 100%;
  border-radius: 20px;
  height: 60px;
  font-size: 18px;
  padding: 0px 20px;
  font-family: GothamMedium, serif;
  background-color:#F4F7FA ;
  box-shadow: 11px 11px 11px 11px rgba(0, 0, 0, 0.07);
  border: 1px solid #252B42;
  color: #252B42;
}
.wrapper{
  padding: 50px;
  padding-bottom: 25px;
}
.container__type{
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #252B42;
  margin: 5px;
}
@media (max-width: 1024px) {
  .wrapper{
    padding: 20px;
    padding-top: 150px;
  }
}
</style>