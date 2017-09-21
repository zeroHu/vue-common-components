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
                    <div v-for="(ditem,dindex) in monthNumber" :class="{ grey: ditem.status !== 1 , nowday:nowmonth &&day == ditem.num , choosed : dayChoosedIndex == dindex}" @click.stop="choosedCalendarDate(dindex,ditem.status)">{{ ditem.num }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    /**
    * 日历完成主要步骤总结:
    * 1、判断年份是否闰年，从而判断2月份是29天还是28天
    * 2、定义数组1~12月，每月多少天
    * 3、定位当前月份第一天是星期几
    * 4、计算每月的日子number
    */
    export default {
        props:['defaultData'],
        data(){
            return {
                weeksName:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                monthNumber:[],
                month:'',//月
                year:'',//年
                dayChoosedIndex:-1
            }
        },
        methods:{
            // 获取默认年月日
            getNowDetail(){
                this.year = new Date(this.defaultData.date).getFullYear()//年
                this.month = new Date(this.defaultData.date).getMonth()//月
                this.day = new Date(this.defaultData.date).getDate()//日
            },
            // 计算是否是当前年月
            computToNowMonth(){
                this.nowmonth = false
                if(this.year == new Date().getFullYear() && this.month == new Date().getMonth()){
                    this.nowmonth = true
                }
            },
            // 计算每月的日历number
            getDayNumber(){
                var self = this,
                    firstDay = (new Date(self.year, self.month, 1)).getDay(),//每月第一天是星期几
                    weekNumArr = [],//计算number
                    monthdaynum = 42,//6*7 每月的日子的总数
                    addnum = 0,
                    addnumflag = false,
                    lastMonthFirstNum = self.monthdayArr[self.month>1 ? self.month-1 : 11]-firstDay;// 当月的上个月

                for(var i = 0; i <monthdaynum; i++){
                    if(i<firstDay){
                        lastMonthFirstNum ++
                        weekNumArr[i] = { num:lastMonthFirstNum,status:'before' }// status标明是上个月
                    }else if(i>=firstDay){
                        if(addnum < self.monthdayArr[self.month]){
                            addnum ++
                        }else{
                            addnum = 1
                            addnumflag = true
                        }
                        weekNumArr[i] = { num:addnum,status:addnumflag ? 'after' :1 }// status after 标明是下个月 status 1的时候表示是本月日子
                    }
                }
                this.monthNumber = weekNumArr
            },
            // 计算每月的天数
            computeMonthDayNum(){
                var self = this,
                    monthday = [31,28,31,30,31,30,31,31,30,31,30,31]
                // 闰年计算
                if ((self.year % 400 === 0) || (self.year % 4 === 0 && self.year % 100 !== 0)) {
                    monthday[1] = 29
                }
                this.monthdayArr = monthday
            },
            // 选择月份
            monthChoose(type){
                // 减少月份
                if(type == 'slice'){
                    if(this.month > 0){
                        this.month --
                    }else{
                        this.year --
                        this.month = 11
                    }
                }
                // 增加月份
                else{
                    if(this.month < 11 ){
                        this.month ++
                    }else{
                        this.year ++
                        this.month = 0
                    }
                }
                // 及时计算
                this.computToNowMonth()
                // 计算是否是当月
                this.computeMonthDayNum()
                // 计算月份的日子number
                this.getDayNumber()
                // 清空上个月选择的月份
                this.dayChoosedIndex = -1
            },
            // 选择日期
            choosedCalendarDate(dindex,dstatus){
                this.dayChoosedIndex = dindex;
                // 计算moth day
                var month = dstatus == 'before' ? Number(this.month) : dstatus == 'after' ? Number(this.month+2) : Number(this.month+1),
                    day = this.monthNumber[dindex].num < 10 ? '0'+this.monthNumber[dindex].num : this.monthNumber[dindex].num
                    month = month< 10 ? '0'+month : month

                // 传日历选中的值给父模板
                this.$emit('haschoosed-date',this.year + '-' + month  + '-' + day)
                // 关闭日历
                this.showOrHideCalendar(false)
            },
            // 日历弹层开关
            showOrHideCalendar(val){
               this.defaultData.showcalendar = val
            }
        },
        mounted(){
            // 计算当前年月份
            this.getNowDetail()
            // 计算是否是当月
            this.computToNowMonth()
            // 计算是否是当月
            this.computeMonthDayNum()
            // 计算月份的日子number
            this.getDayNumber()
        }
    }
</script>
<style lang="scss" scoped>
    .calendar {
        position: relative;
        margin:auto;
        width: 320px;
        .choose-calendar-button {
            cursor: pointer;
            margin: auto;
            width: 200px;
            border: 1px solid #333;
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
            .year-box {
                display: flex;
                div{
                    flex: 1;
                    &.main {
                        flex: 60%;
                    }
                    &.left {
                        padding-left:10px;
                        text-align: left;
                    }
                    &.right {
                        text-align: right;
                        padding-right:10px;
                    }
                }
            }
            .day-box {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 90%;
                box-sizing: border-box;
                .week {
                    height: 16%;
                    display: flex;
                    align-items: center;
                    div {
                        font-size: 12px;
                        text-align: center;
                        flex: 1;
                    }
                }
                .day {
                    height: 84%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    div {
                        width: 14%;
                        &.grey {
                            color:#bbb;
                        }
                        &.nowday {
                            background: #ccc;
                            color:#fff;
                        }
                        &.choosed {
                            background: #fc615d;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
</style>