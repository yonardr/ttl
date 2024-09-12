<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  transition: 0.5s ease;
  background-color: #273895;
  color: #fff;
  padding: 16px 32px;
  border-radius: 15px;
  border: 1px solid #273895;
  font-family: GothamMedium, serif;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  transition: 0.5s ease;
  background-color: #fff;
  color: #273895;
}
</style>