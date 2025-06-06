const fs = require('fs');
const path = require('path');

exports.loadCommands = () => {
    const commands = {};
    const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./${file}`);
        commands[command.name] = command.execute;
    }
    return commands;
};
