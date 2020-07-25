import Vue from "vue"
import Router from "vue-router"
import Media from "@/views/media/Media.vue";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/"
        },
        {
            path: "/media",
            component: Media
        }
    ]
});