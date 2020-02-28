<template>
  <a class="card" :href="formatUrl">
    <div class="card-img-top">
      <img class="" :src="imgUrl" :alt="imgUrl" />
    </div>
    <div class="card-body">
      <b-card-title>{{ article.title }}</b-card-title>
    </div>
    <div class="card-footer text-right">公開日: {{ article.date }}</div>
  </a>
</template>

<style lang="scss">
.card {
  display: block;
  margin: 0 auto;
  max-width: 18rem;
  .card-img-top {
    height: 6rem;
    width: auto;
    img {
      display: block;
      margin: 0 auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ArticleSummary } from '~/types/ArticleSummary'

@Component
export default class ArticleCard extends Vue {
  @Prop({ type: Object, required: true })
  article!: ArticleSummary

  get formatUrl() {
    return `/articles/${this.article.date}/${this.article.slug}`
  }

  get imgUrl() {
    return '/images/article/' + this.article.image
  }
}
</script>
