<script setup>
    defineProps(["title","subtitle"]);//傳遞到主要層的NavCom中,去設定屬性,再給入資料(值)
</script>
<template>
    <nav>
        <div>{{title}}</div>
        <div>{{subtitle}}</div>
    </nav>
    
</template>
<style scoped>
    nav{padding:10px};
</style>

<!-- 
如果我今天想把subtitle的按鈕放到另外一個子組件
-->