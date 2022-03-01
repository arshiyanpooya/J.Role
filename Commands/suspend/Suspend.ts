import { MembershipStates } from 'discord.js/typings/enums';
import { ICommand } from 'wokcommands';
import dotenv from 'dotenv';
import { User } from 'discord.js';
import punishmentSchema from '../../Models/punishment-schema';
dotenv.config()
export default {
    category: 'Suspend',
    description: 'Gives Power1',
    guildOnly: true,
    minArgs: 1,
    maxArgs: 3,
    expectedArgs: '<user> <duration> <reason>',

    callback: async ({ message, args, interaction, client, guild, channel, instance, member: staff, options, prefix, text }) => {
        if (message.member?.roles.cache.has('854031216487432214') || message.member?.roles.cache.has('946327095024427048') || message.author.id === '946355425631141901') {      
            if (!guild) {
                return `You Can Only Use This Whithin Servers`
            }
            let userId = args.shift()!
            const Duration = args.shift()!
            const reason = args.join('')
            let user: User | undefined

            if (message) {
                user = message.mentions.users?.first()
            }
            if (!user) {
                userId = userId.replace(/[<@!>]/g, '')
                user = await client.users.fetch(userId)

                if (!user) {
                    return `No Users Were found With The Given **ID**`
                }
            }
            userId = user.id
            if (userId === '946355425631141901') {
                return `You Can't Suspend <@${946355425631141901}> He's My **Dev**`
            }
            if (userId === '929295453487501372') {
                return `You Can't Suspend <@${929295453487501372}> He's **The Owner**`
            }
            if (userId === '590945703661010985') {
                return `You Can't Suspend <@${590945703661010985}> He's **The Owner**`
            }
            if (userId === '363032092231073795') {
                return `You Can't Suspend <@${363032092231073795}> He's **The Owner**` 
            }
            if (userId === '394508186826047499') {
                return `You Can't Suspend <@${394508186826047499}> He's **The Manager**`
            }
            if (userId === message.author.id) {
                return `You can't Mute **Your Self**`
            }

            let time
            let type
            try {
                const split = Duration.match(/\d+|\D+/g)
                time = parseInt(split![0])
                type = split![1].toLowerCase()            
            } catch (e) {
                return `Invalid Time Format Use D = Days, H = Hours,M = Minutes, S = Seconds`
            }

            if (type === 'h') {
                time *= 60
            } else if (type === 'd') {
                time *= 60 * 24
            } else if (type !== 'm') {
                return `Invalid Time Format Use D = Days, H = Hours,M = Minutes, S = Seconds`
            }

            const expires = new Date()
            expires.setMinutes(expires.getMinutes() + time)

            const result = await punishmentSchema.findOne({
                guildId: guild.id,
                userId,
                type: 'Suspend'
            })
            if (result) {
                return `<@${userId}> Is Already Suspended`
            } 
            await new punishmentSchema({
                userId,
                guildId: guild.id,
                staffId:  staff.id,
                reason,
                expires,
                type: 'Suspend',
            }).save()

            try {
                const member = await guild.members.fetch(userId)
                if (member) {
                    member.roles.add('850720296478703647')
                }
            } catch (ignored) {
                return `Cannot Suspend That User`
            }
            return `Suspended <@${userId}> For "${Duration}"`
        }
    },
} as ICommand