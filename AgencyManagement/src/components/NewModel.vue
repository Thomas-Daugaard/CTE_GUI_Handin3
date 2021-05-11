<template>
    <form>
        <label for="firstName">First Name: </label>
        <input v-model="form.FirstName" id="firstName" placeholder="Enter Firstname" />

        <label for="lastName">Last Name: </label>
        <input v-model="form.LastName" id="lastName" type="text" placeholder="Enter Lastname" />

        <label for="email">Email</label>
        <input v-model="form.Email" type="text" id="email" placeholder="Enter Email" />

        <label for="phoneNo">Phone Number</label>
        <input v-model="form.PhoneNo" type="text" id="phoneNo" placeholder="Enter Phone number" />

        <label for="addresLine1">AddresLine1</label>
        <input v-model="form.AddresLine1" type="text" id="addresLine1" placeholder="Enter Adress" />

        <label for="addresLine2">AddresLine2</label>
        <input v-model="form.AddresLine2" type="text" id="addresLine2" placeholder="Enter Adress" />

        <label for="zip">Zip-code</label>
        <input v-model="form.Zip" type="text" id="zip" placeholder="Enter Zip-code" />

        <label for="city">City</label>
        <input v-model="form.City" type="text" id="city" placeholder="Enter City" />

        <label for="country">Country</label>
        <input v-model="form.Country" type="text" id="country" placeholder="Enter Country" />

        <label for="birthDate">BirthDate</label>
        <input v-model="form.BirthDate" type="text" id="birthDate" placeholder="Enter Birth-date" />

        <label for="nationality">Nationality</label>
        <input v-model="form.Nationality" type="text" id="nationality" placeholder="Enter Nationality" />

        <label for="height">Height</label>
        <input v-model="form.Height" type="text" id="height" placeholder="Enter Height" />

        <label for="shoeSize">ShoeSize</label>
        <input v-model="form.ShoeSize" type="text" id="shoeSize" placeholder="Enter Shoe Size" />

        <label for="hairColor">HairColor</label>
        <input v-model="form.HairColor" type="text" id="hairColor" placeholder="Enter Hair color" />

        <label for="eyeColor">EyeColor</label>
        <input v-model="form.EyeColor" type="text" id="eyeColor" placeholder="Enter Eye color" />

        <label for="comments">Comments</label>
        <input v-model="form.Comments" type="text" id="comments" placeholder="Enter Comments" />

        <label for="password">Password</label>
        <input v-model="form.Password" type="text" id="password" placeholder="Enter Password" />

        <input type="button" value="Create Model" id="modelCreationbtn" v-on:click="PostModel" />
    </form>
</template>

<script>
    export default {
        name: 'new-model',
        data() {
            return {
                form: {
                    newModel:{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNo: '',
                    adressline1: '',
                    adressline2: '',
                    zip: '',
                    city: '',
                    country: '',
                    birthDate: null,
                    nationality: '',
                    height: 0,
                    shoeSize: 0,
                    hairColor: '',
                    eyeColor: '',
                    comments: '',
                    password: '',
                    }
        }
                }
    },
    methods: {
        postModel: async function() {
            let url = "https://localhost:44368/api/account/Models";
            try {
                let response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(this.newModel),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                });

                if (response.ok) {
                    let token = await response.json();
                    localStorage.setItem("token", token.jwt);
                    // Change view to some other component // …
                }
                else {
                    alert("Server returned: " + response.statusText);
                }
            }
            catch (err) {
                alert("Error: " + err);
            }
            return;
            }
        }
    }
</script>

<style scoped>
</style>