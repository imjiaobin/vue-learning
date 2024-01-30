<script setup>
    import Flowcontrol from "./Flowcontrol.vue";
    import Eventhandler from "./Eventhandler.vue";
    import ResponsiveAndForm from "./ResponsiveAndForm.vue";
    import TemplateIntroduction from "./TemplateIntroduction.vue";
    import NavCom from "./NavCom.vue";
    import MainCom from "./MainCom.vue";
    import defEventhandeler1 from "./defEventhandler1.vue";
    import defEventhandeler2 from "./defEventhandler2.vue";
    import defEventhandeler3 from "./defEventhandler3.vue";
    import hooks_onUpdate from "./hooks_onUpdate.vue";
    //自訂事件
    import {ref} from "vue";
    let subtitle = ref("這是網站的副標題");
    let updateSubtitle = function(){
        subtitle.value = "這是新的副標題";
    };
    //自訂事件處理結束
    //hooks_onUpdate
    let visible = ref(true);
    let hide = function(){
        visible.value = false;
    };
    let show = function(){
        visible.value = true;
    }
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
    <hr>
    <h3><u>這是方法一</u></h3>
    <defEventhandeler1 title="這是網站標題" @update="updateSubtitle" ></defEventhandeler1>
    <div >{{subtitle}}</div>
    <h3><u>這是方法二</u></h3>
    <defEventhandeler2 
    title="這是網站標題" 
    @update="updateSubtitle" 
    ></defEventhandeler2>
    <h3><u>這邊是延伸的練習</u></h3>
    <!-- <div >{{subtitle}}</div> -->
    <defEventhandeler3 
    title="這是網站標題"
    :subtitle = "subtitle"><!-- 這邊是以"屬性"的方式去動態地抓到subtitle,也就是用v-bind,這邊有冒號的subtitle是動態屬性呼叫,也是來自defEventhandler3的自訂屬性-->
    </defEventhandeler3>
    <hr>
    <h2>onUpdate例子</h2>
    <hooks_onUpdate v-if="visible"></hooks_onUpdate>
    <button @click="hide">隱藏</button>
    <button @click="show">顯示</button>

</template>

<style scoped>
</style>