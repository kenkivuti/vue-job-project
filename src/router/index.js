import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import Jobsview from "@/views/Jobsview.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import Jobview from "@/views/Jobview.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Homeview
            },
            {
                path: "/jobs",
                name: "jobs",
                component :Jobsview
                },
                    {
                        path: "/jobs/:id",
                        name: "Job",
                        component: Jobview
                    },
                    {
                        path: "/:pathMatch(.*)",
                        name: "NotFound",
                        component: NotFoundView
                        },
        ]
})

export default router;