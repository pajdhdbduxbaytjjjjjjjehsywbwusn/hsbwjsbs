/*ඔන්න දාලා බලලා මට කියන්න වැඩද කියලා*/

const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

const { ytmp3 } = require("@vreden/youtube_scraper");
const yts = require("yt-search");
const fetch = require("node-fetch");

cmd({
    pattern: "song",
    use: '.song <query>',
    react: "🎧",
    desc: "Search and download a song",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("🔍 *Please enter a song name!*");

        const searchResults = await yts(q);
        if (!searchResults.videos.length) return reply("❌ *No results found!*");

        let video = searchResults.videos[0];

        const caption = `🎵 *QUEEN NETHU SONG DOWNLOADER* 🎵\n\n` +
                        `🔹 *Title:* ${video.title}\n` +
                        `👁 *Views:* ${video.views}\n` +
                        `🕒 *Duration:* ${video.timestamp}\n` +
                        `🔗 *URL:* ${video.url}\n\n` +
                        `_📥 Downloading... Please wait!_`;

        reply(caption);

        // MP3 Download
        const songData = await ytmp3(video.url, "128");
        if (!songData.download.url) return reply("❌ *Error:* Unable to fetch audio!");

        await conn.sendMessage(from, {
            audio: { url: songData.download.url },
            mimetype: "audio/mpeg",
            fileName: `${video.title}.mp3`
        }, { quoted: mek });

        // Document Download
        await conn.sendMessage(from, {
            document: { url: songData.download.url },
            mimetype: "audio/mpeg",
            fileName: `${video.title}.mp3`,
            caption: '> ⚜️ _𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝_ *- :* *_SL NETHUMAX_ ᵀᴹ*',
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
