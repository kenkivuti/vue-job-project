import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import Jobsview from "@/views/Jobsview.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import Jobview from "@/views/Jobview.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

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
                        path: "/jobs/add",
                        name: "AddJob",
                        component: AddJobView
                    },
                    {
                        path: "/jobs/edit/:id",
                        name: "EditJob",
                        component: EditJobView
                    },
                    {
                        path: "/:pathMatch(.*)",
                        name: "NotFound",
                        component: NotFoundView
                        },
        ]
})

export default router;