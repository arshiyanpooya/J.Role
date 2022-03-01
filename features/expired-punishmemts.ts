import { Client } from 'discord.js';
import { ICommand } from 'wokcommands';
import punishmentSchema from "../Models/punishment-schema";


export default (client: Client) => {
    client.on('guildMemberAdd', async (member) => {
        const resualt = await punishmentSchema.findOne({
            guildId: member.guild.id,
            userId: member.id,
            type: ['Suspend', 'MakeElite', 'MakeHoster', 'MakeImmortal', 'MakeJigsaw', 'MakeSaint', 'MakeVeteran'],
        })
        if (resualt) {
            member.roles.add('850720296478703647')
        }
    })

    const check = async () => {
        const query = {
            expires: { $lt: new Date() },
        }
        const results = await punishmentSchema.find(query)

        for (const result of results) {
            const { guildId, userId, type } = result
            const guild = await client.guilds.fetch(guildId)
            if (!guild) {
                console.log(`Guild ${guildId} No longer Has The Bot`)
                continue
            }

            if (type === 'Suspend') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('850720296478703647')
            }
            if (type === 'MakeHoster') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799212052853948446')
            }
            if (type === 'MakeJigsaw') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799234140468674561')
            }
            if (type === 'MakeImmortal') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799213657241681941')
            }
            if (type === 'MakeVeteran') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799219914032152576')
            }
            if (type === 'MakeElite') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799219921845616681')
            }
            if (type === 'MakeSaint') {
                const member = guild.members.cache.get(userId)
                if (!member) {
                    continue
                }  
                member.roles.remove('799235649046708224')
            }
        }

        await punishmentSchema.deleteMany(query)

        setTimeout(check, 1000 * 60)
    }
    check()
}

export const config = {
    dbName: 'EXPIRED_PUNISHMENTS',
    displayName: 'Expired Punishments',
}