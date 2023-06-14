<template>
    <button class="card-btn" @click="openUserCard">
        <div class="card">
            <div class="employee-img">
                <img />
            </div>
            <div class="employee-info">
                <p>{{ employee.name }}</p>
                <p>{{ employee.email }}</p>
            </div>
        </div>
    </button>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import $ from 'jquery'

export default {
    name: 'employee-card',
    data(){
        return {
            employeeInfo:'',
        }
    },
    props: {
        employee: {
            type: Object,
            default: {}
        },
        selectedEmployeeId: {
            type: String,
            default: ''
        }
    },
    mounted(){
        this.employeeInfo = $(".employee-info");
    },
    computed: {
        ...mapGetters(['selectedEmployee'])
    },
    methods: {
        ...mapMutations(['updateSelectedEmployeeId']),
        openUserCard() {
            this.updateSelectedEmployeeId(this.employee.id);            
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: row;

    width: 240px;
    max-width: 240px;
    height: 70px;
    

    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.card p {
    font-family: 'Montserrat';
    font-size: 14px;
    line-height: 17px;
}

.employee-info {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    word-wrap: break-word;
}

.employee-info p:first-child {
    margin-bottom: 6px;
    font-style: normal;
    font-weight: 600;

    color: #333333;
}

.employee-info p:last-child {

    font-style: normal;
    font-weight: 400;
    /* identical to box height */

    color: #76787D;
}

.employee-img {
    min-width: 70px;
    width: 70px;
    height: 70px;

    border-right: 1px solid #E0E0E0;
}

.card-btn {
    width: 241px;
    height: 70px;
    border-radius: 0px 10px 10px 0px;
    margin-top: 12px;
}

.card-btn:hover {
    cursor: pointer;
}

.employee-info:hover {
    background: #E0E0E0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 0px;
}

</style>