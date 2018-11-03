<template>
  <div class="slide" v-editable="blok">
    <img :src="blok.image">
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.slide {
  max-width: 50rem;
  img {
      width: 100%;
  }
}
</style>