<template>
  <div class="container">
    <div class="post-meta text-secondary">
      <time>{{ params.date }}</time>
    </div>
    <h1 class="post-title">{{ title }}</h1>
    <div class="tags">
      <b-badge
        v-for="tag in tags.split(',')"
        :key="tag"
        variant="primary"
        class="tag"
      >
        <nuxt-link :to="{ name: 'articles', query: { tag: tag } }">
          {{ tag }}
        </nuxt-link></b-badge
      >
    </div>
    <div class="post markdown-body" v-html="$md.render(bodyContent)"></div>
  </div>
</template>

<style lang="scss">
.tag {
  margin-right: 0.5rem;
  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: none;
  }
  a:active {
    color: white;
    text-decoration: none;
  }
}
</style>

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
