// lib/commands/kiss.js
module.exports = {
    name: 'kiss',
    execute: async (sock, m, args) => {
        const target = args[0] || "someone";
        await sock.sendMessage(m.key.remoteJid, {
            text: `😘 You kissed ${target}!`
        });
    }
};
