import { ICommand } from 'wokcommands';
import dotenv from 'dotenv';
dotenv.config()
import {
    Interaction,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
} from 'discord.js'

export default {
    category: 'HeadMod',
    description: 'HeadMod Commands',

    callback: ({ message, channel, guild }) => {
        const embed = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setDescription(`Requested by <@${message.author.id}>`)
            .addFields([
                {
                    name: 'MakeDStreamer @User',
                    value: `Gives <@${943171512947589190}>`
                },
                {
                    name: 'MakeGStreamer @User',
                    value: `Gives <@${946446836703567934}>`
                },
                {
                    name: 'MakeStreamer @User',
                    value: `Gives <@${799202925024903185}>`,
                },
                {
                    name: 'MakeMedia @User',
                    value: `Gives <@${868117308969738260}>`
                },
                {
                    name: 'MakeAparater @User',
                    value: `Gives <@${913800077255016488}>`
                },
                {
                    name: 'MakeYoutuber @User',
                    value: `Gives <@${850462982697910352}>`,
                },
                {
                    name: 'TakeDStreamer @User',
                    value: `Takes <@${943171512947589190}>`
                },
                {
                    name: 'TakeGStreamer @User',
                    value: `Takes <@${946446836703567934}>`
                },
                {
                    name: 'TakeStreamer @User',
                    value: `Takes <@${799202925024903185}>`,
                },
                {
                    name: 'TakeMedia @User',
                    value: `Takes <@${868117308969738260}>`
                },
                {
                    name: 'TakeAparater @User',
                    value: `Takes <@${913800077255016488}>`
                },
                {
                    name: 'TakeYoutuber @User',
                    value: `Takes <@${850462982697910352}>`,
                },
            ])
            return embed
    }
} as ICommand