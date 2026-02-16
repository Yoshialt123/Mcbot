const express = require('express')
const mineflayer = require('mineflayer')

const app = express()
const PORT = process.env.PORT || 3000

// Keep-alive web server (Render needs this)
app.get('/', (req, res) => {
  res.send('Bot alive')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Web server running on ${PORT}`)
})

function createBot() {
  const PASSWORD = 'Steve123'

  const bot = mineflayer.createBot({
    host: 'creepersenclave.progamer.me',
    port: 39059,
    username: 'Steve'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')
  })

  bot.on('message', (jsonMsg) => {
    const msg = jsonMsg.toString()

    if (msg.includes('/register')) {
      console.log('Registering...')
      setTimeout(() => {
        bot.chat(`/register ${PASSWORD} ${PASSWORD}`)
      }, 1500)
    }

    if (msg.includes('/login')) {
      console.log('Logging in...')
      setTimeout(() => {
        bot.chat(`/login ${PASSWORD}`)
      }, 1500)
    }
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

createBot()
