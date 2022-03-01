import { MembershipStates } from 'discord.js/typings/enums';
import { ICommand } from 'wokcommands';
export default {
    category: 'Fun',
    description: 'Replies with a fun message',
    guildOnly: true,
    minArgs: 0,
    maxArgs: 2,
    expectedArgs: '<@Member>',

    callback: ({ message, args, interaction, client, guild, channel }) => {
        if (channel.id === '852419043524345866') {
            const Cyber = [
                'جون صدا سسکی من',
                'شما؟ قابل شناسایی نیستید',
                'کیشته گربه سیاه',
                'ع این کودک سن اومد',
                'اینقدر منو منشن نکن کار های مهم تری از تو دارم',
                'به به اقای سایبر ایگل',
                'پدرت مرد بعدش خوردمش الانم شکمم داره ضجه میزنه هخ',
                'بنال عزیزم',
                'ناینگی میقولی؟',
                'چخه نوب کش',
            ]
            const MX = [
                'به به اقای متین',
                'عه چه خوشگل شدی امروز',
                'مزاحم نشو میام بالا سرتا!',
                'بگو بردار بگو',
                'بزنم پس کلت صدا دبه بدی؟',
                'قابل دیدن نیستی',
            ]
            const Cappu = [
                'درود',
                'نسکافه میقولی',
                'کاپوشینو میقولی',
                'کاپوشینو نمیقولی؟ چرا نمیقولی',
                'بیا با کاپوشینو',
                'کاپوچینو سلامتی میاره',
            ]
            const Milanof = [
                'پدرت مرد',
                'عه کودک سن وارد میشود',
                'بابات چطوره؟',
                '<@674869992138997762> بیا اینو جم کن منو منشن نکنه',
                'بفرما بفرما',
                'جون صدا خوشگل من',
                'خوجگل من چطوره',
            ]
            const Others = [
                'نمیشناسم',
                'منو منشن نکن در حال خوردن پدرت هستم',
                'https://tenor.com/view/li-sunglasses-sunglasses-glasses-gif-16807659',
                'https://tenor.com/view/peanutbutter-gamer-pbg-austin-hargrave-dancing-sunglasses-gif-14217118',
            ]
            if (message.author.id === '880412983883366440') {
                const response = Cyber[Math.floor(Math.random() * Cyber.length)]
                message.reply(response)
            } else if (message.author.id === '840172620922093568') {
                const response = MX[Math.floor(Math.random() * MX.length)]
                message.reply(response)
            } else if (message.author.id === '929295453487501372') {
                const response = Cappu[Math.floor(Math.random() * Cappu.length)]
                message.reply(response)
            } else if (message.author.id === '679397723799027712' || message.author.id === '920670281578713099') {
                const response = Milanof[Math.floor(Math.random() * Milanof.length)]
                message.reply(response)
            } else {
                const response = Others[Math.floor(Math.random() * Others.length)]
                message.reply(response)
            }
        } else {
            return
        }
    }
} as ICommand