import Vue from "vue"

import Router from 'vue-router'
// + 导入App.vue
import App from "./App.vue"

new Vue({
    el: "#app",
    // data: {
    //     message: "hello webpack and vue!"
    // }

    render: function(createElement){
        return createElement(App)
    }
})

Vue.use(Router)

// Vue路由的其他步骤