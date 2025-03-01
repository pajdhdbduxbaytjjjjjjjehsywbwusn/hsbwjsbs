const { cmd } = require("../command");

const _0x189672 = {
  pattern: "forward",
  desc: "forward msgs",
  alias: ["fo"],
  category: "owner",
  use: ".forward < Jid address >",
  filename: __filename
};
cmd(_0x189672, async (_0x292a07, _0x98b710, _0x51dcb2, {
  from: _0x3e1921,
  l: _0x122717,
  quoted: _0x50c083,
  body: _0x1f87b9,
  isCmd: _0x562a53,
  command: _0x46163a,
  args: _0x5c8a94,
  q: _0x3bea4e,
  isGroup: _0x497fe2,
  sender: _0xf73fe,
  senderNumber: _0xf22d0e,
  botNumber2: _0x161d12,
  botNumber: _0x14cc74,
  pushname: _0x4a8e17,
  isMe: _0x4abaa9,
  isOwner: _0x5edef1,
  groupMetadata: _0x2c9973,
  groupName: _0x4d89b4,
  participants: _0x29d521,
  groupAdmins: _0x26ad12,
  isBotAdmins: _0x38f4fc,
  isAdmins: _0x55b3d8,
  reply: _0x17dcde
}) => {
  if (!_0x5edef1) {
    return _0x17dcde("*Owner Only ❌*");
  }
  if (!_0x3bea4e || !_0x51dcb2.quoted) {
    return _0x17dcde("*give me message ❌*");
  }
  let _0x4c2a49 = {
    key: _0x98b710.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x98b710.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x4a959f = _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x19860f = require("mime-types");
    let _0x14bc8e = _0x19860f.extension(_0x4a959f);
    let _0x15ddbb = _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.fileName;
    _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x15ddbb ? _0x15ddbb : "file." + _0x14bc8e;
  }
  _0x4c2a49.message = _0x98b710.quoted;
  return _0x17dcde("*Message forwarded to:*\n\n " + _0x3bea4e);
});