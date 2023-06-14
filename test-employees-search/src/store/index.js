import * as Vue from 'vue'
import * as Vuex from 'vuex'
import employee from '@/store/modules/employee'

const store = new Vuex.Store({
    modules: {
        employee
    }
});

export default store