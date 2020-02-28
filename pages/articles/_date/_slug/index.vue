<template>
  <div class="container">
    <h1 class="post-title">{{ title }}</h1>
    <div class="post-meta">
      <time>{{ params.date }}</time>
    </div>
    <div class="post markdown-body" v-html="$md.render(bodyContent)"></div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { sourceFileArray } from '../../../../contents/summary.json'
import Prism from '../../../../plugins/prism.js'

@Component
export default class PostView extends Vue {
  mounted() {
    Prism.highlightAll()
  }

  validate({ params }) {
    return sourceFileArray.includes(
      `contents/md/${params.date}_${params.slug}.md`
    )
  }

  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/contents/json/${params.date}_${params.slug}.json`),
      { params }
    )
  }
}
</script>
