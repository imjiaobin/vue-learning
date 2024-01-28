<script>
   //事件處理
   let handler=function(){
        console.log("click");
    };

    let clickHandler=function(){
        console.log("Click me");
    };

    let mouseoverHandler = function(){
        console.log("Mouse over");
    };
</script>

<template>
<div>
    <h2>事件處理</h2>
    <button v-on:click="handler">文字</button><br>
    <!-- v-on:事件名稱 = "要去觸發的函式名稱" -->
    <!-- 點擊這個標籤,就會去執行對應的handler事件 -->
    <button
        @click="clickHandler"
        @mouseover="mouseoverHandler"
    >省略的部分</button><br>
    <!-- 這邊使用@就可以省略v-on: -->
    <button v-on:click.once="handler">once修飾字</button><br>
    <!-- .once修飾字讓這個功能只能夠被觸發一次 -->
    <a 
        href="www.google.com"
        v-on:click.prevent
    >prevent</a><br>
    <!-- 超連結本身就是個預設行為,只要點擊超連結就會自動連到指定網頁 -->
    <!-- 用修飾字.prevent就可以防止預設行為發生 -->
    <a 
        href="www.google.com"
        @click.prevent="handler"
    >prevent</a>
    <!-- 也可以用來阻擋函式,只要在後方加上 = "函式"就好 -->
</div>
</template>

<style scoped>
  main{background-color: lightblue;}
    .content{color:rgb(13, 13, 149)}
    .dark{color:grey}
    .light{color:lightgray}

    .title{font-weight:bold;}
    .highlight{color:red;}

    .red{color: red;}
    .green{color: green;}
</style>