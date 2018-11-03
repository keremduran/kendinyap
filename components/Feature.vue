<template>
  <div v-editable="blok" class="feature util__flex-eq">
    <img :src="resizedIcon" class="feature__icon">
    <h1>{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    resizedIcon () {
      if (typeof this.blok.icon !== 'undefined') {
        return '//img2.storyblok.com/150x150' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return null
    }
  },
  props: ['blok']
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 1.7rem .5rem 6rem;
}

.feature__icon {
  width: 8rem;
  border-radius: 50%;
}
</style>