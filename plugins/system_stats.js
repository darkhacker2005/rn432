const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "``DARK KNIGHT BOT 🇱🇰 ➠ දැන් online මේක පුද්ගලික් බොට් සේවාවක්. ♠```\n\n*Version:* ```V1.0 - stable```\n\n*Developer:* ```🇱🇰 ☛ HIRUWA```\n\n*WhatsApp :* wa.me/94704029407\n\n*```DARK KNIGHT BOT 🇱🇰 ➠ භාවිතා කිරීම ගැන ස්තූතියි.```"})

    }
    else {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*©DARK KNIGHT BOT V1.0 🇱🇰  BY HIRUWA ➠*' })
     }
    }));
    
     Asena.addCommand({pattern: 'darkmenu', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '*╔═▣═══❖D KNIGHT❖═══▣═╗ *\n*║*  *DARK BOT MENU*\n*║*    '+Config.MENUTEXT+' 🚀\n*╚═══❖═══▣  🇱🇰  ▣════❖═══╝*\n\n\n➠ .dark කමාන්ඩ් එක භාවිතා කර අපගේ අනෙකුත් ලොගෝ පැක් සහ අනෙකුත් සියලුම කමාන්ඩ්ස් ලබා ගන්න...➠\n\n\n※‗‗‗‗‗‗ *DARK Media commands* ‗‗‗‗‗‗※\n🇱🇰 𝙘𝙢𝙙 ➠ .song <song name>\n☛ 𝙐𝙨𝙚 ➠ ඔබ වෙනුවෙන් ගීත බාගත කරයි..\n\n🇱🇰 𝙘𝙢𝙙 ➠ .video <yt link>\n☛ 𝙐𝙨𝙚 ➠ යූ ටියුබ් වීඩියෝ බාගන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .profinsta<පරිශීලක නාමය>\n☛ 𝙐𝙨𝙚 ➠ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .insta <link> \n☛ 𝙐𝙨𝙚 ➠   Instagram වෙතින් අන්තර්ගතය බාගන්න. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .yt<text>\n☛ 𝙐𝙨𝙚 ➠   ඔබට yt සබැඳි ලබා ☛. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .movie <පෙන්වන්න නම>\n☛ 𝙐𝙨𝙚 ➠   movie සම්බන්ධ තොරතුරු ලබා ගන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .tiktok <tiktok link>\n☛ 𝙐𝙨𝙚 ➠   tiktok වීඩියෝ බාගැනීමට(මේක ලිමිට්).\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gif \n☛ 𝙐𝙨𝙚 ➠ වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .mp3 \n🇱🇰 𝙐𝙨𝙚 ➠ වීඩියෝව සින්දුවක් බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .img <පෙළ> \n☛ 𝙐𝙨𝙚 ➠ එය ගූගල් වෙතින් රූපය යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .trt <language code> \n☛ 𝙐𝙨𝙚 ➠ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න\n\n🇱🇰 𝙘𝙢𝙙 ➠ .wiki <පෙළ>\n☛ 𝙐𝙨𝙚 ➠  එය විකිපීඩියාවේ ඔබට යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .lyric <පෙළ>\n☛ 𝙐𝙨𝙚 ➠  ගීතයේ පද රචනා සොයා ගනී.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .covid <රටේ කේතය>\n☛ 𝙐𝙨𝙚 ➠ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .weather <නගරය>\n☛ 𝙐𝙨𝙚 ➠ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.\n\n🇱🇰 𝘾𝙢𝙙 ➠ .removebg \n☛ 𝙐𝙨𝙚 ➠  රූපයේ පසුබිම ඉවත් කරයි \n\n🇱🇰 𝙘𝙢𝙙 ➠ .ocr\n☛ 𝙐𝙨𝙚 ➠ රූපයේ ලියා ඇති පෙළ සොයා ගනී.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .owner\n☛ 𝙐𝙨𝙚 ➠ owner පිලිබද තොරතුරු.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .wallpaper\n☛ 𝙐𝙨𝙚 ➠ එය අහඹු බිතුපත ඔබට යවයි.\n\n💠💠💠💠💠💠💠💠💠💠💠\n\n\n     🇱🇰 *𝘿𝘼𝙍𝙆 𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨*  🇱🇰 \n\n\n🇱🇰 𝙘𝙢𝙙 ➠ .joke  \n☛ 𝙐𝙨𝙚 ➠ එය අහඹු විහිළුවක් යවයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .meme <පෙළ> \n☛ 𝙐𝙨𝙚 ➠ Cations the image into a meme. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .quote \n☛ 𝙐𝙨𝙚 ➠ එය අහඹු උපුටා දැක්වීමක් යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .ss <වෙබ් අඩවි සබැඳිය> \n☛ 𝙐𝙨𝙚 ➠ එය වෙබ් අඩවියේ තිර රුව යවයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .changesay <පෙළ> \n☛ 𝙐𝙨𝙚➠ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .trumpsay \n☛ 𝙐𝙨𝙚 ➠ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න  \n\n🇱🇰 𝙘𝙢𝙙 ➠ .compliment  \n☛ 𝙐𝙨𝙚 ➠ ඔබට ප්‍රශංසාවක් ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gm  \n☛ 𝙐𝙨𝙚 ➠ good morning පැතුමක් සහිත පනිවිඩය ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gn  \n☛ 𝙐𝙨𝙚 ➠ good night පැතුමක් සමග පනිවිඩය ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gmt \n☛ 𝙐𝙨𝙚 ➠good morning ටෙක්ස්ට් පනිවිඩයක් යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .harry  \n☛ 𝙐𝙨𝙚 ➠ harry potter  rendom spell එකක් ලබාදේ.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .harry1  \n☛ 𝙐𝙨𝙚 ➠ harry potter  rendom character එකක් ලබාදේ.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .bitly <link> \n☛ 𝙐𝙨𝙚 ➠   ඔබේ සබැඳිය කෙටි කරන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .dict  \n☛ 𝙐𝙨𝙚 ➠   ශබ්ද කෝෂය [-dict en; anime] \n\n🇱🇰 𝙘𝙢𝙙 ➠  .zodiac <leo>  \n☛ 𝙐𝙨𝙚 ➠   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .qr <text>  \n☛ 𝙐𝙨𝙚 ➠   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .movie  \n☛ 𝙐𝙨𝙚 ➠  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .anime <text> \n☛ 𝙐𝙨𝙚 ➠  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n\n💠💠💠💠💠💠💠💠💠💠💠 \n\n\n※‗‗‗‗‗*𝘿 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙋𝘼𝘾𝙆*‗‗‗‗‗‗※ \n\n\n🇱🇰 𝙘𝙢𝙙 ➠ .sticker \n☛ 𝙐𝙨𝙚➠ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .photo  \n ☛ 𝙐𝙨𝙚➠ ස්ටිකර් රූපයට පරිවර්තනය කරයි. \n\n 🇱🇰 𝙘𝙢𝙙 ➠ .attp <text> \n☛ 𝙐𝙨𝙚 ➠ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.\n\n\n💠💠💠💠💠💠💠💠💠💠💠 \n\n\n ※‗‗‗‗*𝘿 𝙇𝙊𝙂𝙊 𝙋𝘼𝘾𝙆*‗‗‗‗‗※\n\n🇱🇰 𝙘𝙢𝙙 ➠ .txttiomg\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න\n\n🇱🇰 𝙘𝙢𝙙 ➠ .dpack\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .darkpack\n☛ 𝙐𝙨𝙚➠ DARK KNIGHT  Logo ලාංඡන විධාන ලබා ගන්න \n\n 🇱🇰 𝙘𝙢𝙙 ➠ .dnpack\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න\n\n🇱🇰 𝙘𝙢𝙙 ➠ .ffpack\n☛ 𝙐𝙨𝙚 ➠ free fire ලොගෝ පනහක් ඇත. \n\n\n*╔═▣═══❖⦁⦁⦁DN⦁⦁⦁❖═══▣═╗* \n*║*  *DARK BOT MENU*\n*║*    '+Config.MENUTEXT+' 🚀\n*╚═══❖═══▣  ╩  ▣════❖═══╝*\n🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰 '})
     }
    ));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```DARK KNIGHT BOT දැන් online ඔයාලට මගේ සේවාව ලබාගත හැක. 🇱🇰```\n\*Version:* ```V1.0 - stable```\n\n*Developer:* ```HIRUWA```\n\n*WhatsApp :* wa.me/94704029407*\n\n```ස්තූතියි DARK KNIGHT BOT V1.0 🇱🇰 ➠ පාවිච්චි කිරීම පිළිබදව```"})

    }
    else {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*©DARK KNIGHT BOT 🇱🇰 BY HIRUWA 🇱🇰 ☛*' })
     }
    }));
    
    Asena.addCommand({pattern: 'darkmenu', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (`https://telegra.ph/file/b0f60558bf2d8d354455f.jpg`, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '*╔═▣═══❖D KNIGHT❖═══▣═╗ *\n*║*  *DARK BOT MENU*\n*║*    '+Config.MENUTEXT+' 🚀\n*╚═══❖═══▣  🇱🇰  ▣════❖═══╝*\n\n\n➠ .dark කමාන්ඩ් එක භාවිතා කර අපගේ අනෙකුත් ලොගෝ පැක් සහ අනෙකුත් සියලුම කමාන්ඩ්ස් ලබා ගන්න...➠\n\n\n‗‗‗‗‗ *DARK Media commands* ‗‗‗‗‗‗※\n🇱🇰 𝙘𝙢𝙙 ➠ .song <song name>\n☛ 𝙐𝙨𝙚 ➠ ඔබ වෙනුවෙන් ගීත බාගත කරයි..\n\n🇱🇰 𝙘𝙢𝙙 ➠ .video <yt link>\n☛ 𝙐𝙨𝙚 ➠ යූ ටියුබ් වීඩියෝ බාගන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .profinsta<පරිශීලක නාමය>\n☛ 𝙐𝙨𝙚 ➠ පුද්ගලයාගේ පැතිකඩෙහි දැක්ව පෙන්වයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .insta <link> \n☛ 𝙐𝙨𝙚 ➠   Instagram වෙතින් අන්තර්ගතය බාගන්න. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .yt<text>\n☛ 𝙐𝙨𝙚 ➠   ඔබට yt සබැඳි ලබා ☛. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .movie <පෙන්වන්න නම>\n☛ 𝙐𝙨𝙚 ➠   movie සම්බන්ධ තොරතුරු ලබා ගන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .tiktok <tiktok link>\n☛ 𝙐𝙨𝙚 ➠   tiktok වීඩියෝ බාගැනීමට(මේක ලිමිට්).\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gif \n☛ 𝙐𝙨𝙚 ➠ වීඩියෝව gif බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .mp3 \n🇱🇰 𝙐𝙨𝙚 ➠ වීඩියෝව සින්දුවක් බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .img <පෙළ> \n☛ 𝙐𝙨𝙚 ➠ එය ගූගල් වෙතින් රූපය යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .trt <language code> \n☛ 𝙐𝙨𝙚 ➠ ඔබ ටැග් කරන පා text ය පරිවර්තනය කරන්න\n\n🇱🇰 𝙘𝙢𝙙 ➠ .wiki <පෙළ>\n☛ 𝙐𝙨𝙚 ➠  එය විකිපීඩියාවේ ඔබට යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .lyric <පෙළ>\n☛ 𝙐𝙨𝙚 ➠  ගීතයේ පද රචනා සොයා ගනී.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .covid <රටේ කේතය>\n☛ 𝙐𝙨𝙚 ➠ ඔබේ රටේ COVID සංඛ්යාලේඛන යවන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .weather <නගරය>\n☛ 𝙐𝙨𝙚 ➠ ඔබේ ස්ථානයේ කාලගුණය ගැන ඔබට කියයි.\n\n🇱🇰 𝘾𝙢𝙙 ➠ .removebg \n☛ 𝙐𝙨𝙚 ➠  රූපයේ පසුබිම ඉවත් කරයි \n\n🇱🇰 𝙘𝙢𝙙 ➠ .ocr\n☛ 𝙐𝙨𝙚 ➠ රූපයේ ලියා ඇති පෙළ සොයා ගනී.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .owner\n☛ 𝙐𝙨𝙚 ➠ owner පිලිබද තොරතුරු.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .wallpaper\n☛ 𝙐𝙨𝙚 ➠ එය අහඹු බිතුපත ඔබට යවයි.\n\n💠💠💠💠💠💠💠💠💠💠💠\n\n\n     🇱🇰 *𝘿𝘼𝙍𝙆 𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨*  🇱🇰 \n\n\n🇱🇰 𝙘𝙢𝙙 ➠ .joke  \n☛ 𝙐𝙨𝙚 ➠ එය අහඹු විහිළුවක් යවයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .meme <පෙළ> \n☛ 𝙐𝙨𝙚 ➠ Cations the image into a meme. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .quote \n☛ 𝙐𝙨𝙚 ➠ එය අහඹු උපුටා දැක්වීමක් යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .ss <වෙබ් අඩවි සබැඳිය> \n☛ 𝙐𝙨𝙚 ➠ එය වෙබ් අඩවියේ තිර රුව යවයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .changesay <පෙළ> \n☛ 𝙐𝙨𝙚➠ Text පෙළ වෙනස් කිරීමේ මතක රූපයක් බවට පරිවර්තනය කරයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .trumpsay \n☛ 𝙐𝙨𝙚 ➠ ට්‍රම්ප්ගේ ට්වීට් එකට පෙළ පරිවර්තනය කරන්න  \n\n🇱🇰 𝙘𝙢𝙙 ➠ .compliment  \n☛ 𝙐𝙨𝙚 ➠ ඔබට ප්‍රශංසාවක් ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gm  \n☛ 𝙐𝙨𝙚 ➠ good morning පැතුමක් සහිත පනිවිඩය ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gn  \n☛ 𝙐𝙨𝙚 ➠ good night පැතුමක් සමග පනිවිඩය ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .gmt \n☛ 𝙐𝙨𝙚 ➠good morning ටෙක්ස්ට් පනිවිඩයක් යවයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .harry  \n☛ 𝙐𝙨𝙚 ➠ harry potter  rendom spell එකක් ලබාදේ.\n\n🇱🇰 𝙘𝙢𝙙 ➠ .hpc  \n☛ 𝙐𝙨𝙚 ➠ harry potter  rendom character එකක් ලබාදේ.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .bitly <link> \n☛ 𝙐𝙨𝙚 ➠   ඔබේ සබැඳිය කෙටි කරන්න.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .dict  \n☛ 𝙐𝙨𝙚 ➠   ශබ්ද කෝෂය [-dict en; anime] \n\n🇱🇰 𝙘𝙢𝙙 ➠  .zodiac <leo>  \n☛ 𝙐𝙨𝙚 ➠   ඔබේ කේන්දර සටහන ගැන ඔබට කියයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠  .qr <text>  \n☛ 𝙐𝙨𝙚 ➠   පෙළ qr කේතයක් බවට පරිවර්තනය කරයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .movie  \n☛ 𝙐𝙨𝙚 ➠  චිත්‍රපටය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n🇱🇰 𝙘𝙢𝙙 ➠  .anime <text> \n☛ 𝙐𝙨𝙚 ➠  සජීවිකරණය පිළිබඳ තොරතුරු ඔබට ලබා දෙයි.\n\n\n💠💠💠💠💠💠💠💠💠💠💠 \n\n\n※‗‗‗‗‗*𝘿 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙋𝘼𝘾𝙆*‗‗‗‗‗‗※ \n\n\n🇱🇰 𝙘𝙢𝙙 ➠ .sticker \n☛ 𝙐𝙨𝙚➠ img / gif ස්ටිකරයක් බවට පරිවර්තනය කරයි. \n\n🇱🇰 𝙘𝙢𝙙 ➠ .photo  \n ☛ 𝙐𝙨𝙚➠ ස්ටිකර් රූපයට පරිවර්තනය කරයි. \n\n 🇱🇰 𝙘𝙢𝙙 ➠ .attp <text> \n☛ 𝙐𝙨𝙚 ➠ Text පෙළ දිලිසෙන ස්ටිකරයක් බවට පරිවර්තනය කරයි.\n\n\n💠💠💠💠💠💠💠💠💠💠💠 \n\n\n ※‗‗‗‗*𝘿 𝙇𝙊𝙂𝙊 𝙋𝘼𝘾𝙆*‗‗‗‗‗※\n\n🇱🇰 𝙘𝙢𝙙 ➠ .txttiomg\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න\n\n🇱🇰 𝙘𝙢𝙙 ➠ .dpack\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න \n\n🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .darkpack\n☛ 𝙐𝙨𝙚➠ DARK KNIGHT  Logo ලාංඡන විධාන ලබා ගන්න \n\n 🇱🇰 𝙘𝙢𝙙 ➠ .dnpack\n☛ 𝙐𝙨𝙚 ➠ Logo ලාංඡන විධාන ලබා ගන්න \n\n🇱🇰 𝙘𝙢𝙙 ➠ .ffpack\n☛ 𝙐𝙨𝙚 ➠ free fire ලොගෝ පනහක් ඇත.\n\n\n*╔═▣═══❖⦁⦁⦁DN⦁⦁⦁❖═══▣═╗* \n*║*  *DARK BOT MENU*\n*║*    '+Config.MENUTEXT+' 🚀\n*╚═══❖═══▣  ╩  ▣════❖═══╝*\n🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰☛🇱🇰 '})
     }
    ));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
