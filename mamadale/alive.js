const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "alive",
    alias: ["status"],
    desc: "Check if the bot is alive",
    category: "main",
    react: "❄️",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    { from, pushname, reply }
  ) => {
    try {
      // Get current hour
      let currentHour = new Date().getHours();
      let greeting;

      // Set greeting based on correct time periods
      if (currentHour >= 5 && currentHour < 12) {
        greeting = "*සුබ උදෑසනක් ලස්සන ළමයෝ 🌅*";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "*සුබ දහවලක් ලස්සන ළමයෝ 🌞*";
      } else if (currentHour >= 17 && currentHour < 20) {
        greeting = "*සුබ සැන්දෑවක් ලස්සන ළමයෝ 🌆*";
      } else {
        greeting = "*සුබ රාත්‍රියක් ලස්සන ළමයෝ 🌙*";
      }

      let aliveText = `࿘ _${greeting} _
╭─━━❰ *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃* ❱━━─╮  
│
│ •••𝙸 𝙰𝙼 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃•••
│
│ *°°°👋 හායි කෝමද ${pushname}!°°°*
│ 
│ * ⌚ *яυи τιмє* - 
│ ${runtime(process.uptime())}
│* 💾 *яαм υѕє* - 
│${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│
│* 🗃️ *нοѕτ иαмє* - 
│ ${os.hostname()}
╰─━━━━━━❰ *ᴛʜᴀɴᴋ ʏᴏᴜ!* ❱━━━━━━─╯  

> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 🫟*`;

      // Send the alive message
      await robin.sendMessage(
        from,
        {
          text: aliveText,
          contextInfo: {
            externalAdReply: {
              title: "🌹𝐐𝚵𝚵𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃‼️",
              body: "> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 🫟*",
              thumbnailUrl: "https://i.ibb.co/MDX3Bbpt/9999.jpg",
              sourceUrl: "https://whatsapp.com/channel/0029Vb2GOyk6rsQwJSBa7T2h",
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m }
      );

      console.log(`✅ Alive command used in: ${from}`);
    } catch (e) {
      console.error("Alive Command Error:", e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
