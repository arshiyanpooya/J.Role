import DiscordJS, { Intents } from 'discord.js'
import WOKcommands from 'wokcommands'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

import express from 'express';
const app = express();
const port = 5000;
app.get('/', (_req: any, res: { send: (arg0: string) => any }) => res.send('Bot Is Working Well!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const client = new DiscordJS.Client({
    intents :[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', () => {
    new WOKcommands(client, {
        commandDir: path.join(__dirname, 'Commands'),
        featureDir: path.join(__dirname, 'features'),
        typeScript: true,
        mongoUri: process.env.MONGO_URI,
        botOwners: ['880894680672395294'],
    })
    .setDefaultPrefix('--')
    console.log('I am ready!')
})


client.login(process.env.TOKEN)