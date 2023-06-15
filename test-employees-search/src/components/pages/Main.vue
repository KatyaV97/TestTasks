<template>
    <div class="user-card">
        <div v-if="selectedEmployee.length == 0" class="hint">Выберите сотрудника, чтобы посмотреть его профиль</div>
        <div v-else class="profile-info">
            <div><img src="@/img/ImgFullProfile.png" class="employee-img" /></div>
            <div>
                <div class="short-info">
                    <h1>{{ selectedEmployee[0].name }}</h1>
                    <p><span>email:</span> {{ selectedEmployee[0].email }}</p>
                    <p><span>phone:</span> {{ selectedEmployee[0].phone }}</p>
                </div>
                <div class="about">
                    <h1>О себе</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea
                        commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim
                        id est
                        laborum.</p>
                </div>
            </div>
        </div>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

$font-stack: 'Montserrat', sans-serif;
$light-color: #FDFDFD;
$grey-color: #76787D;

@mixin flexible () {
    display: flex;
    flex-direction: row;
}

.user-card {
    font-family: $font-stack;
    font-style: normal;
    font-weight: 600;
    color: #000000;

    background: $light-color;
    border-left: 1px solid #E0E0E0;
    border-radius: 0px 10px 10px 0px;

    width: 100%;
}

.short-info,
.about {
    h1 {
        font-size: 16px;
        line-height: 140%;
    }
 
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;        

        color: #76787D;
    }    

    span {
        font-weight: 600;
        color: #000000;
    }
}

.short-info{
    p{
        margin-top: 10px;
    }

    p:last-child {
        margin-bottom: 20px;
    }
}

.about{
    h1 {
        margin-bottom: 25px;
    }
}


.hint {
    @include flexible ();
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: $grey-color;
}

.profile-info {
    @include flexible ();

    padding: 30px 30px;
}

.employee-img {
    width: 424px;
    height: 286px;

    margin-right: 61px;

    border: 1px solid #E0E0E0;
}
</style>
