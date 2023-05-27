function print_name(){
    let user_name = document.getElementById("t-input-1").value;

    document.getElementById("text-output1").innerText = `Привет, ${user_name}!`;
    document.getElementById("t-input-1").value = "";
}