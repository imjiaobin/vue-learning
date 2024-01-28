<script setup>
    import {ref} from "vue";
    let text = ref("主要內容");
    let change = function(){
        text.value = "新的網站內容";
    };
    defineProps(["color","backgroundColor"]);
</script>
<template>
<main :style = "{backgroundColor:backgroundColor,color:color}">
    <!-- 前面是屬性名稱,後面是對應的value -->
    <div @click = "change">{{text}}</div>
</main>
</template>
<style scoped>
    main{padding: 10px;background-color: #dddddd;}
</style>