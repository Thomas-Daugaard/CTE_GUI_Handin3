<template>
    <form method="post" class="form">
        <input v-model="form.newModel.firstName" class="name formEntry" placeholder="Enter Firstname" />

        <input v-model="form.newModel.lastName" class="name formEntry" type="text" placeholder="Enter Lastname" />

        <input v-model="form.newModel.email" class="name formEntry" type="text" placeholder="Enter Email" />

        <input v-model="form.newModel.phoneNo" class="name formEntry" type="text" placeholder="Enter Phone number" />

        <input v-model="form.newModel.addresLine1" class="name formEntry" type="text" placeholder="Enter Adress" />

        <input v-model="form.newModel.addresLine2" class="name formEntry" type="text" placeholder="Enter Adress" />

        <input v-model="form.newModel.zip" class="name formEntry" type="text" placeholder="Enter Zip-code" />

        <input v-model="form.newModel.city" class="name formEntry" type="text" placeholder="Enter City" />

        <input v-model="form.newModel.country" class="name formEntry" type="text" placeholder="Enter Country" />

        <input v-model="form.newModel.birthDate" class="name formEntry" type="text" placeholder="Enter Birth-date" />

        <input v-model="form.newModel.nationality" class="name formEntry" type="text" placeholder="Enter Nationality" />

        <input v-model="form.newModel.height" class="name formEntry" type="text" placeholder="Enter Height" />

        <input v-model="form.newModel.shoeSize" class="name formEntry" type="text" placeholder="Enter Shoe Size" />

        <input v-model="form.newModel.hairColor" class="name formEntry" type="text" placeholder="Enter Hair color" />

        <input v-model="form.newModel.eyeColor" class="name formEntry" type="text" placeholder="Enter Eye color" />

        <input v-model="form.newModel.comments" class="name formEntry" placeholder="Enter Comments" />

        <input v-model="form.newModel.password" class="name formEntry" type="password" placeholder="Enter Password" />

        <input type="button" class="submit formEntry" value="Create Model" v-on:click="postModel" />
        <router-link :to="'/models/index'"><input type="button" class="submit formEntry" value="Back to list" /></router-link>
    </form>
</template>

<script>
    export default {
        name: 'create-model',
        data() {
            return {
                form: {
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
            }
        },
        methods: {
            postModel: async function () {
                let url = "https://localhost:44368/api/Models";
                fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.form.newModel)
                }).then(res => res.json()).catch(error => alert("Error" + error));
            }
        }
    }
</script>

<style scoped>
</style>