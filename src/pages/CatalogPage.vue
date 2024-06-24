<template>
  <div class="__container">
    <div class="radial"></div>
    <HeaderNavBar id="header"/>
    <NavigateSelection />
    <main>
      <CatalogTypes/>
  <CatalogItems />
    </main>
  </div>
</template>

<script>
import HeaderNavBar from "../components/MainPage/HeaderNavBar.vue";
import NavigateSelection from "../components/MainPage/NavigateSelection.vue";
import CatalogItems from "../components/CatalogPage/CatalogItems.vue";
import CatalogTypes from "../components/CatalogPage/CatalogTypes.vue";

export default {
  components: {
    CatalogTypes,
    CatalogItems,
    NavigateSelection,
    HeaderNavBar,
  }

}
</script>

<style lang="scss" scoped>
.radial{
  background: transparent;
  z-index: -1;
  border-radius: 100px;
  box-shadow: -20px 50px 900px 100px #CDBBEF;
  position: absolute;
}
.__container{
  width: 1440px;
  margin: 0 auto;
}
</style>