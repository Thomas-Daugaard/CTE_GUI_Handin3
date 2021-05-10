async login(){
    let url = "https://localhost:44368/api/account/login";
    try {
        let response = await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(this.form), // Assumes data is in an object called form
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            });
        if (response.ok) {
            let token = await response.json();
            localStorage.setItem("token", token.jwt);
            // Change view to some other component // …
        } else {
            alert("Server returned: " + response.statusText);
        }
    } catch (err) {
        alert("Error: " + err);
    }
    return;
}