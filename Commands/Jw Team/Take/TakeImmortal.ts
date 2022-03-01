import { MembershipStates } from 'discord.js/typings/enums';
import { ICommand } from 'wokcommands';
export default {
    category: 'Give/Jw Team',
    description: 'Gives Immortal',
    guildOnly: true,
    minArgs: 1,
    maxArgs: 2,
    expectedArgs: '<@Member>',

    callback: ({ message, args, interaction, client, guild }) => {
        if (message.member?.roles.cache.has('946327095024427048') || message.author.id === '880894680672395294' || message.member?.permissions.has('ADMINISTRATOR')) {
            // Member ID
            const MEMBER_ID = args.shift()!.replace(/[<@!&>]/g, '')
            // Find Member ID
            const MEMBER = guild!.members.cache.get(MEMBER_ID)
            // If Member Doesnt Exist
            if (!MEMBER) {
                return `Couldn't Find Any Member With <@${MEMBER_ID}> ID`
            }
            // If Member Was The Owners
            if (MEMBER.roles.cache.has('799202925041418253') || MEMBER.roles.cache.has('927828184760729601')) {
                return `<@${message.author.id}> You Can't Give <@${799213657241681941}> To **High Ranks**`
            }
            // If Member Was Bots Self
            if (MEMBER_ID === '933064836902948894') {
                return `<@${message.author.id}> You Can't Give Any Roles To **Bots Self**!`
            }
            // If Member Doesn't That Role
            if (!MEMBER.roles.cache.has('799213657241681941')) {
                return `<@${message.author.id}>, <@${MEMBER_ID}> Doesn't Have **That Role**`
            } 
            // If Member Is Self Message Author
            if (MEMBER_ID === message.author.id) {
                return `<@${message.author.id}> You Can't Give **Your Self** Any Roles!`
            } else {
                MEMBER.roles.remove('799213657241681941')
                return `Took Immortal From <@${MEMBER_ID}> `
            }
            
        } else {
            return `<@${message.author.id}> You Don't Have The Required **Premissions**!`
        }
    }
} as ICommand