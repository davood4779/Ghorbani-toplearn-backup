<template>
  <section class="Product">
    <div class="content col-7">
      <div class="d-flex">
        <h5 class="IranSansBold">{{ name }}</h5>
        <div class="d-flex mx-2" v-if="hasDiscount">
          <img src="/img/store/discount-shape.svg" alt="discount" />
          <span class="discount mx-1">{{ discountAmount }}</span>
        </div>
      </div>
      <p class="IranSansLightNum">
        {{ brand + ` ` + volume + ` ` + volumeUnitHandler(volumeUnit) }}
      </p>
      <div class="Product-footer">
        <div class="price d-flex">
          <p class="IranSansLightNum">{{ priceHandler(price) }}</p>
          <span class="IranSansLightNum">تومان</span>
        </div>
        <button class="empty-product" v-if="!amount">
          <span>ناموجود</span>
        </button>
        <button class="IranSansNum" v-else-if="amount">
          <img src="/img/store/plus.svg" alt="plus" /><span>1</span
          ><img src="/img/store/minus.svg" alt="minus" />
        </button>
      </div>
    </div>
    <div class="col-5">
      <img
        :style="!amount && { padding: '29px' }"
        :src="amount ? img : '/img/store/gallery-slash.svg'"
        :alt="title"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'product',
  props: {
    name: String,
    price: Number,
    brand: String,
    volume: Number,
    volumeUnit: String,
    img: String,
    hasDiscount: Boolean,
    discountAmount: String,
    amount: Number
  },
  methods: {
    volumeUnitHandler(volumeUnit) {
      switch (volumeUnit) {
        case 'gr':
          return 'گرم'
        default:
          return 'لولو'
      }
    },
    priceHandler(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>
