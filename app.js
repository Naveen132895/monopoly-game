var d = []
for (let i = 1; i <= 16; i++) {
    d[i] = i * 15;
}

const player1 = document.getElementById("player_1");
const player2 = document.getElementById("player_2");
console.log(d.length)

player1.addEventListener('click',rolldice1)
player2.addEventListener('click',rolldice2)

var person1=["pkp",0,1000];
var person2 = ["pkp1", 0, 1000];


function rolldice1()
{
    let position = Math.floor((Math.random() * 6) + 1);
    console.log(" person1 play",position);
    changeposition1(person1[1],position);
}
function rolldice2() {
    let position = Math.floor((Math.random() * 6) + 1);
    console.log(" person2 play", position);
    changeposition2(person2[1], position);
}

function changeposition1(old , current)
{
    var newposition = old + current;
    person1[1]=newposition;
    console.log(" person1 play", person1[1]);
    changeMoney1(person1[1]);
}
function changeposition2(old, current) {
    var newposition = old + current;
    person2[1] = newposition;
    console.log(" person2 play", person2[1]);
    changeMoney2(person2[1]);
}
function changeMoney1(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person1[2] - d[p2 - 1];
    } else {
        p2 = p2 % 15;
        updateMoney = person1[2] - d[p2 - 1];
    }
    person1[2] = updateMoney;
    console.log("Player-1 Money", person1[2]);

}
function changeMoney2(p2) {
    var updateMoney = 0;
    if (p2 < d.length) 
    {
        updateMoney = person2[2] - d[p2 - 1];
    } 
    else
     {
        p2 = p2 % 15;
        updateMoney = person2[2] - d[p2 - 1];
    }
    person2[2] = updateMoney;
    console.log("Player-2 Money", person2[2]);

}