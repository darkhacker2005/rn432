/*RAVANA*/

const RAVANA = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
RAVANA.addCommand({pattern: 'dpack', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[2] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[3] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[4] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[5] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        
var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════◉DARK KNIGHT◉═════╗*\n*💢𝗗 𝗟𝗼𝗴𝗼 𝗣𝗮𝗰𝗸💢*\n     *DARk KNIGHT 🇱🇰 ➠.*\n\n🇱🇰 Command: *.d3d*\n*⭕Description: *It Converts Text with 3D Background*\n\n🇱🇰 Command: *.dluxury*\n*⭕Description: *It Converts Text with 3d luxury Background*\n\n🇱🇰 Command: *.d8bit*\n*⭕Description: *It Converts Text to 8bit Logo*\n\n*🇱🇰 Command: *.dal*\n*⭕Description: *It Converts Text to  logo\n\n🇱🇰 Command: *.daveng*\n⭕Description: *It Converts Text to avenger logo*\n\n🇱🇰 Command: *.dbneon*\n⭕Description: *It Converts Text to blue Neon*\n\n🇱🇰 Command: *.dbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n🇱🇰 Command: *.dbook*\n⭕Description: *It Converts Text to book*\n\n🇱🇰 Command: *.dbp*\n⭕Description: *It Converts Text to background pink*\n\n🇱🇰 Command: *.dpaint*\n⭕Description: *It Converts Text to brand*\n\n🇱🇰 Command: *.dbreak*\n⭕Description: *It Converts Text to breskwall*\n\n🇱🇰 Command: *.dcandy*\n⭕Description: *It Converts Text to candy logo*\n\n🇱🇰 Command: *.dcc2*\n⭕Description: *It Converts Text to cofee cup logo*\n\n🇱🇰 Command: *.dcl*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dcoding*\n⭕Description: *It Converts Text to coding*\n\n🇱🇰 Command: *.dcrismes*\n⭕Description: *It Converts Text to crismes logo*\n\n🇱🇰 Command: *.dd2a*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.ddneon*\n⭕Description: *It Converts Text to dark neon*\n\n🇱🇰 Command: *.dbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n🇱🇰 Command: *.ddropwater*\n⭕Description: *It Converts Text to drop water*\n\n🇱🇰 Command: *.demoj*\n⭕Description: *It Converts emoji to photo*\n\n🇱🇰 Command: *.depep*\n⭕Description: *It Converts Text to ff logo*\n\n🇱🇰 Command: *.dff*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.dflame*\n⭕Description: *It Converts Text to flame*\n\n🇱🇰 Command: *.dflower*\n⭕Description: *It Converts Text to flower*\n\n🇱🇰 Command: *.dgalaxy*\n⭕Description: *It Converts Text to galaxy logo*\n\n🇱🇰 Command: *.dgb*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dglow*\n⭕Description: *It Converts Text to glow*\n\n🇱🇰 Command: *.dgplay*\n⭕Description: *It Converts Text to yt gold play button*\n\n🇱🇰 Command: *.dgtext*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dharry*\n⭕Description: *It Converts Text to harry logo*\n\n🇱🇰 Command: *.dhorror*\n⭕Description: *It Converts Text to horror blood*\n\n🇱🇰 Command: *.dht*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dleave*\n⭕Description: *It Converts Text to leave logo*\n\n🇱🇰 Command: *.dlight*\n⭕Description: *It Converts Text to light logo*\n\n🇱🇰 Command: *.dlion*\n⭕Description: *It Converts Text to lion logo*\n\n Command: *.dlogo*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dlol*\n⭕Description: *It Converts Text to lol logo*\n\n🇱🇰 Command: *.dlr*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dlt*\n⭕Description: *It Converts Text to light text logo*\n\n🇱🇰 Command: *.dmarval*\n⭕Description: *It Converts Text to marval logo*\n\n🇱🇰 Command: *.dmm*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dnaruto*\n⭕Description: *It Converts Text to naruto logo*\n\n🇱🇰 Command: *.dneon*\n⭕Description: *It Converts Text to neon logo*\n\n🇱🇰 Command: *.don3d*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dpaper*\n⭕Description: *It Converts Text to pepar logo*\n\n🇱🇰 Command: *.dpark*\n⭕Description: *It Converts Text to park logo*\n\n🇱🇰 Command: *.dphub*\n⭕Description: *It Converts Text to phlogo*\n\n🇱🇰 Command: *.dpubg*\n⭕Description: *It Converts Text to pubg logo*\n\n🇱🇰 Command: *.dsande*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dsilk*\n⭕Description: *It Converts Text to silk logo*\n\n🇱🇰 Command: *.dsky*\n⭕Description: *It Converts Text to sky logo*\n\n🇱🇰 Command: *.dsmoke*\n⭕Description: *It Converts Text to smoke logo*\n\n🇱🇰 Command: *.dsn*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dspace*\n⭕Description: *It Converts Text to space logo*\n\n🇱🇰 Command: *.rsplay*\n⭕Description: *It Converts Text to yt silver play button*\n\n🇱🇰 Command: *.dst*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtfire*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtlogo*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtoxic*\n⭕Description: *It Converts Text to toxic logo*\n\n🇱🇰 Command: *.duwo*\n⭕Description: *It Converts Text to under water text logo*\n\n🇱🇰 Command: *.dwatercolourc*\n⭕Description: *It Converts Text to water color logo*\n\n🇱🇰 Command: *.dwg*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dwolf*\n⭕Description: *It Converts Text to wolf logo*\n\n🇱🇰 Command: *.dwood*\n⭕Description: *It Converts Text to wood logo*\n\n🇱🇰 Command: *.dhack*\n⭕Description: *It Converts Text to anonymons  logo*\n\n*DARK KNIGHT 🇱🇰 Logo pack*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.```\n\n '})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	RAVANA.addCommand({pattern: 'dpack', fromMe: false, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[2] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[3] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[4] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        r_text[5] ="https://telegra.ph/file/b0f60558bf2d8d354455f.jpg";
        
var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════◉DARK KNIGHT◉═════╗*\n*💢𝗗 𝗟𝗼𝗴𝗼 𝗣𝗮𝗰𝗸💢*\n     *DARk KNIGHT 🇱🇰 ➠.*\n\n🇱🇰 Command: *.d3d*\n*⭕Description: *It Converts Text with 3D Background*\n\n🇱🇰 Command: *.dluxury*\n*⭕Description: *It Converts Text with 3d luxury Background*\n\n🇱🇰 Command: *.d8bit*\n*⭕Description: *It Converts Text to 8bit Logo*\n\n*🇱🇰 Command: *.dal*\n*⭕Description: *It Converts Text to  logo\n\n🇱🇰 Command: *.daveng*\n⭕Description: *It Converts Text to avenger logo*\n\n🇱🇰 Command: *.dbneon*\n⭕Description: *It Converts Text to blue Neon*\n\n🇱🇰 Command: *.dbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n🇱🇰 Command: *.dbook*\n⭕Description: *It Converts Text to book*\n\n🇱🇰 Command: *.dbp*\n⭕Description: *It Converts Text to background pink*\n\n🇱🇰 Command: *.dpaint*\n⭕Description: *It Converts Text to brand*\n\n🇱🇰 Command: *.dbreak*\n⭕Description: *It Converts Text to breskwall*\n\n🇱🇰 Command: *.dcandy*\n⭕Description: *It Converts Text to candy logo*\n\n🇱🇰 Command: *.dcc2*\n⭕Description: *It Converts Text to cofee cup logo*\n\n🇱🇰 Command: *.dcl*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dcoding*\n⭕Description: *It Converts Text to coding*\n\n🇱🇰 Command: *.dcrismes*\n⭕Description: *It Converts Text to crismes logo*\n\n🇱🇰 Command: *.dd2a*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.ddneon*\n⭕Description: *It Converts Text to dark neon*\n\n🇱🇰 Command: *.dbrokeh*\n⭕Description: *It Converts Text to brokeh*\n\n🇱🇰 Command: *.ddropwater*\n⭕Description: *It Converts Text to drop water*\n\n🇱🇰 Command: *.demoj*\n⭕Description: *It Converts emoji to photo*\n\n🇱🇰 Command: *.depep*\n⭕Description: *It Converts Text to ff logo*\n\n🇱🇰 Command: *.dff*\n⭕Description: *It Converts Text to ff logo*\n\n💠 Command: *.dflame*\n⭕Description: *It Converts Text to flame*\n\n🇱🇰 Command: *.dflower*\n⭕Description: *It Converts Text to flower*\n\n🇱🇰 Command: *.dgalaxy*\n⭕Description: *It Converts Text to galaxy logo*\n\n🇱🇰 Command: *.dgb*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dglow*\n⭕Description: *It Converts Text to glow*\n\n🇱🇰 Command: *.dgplay*\n⭕Description: *It Converts Text to yt gold play button*\n\n🇱🇰 Command: *.dgtext*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dharry*\n⭕Description: *It Converts Text to harry logo*\n\n🇱🇰 Command: *.dhorror*\n⭕Description: *It Converts Text to horror blood*\n\n🇱🇰 Command: *.dht*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dleave*\n⭕Description: *It Converts Text to leave logo*\n\n🇱🇰 Command: *.dlight*\n⭕Description: *It Converts Text to light logo*\n\n🇱🇰 Command: *.dlion*\n⭕Description: *It Converts Text to lion logo*\n\n Command: *.dlogo*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dlol*\n⭕Description: *It Converts Text to lol logo*\n\n🇱🇰 Command: *.dlr*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dlt*\n⭕Description: *It Converts Text to light text logo*\n\n🇱🇰 Command: *.dmarval*\n⭕Description: *It Converts Text to marval logo*\n\n🇱🇰 Command: *.dmm*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dnaruto*\n⭕Description: *It Converts Text to naruto logo*\n\n🇱🇰 Command: *.dneon*\n⭕Description: *It Converts Text to neon logo*\n\n🇱🇰 Command: *.don3d*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dpaper*\n⭕Description: *It Converts Text to pepar logo*\n\n🇱🇰 Command: *.dpark*\n⭕Description: *It Converts Text to park logo*\n\n🇱🇰 Command: *.dphub*\n⭕Description: *It Converts Text to phlogo*\n\n🇱🇰 Command: *.dpubg*\n⭕Description: *It Converts Text to pubg logo*\n\n🇱🇰 Command: *.dsande*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dsilk*\n⭕Description: *It Converts Text to silk logo*\n\n🇱🇰 Command: *.dsky*\n⭕Description: *It Converts Text to sky logo*\n\n🇱🇰 Command: *.dsmoke*\n⭕Description: *It Converts Text to smoke logo*\n\n🇱🇰 Command: *.dsn*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dspace*\n⭕Description: *It Converts Text to space logo*\n\n🇱🇰 Command: *.rsplay*\n⭕Description: *It Converts Text to yt silver play button*\n\n🇱🇰 Command: *.dst*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtfire*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtlogo*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dtoxic*\n⭕Description: *It Converts Text to toxic logo*\n\n🇱🇰 Command: *.duwo*\n⭕Description: *It Converts Text to under water text logo*\n\n🇱🇰 Command: *.dwatercolourc*\n⭕Description: *It Converts Text to water color logo*\n\n🇱🇰 Command: *.dwg*\n⭕Description: *It Converts Text to logo*\n\n🇱🇰 Command: *.dwolf*\n⭕Description: *It Converts Text to wolf logo*\n\n🇱🇰 Command: *.dwood*\n⭕Description: *It Converts Text to wood logo*\n\n🇱🇰 Command: *.dhack*\n⭕Description: *It Converts Text to anonymons  logo*\n\n*DARK KNIGHT 🇱🇰 Logo pack*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.```\n\n  })
	}));
}
