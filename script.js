let user_score = 0;
let comp_score = 0;

function setUserImage(choice) {
    const images = {
        stone: "https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png",
        paper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYueBFYfp25NEF40TqjrJKcypPmW25Wv_HaEs6hXD9BkL7kW3SXKftwH872sZ0W4lb80&usqp=CAU",
        scissor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KAZtQUpeqelxjO89TJxMfAFtWsX1SCIwCXNaY3HNhfKSy5WTZKEF4K5nWX7upL5NvKo&usqp=CAU"
    };
    document.getElementById("userimg").src = images[choice];
}

function setCompImage(choice) {
    const images = {
        stone: "https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png",
        paper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYueBFYfp25NEF40TqjrJKcypPmW25Wv_HaEs6hXD9BkL7kW3SXKftwH872sZ0W4lb80&usqp=CAU",
        scissor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KAZtQUpeqelxjO89TJxMfAFtWsX1SCIwCXNaY3HNhfKSy5WTZKEF4K5nWX7upL5NvKo&usqp=CAU"
    };
    document.getElementById("compimg").src = images[choice];
}

function game(userChoice) {
    const compChoice = computerChoice();
    setUserImage(userChoice);
    setCompImage(compChoice);

    switch (userChoice + compChoice) {
        case "stonescissor":
        case "paperstone":
        case "scissorpaper":
            win();
            break;
        case "stonepaper":
        case "scissorstone":
        case "paperscissor":
            lose();
            break;
        case "stonestone":
        case "paperpaper":
        case "scissorscissor":
            draw();
            break;
    }
}

function computerChoice() {
    const choices = ['stone', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function win() {
    user_score++;
    document.querySelector("#userScore").innerHTML = user_score;
}

function lose() {
    comp_score++;
    document.querySelector("#compScore").innerHTML = comp_score;
}

function draw() {
    // Draw logic can be expanded later
}

function main() {
    document.getElementById("stone").addEventListener("click", function () {
        game("stone");
    });
    document.getElementById("paper").addEventListener("click", function () {
        game("paper");
    });
    document.getElementById("scissor").addEventListener("click", function () {
        game("scissor");
    });
}

main();
