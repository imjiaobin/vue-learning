<script setup>
    import Flowcontrol from "./Flowcontrol.vue";
    import Eventhandler from "./Eventhandler.vue";
    import ResponsiveAndForm from "./ResponsiveAndForm.vue";
    import TemplateIntroduction from "./TemplateIntroduction.vue";
    import NavCom from "./NavCom.vue";
    import MainCom from "./MainCom.vue";
</script>
<template>
    <NavCom title="這是網站的標題一"></NavCom>
    <hr>
    <MainCom backgroundColor = "blue" color="white"> 
        
    </MainCom>
    <hr>
    <TemplateIntroduction></TemplateIntroduction>
    <hr>
    <Flowcontrol></Flowcontrol>
    <hr>
    <Eventhandler></Eventhandler>
    <hr>
    <ResponsiveAndForm></ResponsiveAndForm>
</template>

<style scoped>
</style>