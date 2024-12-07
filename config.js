const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria,Lagos";
global.github=process.env.GITHUB|| "github.com/xLordkayx/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajNrqi7dmegpU2Yla1f";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajNrqi7dmegpU2Yla1f" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/e7g7d3.jpeg" || "https://files.catbox.moe/t54mcd.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝐋𝐨𝐫𝐝𝐊𝐚𝐲Tech" 
 

global.devs =  "2347045505096" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347045505096";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347045505096";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/e7g7d3.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_47_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1VEtWcFpwaWhrMlVpTEdtUUlHU2dEMDgzWEhWM25UZzNoQ0tUS1o4aElNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOZ1hVeU10SlJkV0FaOExTR1BXb3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjMTEzYTA3LWE5NWYtNDg1Ny1iZjYxLTk3YmZjNzgxNmM3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMTkyLFxuICAgICAgMjQ5LFxuICAgICAgMjM0LFxuICAgICAgMzEsXG4gICAgICA5OSxcbiAgICAgIDc4LFxuICAgICAgMjEyLFxuICAgICAgNTcsXG4gICAgICA2NyxcbiAgICAgIDAsXG4gICAgICA2NixcbiAgICAgIDE3MSxcbiAgICAgIDUwLFxuICAgICAgMjEwLFxuICAgICAgMjAxLFxuICAgICAgNjAsXG4gICAgICAxMTgsXG4gICAgICAxMzQsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDc2LFxuICAgICAgMTc0LFxuICAgICAgMzIsXG4gICAgICAxNjAsXG4gICAgICA5OCxcbiAgICAgIDE4MixcbiAgICAgIDEwNixcbiAgICAgIDE2NyxcbiAgICAgIDE1NixcbiAgICAgIDM2LFxuICAgICAgMTA2LFxuICAgICAgMTAxLFxuICAgICAgOTAsXG4gICAgICA2NCxcbiAgICAgIDg4LFxuICAgICAgMjUyLFxuICAgICAgODYsXG4gICAgICAyNDgsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIxR1paVkI3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ1NTA1MDk2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDE3MzA2MjA5NjA4Njc6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlLbU9JQkVPcTgwN29HR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGVkZYZUcrRDZUNmpraFErVjVKTnhraG1hRS96UlR5dHYvOERsaFBIcEhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRxbXVrTDRvWmIvNHh2ZTlWQ1BHcE9Rb2l6bTU2cDhsZVBSU2tmYUFFYkM1SmVUMjlRM3V3ZE5kRFk0bjhuM0NLQlZ3NVpzTGhjeGtpY2FhTjA2WkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE2WStPbmoweGtLRHV5TnB5Zk92MUVtVlNxamJPY2JZNlNWN0JqYy9CeWFMV3NWVUcyeHlPRi9QREVOUHAxVVR0VWZZRzN2VHVoZmczc2Nac1UvRkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDU1MDUwOTY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2MTUyMTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐋𝐨𝐫𝐝𝐊𝐚𝐲",
  packname: process.env.PACK_NAME || "𝑴𝑨𝑵𝑱𝑨𝑲𝑨𝒀",
  botname : process.env.BOT_NAME  || "𝐌𝐀𝐍𝐉𝐀𝐊𝐀𝐘",
  ownername:process.env.OWNER_NAME|| "𝐋𝐨𝐫𝐝𝐊𝐚𝐲",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝐌𝐀𝐍𝐉𝐀𝐊𝐀𝐘"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
