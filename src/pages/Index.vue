<template>
    <div class="app">
        <img src="../assets/bigimg-test.jpg" alt="">
        <h1>{{ msg }}</h1>

        <input type="text" v-model="inputval" @input="inputChange">
        <!-- 通过input search -->
        <v-selection :select-data="selectdata" :is-showsection="isShowSection" @change-inputVal="changeVal"></v-selection>
        <div>你input search的选择是{{ !isShowSection ? inputval : '' }}</div>

        <!-- chooser -->
        <v-chooser :chooser-data="chooserData" @choosed-val="chooserChoosed = $event"></v-chooser>
        <div>chooser 选择的是{{ chooserChoosed }}</div>

        <!-- VMultiplyChooser -->
        <v-multiply-chooser :multiply-data="multiplyData" @multiply-choosed="multiplyChoosedArr = $event"></v-multiply-chooser>
        <div>multiplyData 选择的是 {{ multiplyChoosedArr.join(" ") }}</div>

        <!-- VCounter -->
        <v-counter @counter-num="counterNum = $event" :counter-initnum="counterNum"></v-counter>
        <div>counter 加减器的实时结果是 {{ counterNum }}</div>
        <!-- router -->
        <div class="router">
            <router-link to="/detail">go to detail</router-link>
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
            msg: 'Welcome to Your Vue.js App',
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
<style lang="scss" scoped>
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
</style>
