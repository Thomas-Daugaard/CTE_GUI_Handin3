<template>
    <form class="form">
        <div>
            <input class="name formEntry" type="text" placeholder="Enter firstname" v-model="newmanager.firstName" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Enter lastname" v-model="newmanager.lastName" />
        </div>
        <div>
            <input class="name formEntry" type="email" placeholder="Enter email" v-model="newmanager.email" />
        </div>
        <div>
            <input class="name formEntry" type="password" placeholder="Enter password" v-model="newmanager.password" />
        </div>
        <div>
            <input class="submit formEntry" type="button" value="Create Manager" name="createbtn" v-on:click="postmanager" />
        </div>
    </form>
</template>

<script>
    export default {
        name: 'create-manager',
        data() {
            return {
                newmanager: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password:''
                }
            }
        },
        methods: {
            postmanager: async function () {
                let url = "https://localhost:44368/api/Managers";

                await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' +" " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.newmanager)
                }).then(res => res.json()).catch(error => alert("Error" + error));

                this.$alert('Manager Created', 'Success');
                this.$router.push('/app');

                
            }
        }
    }
   
</script>

<style scoped>
    
</style>