<template>
  <div class="fixed bottom-2 inset-x-0">
    <div class="px-4 sm:px-10">
      <div class="bg-blue-400 p-4 rounded-sm shadow-sm">
        <div class="flex flex-row gap-4 items-center justify-between">
          <div class="flex-none ">
            <i
              class="it p-2 text-gray-50 bg-blue-500 rounded-sm text-1xl"
              v-bind:class="name"
            ></i>
          </div>
          <div class="flex-grow">
            <span
              @click="copy"
              class="text-gray-50 hover:text-gray-200 transition duration-100 ease-linear cursor-pointer"
              v-text="element()"
            ></span>
          </div>
          <div class="flex-none">
            <i
              @click="$emit('close')"
              class="it it-close p-2 text-gray-50 rounded-sm hover:bg-blue-500 cursor-pointer transition duration-100 ease-linear"
            ></i>
          </div>
        </div>
      </div>
    </div></div
></template>

<script>
export default {
  props: ["name"],
  methods: {
    element() {
      return `<i class="it ${this.name}"></i>`;
    },
    copy() {
      navigator.clipboard.writeText(this.element());
    },
  },
};
</script>

<style></style>
