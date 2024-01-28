<script setup>
    //響應式狀態
    import {ref} from "vue";
    let content = ref("網站的內容");
    let responsive_status = function(){
        content.value = "新的網站內容";
    };
    let state = ref({title:"網站的標題",className:"title"});
    let responsive_handler = function(){
        state.value.title = "新的網站標題";
        state.value.className = "title highlight";
    };

    //綁定響應式狀態的表單輸入元件
    let gender = ref(null);
        //這邊單選框的初始值設應為null,因為還沒選擇;
    let fruit = ref([]);
        //這邊多選框的初始值設定為空串列;
    let username = ref("");

    let clearUsername = function(){
        username.value = "";
    };

    let interests = ref([]);
    let color = ref("");
</script>
<template>
<div>
        <h2>響應式</h2>
        <div>{{ content }}</div>
        <button @click="responsive_status">點擊更新資料</button>


        <div :class = "state.className">{{state.title}}</div>
        <button @click="responsive_handler">點擊</button>
    </div>

    <div>
        <fieldset>
            <legend>單選框範例</legend>
        男 <input type="radio" value="male" v-model = "gender" />
        女 <input type="radio" value="female" v-model = "gender" />
        <div>選擇的性別{{ gender }}</div>
        <br>
        紅色 <input type="radio" value="red" v-model="color">
        綠色 <input type="radio" value="green" v-model="color">
        <div :class="color">顏色:{{color}}</div>
        </fieldset>
        <fieldset>
        <legend>多選框範例</legend>
        蘋果 <input type="checkbox" value="Apple" v-model="fruit"/>
        香蕉 <input type="checkbox" value="banana" v-model="fruit"/>
        <div>選擇的水果{{ fruit }}</div>
        <br>
        角色扮演 <input type="checkbox" value = 'rpg' v-model="interests"/>
        即時策略 <input type="checkbox" value = 'rts' v-model="interests"/>
        動作遊戲 <input type="checkbox" value = 'action' v-model="interests"/>
        <!-- <div v-for="interest in interests">喜歡的遊戲類型:{{ interest }}</div> -->
        <ul>
            <li v-for="interest in interests">喜歡的遊戲類型:{{interest}}</li>
        </ul>
        </fieldset>
        <fieldset>
        <legend>下拉式選單</legend>
        <select v-model="gender">
            <option value="">請選擇</option>
            <option value="male">男生</option>
            <option value="female">女生</option>
        </select>
        <div>選擇的性別{{ gender }}</div>
        <br>
        <select v-model="color">
            <option value="">請選擇你要的顏色</option>
            <option value="red">紅色</option>
            <option value="green">綠色</option>
        </select>
        <div v-bind:class="color">顏色為: {{color}}</div>
        </fieldset>
        <h4>使用者輸入</h4>
        <div>名字: {{ username }}</div>
        <input type="text" v-model="username" />
        <button v-on:click= "clearUsername">清空</button>
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