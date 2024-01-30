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
    <button @click="$emit('update')">改變副標題</button>
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



<!-- 
-建立組件的自訂事件:
<script setup>
    import 組件名稱 from "路徑";
    let 函式名稱 = function(){}
</script>
<template>
    <組件名稱 @自訂事件名稱="函式名稱"></組件名稱>
</template>
<style scoped></style>
------------------------------------------------
-組件內部呼叫自訂事件的方法一:
<script setup>
</script>
<template>
    <組件名稱 @事件觸發方式="$emit('自訂事件')">
    </組件名稱>
</template>
<style scoped></style>

整個流程
1.在子組件內部觸發事件後
2.對應到父組件的區塊
3.觸發父組件裡面的函式,然後執行
---------------------------------
<script setup>
    import 組件名稱 from "路徑";
    let 函式名稱 = function(){}
</script>
<template>
    <組件名稱 @自訂事件名稱="函式名稱"></組件名稱>
</template>
<style scoped></style>

-組件內部呼叫自訂事件方法二: 在script中,defineEmits({"自訂事件名稱,可以多個"})
<script setup>
    let emit = defineEmits(["自訂事件名稱,可以多個"])
    let 函式名稱 = function(){emit("自訂事件名稱")}
</script>
<template>
    <組件名稱 @事件觸發方式=函式名稱">
    </組件名稱>
</template>
<style scoped></style>

整個流程
1.在子組件內部觸發事件後
2.呼叫在子組件中的對應的函式
ps 在子組叫呼叫函式,實際上在父組件執行
3.該對應函式中會呼叫emit中defineEmits中的自訂事件,連結到父組件的對應標籤
4.在父組件中的對應標籤,在去觸發父組件中的函式的功能
-->