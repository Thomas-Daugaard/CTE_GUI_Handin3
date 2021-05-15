<template>
    <form class="form">
      
        <input v-model="newModel.firstName" class="name formEntry" type="text" placeholder="Enter Firstname" />

        <input v-model="newModel.lastName" class="name formEntry" type="text" placeholder="Enter Lastname" />

        <input v-model="newModel.email" class="name formEntry" type="email" placeholder="Enter Email" />

        <input v-model="newModel.phoneNo" class="name formEntry" type="text" placeholder="Enter Phone number" />

        <input v-model="newModel.addresLine1" class="name formEntry" type="text" placeholder="Enter Adress" />

        <input v-model="newModel.addresLine2" class="name formEntry" type="text" placeholder="Enter Adress" />

        <input v-model="newModel.zip" class="name formEntry" type="text" placeholder="Enter Zip-code" />

        <input v-model="newModel.city" class="name formEntry" type="text" placeholder="Enter City" />

        <input v-model="newModel.country" class="name formEntry" type="text" placeholder="Enter Country" />

        <input v-model="newModel.birthDate" class="name formEntry" type="datetime" placeholder="Enter Birth-date" />

        <input v-model="newModel.nationality" class="name formEntry" type="text" placeholder="Enter Nationality" />

        <input v-model="newModel.height" class="name formEntry" type="number" placeholder="Enter Height" />

        <input v-model="newModel.shoeSize" class="name formEntry" type="number" placeholder="Enter Shoe Size" />

        <input v-model="newModel.hairColor" class="name formEntry" type="text" placeholder="Enter Hair color" />

        <input v-model="newModel.eyeColor" class="name formEntry" type="text" placeholder="Enter Eye color" />

        <input v-model="newModel.comments" class="name formEntry" type="text" placeholder="Enter Comments" />

        <input v-model="newModel.password" class="name formEntry" type="password" placeholder="Enter Password" />

        <input type="button" class="submit formEntry" value="Create Model" v-on:click="postModel" />
        <router-link :to="'/models/index'"><input type="button" class="submit formEntry" value="Back to list" /></router-link>
    </form>
</template>

<script>
    export default {
        name: 'create-model',
        data() {
            return {
                newModel: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNo: '',
                    addresLine1: '',
                    addresLine2: '',
                    zip: '',
                    city: '',
                    country: '',
                    birthDate: '',
                    nationality: '',
                    height: '',
                    shoeSize: '',
                    hairColor: '',
                    eyeColor: '',
                    comments: '',
                    password: '',
                    isManager: false
                }
                
            }
        },
        methods: {
            postModel: async function () {
                let url = "https://localhost:44368/api/Models";

                await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.newModel)
                }).then(res => res.json()).catch(error => alert("Error" + error));

                this.$router.push('/models/index');
            }
        }
    }
</script>

<style scoped>
</style>