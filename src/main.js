//主程式所在
//載入createApp函式
import {createApp} from "vue";

//載入根組件 src資料夾中的App.vue
import App from "./App.vue";

//建立Vue app物件
const app = createApp(App);

//掛載到HTML標籤底下,用#app掛載
app.mount("#app");


//以上為vue應用程式的起手式