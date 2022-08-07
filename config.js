const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'V 2.0.1',
    ALIVE: process.env.ALIVE || "Hey",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || true,
    PMB: process.env.PMB || '*𝙳𝚘𝚗'𝚝 𝚜𝚎𝚗𝚍 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚕 𝚖𝚎𝚜𝚜𝚊𝚐𝚎𝚜, 𝙸'𝚖 𝚘𝚗𝚕𝚢 𝚒𝚗 𝚐𝚛𝚘𝚞𝚙𝚜 𝙱𝚕𝚘𝚌𝚔𝚍!!.....*',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    USERNAME: process.env.USERNAME || '',
    SESSION: process.env.SESSION || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us',
    PASSWORD: process.env.PASSWORD || '',
    BOT_INFO: process.env.BOT_INFO || '𝐏𝐀𝐀𝐓𝐇𝐔😻;𝑆𝑈𝐻𝐴𝐼𝐷;917560842435;https://i.imgur.com/F5TnK9j.jpeg;*Link Not Allowd*

        *By 𝐏𝐀𝐓𝐇𝐎𝐎𝐙𝐙😻*',
    RBG_KEY: process.env.RBG_KEY || 'tPg8PyfNSdpepViwDE7FqPJz',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA,
    BOT_NAME: process.env.BOT_NAME || 'ᴘᴀᴀᴛʜᴜ',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '𝑆𝑈𝐻𝐴𝐼𝐷;𝑆𝑈𝐻𝐴𝐼𝐷-𝐵𝑅𝑂;https://i.imgur.com/btgMI07.jpeg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || '3',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || '917902655741,0',
    LANGUAGE: process.env.LANGUAGE || 'manglish',
    DEBUG: DEBUG,
    ACR_A: "4b64f4e5401d1380e50b30d526def287",
    ACR_S: "uSVrKResE7wF4d6A1dtqvPWTTy3rBp3YjldsJSCh"
    };
