export default {
    actions: {
        async fetchEmployees({ commit }, parametersList) {
            commit('setLoading', true);
            commit('setUpdateParametersEnd', false);

            let request = "https://jsonplaceholder.typicode.com/users/";
            let employees = [];

            if (!isNaN(+parametersList[0])) {
                request += parametersList[0];

                //fetch(request).then(response => employees.push(response.json()))

                const response = await fetch(request);
                // console.log(response.ok)
                if (response.ok) {
                    employees.push(await response.json());
                } else {
                    alert("Ошибка сервера: " + response.status)
                }

            } else {
                request += "?";

                parametersList.forEach(parameter => {
                    request += "username=" + parameter + "&";
                });

                const response = await fetch(request);

                if (response.ok) {
                    employees = await response.json();
                } else {
                    alert("Ошибка сервера: " + response.status)
                }
            }

            commit('updateEmployees', employees);
            commit('setLoading', false);
            commit('setUpdateParametersEnd', true);
        },
        updateSelectedEmployee({ commit }, id) {
            commit('updateSelectedEmployeeId', id);
        },
    },
    mutations: {
        updateEmployees(state, employees) {
            state.employees = employees;
        },
        updateSelectedEmployeeId(state, id) {
            state.selectedId = id;
        },
        clearEmployees(state) {
            state.employees = [];
            state.isUpdateParametersEnd = false;
        },
        clearSelectedParameterId(state) {
            state.selectedId = 0;
        },
        setLoading(state, isLoadingState) {
            state.isLoading = isLoadingState;
        },
        setUpdateParametersEnd(state, isUpdateParametersEndState) {
            state.isUpdateParametersEnd = isUpdateParametersEndState;
        },
    },
    state: {
        employees: [],
        selectedId: 0,
        selectedEmployeeInfo: [],
        isLoading: false,
        isUpdateParametersEnd: false,
    },
    getters: {
        allEmployees(state) {
            return state.employees;
        },
        selectedEmployee(state) {
            state.selectedEmployeeInfo = state.employees.filter(employee => employee.id === state.selectedId)

            return state.selectedEmployeeInfo;
        },
        isLoading(state) {
            return state.isLoading;
        },
        isUpdateParametersEnd(state) {
            return state.isUpdateParametersEnd;
        },
        selectedId(state) {
            return state.selectedId;
        }
    },
}