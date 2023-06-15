<template>
  <div class="app">
    <div class="header">
      <h1>Жилфонд</h1>
      <h2>Пользователь</h2>
    </div>
    <div class="main  ">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script >
import Sidebar from '@/components/pages/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
$font-stack: 'Montserrat', sans-serif;
$primary-color: #F5F5F5;
$red-color: #E31F24;
$title-color: #333333;

@mixin flexibleRow () {
  display: flex;
  flex-direction: row;
}

@mixin flexibleColumn () {
  display: flex;
  flex-direction: column;
}

// _reset.scss
* {
  margin: 0;
  padding: 0;
}

.app {
  @include flexibleColumn();

  font-family: $font-stack;
  background-color: $primary-color;
  font-style: normal;
  padding: 46px 50px 58px 55px;
  width: 1366px;
}

.header {
  @include flexibleRow ();

  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;

  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: $red-color;
  }

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $title-color;
    padding-top: 4px;
  }
}

.main {
  @include flexibleRow ();

  height: 100%;
  min-height: 575px;
  width: 100%;
  
  padding-left: 20px;
  background: #FDFDFD;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>