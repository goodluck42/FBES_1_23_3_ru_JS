document.addEventListener("DOMContentLoaded", function () {
    const sendDataButton = document.getElementById("send-data");
    const loginInput = document.getElementById("login-input");
    const passwordInput = document.getElementById("password-input");
    // ?? - null coalescent
    // .? - null conditional
    
    if (!sendDataButton || !loginInput || !passwordInput) {
        return;
    }
    
    sendDataButton.addEventListener("click", function () {
        fetch("/do_login", {
            method: "POST",
            body: JSON.stringify({
                login: loginInput.value,
                password: passwordInput.value,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
    });
});