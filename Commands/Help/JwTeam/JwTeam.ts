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
                    name: 'MakeHoster @User <Duration>',
                    value: `Gives <@${799212052853948446}>`,
                    inline: true,
                },
                {
                    name: 'MakeJigsaw @User <Duration>',
                    value: `Gives <@${799234140468674561}>`,
                    inline: true,
                },
                {
                    name: 'MakeImmortal @User <Duration>',
                    value: `Gives <@${799213657241681941}>`,
                    inline: true,
                },
                {
                    name: 'MakeVeteran @User <Duration>',
                    value: `Gives <@${799219914032152576}>`,
                    inline: true,
                },
                {
                    name: 'MakeElite @User <Duration>',
                    value: `Gives <@${799219921845616681}>`,
                    inline: true,
                },
                {
                    name: 'MakeSaint @User <Duration>',
                    value: `Gives <@${799235649046708224}>`,
                    inline: true,
                },
                {
                    name: 'TakeHoster @User <Duration>',
                    value: `Takes <@${799212052853948446}>`,
                    inline: true,
                },
                {
                    name: 'TakeJigsaw @User <Duration>',
                    value: `Takes <@${799234140468674561}>`,
                    inline: true,
                },
                {
                    name: 'TakeImmortal @User <Duration>',
                    value: `Takes <@${799213657241681941}>`,
                    inline: true,
                },
                {
                    name: 'TakeVeteran @User <Duration>',
                    value: `Takes <@${799219914032152576}>`,
                    inline: true,
                },
                {
                    name: 'TakeElite @User <Duration>',
                    value: `Takes <@${799219921845616681}>`,
                    inline: true,
                },
                {
                    name: 'TakeSaint @User <Duration>',
                    value: `Takes <@${799235649046708224}>`,
                    inline: true,
                },
            ])
            return embed
    }
} as ICommand