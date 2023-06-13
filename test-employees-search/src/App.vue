<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from '@/components/pages/Sidebar.vue'
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --light: #f1f5f9;
  --light-grey:#F5F5F5;
  --sidebar-width: 300px; 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  background:var(--light-grey);
  margin-top:  120px;
  margin-left: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media(max-width:768px){
      padding-left: 6rem;
    }
  }
}
</style>
