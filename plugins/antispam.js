/*RAVANA BOT ANTISPAM*/

const RAVANA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const RP = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

const rcd = ('𝙰\n𝙽\n𝚃\n𝙸\n𝕊\nℙ\n𝔸\nᴍ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*☮️RAVANA☮️*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nමෙම කේතය ඔබගේ දුරකථනය හදිසි ස්පෑම් එල්ල වීමකදි  සිරවිම වලකාලයි"
const RAVANAMUTE = "Trying to close temporary,\nතාවකාලිකව සමුහය වැසීමට උත්සාහ කිරීම (මම 𝕒𝕕𝕞𝕚𝕟නම් වැහෙයි)"
const MUTE = ".mute"
const RAVANA = "දැන් antispam එක ක්‍රියාත්මක වෙමින් පවතී...."
RAVANA.addCommand({pattern: 'antispam', fromMe: true, deleteCommand: true, desc: RP,}, (async (message, match) => {

  var msg = await message.reply('සැකසමින්🛠....');

  await message.client.sendMessage(
    message.jid,RAVANAMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUTE, MessageType.text);

      await message.client.sendMessage(
        message.jid,RAVANA, MessageType.text);

        await message.client.sendMessage(
          message.jid,rcd, MessageType.text);
  
              await message.client.sendMessage(
                 message.jid,RAVANAMUTE, MessageType.text);

               await message.client.sendMessage(
               message.jid,MUTE, MessageType.text);

      await message.client.sendMessage(
        message.jid,RAVANA, MessageType.text);

        await message.client.sendMessage(
          message.jid,rcd, MessageType.text);
          

  }));
