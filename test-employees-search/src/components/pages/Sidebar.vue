<template>
    <aside class="my-sidebar">
        <div class="employees-search">
            <h1>Поиск сотрудников</h1>
            <input type="text" id="inputText" placeholder="Введите Id или имя" name="user" v-model="inputText"
                @keyup.enter="updateEmployeesList" />
        </div>
        <div v-if="isLoading">
            <div>
                <span>Loading...</span>
            </div>
        </div>
        <div v-else class="search-result">
            <h1>Результаты</h1>
            <div v-if="allEmployees.length > 0" class="employees">
                <div v-for="employee in allEmployees" :key="employee.id">
                    <EmployeeCard :employee="employee" :selectedEmployeeId="selectedEmployee.id"></EmployeeCard>
                </div>
            </div>
            <div v-else-if="allEmployees.length == 0 && isUpdateParametersEnd">
                <p id="hint">ничего не найдено</p>
            </div>
            <div v-else-if="inputText.length == 0">
                <p id="hint">начните поиск</p>
            </div>
        </div>
    </aside>
</template>

<script>
import EmployeeCard from '@/components/cards/EmployeeCard.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    components: {
        EmployeeCard
    },
    data() {
        return {
            inputText: '',
            searchList: [],
        }
    },
    computed: {
        ...mapGetters(['allEmployees', 'selectedEmployee', 'isLoading', 'isUpdateParametersEnd']),
    },
    methods: {
        ...mapActions(['fetchEmployees']),
        ...mapMutations(['clearEmployees', 'clearSelectedParameterId']),
        updateEmployeesList() {
            this.isUpdateParameters = false;

            this.clearSelectedParameterId();
            this.inputText.trim();

            if (this.inputText === "" || this.inputText === undefined || this.inputText === null) {
                alert("Введите id или имя");
                this.clearEmployees();
            } else {
                const parametersList = this.getParametersList()
                this.fetchEmployees(parametersList);
            }
        },
        getParametersList() {
            let searchList = [];
            let position = 0;

            while (true) {
                let foundPosition = this.inputText.indexOf(",", position);

                if (foundPosition == -1) {
                    searchList.push(this.inputText.slice(position).trim());
                    console.log(searchList)
                    break;
                }

                let searchItem = this.inputText.slice(position, foundPosition).trim();

                if (searchItem !== "" && searchItem !== null && searchItem !== undefined) {
                    searchList.push(searchItem);
                }

                position = foundPosition + 1;
            }

            return searchList;
        }
    }
}
</script>

<style lang="scss" scoped>
$font-stack: 'Montserrat', sans-serif;
$title-color: #333333;
$grey-color: #76787D;
$border-color: #E9ECEF;
$light-color: #FDFDFD;

@mixin flexible () {
    display: flex;
    flex-direction: column;
}

.my-sidebar {
    @include flexible();

    font-family: $font-stack;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    padding-right: 30px;
}

.employees-search {
    h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;

        color: $title-color;

        margin: 27px 0 22px;
    }

    input {
        line-height: 17px;

        padding: 16px 24px;
        margin-bottom: 29px;

        width: 240px;

        color: $grey-color;
        border: 1.5px solid $border-color;
        border-radius: 8px;
    }
}

.search-result {
    h1 {
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;

        color: $title-color;

        margin: 0;
    }

    p {
        line-height: 17px;

        color: $grey-color;

        margin: 10px 0;
    }
}

.my-sidebar {
    background: $light-color;
}
</style>