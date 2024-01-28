<script setup>
    defineProps(["title"]);//傳遞到主要層的NavCom中,去設定屬性,再給入資料(值)
</script>
<template>
    <nav>{{title}}</nav>
</template>
<style scoped>
    nav{padding:10px};
</style>