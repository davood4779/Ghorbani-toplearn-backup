<template>
  <section class="signup">
    <div class="signup-bg" :class="openGenderSelect && 'show'"></div>
    <div class="signup-container">
      <div class="signup-header">
        <img src="/img/signup/headerImg.svg" alt="headerImg" />
      </div>
      <p class="IranSansBold">اطلاعات فرم زیر را کامل کنید</p>
      <form action="#" class="signup-form">
        <text-field
          label="نام"
          value="محسن"
          type="text"
          borderColor="#CFCFCF"
          colorTheme="black"
        />
        <text-field
          label="نام خانوادگی"
          value="حاجیان"
          type="text"
          borderColor="#CFCFCF"
          colorTheme="black"
        />
        <text-field
          label="کد ملی"
          type="text"
          value="053625315"
          borderColor="#CFCFCF"
          colorTheme="black"
        />
        <text-field
          label="شغل"
          type="text"
          value="برنامه نویس"
          borderColor="#CFCFCF"
          colorTheme="black"
        />
        <div class="gender-and-time">
          <div class="gender">
            <el-select
              v-model="selectGender"
              placeholder="جنسیت"
              class="col-12"
              @visible-change="openGenderSelect = !openGenderSelect"
            >
              <el-option
                label="مرد"
                value="male"
                @change="
                  selectGender = 'male'
                  openGenderSelect = !openGenderSelect
                "
              >
              </el-option>
              <el-option
                label="زن"
                value="femail"
                @change="
                  selectGender = 'femail'
                  openGenderSelect = !openGenderSelect
                "
              >
              </el-option>
            </el-select>
          </div>
          <div class="date-picker">
            <span class="input-label IranSansBold">تاریخ تولد :</span>
            <date-picker v-model="date" />
            <img
              class="input-icon"
              src="/img/signup/calendar-2.svg"
              alt="calendar"
            />
          </div>
        </div>
        <button class="register">ثبت اطلاعات</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Signup',
  layout: 'auth',
  head() {
    return {
      title: 'Signup'
    }
  },
  data() {
    return {
      selectGender: 'جنسیت',
      date: '1396/05/03',
      openGenderSelect: false
    }
  }
}
</script>
