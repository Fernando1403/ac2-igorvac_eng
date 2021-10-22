const logo = [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgoBeRYRNMOQ9InDcI1hKW1P01K6oNVNJFg&usqp=CAU"
    }
]

window.addEventListener("DOMContentLoaded", function () {
    console.log("aaaaaa");
    const img = document.querySelector("#imgHeader");

    img.src = logo[0].img;
})

const txt = [
    {
        img1:"data:image/jpeg;base64,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",
        h1:"Champions League",
        h2:"Champions League final Manchester City x Paris Saint German",
        h3:"12/03/2021 - 23:45",
        p1:"Soccer is the most popular sport in the wolrd and we have a lot of competitions that have a really high level but the Champions league is the most important and the best competition in the wolrd, people from all the parts off the wolrd stop what they are doing to watch the champions league.Every year the champions is breaking records one example of this is the game of PSG x Manchester City which was the most watched soccer game in this year and it is probable that more records will be broken. "
    }
]

window.addEventListener("DOMContentLoaded", function(){
    console.log("aaaaaaa");
    const img1 = document.querySelector("#img1");
    const h1 = document.querySelector("#txtH1");
    const h2 = document.querySelector("#txtH2");
    const h3 = document.querySelector("#txtH3");
    const p1 = document.querySelector("#txtP1");

    img1.src = txt[0].img1
    h1.innerHTML = txt[0].h1
    h2.innerHTML = txt[0].h2
    h3.innerHTML = txt[0].h3
    p1.innerHTML = txt[0].p1
})

const txt2 = [
    {
        img2:"data:image/png;base64,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",
        p2:"The record of viwers from sports happened in 2016 in the final of the champion league ( Real Madrid X Atlético de Madrid) with 31 milion of viwers in a game that was decided on penalty shootout and the Real Madrid was the champion with the result of 6 x 4."
    }
]

window.addEventListener("DOMContentLoaded", function(){
    console.log("aaaaaaa");
    const img2 = document.querySelector("#img2")
    const p2 = document.querySelector("#txtP2")
    
    img2.src = txt2[0].img2
    p2.innerHTML = txt2[0].p2
})