module.exports = {
    name: "rng",
    description: "Random number generator",
    execute(message, args) {
        console.debug("\n====== RNG ======");

        const options = this.parseArgs(args);
        const min = parseInt(options.min);
        const max = parseInt(options.max);

        console.debug("Requested random number in range: [" + min + ", " + max + ")");
        const result = Math.floor(Math.random() * (max - min)) + min;
        console.debug("Result: " + result);
        
        const atUser = `<@${message.author.id}> `;
        message.channel.send(atUser + "Result in range [" + min + ", " + max + "): " + result);
    },
    parseArgs(args) {
        const options = {min: Math.ceil(0), max: Math.floor(100)};
        if (args === null || args.length === 0) 
            return options;

        for (let i = 0; i < args.length; i++) {
            const [name, value] = args[i].split("=").map(x => x.trim().toLowerCase());

            if (name === "min") {
                if (!value.match(/^\d+$/))
                    throw "Invalid value for min. Only positive numbers are allowed.";

                const val = parseInt(value);
                if (val < 0)
                    throw "Invalid value for min. Negative numbers are not allowed.";

                options.min = Math.ceil(val);
            } else if (name === "max") {
                if (!value.match(/^\d+$/))
                    throw "Invalid value for max. Only positive numbers are allowed.";

                const val = parseInt(value);
                if (val < 0)
                    throw "Invalid value for max. Negative numbers are not allowed.";

                options.max = Math.floor(val);
            }
        }

        return options;
    }
};