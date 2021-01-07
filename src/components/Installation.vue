<template>
  <div class="flex justify-center">
    <div class="flex flex-col text-center">
      <div class="text-3xl md:text-5xl text-center text-blue-600 mb-2">
        icon.place
      </div>
      <div class="text-gray-500">
        <p class="mt-3">
          Made by real handwork in Geislingen and transported all over the world
        </p>
        <p class="mt-2">With over <b>223</b> icons to get you started</p>
        <div class="text-1xl font-medium py-2 px-4 text-gray-800">
          <span>npm i icon.place</span>
          <a href="javascript:void(0)" @click="copyInstall">
            <i
              class="it it-copy ml-2 hover:text-blue-600 transition duration-100 ease-linear"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "installation",
  methods: {
    copyInstall() {
      navigator.clipboard.writeText("npm i icon.place");
    },
  },
};
</script>
