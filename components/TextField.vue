<template>
  <section
    class="text-field"
    :class="active && 'active'"
    @click="active = true"
    :style="{ borderColor }"
    tabindex="4"
  >
    <label :for="componentUniqId">
      <span :id="componentUniqId + '_label'" class="IranSansMedium">
        {{ label }} :
      </span>
      <input
        :class="colorTheme === 'white' ? 'wPlaceholder' : 'bPlaceholder'"
        :style="{
          color,
          right: labelWidth + 'px',
          width: `calc(100% - ${labelWidth}px`
        }"
        :type="type"
        :id="componentUniqId"
        :placeholder="value"
        @blur="active = false"
      />
    </label>
  </section>
</template>

<script>
export default {
  name: 'text-field',
  props: {
    label: String,
    type: String,
    color: String,
    colorTheme: String,
    borderColor: String,
    value: String || Number
  },
  data() {
    return {
      componentUniqId: null,
      labelWidth: 0,
      active: false
    }
  },
  mounted() {
    this.componentUniqId = 'textField' + Math.random()
    this.$nextTick(() => {
      this.getLabelWidth(this.componentUniqId + '_label')
    })
  },
  methods: {
    getLabelWidth(element) {
      if (document.getElementById(element)) {
        const sizes = document.getElementById(element).getBoundingClientRect()
        this.labelWidth = sizes.width
      }
    }
  }
}
</script>
