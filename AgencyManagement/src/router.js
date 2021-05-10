import Login from 'src/components/Login'
import CreateManager from 'src/components/CreateManager'


export default new router({
    mode: "history",
    base: process.env.BSE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/",
            name: "CreateManager",
            component: CreateManager
        },

        ]
})