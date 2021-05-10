import Home from 'src/components/Home'
import CreateManager from 'src/components/CreateManager'


export default new router({
    mode: "history",
    base: process.env.BSE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/",
            name: "CreateManager",
            component: CreateManager
        },

        ]
})