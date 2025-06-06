const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const { loadCommands } = require('./lib/commands/loader');
const config = require('./config');

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

const startBot = async () => {
    const sock = makeWASocket({ auth: state });

    sock.ev.on('creds.update', saveState);

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        if (!m.message) return;
        const message = m.message.conversation || m.message.extendedTextMessage?.text || '';
        if (message.startsWith('.')) {
            const commandName = message.slice(1).split(' ')[0];
            const args = message.split(' ').slice(1);
            const command = global.commands[commandName];
            if (command) command(sock, m, args);
        }
    });

    global.sock = sock;
    global.commands = loadCommands();
};

startBot();
