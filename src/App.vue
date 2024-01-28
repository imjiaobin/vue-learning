<script setup>
    //vue樣板介紹
    let data ="Hello";
    let htmlData = "<u>Hello</u>";
    let name = "content";
    let data1 = true;
    let message = "<u>Hello Vue</u>";
    let number = 3000;
    let number1 = 2000;

    //vue流程控制
    let dataSet = [1,2,3];
    let dataSet1 = ["A","B","C"]
    let dataSet2 = {"x":3,"y":4}

    //流程練習
    let level = 0;
    let topic_array = ["HTMl","CSS","JavaScript","Vue.js"];
    let topic_object = {html:"HTML",css:"CSS",js:"JavaScrip",vue:"Vue.js"};

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
    <nav>基本導覽列</nav>
    <main>基本的內容</main>
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

    <div>
        <h2>Vue流程控制</h2>
        <ul>
            <li>
                <div>
                    <p>流程控制-if</p>
                    <!-- 使用v-if="布林值" -->
                    <div v-if="data1">顯示</div>
                    <div v-if="data1">不顯示</div>
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
<hr>
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