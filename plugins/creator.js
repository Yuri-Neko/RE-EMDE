function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6282112080081@s.whatsapp.net')}\nitem1.TEL;waid=6282112080081:6282112080081\nitem1.X-ABLabel:Busy.\nURL;My Web: https://kyouka-website.vercel.app/\nEMAIL;Email Owner: nekololi@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=6283825121214:6283825121214\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
