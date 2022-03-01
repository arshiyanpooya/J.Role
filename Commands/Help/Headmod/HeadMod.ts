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
                    name: 'MakeSrMod @User',
                    value: `Gives <@${946065948299907082}>`,
                    inline: true,
                },
                {
                    name: 'MakeMod @User',
                    value: `Gives <@${946065956378120222}>`,
                    inline: true,
                },
                {
                    name: 'MakeJrMod @User',
                    value: `Gives <@${946065959997825025}>`,
                    inline: true,
                },
                {
                    name: 'MakeSrُStaff @User',
                    value: `Gives <@${946044282148642816}>`,
                    inline: true,
                },
                {
                    name: 'MakeُStaff @User',
                    value: `Gives <@${946044292651167764}>`,
                    inline: true,
                },
                {
                    name: 'MakeJrُStaff @User',
                    value: `Gives <@${946044288058400838}>`,
                    inline: true,
                },
                {
                    name: 'TakeSrMod @User',
                    value: `Takes <@${946065948299907082}>`,
                    inline: true,
                },
                {
                    name: 'TakeMod @User',
                    value: `Takes <@${946065956378120222}>`,
                    inline: true,
                },
                {
                    name: 'TakeJrMod @User',
                    value: `Takes <@${946065959997825025}>`,
                    inline: true,
                },
                {
                    name: 'TakeSrُStaff @User',
                    value: `Takes <@${946044282148642816}>`,
                    inline: true,
                },
                {
                    name: 'TakeُStaff @User',
                    value: `Takes <@${946044292651167764}>`,
                    inline: true,
                },
                {
                    name: 'TakeJrُStaff @User',
                    value: `Takes <@${946044288058400838}>`,
                    inline: true,
                },
                {
                    name: 'Suspend @User <Duration> <Reason (Should Be Provided)>',
                    value: `Suspends User For an Specified Duration`,
                    inline: true,
                },
            ])
            return embed
    }
} as ICommand