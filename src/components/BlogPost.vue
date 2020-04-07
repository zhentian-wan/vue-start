<template>
  <div>
    <h2 class="title" v-text="title"></h2>
    <section v-if="isOpen" v-html="content"></section>
    <section v-else v-html="snippets"></section>
    <button @click.prevent="toggle">{{buttonText}}</button>
  </div>
</template>

<script>
import time from "../mixins/time";

export default {
  props: {
    title: {
      type: String,
      default: "Empty title..",
      validator: s => s.length > 1,
      required: true
    },
    content: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  mixins: [time],
  computed: {
    snippets() {
      return `${this.content.substring(0, 40)}...`;
    },
    buttonText() {
      return this.isOpen ? "Show less" : "Show more";
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.log();
    }
  }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>