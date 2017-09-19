<template>
    <div class="toast">
        <div class="content">{{ toastJson.contentWord }}</div>
    </div>
</template>
<script>
    export default {
        props:['toastJson'],
        mounted(){
            setInterval(() => {
                this.toastJson.showToast = false;
            }, this.toastJson.showtime)
        }
    }
</script>
<style>
    .toast {
        position: absolute;
        z-index: 99;
        min-width: 100px;
        max-width: 150px;
        border-radius: 4px;
        text-align: justify;
        padding:10px;
        color:#fff;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
        background: rgba(0,0,0,.7);
    }
</style>