const fs = require("fs");
const {prefix, token} = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require("./commands/" + file);
    client.commands.set(command.name, command);
}

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
        message.channel.send({
            embed: {
                title: "artifacts",
                description: "lolidk",
                fields: [
                    {name: "chaos", value: "<:Artifact_Chaos:737895853016088596> lol idk"}
                ]
            }
        });
        return;
    }

    try {
        client.commands.get(command).execute(message, args);
    } catch (err) {
        console.error("Error from command... Command: '" + message.content + "'");
        console.error(err);

        const userid = message.author.id;
        message.channel.send(`<@${userid}> ${err}.`);
    }
});

client.once("ready", () => console.log("Ready!"));
client.login(token);
