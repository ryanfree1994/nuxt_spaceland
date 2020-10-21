/* help from https://www.vuemastery.com/courses/next-level-vue/mixins/ */
export const border = {
  data () {
    return {
      borderStyle: 'm-3 w-25'
    }
  },
  methods: {
    toggleBorder() {
      this.borderStyle = 'border border-white m-3 w-25';
    }
  }
}
