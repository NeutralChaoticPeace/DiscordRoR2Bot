module.exports = {
    name: "artifacts",
    description: "Pick a random assortment of RoR2 artifacts.",
    artifactList: [
        {"name": "Chaos",         "value": "Friendly fire is enabled for both survivors and monsters alike."},
        {"name": "Command",       "value": "Choose your items."},
        {"name": "Death",         "value": "When one player dies, everyone dies. Enable only if you want to truly put your teamwork and individual skill to the ultimate test."},
        {"name": "Dissonance",    "value": "Monsters can appear outside their usual environments."},
        {"name": "Enigma",        "value": "Spawn with a random equipment that changes every time it's activated."},
        {"name": "Evolution",     "value": "Monsters gain items between stages."},
        {"name": "Frailty",       "value": "Fall damage is doubled and lethal."},
        {"name": "Glass",         "value": "Allies deal 500% damage, but have 10% health."},
        {"name": "Honor",         "value": "Enemies can only spawn as elites."},
        {"name": "Kin",           "value": "Monsters will be of only one type per stage."},
        {"name": "Metamorphosis", "value": "Players always spawn as a random survivor."},
        {"name": "Sacrifice",     "value": "Monsters drop items on death, but Chests no longer spawn."},
        {"name": "Soul",          "value": "Wisps emerge from defeated monsters."},
        {"name": "Spite",         "value": "Enemies drop multiple exploding bombs on death."},
        {"name": "Swarms",        "value": "Monster spawns are doubled, but monster maximum health is halved."},
        {"name": "Vengeance",     "value": "Your relentless doppelganger will invade every 10 minutes."},
    ],
    execute(message, args) {
        console.debug("\n====== ARTIFACTS ======");
        const choices = [];

        let howmany = Math.floor(Math.random() * this.artifactList.length);
        while (howmany-- > 0) {
            const choicesLeft = this.artifactList.length - choices.length;
            let pickIndex = Math.floor(Math.random() * choicesLeft);

            while (choices.indexOf(pickIndex) !== -1 && pickIndex < this.artifactList.length)
                pickIndex++;

            if (pickIndex >= this.artifactList.length)
                break;

            choices.push(pickIndex);
        }

        const embed = {
            color: "GREEN",
            title: "You should use the following artifacts",
            fields: choices.map(x => this.artifactList[x])
        };
        const atUser = `<@${message.author.id}> `;
        message.channel.send({embed: embed});
    },
    parseArgs(args) {
    }
};