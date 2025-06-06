const config = require('../../config');

module.exports = {
    name: 'menu',
    execute: async (sock, m) => {
        await sock.sendMessage(m.key.remoteJid, {
            video: { url: config.menuGif },
            caption: `👑 *Owner:* ${config.ownerName}\n📱 *Contact:* ${config.ownerContact}\n\n📋 *Main Features:*\n- YouTube Downloader\n- Group Management\n- Games (Chess, Snake, etc.)\n- Profile & Coin System\n- Anime Card Battle\n\nType *.help* for all commands.`
        });
    }
};
