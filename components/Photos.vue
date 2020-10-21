<!-- this is the child page -->

<template>
<div>
  <!-- photos is referring to photos prop on line 31 -->
  <!-- don't need :photo=photo, as this is only done when passing a prop to a component and section is an element -->
  <section v-if="photos" class="d-flex flex-wrap justify-content-center">
    <!-- something needs to be added to class in order for styling to occur for image -->
      <img
      :class="borderStyle"
      @click="toggleBorder"

      v-for="photo in photos"
      :key="photo.id"
      :src="photo.src"
      :alt="photo.alt"
      :title="photo.title" />
  </section>
</div>
</template>

<script>
import {
  border
} from "@/mixin/BorderPhoto.js"

export default {
  name: 'Photos',
  /* prop validation */
  /*this will come from Attractions.vue; needs to be an Array, as it is from Attractions as an array */
  props: {
    photos: Array,
  },
  mixins: [border]
}
</script>
