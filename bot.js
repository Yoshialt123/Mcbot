const express = require('express')
const mineflayer = require('mineflayer')

const app = express()
const port = process.env.PORT || 4000

function createBot() {
  const bot = mineflayer.createBot({
    host: 'creepersenclave.progamer.me',
    port: 39059,
    username: 'Steve'
  })

  bot.on('spawn', () => console.log('Bot joined!'))

  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (message === 'ping') bot.chat('pong')
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

createBot()

app.get('/', (req, res) => res.send('Bot is running'))
app.listen(port, () => console.log(`Web server on ${port}`))
