<template>
  <div class="fixed top-2 right-4">
    <span
      @focus="focused = true"
      @blur="focused = false"
      class="relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
      role="checkbox"
      tabindex="0"
      @click="toggle()"
      @keydown.space.prevent="toggle()"
      :aria-checked="value.toString()"
    >
      <span
        aria-hidden="true"
        v-bind:class="{ 'bg-blue-600': value, 'bg-gray-200': !value }"
        class="absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
      ></span>
      <span
        aria-hidden="true"
        v-bind:class="{
          'translate-x-5': value,
          'translate-x-0': !value,
          'shadow-outline border-blue-300': focused,
        }"
        class="absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-gray-50 shadow transform transition-transform ease-in-out duration-200"
      ></span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: localStorage.theme == "dark",
      focused: false,
    };
  },
  methods: {
    toggle() {
      this.value = !this.value;
      if (this.value) {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
      }
      this.refreshMode();
    },
  },
};
</script>

<style></style>
