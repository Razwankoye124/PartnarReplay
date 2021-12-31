const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '3wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بـروڤـویس کـەسـەکـەم بـو ئـەوەێ بـتـوانـم جـویـن بـکـەم **'); 
 
} 

} 

});

client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "ریکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ریکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});

client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` مـن دام نـا بـەس تـوش دایـنـەێ  https://discord.gg/7t3qVxn`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("740360322103115799").send(
`> ئـەم گـوڵـە ڕیکـلامەکـەێ کـرد: <@${message.author.id}>
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ریکلام بـۆ مـن بـنیـرن`) 
});




client.login("OTI2NjEzNDIwMjg2MDIxNjgz.Yc-N_w.Kog0VkySRwdcl_JNJbaTj9UrfAI");// تـۆکیـن بـوت 

///Code By MrTiGER///
