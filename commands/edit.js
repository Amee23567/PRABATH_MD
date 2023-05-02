const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "ss",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,

                },

                caption: "ᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n\n" + Config.caption,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "📥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

const videolink = fbdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Downloading Your Facebook Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: "ᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n\n" + Config.caption,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "tt",

            alias: ["tiktok"],

            desc: "tiktok downloader",

            react:"🎊",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const ttdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

    

const videolink = ttdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Downloading Your Tiktok Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                

                caption: "ᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n\n" + Config.caption,

            }, {

                quoted: citel,

            });

 }

)


cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Downloading Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `dragon-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )


  cmd({

            pattern: "dadu",

            desc: "dadu", 

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (𝟺.𝟷.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

            

                let image = `https://api.botcahx.biz.id/api/randomgambar/dadu?apikey=${Config.botapikey}`

                citel.react("🎲");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )


cmd({
            
            pattern: "ttp",

            desc: "emoji infomation",

            category: "downloader"

            
            
            
            
        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (v𝟺.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

            

                let image = `https://api.botcahx.biz.id/api/maker/ttp?text=${text}&apikey=${Config.botapikey}`

                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )

cmd({

            pattern: "testvideo",

            desc: "video dl",

            react: "📽️",

            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
            if (!text) return     
            
const tvideo = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4-v2?url=${anu.url}`)

const videolink = tvideo.result.url

            citel.reply (`\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📽️ 𝚅𝙸𝙳𝙴𝙾 𝙸𝙽𝙵𝙾_ )* \n\n*┃⿻* *📄 ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👁 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *🎛 ᴀᴜᴛʜᴏʀ :* ${anu.author.name}\n\n*┗━━━━━━━━━━━━━━◆*`);
            return Void.sendMessage(citel.chat, {
                video: {
                    url: videolink ,

                },

                mimetype: "video/mp4",
                caption: "ᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n\n" + Config.caption,

            }, {

                quoted: citel,

            });

        }

    )
    
    
    cmd({

            pattern: "testsong",

            desc: "song dl",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {    

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

            if (!text) return     

            

const tsong = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp3?url=${anu.url}&apikey=prabath`)

const audiolink = tsong.download

            citel.reply (`\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎵 𝙰𝚄𝙳𝙸𝙾 𝙸𝙽𝙵𝙾_ )* \n\n*┃⿻* *📄 ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👁 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *🎛 ᴀᴜᴛʜᴏʀ :* ${anu.author.name}\n\n*┗━━━━━━━━━━━━━━◆*`);

            return Void.sendMessage(citel.chat, {

                audio: {

                    url: audiolink ,

                },

                mimetype: "audio/mpeg",

                

            }, {

                quoted: citel,

            });

        }

    )


cmd({

            
            pattern: "attp",

            desc: "emoji infomation",

            category: "downloader"

            

         
            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (ᴠ𝟺.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

            

                let image = `https://api.botcahx.biz.id/api/maker/attp?text=${text}&apikey=${Config.botapikey}`
                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )
