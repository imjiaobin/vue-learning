<script setup>
    //vue流程控制
    let data ="Hello";
    let dataSet = [1,2,3];
    let dataSet1 = ["A","B","C"]
    let dataSet2 = {"x":3,"y":4}

    //流程練習
    let level = 0;
    let topic_array = ["HTMl","CSS","JavaScript","Vue.js"];
    let topic_object = {html:"HTML",css:"CSS",js:"JavaScrip",vue:"Vue.js"};
    let number = 3000;
    let number1 = 2000;
</script>
<template>
    <div>
        <h2>Vue流程控制</h2>
        <ul>
            <li>
                <div>
                    <p>流程控制-if</p>
                    <!-- 使用v-if="布林值" -->
                    <div v-if="Setdata1">顯示</div>
                    <div v-if="Setdata1">不顯示</div>
                    <div v-if="number>2000">大於2000</div>
                </div>
            </li>
            <li>
                <div>
                    <p>流程控制-if...else</p>
                    <!-- 使用v-else必須搭配v-if -->
                    <div v-if="number1>2000">大於2000</div>
                    <div v-else-if="number1>1000 && number <2000">大於1000,小於2000</div>
                    <div v-else="number1<1000">小於1000</div>
                </div>
            </li>
            <li>
                <div>
                    <p>for迴圈</p>
                    <div v-for="n in dataSet">Item {{n}}</div>
                    <!-- Vue的for迴圈,不需要設定跑幾次,怎麼跑,只要一個v-for="",就會自己跑完 -->
                </div>
            </li>
            <li>
                <div>
                    <p>for迴圈-陣列索引</p>
                    <div v-for="(text,index) in dataSet1">Item {{ index }}-{{ text }}</div>
                    <!-- Vue的for迴圈,不需要設定跑幾次,怎麼跑,只要一個v-for="",就會自己跑完 -->
                </div>
            </li>
            <li>
                <div>
                    <p>for迴圈-物件</p>
                    <div v-for="(key,value) in dataSet2">物件屬性 {{ key }} 為 {{ value }}</div>
                    <!-- Vue的for迴圈,不需要設定跑幾次,怎麼跑,只要一個v-for="",就會自己跑完 -->
                </div>
            </li>
        </ul>
    </div>
<hr>
    <div>
        <h2>練習</h2>
        <div>
            <div>-if迴圈</div>
            <div v-if="level===3">大神</div>
            <div v-else-if="level===2">資深</div>
            <div v-else-if="level===1">中階</div>
            <div v-else="level===0">入門</div>
        </div><br>
        <div>
            <div>-for迴圈</div>
            <ul>
                <li v-for="(text,index) in topic_array">Topic {{index+1}} is {{text}}</li>
            </ul>
            <ul>
                <li v-for="(key,value) in topic_object">Topic {{key}} is {{value}}</li>
            </ul>
        </div>
    </div>
<hr>
  
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