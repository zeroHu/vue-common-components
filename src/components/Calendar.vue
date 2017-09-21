<template>
    <div class="calendar">
        <div class="choose-calendar-button" @click.stop="showOrHideCalendar(true)">选择日期</div>
        <div class="box" v-show="defaultData.showcalendar">
            <div class="year-box">
                <div class="left" @click.stop="monthChoose('slice')"><</div>
                <div class="main">{{ month+1 }}月 {{ year }}年</div>
                <div class="right" @click.stop="monthChoose('add')">></div>
            </div>
            <div class="day-box">
                <div class="week">
                    <div v-for="witem in weeksName">{{ witem }}</div>
                </div>
                <div class="day">
                    <div v-for="(ditem,dindex) in dayNmber" :class="{ grey: ditem.status !== 1 , nowday:nowmonth &&day == ditem.num , choosed : dayChoosedIndex == dindex}" @click.stop="choosedCalendarDate(dindex,ditem.status)">{{ ditem.num }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['defaultData'],
        data(){
            return {
                weeksName:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                dayNmber:[],
                month:0,
                year:0,
                dayChoosedIndex:-1
            }
        },
        methods:{
            getNowDetail(){
                this.year = new Date(this.defaultData.date).getFullYear()
                this.month = new Date(this.defaultData.date).getMonth()
                this.day = new Date(this.defaultData.date).getDate()
                // console.log('xxx',this.year,this.month,this.day)
            },
            // 计算是否是当前年月
            computToNowMonth(){
                this.nowmonth = false;
                if(this.year == new Date().getFullYear() && this.month == new Date().getMonth()){
                    this.nowmonth = true;
                }
            },
            // 计算每月的日历number
            getDayNumber(){
                var self = this;
                // 每月第一天是星期几
                var firstDay = (new Date(self.year, self.month, 1)).getDay();
                // console.log('firstDay',firstDay);
                //计算number
                var weekNumArr = [],
                    monthdaynum = 42,
                    addnum = 0,
                    addnumflag = false,
                    // 上个月
                    lastMonthFirstNum = self.monthdayArr[self.month>1 ? self.month-1 : 11]-firstDay;

                // console.log('------lastMonthFirstNum',lastMonthFirstNum);
                for(var i = 0; i <monthdaynum; i++){
                    if(i<firstDay){
                        lastMonthFirstNum ++;
                        // status标明是上个月
                        weekNumArr[i] = { num:lastMonthFirstNum,status:'before' };
                    }else if(i>=firstDay){
                        if(addnum < self.monthdayArr[self.month]){
                            addnum ++ ;
                        }else{
                            addnum = 1;
                            addnumflag = true;
                        }
                        // status after 标明是下个月 status 1的时候表示是本月日子
                        weekNumArr[i] = { num:addnum,status:addnumflag ? 'after' :1 };
                    }
                }
                this.dayNmber = weekNumArr;
                // console.log('======weekNumArr=======',JSON.stringify(weekNumArr));
            },
            // 计算每月的天数
            computeMonthDayNum(){
                var self = this;
                var monthday = [31,28,31,30,31,30,31,31,30,31,30,31];
                // 闰年计算
                if ((self.year % 400 === 0) || (self.year % 4 === 0 && self.year % 100 !== 0)) {
                    monthday[1] = 29
                }
                // console.log('-------Montharr------',monthday);
                this.monthdayArr = monthday;
            },
            // 选择月份
            monthChoose(type){
                if(type == 'slice'){
                    if(this.month > 0){
                        this.month --
                    }else{
                        this.year --
                        this.month = 11
                    }
                }else{
                    if(this.month < 11 ){
                        this.month ++
                    }else{
                        this.year++
                        this.month = 0
                    }
                }
                this.computToNowMonth()
                this.computeMonthDayNum()
                this.getDayNumber()
                // 清空上个月选择的月份
                this.dayChoosedIndex = -1;
            },
            // 选择日期
            choosedCalendarDate(dindex,dstatus){
                this.dayChoosedIndex = dindex;
                // 计算moth day
                var month = dstatus == 'before' ? Number(this.month) : dstatus == 'after' ? Number(this.month+2) : Number(this.month+1),
                    day = this.dayNmber[dindex].num < 10 ? '0'+this.dayNmber[dindex].num : this.dayNmber[dindex].num
                    month = month< 10 ? '0'+month : month
                // 传日历选中的值给父模板
                this.$emit('haschoosed-date',this.year + '-' + month  + '-' + day);
                // 关闭日历
                this.showOrHideCalendar(false)
            },
            showOrHideCalendar(val){
                console.log('xxxddddx',this.defaultData)
               this.defaultData.showcalendar = val;
            }
        },
        mounted(){
            // 计算当前年月份
            this.getNowDetail();
            this.computToNowMonth();
            this.computeMonthDayNum();
            this.getDayNumber();
        }
    }
</script>
<style scoped>
    .calendar {
        position: relative;
        margin:auto;
        width: 320px;
    }
    .choose-calendar-button {
        margin:auto;
        width: 200px;
        border:1px solid #333;
    }
    .box {
        position: absolute;
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
    .year-box div.main {
        flex: 60%;
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
        color:#bbb;
    }
    .day-box .day div.nowday {
        background: #ccc;
        color:#fff;
    }
    .day-box .day div.choosed {
        background: #fc615d;
        color:#fff;
    }
</style>