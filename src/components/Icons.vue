<template>
  <div>
    <icons-search v-on:search="filter"></icons-search>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3"
    >
      <div v-for="(name, index) in iconNames" v-bind:key="name">
        <div
          @click="select(index)"
          class="bg-gray-50 dark:bg-gray-800 p-4 text-center shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-100 ease-linear rounded-sm border border-gray-50 dark:border-gray-800"
          v-bind:class="{
            'border-blue-400 dark:border-blue-400': selected == index,
          }"
        >
          <i
            class="it text-3xl text-gray-800 dark:text-gray-200"
            v-bind:class="name"
          ></i>
          <div class="mt-1 text-sm font-thin text-gray-600  dark:text-gray-200">
            {{ name.substring(3) }}
          </div>
        </div>
      </div>
    </div>
    <icon-preview
      v-show="selected != -1 && iconNames[selected]"
      :name="iconNames[selected]"
      v-on:close="selected = -1"
    ></icon-preview>
  </div>
</template>

<script>
import IconPreview from "./IconPreview.vue";
import IconsSearch from "./IconsSearch.vue";
export default {
  components: { IconsSearch, IconPreview },
  data() {
    return {
      iconNames: [],
      selected: -1,
    };
  },
  methods: {
    filter(search) {
      this.iconNames = this.iconsData.data.filter((iconName) =>
        iconName.substring(3).startsWith(search)
      );
    },
    select(index) {
      this.selected = index;
    },
    getSelectedName() {
      return this.iconNames[this.selected];
    },
  },
  mounted() {
    this.iconNames = this.iconsData.data;
  },
};
</script>
