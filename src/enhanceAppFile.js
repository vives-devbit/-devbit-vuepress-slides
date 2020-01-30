
export default ({ Vue }) => {
    Vue.component('SlideChapters', () =>
        import('./components/SlideChapters.vue')
    )
  };