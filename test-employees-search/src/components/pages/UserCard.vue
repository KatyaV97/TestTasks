<template>
    <div v-if="selectedEmployee.length > 0" class="user-card-info">
        <div><img class="employee-img" /></div>
        <div><h1>{{ selectedEmployee[0].name }}</h1>
        <p>email: <span>{{ selectedEmployee[0].email }}</span></p>
        <p>phone: <span>{{ selectedEmployee[0].phone }}</span></p>
        <h1>О себе</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.</p></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['selectedEmployee'])
    },
}
</script>

<style lang="scss" scoped>
.user-card-info {
    display:flex;
    flex-direction:row;
    background: #FDFDFD;
    border-left: 1px solid #E0E0E0;
    border-radius: 0px 10px 10px 0px;
}

.employee-img {
    width: 424px;
    height: 286px;

    border: 1px solid #E0E0E0;
}</style>
