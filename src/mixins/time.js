export default {
  created() {
    console.log("Time mixin id created");
  },
  methods: {
    log() {
      console.log(Date.now());
    },
  },
};
