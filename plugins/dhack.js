/* # Exclusively from RAVANA
*/

const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "කමාන්ඩ් එකට පස්සේ වචනයක් ලබා දෙන්න\n 🇱🇰"

if (Config.WORKTYPE == 'private') {

    RAVANA.addCommand({ pattern: 'dhack?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=${Config.LOLUHUMAN_API}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'DARK KNIGHT BOT 🇱🇰 ➠ BY HITUWA '})

    }));
}

else if (Config.WORKTYPE == 'public') {

    RAVANA.addCommand({ pattern: 'dhack ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=${Config.LOLUHUMAN_API}&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'DARK KNIGHT BOT 🇱🇰 ➠ BY HITUWA' })

    }));
    
}
