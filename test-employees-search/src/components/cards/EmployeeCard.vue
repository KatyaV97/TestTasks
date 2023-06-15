<template>
    <button class="card-btn" @click="openUserCard">
        <div class="employee-img">
            <img src="@/img/ImgSmall.png" />
        </div>
        <div class="employee-info" :id=employee.id>
            <p>{{ employee.username }}</p>
            <p>{{ employee.email }}</p>
        </div>
    </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import $ from 'jquery'

export default {
    name: 'employee-card',
    data() {
        return {
            employeeInfo: '',
        }
    },
    props: {
        employee: {
            type: Object,
            default: {}
        }
    },
    computed: {
        ...mapGetters(['selectedEmployee', 'selectedId'])
    },
    methods: {
        ...mapMutations(['updateSelectedEmployeeId']),
        openUserCard() {
            this.updateSelectedEmployeeId(this.employee.id);
        }
    },
    watch: {
        selectedId() {
            const employeeInfo = $('#' + this.employee.id);

            if (this.selectedId === this.employee.id) {
                employeeInfo.addClass('selected-card');
            } else {
                employeeInfo.removeClass('selected-card');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$title-color: #333333;
$grey-color: #76787D;
$hover-color: #E0E0E0;
$white: #FFFFFF;
$radius: 10px;

@mixin flexible () {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-btn {
    @include flexible();    

    font-style: normal;

    width: 240px;
    max-width: 240px;
    height: 100%;
    min-height: 70px;
    margin: 18px 0;

    background: $white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: $radius;
    border: none;
}

.employee-info {
    width: 100%;
    max-width: 170px;
    min-height: 75px;
    word-wrap: break-word;
    border-left: 1px solid $hover-color;

    p {
        text-align: start;
        margin: 15px 15px 5px;
    }

    p:first-child {
        font-weight: 600;
        color: $title-color;
    }

    p:last-child {
        font-weight: 400;
        color: $grey-color;
        margin: 0 15px 15px;
    }
}

.employee-img {
    width: 70px;
}

.card-btn:hover {
    cursor: pointer;
}

.employee-info:hover {
    background: $hover-color;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0 $radius $radius 0;
}

.selected-card {
    background: $hover-color;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0 $radius $radius 0;
}
</style>