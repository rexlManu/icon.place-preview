<template>
  <div class="mt-8 relative rounded-md shadow-sm mb-4">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <span class="text-gray-500 sm:text-sm">
        <i class="it it-search"></i>
      </span>
    </div>
    <input
      type="text"
      class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
      placeholder="Search over 223 icons"
      v-model="search"
      v-on:input="$emit('search', search)"
    /></div
></template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style></style>
