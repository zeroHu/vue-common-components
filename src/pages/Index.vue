<template>
    <div class="app">
        <div class="list">
            <ul>
                <li>Selection</li>
                <li>Chooser</li>
                <li>MultiplyChooser</li>
                <li>Counter</li>

            </ul>
        </div>
        <!-- 通过input search -->
        <div class="input-search item-block">
            <input type="text" v-model="inputval" @input="inputChange">
            <v-selection :select-data="selectdata" :is-showsection="isShowSection" @change-inputVal="changeVal"></v-selection>
            <div>你input search的选择是{{ !isShowSection ? inputval : '' }}</div>
        </div>


        <!-- chooser -->
        <div class="chooser item-block">
            <v-chooser :chooser-data="chooserData" @choosed-val="chooserChoosed = $event"></v-chooser>
            <div>chooser 选择的是{{ chooserChoosed }}</div>
        </div>

        <!-- VMultiplyChooser -->
        <div class="vmultiply-chooser item-block">
            <v-multiply-chooser :multiply-data="multiplyData" @multiply-choosed="multiplyChoosedArr = $event"></v-multiply-chooser>
            <div>multiplyData 选择的是 {{ multiplyChoosedArr.join(" ") }}</div>
        </div>

        <!-- VCounter -->
        <div class="v-counter item-block">
            <v-counter @counter-num="counterNum = $event" :counter-initnum="counterNum"></v-counter>
            <div>counter 加减器的实时结果是 {{ counterNum }}</div>
        </div>

        <!-- router -->
        <div class="router">
            <router-link to="/detail">查看vue插件更多功能体验</router-link>
        </div>
    </div>
</template>

<script>
import VSelection from '@/components/Selections'
import VChooser from '@/components/Chooser'
import VMultiplyChooser from '@/components/MultiplyChooser'
import VCounter from '@/components/Counter'
export default {
    name: 'app',
    data () {
        return {
            isShowSection:false,
            inputval:'',
            msg: '这是一个体验功能页面',
            chooserData:['小型车','中型车','大型车'],
            multiplyData:['炸鸡','啤酒','巧克力','辣条'],
            chooserChoosed:'小型车',
            multiplyChoosedArr:[],
            counterNum:1
        }
    },
    computed:{
        selectdata(){
            var allKeyArr = ['hello','hworld','maybe','find','tifei','1323'],
                returnarr = [],
                self = this

            allKeyArr.forEach(function(item){
                if(item.indexOf(self.inputval) > -1){
                  returnarr.push(item)
                }
            })
            returnarr.length > 0 ? returnarr : returnarr = ['not found']
            return returnarr
        }
    },
    methods:{
        inputChange(){
            this.inputval ? this.isShowSection = true : this.isShowSection = false
        },
        changeVal(val){
            this.inputval = val
            this.isShowSection = false
        }
    },
    components:{
        VSelection,
        VChooser,
        VMultiplyChooser,
        VCounter
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- lang="scss" scoped -->
<style>
* {
    padding:0;
    margin:0;
}
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.router {
    margin: 100px;
}

img {
    width: 100%;
}
.item-block {
    margin-top:50px;
}
.list {
    position:absolute;
    width: 150px;
    left: 0;
    border:1px solid #efefef;
    top: 40px;
    text-align: center;
}
.list ul {
    width: 150px;
    overflow: hidden;
    clear: both;
}
.list ul li {
    float: left;
    box-sizing: border-box;
    padding:20px 0;
    width: 150px;
    text-align: center;
    border-bottom: 1px solid #eee;
}
.list ul li:hover {
    background: #ff9090;
    color:#fff;
}
</style>
