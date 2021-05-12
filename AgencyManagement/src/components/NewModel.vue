<template>
    <form method="post" class="form">
        <input v-model="form.newModel.firstName" class="name formEntry" />

        <input v-model="form.newModel.lastName" class="name formEntry" type="text" />

        <input v-model="form.newModel.email" class="name formEntry" type="text"/>

        <input v-model="form.newModel.phoneNo" class="name formEntry" type="text" />

        <input v-model="form.newModel.addresLine1" class="name formEntry" type="text"/>

        <input v-model="form.newModel.addresLine2" class="name formEntry" type="text" />

        <input v-model="form.newModel.zip" class="name formEntry" type="text"  />

        <input v-model="form.newModel.city" class="name formEntry" type="text"  />

        <input v-model="form.newModel.country" class="name formEntry" type="text"  />

        <input v-model="form.newModel.birthDate" class="name formEntry" type="text" />

        <input v-model="form.newModel.nationality" class="name formEntry" type="text" />

        <input v-model="form.newModel.height" class="name formEntry" type="text"  />

        <input v-model="form.newModel.shoeSize" class="name formEntry" type="text" />

        <input v-model="form.newModel.hairColor" class="name formEntry" type="text"  />

        <input v-model="form.newModel.eyeColor" class="name formEntry" type="text" />

        <input v-model="form.newModel.comments" class="name formEntry" />

        <input v-model="form.newModel.password" class="name formEntry"/>

        <input type="button" class="submit formEntry" value="Create Model" v-on:click="postModel" />
    </form>
</template>

<script>
    export default {
        name: 'new-model',
        data() {
            return {
                form: {
                    newModel: {
                        firstName: 'Enter Firstname',
                        lastName: 'Enter Lastname',
                        email: 'Enter Email',
                        phoneNo: 'Enter Phone number',
                        addresLine1: 'Enter Adress',
                        addresLine2: 'Enter Adress',
                        zip: 'Enter Zip-code',
                        city: 'Enter City',
                        country: 'Enter Country',
                        birthDate: 'Enter Birth-date',
                        nationality: 'Enter Nationality',
                        height: 'Enter Height',
                        shoeSize: 'Enter Shoe Size',
                        hairColor: 'Enter Hair color',
                        eyeColor: 'Enter Eye color',
                        comments: 'Enter Comments',
                        password: 'Enter Password',
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