<template>
  <div class="wrapper">
    <div class="container__type" @click="resetFilter" >Все услуги</div>
    <div v-for="item in types">
      <div class="container__type" @click="changeActiveType(item.id)" :style="changeStyle(item.active)">{{ item.title }}</div>
    </div>
  </div>

</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

export default {
  setup() {
    const store = useStore()

    onMounted(() => store.dispatch('fetchServicesTypes'))
    const types = computed(() => store.getters.getServiceTypes)

    const changeActiveType = (id) => store.commit('filterService', {id: id})
    const resetFilter = () => store.commit('resetFilter')

    const changeStyle = (active) => {
        if(active) return {"background-color" : '#273895', "color": '#fff'}
    }

    return {types, changeActiveType, resetFilter, changeStyle}
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
}
.container__type{
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #252B42;
  margin: 5px;
}
</style>