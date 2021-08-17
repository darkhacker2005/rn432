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

    r_text[1] = "bombarda";
    r_text[2] ="Firestorm";
    r_text[3] ="Legilimens";
    r_text[4] ="Obliviate";
    r_text[5] ="Sectumsempra";
    r_text[6] ="Confringo";
    r_text[7] ="Expulso";
    r_text[8] ="Imperio";
    r_text[9] ="Crucio";
    r_text[10] ="Avada Kedavra";
  

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
        
            r_text[1] = "bombarda";
            r_text[2] ="Firestorm";
            r_text[3] ="Legilimens";
            r_text[4] ="Obliviate";
            r_text[5] ="Sectumsempra";
            r_text[6] ="Confringo";
            r_text[7] ="Expulso";
            r_text[8] ="Imperio";
            r_text[9] ="Crucio";
            r_text[10] ="Avada Kedavra";
          
        
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
