const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "tiktokstalk",
  alias: ["tstalk", "ttstalk", "ttps"],
  react: "📱",
  desc: "Fetch TikTok user profile details.",
  category: "search",
  filename: __filename
}, async (conn, m, store, { from, args, q, reply }) => {
  try {
    if (!q) {
      return reply("❎ Please provide a TikTok username.\n\n*Example:* .tiktokstalk rashumusic0715");
    }

    const apiUrl = `https://api.siputzx.my.id/api/stalk/tiktok?username=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data.status) {
      return reply("❌ User not found. Please check the username and try again.");
    }

    const user = data.data.user;
    const stats = data.data.stats;

    const profileInfo = `🎭 *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐕2 TikTok Profile Stalker* 🎭

👤 *Username:* @${user.uniqueId}
📛 *Nickname:* ${user.nickname}
✅ *Verified:* ${user.verified ? "Yes ✅" : "No ❌"}
📍 *Region:* ${user.region}
📝 *Bio:* ${user.signature || "No bio available."}
🔗 *Bio Link:* ${user.bioLink?.link || "No link available."}

📊 *Statistics:*
👥 *Followers:* ${stats.followerCount.toLocaleString()}
👤 *Following:* ${stats.followingCount.toLocaleString()}
❤️ *Likes:* ${stats.heartCount.toLocaleString()}
🎥 *Videos:* ${stats.videoCount.toLocaleString()}

📅 *Account Created:* ${new Date(user.createTime * 1000).toLocaleDateString()}
🔒 *Private Account:* ${user.privateAccount ? "Yes 🔒" : "No 🌍"}

🔗 *Profile URL:* https://www.tiktok.com/@${user.uniqueId}

> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 🫟*
`;

    const profileImage = { image: { url: user.avatarLarger }, caption: profileInfo };

    await conn.sendMessage(from, profileImage, { quoted: m });
  } catch (error) {
    console.error("❌ Error in TikTok stalk command:", error);
    reply("⚠️ An error occurred while fetching TikTok profile data.");
  }
});
