<template>
  <div class="home">
    <div class="search">
      <img src="/img/Home/search-normal.svg" alt="searchIcon" />
      <input type="text" placeholder="جست و جو" class="flex-grow-1" />
    </div>
    <div class="slider-container">
      <img src="/img/Home/ad-banner.png" alt="baner" />
    </div>
    <div class="categorys">
      <div
        class="category"
        :class="selectedCategory === 'Programs' && 'active'"
        @click="selectedCategory = 'Programs'"
      >
        <div class="category-img">
          <img src="/img/Home/program.svg" alt="program" />
        </div>
        <span>برنامه های شما</span>
      </div>
      <div
        class="category"
        :class="selectedCategory === 'OrderPrograms' ? 'active' : null"
        @click="selectedCategory = 'OrderPrograms'"
      >
        <div class="category-img">
          <img src="/img/Home/orderProgram.svg" alt="orderProgram" />
        </div>
        <span>سفارش برنامه</span>
      </div>
      <div
        class="category"
        :class="selectedCategory === 'Education' && 'active'"
        @click="selectedCategory = 'Education'"
      >
        <div class="category-img">
          <img src="/img/Home/education.svg" alt="education" />
        </div>
        <span>آموزش</span>
      </div>
      <div
        class="category"
        :class="selectedCategory === 'Store' ? 'active' : null"
        @click="selectedCategory = 'Store'"
      >
        <div class="category-img">
          <img src="/img/Home/store.svg" alt="store" />
        </div>
        <span>فروشگاه</span>
      </div>
    </div>
    <div class="layout-content">
      <div v-if="selectedCategory === 'Programs'">
        <programs />
      </div>
      <div v-else-if="selectedCategory === 'Education'">
        <education />
      </div>
      <div v-else-if="selectedCategory === 'OrderPrograms'">
        <order-programs />
      </div>
      <div v-else-if="selectedCategory === 'Store'">
        <store />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      selectedCategory: 'Programs'
    }
  },
  head() {
    return {
      title: 'Home'
    }
  },
  methods: {}
}
</script>
