<template>
    <aside>
        <div class="employees-search">
            <h1>Поиск сотрудников</h1>
            <input placeholder="Введите id или имя" name="user" />

        </div>
        <div class="search-result">
            <h1>Результаты</h1>
            <div v-if="employees.length > 0" class="employees">

            </div>
            <div v-else-if="employees.length == 0 && inputText.length > 0">
                <p>Ничего не найдено</p>
            </div>
            <div v-else>
                <p>Начните поиск</p>
            </div>

        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            inputText: '',
        }
    },
    props: {
        employees: {
            type: Array,
            default: []
        },
    },

}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
}

.employees-search h1,
.search-result h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin-top: 20px;

    color: #333333;
}

.employees-search input {
    align-items: center;
    padding: 16px;
    gap: 16px;
    margin-top: 20px;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    width: 240px;
    height: 46px;


    background: #FFFFFF;

    border: 1.5px solid #E9ECEF;
    border-radius: 8px;
}
</style>