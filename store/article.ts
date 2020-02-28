import articles from '~/contents/summary.json'
export type Articles = typeof articles

export const state = () => ({
  articleSummary: articles
})

export const getters = {
  getSourceFileArray(state: any): string[] {
    return state.articleSummary.sourceFileArray
  },
  getFileMap(state: any) {
    return state.articleSummary.fileMap
  }
}
