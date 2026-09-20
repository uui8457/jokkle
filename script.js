const cardCoordinate = {
    A1: "🌷",
    A2: "🎀",
    A3: "🧠",
    A4: "🐖",
    A5: "🦩",
    A6: "🩰",
    A7: "💗",
    A8: "🍥",

    B1: "🦀",
    B2: "🐞",
    B3: "🍁",
    B4: "🍄",
    B5: "🚒",
    B6: "🍓",
    B7: "🧲",
    B8: "🌹",

    C1: "🌻",
    C2: "⭐",
    C3: "🎺",
    C4: "🧸",
    C5: "🦔",
    C6: "🐥",
    C7: "☀️",
    C8: "💡",

    D1: "🍀",
    D2: "🐊",
    D3: "🦎",
    D4: "🦖",
    D5: "🦆",
    D6: "🔋",
    D7: "🧪",
    D8: "🐸",

    E1: "🐟",
    E2: "🌀",
    E3: "❄️",
    E4: "✈️",
    E5: "🐋",
    E6: "🪼",
    E7: "🌊",
    E8: "💎",

    F1: "🦈",
    F2: "📎",
    F3: "👻",
    F4: "🦴",
    F5: "🐁",
    F6: "🐧",
    F7: "🦭",
    F8: "☁️",

    G1: "😴",
    G2: "😭",
    G3: "😜",
    G4: "🥳",
    G5: "🤠",
    G6: "🥶",
    G7: "😡",
    G8: "🤓",

    H0: "🦄"
}
const deckStructure = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    ["B1", "G2", "D3", "C4", "F5", "E6", "B7", "A8"],
    ["C1", "F2", "G3", "E4", "D5", "B6", "C7", "A8"],
    ["D1", "E2", "C3", "G4", "B5", "F6", "D7", "A8"],
    ["E1", "D2", "F3", "B3", "G5", "C6", "E7", "A8"],
    ["F2", "C2", "B3", "D4", "E5", "G6", "F7", "A8"],
    ["G1", "B2", "E3", "F4", "C5", "D6", "G7", "A8"],

    ["A1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
    ["B1", "A2", "E3", "D4", "G5", "F6", "C7", "B8"],
    ["C1", "G2", "A3", "F4", "E5", "C6", "D7", "B8"],
    ["D1", "F2", "D3", "A4", "C5", "G6", "E7", "B8"],
    ["E1", "E2", "G3", "C4", "A5", "D6", "F7", "B8"],
    ["F1", "D2", "C3", "E4", "F5", "A6", "G7", "B8"],
    ["G1", "C2", "F3", "G4", "D5", "E6", "A7", "B8"],

    ["A1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
    ["B1", "B2", "F3", "E4", "A5", "G6", "D7", "C8"],
    ["C1", "A2", "B3", "G4", "F5", "D6", "E7", "C8"],
    ["D1", "G2", "E3", "B4", "D5", "A6", "F7", "C8"],
    ["E1", "F2", "A3", "D4", "B5", "E6", "G7", "C8"],
    ["F1", "E2", "D3", "F4", "G5", "B6", "A7", "C8"],
    ["G1", "D2", "G3", "A4", "E5", "F6", "B7", "C8"],

    ["A1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    ["B1", "C2", "G3", "F4", "B5", "A6", "E7", "D8"],
    ["C1", "B2", "C3", "A4", "G5", "E6", "F7", "D8"],
    ["D1", "A2", "F3", "C4", "E5", "B6", "G7", "D8"],
    ["E1", "G2", "B3", "E4", "C5", "F6", "A7", "D8"],
    ["F1", "F2", "E3", "G4", "A5", "C6", "B7", "D8"],
    ["G1", "E2", "A3", "B4", "F5", "G6", "C7", "D8"],

    ["A1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
    ["B1", "D2", "A3", "G4", "C5", "B6", "F7", "E8"],
    ["C1", "C2", "D3", "B4", "A5", "F6", "G7", "E8"],
    ["D1", "B2", "G3", "D4", "F5", "C6", "A7", "E8"],
    ["E1", "A2", "C3", "F4", "D5", "G6", "B7", "E8"],
    ["F1", "G2", "F3", "A4", "B5", "D6", "C7", "E8"],
    ["G1", "F2", "B3", "C4", "G5", "A6", "D7", "E8"],

    ["A1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
    ["B1", "E2", "B3", "A4", "D5", "C6", "G7", "F8"],
    ["C1", "D2", "E3", "C4", "B5", "G6", "A7", "F8"],
    ["D1", "C2", "A3", "E4", "G5", "D6", "B7", "F8"],
    ["E1", "B2", "D3", "G4", "E5", "A6", "C7", "F8"],
    ["F1", "A2", "G3", "B4", "C5", "E6", "D7", "F8"],
    ["G1", "G2", "C3", "D4", "A5", "B6", "E7", "F8"],

    ["A1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
    ["B1", "F2", "C3", "B4", "E5", "D6", "A7", "G8"],
    ["C1", "E2", "F3", "D4", "C5", "A6", "B7", "G8"],
    ["D1", "D2", "B3", "F4", "A5", "E6", "C7", "G8"],
    ["E1", "C2", "E3", "A4", "F5", "B6", "D7", "G8"],
    ["F1", "B2", "A3", "C4", "D5", "F6", "E7", "G8"],
    ["G1", "A2", "D3", "E4", "F5", "C6", "E7", "G8"],

    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H0"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H0"],
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H0"],
    ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H0"],
    ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H0"],
    ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H0"],
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H0"],
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H0"]
]


let gameDeck, centerCard, players, startTime, gameTime, gameOver, centerSlot

// function checkMatch() {
//     // For each card, check if there is a match with every other card. If there is not a match, report back.
//     deckStructure.forEach((card, index) => {
//         console.log("Checking card " + index)
//         if (!deckStructure.some(otherCard => otherCard.some(item => card.includes(item)))) console.log(card)
//     })
// }

function shuffled(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
}

function drawCard(fromDeck) {
    return fromDeck.splice(-1, 1)[0]
}

function convertTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
}

function startTimer(element) {
    startTime = Date.now()
    updateTimer(element)
}

function updateTimer(element) {
    // Calculate elapsed time
    gameTime = Date.now() - startTime
    // Display on timer
    element.textContent = convertTime(gameTime)
    // If game is not over, update timer on next frame
    !gameOver && requestAnimationFrame(() => updateTimer(element))
}

function reset() {
    // Reset variables
    gameTime = 0
    gameOver = false

    //Shuffle deck
    gameDeck = shuffled(deckStructure)
    //Draw card for center
    centerSlot = document.getElementById("center")
    centerCard = new Card(drawCard(gameDeck))
    // Display center card
    centerCard.moveToSlot(centerSlot)
    //Create new players
    players = []
    for (let i = 0; i < playerCount; i++) {
        players.push(new Player(i + 1))
    }
}
function setLocalStorage() { // Saves the score in local storage
    highScores.push({name:playerName, time: gameTime})
    localStorage.setItem("soloJokkle-highScore", JSON.stringify(highScores))
    localStorage.setItem("soloJokkle-name", JSON.stringify(playerName))
}

function getLocalStorage() {
    highScores = JSON.parse(localStorage.getItem("soloJokkle-highScore"))
    playerName = JSON.parse(localStorage.getItem("soloJokkle-name"))
}

class Player {
    constructor(id) {
        this.id = id
        this.cardSlot = document.getElementById("player" + this.id)
        this.deck = []
        //Populate the player deck
        for (let i = 0; i < playerCards; i++) {
            this.deck.push(new Card(drawCard(gameDeck),this))
        }
        this.card = drawCard(this.deck)
        console.log(this.card)
        this.card.moveToSlot(this.cardSlot)
    }

    pressedItem(item) {
        //check if the item pressed matches any on the center card
        console.log(item)
        // If it does match, place the player card in the center and draw a new card from the player deck
        if (centerCard.emojis.some((emoji) => emoji === item)) {
            centerCard = this.card
            //Display center card
            centerCard.moveToSlot(centerSlot)
            //Check if player has won the game
            if (this.deck.length === 0) {
                gameOver = true
                setLocalStorage()
                window.alert(convertTime(gameTime))
                window.location.reload();

            }
            //Draw new player card
            this.card = drawCard(this.deck)
            //Display new card
            this.card.moveToSlot(this.cardSlot)
        }
    }
}

class Card {
    constructor(cardTemplate, player = undefined) {
        this.cardTemplate = cardTemplate
        this.player = player
        this.emojis = shuffled(this.cardTemplate).map(item => cardCoordinate[item])

        //Create divs: card, itemSlot, item
        this.cardDiv = document.createElement("div")
        for (let i = 0; i < 8; i++) {
            // Item slot div
            let itemSlotDiv = document.createElement("div")
            itemSlotDiv.setAttribute("class", "itemSlot")
            this.cardDiv.appendChild(itemSlotDiv)
            // TODO: Add interaction (how? whose?) pass player to card and use that
            itemSlotDiv.addEventListener("pointerdown", () => this.player.pressedItem(this.emojis[i]))
            // Item div
            let itemDiv = document.createElement("div")
            itemDiv.setAttribute("class", "item")
            itemDiv.textContent = this.emojis[i]
            itemSlotDiv.appendChild(itemDiv)
            // Rotate and scale item
            itemDiv.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg) scale(${0.5 + (Math.random())})`
        }
    }

    moveToSlot(cardSlot) { // Display card in specified slot
        cardSlot.replaceChildren(this.cardDiv)
    }
}