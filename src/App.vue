<template>
  <div id="app">
    <div class="container mx-auto px-2 sm:px-10 my-20">
      <installation></installation>

      <icons></icons>
    </div>
  </div>
</template>

<script>
import Icons from "./components/Icons.vue";
import Installation from "./components/Installation.vue";
export default {
  name: "App",
  components: {
    Installation,
    Icons,
  },
};
</script>
