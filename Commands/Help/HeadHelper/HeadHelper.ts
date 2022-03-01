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
    category: 'HeadHelepr',
    description: 'HeadHelper Commands',

    callback: ({ message, channel, guild }) => {
        const embed = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setDescription(`Requested by <@${message.author.id}>`)
            .addFields([
                {
                    name: 'MakeSrHelper @User',
                    value: `Gives <@${946065963659448361}>`,
                    inline: true,
                },
                {
                    name: 'MakeHelper @User',
                    value: `Gives <@${946065967832772628}>`,
                    inline: true,
                },
                {
                    name: 'MakeJrHelper @User',
                    value: `Gives <@${946065971074969662}>`,
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
                    name: 'TakeSrHelper @User',
                    value: `Takes <@${946065963659448361}>`,
                    inline: true,
                },
                {
                    name: 'TakeHelper @User',
                    value: `Takes <@${946065967832772628}>`,
                    inline: true,
                },
                {
                    name: 'TakeJrHelper @User',
                    value: `Takes <@${946065971074969662}>`,
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