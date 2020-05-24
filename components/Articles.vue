<template>
  <b-card-group v-if="articles.length > 0" deck>
    <ArticleSummary
      v-for="article in articles"
      :key="article.id"
      :article="article"
    >
    </ArticleSummary>
  </b-card-group>
  <div v-else>
    <p style="text-align: center;">Loading...</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import ArticleSummaryCard from '~/components/ArticleSummary.vue'
import { ArticleSummary } from '~/types/ArticleSummary'

@Component({
  components: { ArticleSummary: ArticleSummaryCard }
})
export default class ArticleList extends Vue {
  @Prop({ type: String, required: false, default: '' })
  tag!: string

  articles: Array<ArticleSummary> = []

  created() {
    const data = this.$store.getters['article/getFileMap']
    Object.keys(data)
      .filter((val) => {
        if (this.tag !== '') {
          return data[val].tags.split(',').includes(this.tag)
        } else {
          return true
        }
      })
      .forEach((val, i) => {
        const article: ArticleSummary = {
          id: i,
          title: data[val].title,
          slug: data[val].sourceBase.replace('.md', '').split('_')[1],
          image: data[val].image,
          date: moment(data[val].created_at).format('YYYY-MM-DD')
        }
        this.articles.unshift(article)
      })
  }
}
</script>
