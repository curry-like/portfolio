<template>
  <b-container fluid="md">
    <b-row>
      <b-col>
        <h2>Profile</h2>
        <b-row>
          <b-col cols="4">
            <img src="/images/icon.jpg" alt="profile" class="profile-img" />
          </b-col>
          <b-col cols="8">
            <p>curry-like</p>
            <p>京都大学総合人間学部卒。</p>
            <p>
              バックエンドを中心に、インフラからフロントまでなんでもできますし、なんでもやります。<br />
              現在はNewsPicksでリードエンジニアをしています。
              最近はマイクロサービス化を推進してます。
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Outputs</h2>
        <ul>
          <li>
            JJUG CCC 2019 Fall 「<a
              href="https://speakerdeck.com/currylike37/bigquerywoyong-ita-detafen-xi-ji-pan-zuo-cheng-ru-men"
              >BigQueryを用いたデータ分析基盤作成入門</a
            >」
          </li>
          <li>
            技術書展7 「<a
              href="https://techbookfest.org/event/tbf07/circle/5663102825660416"
              >NewsPicks Tech Magazine vol.1</a
            >」
          </li>
          <li>
            D3 「<a
              href="https://gitpitch.com/stefanrmeier/dataflow-intro/develop?p=talks/201807-d3"
              >AWSからGCPにビッグデータ処理を移行する理由とGCP・Dataflowの具体的な使い方</a
            >」
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Contact</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfndL-2m6shpQeqxM2Grbl6nL5TRFH9S-dVtYyq0G6FE0u24A/viewform?embedded=true"
          width="100%"
          height="930"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >読み込んでいます…</iframe
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class tess extends Vue {}
</script>
