<template>
  <section class="Store">
    <h4 class="my-2 IranSansBold">دسته بندی محصولات</h4>

    <div class="product-type-container">
      <button
        class="product-type d-flex justify-content-center align-items-center active"
        autofocus
      >
        <p>پروتئین ها</p>
      </button>
      <button
        class="product-type d-flex justify-content-center align-items-center"
      >
        <p>کراتین ها</p>
      </button>
      <button
        class="product-type d-flex justify-content-center align-items-center"
      >
        <p>آمینو ها</p>
      </button>
      <button
        class="product-type d-flex justify-content-center align-items-center"
      >
        <p>BCA</p>
      </button>
      <button
        class="product-type d-flex justify-content-center align-items-center"
      >
        <p>BCA</p>
      </button>
    </div>

    <product
      v-for="item in products"
      :key="item.id"
      :name="item.name"
      :brand="item.brand"
      :price="item.price"
      :volume="item.volume"
      :volume-unit="item.volumeUnit"
      :hasDiscount="item.hasDiscount"
      :discountAmount="item.discountAmount"
      :amount="item.amount"
      :img="item.img"
    />
  </section>
</template>

<script>
export default {
  name: 'store',
  data() {
    return {
      products: [
        {
          name: 'پروتئین وی',
          brand: 'ترک نوتریشن',
          price: 6656445,
          volume: 250,
          volumeUnit: 'gr',
          img: '/img/store/OPT009_grey.svg',
          hasDiscount: true,
          discountAmount: '9',
          amount: 10,
          id: 0
        },
        {
          name: '2پروتئین وی',
          brand: 'ترک نوتریشن',
          price: 90000,
          volume: 1000,
          volumeUnit: 'gr',
          img: '/img/store/OPT009_grey.svg',
          hasDiscount: false,
          amount: 0,
          id: 1
        },
        {
          name: '3پروتئین وی',
          brand: 'ترک نوتریشن',
          price: 10000000,
          volume: 2,
          volumeUnit: 'gr',
          img: '/img/store/OPT009_grey.svg',
          hasDiscount: false,
          amount: 10,
          id: 2
        },
        {
          name: '4پروتئین وی',
          brand: 'ترک نوتریشن',
          price: 2500000,
          volume: 500,
          volumeUnit: 'gr',
          img: '/img/store/OPT009_grey.svg',
          hasDiscount: true,
          discountAmount: '5',
          amount: 0,
          id: 3
        }
      ]
    }
  }
}
</script>
