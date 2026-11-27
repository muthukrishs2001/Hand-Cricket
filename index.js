let btn = document.getElementById("btn");

if(btn) {
    btn.addEventListener("click", () => {
        let player1 = document.getElementById("p1"),
            player2 = document.getElementById("p2"),
            player3 = document.getElementById("p3"),
            player4 = document.getElementById("p4"),
            player5 = document.getElementById("p5");

        localStorage.setItem("fp1", player1);
        localStorage.setItem("fp2", player2);
        localStorage.setItem("fp3", player3);
        localStorage.setItem("fp4", player4);
        localStorage.setItem("fp5", player5);

        window.location.href = "./index.html";
    })
}

let firstPlayer = document.getElementById("name1"),
    secondPlayer = document.getElementById("name2"),
    thirdPlayer = document.getElementById("name3"),
    fourthPlayer = document.getElementById("name4"),
    fifthPlayer = document.getElementById("name5"),

if(firstPlayer) {
    let firstValue = localStorage.getItem("fp1"),
        secondValue = localStorage.getItem("fp2"),
        thirdValue = localStorage.getItem("fp3"),
        fourthValue = localStorage.getItem("fp4"),
        fifthValue = localStorage.getItem("fp5");

        firstPlayer.innerText = firstValue;
        secondPlayer.innerText = secondValue;
        thirdPlayer.innerText = thirdValue;
        fourthPlayer.innerText = fourthValue;
        fifthPlayer.innerText = fifthValue;
}