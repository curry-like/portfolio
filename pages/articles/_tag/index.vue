<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Articles</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Articles class="articles" :tag="tag" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Articles from '~/components/Articles.vue'

@Component({
  components: {
    Articles
  }
})
export default class ArticleList extends Vue {
  asyncData({ params }: { params: any }) {
    return {
      tag: params.tag
    }
  }
}
</script>

<style lang="scss"></style>
