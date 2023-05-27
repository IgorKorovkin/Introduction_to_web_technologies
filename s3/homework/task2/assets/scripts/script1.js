function send(){
    let text_message = document.getElementById("text-message").value;

    document.getElementById("text-output1").innerHTML = `<p class="main-text">${text_message}</p>`;
    console.log(`${text_message}`)
    document.getElementById("text-message").value = "";
}