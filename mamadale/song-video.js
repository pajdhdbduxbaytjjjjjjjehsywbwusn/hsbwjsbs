const { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions')
cmd(
  {
    pattern: 'logo',
    desc: 'Create logos',
    category: 'other',
    filename: __filename,
  },
  async (
    _0x218f5d,
    _0x28282a,
    _0x208f73,
    {
      from: _0x1aa1bb,
      quoted: _0x15b4ef,
      body: _0x5a3cdd,
      isCmd: _0x5bae58,
      command: _0x1ef69b,
      args: _0x222de9,
      q: _0x34a07c,
      isGroup: _0x609391,
      sender: _0x3113d3,
      senderNumber: _0x142d20,
      botNumber2: _0x2c8f00,
      botNumber: _0x1c2333,
      pushname: _0x86c189,
      isMe: _0xb6eb8d,
      isOwner: _0x1c4b84,
      groupMetadata: _0x15d813,
      groupName: _0xc3c8d4,
      participants: _0xc36769,
      groupAdmins: _0x16780c, 
      isBotAdmins: _0x50a1e5,
      isAdmins: _0xa22e1c,
      reply: _0x18078b,
    }
  ) => {
    try {
      if (!_0x222de9[0]) {
        return _0x18078b('*_Please give me a text._*')
      }
      let _0xffdb95 =
        '*╔══════✮❁•°❀°•❁✮══════╗*\n*║ 🎡𝙍𝘼𝙎𝙃𝙐 𝙇𝙊𝙂𝙊 𝘾𝙍𝙀𝘼𝙏𝙀𝙍🎡*\n*╚══════✮❁•°❀°•❁✮══════╝*\n❢◥ ▬▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬▬ ◤❢\n🌸 1  ║ ➽ 𝐁𝐋𝐀𝐂𝐊 𝐏𝐈𝐍𝐆\n\n🌸 2  ║ ➽𝐁𝐋𝐀𝐂𝐊 𝐏𝐈𝐍𝐆𝟐\n\n🌸 3  ║ ➽ 𝐒𝐈𝐋𝐕𝐄𝐑 𝟑𝐃\n\n🌸 4  ║➽ 𝐍𝐀𝐑𝐔𝐓𝐎\n\n🌸 5  ║ ➽ 𝐃𝐈𝐆𝐈𝐓𝐀𝐋 𝐆𝐑𝐈𝐂𝐇\n\n🌸 6  ║ ➽ 𝐏𝐈𝐗𝐄𝐋 𝐆𝐑𝐈𝐂𝐇\n\n🌸 7  ║ ➽ 𝐂𝐎𝐌𝐈𝐂 𝐒𝐓𝐘𝐋𝐄\n\n🌸 𝟖  ║ ➽ 𝐍𝐄𝐎𝐍 𝐋𝐈𝐆𝐇𝐓\n\n🌸 𝟗  ║ ➽ 𝐅𝐑𝐄𝐄 𝐁𝐄𝐀𝐑\n\n🌸 𝟏𝟎 ║ ➽ 𝐃𝐄𝐕𝐈𝐋 𝐖𝐈𝐍𝐆\n\n🌸 𝟏𝟏 ║ ➽ 𝐒𝐀𝐃 𝐆𝐈𝐑𝐋\n\n🌸 𝟏𝟐 ║ ➽ 𝐋𝐄𝐀𝐕𝐄𝐒\n\n🌸 𝟏𝟑 ║ ➽ 𝐃𝐑𝐀𝐆𝐎𝐍 𝐁𝐄𝐋𝐋\n\n🌸 𝟏𝟒 ║ ➽ 𝐇𝐀𝐍𝐃 𝐖𝐑𝐈𝐓𝐓𝐈𝐍𝐆\n\n🌸 𝟏𝟓 ║➽ 𝐍𝐄𝐎𝐍 𝐋𝐈𝐆𝐇𝐓\n\n🌸 𝟏𝟔 ║ ➽ 𝟑𝐃 𝐂𝐀𝐒𝐓\n\n🌸 𝟏𝟕 ║ ➽ 𝐅𝐎𝐑𝐒𝐄𝐍 𝐂𝐇𝐈𝐒𝐓𝐌𝐀𝐒𝐒\n\n🌸 𝟏𝟖 ║ ➽ 𝟑𝐃 𝐁𝐀𝐋𝐎𝐎𝐍\n\n🌸 𝟏𝟗 ║ ➽ 𝟑𝐃 \n\n🌸 𝟐𝟎 ║ ➽ 𝐀𝐌𝐀𝐑𝐈𝐂𝐀𝐍 𝐅𝐋𝐀𝐆\n❢◥ ▬▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬▬ ◤❢\n\n> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*'
      const _0x39a514 = {
          newsletterJid: '',
          newsletterName: '𝐑𝐀𝐒𝐇𝐔 𝐋𝐎𝐆𝐎 ',
          serverMessageId: 999,
        },
        _0x5a943d = {
          mentionedJid: [_0x208f73.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: _0x39a514,
        },
        _0x4b6716 = {
          text: _0xffdb95,
          contextInfo: _0x5a943d,
        }
      let _0x581ab0 = await _0x218f5d.sendMessage(_0x1aa1bb, _0x4b6716, {
        quoted: _0x28282a,
      })
      _0x218f5d.ev.on('messages.upsert', async (_0x2e0858) => {
        const _0x2a2572 = _0x2e0858.messages[0]
        if (!_0x2a2572.message || !_0x2a2572.message.extendedTextMessage) {
          return
        }
        const _0x45b81e = _0x2a2572.message.extendedTextMessage.text.trim()
        if (
          _0x2a2572.message.extendedTextMessage.contextInfo &&
          _0x2a2572.message.extendedTextMessage.contextInfo.stanzaId ===
            _0x581ab0.key.id
        ) {
          switch (_0x45b81e) {
            case '1':
              let _0x4ec74c = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x4ec74c.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '2':
              let _0x46d2d2 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x46d2d2.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '3':
              let _0x3a041b = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x3a041b.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '4':
              let _0x33ee0f = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x33ee0f.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '5':
              let _0x34bc40 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x34bc40.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '6':
              let _0x2114a3 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x2114a3.result.download_url },
                  caption: '> *\xA9 > *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '7':
              let _0x1bb969 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x1bb969.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '8':
              let _0x338421 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x338421.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '9':
              let _0x893904 = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x893904.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '10':
              let _0x4ba5fb = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x4ba5fb.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '11':
              let _0x598ffc = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x598ffc.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '12':
              let _0x26ef9c = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x26ef9c.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '13':
              let _0x51ac7d = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x51ac7d.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '14':
              let _0x5e6aec = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x5e6aec.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '15':
              let _0xcdf22e = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0xcdf22e.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '16':
              let _0x4feb5e = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x4feb5e.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '17':
              let _0xf4046a = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0xf4046a.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '18':
              let _0x144b2c = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x144b2c.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '19':
              let _0x31d0fe = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x31d0fe.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            case '20':
              let _0x23294a = await fetchJson(
                'https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=' +
                  _0x34a07c
              )
              await _0x218f5d.sendMessage(
                _0x1aa1bb,
                {
                  image: { url: '' + _0x23294a.result.download_url },
                  caption: '> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ❀*',
                },
                { quoted: _0x28282a }
              )
              break
            default:
              _0x18078b('*_Invalid number.Please reply a valid number._*')
          }
        }
      })
    } catch (_0x22b33e) {
      console.log(_0x22b33e)
      _0x18078b('' + _0x22b33e)
    }
  }
)
