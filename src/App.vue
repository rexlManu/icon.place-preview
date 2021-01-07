<template>
  <div id="app">
    <div class="container mx-auto px-2 sm:px-10 my-20">
      <Header></Header>

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
        />
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3"
      >
        <div v-for="(name, index) in getIcons()" v-bind:key="name">
          <div
            @click="select(index)"
            class="bg-gray-50 p-4 text-center shadow-sm hover:bg-blue-50 transition duration-100 ease-linear rounded-sm border border-gray-50"
            v-bind:class="{ 'border-blue-400': selected == index }"
          >
            <i class="it text-3xl text-gray-800" v-bind:class="name"></i>
            <div class="mt-1 text-sm font-thin text-gray-600">
              {{ name.substring(3) }}
            </div>
          </div>
        </div>
      </div>
      <div class="fixed bottom-2 inset-x-0" v-show="selected != -1">
        <div class="px-4 sm:px-10">
          <div class="bg-blue-400 p-4 rounded-sm shadow-sm">
            <div class="flex flex-row gap-4 items-center justify-between">
              <div class="flex-none ">
                <i
                  class="it p-2 text-gray-50 bg-blue-500 rounded-sm text-1xl"
                  v-bind:class="getSelectedName()"
                ></i>
              </div>
              <div class="flex-grow">
                <span
                  @click="copyElement"
                  class="text-gray-50 hover:text-gray-200 transition duration-100 ease-linear cursor-pointer"
                  v-text="getSelectedAsElement()"
                ></span>
              </div>
              <div class="flex-none">
                <i
                  @click="selected = -1"
                  class="it it-close p-2 text-gray-50 rounded-sm hover:bg-blue-500 cursor-pointer transition duration-100 ease-linear"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      iconNames: [],
      search: "",
      selected: 1,
    };
  },
  mounted() {
    this.iconNames = [];
    this.iconNames = this.icons.data;
    console.log(`Loaded ${this.icons.data.length} icons`);
  },
  methods: {
    getIcons() {
      return this.iconNames.filter((iconName) =>
        iconName.substring(3).startsWith(this.search)
      );
    },
    select(index) {
      this.selected = index;
    },
    getSelectedName() {
      return this.iconNames[this.selected];
    },
    getSelectedAsElement() {
      return `<i class="it ${this.getSelectedName()}"></i>`;
    },
    copyElement() {
      navigator.clipboard.writeText(this.getSelectedAsElement());
    },
  },
};
</script>
