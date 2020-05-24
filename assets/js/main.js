const suspectsArray = [
{
    firstName: "Jacob", 
    lastName: "Green",
    occupation: "Entrepreneur",
    age: "45",
    description: "He has a lot of connections",
    color: "green", 

},
{
    firstName: "Doctor", 
    lastName: "Orchid",
    occupation: "Scientist",
    age: "26",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    color: "white", 

},
{
    firstName: "Victor", 
    lastName: "Plum",
    occupation: "Designer",
    age: "22",
    description: "Billionaire video game designer",
    color: "purple", 

},
{
    firstName: "Kasandra", 
    lastName: "Scarlet",
    occupation: "Actress",
    age: "31",
    description: "She is an A-list movie star with a dark past",
    color: "red", 

},
{
    firstName: "Eleanor", 
    lastName: "Peacock",
    occupation: "Socialité",
    age: "36",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    color: "blue", 

},
{
    firstName: "Jack", 
    lastName: "Mustard",
    occupation: "Retired Football player ",
    age: "62",
    description: "He is a former football player who tries to get by on his former glory",
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
    suspects.innerHTML += `<div>
    <h3>${randomSuspect.firstName} ${randomSuspect.lastName} killed Mr. Boddy using the ${randomWeapon.name} in the ${randomRoom} </h3>
   </div>`
}


