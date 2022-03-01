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
                    name: 'MakePower(1,2,3,4,5,6,7,8,9,10) @User',
                    value: `Gives Chosen Powers To The User`,
                    inline: true,
                },
            ])
            return embed
    }
} as ICommand