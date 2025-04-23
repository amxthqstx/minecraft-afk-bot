// index.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'your-minecraft-server-ip', // Replace with your server's IP
  port: 25565,                      // Default Minecraft port
  username: 'your-minecraft-username', // Replace with your Minecraft username
  version: false                    // Automatically detects the version
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is now AFK.');
  // You can add any AFK actions or other code here
});
