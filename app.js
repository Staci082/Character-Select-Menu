const characterList = [
    {
        id: "sprite1",
        name: "Sabrina",
        role: "Witch",
        source: "./avatars/sabrina avatar.png",
        description: "",
    },
    {
        id: "sprite2",
        name: "Alex Scorpion",
        role: "Samurguy",
        source: "./avatars/alex scorpion.png",
        description: "",
    },
    {
        id: "sprite3",
        name: "Legolas",
        role: "Archer",
        source: "./avatars/legolas avatar.png",
        description: "",
    },
    {
        id: "sprite4",
        name: "Edgar the Edgelord",
        role: "",
        source: "./avatars/edgar avatar.png",
        description: "",
    },
    {
        id: "sprite5",
        name: "Bjork",
        role: "",
        source: "./avatars/bjork avatar.png",
        description: "",
    },
    {
        id: "sprite6",
        name: "Paco el Paladín",
        role: "Paladin",
        source: "./avatars/paladin avatar.png",
        description: "",
    },
    {
        id: "sprite7",
        name: "Princess Zelda",
        role: "Kidnappee",
        source: "./avatars/zelda avatar.png",
        description: "",
    },
    {
        id: "sprite8",
        name: "Frosty the Snowman",
        role: "Cyromancer",
        source: "./avatars/frosty avatar.png",
        description: "",
    },
    {
        id: "sprite9",
        name: "Mesukōsei Miyazaki",
        role: "Soul Reaper",
        source: "./avatars/Mesukōsei avatar.png",
        description: "Japanese school girl",
    },
];

const container = document.querySelector("#spriteContainer");
const selectedSprite = document.querySelector("#selectedSprite");
const spriteName = document.querySelector("#spriteName");
const summary = document.querySelector("#summary");

// creating character buttons
characterList.forEach((sprite) => {
    // container.innerHTML += `<button type="button" class="spriteBox" id="${sprite.id}"><img class="btnImg" src="${sprite.source}" /></button>`;
    container.innerHTML += `<button type="button" class="spriteBox" id="${sprite.id}" style="background:url(${sprite.source})"></button>`;
});

// this also works instead of innerHTML:

// characterList.forEach(sprite => {
//     const button = document.createElement("button");
//     button.type = "button";
//     button.classList.add("spriteBox");
//     button.id = sprite.id;
//
//     button.style.backgroundImage = `url(${sprite.source})`;
//     console.log(`${sprite.source}`);
//
//     container.appendChild(button);
// });

// getting the js variable for the buttons AFTER creating it above
const characterBox = document.querySelectorAll(".spriteBox");

// function for getting sprite related texts to appear
function addSpriteText(sprite) {
    spriteName.innerHTML = sprite.name;
    summary.innerHTML = `Name: ${sprite.name} </br></br></br></br></br> Class: ${sprite.role} </br></br></br></br></br> ${sprite.description}`;
}

// getting buttons to show sprites + text on click
characterBox.forEach(() => {
    document.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.tagName === "BUTTON") {
            let sprite = characterList.find((item) => item.id === e.target.id);
            selectedSprite.src = sprite.source;
            addSpriteText(sprite);
        }
    });
});
