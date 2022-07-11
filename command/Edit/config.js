const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6287838563349@s.whatsapp.net"]
global.namabotnya = 'AXV BOT'
global.namaownernya = 'AXV'
global.packname = 'By : AXV BOT'
global.author = 'https://axvstore.my.id'
global.sessionName = 'axv'
global.lolkey = 'Atakbotz'
global.dapkey = 'kontol???'
global.kirkey = 'KirBotz'
global.email = 'admin@axvstore.my.id'
global.group = 'https://chat.whatsapp.com/K7CyWPZ3fpq30bRziLLMrm'
global.youtube = 'https://youtube.com/channel/UCJ2vfcD8tVTXUs3Js0rkB6w'
global.website = 'https://www.axvstore.my.id'
global.github = ''
global.noown = 'https://wa.me/6287838563349'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '*[ WAIT ]* _Sedang diproses⏳ silakan tunggu sebentar!',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User AXV Bot, Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);