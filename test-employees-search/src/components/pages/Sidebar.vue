<template>
    <aside class="my-sidebar" >
        <div class="employees-search">
            <h1>Поиск сотрудников</h1>
            <input type="text" id="inputText" placeholder="Введите id или имя" name="user" v-model="inputText"
                @keyup.enter="updateEmployeesList" />
        </div>
        <div v-show="isLoading">
            <!-- <div class="spiner-border">
                <span class="sr-only">Loading...</span>
            </div> -->
            <preloader/>
        </div>
        <div class="search-result"  v-show="!isLoading">
            <h1>Результаты</h1>
            <div v-if="allEmployees.length > 0" class="employees">
                <div v-for="employee in allEmployees" :key="employee.id">
                    <employeeCard :employee="employee" :selectedEmployeeId="selectedEmployee.id"></employeeCard>
                </div>
            </div>
           <div v-else-if="allEmployees.length == 0 && isUpdateParametersEnd">
                <p id="hint">ничего не найдено</p>
            </div>
            <div v-else-if=" inputText.length == 0">
                <p id="hint">начните поиск</p>
            </div> 
        </div>
    </aside>
</template>

<script>
import employeeCard from '@/components/cards/EmployeeCard.vue'
import preloader from '@/components/loader/Preloader.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import $ from 'jquery';

export default {
    components: {
        employeeCard, preloader
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
            const hint = $("#hint");
            this.inputText.trim();

            if (this.inputText === "" || this.inputText === undefined || this.inputText === null) {
                alert("Введите id или имя");
                this.clearEmployees();
            } else {
                const parametersList = this.getParametersList()
                this.fetchEmployees(parametersList);
           }

            if(this.isLoading && this.allEmployees.length == 0){
                hint.text("ничего не найдено")
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

.my-sidebar {
    background: #FDFDFD;
}

.spiner-border{
    width:8rem;
    height: 8rem;

}
</style>