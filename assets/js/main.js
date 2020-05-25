const suspectsArray = [
{
    firstName: "Jacob", 
    lastName: "Green",
    occupation: "Entrepreneur",
    age: "45",
    description: "He has a lot of connections",
    image : src = "assets/img/MrGreen.jpeg",
    color: "green", 

},
{
    firstName: "Doctor", 
    lastName: "Orchid",
    occupation: "Scientist",
    age: "26",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image : src = "assets/img/drOrchid.jpg",
    color: "white", 

},
{
    firstName: "Victor", 
    lastName: "Plum",
    occupation: "Designer",
    age: "22",
    description: "Billionaire video game designer",
    image : src = "assets/img/profPlum.jpg",
    color: "purple", 

},
{
    firstName: "Kasandra", 
    lastName: "Scarlet",
    occupation: "Actress",
    age: "31",
    description: "She is an A-list movie star with a dark past",
    image : src = "assets/img/missScarlett.jpg",
    color: "red", 

},
{
    firstName: "Eleanor", 
    lastName: "Peacock",
    occupation: "Socialité",
    age: "36",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image : src = "assets/img/mrsPeacock.jpg",
    color: "blue", 

},
{
    firstName: "Jack", 
    lastName: "Mustard",
    occupation: "Retired Football player ",
    age: "62",
    description: "He is a former football player who tries to get by on his former glory",
    image : src = "assets/img/mrMustard.jpg",
    color: "yellow", 

},
];

const weaponsArray = [
    {
        name: "rope",
        weight: "10",
    },
    {
        name: "knife",
        weight: "8",
    },
    {
        name: "candlestick",
        weight: "2",
    },
    {
        name: "dumbbell",
        weight: "30",
    },
    {
        name: "poison",
        weight: "2",
    },
    {
        name: "axe",
        weight: "15",
    },
    {
        name: "bat",
        weight: "13",
    },
    {
        name: "trophy",
        weight: "25",
    },
    {
        name: "pistol",
        weight: "20",
    },
];

const roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study Room", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio" ]

let suspects = document.getElementById("suspects");
let killerimage = document.getElementById("killer");
/* 
function selectRandom(n) {
    Math.floor(Math.random()*n);
}; */

let randomSuspect = 
    suspectsArray[Math.floor(Math.random()*suspectsArray.length)];

let randomRoom =
    roomsArray[Math.floor(Math.random()*roomsArray.length)];

let randomWeapon =
    weaponsArray[Math.floor(Math.random()*weaponsArray.length)];

function revealMystery(){
    killerimage.innerHTML = `<div> <img src ="${randomSuspect.image}"> </div>`,
    suspects.innerHTML = `<div>
    <h3>${randomSuspect.firstName} ${randomSuspect.lastName} killed Mr. Boddy using the ${randomWeapon.name} in the ${randomRoom} </h3>
   </div>`
   suspects.style.color = `${randomSuspect.color}`;

}

function clearAll(){
    window.location.reload();
}


