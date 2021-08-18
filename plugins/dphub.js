/* # Exclusively from MsJessica
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "කමාන්ඩ් එකට පස්සෙ වචනයක් දෙන්න මැනික 🤤"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'dphun ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=${encodeURIComponent(match[1])}&text2=HUB`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'dphub ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=${encodeURIComponent(match[1])}&text2=HUB`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA*' })

    }));
    
    
        Asena.addCommand({ pattern: 'dphub ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=${encodeURIComponent(match[1])}&text2=HUB`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA*' })

    }));
}
