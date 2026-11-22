function matchToss(userchioce) {

    let tossDetails = ['head','tail'];
    let tossResult = document.getElementById("tossResult");
    let tossHead = document.getElementById("coin");
    let random = Math.floor(Math.random()*tossDetails.length);

    switch(userchioce) {
        case 'heads':
            if(tossDetails[random] === 'head') {
                tossResult.innerText = "You Won the Toss";
                tossHead.innerText = tossDetails[random];
                setTimeout(() => {
                    window.location.href = "./batorbowl.html";
                }, 3000);

            } else {
                tossResult.innerText = "You Loss the Toss";
                tossHead.innerText = tossDetails[random];
                setTimeout(() => {
                    window.location.href = "./batorbowl.html";
                }, 3000);
            }
            break;
        case 'tails':
            if(tossDetails[random] === 'tail') {
                tossResult.innerText = "You Won the Toss";
                tossHead.innerText = tossDetails[random];
                setTimeout(() => {
                    window.location.href = "./batorbowl.html";
                    
                }, 3000);

            } else {
                tossResult.innerText = "You Loss the Toss";
                tossHead.innerText = tossDetails[random];
                setTimeout(() => {
                    window.location.href = "./batorbowl.html";
                }, 3000);
            }
            break;
    }
    
}