<template>
  <section class="util__container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return { 
      story: { content: {} },
    }
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/${context.params.language}/home`
    // Load the JSON from the API
    return context.app.$storyapi.get(endpoint, {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>