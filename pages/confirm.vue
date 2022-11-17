<template>
  <section
    class="confirm"
    style="background-image: url('/img/confirm/background.png')"
  >
    <div class="confirm-bg" />
    <div class="confirm-box">
      <div class="confirm-box-bg" />
      <div class="confirm-content">
        <div class="confirm-header">
          <img src="/img/confirm/logo.svg" alt="logo" />
        </div>
        <div class="confirm-body">
          <div class="d-flex w-100 justify-content-center align-content-center">
            <img src="/img/confirm/comment.svg" alt="phoneIcon" />
            <p class="confirm-content-header IranSansBold">
              کد فعالسازی را وارد کنید
            </p>
          </div>
          <p class="IranSansNum confirm-body-text">
            کد ۶ رقمی ارسال شده به شماره 09012713451 را وارد نمایید.
          </p>
          <div
            class="d-flex w-100 justify-content-center confirm-code-container"
            @keyup="inputHandler($event)"
            @keyup.delete="deleteInputHandler($event)"
          >
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
          </div>
        </div>
        <p class="code-text">
          کد را دریافت نکردید؟<span>دوباره امتحان کنید</span>
        </p>
        <!-- <p class="code-text IranSansNum">30 ثانیه دیگر تا دریافت کد</p> -->
        <button>ورود</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Confirm',
  layout: 'auth',
  head() {
    return {
      title: 'Confirm'
    }
  },
  methods: {
    inputHandler(e) {
      const target = e.srcElement
      const maxLength = parseInt(target.attributes['maxlength'].value, 10)
      const myLength = target.value.length
      if (myLength >= maxLength) {
        let next = target
        while ((next = next.nextElementSibling)) {
          if (next == null) break
          if (next.tagName.toLowerCase() == 'input') {
            next.focus()
            break
          }
        }
      }
    },
    deleteInputHandler(e) {
      const target = e.srcElement
      const maxLength = parseInt(target.attributes['maxlength'].value, 10)
      const myLength = target.value.length
      if (myLength <= maxLength) {
        let previous = target
        while ((previous = previous.previousElementSibling)) {
          if (previous == null) break
          if (previous.tagName.toLowerCase() == 'input') {
            previous.focus()
            break
          }
        }
      }
    }
  }
}
</script>
