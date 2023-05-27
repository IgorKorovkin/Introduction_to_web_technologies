function weight_indx(){
    let weight = parseInt(document.getElementById("text1").value);
    let hight = parseInt(document.getElementById("text2").value);

    result = weight / ((hight/100)**2);

    if (result < 16){
        document.getElementById("text-output2").innerText = "Выраженный децифит массы тела";
    }
    else if (result > 16 && result < 18.5){
        document.getElementById("text-output2").innerText = "Недостаточная масса тела";
    }
    else if (result >= 18.5 && result < 24.99){
        document.getElementById("text-output2").innerText = "Норма";
    }
    else if (result >= 24.99 && result < 30){
        document.getElementById("text-output2").innerText = "Избыточная масса тела";
    }else if (result >= 30 && result < 35){
        document.getElementById("text-output2").innerText = "Ожирение первой степени";
    }else if (result >= 35 && result < 40){
        document.getElementById("text-output2").innerText = "Ожирение второй степени";
    }else if (result >= 40){
        document.getElementById("text-output2").innerText = "Ожирение третьей степени";
    }

    document.getElementById("text-output1").innerText = result;
}