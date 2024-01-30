<script setup>
    import {ref} from "vue";
    let text = ref("主要內容");
    let change = function(){
        text.value = "新的網站內容";
    };
    defineProps(["color","backgroundColor"]);
    let emit = defineEmits(["update"]);
    let updateParentSubtitle=function(){
        emit("update");
    };
</script>
<template>
<main :style = "{backgroundColor:backgroundColor,color:color}">
    <!-- 前面是屬性名稱,後面是對應的value -->
    <div @click = "change">{{text}}</div>
    <!-- <button @click="$emit('update')">改變副標題</button> 
    這是方法一-->
    <button @click="updateParentSubtitle">按鈕</button>
</main>
</template>
<style scoped>
    main{background-color: lightblue;padding: 10px}
    .content{color:rgb(13, 13, 149)}
    .dark{color:grey}
    .light{color:lightgray}

    .title{font-weight:bold;}
    .highlight{color:red;}

    .red{color: red;}
    .green{color: green;}
</style>