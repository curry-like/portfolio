<template>
  <div>
    <Header />
    <nuxt class="body" />
    <Footer />
  </div>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '../components/Header'
import Footer from '../components/Footer'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>
