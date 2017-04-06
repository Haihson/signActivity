<template>
<div id="app">
  <!-- <img src="./assets/logo.png"> -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: 0;
    -webkit-outline: 0;
}

html {
    font-size: 62.5%;
}

body {
    -webkit-text-size-adjust: none;
    font-family: "Helvetica Neue", "Microsoft Yahei", "Hiragino Sans GB",
    "Microsoft Sans Serif", "WenQuanYi Micro Hei", "sans-serif",
    "Varela Round", "sans-serif" !important;
    min-width: 320px;
    margin: 0 auto;
    background: rgba(105, 195, 255, 1);
    color: rgba(48, 48, 48, 1);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
</style>
