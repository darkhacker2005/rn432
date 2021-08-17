/* RAVANA BOT
මේක RAVANA BOTගේ
උස්සන එක්කෙනාට හොදක් වෙන්න එපා

Credit-RAVANA 
*/


const RAVANA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const HPS = "it sends harry potter spells"
const HPC = "it sends harry potter characters names"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
RAVANA.addCommand({pattern: 'harry', fromMe: true, deleteCommand: true, desc: HPS,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "උබ දැන් ගෙම්බෙක් ඒශ්වා පුක් ☛";
    r_text[2] ="උබ දැන් නරියෙක් ඒශ්වා පුක් ☛";
    r_text[3] ="අයිසින් තට්ටූ ඒශ්වා කේක් ඒශ්වා පුක් බලයෙන් ඔබ දැන් බුද්දිමතෙක් ☛";
    r_text[4] ="ආදර මල් පවනේ ඈ යන මේ ගමනේ බලයෙන් ඔබට රූමත් සුන්දර කාන්තාවක් නොලැබේවා පුක් ☛";
    r_text[5] ="ඔන් බ්‍රීන් කට්ටු කට්ටු මාගෙ බලයෙන් ඔබ දැන් පිස්සෙක් 🥺☛";
    r_text[6] ="කන්ෆියුස් බුන්ගාහ් ඒශ්වා පුක් ☛";
    r_text[7] ="එක්ප්ලූසෝ බී නේ පුක් අහ්හ්හ්හ් 🤤☛";
    r_text[8] ="අයි වඩ වඩා යක්කයන්ගේ බලයෙන් ඔබ දැන් පාරෙ ඉන්න නකුට්ටෙක් 😂☛";
    r_text[9] ="හැරීගෙ මන්තර බලන්නද ආවෙ මන්තර වැඩ නෑ සිග්නල් නෑ ඩයලොග්නෙ මන් 😒☛";
    r_text[10] ="ආවඩා කවිඩෝර් පිම්කේ සනා පන් පැදුර මත දූරියන් හයියෙන් ගහන්න හැකි වේවා පුක් ☛☛";
  

    var i = Math.floor(11*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


RAVANA.addCommand({pattern: 'harry1', fromMe: true, deleteCommand: true, desc: HPC,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "Bellatrix Lestrange";
        r_text[2] ="Minerva McGonagall";
        r_text[3] ="Colin Creevey";
        r_text[4] ="Gilderoy Lockhart";
        r_text[5] ="Kreacher";
        r_text[6] ="Augusta Longbottom";
        r_text[7] ="Ginny Weasley";
        r_text[8] ="Neville Longbottom";
        r_text[9] ="Draco Malfoy";
        r_text[10] ="Lord voltermot";
        r_text[11] ="Sirius Black";
        r_text[12] ="Sevrus snape";
        r_text[13] ="Albus dombledor";
        r_text[14] ="Ron Weasley";
        r_text[15] ="Harry Potter ";
        r_text[16] ="Hermione Granger";

      
    
        var i = Math.floor(17*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        RAVANA.addCommand({pattern: 'harry', fromMe: false, deleteCommand: true, desc: HPS,}, (async (message, match) => {

            var r_text = new Array ();
        
    r_text[1] = "උබ දැන් ගෙම්බෙක් ඒශ්වා පුක් ☛";
    r_text[2] ="උබ දැන් නරියෙක් ඒශ්වා පුක් ☛";
    r_text[3] ="අයිසින් තට්ටූ ඒශ්වා කේක් ඒශ්වා පුක් බලයෙන් ඔබ දැන් බුද්දිමතෙක් ☛";
    r_text[4] ="ආදර මල් පවනේ ඈ යන මේ ගමනේ බලයෙන් ඔබට රූමත් සුන්දර කාන්තාවක් නොලැබේවා පුක් ☛";
    r_text[5] ="ඔන් බ්‍රීන් කට්ටු කට්ටු මාගෙ බලයෙන් ඔබ දැන් පිස්සෙක් 🥺☛";
    r_text[6] ="කන්ෆියුස් බුන්ගාහ් ඒශ්වා පුක් ☛";
    r_text[7] ="එක්ප්ලූසෝ බී නේ පුක් අහ්හ්හ්හ් 🤤☛";
    r_text[8] ="අයි වඩ වඩා යක්කයන්ගේ බලයෙන් ඔබ දැන් පාරෙ ඉන්න නකුට්ටෙක් 😂☛";
    r_text[9] ="හැරීගෙ මන්තර බලන්නද ආවෙ මන්තර වැඩ නෑ සිග්නල් නෑ ඩයලොග්නෙ මන් 😒☛";
    r_text[10] ="ආවඩා කවිඩෝර් පිම්කේ සනා පන් පැදුර මත දූරියන් හයියෙන් ගහන්න හැකි වේවා පුක් ☛☛";
  
        
            var i = Math.floor(11*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        RAVANA.addCommand({pattern: 'harry1', fromMe: false, deleteCommand: true, desc: HPC,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "Bellatrix Lestrange";
                r_text[2] ="Minerva McGonagall";
                r_text[3] ="Colin Creevey";
                r_text[4] ="Gilderoy Lockhart";
                r_text[5] ="Kreacher";
                r_text[6] ="Augusta Longbottom";
                r_text[7] ="Ginny Weasley";
                r_text[8] ="Neville Longbottom";
                r_text[9] ="Draco Malfoy";
                r_text[10] ="Lord voltermot";
                r_text[11] ="Sirius Black";
                r_text[12] ="Sevrus snape";
                r_text[13] ="Albus dombledor";
                r_text[14] ="Ron Weasley";
                r_text[15] ="Harry Potter ";
                r_text[16] ="Hermione Granger";
        
              
            
                var i = Math.floor(17*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
        
            }
