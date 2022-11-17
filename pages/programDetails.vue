<template>
  <div class="program-details">
    <program
      start-at="15 اردیبهشت 1401"
      gym="اکسیژن"
      coach="هادی چوپان"
      program-num="3"
      :programDetails="true"
    />
    <div
      class="program-details-header d-flex justify-content-between align-items-center px-1"
    >
      <button
        class="d-flex justify-content-center align-items-center select-date"
      >
        <span>شنبه</span
        ><img src="/img/programDetails/drop-down.svg" alt="drop-down" />
      </button>
      <span class="IranSansMediumNum current-date">18 فروردین 1401</span>
    </div>
    <div class="program-details-info-container d-flex flex-column">
      <program-info
        v-for="item in programInfoT"
        :key="item.id"
        :title="item.title"
        :details="item.details"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'program-details',
  head() {
    return {
      title: 'Program Details'
    }
  },
  data() {
    return {
      programInfoT: [
        {
          title: 'جلو بازو هالتر',
          details: [
            { label: 'تعداد تکرار', info: '3ست 8 تایی' },
            { label: 'آیتم سوپر', info: '۳ست ۱۰ تایی جلو بازو دمبل چکشی' },
            { label: 'آیتم تریپل', info: '۳ست ۱۰ تایی جلو بازو دمبل خم' }
          ],
          id: 3
        },
        {
          title: 'جلو بازو دمبل',
          details: [{ label: 'تعداد تکرار', info: '3ست 8 تایی' }],
          id: 2
        },
        {
          title: 'جلو بازو لاری',
          details: [
            { label: 'تعداد تکرار', info: '3ست 8 تایی' },
            { label: 'آیتم سوپر', info: '۳ست ۱۰ تایی جلو بازو دمبل چکشی' }
          ],
          id: 1
        }
      ]
    }
  }
}
</script>
