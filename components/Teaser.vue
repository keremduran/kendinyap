<template>
  <div v-editable="blok" class="teaser">
    <div class="util__flex util__flex-se">
      <component v-if="slide" :blok="slide" :is="slide.component"></component>
    </div>
    <div class="teaser__pag">
      <h1 class="teaser__headline">{{ blok.headline }}</h1>
      <button @click="handleDotClick(index)"
              :key="index"
              v-for="(blok, index) in blok.body"
              :class="{'teaser__pag-dot--current': index == currentSlide}"
              class="teaser__pag-dot">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],

  data () {
    return {
      currentSlide: 0
    }
  },

  computed: {
    slide () {
      let slides = this.blok.body.filter((slide, index) => {
        return this.currentSlide === index
      })
      if (slides.length) {
        return slides[0]
      }
      return null
    }
  },

  methods: {
    handleDotClick (index) {
      this.currentSlide = index
    }
  }
}
</script>

<style lang="scss">
.teaser__pag {
  width: 100%;
  text-align: center;
  margin: 1.6rem 0;
}

.teaser__pag-dot {
  text-indent: -9999px;
  border: 0;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 5px 6px;
  background-color: #ccc;
  -webkit-appearance: none;
  cursor: pointer;

  &--current {
    background-color: #000;
  }
}
</style>