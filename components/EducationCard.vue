<template>
  <section class="EducationCard">
    <div class="content col-7">
      <h5 class="IranSansBold">{{ title }}</h5>
      <p class="IranSansLight">
        {{ details }}
      </p>
      <div class="EducationCard-footer">
        <span>ادامه</span>
        <img src="/img/education/arrow-left.svg" alt="arrow" />
      </div>
    </div>
    <div class="col-5">
      <img :src="img" :alt="title" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationCard',
  props: {
    title: String,
    details: String,
    img: String
  }
}
</script>
