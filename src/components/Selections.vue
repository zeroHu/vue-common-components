<template>
    <div class="selections" v-show="isShowsection">
        <ul>
            <li v-for="sitem in selectData" @click="chooseItem(sitem)">{{ sitem }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['selectData','isShowsection'],
        data(){
            return{
                isShowSection:false
            }
        },
        methods:{
            chooseItem(val){
                this.$emit('change-inputVal',val)
                this.isShowSection = false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .selections {
        border:1px solid #ccc;
        margin:auto;
        width: 130px;
        text-align: center;
        ul {
            cursor: pointer;
            padding: 0;
            margin:0;
            li{
                list-style: none;
                border-bottom:1px solid #efefef;
                &:last-child{
                    border-bottom:none;
                }
            }
        }
    }
</style>