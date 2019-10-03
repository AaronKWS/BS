<template>
  <div>
      <component :is="tagName" @goPage="goPage"></component>
  </div>
</template>

<script>
import Father from './page/father'
import ChildOne from './page/childone'
import ChildTwo from './page/childtwo'
export default {
  components: {
    Father,
    ChildOne,
    ChildTwo
  },
  data() {
    return {
      tagName: 'father'
    }
  },
  methods: {
    goPage: function(pageName) {
      this.tagName = pageName
    }
  }
}
</script>

<style>
</style>