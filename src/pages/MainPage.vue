<script setup>
import HeaderNavBar from "../components/MainPage/HeaderNavBar.vue";
import NavigateSelection from "../components/MainPage/NavigateSelection.vue";
import HomeView from "../components/MainPage/HomeView.vue";
import AdvantagesView from "../components/MainPage/AdvantagesView.vue";
import DirectionsView from "../components/MainPage/DirectionsView.vue";
import TechnicalMaintenance from "../components/MainPage/TechnicalMaintenance.vue";
import ElectronicsRepair from "../components/MainPage/ElectronicsRepair.vue";
import SubmitApplication from "../components/MainPage/SubmitApplication.vue";
import FooterNavBar from "../components/MainPage/FooterNavBar.vue";
import ContactView from "../components/MainPage/ContactView.vue";
</script>

<template>
    <div class="__container">
      <div class="radial"></div>
        <HeaderNavBar id="header"/>
        <NavigateSelection />
      <main>
        <HomeView/>
        <AdvantagesView />
        <DirectionsView id="directions"/>
        <SubmitApplication id="application"/>
        <TechnicalMaintenance />
        <ElectronicsRepair />
        <ContactView id="contact"/>
      </main>
      <footer>
        <NavigateSelection />
        <FooterNavBar />
      </footer>
    </div>
</template>
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
@media (max-width: 1024px) {
  .__container{
    width: 100%;
  }
}
</style>