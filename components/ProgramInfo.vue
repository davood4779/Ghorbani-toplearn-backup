<template>
  <div class="program-info">
    <div class="d-flex justify-content-between program-info-header">
      <span class="program-info-title IranSansBold">{{ title }}</span>
      <div class="d-flex program-info-header-image align-items-center">
        <img src="/img/programDetails/gallery.svg" alt="gallery" /><span
          class="gallery-text"
          >تصاویر</span
        >
      </div>
    </div>
    <div class="program-info-details d-flex flex-column">
      <div
        class="program-info-details-item d-flex align-items-center"
        v-for="item in details"
        :key="item.label + item.info"
      >
        <span class="IranSansMedium">{{ item.label }} :</span>
        <span>{{ item.info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'program-info',
  head() {
    return {
      title: 'Program info'
    }
  },
  props: {
    title: String,
    details: Array
  }
}
</script>
