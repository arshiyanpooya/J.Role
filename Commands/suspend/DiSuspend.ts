import { MembershipStates } from 'discord.js/typings/enums';
import { ICommand } from 'wokcommands';
import dotenv from 'dotenv';
import punishmentSchema from '../../Models/punishment-schema'
dotenv.config()
export default {
    category: 'Give/HeadMod',
    description: 'Gives Power1',
    guildOnly: true,
    minArgs: 1,
    maxArgs: 3,
    expectedArgs: '<user> <duration> <reason>',
    expectedArgsTypes: ['USER', 'STRING', 'STRING'],

    callback: ({ message, args, interaction, client, guild, member: staff }) => {
        const MEMBER_ID = args.shift()!.replace(/[<@!&>]/g, '')
        const MEMBER = guild!.members.cache.get(MEMBER_ID)

        // If Member Is Cappu
        if (MEMBER_ID === '929295453487501372') {
            return `You Can't DiSuspend **Cappuccino**`
        }
        
        // If Member is Message Author
        if (MEMBER_ID === message.author.id) {
            return `You Can't DiSuspend **Your Self**`
        }
        // If Member Is An Owner
        if (MEMBER?.roles.cache.has('799202925041418253') || MEMBER?.roles.cache.has('927828184760729601')) {
            return `You Can't DiSuspend **An Owner**`
        }
        // If Member Is The Creator
        if (MEMBER_ID === '946355425631141901') {
            return `You can't DiSuspend **Bots Creator**`
        }
        // If Message Author Has any HighRoles
        if (message.member?.roles.cache.has('854031216487432214') || message.member?.roles.cache.has('946327095024427048') || message.member?.permissions.has('ADMINISTRATOR') || message.author.id === '946355425631141901') {
            // If member has Muted Role
            if (MEMBER?.roles.cache.has('850720296478703647')) {
                MEMBER.roles.remove('850720296478703647')
                if (!MEMBER.roles.cache.has('799213648127328297')) {
                    MEMBER.roles.add('799213648127328297')
                } else {
                    return
                }
                return `<@${MEMBER_ID}> Was DiSuspended`
            }
        }
        
    }
} as ICommand