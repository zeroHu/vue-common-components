<template>
    <div class="calendar">
        <div class="box">
            <div class="year-box">
                <div class="left"><</div>
                <div>8 2017</div>
                <div class="right">></div>
            </div>
            <div class="day-box">
                <div class="week">
                    <div v-for="witem in weeksName">{{ witem }}</div>
                </div>
                <div class="day">
                    <div v-for="ditem in dayNmber">{{ ditem }}</div>
                    <div class="choosed">19</div>
                    <div class="grey">10</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // 蔡勒公式 w=y+[y/4]+[c/4]-2c+[26(m+1)/10]+d-1  w：星期；c：世纪-1；y：年（两位数）；m：月 d：日
    export default {
        props:['defaultDate'],
        data(){
            return {
                weeksName:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                dayNmber:[]
            }
        },
        methods:{
            getNowDetail(){
                this.year = new Date(this.defaultDate).getFullYear()
                this.month = new Date(this.defaultDate).getMonth()+1
                this.day = new Date(this.defaultDate).getDate()
                console.log('xxx',this.year,this.month,this.day)
            },
            getDayNumber(){

            },
            // 计算每月的天数
            computeMonthDayNum(){
                var self = this;
                var monthday = [31,28,31,30,31,30,31,31,30,31,30,31];
                // 闰年计算
                if( (self.year === 0 % 4 && self.year % 100 !== 0) || self.year % 400 === 0){
                    monthday[1] = 29
                }
                console.log('monthday',monthday);
                return monthday;
            }
        },
        mounted(){
            // 计算当前年月份
            this.getNowDetail();
            this.computeMonthDayNum();
        }
    }
</script>
<style scoped>
    .box {
        position: relative;
        box-sizing: border-box;
        padding:10px;
        z-index: 10;
        width:300px;
        height:300px;
        overflow: hidden;
        background: #fff;
        border:1px solid #eee;
        cursor: pointer;
    }
    .year-box {
        display: flex;
    }
    .year-box div{
        flex: 1
    }
    .year-box div.left {
        padding-left:10px;
        text-align: left;
    }
    .year-box div.right {
        text-align: right;
        padding-right:10px;
    }


    .day-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 90%;
        box-sizing: border-box;
    }
    .day-box .week {
        height: 16%;
        display: flex;
        align-items: center;
    }
    .day-box .week div {
        font-size: 12px;
        text-align: center;
        flex: 1;
    }
    .day-box .day {
        height: 84%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .day-box .day div {
        width: 14%;
    }
    .day-box .day div.grey {
        color:grey;
    }
    .day-box .day div.choosed {
        background: #ccc;
    }
</style>