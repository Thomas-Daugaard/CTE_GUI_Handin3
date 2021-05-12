<template>
    <form method="post" class="form">
        <input v-model="form.FirstName" class="name formEntry" id="firstName" placeholder="Enter Firstname" />

        <input v-model="form.LastName" class="name formEntry" id="lastName" type="text" placeholder="Enter Lastname" />

        <input v-model="form.Email" class="name formEntry" type="text" id="email" placeholder="Enter Email" />

        <input v-model="form.PhoneNo" class="name formEntry" type="text" id="phoneNo" placeholder="Enter Phone number" />

        <input v-model="form.AddresLine1" class="name formEntry" type="text" id="addresLine1" placeholder="Enter Adress" />

        <input v-model="form.AddresLine2" class="name formEntry" type="text" id="addresLine2" placeholder="Enter Adress" />

        <input v-model="form.Zip" class="name formEntry" type="text" id="zip" placeholder="Enter Zip-code" />

        <input v-model="form.City" class="name formEntry" type="text" id="city" placeholder="Enter City" />

        <input v-model="form.Country" class="name formEntry" type="text" id="country" placeholder="Enter Country" />

        <input v-model="form.BirthDate" class="name formEntry" type="text" id="birthDate" placeholder="Enter Birth-date" />

        <input v-model="form.Nationality" class="name formEntry" type="text" id="nationality" placeholder="Enter Nationality" />

        <input v-model="form.Height" class="name formEntry" type="text" id="height" placeholder="Enter Height" />

        <input v-model="form.ShoeSize" class="name formEntry" type="text" id="shoeSize" placeholder="Enter Shoe Size" />

        <input v-model="form.HairColor" class="name formEntry" type="text" id="hairColor" placeholder="Enter Hair color" />

        <input v-model="form.EyeColor" class="name formEntry" type="text" id="eyeColor" placeholder="Enter Eye color" />

        <input v-model="form.Comments" class="name formEntry" type="text" id="comments" placeholder="Enter Comments" />

        <input v-model="form.Password" class="name formEntry" type="text" id="password" placeholder="Enter Password" />

        <input type="button" class="submit formEntry" value="Create Model" id="modelCreationbtn" v-on:click="postModel" />
    </form>
</template>

<script>
    export default {
        name: 'new-model',
        data() {
            return {
                form: {
                    newModel: {
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
            postModel: async function () {
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