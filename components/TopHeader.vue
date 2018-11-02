<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      <ul class="top-header__nav top-header__first-navi">
        <li :key="index" v-for="(navitem, index) in $store.state.settings.main_navi">
          <nuxt-link :class="'top-header__link top-header__'+navitem.name" :to="navitem.link.cached_url">
            {{ navitem.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <a href="/" class="top-header__col top-header__logo">
      <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
    </a>
    <nav class="top-header__col top-header__second-navi">
      <ul class="top-header__nav top-header__nav--right top-header__lang-navi">
        <li>
          <nuxt-link :class="'top-header__link'+isLangActive('en')" to="/">English</nuxt-link>
        </li>
        <li>
          <nuxt-link :class="'top-header__link'+isLangActive('tr')" to="/tr">Turkish</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isLangActive(lang){
      return lang === this.$store.state.language ? ' active-language' : ''
    }
  }
}
</script>


<style lang="scss">
  .top-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    li {
      display: inline-block;
      list-style-type: none;
      padding-right: 1rem;
      margin-right: 1rem;
    }
  }

  .top-header__link {
    text-decoration: none;
    color: black;
  }

  .top-header__first-navi {
    .nuxt-link-exact-active {
      border-bottom: .1rem solid black;
    }
  }

  // hard-coded Blog
  .nuxt-link-active.top-header__Blog {
      border-bottom: .1rem solid black;
  }

  .top-header__logo {
    text-align: center;
    position: absolute;
    left: 50%;

    img {
      position: relative;
      max-height: 60px;
      left: -50%;
      top: -15px;
    }
  }

  .top-header__second-navi {
    text-align: right;
  }

  .top-header__lang-navi {
    .active-language {
      border-bottom: .1rem solid black;
    }
  }
</style>