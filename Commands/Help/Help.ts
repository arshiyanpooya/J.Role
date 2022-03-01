import { ICommand } from 'wokcommands';
import dotenv from 'dotenv';
dotenv.config()
import {
    MessageEmbed,    
} from 'discord.js'

export default {
    category: 'Helping',
    description: 'Helps You',

    callback: ({ message, channel, guild, user, text, member }) => {
        const embed = new MessageEmbed()
        embed.setColor('DARK_AQUA')
        embed.setDescription(`Requested by <@${message.author.id}>`)
        embed.addFields([
            {
                name: 'HeadHelper',
                value: 'Shows HeadHelper Commands',
            },
            {
                name: 'HeadMedia',
                value: 'Shows HeadMedia Commands',
            }
        ])
        embed.addFields([
            {
                name: 'HeadMod',
                value: 'Shows HeadMod Commands',
            },
            {
                name: 'JwTeam',
                value: 'Shows JwTeam Commands',
            }
        ])
                
            return embed
    }
} as ICommand