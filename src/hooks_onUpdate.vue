<!-- hooks的使用範例 -->
<script setup>
    import {onMounted,onUnmounted,ref} from "vue";
    let text = ref("onUpdate的練習");
    let changeText = function(){
        text.value = "onUpdate的練習完成";
    };
    //製作一個數數的功能,用js內建的setInterval(),以毫秒為單位
    let counter = ref(0);
    let scheduleID;
    //一掛載就設定排程
    onMounted(function(){
        scheduleID = window.setInterval(function(){
        console.log("每隔一秒鐘數字加一");
        counter.value = counter.value+1;
        },1000);
    });
    //一卸載就設定清除排程,把卸載後需要清除掉的功能一起停止
    onUnmounted(function(){
        window.clearInterval(scheduleID);
    });
</script>
<template>
    <main>
        <div>{{text}}</div>
        <button @click="changeText">練習</button>
    </main>
</template>
<style scoped>
    main{padding: 10px;background-color: #dddddd;}
</style>