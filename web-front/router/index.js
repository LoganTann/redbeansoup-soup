import VueRouter from "https://unpkg.com/vue-router@4.1.1/dist/vue-router.esm-browser.js";
import PageMain from "../components/pageMain/PageMain.vue";
// Do not remove special comment. They are used for a quickfix.
// Lines between BEGIN and END are directly patched in the final build file.
// BEGIN BUILD QUICKFIX
const routes = [
    {
        path: "/",
        name: "home",
        component: PageMain,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
// END BUILD QUICKFIX
export default router;
