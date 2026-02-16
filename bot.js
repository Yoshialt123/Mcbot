const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'creepersenclave.progamer.me', // replace
  port: 39059,            // change if needed
  username: 'Steve'      // bot name
})

bot.on('spawn', () => {
  console.log('Bot joined the server!')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  if (message === 'ping') {
    bot.chat('pong')
  }
})

bot.on('kicked', console.log)
bot.on('error', console.log)
