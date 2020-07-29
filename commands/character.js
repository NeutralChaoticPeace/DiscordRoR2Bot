module.exports = {
    name: "character",
    description: "Pick a random RoR2 character",
    characterList: [
        "Commando",
        "Huntress",
        "MUL-T",
        "Engineer",
        "Artificer",
        "Mercenary",
        "Rex",
        "Loader",
        "Acrid"
    ],
    execute(message, args) {
        console.debug("\n====== CHARACTER ======");

        const index = Math.floor(Math.random() * this.characterList.length);
        console.debug("Random index: " + index);
        const character = this.characterList[index];
        console.debug("Selected character: " + character);
        
        const atUser = `<@${message.author.id}> `;
        message.channel.send(atUser + "You should play: " + character);
    },
    parseArgs(args) {
    }
};