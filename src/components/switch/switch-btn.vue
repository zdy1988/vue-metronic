<template>
  <input class="switch" type="checkbox">
</template>
<style lang="scss">
  $duration: .4s;
  $checkedColor: #337ab7;
  .switch {
    width: 62px;
    height: 31px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    &:before {
      content: '';
      width: 29px;
      height: 29px;
      position: absolute;
      top: 0px;
      left: 0;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
    &:checked {
      border-color: $checkedColor;
      box-shadow: $checkedColor 0 0 0 16px inset;
      background-color: $checkedColor;
      &:before {
        left: 31px;
      }
    }
    & {
      transition: border cubic-bezier(0, 0, 0, 1) $duration, box-shadow cubic-bezier(0, 0, 0, 1) $duration;
      &:before {
        transition: left 0.3s;
      }
      &:checked {
        box-shadow: $checkedColor 0 0 0 16px inset;
        background-color: $checkedColor;
        transition: border ease $duration, box-shadow ease $duration, background-color ease $duration*3;
        &:before {
          transition: left 0.3s;
        }
      }
    }
  }
</style>
<script>
  export default{
    props: {

    }
  }
</script>
