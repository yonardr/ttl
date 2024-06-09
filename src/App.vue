<script setup>
import HeaderNavBar from "./components/HeaderNavBar.vue";
import NavigateSelection from "./components/NavigateSelection.vue";
import HomeView from "./components/HomeView.vue";
import AdvantagesView from "./components/AdvantagesView.vue";
</script>

<template>
  <div class="app">
    <div class="__container">
      <div class="radial"></div>
      <HeaderNavBar />
      <NavigateSelection />
      <main>
        <HomeView/>
        <AdvantagesView />
      </main>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #F4F7FA;
  color: #404040;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none !important;

  font-family: Gotham, serif;
  font-size: 16px;
}

@font-face {
  font-family: Gotham;
  src: url('./assets/fonts/Gotham_Pro/gothampro.ttf');
  src: local(montserrat), url('./assets/fonts/Gotham_Pro/gothampro.ttf');
}

@font-face {
  font-family: GothamBold;
  src: url('./assets/fonts/Gotham_Pro/gothampro_bold.ttf');
  src: local(montserrat), url('./assets/fonts/Gotham_Pro/gothampro_bold.ttf');
}

@font-face {
  font-family: GothamMedium;
  src: url('./assets/fonts/Gotham_Pro/gothampro_medium.ttf');
  src: local(montserrat), url('./assets/fonts/Gotham_Pro/gothampro_medium.ttf');
}

.__container{
  width: 1440px;
  margin: 0 auto;
}

h2{
  font-family: GothamBold,serif;
  color: #303030;
  line-height: 44px;
  font-size: 32px;
  text-align: center;
}
.radial{
  background: transparent;
  z-index: -1;
  border-radius: 100px;
  box-shadow: -20px 50px 900px 100px #CDBBEF;
  position: absolute;
}
</style>
