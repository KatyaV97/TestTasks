export default {
    actions: {
        async fetchEmployees({commit}, parametersList) {
            commit('setLoading', true);
            commit('setUpdateParametersEnd', false);

            let request = "https://jsonplaceholder.typicode.com/users/";
            let employees = [];

            if (!isNaN(+parametersList[0])) {
                request += parametersList[0];

                const respons = await fetch(request);
                employees.push(await respons.json());
            } else {
                request += "?";

                parametersList.forEach(parameter => {
                    request += "username=" + parameter + "&";
                });

                const respons = await fetch(request);
                employees = await respons.json();
            }

            commit('updateEmployees', employees);
            commit('setLoading', false);
            commit('setUpdateParametersEnd', true);
        },
        updateSelectedEmployee({commit}, id) {
            commit('updateSelectedEmployeeId', id);
        },
        // setLoading({commit}){
        //     commit('setLoading', true);
        // }
    },
    mutations: {
        updateEmployees(state, employees) {
            state.employees = employees;
        },
        updateSelectedEmployeeId(state, id) {
            state.selectedId = id;
        },
        clearEmployees(state){
            state.employees = [];
            state.isUpdateParametersEnd = false;
        },
        clearSelectedParameterId(state){
            state.selectedId = 0;
        },
        setLoading(state, isLoadingState){
            state.isLoading = isLoadingState;
        },
        setUpdateParametersEnd(state, isUpdateParametersEndState){
            state.isUpdateParametersEnd = isUpdateParametersEndState;
        },
    },
    state: {
        employees: [],
        selectedId: 0,
        selectedEmployeeInfo: [],
        isLoading: false,
        isUpdateParametersEnd:false,
    },
    getters: {
        allEmployees(state) {
            return state.employees;
        },
        selectedEmployee(state) {
            state.selectedEmployeeInfo = state.employees.filter(employee => employee.id === state.selectedId)

            return state.selectedEmployeeInfo;
        },
        isLoading(state){
            return state.isLoading;
        },
        isUpdateParametersEnd(state){
            return state.isUpdateParametersEnd;
        }
    },
}