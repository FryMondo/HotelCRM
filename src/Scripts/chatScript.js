let activeUser = 1;

function selectUser(user) {
    activeUser = user;
}

function sendMessage() {
    const messageInput = document.getElementById("inputMessage");
    const message = messageInput.value.trim();

    if (message) {
        const messagesContainer = document.getElementById("messages");
        const messageElement = document.createElement("p");

        let user = activeUser === 1 ? "User1" : "User2";

        messageElement.innerHTML = `<strong>${user}:</strong><br>${message}`;
        messageElement.style.width = "70%";
        messageElement.style.textAlign = activeUser === 1 ? "left" : "right";
        messageElement.style.padding = "6px";
        messageElement.style.backgroundColor = "lightblue";
        messageElement.style.minHeight = "30px";
        messageElement.style.borderRadius = "8px";

        if (activeUser === 2) {
            messageElement.style.marginLeft = "26%";
        }

        messagesContainer.appendChild(messageElement);

        messageInput.value = "";
    }
}
