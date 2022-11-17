<template>
  <section
    class="login"
    style="background-image: url('/img/login/background.png')"
  >
    <div class="login-bg" />
    <div class="login-box">
      <div class="login-box-bg" />
      <div class="login-content">
        <div class="login-header">
          <img src="/img/login/logo.svg" alt="logo" />
        </div>
        <div class="login-body">
          <div class="d-flex w-100 justify-content-center align-content-center">
            <img src="/img/login/phoneIcon.svg" alt="phoneIcon" />
            <p class="login-content-header IranSansBold">
              شماره موبایل خود را وارد نمایید.
            </p>
          </div>
          <text-field
            label="شماره همراه"
            value="09012713451"
            type="text"
            color="#fff"
            colorTheme="white"
          />
        </div>
        <p class="text-footer">
          عضویت به معنای پذیرش <span>قوانین و مقررات</span> مبیاشد
        </p>
        <button>ورود</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'auth',
  head() {
    return {
      title: 'Login'
    }
  }
}
</script>
