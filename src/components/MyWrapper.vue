<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style lang ="scss" scoped>
.wrapper {
  max-width: 700px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);

}
</style>