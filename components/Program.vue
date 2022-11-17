<template>
  <section class="program" :class="programDetails && 'programDetails'">
    <div class="pillar">
      <div class="addendum d-flex gap-2">
        <img
          v-if="programDetails"
          src="/img/program/clipboard-text.svg"
          alt="clipboard-text"
        />
        <span class="program-title IranSansBold">شماره برنامه</span
        ><span class="num IranSansBoldNum">{{ programNum }}</span>
      </div>
      <NuxtLink to="/programDetails" v-if="!programDetails">
        <button>
          <img src="img/program/eye.svg" alt="eye" /><span>مشاهده</span>
        </button>
      </NuxtLink>
    </div>
    <div class="pillar">
      <div class="d-flex">
        <img
          class="pillar-icon"
          src="/img/program/calendar-2.svg"
          alt="calendar"
        />
        <span
          class="program-title"
          :class="programDetails ? 'IranSansBold' : 'IranSansMedium'"
          >تاریخ شروع :</span
        ><span
          :class="programDetails ? 'IranSansMediumNum' : 'IranSansLightNum'"
          >{{ startAt }}</span
        >
      </div>
      <div class="d-flex">
        <img class="pillar-icon" src="/img/program/house-2.svg" alt="house" />
        <span
          class="program-title"
          :class="programDetails ? 'IranSansBold' : 'IranSansMedium'"
          >باشگاه :</span
        ><span
          :class="programDetails ? 'IranSansMedium' : 'IranSansLightNum'"
          >{{ gym }}</span
        >
      </div>
      <div class="d-flex">
        <img
          class="pillar-icon"
          src="/img/program/user-square.svg"
          alt="user"
        />
        <span
          class="program-title"
          :class="programDetails ? 'IranSansBold' : 'IranSansMedium'"
          >مربی :</span
        ><span
          :class="programDetails ? 'IranSansMedium' : 'IranSansLightNum'"
          >{{ coach }}</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'program',
  props: {
    startAt: String,
    gym: String,
    coach: String,
    programNum: String,
    programDetails: Boolean
  }
}
</script>
