<template>
  <section class="chapters-summary">
    <ChapterSummary v-for="chapter in chapters()" :page="chapter"></ChapterSummary>
  </section>
</template>

<script>

import ChapterSummary from './ChapterSummary'

export default {
  components: { ChapterSummary },
  methods: {
    chapters() {
      console.log(this.$site.pages)
      return this.$site.pages
      // .filter((page) => page.path.startsWith("/slides/"))
      .filter((page) => !page.frontmatter.draft )
      .filter((page) => page.frontmatter.slides )
      .sort((a, b) => {
        return a.relativePath - b.relativePath
      })
    }
  },
}
</script>

<style scoped>
  .chapters-summary{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
  }
</style>>