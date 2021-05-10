import Vue from "main.js"

export default new router({
    mode: "history",
    base: process.env.BSE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },

        }]
})