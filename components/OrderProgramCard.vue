<template>
  <section class="OrderProgram">
    <div class="content">
      <h5 class="IranSansBold">{{ title }}</h5>
      <p class="IranSansLight">
        {{ details }}
      </p>
      <div class="OrderProgram-footer">
        <button>
          <span>سفارش برنامه</span>
        </button>
      </div>
    </div>
    <div class="OrderProgram-image">
      <img :src="img" :alt="title" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderProgramCard',
  props: {
    title: String,
    details: String,
    img: String
  }
}
</script>
