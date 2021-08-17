const jessisapi = require('api-jessi'); // Import NPM Package

const RAVANA = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'SI') desc_msg = 'DARK KNIGHT ලොගෝ පැක් එක.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

RAVANA.addCommand({pattern: 'darkpack$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'SI') {
        t1 = 'Makes  Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes  Logo.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes  Logo.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes  Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes  Logo' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes  Logo.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes  Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes  Logo.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes  Logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes  Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes  Logo' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes  Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes  Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes  Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes  Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes  Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes  Logo.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes  Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes  Logo.'
        t28 = 'Makes  Logo.' 
        t29 = 'Makes  Logo.' 
        t30 = 'Makes  Logo.'
        t31 = 'Makes  Logo.'
        t32 = 'Makes  Logo'
        t33 = 'Makes  Logo.' 
        t34 = 'Makes  Logo'
    }
    else {
        t1 = 'Makes  Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes  Logo.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes  Logo.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes  Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes  Logo' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes  Logo.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes  Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes  Logo.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes  Logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes  Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes  Logo' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes  Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes  Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes  Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes  Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes  Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes  Logo.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes  Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes  Logo.'
        t28 = 'Makes  Logo.' 
        t29 = 'Makes  Logo.' 
        t30 = 'Makes  Logo.'
        t31 = 'Makes  Logo.'
        t32 = 'Makes  Logo'
        t33 = 'Makes  Logo.' 
        t34 = 'Makes  Logo'
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'SI') {
  usage_cmd = '🔖 උදාහරණ: *'
        command_cmd = '💠 විදානය : '
        desc_cmd = '🇱🇰 Description : '
    } else { 
        usage_cmd = '🔖 Example : *'
        command_cmd = '💠 Command : '
        desc_cmd = '🇱🇰 Description : '
    }
    const msg = command_cmd + '```.ddevil``` \n' + t1 + '_\n' + usage_cmd + '*.ddevil Hiruwa*\n\n' +
        command_cmd + '```.dbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.dbear Hiruwa*\n\n' +
        command_cmd + '```.dthunder``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.dthunder Hiruwa*\n\n' +
        command_cmd + '```.d1glitch```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.d123glitch Hiruwa*\n\n' +
        command_cmd + '```.dberry``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.dberry Hiruwa*\n\n' +
        command_cmd + '```.dperidot``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '*.dlight Hiruwa*\n\n' +
        command_cmd + '```.djoker``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '*.djoker Hiruwa*\n\n' +
        command_cmd + '```.dhoney``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.dninja Hiruwa*\n\n' +
        command_cmd + '```.dglitter``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.dglitter Hiruwa*\n\n' +
        command_cmd + '```.dbokeh``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.dbokeh Hiruwa*\n\n' +
        command_cmd + '```.dgreenhorror``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.dgreenhorror Hiruwa*\n\n' +
        command_cmd + '```.d2marvel``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.d2marvel Hiruwa*\n\n' +
        command_cmd + '```.d3neon``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.d3dneon Hiruwa*\n\n' +
        command_cmd + '```.dmetalgalaxy``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '*.dmetalgalaxy Hiruwa*\n\n' +
        command_cmd + '```.dmetalsilver``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '*.dmetalsilver Hiruwa*\n\n' +
        command_cmd + '```.d2graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '*.d2graf Hiruwa*\n\n' +
        command_cmd + '```.drosegold``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '*.drosegold Hiruwa*\n\n' +       
        command_cmd + '```.dtransformer``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '*.dtransformer Hiruwa*\n\n' +
        command_cmd + '```.dice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '*.dice Hiruwa*\n\n' +
        command_cmd + '```.dluxurymetel``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '*.dluxurymetel Hiruwa*\n\n' +
        command_cmd + '```.dmtg``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '*.dmtg Hiruwa*\n\n' +
        command_cmd + '```.dcamarica``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '*.dcamarica Hiruwa*\n\n' +
        command_cmd + '```.dmagma``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '*.dmagma Hiruwa*\n\n' +
        command_cmd + '```.dlayered``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '*.dlayered Hiruwa*\n\n' +
        command_cmd + '```.dembossed``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '*.dembossed Hiruwa*\n\n' +
        command_cmd + '```.dpapercut``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '*.dpapercut Hiruwa*\n\n' +
        command_cmd + '```.dwonderfullgraf``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '*.dwonderfullgraf Hiruwa*\n\n' +
        command_cmd + '```.dcriholy``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '*.dcriholy Hiruwa*\n\n' +
        command_cmd + '```.dreacloud``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '*.dreacloud Hiruwa*\n\n' +
        command_cmd + '```.dcatwindow``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '*.dcatwindow Hiruwa*\n\n' +
        command_cmd + '```.dsci``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.dscc Hiruwa*\n\n' +
        command_cmd + '```.dhalloween``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.dscc Hiruwa*\n\n'+
        command_cmd + '```.dglue``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.dscc Hiruwa*\n\n'+
        command_cmd + '```.dcup``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '*.dcup Hiruwa*\n\n'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
RAVANA.addCommand({pattern: 'ddevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dthunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/thunder.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/thunder.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'd1glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/123g.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/123g.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/berry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/berry.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dperidot ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/peridot-stone-text-effect-916.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/peridot.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'djoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dhoney ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/honey-text-effect-868.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/honey.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/honey.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dgreenhorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/greenhorror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/greenhorror.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'd2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dd3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/3dneon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/3dneon.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dmetalgalaxy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/metalgalaxy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/metalgalaxy.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dmetalsilver ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-silver-946.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/metalsilver.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/metalsilver.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'd2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'drosegold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-rose-gold-945.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/rosegold.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/rosegold.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dtransformer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
        [`${match[1]}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/transformer.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/transformer.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dluxurymetel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/color-full-luxury-metal-text-effect-969.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/luxurymetel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/luxurymetel.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dmtg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mtg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mtg.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dcamarica ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/captain-america-text-effect-905.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/capamarica.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/capamarica.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/magma.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dlayered ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/layered.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/layered.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dembossed ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/embossed.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/embossed.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dpapercut ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/papercut.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/papercut.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dwonderfullgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wonderfullgraf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wonderfullgraf.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dcriholy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/criholy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/criholy.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dreacloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html",
              `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/reacloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/reacloud.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dcatwindow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
             `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/catwindow.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/catwindow.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dscc ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/scc.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/scc.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dhalloween ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/halloween.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/halloween.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dglue ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/glue.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glue.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dsci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/sci-fi-text-effect-855.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/sci.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/sci.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'dcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: 'DARK KNIGHT BOT 🇱🇰 ➠ BY HIRUWA'})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
