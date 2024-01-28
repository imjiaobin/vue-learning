<script setup>
//vue流程控制
let data ="Hello";

//vue樣板介紹
let htmlData = "<u>Hello</u>";
let name = "content";
let data1 = true;
let message = "<u>Hello Vue</u>";
</script>
<template>
    <div>
        <h2>Vue樣板介紹</h2>
        <ul>
            <li>       
                <div>{{data}}</div>
                <!-- 上方的let變數data可以用模版語法的方式帶入,不論變數內容是甚麼,都嵌入純文字 -->
            </li>
            <li>
                <div v-html= "htmlData"></div>
                <!-- 以標籤屬性設定v-html="嵌入的變數",這樣的話,就不能再div中放入任何內容,直接取用變數中,html的語法效果-->     
            </li>
    
            <li>
    
                <div v-bind:class="name">Hello</div>
    
                <!-- v-bind:屬性名稱="嵌入變數" ,把變數的"資料"帶入標籤屬性中-->
    
                <div :class="name">Hello</div>
    
                <!-- 為上方v-bind的簡寫 -->
    
            </li>
    
            <li>
    
                <div>{{data.toUpperCase()}}</div>
    
                <!-- 樣板語法可以放入JS方法 -->
    
            </li>
    
            <li>
    
                <div :class="data1?'dark':'light'">Hello</div>
    
                <!-- 運用JS的三元運算,如果data1是true,data就設定成dark,false就設定成light -->
    
            </li>
    
            <li>
    
                <div :class="name?'dark':'light'">{{message.toUpperCase()}}</div>
    
            </li>
    
        </ul>
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