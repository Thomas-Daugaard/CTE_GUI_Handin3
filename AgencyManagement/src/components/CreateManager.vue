<template>
    <form class="form">
        <div>
            <input class="name formEntry" type="text" placeholder="Enter firstname" v-model="newmanager.FirstName" />
        </div>
        <div >
            <input class="name formEntry" type="text" placeholder="Enter lastname" v-model="newmanager.LastName" />
        </div>
        <div >
            <input class="name formEntry" type="text" placeholder="Enter email" v-model="newmanager.Email" />
        </div>
        <div >
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
                    email: ''
                }
            }
        },
        methods: {
            postmanager: async function () {
                let url = "https://localhost:44368/api/Managers";

                try {

                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.efmanager),
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
            }
        }
    }
   
</script>

<style scoped>
    input {
        background-color: white;
        color: black;
        padding: 5px 5px 5px 5px;
    }

   #btn{

   }

    .form {
        background: #fff;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        border-radius: 5px;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5px;
        padding-bottom: 5px;
        left: 0;
        right: 0;
        position: absolute;
        border-top: 5px solid #0e3721;
        /*   z-index: 1; */
        animation: bounce 1.5s infinite;
    }

    .name {
        background-color: #ebebeb;
        color: white;
    }

        .name:hover {
            border-bottom: 5px solid #0e3721;
            height: 30px;
            width: 380px;
            transition: ease 0.5s;
        }

    .submit {
        width: 200px;
        color: white;
        background-color: black;
        font-size: 20px;
    }

        .submit:hover {
            box-shadow: 15px 15px 15px 5px rgba(78, 72, 77, 0.219);
            transform: translateY(-3px);
            width: 300px;
            border-top: 5px solid #0e3750;
            border-radius: 0%;
        }

    .formEntry {
        display: block;
        margin: 30px auto;
        min-width: 300px;
        padding: 10px;
        border-radius: 2px;
        border: none;
        transition: all 0.5s ease 0s;
    }
</style>