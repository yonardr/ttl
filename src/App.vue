<template>
  <div class="app">
    <router-view></router-view>
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


h2{
  font-family: GothamBold,serif;
  color: #303030;
  line-height: 44px;
  font-size: 32px;
  text-align: center;
}

</style>
