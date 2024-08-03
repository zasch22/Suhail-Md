const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061141859";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicGJ0M1ZHNE9EdXp1RTQvcW1SQXMvQ1crZnBaRnhOSDBlYndxdW1GajNFST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicG5qU19JWnFTNi1FUkhTR3hSVUhqd1wiLFxuICBcInBob25lSWRcIjogXCI1YzA1YWZhZS1iNzRlLTQxNjItOWFmMy1lNTIyNThiM2ZkYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMjU1LFxuICAgICAgMzgsXG4gICAgICAxNSxcbiAgICAgIDE2NyxcbiAgICAgIDE0NixcbiAgICAgIDE3MCxcbiAgICAgIDY3LFxuICAgICAgMTc5LFxuICAgICAgMTU2LFxuICAgICAgMjM3LFxuICAgICAgMTI3LFxuICAgICAgMTE1LFxuICAgICAgMSxcbiAgICAgIDEyNyxcbiAgICAgIDE3OCxcbiAgICAgIDQyLFxuICAgICAgMTgxLFxuICAgICAgNDksXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDExNyxcbiAgICAgIDI0OSxcbiAgICAgIDIzMixcbiAgICAgIDE0NixcbiAgICAgIDczLFxuICAgICAgNzEsXG4gICAgICAxMTgsXG4gICAgICAyMTEsXG4gICAgICAxOTUsXG4gICAgICA2MSxcbiAgICAgIDE1NixcbiAgICAgIDE1MixcbiAgICAgIDI1MyxcbiAgICAgIDIyMSxcbiAgICAgIDE2MyxcbiAgICAgIDAsXG4gICAgICAyMzgsXG4gICAgICAxOTQsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTGs0b1lGRU8reHVMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJhWDBvNmJjMmZ4Z3NSK1dma0VmTWdybHcxc2J0M1RlZGJES0ovUW5xQ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3psVkZYTUQvQ2tnYVlBVW9TV1BUdlVTRWdKK0tQSjUvVTBCRm1LQWhLaFl1R1JNekFpK3dHR3MzS2dUKzkxQ2tma3lLL2tFeVRFamxDY2EvVU16QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU3QzWGg4NFlDYjFuMWJGemNLSDRlYURoeW9oUmxCYkhXakVXR1BOWkVQOG9hbTU4cHBvZFZpM2xqSkxZWDVGeDZWWlRCY2p4NGx3SzI0dmFyM2VRQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYxMTQxODU5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFY2NlbnRyaWMgdGhlcnBpc3RcIixcbiAgICBcImxpZFwiOiBcIjkzNjIyMjAwNDU1MzI4OjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYxMTQxODU5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjg1Njg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlBUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoeEZDMmRyN3VON1duZm1UdDNab24zTlRlV3NGRWZvS2Q3ZGhsOVI5Q2JRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTYzNzg2OTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjY4MTcyMzA4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
