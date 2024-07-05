const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("917005539105")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'MANOJ-XD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Manoj Ser' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1tR1V4Wm53VTVKK2JsQmsxNjEremhDNGs2bHF1NnY0d1JIZkpCOWxrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTF0c0ZwYjd2SzMrUG55S3ZVRFMyR0hqK1JuVjVLU05WYjJxaEFiajNtUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTm1JNFRVSWswQWF2Q3hGcUpIOEpDZm5CR2pRTWYzblRIV3MrNkI5VTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMzRGQ1pJSEE1T3RCODBKNWEyQjB3MldOaktFaCtSSVlwQ3JlQnNBV3l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCdlUwdDBIR0ZIeDVERkhlQ05MTFFmSUc5akhPL096WHpIaVBnM21BVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZHazlNTzFNeGx4ckFJc3hhVVNmM2I4d1JRZjdwYjdldHUxRlY5TmxPbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFNaTNVbE1Fem92eWdOdENsaEYza1Nsb1d5NWtlZ20zU2lWbFhxalNGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTSsraGJXR1gzY20yeWgvYUZhcDFIVFlUdjlhT0VEMXBrdG9hVWV2RExoVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5MWi83ZUwwcWVaTXozRmZ0VXNra040RHVvMjZjN1pmbm9NY2ZRQlgxOGNZb2ltaTMxZjc4U25UeG5QcVl6VWsvb1hjN0ljV20vb0RWRzNBTVhhbEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiZzdMK0NEN2RtZmI0Z2lTSnVuWmhiazdLWElKOE96MEp2VUc2QXNUaGhHaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid1ZMaldBcDlSUUNqSUZDLTZ4NUtYZyIsInBob25lSWQiOiIwZjljN2EwMi03NzllLTRjNGQtOGE3ZS0yY2IxMDIzZTJhMWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUg0ZnhZTVA4MklzakVMTVBwa0NYYXpXemRBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBZY0ltMFo0dlJmUWdKTzV1d0NLWE5iRTlaTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKQUNaMUZYSCIsIm1lIjp7ImlkIjoiOTE3MDA1NDM5MTA1OjIxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKL1ZvS0lCRUtITm9MUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiL0pENCtWVFFHQ2ViZUE2NkRKU1JScW5mTUs1c0o3TC9tTTJITlZPVmpJPSIsImFjY291bnRTaWduYXR1cmUiOiJ0WUR1WGxKN0VWZ1o4RUliY3FQMmUzKzIyMVRtekxjSmJoODZhaHNPcjVPeFVySFB5NVlCcTBMbEZIeUVIV2RqVXFkLzNJeEFqZkJRM2tVM2lPZjJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT04vdDFpZjQvMUtucHVpR1BHSkZVZFBHeFR2VmNwcXlJTlVTTVlwblA5U0NPZ2ZTRHdkSDhmdHVONEx6VDNPSG9JcGpxR0VrVVQ1bXFzcms5U1NGRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMDU0MzkxMDU6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVy95UStQbFUwQmdubTNnT3VneVVrVWFwM3pDdWJDZXkvNWpOaHpWVGxZeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDE5ODgyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMWkcifQ== : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
