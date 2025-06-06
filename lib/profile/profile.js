const fs = require('fs');
const db = './database/users.json';

function getUser(id) {
    const data = JSON.parse(fs.readFileSync(db));
    if (!data[id]) {
        data[id] = { coins: 0, cards: [] };
        fs.writeFileSync(db, JSON.stringify(data));
    }
    return data[id];
}

function addCoins(id, amount) {
    const data = JSON.parse(fs.readFileSync(db));
    if (!data[id]) data[id] = { coins: 0, cards: [] };
    data[id].coins += amount;
    fs.writeFileSync(db, JSON.stringify(data));
}

module.exports = { getUser, addCoins };
