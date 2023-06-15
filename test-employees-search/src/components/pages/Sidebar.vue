<template>
    <aside class="my-sidebar">
        <div class="employees-search">
            <h1>Поиск сотрудников</h1>
            <input type="text" id="inputText" placeholder="Введите Id или имя" name="user" v-model="inputText"
                @keyup.enter="updateEmployeesList" />
        </div>
        <div v-show="isLoading">
            <div class="spiner-border">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="search-result" v-show="!isLoading">
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
import $ from 'jquery';

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
        ...mapMutations(['clearEmployees']),
        ...mapMutations(['clearSelectedParameterId']),
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
                    break;
                }

                searchList.push(this.inputText.slice(position, foundPosition).trim());
                position = foundPosition + 1;
            }

            return searchList;
        },
    }
}
</script>

<style lang="scss" scoped>
$font-stack: 'Montserrat', sans-serif;
$title-color: #333333;
$grey-color: #76787D;

.my-sidebar {
    display: flex;
    flex-direction: column;
    font-family: $font-stack;
    font-style: normal;

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
        padding: 16px 24px;
        margin-bottom: 29px;
        gap: 16px;

        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        width: 240px;

        color: $grey-color;
        border: 1.5px solid #E9ECEF;
        border-radius: 8px;
    }
}

.search-result {
    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;

        color: $title-color;

        margin: 0;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: $grey-color;

        margin: 10px 0;
    }
}

.my-sidebar {
    background: #FDFDFD;
}

.spiner-border {
    width: 8rem;
    height: 8rem;

}
</style>