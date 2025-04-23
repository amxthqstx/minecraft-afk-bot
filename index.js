// index.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'amxthqstx.aternos.me', // Replace with your server's IP
  port: 31893,                      // Default Minecraft port
  username: 'amxthqstx', // Replace with your Minecraft username
  version: false                    // Automatically detects the version
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is now AFK.');
  // You can add any AFK actions or other code here
});
