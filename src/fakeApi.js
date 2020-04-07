export default () => {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve([
        {
          title: "ngx-loading-skeleton",
          content:
            "<b>Angular component, there is a lot of goodniess inside the code, pls check out</b>",
        },
        {
          title: "vue-loading-skeleton",
          content:
            "<b>Vue component, there is a lot of goodniess inside the code, pls check out</b>",
        },
      ]);
    }, 1000);
  });
};
