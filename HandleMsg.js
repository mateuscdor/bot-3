require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const util = require('util')
const axios = require('axios')
const gis = require('async-g-i-s')
const FormData = require('form-data')
const os = require('os')
const { TTScraper } = require('tiktok-scraper-ts')
const stalkuy = new TTScraper()
const speed = require('performance-now')
const fetch = require('node-fetch')
const ytdown = require('ytdl-core')
const readline = require('readline')
const chalk = require('chalk')
const translatte = require('translatte')
const ms = require('parse-ms')
const bent = require('bent')
const path = require('path')
const Math_js = require('mathjs');
const bdr = require('rumus-bdr')
const gplay = require('google-play-scraper')
const appstore = require('app-store-scraper')
const { igApi } = require('insta-fetcher')
const insta = new igApi('40194017622%3AaRqzskOBlc8KpX%3A24')
const ffmpeg = require('fluent-ffmpeg')
const spotdl = require('spotifydl-core').default
const credentials = {
	clientId: '8f8a4152d7784af085e96347574be51f',
	clientSecret: 'c009525564304209b7d8b705c28fd294'
}
const spotify = new spotdl(credentials)
const spotapi = require('spotify-finder')
const spotsearch = new spotapi({
	consumer: {
		key: '271f6e790fb943cdb34679a4adcc34cc',
		secret: 'c009525564304209b7d8b705c28fd294'
	}
})
const canvas = require('canvacord')
const hxzapi = require('hxz-api')
const request = require('request-promise')
const emojiUnicode = require('emoji-unicode')
const get = require('got')
const { fetchJson } = require('./utils/fetcher')
const appRoot = require('app-root-path')
const low = require('lowdb')
const lol = require('xfarr-api')
const google = require('google-it')
const { stdout } = require('process');
const FileSync = require('lowdb/adapters/FileSync')
const limitFunc = require('./function/limit')
const db_group = new FileSync(appRoot + '/lib/data/group.json')
const db = low(db_group)
db.defaults({ group: [] }).write()

const {
	removeBackgroundFromImageBase64
} = require('remove.bg')

const {
	exec
} = require('child_process')

const { tebak_gambar } = require('./lib/tebakgambar.js')

const {
	menuId,
	cekResi,
	urlShortener,
	meme,
	translate,
	getLocationData,
	images,
	yt,
	resep,
	rugaapi,
	scrape,
	downloader,
	sticker,
	level
} = require('./lib')


const {
	stickerburn,
	stickerlight
} = require('./lib/sticker')

const {
	msgFilter,
	color,
	processTime,
	isUrl,
	download
} = require('./utils')

const {
	uploadImages,
	custom,
	picturemis,
} = require('./utils/fetcher')

const fs = require('fs-extra')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const _autostiker = JSON.parse(fs.readFileSync('./lib/helper/autostiker.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/database/afk.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/database/level.json'))
const _nsfw = JSON.parse(fs.readFileSync('./lib/database/group/nsfw.json'))

let isVoice = ''
let isQuotedVoice = ''
let dbcot = JSON.parse(fs.readFileSync('./lib/database/bacot.json'))
let dsay = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/helper/antilink.json'))
let prem = JSON.parse(fs.readFileSync('./lib/database/prem.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let liststicker = JSON.parse(fs.readFileSync('./lib/database/liststiker.json'))
let listvn = JSON.parse(fs.readFileSync('./lib/database/listvn.json'))
let cogann = JSON.parse(fs.readFileSync('./lib/helper/cogan.json'))
let cecann = JSON.parse(fs.readFileSync('./lib/helper/cecan.json'))
let listimg = JSON.parse(fs.readFileSync('./lib/database/listimage.json'))
let limit = JSON.parse(fs.readFileSync('./settings/limit.json'))
let {

	groupLimit,
	limitCount,
	memberLimit,
	banChats,
	cakrayp,
	zenzapis,
	lolhuman,
	dapuhyapi,
	zekais,
	apikeyvinz, //IF YOU HAVE THIS APIKEY, YOU CAN CUSTOM IT!
	authorstc,
	packstc,
} = setting

const {
	apiNoBg,
	apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))

function formatin(duit) {
	let reverse = duit.toString().split('').reverse().join('');
	let ribuan = reverse.match(/\d{1,3}/g);
	ribuan = ribuan.join('.').split('').reverse().join('');
	return ribuan;
}



function waktu(seconds) { // TOBZ
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Day," : " Day,") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hours," : " Hours,") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minutes," : " Minutes,") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Second," : " Second") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}


const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const inArray = (needle, haystack) => {
	let length = haystack.length;
	for (let i = 0; i < length; i++) {
		if (haystack[i].id == needle) return i;
	}
	return false;
}


const errorurl = 'https://f.top4top.io/p_23518cid00.jpeg'
const errorurl2 = 'https://f.top4top.io/p_23518cid00.jpeg'
const isMuted = (chatId) => {
	if (muted.includes(chatId)) {
		return false
	} else {
		return true
	}
}

function identify(buffer) {
	return new Promise(async (resolve, reject) => {
		const bodyForm = new FormData()
		const pathh = './audio.mp3'
		bodyForm.append('audio', buffer, 'file.mp3')
		bodyForm.append('apikey', `${apikeyvinz}`)
		axios('https://api.zeks.me/api/searchmusic', {
			method: 'POST',
			headers: {
				"Content-Type": "multipart/form-data",
				...bodyForm.getHeaders()
			},
			data: bodyForm
		})
			.then(({ data }) => {
				resolve(data)
			}).catch(reject)
	})
}

function banChat() {
	if (banChats == true) {
		return false
	} else {
		return true
	}
}


var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')
module.exports = HandleMsg = async (axv, message) => {
	try {
		const { type, id, fromMe, from, t, sender, buttons, selectedButtonId, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList, } = message
		let { body } = message
		var { name, formattedTitle, gcok } = chat
		let { pushname, verifiedName, formattedName } = sender
		pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
		const botNumber = await axv.getHostNumber() + '@c.us'
		const groupId = isGroupMsg ? chat.groupMetadata.id : ''
		const groupAdmins = isGroupMsg ? await axv.getGroupAdmins(groupId) : ''
		const isGroupAdmins = groupAdmins.includes(sender.id) || false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
		const pengirim = sender.id
		const serial = sender.id
		const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
		const isNsfwOn = _nsfw.includes(chatId)
		const betime = moment(t * 1000).format('DD/MM/YY')
		const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const userId = sender.id.substring(9, 13)
		const blockNumber = await axv.getBlockedIds()
		const groupMembers = isGroupMsg ? await axv.getGroupMembersId(groupId) : ''
		const GroupLinkDetector = antilink.includes(chatId)

		// Bot Prefix
		const commands = caption || body || ''
		const command = commands.toLowerCase().split(' ')[0] || ''
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~`,*zxcv!?@#$%^&.\/\\©^]/.test(command) ? command.match(/^[!?#$,^.,/\/\\©^]/gi) : '-'
		global.prefix
		body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video' || type === 'buttons_response') && caption) && caption.startsWith(prefix)) ? caption : ''
		const arg = body.trim().substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const q = args.join(' ')
		const isBlocked = blockNumber.includes(sender.id)
		const isCmd = body.startsWith(prefix)
		const tms = (Date.now() / 1000) - (timeStart);
		const cts = waktu(tms)
		const waver = await axv.getWAVersion()
		const uaOverride = process.env.UserAgent
		const url = args.length !== 0 ? args[0] : ''
		const isVideo = type === 'video'
		const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		const isQuotedGif = quotedMsg && quotedMsg.type === 'gif'
		const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
		const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
		const isQuotedFile = quotedMsg && quotedMsg.type === 'file'
		const reason = q ? q : 'Gada'
		const gifcrop = { crop: true, square: 240, fps: 30, loop: 0, startTime: `00:00:00.0`, endTime: `00:00:10.0` }
		const gifxyz = { crop: false, square: 240, fps: 30, loop: 0, startTime: `00:00:00.0`, endTime: `00:00:10.0` }
		const StickerMetadata = { author: authorstc, pack: packstc, keepScale: true }
		const StickerMetadatacrop = { author: authorstc, pack: packstc, keepScale: false }

		// [IDENTIFY]
		const ownerNumber = setting.Owner[0]
		const errorImg = "https://f.top4top.io/p_2364tc4cl0.jpg"
		const isOwnerBot = setting.Owner.includes(pengirim)
		const isOwner = setting.Owner.includes(pengirim)
		const isOwnerB = setting.Owner.includes(pengirim)

		const isBanned = banned.includes(pengirim)
		const isSimi = simi.includes(chatId)
		const isNgegas = ngegas.includes(chatId)
		const isAutoStikerOn = _autostiker.includes(chat.id)
		const isImage = type === 'image'
		const isPrem = prem.includes(pengirim)

		//
		if (isCmd && !isGroupMsg) { console.log(color('[EXEC]', 'magenta'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(`${pushname}`, 'magenta')) }
		if (isCmd && isGroupMsg) { console.log(color('[EXEC]', 'magenta'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(`${pushname}`, 'magenta'), 'in', color(name || formattedTitle, 'aqua')) }

		if (chats == 'Assalamualaikum') {
			axv.reply(from, 'Waalaikumsalam wr wb.', id)
		}
		if (chats == 'assalamualaikum') {
			axv.reply(from, 'Waalaikumsalam wr wb.', id)
		}
		if (chats == 'Terimakasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'terimakasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Makasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'tq') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'tengkyu') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Tengkyu') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Tq') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Terima kasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'terima kasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Thx') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'thx') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'makasih') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'makasii') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Makasii') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'makasi') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Makasi') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'mks') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Mks') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'mksi') {
			axv.reply(from, 'Iya sama-sama..', id)
		}
		if (chats == 'Hallo') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hallo') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Hai') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Hello') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hello') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Halo') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'halo') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hi') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Hi') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'p') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'P') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hy') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Hy') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hay') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Hay') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Bang') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'bang') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'hai') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'kak') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Kak') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Tes') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Bot') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'bot') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'Om') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}
		if (chats == 'om') {
			axv.sendPtt(from, './media/menu.mp3', id)
		}

		if (mentionedJidList.includes(ownerNumber)) { /*Y'ALL CAN CUSTOM THIS WHATEVER YOU WANT!*/
			const sends = sender.id
			const ras = await axv.getProfilePicFromServer(sends)
			if (ras == undefined) {
				var pfp = 'https://f.top4top.io/p_2364tc4cl0.jpg'
			} else {
				var pfp = ras
			}
			axv.reply(from, 'ngapain tag Owner ku???\npc aja kali sabii', id).then(() => {
				axv.sendFileFromUrl(ownerNumber, pfp, 'img.jpg', `*Note Call*\n\n*From:* ${pushname}\n*Group:* ${name}\n*Nomor:* wa.me/${serial.replace(/@c.us/g, '')}\n*Text:* ${chats}`)
			})
		}

		// TEBAK GAMBAR BY MRHRTZ
		if (fs.existsSync(`./lib/tebak-gambar/${from}.json`)) {
			const badan = chats.toLowerCase();
			const datana = JSON.parse(
				fs.readFileSync(`./lib/tebak-gambar/${from}.json`)
			);
			datana.listed.push(chats);
			fs.writeFileSync(
				`./lib/tebak-gambar/${from}.json`,
				JSON.stringify(datana, null, 2)
			);
			if (badan.includes(datana.data.answer.toLowerCase())) {
				console.log(color("Jawaban benar oleh : " + pushname, 'aqua'));
				axv.reply(
					from,
					`Selamat! ${pushname} anda benar ✅\n\nMau main lagi? ketik : *!tebakgambar*`,
					id
				);
				fs.unlinkSync(`./lib/tebak-gambar/${from}.json`);
			}
		}

		// EVALUATE FOR OWNER ONLY!
		if (
			chats.startsWith(">> ") &&
			isOwner
		) {
			exec(chats.slice(3), (err, stdout, stderr) => {
				if (err) {
					axv.reply(from, util.format(err));
					return;
				}
				axv.reply(from, util.format(stdout.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "")), id);
			});
		} else if (
			chats.startsWith(">>> ") &&
			isOwner
		) {
			try {
				const datainput = chats.slice(4);
				axv.reply(from, util.format(eval(datainput)), id);
			} catch (error) {
				axv.reply(from, util.format(`*Error unexpected* :\n\n${error}`), id);
			}
		}

		// ROLE (Change to what you want, or add) and you can change the role sort based on XP.
		const levelRole = level.getLevelingLevel(sender.id, _level)
		var role = 'Copper V'
		if (levelRole >= 5) {
			role = 'Copper IV'
		} else if (levelRole >= 10) {
			role = 'Copper III'
		} else if (levelRole >= 15) {
			role = 'Copper II'
		} else if (levelRole >= 20) {
			role = 'Copper I'
		} else if (levelRole >= 25) {
			role = 'Silver V'
		} else if (levelRole >= 30) {
			role = 'Silver IV'
		} else if (levelRole >= 35) {
			role = 'Silver III'
		} else if (levelRole >= 40) {
			role = 'Silver II'
		} else if (levelRole >= 45) {
			role = 'Silver I'
		} else if (levelRole >= 50) {
			role = 'Gold V'
		} else if (levelRole >= 55) {
			role = 'Gold IV'
		} else if (levelRole >= 60) {
			role = 'Gold III'
		} else if (levelRole >= 65) {
			role = 'Gold II'
		} else if (levelRole >= 70) {
			role = 'Gold I'
		} else if (levelRole >= 75) {
			role = 'Platinum V'
		} else if (levelRole >= 80) {
			role = 'Platinum IV'
		} else if (levelRole >= 85) {
			role = 'Platinum III'
		} else if (levelRole >= 90) {
			role = 'Platinum II'
		} else if (levelRole >= 95) {
			role = 'Platinum I'
		} else if (levelRole > 100) {
			role = 'Exterminator'
		}

		const mess = {
			grouponly: 'Fitur ini hanya bisa digunakan didalam Grup!',
			restmes: 'Rest API sedang error',
			sendfileaudio: '*_Tunggu sebentar, audio sedang dikirim_*',
			sendfilevideo: '*_Tunggu sebentar, video sedang dikirim_*',
			wait: '*[ WAIT ]* _Sedang diproses⏳ silakan tunggu sebentar!_\n\n```~AXV-Bot```',
			nsfwnoton: 'Fitur NSFW belum aktif pada chat ini,ketik *#nsfw on* Untuk menyalakan fitur ini.',
			nsfwalready: 'Fitur NSFW sudah aktif sebelumnya di grup ini',
			nsfwoff: 'Fitur NSFW berhasil dimatikan',
			menyu: '*[ WAIT ]* _Menu Akan Segera ditampilkan⏳._',
			nsfwon: 'Fitur NSFW berhasil diaktifkan',
			prem: `*[ PREMIUM ONLY! ]*\nMau jadi user premium?? Ketik *${prefix}premium*`,
			error: {
				St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
				Ti: `[❗] Replay sticker dengan caption *${prefix}stickertoimg* atau tag sticker yang sudah dikirim`,
				Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
				Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
				Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
				Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
				Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
				Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
				Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
				Bk: '[❗] Bot tidak bisa memblockir Owner',
				Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
				Iv: '[❗] Link yang anda kirim tidak valid!'
			}
		}



		const addAfk = (userId, time) => {
			let obj = { id: `${userId}`, time: `${time}`, reason: `${reason}` }
			_afk.push(obj)
			fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
		}

		const getAfk = (userId) => {
			let isAfk = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					isAfk = true

				}
			})
			return isAfk
		}

		const getAfkReason = (userId) => {
			let position = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					position = i
				}
			})
			if (position !== false) {
				return _afk[position].reason
			}
		}

		const getAfkTime = (userId) => {
			let position = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					position = i
				}
			})
			if (position !== false) {
				return _afk[position].time
			}
		}

		const getAfkId = (userId) => {
			let position = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					position = i
				}
			})
			if (position !== false) {
				return _afk[position].id
			}
		}


		const isAfkOn = getAfk(sender.id)
		if (isGroupMsg) {
			const checking = getAfk(sender.id)
			for (let ment of mentionedJidList) {
				if (getAfk(ment)) {
					const getId = getAfkId(ment)
					const getReason = getAfkReason(getId)
					const getTime = getAfkTime(getId)
					await axv.reply(from, `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`, id)
					axv.sendText(userId, `Seseorang telah tag anda bernama @{pushname}`)
				}
			}
			if (checking && !isCmd) {
				_afk.splice(sender.id, 1)
				fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
				axv.sendTextWithMentions(from, `*@${sender.id.replace(/@c.us/g, '')} SEKARANG TIDAK AFK*`)
			}
		}
		function isLimit(id) {
			if (isOwnerB) { return false; }
			let found = false;
			for (let i of limit) {
				if (i.id === id) {
					let limits = i.limit;
					if (limits >= limitCount) {
						found = true;
						axv.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
						return true;
					} else {
						limit
						found = true;
						return false;
					}
				}
			}
			if (found === false) {
				let obj = { id: `${id}`, limit: 1 };
				limit.push(obj);
				fs.writeFileSync('./settings/limit.json', JSON.stringify(limit));
				return false;
			}
		}
		function limitAdd(id) {
			if (isOwnerB) { return; }
			var found = false;
			Object.keys(limit).forEach((i) => {
				if (limit[i].id == id) {
					found = i
				}
			})
			if (found !== false) {
				limit[found].limit += 1;
				fs.writeFileSync('./settings/limit.json', JSON.stringify(limit));
			}
		}

		//fitur anti link
		if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isOwner) {
			if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
				const inviteLink1 = await axv.getGroupInviteLink(groupId);
				if (chats.includes(inviteLink1)) return axv.reply(from, `Ini Link Group *${name}* Kamu tidak akan dikick`, id)
				const check = await axv.inviteInfo(chats);
				if (!check) {
					return
				} else {
					axv.reply(from, '*[GROUP LINK DETECTOR]*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup!', id).then(() => {
						axv.removeParticipant(groupId, sender.id)
					})
				}
			}
		}

		// Leveling [BETA] by Slavyan
		if (isGroupMsg && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
			try {
				level.addCooldown(sender.id)
				const currentLevel = level.getLevelingLevel(sender.id, _level)
				const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
				const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
				level.addLevelingXp(sender.id, amountXp, _level)
				if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
					level.addLevelingLevel(sender.id, 1, _level)
					const userLevel = level.getLevelingLevel(sender.id, _level)
					const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
					await axv.reply(from, `*── 「 LEVEL UP 」 ──*\n\n- *Name*: ${pushname}\n- *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n- *Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n- *Role*: *${role}*`, id)
				}
			} catch (err) {
				console.error(err)
			}
		}


		if (isAutoStikerOn && isMedia && isImage) {
			const mediaData = await decryptMedia(message, uaOverride)
			const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
			await axv.sendImageAsSticker(from, imageBase64, StickerMetadata)
			console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
		}

		// Kerang Menu

		const estetek = [
			"https://i.ibb.co/Xk1kggV/Aesthetic-Wallpaper-for-Phone.jpg",
			"https://i.ibb.co/wBNyv8X/image.jpg",
			"https://i.ibb.co/hgcJbg7/Leaving-Facebook.jpg",
			"https://i.ibb.co/27TW3bT/Pinterest.jpg",
			"https://i.ibb.co/2MR16Ct/Image-about-vintage-in-ALittle-Bit-Of-This-And-That-by-Little-Nerdy-Gnome.jpg",
			"https://i.ibb.co/WfrzTWH/minteyroul-on-We-Heart-It.jpg",
			"https://i.ibb.co/dMpkfWT/1001-Kreative-Aesthetic-Wallpaper-Ideen-f-r-das-Handy.jpg",
			"https://i.ibb.co/cN3Br2J/red-grunge-wallpaper-dark-edgy-aesthetic-collage-background-trendy-cool-dark-red-iphone-wallpaper.jpg",
			"https://i.ibb.co/c8QMXZv/ee16de425985d4a1b628dddc1461b546.jpg"
		]


		const menupict = "https://f.top4top.io/p_2364tc4cl0.jpg"

		const apakah = [
			'Ya',
			'Tidak',
			'Coba Ulangi'
		]

		const bisakah = [
			'Bisa',
			'Tidak Bisa',
			'Coba Ulangi'
		]

		const kapan = [
			'1 Minggu lagi',
			'1 Bulan lagi',
			'1 Tahun lagi',
			'100 tahun lagi',
			'gatau',
			'2030',
			'1 Jam lagi',
			'1 Menit lagi'
		]

		const rate = [
			'100%',
			'95%',
			'90%',
			'85%',
			'80%',
			'75%',
			'70%',
			'65%',
			'60%',
			'55%',
			'50%',
			'45%',
			'40%',
			'35%',
			'30%',
			'25%',
			'20%',
			'15%',
			'10%',
			'5%'
		]


		// Filter Banned People
		if (isBanned && isCmd) {
			console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(pushname, 'magenta'), 'in', color(name || formattedTitle, 'aqua'))
		}
		if (isBanned && isCmd) {
			return axv.reply(from, `Maaf *_${pushname}_* anda telah dibanned untuk menggunakan command Bot!`, id)
		}

		// Filter Blocked People
		if (isBlocked && isCmd) {
			console.log(color('[BLOCK]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${chats} [${args.length}]`, 'aqua'), 'from', color(pushname, 'magenta'), 'in', color(name || formattedTitle, 'aqua'))
		}

		axv.setPresence(true)

		if (isCmd && isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwnerB || isPrem) {
			switch (command) {
				// Menu and TnC
				case prefix + 'exif':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					if (args.length == 0) return axv.reply(from, `Usage : ${prefix}exif author|pack\nExample: ${prefix}exif ZeusXz|Bot`, id)
					const splitauthor = q.split('|')[1]
					const packauthor = q.split('|')[0]
					authorstc = splitauthor
					packstc = packauthor
					axv.reply(from, `Berhasil mengubah pack stiker menjadi ${splitauthor} dan ${packauthor}`, id)
					break
				case prefix + 'mute':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					if (isGroupMsg) {
						isMuted(chatId) == true
						if (muted.includes(chatId)) return axv.reply(from, 'Grup ini sudah dimute sebelumnya', id)
						muted.push(chatId)
						fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
						axv.reply(from, 'Bot telah di mute pada grup ini!', id)
					} else {
						muted.push(chatId)
						fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
						axv.reply(from, 'Bot telah di mute pada grup ini!', id)
					}
					break
				case prefix + 'unmute':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					if (isGroupMsg) {
						isMuted(chatId) == false
						let indexsz = muted.indexOf(chatId);
						muted.splice(indexsz, 1)
						fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
						axv.reply(from, 'Bot telah di unmuted pada grup ini!', id)
					} else {
						let indexsz = muted.indexOf(chatId);
						muted.splice(indexsz, 1)
						fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
						axv.reply(from, 'Bot telah di unmuted pada grup ini!', id)
					}
					break
				case prefix + 'private':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh owner Bot!', id)
					if (setting.banChats === true) return
					setting.banChats = true
					banChats = true
					fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
					axv.reply(from, 'Private Commands has been enable', id)
					break
				case prefix + 'public':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh owner Bot!', id)
					if (setting.banChats === false) return
					setting.banChats = false
					banChats = false
					fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
					axv.reply(from, 'Public commands has been enable', id)
					break
				case prefix + 'speed':
				case prefix + 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					axv.reply(from, `Speed: ${latensi.toFixed(4)} _Second_`, id)
					break
				case prefix + 'setpic':
					if (!isOwnerB) return axv.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner Bot!`, id)
					if (isMedia) {
						const mediaData = await decryptMedia(message)
						const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
						await axv.setProfilePic(imageBase64)
						axv.sendTextWithMentions(from, `Makasih @${serial} Foto Profilenye..`)
					} else if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						await axv.setProfilePic(imageBase64)
						axv.sendTextWithMentions(from, `Makasih @${serial} Foto Profilenya 😘`, id)
					} else {
						axv.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setpic`, id)
					}
					break
				case prefix + 'resetlimit':
					if (!isOwnerBot) return axv.reply(from, 'Perintah ini hanya untuk Owner bot', id)
					if (args.length < 1) return axv.reply(from, `Format !reset <jumlah>`, id);
					if (!Number(args[0])) return axv.reply(from, `${args[0]} bukan termasuk angka!`, id);
					const reset = limitFunc.resetAllLimit(Number(args[0]));
					axv.sendText(from, `Reset limit sukses : ${args[0]} ✅\n\n\`\`\`Limit semua user telah direset, ketik !limit untuk cek limit kamu.\`\`\``)
					break
				case prefix + 'limit':
					const argsu = args[0] || "";
					if (argsu.includes("@")) {
						const countLimit = limitFunc.pushLimit(args[0].replace("@", "") + "@c.us", 0);
						axv.sendTextWithMentions(from, `Hai ${args[0]} ☺️ *Limit anda sekarang* : ${Number(countLimit[0].limit) < 1 ? 0 + " ❌" : countLimit[0].limit + " / 15 ✅"}\n\n_Limit akan otomatis direset setiap jam 06.00_\n\nMau jadi user premium?\nSilahkan ketik *#premium*_`)
					} else {
						const countLimit = limitFunc.pushLimit(sender.id, 0)
						axv.sendTextWithMentions(from, `Hai ${pushname} ☺️ *Limit anda sekarang* : ${Number(countLimit[0].limit) < 1 ? 0 + " ❌" : countLimit[0].limit + " / 15 ✅"}\n\n_Limit akan otomatis direset setiap jam 06.00_\n\nMau jadi user premium?\nSilahkan ketik *#premium*_`)
					}
					break
				case prefix + 'takelimit':
					if (!isOwnerBot) return axv.reply(from, 'Perintah ini hanya untuk Owner bot', id)
					if (args.length < 1) return axv.reply(from, `Format !take @tagmember`, id);
					const jidna = args[0].replace("@", "") + "@c.us";
					const take = limitFunc.takeLimit(jidna);
					axv.sendTextWithMentions(
						from,
						`Sayangnya limit ${"@" + args[0].replace("@", "")
						} telah diambil 😔❌\n\n\`\`\`Limit anda telah dikosongkan ketik !limit untuk cek limit kamu.\`\`\``
					);
					break
				case prefix + 'giftlimit':
					if (!isOwnerBot) return axv.reply(from, 'Perintah ini hanya untuk Owner bot', id)
					if (args.length < 2) return axv.reply(from, `Format !gift @tagmember <jumlah>`, id);
					const jidnya = args[0].replace("@", "") + "@c.us";
					const gift = limitFunc.giftLimit(jidnya, Number(args[1]));
					axv.sendTextWithMentions(
						from,
						`Selamat ${args[0]} 😄✅\n\n\`\`\`Limit anda telah ditambah sebanyak ${args[1]} ketik !limit untuk cek limit kamu.\`\`\``
					);
					break
				case prefix + 'getpic':
					if (!isGroupMsg) return axv.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
					const texnugm = body.slice(8)
					try {
						var jnck = await axv.getProfilePicFromServer(useriq)

						axv.sendFileFromUrl(from, jnck, `awok.jpg`, `nehh ngab`, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'tnc':
					const menus = menuId.textTnC()
					await axv.reply(from, menus, id)
					break

				case prefix + 'rbts':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/randomimage/batues?apikey=${dapuhyapi}`, 'img.jpg', 'nehh', id)
					break
				case prefix + 'rvidanime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/anime/storyanime?apikey=${dapuhyapi}`, 'anime.mp4', '', id)
					break
				case prefix + 'rexo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/randomimage/exontol?apikey=${dapuhyapi}`, 'img.jpg', 'nehh', id)
					break
				case prefix + 'rblackpink':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/randomimage/blekpink?apikey=${dapuhyapi}`, 'blackpink.jpg', '', id)
					break
				case prefix + 'rcitacita':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://h4ck3rs404-api.herokuapp.com/api/cita-cita?apikey=${hackapi}`, 'citacita.mp3', '', id)
					break
				case prefix + 'ceritahorror':
				case prefix + 'ceritahoror':
				case prefix + 'ceritahorror2':
				case prefix + 'ceritahoror2':
				case prefix + 'ceritaseram':
				case prefix + 'ceritahantu':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhuman}`)
						.then(async (res) => {
							const becapt = `*Judul:* ${res.data.result.title}\n*Desk:* ${res.data.result.desc}\n*Cerita:* ${res.data.result.story}`
							await axv.sendFileFromUrl(from, res.data.result.thumbnail, 'thumb.jpg', becapt, id)
								.catch(() => {
									axv.reply(from, 'Server sedang maintenance atau apikey sudah limit', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break


				case prefix + 'runtime':
					axv.reply(from, `*Bot has been active for ${cts}*`, id)
					break
				case prefix + 'eval':
				case prefix + 'ev':
					if (!isOwner) return await axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner!', id)
					if (!q) return await axv.reply(from, 'Masukkan kode Javascript!', id)
					try {
						let evaled = await eval(q)
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						axv.reply(from, evaled, id)
					} catch (err) {
						console.error(err)
						axv.reply(from, err.message, id)
					}
					break
				case prefix + 'p':
				case prefix + 'start':
				case prefix + 'menu':
				case prefix + 'help':
					const jame = moment(t * 1000).format('HH:mm:ss')
					const pictrand = menupict
					const showLimit = (limitFunc.pushLimit(sender.id, 0))[0].limit
					axv.sendFileFromUrl(from, pictrand, 'img.jpg', menuId.help(prefix, jame, betime, prem, blockNumber, banned, cts, waver, showLimit), id)
					axv.reply(from, mess.menyu, id)
					await axv.sendPtt(from, './media/menu.mp3', id)
					break
				case prefix + 'funmenu':
					await axv.sendText(from, menuId.textFunm(prefix))
					break
				case prefix + 'converter':
					await axv.sendText(from, menuId.textConvert(prefix))
					break
				case prefix + 'gamemenu':
					await axv.sendText(from, menuId.textGame(prefix))
					break
				case prefix + 'storemenu':
					await axv.sendText(from, menuId.textStore(prefix))
					break
				case prefix + 'internetmenu':
					await axv.sendText(from, menuId.textInternet(prefix))
					break
				case prefix + 'primbonmenu':
					await axv.sendText(from, menuId.textPrimbon(prefix))
					break
				case prefix + 'infomenu':
					await axv.sendText(from, menuId.textInfo(prefix))
					break
				case prefix + 'randomtext':
					await axv.sendText(from, menuId.textRtext(prefix))
					break
				case prefix + 'stalkmenu':
					await axv.sendText(from, menuId.textStalk(prefix))
					break
				case prefix + 'moviemenu':
					await axv.sendText(from, menuId.textMov(prefix))
					break
				case prefix + 'premiummenu':
					await axv.sendText(from, menuId.textPremu(prefix))
					break
				case prefix + 'asupanmenu':
					await axv.sendText(from, menuId.textAsup(prefix))
					break
				case prefix + 'downloadermenu':
				case prefix + 'downloadmenu':
					await axv.sendText(from, menuId.textDownd(prefix))
					break
				case prefix + 'animemenu':
					await axv.sendText(from, menuId.textAnimx(prefix))
					break
				case prefix + 'newsmenu':
					await axv.sendText(from, menuId.textNews(prefix))
					break
				case prefix + 'imagesmenu':
				case prefix + 'imagemenu':
					await axv.sendText(from, menuId.textImgr(prefix))
					break
				case prefix + 'aboutmenu':
					await axv.sendText(from, menuId.textAbtx(prefix))
					break
				case prefix + 'ownermenu':
					await axv.sendText(from, menuId.textOwnr(prefix))
					break
				case prefix + 'adminmenu':
					await axv.sendText(from, menuId.textAdmin(prefix))
					break
				case prefix + 'filtermenu':
					await axv.sendText(from, menuId.textFilter(prefix))
					break
				case prefix + 'djmenu':
					await axv.sendText(from, menuId.textDj(prefix))
					break

				case prefix + 'kodebahasa':
					const kodbhs = menuId.kodebahasa()
					axv.reply(from, kodbhs, id, true)
					break
				case prefix + 'kodenuklir':
					const benuk = menuId.kodenuklir()
					await axv.sendText(from, benuk, id, true)
					break
				case prefix + 'donate':
				case prefix + 'donasi':
					const inidonate = menuId.textDonasi()
					await axv.sendText(from, inidonate, id, true)
					break
				case prefix + 'tod':
					axv.reply(from, `Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n➥ ${prefix}truth\n➥ ${prefix}dare`, id)
					break
				case prefix + 'rneko':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.i-tech.id/anim/nsfwneko?key=6QZWVa-fzRgRY-95xAOH-fspd5y-7eJOkQ`).then(res => {
						axv.sendFileFromUrl(from, res.data.result, '', '', id)
					})
					break
				case prefix + 'idulfitri':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Idul Fitri Gunakan ${prefix}idulfitri nama\nContoh : ${prefix}idulfitri AXV`, id)
					const fitrix = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/idulfitri?apikey=${lolhuman}&text=${fitrix}`, '', '', id)
					break
				case prefix + 'toxic':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const toxics = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/toxic?apikey=${lolhuman}&text=${toxics}`, '', '', id)
					break
				case prefix + 'cool':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const kereneui = body.slice(6)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${lolhuman}&text1=${kereneui}&text2=By AXV`, '', '', id)
					break
				case prefix + 'papercut':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const pprc = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/textpro/artpapercut?text=${pprc}&apikey=${dapuhyapi}`, '', '', id)
					break
				case prefix + 'cloud':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const awanc = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/cloud?apikey=${lolhuman}&text=${awanc}`, '', '', id)
					break
				case prefix + 'romance':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const romcek = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/photooxy1/romance?apikey=${lolhuman}&text=${romcek}`, '', '', id)
					break
				case prefix + 'nature3d':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const nt3d = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/photooxy1/nature3d?apikey=${lolhuman}&text=${nt3d}`, '', '', id)
					break
				case prefix + 'summer3d':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const sm3d = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/photooxy1/summer3d?apikey=${lolhuman}&text=${sm3d}`, '', '', id)
					break
				case prefix + 'mlwp':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const mlwpx = body.slice(6)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=${lolhuman}&text=${mlwpx}`, '', '', id)
					break
				case prefix + 'christmas':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const christmas = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/photofunia/christmas?text=${christmas}&apikey=${dapuhyapi}`, '', '', id)
					break
				case prefix + 'strawberry':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const strawberry = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/strawberry?apikey=${lolhuman}&text=${strawberry}`, '', '', id)
					break
				case prefix + 'lolsertifikat':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const lolser = body.slice(15)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/toloserti?apikey=${lolhuman}&name=${lolser}`, '', '', id)
					break
				case prefix + 'fakboysertifikat':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const lolserx = body.slice(18)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/fuckboy?apikey=${lolhuman}&name=${lolserx}`, '', '', id)
					break
				case prefix + 'fakgirlsertifikat':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const lolserxz = body.slice(19)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/fuckgirl?apikey=${lolhuman}&name=${lolserxz}`, '', '', id)
					break
				case prefix + 'bucinsertifikat':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana??`, id)
					const lolserxb = body.slice(17)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/bucinserti?apikey=${lolhuman}&name=${lolserxb}`, '', '', id)
					break
				case prefix + 'onecak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/onecak?apikey=${lolhuman}`, '', '', id)
					break
				case prefix + 'anjing':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/sticker/anjing?apikey=${lolhuman}`, '', '', id)
					break
				case prefix + 'texttoqr':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mengubah Text menjadi qr Gunakan ${prefix}texttoqr text\nContoh : ${prefix}texttoqr AXV`, id)
					const txtqr = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/qrcode?apikey=${lolhuman}&text=${txtqr}`, '', '', id)
					break
				case prefix + 'amongus':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/sticker/amongus?apikey=${lolhuman}`, '', '', id)
					break
				case prefix + 'bucinimg':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolhuman}`, '', '', id)
					break

				case prefix + 'happy':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/happy?apikey=${lolhuman}`, '', '', id)
					break
				case prefix + 'gawrgura':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolhuman}`, '', '', id)
					break
				case prefix + 'texttoaudio':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mengubah text menjadi Audio Gunakan ${prefix}texttoaudio text\nContoh : ${prefix}texttoaudio AXV`, id)
					const textaudio = body.slice(13)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/gtts/id?apikey=${lolhuman}&text=${textaudio}`, '', '', id)
					break
				case prefix + 'tebakumur':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Tebak Umur Anda Gunakan ${prefix}tebakumur nama\nContoh : ${prefix}tebakumur AXV`, id)
					const tebakumur = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolhuman}&name=${tebakumur}`)
						.then(res => {
							const bakumur = `*Nama:* ${res.data.result.name}\n*Umur:* ${res.data.result.age}`
							axv.reply(from, bakumur, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'mediafire':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Linknya Mana??`, id)
					const mdfr = body.slice(11)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolhuman}&url=${mdfr}`)
						.then(res => {
							const mdgrx = `*Size:* ${res.data.result.filesize}\n*Upload Date:* ${res.data.result.uploaded}`
							const mdgrxcc = `${res.data.result.link}`
							axv.reply(from, mdgrx, id)
							axv.sendFileFromUrl(from, mdgrxcc, 'mediafire', '', id)
								.catch((e) => {
									console.log(e)
								})
						})

					break
				case prefix + 'anonfiles':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Linknya Mana??`, id)
					const anf = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/others/anonfiles?img=${anf}&apikey=${dapuhyapi}`)
						.then(res => {
							const anfs = `*Size:* ${res.data.metadata.size.readable}\n*ID:* ${res.data.metadata.id}`
							const anfsx = `${res.data.url.short}`
							axv.reply(from, anfs, id)
							axv.sendFileFromUrl(from, anfsx, 'anonfiles', '', id)
								.catch((e) => {
									console.log(e)
								})
						})

					break
				case prefix + 'jarak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}jarak kota1-kota2\nContoh : ${prefix}jarak Surabaya-Jogja`, id)
					const jarak0 = arg.split('-')[0]
					const jarak1 = arg.split('-')[1]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolhuman}&kota1=${jarak0}&kota2=${jarak1}`)
						.then(res => {
							const jarakall = `*Kota1:* ${res.data.result.from.name}\n*Kota2:* ${res.data.result.to.name}\n\n*Jarak :* ${res.data.result.jarak}\n*Naik Kereta :* ${res.data.result.kereta_api}\n*Naik Pesawat :* ${res.data.result.pesawat}\n*Naik Mobil :* ${res.data.result.mobil}\n*Naik Montor :* ${res.data.result.motor}\n*Jalan Kaki :* ${res.data.result.jalan_kaki}\n\n_By : AXV_`
							axv.reply(from, jarakall, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'weton':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}weton tanggal-bulan-lahir\nContoh : ${prefix}weton 09-05-2006`, id)
					const wtn0 = arg.split('-')[0]
					const wtn1 = arg.split('-')[1]
					const wtn2 = arg.split('-')[2]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/weton/${wtn0}/${wtn1}/${wtn2}?apikey=${lolhuman}`)
						.then(res => {
							const wetonx = `*Weton:* ${res.data.result.weton}\n*Karakter:* ${res.data.result.karakter}\n\n*Pekerjaan :* ${res.data.result.pekerjaan}\n*Rejeki :* ${res.data.result.rejeki}\n*Jodoh :* ${res.data.result.jodoh}\n\n_By : AXV_`
							axv.reply(from, wetonx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'bisnis':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}bisnis tanggal-bulan-lahir\nContoh : ${prefix}bisnis 09-05-2006`, id)
					const wxtn0 = arg.split('-')[0]
					const wxtn1 = arg.split('-')[1]
					const wxtn2 = arg.split('-')[2]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/primbon/usahabisnis/${wxtn0}/${wxtn1}/${wxtn2}?apikey=${zenzapis}`)
						.then(res => {
							const wcetonx = `*Lahir:* ${res.data.result.hari_lahir}\n*Usaha:* ${res.data.result.usaha}\n\n*Desc :* ${res.data.result.catatan}\n\n_By : AXV_`
							axv.reply(from, wcetonx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'rejeki':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}rejeki tanggal-bulan-lahir\nContoh : ${prefix}rejeki 09-05-2006`, id)
					const wcxtn0 = arg.split('-')[0]
					const wcxtn1 = arg.split('-')[1]
					const wcxtn2 = arg.split('-')[2]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/primbon/rejekiweton/${wcxtn0}/${wcxtn1}/${wcxtn2}?apikey=${zenzapis}`)
						.then(res => {
							const wzcetonx = `*Desc:* ${res.data.result.message.penjelasan}\n\n_By : AXV_`
							axv.reply(from, wzcetonx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'haribaik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}haribaik tanggal-bulan-lahir\nContoh : ${prefix}haribaik 09-05-2006`, id)
					const wzcxtn0 = arg.split('-')[0]
					const wzcxtn1 = arg.split('-')[1]
					const wzcxtn2 = arg.split('-')[2]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/primbon/haribaik/${wzcxtn0}/${wzcxtn1}/${wzcxtn2}?apikey=${zenzapis}`)
						.then(res => {
							const wzvcetonx = `*Desc:* ${res.data.result.message}\n\n_By : AXV_`
							axv.reply(from, wzvcetonx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'harilarangan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `${prefix}harilarangan tanggal-bulan-lahir\nContoh : ${prefix}harilarangan 09-05-2006`, id)
					const hrlrg0 = arg.split('-')[0]
					const hrlrg1 = arg.split('-')[1]
					const hrlrg2 = arg.split('-')[2]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/primbon/harilarangan/${hrlrg0}/${hrlrg1}/${hrlrg2}?apikey=${zenzapis}`)
						.then(res => {
							const htgc = `*Desc:* ${res.data.result.message}\n\n_By : AXV_`
							axv.reply(from, htgc, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break

				case prefix + 'kodepos':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Example: ${prefix}kodepos Surabaya`, id)
					const kdpos = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const kdpsi = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${lolhuman}&query=${kdpos}`)
						const kdpsy = kdpsi.data.result
						let kdpsq = `*「 KODE POS 」*\n\n*Hasil Pencarian : ${kdpos}*\n`
						for (let i = 0; i < kdpsy.length; i++) {
							kdpsq += `\n─────────────────\n\n• *Provinsi:* ${kdpsy[i].province}\n• *Kota* : ${kdpsy[i].city}\n• *Kecamatan* : ${kdpsy[i].subdistrict}\n• *Kalurahan* : ${kdpsy[i].urban}\n• *Kodepos* : ${kdpsy[i].postalcode}\n\n_By : AXV_`
						}
						axv.reply(from, kdpsq, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'jadwalsholat':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Example: ${prefix}jadwalsholat surabaya`, id)
					const jdsh = body.slice(14)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/sholat/${jdsh}?apikey=${lolhuman}`)
						.then(res => {
							const jdlatt = `*Wilayah:* ${res.data.result.wilayah}\n*Tanggal:* ${res.data.result.tanggal}\n*Sahur:* ${res.data.result.sahur}\n*Imsak:* ${res.data.result.imsak}\n*Subuh:* ${res.data.result.subuh}\n*Terbit:* ${res.data.result.terbit}\n*Dhuha:* ${res.data.result.dhuha}\n*Dzuhur:* ${res.data.result.dzuhur}\n*Ashar:* ${res.data.result.ashar}\n*Maghrib:* ${res.data.result.maghrib}\n*Isya:* ${res.data.result.isya}\n\n_By : AXV_`
							axv.reply(from, jdlatt, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break

				case prefix + 'alkitab':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Example: ${prefix}alkitab ayat \nContoh  ${prefix}alkitab matius 7:7`, id)
					const alktb = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const atbi = await axios.get(`http://docs-jojo.herokuapp.com/api/alkitabsearch?q=${alktb}`)
						const atby = atbi.data.result
						let atbw = `*Alkitab Search*`
						for (let i = 0; i < atby.length; i++) {
							atbw += `\n─────────────────\n\n• *Ayat :* ${atby[i].ayat}\n• *Isi* : ${atby[i].isi}`
						}
						axv.sendText(from, atbw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'randombahasa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Textnya mana??`, id)
					const rbahasa = body.slice(14)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/randombahasa?apikey=${lolhuman}&text=${rbahasa}`)
						.then(res => {
							const rndmb = `${res.data.result}`
							axv.reply(from, rndmb, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'purba':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Textnya mana??`, id)
					const purba = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhuman}&text=${purba}`)
						.then(res => {
							const purbax = `${res.data.result}`
							axv.reply(from, purbax, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'callingcode':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Contoh : #callingcode 62`, id)
					const calcod = body.slice(13)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/callingcode/${calcod}?apikey=${lolhuman}`)
						.then(res => {
							const clcdx = `*Negara:* ${res.data.result.name}\n*CallingCode:* ${res.data.result.callingCodes}\n*Capital:* ${res.data.result.capital}\n*Region:* ${res.data.result.region}\n*Domains:* ${res.data.result.topLevelDomain}\n*Spellings:* ${res.data.result.altSpellings}\n\n_By : AXV_`
							axv.reply(from, clcdx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'proxysite':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Contoh : ${prefix}proxysite https://axvstore.my.id`, id)
					const proxys = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/proxysite?apikey=${lolhuman}&url=${proxys}`)
						.then(res => {
							const proxyx = `${res.data.result}`
							axv.reply(from, proxyx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'ringkastext':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Contoh : ${prefix}ringkastext ceritanya`, id)
					const ringkasx = body.slice(13)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/resoomer?apikey=${lolhuman}&text=${ringkasx}`)
						.then(res => {
							const rngxx = `*Ringkasan* : ${res.data.result}\n\n_By : AXV_`
							axv.reply(from, rngxx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'hilih':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Textnya mana??`, id)
					const hilihoi = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/hilih?apikey=${lolhuman}&text=${hilihoi}`)
						.then(res => {
							const hilihx = `${res.data.result}`
							axv.reply(from, hilihx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'tebakgender':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Tebak Gender Anda Gunakan ${prefix}tebakgender nama\nContoh : ${prefix}tebakgender AXV`, id)
					const tebakgender = body.slice(13)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/tebakgender?apikey=${lolhuman}&name=${tebakgender}`)
						.then(res => {
							const baknder = `*Nama:* ${res.data.result.name}\n*Gender:* ${res.data.result.gender}`
							axv.reply(from, baknder, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'texttomorse':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mengubah text menjadi sandi morse Gunakan ${prefix}texttomorse text\nContoh : ${prefix}texttomorse AXV`, id)
					const morsex = body.slice(13)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${lolhuman}&text=${morsex}`)
						.then(res => {
							const morseex = `*Text:* ${morsex}\n*Morse:* ${res.data.result}`
							axv.reply(from, morseex, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break

				case prefix + 'truth':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa digunakan didalam grup!', id)
					fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
						.then(res => res.text())
						.then(body => {
							let truthx = body.split('\n')
							let truthz = truthx[Math.floor(Math.random() * truthx.length)]
							axv.reply(from, truthz, id)
						})
						.catch(() => {
							axv.reply(from, 'Hayolohhh, ada yang error!!', id)
						})
					break
				case prefix + 'dare':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa digunakan didalam grup!', id)
					fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
						.then(res => res.text())
						.then(body => {
							let darex = body.split('\n')
							let darez = darex[Math.floor(Math.random() * darex.length)]
							axv.reply(from, darez, id)
						})
						.catch(() => {
							axv.reply(from, 'Hayolohhh, ada yang error!!', id)
						})
					break
				case prefix + 'citacita'://Piyobot
					if (!isGroupMsg) return axv.reply(from, menuId.textPrem())
					fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
						.then(res => res.text())
						.then(body => {
							let cita = body.split('\n')
							let raya = cita[Math.floor(Math.random() * cita.length)]
							axv.sendFileFromUrl(from, raya, 'citacita.mp3', id)
								.then(() => console.log('Success sending cita'))
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'kbbi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari suatu kata dari Kamus Besar Bahasa Indonesia (KBBI)\nketik: ${prefix}kbbi [kata]`, id)
					const kbbip = body.slice(6)
					const kbbis = await rugaapi.kbbi(kbbip)
					await axv.reply(from, kbbis, id)
						.catch(() => {
							axv.reply(from, 'ada yang error!!', id)
						})
					break
				case prefix + 'marvel':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}marvel teks1 teks2\nContoh: ${prefix}marvel axve Xyz`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const textmar1 = args[0]
					const textmar2 = args[1]
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/textpro/marvel-logo2?text=${textmar1}&text2=${textmar2}&apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'blackpink':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `kirim perintah ${prefix}blackpink nama`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const bpk = body.slice(11)
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/random/blackpink?apikey=ApiRevita`, `${bpk}.jpg`, `nehh ngab`, id)
					break
				case prefix + 'glowtext':
					if (args.length == 0) return axv.reply(from, `kirim perintah ${prefix}glowtext [nama]`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const srhdah = body.slice(10)
					axv.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${srhdah}&apikey=${vhtearkey}`, `${srhdah}.jpg`, `nehh ngab`, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'logoff':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `kirim perintah ${prefix}logoff [nama]`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const jadiin = body.slice(8)
					axv.sendFileFromUrl(from, `https://api.zeks.me/api/epep?apikey=${apikeyvinz}&text=${jadiin}`, `${jadiin}.jpg`, 'nehh ngab...', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'logoph':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}logoph  Teks1 Teks2 ]*,\n\n contoh : *${prefix}logoph AXV Store*`, id)
					const xpornhub = args[0]
					const xpornhub2 = args[1]
					if (xpornhub > 10) return axv.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
					if (xpornhub2 > 10) return axv.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
					axios.get(`https://revita.herokuapp.com/api/textpro/pornhub?text=${xpornhub}&text2=${xpornhub2}&apikey=ApiRevita`).then(async (res) => {
						await axv.sendFileFromUrl(from, res.data.result, 'logoph.jpg', '', id)
							.catch(() => {
								axv.reply(from, 'Server sedang maintenance atau apikey sudah limit', id)
							})
					})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				// Level [BETA] by Slavyan
				case prefix + 'level':
					if (!isLevelingOn) return await axv.reply(from, 'Fitur leveling belum aktif di grup ini!', id)
					if (!isGroupMsg) return await axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					const userLevel = level.getLevelingLevel(sender.id, _level)
					const userXp = level.getLevelingXp(sender.id, _level)
					const ppLink = await axv.getProfilePicFromServer(serial)
					if (ppLink === 'ERROR: 401') {
						var pepe = errorImg
					} else {
						pepe = ppLink
					}
					const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
					const rank = new canvas.Rank()
						.setAvatar(pepe)
						.setLevel(userLevel)
						.setLevelColor('#ffa200', '#ffa200')
						.setRank(Number(level.getUserRank(sender.id, _level)))
						.setCurrentXP(userXp)
						.setOverlay('#000000', 100, false)
						.setRequiredXP(requiredXp)
						.setProgressBar('#ffa200', 'COLOR')
						.setBackground('COLOR', '#000000')
						.setUsername(pushname)
						.setDiscriminator(sender.id.substring(6, 10))
					rank.build()
						.then(async (buffer) => {
							const imageBase644 = `data:image/png;base64,${buffer.toString('base64')}`
							await axv.sendImage(from, imageBase644, 'rank.png', '', id)
						})
						.catch(async (err) => {
							console.error(err)
							await axv.reply(from, 'Error!', id)
						})
					break
				case prefix + 'leveling':
					if (!isGroupMsg) return await axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					if (!isGroupAdmins) return await axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Admin Grup!', id)
					if (args[0] === 'on') {
						if (_leveling.includes(groupId)) return axv.reply(from, 'Fitur leveling sudah diaktifkan pada grup ini sebelumnya', id)
						_leveling.push(groupId)
						fs.writeFileSync('./lib/database/group/leveling.json', JSON.stringify(_leveling))
						await axv.reply(from, 'Fitur Leveling berhasil diaktifkan didalam grup ini', id)
					} else if (args[0] === 'off') {
						var thisgroup = _leveling.indexOf(groupId)
						_leveling.splice(thisgroup, 1)
						fs.writeFileSync('./lib/database/group/leveling.json', JSON.stringify(_leveling))
						await axv.reply(from, 'Fitur Leveling berhasil dinonaktifkan didalam grup ini', id)
					} else {
						await axv.reply(from, 'Pilih on atau off admin cakep', id)
					}
					break
				case prefix + 'leaderboard':
					if (!isGroupMsg) return await axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					const resp = _level
					_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
					let leaderboard = '*── 「 LEADERBOARDS 」 ──*\n\n'
					try {
						for (let i = 0; i < 10; i++) {
							var roles = 'Copper V'
							if (resp[i].level >= 5) {
								roles = 'Copper IV'
							} else if (resp[i].level >= 10) {
								roles = 'Copper III'
							} else if (resp[i].level >= 15) {
								roles = 'Copper II'
							} else if (resp[i].level >= 20) {
								roles = 'Copper I'
							} else if (resp[i].level >= 25) {
								roles = 'Silver V'
							} else if (resp[i].level >= 30) {
								roles = 'Silver IV'
							} else if (resp[i].level >= 35) {
								roles = 'Silver III'
							} else if (resp[i].level >= 40) {
								roles = 'Silver II'
							} else if (resp[i].level >= 45) {
								roles = 'Silver I'
							} else if (resp[i].level >= 50) {
								roles = 'Gold V'
							} else if (resp[i].level >= 55) {
								roles = 'Gold IV'
							} else if (resp[i].level >= 60) {
								roles = 'Gold III'
							} else if (resp[i].level >= 65) {
								roles = 'Gold II'
							} else if (resp[i].level >= 70) {
								roles = 'Gold I'
							} else if (resp[i].level >= 75) {
								roles = 'Platinum V'
							} else if (resp[i].level >= 80) {
								roles = 'Platinum IV'
							} else if (resp[i].level >= 85) {
								roles = 'Platinum III'
							} else if (resp[i].level >= 90) {
								roles = 'Platinum II'
							} else if (resp[i].level >= 95) {
								roles = 'Platinum I'
							} else if (resp[i].level > 100) {
								roles = 'Exterminator'
							}
							leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`
						}
						await axv.reply(from, leaderboard, id)
					} catch (err) {
						console.error(err)
						await axv.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
					}
					break
				case prefix + 'slightning':
					if (isMedia && type === 'image') {
						const mediaData = await decryptMedia(message, uaOverride)
						const getUrle = await uploadImages(mediaData, false)
						const imgnye = await stickerlight(getUrle)
						const Slight = imgnye.result.imgUrl
						await axv.sendStickerfromUrl(from, Slight)
					} else if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg, uaOverride)
						const getUrle = await uploadImages(mediaData, false)
						const imgnye = await stickerlight(getUrle)
						const Slight = imgnye.result.imgUrl
						await axv.sendStickerfromUrl(from, Slight)
					} else {
						await axv.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerlightning`, id)
					}
					break
				case prefix + 'sfire':
				case prefix + 'stickerfire':
					if (isMedia && type === 'image') {
						const mediaData = await decryptMedia(message, uaOverride)
						const getUrli = await uploadImages(mediaData, false)
						const imgnya = await stickerburn(getUrli)
						const Sfire = imgnya.result.imgUrl
						await axv.sendStickerfromUrl(from, Sfire)
					} else if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg, uaOverride)
						const getUrli = await uploadImages(mediaData, false)
						const imgnya = await stickerburn(getUrli)
						const Sfire = imgnya.result.imgUrl
						await axv.sendStickerfromUrl(from, Sfire)
					} else {
						await axv.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}stickerfire`, id)
					}
					break
				case prefix + 'thunder':
					if (args.length === 1) return axv.reply(from, `Kirim perintah *${prefix}thunder [ Teks ]*, contoh *${prefix}thunder Tobz*`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const thndr = body.slice(9)
					if (thndr.length > 10) return axv.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
					await axv.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${vhtearkey}`, 'thndr.jpg', '', id)
					break
				case prefix + 'tutorialmp4':
					await axv.sendText(from, menuId.textMp4())
					break
				case prefix + 'funmenu':
					await axv.sendText(from, menuId.textFunm())
					break
				case prefix + 'hapusiklan':
					await axv.sendText(from, menuId.textIklan())
					break
				case prefix + 'hematkuota':
					await axv.sendText(from, menuId.textKuota())
					break
				case prefix + 'ytdownload':
					await axv.sendText(from, menuId.textYt())
					break
				case prefix + 'themegoogle':
					await axv.sendText(from, menuId.textCh())
					break
				case prefix + 'gombalin':
					await axv.sendText(from, menuId.textGombal())
					break
				case prefix + 'igdownload':
					await axv.sendText(from, menuId.textIg())
					break
				case prefix + 'sadapwa':
					await axv.sendText(from, menuId.textWa())
					break
				case prefix + 'lacakhp':
					await axv.sendText(from, menuId.textHp())
					break
				case prefix + 'caklontong':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					try {
						const resp = await axios.get(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolhuman}`)
						if (resp.data.error) return axv.reply(from, resp.data.error, id)
						const anm2 = `➸ Soal : ${resp.data.result.question}`
						const jwban = `➸ Jawaban : ${resp.data.result.answer}`
						console.log(`${jwban}`)
						axv.reply(from, anm2, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
					}
					break
				case prefix + 'ownerbot':
				case prefix + 'owner':
					await axv.sendContact(from, ownerNumber)
					break
				case prefix + 'maps':
				case prefix + 'map':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mencari sebuah kota dari google map\nUsage: ${prefix}maps namakota\nContoh: ${prefix}maps pontianak`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://api.clph.me/map?apikey=${caliph}&kota=${body.slice(6)}`)
						.catch(() => {
							axv.reply(from, 'Rest Api sedang error', id)
						})
					break
				case prefix + 'retasidentitas':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					const identitas = await axios.get(`http://docs-jojo.herokuapp.com/api/fake_identity`).then(res => {
						const identitas = `*name* : ${res.data.name}\n*gender :* ${res.data.gender}\n*age :* ${res.data.age}\n*birtday :* ${res.data.birtday}\n*country :* ${res.data.country}\n*email :* ${res.data.email}\n*email pass:* ${res.data.password}\n*phone:* ${res.data.phone}\n*pin_code:* ${res.data.pin_code}\n*code:* ${res.data.code}\n*address:* ${res.data.address}\n*blood_type:* ${res.data.blood_type}\n\nHacked By : Zeus`;
						axv.sendText(from, identitas, id)
					})
					break
				case prefix + 'jadwaltvnow':
				case prefix + 'jabwaltvnow':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const jadwalNow = await fetch(`http://docs-jojo.herokuapp.com/api/jadwaltvnow`)
					const jdn = await jadwalNow.json()
					axv.reply(from, `Jam : ${jdn.result.jam}\n\nJadwalTV : ${jdn.result.jadwalTV}join\n\nBy : Zeus\n`, id)
					break


				case prefix + 'infonomor':
				case prefix + 'infonomer':
					if (args.length == 0) return axv.reply(from, 'Nomornya mana??', id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const nomro = body.slice(11)
					const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
					const nmro = await nomronya.json()
					axv.reply(from, `➸ *Nomor* : ${nmro.nomor} \n➸ *Internasional* : ${nmro.international} \n➸ *Operator* : ${nmro.op}\n\nBy : AXV`, id)
					break

				case prefix + 'infohoax':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, '#infohoax link\ncontoh : #infohoax https://turnbackhoax.id/2020/12/12/salah-kondom-halal-mengandung-air-zam-zam-dijamin-barokah-m-pun-bebas-godaan-syetan-sudah-halal-mui/', id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const hoaxz = body.slice(6)
					axios.get('http://docs-jojo.herokuapp.com/api/gethoax?url=${hoaxz}')
						.then(res => {
							axv.reply(from, `➸ *Info* : ${res.data.result.berita}\n\nBy : AXV`, id)
						});
					break
				case prefix + 'antivirtex':
				case prefix + 'antivirtek':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
					return await axv.reply(from, `\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\nBy : Zeusn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBy : Zeus\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhttps://youtube.com/c/ZEUS FITURE OFFICIAL\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`, id)
					break
				case prefix + 'wallpaper':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axios.get('https://akaneko-api.herokuapp.com/api/mobileWallpapers').then(res => {
						axv.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
					});
					break
				case prefix + 'loli':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/loli?apikey=ApiRevita`, 'loli.jpg', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})

					break
				case prefix + 'ecchi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolhuman}`, 'ecchi.jpg', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'cringe':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/cringe?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'blush':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/blush?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'dance':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/dance?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'poke':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/poke?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'wink':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/wink?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'glomp':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/glomp?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'bite':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/bite?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'nom':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nom?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'handhold':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/handhold?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'highfive':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/highfive?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'wave':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/wave?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'yeet':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/yeet?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'bonk':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/bonk?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'premium':
					axv.reply(from, 'Mau jadi user premium AXV BOT?\n\n*List Harga*:\n-15k / bulan\n\n*Kelebihan* :\n-Bebas gunain fitur tanpa limit\n-Bisa pakai fitur premium.\n\nMinat? Chat owner. Command : *#owner*\n\n\n@AXV Bot', id)
					break
				case prefix + 'lick':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/lick?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'bully':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/bully?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'futanari':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random2/futanari?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'foxgirl':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random2/fox_girl?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'holo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random2/holo?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'gasm':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random2/gasm?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'ngif':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random2/ngif?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'megumin':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/megumin?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'sagiri':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'elania':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/elaina?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'kanna':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/kanna?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'fanart':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/art?apikey=${lolhuman}`, '', '', id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'error', id)
						})
					break
				case prefix + 'autosticker':
				case prefix + 'autostiker':
				case prefix + 'autostik':
					if (args.length == 0) return axv.reply(from, `Pilih enable atau disable`, id)
					if (args[0] === 'enable') {
						if (isAutoStikerOn) return await axv.reply(from, 'Fitur auto stiker sudah diaktifkan', id)
						_autostiker.push(chat.id)
						fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
						await axv.reply(from, 'Fitur autosticker berhasil diaktifkan', id)
					} else if (args[0] === 'disable') {
						let ingroup = _autostiker.indexOf(groupId)
						_autostiker.splice(ingroup, 1)
						fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
						await axv.reply(from, 'Fitur autostiker berhasil dinonaktifkan', id)
					} else {
						await axv.reply(from, 'Format salah', id)
					}
					break
				case prefix + 'neko':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					try {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						axios.get('https://akaneko-api.herokuapp.com/api/neko').then(res => {
							axv.sendFileFromUrl(from, res.data.url, 'neko.jpeg', 'Neko *Nyaa*~');


						});
					} catch (err) {
						console.log(err);
						throw (err);
					};
					break




				case prefix + 'wallpaper2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id);
					axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
						axv.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
					});
					break
				case prefix + 'gore':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.reply(from, mess.wait, id);
					axios.get(`https://zenzapis.xyz/downloader/gore?apikey=${zenzapis}`).then(res => {
						axv.sendFileFromUrl(from, res.data.result.video2, '', `${res.data.result.title}`, id);
					});
					break
				case prefix + 'hentaivid':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.reply(from, mess.wait, id);
					axios.get(`https://zenzapis.xyz/downloader/hentaivid?apikey=${zenzapis}`).then(res => {
						axv.sendFileFromUrl(from, res.data.result.video_1, '', `${res.data.result.title}`, id);
					});
					break
				case prefix + 'porntiktok':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.reply(from, mess.wait, id);
					axios.get(`https://zenzapis.xyz/downloader/tikporn?apikey=${zenzapis}`).then(res => {
						axv.sendFileFromUrl(from, res.data.result.video, '', `${res.data.result.title}`, id);
					});
					break
				case prefix + 'baka':
					axv.reply(from, 'Eror!', id)
					break
				case prefix + 'memes':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://cakrayp.herokuapp.com/api/random/meme?apikey=${cakrayp}`).then(res => {
						axv.sendFileFromUrl(from, res.data.result.url, 'Aowkakaka', '', id)
					});
					break
				case prefix + 'aesthetic':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/aesthetic?apikey=ApiRevita`, 'aesthetic.png', '', id)
					break

				case prefix + 'antilink':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Wahai admin, jadikan saya sebagai admin grup dahulu :)', id)
					if (args[0] == 'on') {
						var cek = antilink.includes(chatId);
						if (cek) {
							return axv.reply(from, '*Anti Group Link Detector* sudah aktif di grup ini', id) //if number already exists on database
						} else {
							antilink.push(chatId)
							fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
							axv.reply(from, '*[Anti Group Link]* telah di aktifkan\nSetiap member grup yang mengirim pesan mengandung link grup akan di kick oleh bot!', id)
						}
					} else if (args[0] == 'off') {
						var cek = antilink.includes(chatId);
						if (!cek) {
							return axv.reply(from, '*Anti Group Link Detector* sudah non-aktif di grup ini', id) //if number already exists on database
						} else {
							let nixx = antilink.indexOf(chatId)
							antilink.splice(nixx, 1)
							fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
							axv.reply(from, '*[Anti Group Link]* telah di nonaktifkan\n', id)
						}
					} else {
						axv.reply(from, `pilih on / off\n\n*[Anti Group Link]*\nSetiap member grup yang mengirim pesan mengandung link grup akan di kick oleh bot!`, id)
					}
					break
				case prefix + 'inv':
				case prefix + 'invite':
					var qmoed = quotedMsgObj.sender.id
					if (!isGroupMsg) return axv.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
					if (!isGroupAdmins) return axv.reply(from, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
					if (!isBotGroupAdmins) return axv.reply(from, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
					try {
						await axv.addParticipant(from, qmoed)
					} catch {
						axv.reply(from, mess.error.Ad, id)
					}
					break
				case prefix + 'tag':
					if (!isGroupMsg) return axv.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
					if (!args.length >= 1) return await axv.reply(from, 'pesan tidak boleh kosong', id); {
						const text = body.slice(5)
						const mem = groupMembers
						const randMem = mem[Math.floor(Math.random() * mem.length)];
						const sapa = `${text} 👉 @${randMem}`
						await axv.sendTextWithMentions(from, sapa)
					}
					break
				case prefix + 'ava':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa diugnakan di dalam grup', id)
					if (!quotedMsg) return axv.reply(from, 'Quote/reply pesan seseorang yang akan di download fotonya!!', id)
					try {
						const dp = await axv.getProfilePicFromServer(quotedMsgObj.sender.id)
						if (dp == undefined) {
							var pfp = axv.reply(from, 'Dia ini pemalu, mungkin sedang depresi tidak berani memasang foto profil', id)
						} else {
							var pfp = axv.sendFileFromUrl(from, dp, 'profile.png')
						}
					} catch {
						axv.reply(from, 'Tidak ada foto profil/private', id)
					}
					break
				case prefix + 'mystat': {
					const userid = sender.id
					const ban = banned.includes(userid)
					const blocked = await axv.getBlockedIds()
					const isblocked = blocked.includes(userid)
					const myLevel = level.getLevelingLevel(userid, _level)
					const exp = level.getLevelingXp(userid, _level)
					const ct = await axv.getContact(userid)
					const isOnline = await axv.isChatOnline(userid) ? '✔' : '❌'
					var sts = await axv.getStatus(userid)
					const bio = sts
					const premuser = prem.includes(userid) ? 'Premium' : 'Free'
					const admins = groupAdmins.includes(userid) ? 'Admin' : 'Member'
					var found = false
					Object.keys(pengirim).forEach((i) => {
						if (pengirim[i].id == userid) {
							found = i
						}
					})
					var adm = admins
					if (ct == null) {
						return await axv.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id)
					} else {
						const contact = ct.pushname
						const dp = await axv.getProfilePicFromServer(userid)
						const pictrand2 = menupict
						if (dp == 'ERROR: 401') {
							var pfp = pictrand2
						} else {
							var pfp = dp
						}
						if (contact == undefined) {
							var nama = 'gada namanya, mungkin wibu'
						} else {
							var nama = contact
						}
						const caption = `*Detail Member* ✨ \n\n● *Name :* ${nama}\n● *Bio :* ${bio.status}\n● *Level :* ${myLevel}\n● *Xp :* ${exp}\n● *Chat link :* wa.me/${sender.id.replace('@c.us', '')}\n● *Premium :* ${premuser}\n● *Role :* ${adm}\n● *Banned by Bot :* ${ban ? '✔' : '❌'}\n● *Blocked by Bot :* ${isblocked ? '✔' : '❌'}\n● *Chat with bot :* ${isOnline}`
						axv.sendFileFromUrl(from, pfp, 'dp.jpg', caption, id)
					}
				}
					break
				case prefix + 'jadian':
					if (!isGroupMsg) return axv.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
					const mem = groupMembers
					const aku = mem[Math.floor(Math.random() * mem.length)];
					const kamu = mem[Math.floor(Math.random() * mem.length)];
					const sapa = `Cieee... @${aku.replace(/[@c.us]/g, '')} (💘) @${kamu.replace(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`
					await axv.sendTextWithMentions(from, sapa)
					break

				case prefix + 'resend':
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, Fitur ini hanya bisa digunakan oleh Admin', id)
					if (quotedMsgObj) {
						let encryptMedia
						let replyOnReply = await axv.getMessageById(quotedMsgObj.id)
						let obj = replyOnReply.quotedMsgObj
						if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
							encryptMedia = quotedMsgObj
							if (encryptMedia.animated) encryptMedia.mimetype = ''
						} else if (obj && /ptt|text|audio|video|image/.test(obj.type)) {
							encryptMedia = obj
						} else return
						const _mimetype = encryptMedia.mimetype
						const mediaData = await decryptMedia(encryptMedia)
						await axv.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id)
					} else if (quotedMsgObj) {
						let encryptMedia
						let reponr = await axv.getMessageById(quotedMsgObj.id)
						let obj = reponr.quotedMsgObj
						if (/sticker/.test(quotedMsgObj.type)) {
							encryptMedia = quotedMsgObj
							if (encryptMedia.animated) encryptMedia.mimetype = ''
						} else if (obj && /sticker/.test(obj.type)) {
							encryptMedia = obj
						} else return
						const _mimetype = encryptMedia.mimetype
						const mediaData = await decryptMedia(encryptMedia)
						await axv.sendImageAsSticker(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, StickerMetadata)
					} else axv.reply(from, 'reply pesannya dong', id)
					break
				case prefix + 'pictcogan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cogan = fs.readFileSync('./lib/helper/cogan.json')
					const coganin = JSON.parse(cogan)
					const rondom = Math.floor(Math.random() * coganin.length)
					const ahha = coganin[rondom]
					axv.sendFile(from, ahha, 'cogan.jpg', 'nehh cogan', id)
					break
				case prefix + 'pictcecan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cecan = fs.readFileSync('./lib/helper/cecan.json')
					const cecanin = JSON.parse(cecan)
					const random2 = Math.floor(Math.random() * cecanin.length)
					const ahhayu = cecanin[random2]
					axv.sendFile(from, ahhayu, 'img.jpg', 'nehh cecan', id)
					break
				case prefix + 'cosplay':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx1 = fs.readFileSync('./lib/cosplay.json')
					const cosxz1 = JSON.parse(cosx1)
					const cosvx1 = Math.floor(Math.random() * cosxz1.length)
					const cosxx1 = cosxz1[cosvx1]
					axv.sendFile(from, cosxx1, 'img.jpg', 'nihhh...', id)
					break
				case prefix + 'randomquran':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosxq1 = axios.get(`https://dappagantengg.herokuapp.com/api/islam/alquran?apikey=${dapuhyapi}`)
					const cosxzq1 = cosxq1.data
					const cosvxq1 = Math.floor(Math.random() * cosxzq1.length[0])
					const cosxxq1 = cosxzq1[cosvxq1]
					axv.sendText(from, cosxxq1, id)
					break
				case prefix + 'cosplayloli':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx2 = fs.readFileSync('./lib/cosplayloli.json')
					const cosxz2 = JSON.parse(cosx2)
					const cosvx2 = Math.floor(Math.random() * cosxz2.length)
					const cosxx2 = cosxz2[cosvx2]
					axv.sendFile(from, cosxx2, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'cosplaysagiri':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx3 = fs.readFileSync('./lib/cosplaysagiri.json')
					const cosxz3 = JSON.parse(cosx3)
					const cosvx3 = Math.floor(Math.random() * cosxz3.length)
					const cosxx3 = cosxz3[cosvx3]
					axv.sendFile(from, cosxx3, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'madara':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx4 = fs.readFileSync('./lib/madara.json')
					const cosxz4 = JSON.parse(cosx4)
					const cosvx4 = Math.floor(Math.random() * cosxz4.length)
					const cosxx4 = cosxz4[cosvx4]
					axv.sendFile(from, cosxx4, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'satanic':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx5 = fs.readFileSync('./lib/satanic.json')
					const cosxz5 = JSON.parse(cosx5)
					const cosvx5 = Math.floor(Math.random() * cosxz5.length)
					const cosxx5 = cosxz5[cosvx5]
					axv.sendFile(from, cosxx5, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'tejina':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx6 = fs.readFileSync('./lib/tejina.json')
					const cosxz6 = JSON.parse(cosx6)
					const cosvx6 = Math.floor(Math.random() * cosxz6.length)
					const cosxx6 = cosxz6[cosvx6]
					axv.sendFile(from, cosxx6, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'yuli':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx7 = fs.readFileSync('./lib/yulibocil.json')
					const cosxz7 = JSON.parse(cosx7)
					const cosvx7 = Math.floor(Math.random() * cosxz7.length)
					const cosxx7 = cosxz7[cosvx7]
					axv.sendFile(from, cosxx7, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'mobil':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx8 = fs.readFileSync('./lib/mobil.json')
					const cosxz8 = JSON.parse(cosx8)
					const cosvx8 = Math.floor(Math.random() * cosxz8.length)
					const cosxx8 = cosxz8[cosvx8]
					axv.sendFile(from, cosxx8, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'montor':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx9 = fs.readFileSync('./lib/montor.json')
					const cosxz9 = JSON.parse(cosx9)
					const cosvx9 = Math.floor(Math.random() * cosxz9.length)
					const cosxx9 = cosxz9[cosvx9]
					axv.sendFile(from, cosxx9, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'boneka':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx10 = fs.readFileSync('./lib/boneka.json')
					const cosxz10 = JSON.parse(cosx10)
					const cosvx10 = Math.floor(Math.random() * cosxz10.length)
					const cosxx10 = cosxz10[cosvx10]
					axv.sendFile(from, cosxx10, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'tatasurya':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const cosx11 = fs.readFileSync('./lib/tatasurya.json')
					const cosxz11 = JSON.parse(cosx11)
					const cosvx11 = Math.floor(Math.random() * cosxz11.length)
					const cosxx11 = cosxz11[cosvx11]
					axv.sendFile(from, cosxx11, 'img.jpg', 'nihhh bang...', id)
					break
				case prefix + 'amel':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					const andani = fs.readFileSync('./lib/amelia.json')
					const amel = JSON.parse(andani)
					const randum = Math.floor(Math.random() * amel.length)
					const uwoyy = amel[randum]
					axv.sendImage(from, uwoyy.image, 'Amel.jpg', uwoyy.teks, id)
					break
				case prefix + 'bokep': // MFARELS
				case prefix + 'randombokep': // MFARELS
				case prefix + 'bkp': // MFARELS
					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					const mskkntl = fs.readFileSync('./lib/18+.json') // MFARELS
					const kntlnya = JSON.parse(mskkntl) // MFARELS
					const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
					const rindBkep = kntlnya[rindBkp] // MFARELS
					axv.reply(from, rindBkep.teks, id) // MFARELS
					break
				case prefix + 'join':
					if (args.length == 0) return axv.reply(from, `Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link group]`, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, `Chat owner buat joinin`, id)
					let linkgrup = body.slice(6)
					let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
					let chekgrup = await axv.inviteInfo(linkgrup)
					if (!islink) return axv.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id)
					if (isPrem) {
						await axv.joinGroupViaLink(linkgrup)
							.then(async () => {
								await axv.sendText(from, 'Berhasil join grup via link!')
								await axv.sendText(chekgrup.id, `what up y'all , I'm axv Bot. To find out the commands on this Bot type ${prefix}menu`)
							})
					} else {
						let cgrup = await axv.getAllGroups()
						if (cgrup.length > groupLimit) return axv.reply(from, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`, id)
						if (cgrup.size < memberLimit) return axv.reply(from, `Sorry, Bot wil not join if the group members do not exceed ${memberLimit} people`, id)
						await axv.joinGroupViaLink(linkgrup)
							.then(async () => {
								await axv.reply(from, 'Berhasil join grup via link!', id)
							})
							.catch(() => {
								axv.reply(from, 'Gagal!', id)
							})
					}
					break
				case prefix + 'wattpadstory':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari cerita dari wattpad! Gunakan ${prefix}wattpadstory url story\nContoh : ${prefix}wattpadstory https://www.wattpad.com/story/226120582-my-teacher-levi-x-student-reader`, id)
					const wpstry = body.slice(14)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const datplai = await axios.get(`pstry}`)
						const datplay = datplai.data
						let wtpdst = `*「 WATTPAD STORY 」*\n\n*A U T H O R :* ${datplai.data.author.name}\n`
						for (let i = 0; i < datplay.parts.length; i++) {
							wtpdst += `\n─────────────────\n\n• *Judul :* ${datplai.data.title}\n*•Dibaca :* ${datplai.data.reads}\n• *Votes :* ${datplai.data.votes}\n• *Jumlah Episode :* ${datplai.data.parts_count}\n• *Deskripsi :* ${datplai.data.desc}\n\n`
							wtpdst += `• *Title :* ${datplay.parts[i].title}\n• *URL :* ${datplay.parts[i].url}\n`
						}
						await axv.sendFileFromUrl(from, datplay.thumb, 'image.jpg', wtpdst, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'youwatch':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mencari sebuah film drakor dari website You Watch!\nContoh : ${prefix}youwatch vagabond`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const youwatchsr = body.slice(10)
					const dataurl = await axios.get(`https://bx-hunter.herokuapp.com/api/youwatchsearch?text=${youwatchsr}&apikey=${bxhunter}`)
					const dataapi = dataurl.data
					const resultdata = dataapi.data
					let ywtch = `*「 Y O U W A T C H 」*`
					for (let i = 0; i < resultdata.length; i++) {
						ywtch += `\n─────────────────\n\n• *Judul:* ${resultdata[i].title}\n• *Kategori:* ${resultdata[i].category}\n• *Url:* ${resultdata[i].source}\n`
					}
					await axv.sendFileFromUrl(from, resultdata[0].image, 'img.jpg', ywtch, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'shopee':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}shopee [ Query ]*, Contoh : *${prefix}shopee HP Samsul a20*`, id)

					const shopek = body.slice(8)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const dataplai = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=${lolhuman}&query=${shopek}`)
						const dataplay = dataplai.data.result
						let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${shopek}*\n`
						for (let i = 0; i < dataplay.length; i++) {
							shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay[i].name}\n• Harga* : ${dataplay[i].price}\n• *Terjual* : ${dataplay[i].sold}\n• *Lokasi Toko* : ${dataplay[i].shop_loc}\n• *Deskripsi* : ${dataplay[i].desc}\n• *Link Product : ${dataplay[i].link_produk}*\n`
						}
						await axv.sendFileFromUrl(from, dataplay[0].image_cover, `shopee.jpg`, shopeq, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'doujin':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}doujin [ Query ]*, Contoh : *${prefix}doujin my sister*`, id)

					const djn = body.slice(8)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const djni = await axios.get(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=${lolhuman}&query=${djn}`)
						const djny = djni.data.result
						let djnq = `*「 DOUJIN 」*\n\n*Hasil Pencarian : ${djn}*\n`
						for (let i = 0; i < djny.length; i++) {
							djnq += `\n─────────────────\n\n• *Nama* : ${djny[i].title}\n• *Link* : ${djny[i].link}`
						}
						axv.reply(from, djnq, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'indbeasiswa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const beasisi = await axios.get(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhuman}`)
						const beasisy = beasisi.data.result
						let beasisw = `*Info Beasiswa Indonesia*`
						for (let i = 0; i < beasisy.length; i++) {
							beasisw += `\n─────────────────\n\n• *Nama* : ${beasisy[i].title}\n• *Link* : ${beasisy[i].link}`
						}
						axv.reply(from, beasisw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'groupwa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}groupwa [ Query ]*, Contoh : *${prefix}groupwa Hemsker*`, id)
					const gpwa = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const gpwai = await axios.get(`https://api.lolhuman.xyz/api/groupwhatsapp2?apikey=${lolhuman}&query=${gpwa}`)
						const gpway = gpwai.data.result
						let gpwaw = `*Group Whatsapp*`
						for (let i = 0; i < gpway.length; i++) {
							gpwaw += `\n─────────────────\n\n• *Nama Group* : ${gpway[i].title}\n• *Link* : ${gpway[i].link}`
						}
						axv.sendText(from, gpwaw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'wamod':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}wamod [ Query ]*, Contoh : *${prefix}wamod gbwa*`, id)
					const wamod = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const gpmai = await axios.get(`https://zenzapis.xyz/searching/wamods?query=${wamod}&apikey=${zenzapis}`)
						const gpmay = gpmai.data.result
						let gpmaw = `*WA MOD*`
						for (let i = 0; i < gpmay.length; i++) {
							gpmaw += `\n─────────────────\n\n• *Apk Name* : ${gpmay[i].apk_name}\n• *Link* : ${gpmay[i].apk_url}\n• *Desc* : ${gpmay[i].apk_desc}`
						}
						axv.sendText(from, gpmaw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'turnbackhoax':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bckhoax = await axios.get(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolhuman}`)
						const bckhoaxy = bckhoax.data.result
						let bckhoaxw = `*Turn Back Hoax*`
						for (let i = 0; i < bckhoaxy.length; i++) {
							bckhoaxw += `\n─────────────────\n\n• *Nama* : ${bckhoaxy[i].title}\n• *Link* : ${bckhoaxy[i].link}\n• *Posted* : ${bckhoaxy[i].posted}\n• *Desk* : ${bckhoaxy[i].desc}`
						}
						axv.reply(from, bckhoaxw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'cuaca':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const cuacaq = body.slice(7)
					const cuacap = await rugaapi.cuaca(cuacaq)
					await axv.reply(from, cuacap, id)
						.catch(() => {
							axv.reply(from, 'ada yang error!', id)
						})
					break
				case prefix + 'doaharian':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const dataplaw = await axios.get(`https://dappagantengg.herokuapp.com/api/islam/doaharian?apikey=${dapuhyapi}`)
						const dataplax = dataplaw.result.data
						let harian = `*「 DOA HARIAN 」*`
						for (let i = 0; i < dataplax.length; i++) {
							harian += `\n─────────────────\n\n• *Judul Doa:* ${dataplax[i].title}\n• *Arab:* ${dataplax[i].arabic}\n• *Latin:* ${dataplax[i].latin}\n• *Arti:* ${dataplax[i].translation}\n\n`
						}
						await axv.reply(from, harian, id)
					} catch (err) {
						axv.reply(from, 'Error', id)
						console.log(err)
					}
					break
				case prefix + 'playstore':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					gplay.search({
						term: q,
						num: 10,
						lang: 'id', //CHANGE IT TO 'EN' IF YOU WANT TO GET DATA WITH ENGLISH LANGUAGE
						country: 'id',
						fullDetail: true
					})
						.then(res => {
							let playdatapp = '「  *PLAYSTORE* 」\n\n'
							for (let i = 0; i < res.length; i++) {
								playdatapp += `*- Title:* ${res[i].title}\n*- Installs:* ${res[i].installs}\n*- Score:* ${res[i].scoreText}\n*- Ratings:* ${res[i].ratings}\n*- Reviews:* ${res[i].reviews}\n*- Price:* ${res[i].priceText}\n*- Available:* ${res[i].available}\n*- Size:* ${res[i].size}\n*- Android Version:* ${res[i].androidVersionText}\n*- Developer:* ${res[i].developer}\n*- Genre:* ${res[i].genre}\n*- Content Rating:* ${res[i].contentRating}\n*- Released:* ${res[i].released}\n*- App Id:* ${res[i].appId}\n*- Url:* ${res[i].url}\n\n`
							}
							axv.sendFileFromUrl(from, res[0].icon, '', playdatapp, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'infoapp':
				case prefix + 'infoapk':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Masukkan id aplikasi\nContoh : ${prefix}infoapp com.tencent.ig`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const idaplikasi = body.slice(9)
					axios.get(`https://dappagantengg.herokuapp.com/api/search/playstore-info?id=${idaplikasi}&apikey=${dapuhyapi}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'id apk yang kamu cari tidak dapat ditemukan atau mungkin Rest Api sedang error', id)
							await axv.sendFileFromUrl(from, res.data.result.icon, '', `*App:* ${res.data.result.title}\n*Snippet:* ${res.data.result.snippet}\n*Version:* ${res.data.result.version}\n*Genre:* ${res.data.result.genre}\n*Price:* ${res.data.result.price}\n*Ratings:* ${res.data.result.rating}\n*User Ratings:* ${res.data.result.ratings}\n*Whatsnew:* ${res.data.result.whatsnew}\n*Desc:* ${res.data.result.description}`, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'reportbug':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const reporter = body.slice(11)
					const getuserpicture = await axv.getProfilePicFromServer(sender.id)
					if (getuserpicture == undefined) {
						var profilepicc = errorImg
					} else {
						var profilepicc = getuserpicture
					}
					await axv.sendFileFromUrl(ownerNumber, profilepicc, 'prof.jpg', `Laporan bug dari : *${pushname}*\nNomor : ${serial.replace('@c.us', '')}\n\nBug : *${reporter}*`, id)
					axv.reply(from, 'Laporan berhasil dikirim ke Owner Bot!', id)
					break
				case prefix + 'setgroupname':
					if (!isGroupMsg) return axv.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
					if (!isGroupAdmins) return axv.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
					if (!isBotGroupAdmins) return axv.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
					const namagrup = body.slice(14)
					const sebelum = chat.groupMetadata.gcok
					let halaman = global.page ? global.page : await axv.getPage()
					await halaman.evaluate((chatId, subject) =>
						Store.WapQuery.changeSubject(chatId, subject), groupId, `${namagrup}`)
					axv.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us', '')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
					break
				case prefix + 'setname':
					if (!isOwnerB) return axv.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner Bot!`, id)
					const setnem = body.slice(9)
					await axv.setMyName(setnem)
					axv.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us', '')} 😘`)
					break
				case prefix + 'read':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
					if (!quotedMsg) return axv.reply(from, `Tolong Reply Pesan Bot`, id)
					if (!quotedMsgObj.fromMe) return axv.reply(from, `Tolong Reply Pesan Bot`, id)
					try {
						const reader = await axv.getMessageReaders(quotedMsgObj.id)
						let list = ''
						for (let pembaca of reader) {
							list += `- @${pembaca.id.replace(/@c.us/g, '')}\n`
						}
						axv.sendTextWithMentions(from, `Ngeread doangg.. Nimbrung kagaa\n${list}`)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)
					}
					break
				case prefix + 'setstatus':
					if (!isOwnerB) return axv.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner Bot!`, id)
					const setstat = body.slice(11)
					await axv.setMyStatus(setstat)
					axv.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us', '')} 😘`)
					break
				case prefix + 'botstat': {
					const loadedMsg = await axv.getAmountOfLoadedMessages()
					const charged = await axv.getIsPlugged();
					const device = await axv.getMe();
					const deviceinfo = `- Battery Level : ${device.battery}%\n  ├ Is Charging : ${charged}\n  └ 24 Hours Online : ${device.is24h}\n  ├ OS Version : ${device.phone.os_version}\n  └ Build Number : ${device.phone.os_build_number}\n\n\n _*Jam :*_ ${moment(t * 1000).format('HH:mm:ss')}\n`
					const chatIds = await axv.getAllChatIds()
					const groups = await axv.getAllGroups()
					const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '62895334962050@c.us'].includes(x.id._serialized)).includes(true))
					axv.sendText(from, `*Device Info*\n${deviceinfo}\n\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groupsIn.length}* Group Joined\n- *${groups.length - groupsIn.length}* Groups Left\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *31737 User* Personal Chats Active\n- *16871 User* Total Chats\n- *38951 Chats*\n\n*Whatsapp Version :* ${waver}`)
					break
				}

				//Sticker Converter
				case prefix + 'whatmusic':
				case prefix + 'whatmus':
				case prefix + 'whatsong':
					if (quotedMsg && quotedMsg.type == 'audio' || quotedMsg && quotedMsg.type == 'ptt' || quotedMsg && quotedMsg.type == 'video') {
						try {
							limitFunc.pushLimit(sender.id, 1);

							axv.reply(from, mess.wait, id)
							const mediaData = await decryptMedia(quotedMsg, uaOverride)
							const detmus = await identify(mediaData)
							axv.reply(from, `*Judul:* ${detmus.data.title}\n*Artis:* ${detmus.data.artists}\n*Album:* ${detmus.data.album}\n*Release Date:* ${detmus.data.release_date}`, id)
						} catch (err) {
							console.log(err)
							axv.reply(from, 'Maaf, lagu tidak dapat ditemukan', id)
						}
					} else if (isMedia && type === 'video' || isMedia && type === 'mp4') {
						try {
							limitFunc.pushLimit(sender.id, 1);

							axv.reply(from, mess.wait, id)
							const mediaData = await decryptMedia(message, uaOverride)
							const detmus = await identify(mediaData)
							axv.reply(from, `*Judul:* ${detmus.data.title}\n*Artis:* ${detmus.data.artists}\n*Album:* ${detmus.data.album}\n*Genre:* ${detmus.data.genre}\n*Release Date:* ${detmus.data.release_date}`, id)
						} catch (err) {
							console.log(err)
							axv.reply(from, 'Maaf, lagu tidak dapat ditemukan!', id)
						}
					} else axv.reply(from, `Post/reply audio atau video dengan caption ${whatsong}`, id)
					break
				case prefix + 'colong':
				case prefix + 'curry':
				case prefix + 'curi':
					if (quotedMsg && quotedMsg.type == 'sticker') {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const mediaData = await decryptMedia(quotedMsg)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendImageAsSticker(from, imageBase64, StickerMetadata)
					} else {
						axv.reply(from, 'Reply stikernya bang', id)
					}
					break
				case prefix + 'take':
				case prefix + 'takestick':
					if (quotedMsg && quotedMsg.type == 'sticker' || quotedMsg && quotedMsg.type == 'image') {
						if (!q.includes('|')) return await axv.reply(from, `Untuk mengubah watermark sticker, reply sticker/image dengan caption ${prefix}take package_name | author_name\n\nContoh: ${prefix}takestick PUNYA GUA | videfikri`, id)
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const packnames = q.substring(0, q.indexOf('|') - 1)
						const authors = q.substring(q.lastIndexOf('|') + 2)
						const mediaData = await decryptMedia(quotedMsg)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
							.catch(async (err) => {
								console.error(err)
								await axv.reply(from, 'Error!', id)
							})
					} else if (isMedia && type === 'image' || isMedia && type === 'sticker') {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const packnames = q.substring(0, q.indexOf('|') - 1)
						const authors = q.substring(q.lastIndexOf('|') + 2)
						const mediaData = await decryptMedia(message, uaOverride)
						const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
					} else {
						axv.reply(from, 'format pesan salah om', id)
					}
					break
				case prefix + 'stickergiffull':
				case prefix + 'stikergiffull':
				case prefix + 'sgiffull':
					if (isMedia && type === 'video' || mimetype == 'sticker/gif') {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(message, uaOverride)
							const vidbase = `data:${mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, vidbase, gifxyz, StickerMetadata)
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
								})
						} catch (err) {
							console.log(err)
							axv.reply(from, 'Durasi video terlalu panjang, mohon kecilkan sedikit\nminimal 9 detik', id)
						}
					} else if (quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(quotedMsg, uaOverride)
							const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, gifxyz, StickerMetadata)
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
						}
					} else {
						await axv.reply(from, `Ukuran video terlalu besar`, id)
					}
					break
				case prefix + 'stickergif':
				case prefix + 'stikergif':
				case prefix + 'sgif':
					if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(message, uaOverride)
							const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, gifcrop, StickerMetadatacrop)
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar`, id)
						}
					} else if (quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {

						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(quotedMsg, uaOverride)
							const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, gifcrop, StickerMetadatacrop)
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
						}
					} else {
						await axv.reply(from, `Reply/post video atau gif dengan caption ${prefix}sgif`, id)
					}
					break
				case prefix + 'startgif': //By: ZeusXz
					if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
						try {
							limitFunc.pushLimit(sender.id, 1);
							axv.reply(from, mess.wait, id)
							const mulai = q.split('|')[0]
							const akhir = q.split('|')[1]
							const mediaData = await decryptMedia(message, uaOverride)
							const vidBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, vidBase64, { crop: true, loop: 0, fps: 30, square: 240, startTime: `00:00:${mulai}.0`, endTime: `00:00:${akhir}.0` }, StickerMetadatacrop)
						} catch (err) {
							console.log(err)
							axv.reply(from, 'Kecilkan skala video!\nMinimal 240x240', id)
						}
					} else if (quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						try {
							const mulaini = q.split('|')[0]
							const akhirni = q.split('|')[1]
							const mediaData = await decryptMedia(quotedMsg, uaOverride)
							const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, { crop: true, loop: 0, square: 240, fps: 30, startTime: `00:00:${mulaini}.0`, endTime: `00:00:${akhirni}` }, StickerMetadatacrop)
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
						}
					} else {
						await axv.reply(from, `Ukuran video terlalu besar`, id)
					}
					break
				case prefix + 'sgifwm':
					if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
						if (!q.includes('|')) return await axv.reply(from, `Untuk membuat stickergif watermark\ngunakan ${prefix}sgifwm author | packname`, id)
						const namaPacksgif = q.substring(0, q.indexOf('|') - 1)
						const authorPacksgif = q.substring(q.lastIndexOf('|') + 2)
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(message, uaOverride)
							const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, { crop: true, fps: 30, square: 240, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { author: `${authorPacksgif}`, pack: `${namaPacksgif}`, keepScale: false })
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))

								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
						}
					} else if (quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
						const namaPacksgif = q.substring(0, q.indexOf('|') - 1)
						const authorPacksgif = q.substring(q.lastIndexOf('|') + 2)
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						try {
							const mediaData = await decryptMedia(quotedMsg, uaOverride)
							const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
							await axv.sendMp4AsSticker(from, videoBase64, { crop: true, fps: 30, square: 240, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { author: `${authorPacksgif}`, pack: `${namaPacksgif}`, keepScale: false })
								.then(async () => {
									console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))

								})
						} catch (err) {
							console.error(err)
							await axv.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
						}
					} else {
						await axv.reply(from, `Untuk membuat stickergif dengan watermark\ngunakan ${prefix}sgifwm author | packname`, id)
					}
					break
				case prefix + 'stikertoimg':
				case prefix + 'stickertoimg':
				case prefix + 'stmg':
				case prefix + 'toimg':
					if (quotedMsg && quotedMsg.type == 'sticker') {
						const mediaData = await decryptMedia(quotedMsg)
						axv.reply(from, `Sedang di proses! Silahkan tunggu sebentar...`, id)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendFile(from, imageBase64, 'imgsticker.jpg', 'Berhasil convert Sticker to Image!', id)
							.then(() => {
								console.log(`Sticker to Image Processed for ${processTime(t, moment())} Seconds`)
							})
					} else if (!quotedMsg) return axv.reply(from, `Format salah, silahkan tag sticker yang ingin dijadikan gambar!`, id)
					break


				// Sticker Creator
				case prefix + 'coolteks':
				case prefix + 'cooltext':
					if (args.length == 0) return axv.reply(from, `Untuk membuat teks keren CoolText pada gambar, gunakan ${prefix}cooltext teks\n\nContoh: ${prefix}cooltext axvz`, id)
					rugaapi.cooltext(args[0])
						.then(async (res) => {
							await axv.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
						})
					break
				case prefix + 'raingif':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk membuat stiker gif rain\nGunakan ${prefix}raingif [url]\n\nContoh : ${prefix}raingif https://avatars.githubusercontent.com/axve`, id)
					const wuya = body.slice(9)
					await axv.sendStickerfromUrl(from, `http://docs-jojo.herokuapp.com/api/rain_gif?image_url=${wuya}`, `rain.gif`, '', id)
					break
				case prefix + 'kisahnabi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}kisahnabi nama nabi\nContoh : ${prefix}kisahnabi adam`, id)
					const dudo2 = body.slice(11)
					axios.get(`https://cakrayp.herokuapp.com/api/islamic/prophet/story?nabi=${dudo2}&apikey=${cakrayp}`)
						.then(async (res) => {
							const textnab = `Nama : *${res.data.result.name}*\nLahir : *${res.data.result.kelahiran}*\nWafat Usia : *${res.data.result.wafat_usia}*\nTempat : *${res.data.result.singgah}*\n\nKisah : ${res.data.result.kisah}`
							axv.reply(from, textnab, id)
								.catch((err) => {
									axv.reply(from, 'Maaf, nama nabi yang anda masukkan salah', id)
								})
						})
						.catch((err) => {
							axv.reply(from, 'Maaf, nama nabi yang anda masukkan salah', id)
						})
					break
				case prefix + 'tr':
					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}tr [kodebahasa] [reply caption]\n\ncontoh : ${prefix}tr id [reply caption}`, id)
					const suwayy0 = arg.split('|')[0]
					const suwayy00 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
					axios.get(`https://amm-api-translate.herokuapp.com/translate?engine=google&text=${suwayy00}&to=${suwayy0}`).then(res => {
						const trans = res.data.data.result
						axv.reply(from, trans, id)
					})
					break
				case prefix + 'npm':
					if (!q) return await axv.reply(from, `Format salah!\ngunakan ${prefix}npm package_name`, id)
					try {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const datanpm = await axios.get(`https://videfikri.com/api/npm/?query=${body.slice(5)}`)
						const npm = datanpm.data.result
						await axv.reply(from, `➸ *ID*: ${npm.id}\n➸ *Package Name*: ${npm.name}\n➸ *REV*: ${npm.rev}\n➸ *Version Latest*: ${npm.version_latest}\n➸ *Description*: ${npm.description}\n➸ *Homepage*: ${npm.homepage}\n➸ *Author Name*: ${npm.author_name}\n➸ *License*: ${npm.license}\n➸ *Maintainer*: ${npm.maintainer}\n➸ *Email*: ${npm.email}\n➸ *Created At*: ${npm.created_at}\n➸ *Last Modified*: ${npm.last_modified}`, id)
					} catch (err) {
						console.error(err)
						await axv.reply(from, 'Error!', id)
					}
					break
				case prefix + 'addvn':
					let nuhi = body.slice(7)
					if (quotedMsg && quotedMsg.type === 'audio' || quotedMsg && quotedMsg.type === 'ptt') {
						var mediaData = await decryptMedia(quotedMsg, uaOverride)
						var filename = `./media/audio/${nuhi}.mp3`
						await fs.writeFile(filename, mediaData)
						axv.reply(from, `vn dengan nama ${nuhi} berhasil disimpan didalam database!`, id)
					} else if (isMedia && type === 'audio' || isMedia && type === 'ptt') {
						var mediaData = await decryptMedia(message, uaOverride)
						var filename = `./media/audio/${nuhi}.mp3`
						await fs.writeFileSync(filename, mediaData)
						await axv.reply(from, `vn dengan nama ${nuhi} berhasil disimpan didalam database!`, id)
					} else {
						return axv.reply(from, `Error! silahkan coba kembali...`, id)
					}
					listvn.push(nuhi)
					fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
					break
				case prefix + 'delallvn':
					if (!isOwnerB) return axv.reply(from, 'Fitur ini khusus Owner Bot', id)
					let dellall = listvn.includes(chats)
					listvn.splice(dellall)
					fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
					axv.reply(from, `semua vn didalam database berhasil dihapus`, id)
					break
				case prefix + 'delvn':
					let deli = listvn.indexOf(body.slice(7))
					listvn.splice(deli, 1)
					fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
					axv.reply(from, 'vn berhasil didelete dari database', id)
					break
				case prefix + 'delallimg':
					if (!isOwnerB) return axv.reply(from, `Fitur ini hanya bisa digunakan oleh owner bot!`, id)
					let delimg = listimg.includes(chats)
					listimg.splice(delimg)
					fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
					axv.reply(from, 'semua image didalam database berhasil dihapus', id)
					break
				case prefix + 'delallstik':
					if (!isOwnerB) return axv.reply(from, 'fitur ini khusus owner bot', id)
					let delalstc = liststicker.includes(chats)
					liststicker.splice(delalstc)
					fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
					axv.reply(from, 'semua stiker didalam database berhasil didelete', id)
					break
				case prefix + 'delstiker':
					let delstik = liststicker.indexOf(body.slice(11))
					liststicker.splice(delstik, 1)
					fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
					axv.reply(from, 'sticker berhasil didelete dari database', id)
					break
				case prefix + 'luassegitiga':
					if (args.length == 0) return axv.reply(from, `untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luassegitiga 12 7`, id)
					try {
						const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
						const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
						axv.reply(from, `*Hasil:* ${luasseg}\n*Rumus:* ${caraluas}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'kelsegitiga':
					if (args.length == 0) return axv.reply(from, `Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`, id)
					try {
						const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
						const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
						axv.reply(from, `*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'luaspersegi':
					if (args.length = 0) return axv.reply(from, `Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`, id)
					try {
						const luaspersegi = bdr.datar.luas.persegi(q, false)
						const luaspersegis = bdr.datar.luas.persegi(q, true)
						axv.reply(from, `*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'pythagoras':
					if (args.length == 0) return axv.reply(from, `Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`, id)
					try {
						const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
						const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
						axv.reply(from, `*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'perkalian':
					if (args.length == 0) return axv.reply(from, `Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`, id)
					try {
						const perkal = bdr.rdb.perkalian(args[0], args[1])
						axv.reply(from, `*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'kelpersegi':
					if (args.length == 0) return axv.reply(from, `Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`, id)
					try {
						const persegi = bdr.datar.keliling.persegi(q, false)
						const caraPersegi = bdr.datar.keliling.persegi(q, true)
						axv.reply(from, `*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'kuadrat':
					if (args.length == 0) return axv.reply(from, `Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`, id)
					try {
						const kuadrat = bdr.rdb.kuadrat(q)
						axv.reply(from, `*Hasil:* ${kuadrat}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'kubik':
					if (args.length == 0) return axv.reply(from, `Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`, id)
					try {
						const kubik = bdr.rdb.kubik(q)
						axv.reply(from, `*Hasil:* ${kubik}`, id)
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break
				case prefix + 'addimg':
					let addmg = q
					if (quotedMsg && quotedMsg.type === 'image') {
						var mediaData = await decryptMedia(quotedMsg, uaOverride)
						var filename = `./media/image/${addmg}.jpg`
						await fs.writeFile(filename, mediaData)
						await axv.reply(from, `image dengan nama ${addmg} berhasil disimpan didalam database!`, id)
					} else if (isMedia && type === 'image') {
						var mediaData = await decryptMedia(message, uaOverride)
						var filename = `./media/image/${addmg}.jpg`
						await fs.writeFileSync(filename, mediaData)
						await axv.reply(from, `image dengan nama ${addmg} berhasil disimpan didalam database!`, id)
					} else {
						return axv.reply(from, `Error!, silahkan coba kembali nanti...`, id)
					}
					listimg.push(addmg)
					fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
					break
				case prefix + 'delimg':
					let delx = listimg.indexOf(q)
					listimg.splice(delx, 1)
					fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
					axv.reply(from, `image dengan nama ${delx} berhasil didelete dari database`, id)
					break
				case prefix + 'addstiker': //credit by ./NotF0und
				case prefix + 'addstik':
				case prefix + 'addsticker':
				case prefix + 'addstick':
					let nmHii = q
					if (quotedMsg && quotedMsg.type === 'image' || quotedMsg && quotedMsg.type === 'sticker') {
						var mediaData = await decryptMedia(quotedMsg, uaOverride)
						var filename = `./media/pic/sticker/${nmHii}.jpeg`
						await fs.writeFile(filename, mediaData)
						await axv.reply(from, `sticker dengan nama ${nmHii} berhasil disimpen!`, id)
					} else if (isMedia && type === 'image' || isMedia && type === 'sticker') {
						var mediaData = await decrpytMedia(message, uaOverride)
						var filename = `./media/pic/sticker/${nmHii}.jpeg`
						await fs.writeFileSync(filename, mediaData)
						await axv.reply(from, `sticker dengan nama ${nmHii} berhasil disimpan!`, id)
					} else {
						return axv.reply(from, `Error! Silahkan coba kembali...`, id)
					}
					liststicker.push(nmHii)
					fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
					break
				case prefix + 'sticker':
				case prefix + 'stiker':
				case prefix + 'stc':
				case prefix + 's':
					if (isMedia && type === 'image') {
						const mediaData = await decryptMedia(message, uaOverride)
						const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendImageAsSticker(from, imageBase64, StickerMetadata)
						console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
					} else if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg, uaOverride)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						await axv.sendImageAsSticker(from, imageBase64, StickerMetadata)
						console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
					} else {
						axv.reply(from, mess.error.St, id)
					}
					break
				case prefix + 'fakethumb':
					if (isMedia && isImage || isQuotedImage) {
						const strs = chats.match('https') || chats.match('http')
						if (!strs) return axv.reply(from, 'Masukkan param https/http', id)
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const qtmds = isQuotedImage ? quotedMsg : message
						const mimtype = isQuotedImage ? quotedMsg.mimetype : mimetype
						const mediaData = await decryptMedia(qtmds, uaOverride)
						const bodslice = body.slice(11)
						const imageBse = `data:${mimtype};base64,${mediaData.toString('base64')}`
						await axv.sendLinkWithAutoPreview(from, bodslice, '', imageBse)
					} else {
						axv.reply(from, `Reply foto dengan caption ${prefix}fakethumb url`, id)
					}
					break
				case prefix + 'shutdown':
					if (!isOwnerB) return axv.reply(from, 'Lu siapa?', id)
					axv.sendText(from, 'Shutdown Bot in')
					await sleep(1000)
					axv.sendText(from, '5')
					await sleep(1000)
					axv.sendText(from, '4')
					await sleep(1000)
					axv.sendText(from, '3')
					await sleep(1000)
					axv.sendText(from, '2')
					await sleep(1000)
					axv.sendText(from, '1')
					await sleep(1000)
					axv.sendText(from, `See y'all later`)
					await sleep(10000)
					axv.kill(true)
					break

				case prefix + 'movie':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari suatu film dari website Bajakan:v\n${prefix}movie the uncanny counter`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					rugaapi.movie(args)
						.then(async ({ result }) => {
							let mov = '*-----「 MOVIE 」-----*'
							for (let i = 0; i < result.length; i++) {
								mov += `\n\n• *Judul :* ${result[i].title}\n• *URL Download :* ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
							}
							await axv.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', mov, id)
							console.log('Success sending Movie from query')
						})
						.catch(async (err) => {
							console.error(err)
							await axv.reply(from, 'Error njing', id)
						})
					break
				case prefix + 'translate2':
					if (args.length == 0) return axv.reply(from, `Untuk menggunakan translate pada sebuah kata gunakan ${prefix}translate2 [kode bahasa]\nContoh: ${prefix}translate2 id|my name is udin`, id)
					const csuway1 = arg.split('|')[0]
					const csuway2 = arg.split('|')[1]
					await axios.get('https://api-translate.azharimm.tk/translate?engine=google&text=' + csuway2 + '&to=' + csuway1).then(res => {
						const ctexttr = `Kata : *${res.data.data.origin}*\n\nTranslate to ${csuway1} : *${res.data.data.result}*\n\nTarget : *${res.data.data.targets[0]}*`
						axv.reply(from, ctexttr, id)
					})
					break
				case prefix + 'wattpad':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari sebuah detail dari part cerita Wattpad! Gunakan ${prefix}wattpad [query]\nContoh : ${prefix}wattpad bos birahi`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const bodyslice = body.slice(9)
					try {
						const watpad = await fetch(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${bodyslice}`)
						const watjs = await watpad.json()
						const { result } = await watjs
						let wtpd = `*-----「 WATTPAD 」-----*\n`
						for (let i = 0; i < result.length; i++) {
							wtpd += `\n─────────────────\n\n*•Judul:* ${result[i].title}\n*•Reads:* ${result[i].reads}\n*•Votes:* ${result[i].votes}\n*•Url:* ${result[i].url}\n*•Description:* ${result[i].description}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumb, 'img.jpg', wtpd, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Error bang', id)
					}
					break
				case prefix + 'neonime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mencari anime dari website Neonime!\nContoh: ${prefix}neonime boruto`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					rugaapi.neo(body.slice(9))
						.then(async ({ result }) => {
							let neoni = '*-----「 NEONIME 」-----*'
							for (let i = 0; i < result.length; i++) {
								neoni += `\n\n• *Judul :* ${result[i].title}\n• *Url :* ${result[i].url}\n• *Deskripsi :* ${result[i].desc}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
							}
							await axv.sendFileFromUrl(from, result[0].thumb, 'img.jpg', neoni, id)
							console.log(`Succes sending ${body.slice(9)}`)
						})
						.catch(async (err) => {
							console.error(err)
							axv.reply(from, 'Error njing', id)
						})
					break
				case prefix + 'brainly':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length >= 2) {
						const BrainlySearch = require('./lib/brainly')
						let tanya = body.slice(9)
						let jum = Number(tanya.split('.')[1]) || 2
						if (jum > 10) return axv.reply(from, 'Max 10!', id)
						if (Number(tanya[tanya.length - 1])) {
							tanya
						}
						axv.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
						await BrainlySearch(tanya.split('.')[0], Number(jum), function (res) {
							res.forEach(x => {
								if (x.jawaban.fotoJawaban.length == 0) {
									axv.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)

								} else {
									axv.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
								}
							})
						})
					} else {
						axv.reply(from, 'Usage :\n/brainly [pertanyaan] [.jumlah]\n\nEx : \n/brainly NKRI .2', id)
					}
					break
				case prefix + 'readmore':
					const read = arg.split('|')[0]
					const more = arg.split('|')[1]
					const capts = `${read}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${more}`
					axv.reply(from, capts, id)
					break
				case prefix + 'stikergiphy':
				case prefix + 'stickergiphy':
					if (args.length !== 1) return axv.reply(from, `Maaf, format pesan salah.\nKetik pesan dengan ${prefix}stickergiphy <link_giphy>`, id)
					const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
					const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
					if (isGiphy) {
						const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
						if (!getGiphyCode) { return axv.reply(from, 'Gagal mengambil kode giphy', id) }
						const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
						const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
						axv.sendGiphyAsSticker(from, smallGifUrl).then(() => {
							axv.reply(from, 'Here\'s your sticker')
							console.log(color(`Sticker Processed for ${processTime(t, moment())} Second`, 'aqua'))
						}).catch((err) => console.log(err))
					} else if (isMediaGiphy) {
						const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
						if (!gifUrl) { return axv.reply(from, 'Gagal mengambil kode giphy', id) }
						const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
						axv.sendGiphyAsSticker(from, smallGifUrl)
							.then(() => {
								axv.reply(from, 'Here\'s your sticker')
								console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
							})
							.catch(() => {
								axv.reply(from, `Ada yang error!`, id)
							})
					} else {
						await axv.reply(from, 'Maaf, command sticker giphy hanya bisa menggunakan link dari giphy.  [Giphy Only]', id)
					}
					break
				case prefix + 'infobmkg':
				case prefix + 'infogempa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://cakrayp.herokuapp.com/api/infogempa?apikey=${cakrayp}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'REST-API sedang error', id)
							const imageth = res.data.result.Map
							const magnitudo = res.data.result.Magnitudo
							const kedalamannya = res.data.result.Kedalaman
							const wilayahhh = res.data.result.Wilayah
							const waktuuu = res.data.result.Waktu
							const lintang = res.data.result.Lintang
							const bujur = res.data.result.Bujur
							const txthehe = `Magnitudo: ${magnitudo}\nKedalaman: ${kedalamannya}\nWilayah: ${wilayahhh}\nWaktu: ${waktuuu}\nLintang: ${lintang}\nBujur: ${bujur}`
							axv.sendFileFromUrl(from, imageth, 'thumb.jpg', txthehe, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'bucin':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axios.get(`http://zekais-api.herokuapp.com/bucin?apikey=${zekais}`).then(res => {
						const ayamgrg = res.data.result
						axv.reply(from, ayamgrg, id)
					})
					break
				case prefix + 'setdesc':
					if (!isGroupAdmins) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Admin!')
					const descnya = body.slice(9)
					const ganti = await axv.setGroupDescription(descnya)
					axv.setGroupDescription(groupId, ganti)
					break
				case prefix + 'dankmemes':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://zekais-api.herokuapp.com/dankmemes?apikey=${zekais}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, 'img.jpg', '', id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Rest Api sedang error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'quotesen':
				case prefix + 'quotessen':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axios.get(`http://zekais-api.herokuapp.com/quotesen?apikey=${zekais}`)
						.then(async (res) => {
							const fto = `author : *${res.data.author}*\n\nQuotes : *${res.data.quotes_en}*`;
							axv.reply(from, fto, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Rest Api sedang error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'detail':
					if (args.length == 0) return axv.reply(from, `Untuk mencari detail suatu wilayah!\nContoh : ${prefix}detail Jakarta`, id)
					const jamu = await axios.get(`https://api.i-tech.id/tools/jam?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kota=${body.slice(8)}`).then(res => {
						const husal = `*Wilayah :* ${res.data.timezone}\n*Kota :* ${res.data.address}\n*Tanggal :* ${res.data.date}\n*Jam :* ${res.data.time}\n*Latitude :* ${res.data.latitude}\n*Longitude :* ${res.data.longitude}`
						axv.reply(from, husal, id)
							.catch(() => {
								axv.reply(from, 'Error...', id)
							})
					})
						.catch(() => {
							axv.reply(from, 'Maaf,wilayah yang anda cari tidak dapat ditemukan', id)
						})
					break
				/*case prefix + 'infogempa':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					const bmkg = await axios.get('https://axvz.herokuapp.com/api/infogempa').then(res => {
						const hasil = `*INFO GEMPA*\n*Lokasi* : _${res.data.lokasi}_\n*Kedalaman* : _${res.data.kedalaman}_\n*Koordinat* : _${res.data.koordinat}_\n*Magnitude* : _${res.data.magnitude}_\n*Waktu* : _${res.data.waktu}_\n${res.data.potensi}`;
						axv.sendFileFromUrl(from, res.data.map, 'img.jpg', hasil, id)
					})
					break*/
				case prefix + 'meme':
					if ((isMedia || isQuotedImage) && args.length >= 2) {
						const top = arg.split('|')[0]
						const bottom = arg.split('|')[1]
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const getUrl = await uploadImages(mediaData, false)
						const ImageBase64 = await meme.custom(getUrl, top, bottom)
						axv.sendFile(from, ImageBase64, 'image.png', '', null, true)
						axv.sendImageAsSticker(from, ImageBase64, StickerMetadata)
							.then(() => {
								axv.reply(from, 'Ini makasih!', id)
							})
							.catch(() => {
								axv.reply(from, 'Ada yang error!')
							})
					} else {
						await axv.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
					}
					break
				case prefix + 'quotemaker':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Membuat bot menulis teks yang akan dikirim menjadi gambar`, id)
					limitFunc.pushLimit(sender.id, 1);
					const qtmaker = body.slice(11)
					await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/quotemaker?apikey=${lolhuman}&text=${qtmaker}`, '', '', id)
					break
				case prefix + 'foliokanan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Membuat bot menulis teks yang akan dikirim menjadi gambar`, id)
					const folkan = body.slice(12)
					await axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/foliokanan?text=${folkan}&apikey=${zekais}`, '', '', id)
					break
				case prefix + 'foliokiri':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Membuat bot menulis teks yang akan dikirim menjadi gambar!`, id)
					limitFunc.pushLimit(sender.id, 1);
					const nulisfol1 = body.slice(11)
					await axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/foliokiri?text=${nulisfol1}&apikey=${zekais}`, '', '', id)
					break
				case prefix + 'nulis':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ${prefix}nulis [teks]\n\ncontoh: ${prefix}nulis i love you 3000`, id)
					limitFunc.pushLimit(sender.id, 1);
					const nulisx = body.slice(11)
					await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/maker/nulis?text=${nulisx}&apikey=${dapuhyapi}`, '', '', id)
					break

				//Islam Command
				case prefix + 'listsurah':
					try {
						axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
							.then((response) => {
								let hehex = '╔══✪〘 List Surah 〙✪══\n'
								for (let i = 0; i < response.data.data.length; i++) {
									hehex += '╠➥ '
									hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
								}
								hehex += '╚═〘 *A X V  B O T* 〙'
								axv.reply(from, hehex, id)
							})
					} catch (err) {
						axv.reply(from, err, id)
					}
					break
				case prefix + 'infosurah':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
					var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
					var { data } = responseh.data
					var idx = data.findIndex(function (post, index) {
						if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
							return true;
					});
					var pesan = ""
					pesan = pesan + "*Nama* : " + data[idx].name.transliteration.id + "\n" + "*Asma* : " + data[idx].name.short + "\n" + "*Arti* : " + data[idx].name.translation.id + "\n" + "*Jumlah ayat* : " + data[idx].numberOfVerses + "\n" + "*Nomor surah* : " + data[idx].number + "\n" + "*Jenis* : " + data[idx].revelation.id + "\n" + "*Keterangan* : " + data[idx].tafsir.id
					axv.reply(from, pesan, message.id)
					break
				case prefix + 'surah':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
					var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
					var { data } = responseh.data
					var idx = data.findIndex(function (post, index) {
						if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
							return true;
					});
					nmr = data[idx].number
					if (!isNaN(nmr)) {
						var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
						var { data } = responseh2.data
						var last = function last(array, n) {
							if (array == null) return void 0;
							if (n == null) return array[array.length - 1];
							return array.slice(Math.max(array.length - n, 0));
						};
						bhs = last(args)
						pesan = ""
						pesan = pesan + data.text.arab + "\n\n"
						if (bhs == "en") {
							pesan = pesan + data.translation.en
						} else {
							pesan = pesan + data.translation.id
						}
						pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
						axv.reply(from, pesan, message.id)
					}
					break
				case prefix + 'tafsir':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
					var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
					var { data } = responsh.data
					var idx = data.findIndex(function (post, index) {
						if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
							return true;
					});
					nmr = data[idx].number
					if (!isNaN(nmr)) {
						var responsih = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
						var { data } = responsih.data
						pesan = ""
						pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n"
						pesan = pesan + data.text.arab + "\n\n"
						pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id.long
						axv.reply(from, pesan, message.id)
					}
					break
				case prefix + 'alaudio':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
					ayat = "ayat"
					bhs = ""
					var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
					var surah = responseh.data
					var idx = surah.data.findIndex(function (post, index) {
						if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
							return true;
					});
					nmr = surah.data[idx].number
					if (!isNaN(nmr)) {
						if (args.length > 2) {
							ayat = args[1]
						}
						if (args.length == 2) {
							var last = function last(array, n) {
								if (array == null) return void 0;
								if (n == null) return array[array.length - 1];
								return array.slice(Math.max(array.length - n, 0));
							};
							ayat = last(args)
						}
						pesan = ""
						if (isNaN(ayat)) {
							var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
							var { name, name_translations, number_of_ayah, number_of_surah, recitations } = responsih2.data
							pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
							pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n"
							pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n"
							pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n"
							axv.reply(from, pesan, message.id)
						} else {
							var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
							var { data } = responsih2.data
							var last = function last(array, n) {
								if (array == null) return void 0;
								if (n == null) return array[array.length - 1];
								return array.slice(Math.max(array.length - n, 0));
							};
							bhs = last(args)
							pesan = ""
							pesan = pesan + data.text.arab + "\n\n"
							if (bhs == "en") {
								pesan = pesan + data.translation.en
							} else {
								pesan = pesan + data.translation.id
							}
							pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
							await axv.sendFileFromUrl(from, data.audio.secondary[0])
							await axv.reply(from, pesan, message.id)
						}
					}
					break
				case prefix + 'jsolat':
					if (args.length == 0) return axv.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
					const solatx = body.slice(8)
					const solatj = await rugaapi.jadwaldaerah(solatx)
					await axv.reply(from, solatj, id)
						.catch(() => {
							axv.reply(from, 'Pastikan daerah kamu ada di list ya!', id)
						})
					break
				case prefix + 'daerah':
					const daerahq = await rugaapi.daerah()
					await axv.reply(from, daerahq, id)
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				//Group All User
				case prefix + 'grouplink':
				case prefix + 'linkgc':
					if (!isBotGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
					if (isGroupMsg) {
						const inviteLink = await axv.getGroupInviteLink(groupId);
						axv.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}* Gunakan *${prefix}revoke* untuk mereset Link group`)
					} else {
						axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					}
					break
				case prefix + "revoke":
					if (!isGroupAdmins) return axv.reply(from, 'Lu admin?', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
					if (isBotGroupAdmins) {
						axv
							.revokeGroupInviteLink(from)
							.then((res) => {
								axv.reply(from, `Berhasil Revoke Grup Link gunakan *${prefix}grouplink* untuk mendapatkan group invite link yang terbaru`, id);
							})
							.catch(() => {
								console.log(`[ERR] ${err}`);
							});
					}
					break;
				//Media
				case prefix + 'ytmp3':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mendownload lagu dari youtube\nketik: ${prefix}ytmp3 [link_yt]`, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					yt.ytMp3(q)
						.then(result => {
							console.log(result)
							axv.sendFileFromUrl(from, result.thumb, 'thumb.jpg', `「 *YT MP3* 」\n\n*Title:* ${result.title}\n*Views:* ${result.views}\n*Channel:* ${result.channel}\n*Uploaded:* ${result.published}\n\n${mess.sendfileaudio}`, id)
							let nowey = ytdown(result.videoId, {
								quality: 'highestaudio',
							})
							let deyy = Date.now()
							ffmpeg(nowey)
								.audioBitrate(128)
								.save(`./temp/audio/${result.videoId}.mp3`)
								.on('progress', p => {
									readline.cursorTo(process.stdout, 0)
									process.stdout.write(`${p.targetSize}kb downloaded`)
								})
								.on('end', () => {
									console.log(`\nDone, ${(Date.now() - deyy) / 1000}s`)
									axv.sendFile(from, `./temp/audio/${result.videoId}.mp3`, '', '', id)
										.then(() => {
											console.log(color('[WAPI]', 'cyan'), color('Success sending song!', 'magenta'))
											setTimeout(() => {
												fs.unlinkSync(`./temp/audio/${result.videoId}.mp3`)
												console.log(color(`Success delete file ${result.videoId}.mp3`, 'cyan'))
											}, 10000)
										})
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, '' + err, id)
						})
					break
				case prefix + 'jadwalbola':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const jdbola = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhuman}`)
						const jdbola2 = await jdbola.data.result

						let xixixi = `*「 JADWAL BOLA 」*\n\n`
						for (let i = 0; i < jdbola2.length; i++) {
							xixixi += `\n─────────────────\n\n*Match* : ${jdbola2[i].match}\n*Hari* : ${jdbola2[i].hari}\n*Stasiun TV* : ${jdbola2[i].tv}`
						}
						await axv.reply(from, xixixi, id)
					} catch (err) {
						console.log(err)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
					}
					break
				case prefix + 'shitposting':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.xteam.xyz/shitpost?APIKEY=c4d24c6bef1dac73`, 'gelap.mp4', '', id)
						.catch(() => {
							axv.reply(from, 'Maaf, sistem sedang error', id)
						})
					break
				case prefix + 'emojisticker':
				case prefix + 'emojistiker':

					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}emojisticker [emoji]\nContoh : ${prefix}emojisticker 😫`, id)
					const emoji = emojiUnicode(q)
					limitFunc.pushLimit(sender.id, 1);
					await axv.reply(from, `Wait....`, id)
					console.log(`Creating code emoji => ${emoji}`)
					axv.sendStickerfromUrl(from, `https://api.zekais.com/emoji?unicode=${emoji}&apikey=${zekais}`, StickerMetadata)
						.catch((err) => {
							console.log(err)
							axv.reply(from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', id)
						})
					break
				case prefix + 'emojimix':

					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}emojimix emot1+emot2\nContoh : ${prefix}emojimix 😫+😉`, id)
					const emojix = encodeURIComponent(q.split('+')[0])
					const emojix2 = encodeURIComponent(q.split('+')[1])
					limitFunc.pushLimit(sender.id, 1);
					await axv.reply(from, `Wait....`, id)
					console.log(`Creating code emoji => ${emojix2}`)
					axv.sendStickerfromUrl(from, `https://api.lolhuman.xyz/api/emojimix/${emojix}+${emojix2}?apikey=${lolhuman}`, StickerMetadata)
						.catch((err) => {
							console.log(err)
							axv.reply(from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', id)
						})
					break
				case prefix + 'sisawaktu':
					if (!fs.existsSync(`./lib/tebak-gambar/${from}.json`))
						return axv.reply(
							from,
							`Sesi tebakgambar belum diaktifkan ❌\nketik *!tebakgambar* untuk memulai`,
							id
						);
					const db_tebak = JSON.parse(
						fs.readFileSync(`./lib/tebak-gambar/${from}.json`)
					);
					axv.reply(from, `*Waktu tersisa* = ${db_tebak.remaining}`, id);
					break
				case prefix + 'tebakgambar':
					const reader = fs.readdirSync(`./lib/tebak-gambar/`);
					if (reader.includes(from + ".json")) {
						axv.reply(from, `Maaf sesi tebak gambar sedang berlangsung`, id)
							.then((msgID) => {
								// const datanya = JSON.parse(
								// 	fs.readFileSync(`./lib/tebak-gambar/${from}.json`)
								// );
								axv.reply(from, `Ini dia 👆👆👆`, msgID)
								// conn.sendMessage(from, `Ini dia 👆👆👆`, TypePsn.text, {
								// 	quoted: datanya.message,
								// });
							})

					} else {
						if (!limitFunc.cekLimit(sender, setting.limitCount)) {
							axv.reply(
								from,
								`[ ⚠️ ] Out Of limit [ ⚠️ ]\n\n*Limit anda telah mencapai batas!*\n\n\`\`\`Limit amount akan direset jam 6 pagi\`\`\`\n\nDonate untuk mendapat lebih banyak limit._`,
								id
							);
							return;
						}
						limitFunc.pushLimit(sender, 1);
						var y = setInterval(function () {
							if (!fs.existsSync(`./lib/tebak-gambar/${from}.json`)) return;
							let db_tebak = JSON.parse(
								fs.readFileSync(`./lib/tebak-gambar/${from}.json`)
							);
							var countDownDate = db_tebak.expired_on;
							var now = new Date().getTime();
							var distance = countDownDate - now;
							var hours = Math.floor(
								(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
							);
							var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
							var seconds = Math.floor((distance % (1000 * 60)) / 1000);
							const countReset = `${minutes}:${seconds}`;
							{
								db_tebak.remaining = countReset;
								fs.writeFileSync(
									`./lib/tebak-gambar/${from}.json`,
									JSON.stringify(db_tebak, null, 2)
								);
							}
							if (distance < 0) {
								clearInterval(y);
								console.log(color("Expired Tebak Gambar", 'aqua'));
								fs.writeFileSync(
									`./lib/tebak-gambar/${from}.json`,
									JSON.stringify(db_tebak, null, 2)
								);
								axv.sendReplyWithMentions(
									from,
									`*❌ [ Expired ] ❌*\n\nSesi tebak gambar telah berhenti karena lebih dari ${setting.Tebak_Gambar.Max
									} detik 😔\n\nJawaban : ${db_tebak.data.answer}\nDimulai oleh : ${db_tebak.name
									} ( @${db_tebak.number.replace(
										"@s.whatsapp.net",
										""
									)} )\nPesan terdeteksi : ${db_tebak.listed.length
									}\n\nMulai lagi? ketik *!tebakgambar* 😊`,
									id
								);
								fs.unlinkSync(`./lib/tebak-gambar/${from}.json`);
							}
						}, 1000);
						const nebak = await tebak_gambar();
						console.log("Jawaban : " + nebak.jawaban + ` ( ${from} )`);
						const regextebak = new RegExp("[^aeiou ]", "g");
						axv.sendFileFromUrl(from, nebak.img, 'img.png', `*Tebak gambar diatas ini*\n\nAnda mempunyai waktu ${setting.Tebak_Gambar.Max
						} detik untuk menebak gambar tersebut.\n\n_Note : untuk melihat waktu sisa ketik *${prefix}tebaksetting*_\n\n*CLUE* :   ${nebak.jawaban
							.replace(regextebak, "_")
							.split("")
							.join(" ")}\n\n\`\`\`Sedang menunggu jawaban...\`\`\``,
							id, '', true
							)
						// axios.get(nebak.img, { responseType: 'arrayBuffer' }).then(dt => {
						// 	const filePathNebak = `./temp/${new Date().valueOf()}.png`
						// 	axv.reply(util.format(dt.data))
						// 	fs.writeFileSync(filePathNebak, dt.data)
						// 	axv.sendImage(from, filePathNebak, '', `*Tebak gambar diatas ini*\n\nAnda mempunyai waktu ${setting.Tebak_Gambar.Max
						// 		} detik untuk menebak gambar tersebut.\n\n_Note : untuk mengubah detik ketik *!tebaksetting*_\n\n*CLUE* :   ${nebak.jawaban
						// 			.replace(regextebak, "_")
						// 			.split("")
						// 			.join(" ")}\n\n\`\`\`Sedang menunggu jawaban...\`\`\``, id, true)
								// axv.sendFileFromUrl(from, buffer, TypePsn.image, {
								// 		quoted: hurtz,
								// 		caption: `*Tebak gambar diatas ini*\n\nAnda mempunyai waktu ${setting.Tebak_Gambar.Max
								// 			} detik untuk menebak gambar tersebut.\n\n_Note : untuk mengubah detik ketik *!tebaksetting*_\n\n*CLUE* :   ${nebak.jawaban
								// 				.replace(regextebak, "_")
								// 				.split("")
								// 				.join(" ")}\n\n\`\`\`Sedang menunggu jawaban...\`\`\``,
								// 	})
								.then((obe) => {
									// console.log(obe)
									const objektebak = {
										status: true,
										name: pushname,
										number: sender.id,
										remaining: "",
										expired_on: moment(new Date())
											.add(setting.Tebak_Gambar.Max, "seconds")
											.valueOf(),
										message: obe,
										data: {
											img: nebak.img,
											answer: nebak.jawaban,
										},
										listed: [],
									};
									fs.writeFileSync(
										`./lib/tebak-gambar/${from}.json`,
										JSON.stringify(objektebak, null, 2)
									);
								});
						// }
						// );
					}
					break
				// case prefix + 'tebakgambar':
				// 	if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
				// 	try {
				// 		limitFunc.pushLimit(sender.id, 1);
				// 		const resp = await axios.get('https://zahirr-web.herokuapp.com/api/kuis/tebakgambar?apikey=zahirgans')
				// 		if (resp.data.error) return axv.reply(from, resp.data.error, id)
				// 		const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
				// 		console.log(`${jwban}`)
				// 		axv.sendFileFromUrl(from, resp.data.result.images, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
				// 		await sleep(2000)
				// 		axv.sendText(from, `30 Detik Lagi...`, id)
				// 		await sleep(10000)
				// 		axv.sendText(from, `20 Detik Lagi...`, id)
				// 		await sleep(10000)
				// 		axv.sendText(from, `10 Detik Lagi...`, id)
				// 		await sleep(10000)
				// 		axv.reply(from, jwban, id)

				// 	} catch (err) {
				// 		console.error(err.message)
				// 		await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
				// 	}
				// 	break
				case prefix + 'qotd':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axios.get(`https://dappagantengg.herokuapp.com/api/fun/quoteslucu?apikey=${dapuhyapi}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'Rest Api sedang error', id)
							axv.reply(from, res.data.quotes, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'distance':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
					if (args.length === 0) return axv.reply(from, `[❗] Kirim perintah *${prefix}distance [ Daerah1|Daerah2 ]*\ncontoh : *${prefix}distance Jakarta|Bandung*`)
					axv.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
					try {
						const dfdc1 = arg.split('|')[0]
						const dfdc2 = arg.split('|')[1]
						const dfdcres = await axios.get('https://api.vhtear.com/distance?from=' + dfdc1 + '&to=' + dfdc2 + '&apikey=' + vhtearkey)
						const { result } = dfdcres.data
						await axv.reply(from, `*「 DRIVING-FLYING DISTANCE 」*\n\n${result.data}`, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Lokasi tidak ditemukan')
					}
					break
				case prefix + 'glitch':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}glitch [ Teks1|Teks2 ]*, contoh *${prefix}glitch |ZeusXz|Dev*`, id)
					try {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const glitch1 = q.split('|')[0]
						const glitch2 = q.split('|')[1]
						if (glitch1.length > 10) return axv.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
						if (glitch2.length > 15) return axv.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 15 huruf!_', id)
						axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/textpro/glitch?text1=${glitch1}&text2=${glitch2}&apikey=${dapuhyapi}`, '', '', id)
							.catch(err => {
								console.log(err)
								axv.reply(from, 'Terjadi kesalahan, silahkan coba lagi', id)
							})
					} catch (err) {
						axv.reply(from, 'Format pesannya salah tuh', id)
					}
					break



				case prefix + 'listnekopoi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					rugaapi.listnek()
						.then(async ({ result }) => {
							let listnekopoi = '-----[ *NEKOPOI LIST* ]-----'
							for (let i = 0; i < result.length; i++) {
								listnekopoi += `\n\n• *Judul :* ${result[i].title}\n• *Seri :* ${result[i].seri}\n• *URL :* ${result[i].url}\n=_=_=_=_=_=_=_=_=_=_=_=_=`
							}
							await axv.reply(from, listnekopoi, id)
							console.log('Succes Sending List Nekopoi')
						})
						.catch(async (err) => {
							console.error(err)
							axv.reply(from, 'Error...', id)
						})
					break
				case prefix + 'randomquran':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					rugaapi.quran()
						.then(async (res) => {
							const jelasin = `Surah : ${res.nama}\nArti : ${res.arti}\nAsma : ${res.asma}\nAyat : ${res.ayat}\nDiturunkan di : ${res.type}\nNomor : ${res.nomor}\n Urutan Ke : ${res.urut}`
							await axv.sendFileFromUrl(from, res.audio, '', '', id)
							axv.reply(from, jelasin, id)
						})
					break
				case prefix + 'linknobg':
					if (args.length == 0) return axv.reply(from, 'Kirim link untuk menjadikan sticker nobg', id)
					const linkid = body.slice(10)
					await axv.sendFileFromUrl(from, `https://api.zeks.me/api/removebg?apikey=${apikeyvinz}&url=${linkid}`, 'img.jpg', 'nehh', id)
					await axv.sendImageAsSticker(from, `https://api.zeks.me/api/removebg?apikey=${apikeyvinz}&url=${linkid}`)
						.catch(() => {
							axv.reply(from, 'Error', id)
						})
					break
				case prefix + 'sketch':
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
						axios.get(`https://api.zeks.me/api/sketchf?img=${linkImg}&apikey=${apikeyvinz}`)
							.then(async (res) => {
								await axv.sendFileFromUrl(from, res.data.result, 'img.jpg', '', id)
							})
					} else {
						await axv.reply(from, 'Error njing', id)
					}
					break
				case prefix + '3dphoto':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const beimage = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${beimage}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'imgbb':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const jajas = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(jajas, uaOverride)
						const uploadImg2 = await uploadImages(mediaData, `${sender.id}_img`)
						const namas = body.slice(7)
						axios.get(`https://videfikri.com/api/imgbb/?urlgbr=${uploadImg2}&title=${namas}`)
							.then(async (res) => {
								const besx = `Link: ${res.data.result.url}`
								axv.sendFileFromUrl(from, res.data.result.url, '', besx, id)
									.catch(err => {
										axv.reply(from, besx, id)
									})
							})
					} else {
						axv.reply(from, 'Format pesan salah', id)
					}
					break
				case prefix + 'givecolor':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const qtmz = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(qtmz, uaOverride)
						const upsz = await uploadImages(mediaData, `${sender.id}_img`)
						await axv.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${upsz}`, 'img.jpg', '', id)
							.catch(err => {
								console.log(err)
								axv.reply(from, 'Terjadi kesalahan saat mengupload foto', id)
							})
					} else if (args[0]) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const linksur = args[0]
						await axv.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/colorize-old-photo?image_url=${args}`, 'img.jpg', '', '', id)
					} else {
						axv.reply(from, `Kirim/reply foto dengan caption ${prefix}givecolor`, id)
					}
					break

				case prefix + 'pencil':
				case prefix + 'pensil':
				case prefix + 'pencil2':
				case prefix + 'pensil2':
				case prefix + 'pencilart':
				case prefix + 'artpencil':
				case prefix + 'pensilart':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const beimages = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolhuman}&img=${beimages}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'removebg':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const rembg = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/removebg?apikey=${lolhuman}&img=${rembg}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'what':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const whtx = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/canvas/what?img=${whtx}&apikey=${dapuhyapi}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'imgflip':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const flipx = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/editor/flip?apikey=${lolhuman}&img=${flipx}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'hackertzy':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const hackxx = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/canvas/hacker2?img=${hackxx}&apikey=${dapuhyapi}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'xpro':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr1 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/xpro2?apikey=${lolhuman}&img=${fltr1}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'walden':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr3 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/walden?apikey=${lolhuman}&img=${fltr3}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'valencia':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr4 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/valencia?apikey=${lolhuman}&img=${fltr4}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'toaster':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr5 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/toaster?apikey=${lolhuman}&img=${fltr5}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'stinson':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr6 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/stinson?apikey=${lolhuman}&img=${fltr6}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'slumber':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr7 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/slumber?apikey=${lolhuman}&img=${fltr7}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'rise':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr8 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/rise?apikey=${lolhuman}&img=${fltr8}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'reyes':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr9 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/reyes?apikey=${lolhuman}&img=${fltr9}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'perpetua':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr10 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/perpetua?apikey=${lolhuman}&img=${fltr10}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'dj1':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendPtt(from, './Audio/dj1.mp3', id)
					break
				case prefix + 'dj2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj2.mp3', '', '', id)
					break
				case prefix + 'dj3':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj3.mp3', '', '', id)
					break
				case prefix + 'dj4':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj4.mp3', '', '', id)
					break
				case prefix + 'dj5':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj5.mp3', '', '', id)
					break
				case prefix + 'dj6':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj6.mp3', '', '', id)
					break
				case prefix + 'dj7':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj7.mp3', '', '', id)
					break
				case prefix + 'dj8':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj8.mp3', '', '', id)
					break
				case prefix + 'dj9':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj9.mp3', 'audio', '', id)
					break
				case prefix + 'dj10':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj10.mp3', '', '', id)
					break
				case prefix + 'dj11':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj11.mp3', '', '', id)
					break
				case prefix + 'dj12':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj12.mp3', '', '', id)
					break
				case prefix + 'dj13':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj13.mp3', '', '', id)
					break
				case prefix + 'dj14':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj14.mp3', '', '', id)
					break
				case prefix + 'dj15':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj15.mp3', '', '', id)
					break
				case prefix + 'dj16':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj16.mp3', 'audio', '', id)
					break
				case prefix + 'dj17':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj17.mp3', '', '', id)
					break
				case prefix + 'dj18':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj18.mp3', '', '', id)
					break
				case prefix + 'dj19':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj19.mp3', 'audio', '', id)
					break
				case prefix + 'dj20':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj20.mp3', '', '', id)
					break
				case prefix + 'dj21':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj21.mp3', 'audio', '', id)
					break
				case prefix + 'dj22':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj22.mp3', '', '', id)
					break
				case prefix + 'dj23':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj23.mp3', '', '', id)
					break
				case prefix + 'dj24':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj24.mp3', '', '', id)
					break
				case prefix + 'dj25':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj25.mp3', '', '', id)
					break
				case prefix + 'dj26':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj26.mp3', '', '', id)
					break
				case prefix + 'dj27':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj27.mp3', 'audio', '', id)
					break
				case prefix + 'dj28':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj28.mp3', 'audio', '', id)
					break
				case prefix + 'dj29':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj29.mp3', 'audio', '', id)
					break
				case prefix + 'dj30':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendFile(from, './Audio/dj30.mp3', id)
					break
				case prefix + 'nashville':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr11 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/nashville?apikey=${lolhuman}&img=${fltr11}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'moon':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr12 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/moon?apikey=${lolhuman}&img=${fltr12}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'mayfair':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr13 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/mayfair?apikey=${lolhuman}&img=${fltr13}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'maven':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr14 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/maven?apikey=${lolhuman}&img=${fltr14}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'lofi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr15 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/lofi?apikey=${lolhuman}&img=${fltr15}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'lark':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr16 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/lark?apikey=${lolhuman}&img=${fltr16}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'kelvin':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr17 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/kelvin?apikey=${lolhuman}&img=${fltr17}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'earlybird':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr18 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/earlybird?apikey=${lolhuman}&img=${fltr18}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'hudson':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr19 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/hudson?apikey=${lolhuman}&img=${fltr19}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'gingham':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr20 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/gingham?apikey=${lolhuman}&img=${fltr20}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'clarendon':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr21 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/clarendon?apikey=${lolhuman}&img=${fltr21}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'brooklyn':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr22 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/brooklyn?apikey=${lolhuman}&img=${fltr22}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'brannan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr23 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/brannan?apikey=${lolhuman}&img=${fltr23}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'aden':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr24 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/aden?apikey=${lolhuman}&img=${fltr24}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + '1977':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr25 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/1977?apikey=${lolhuman}&img=${fltr25}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'willow':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const fltr2 = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/filter/willow?apikey=${lolhuman}&img=${fltr2}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'imgtogif':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const igtg = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/convert/togif?apikey=${lolhuman}&img=${igtg}`, '', '', id)
							.catch((e) => {
								console.log(e)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'thisbeautiful':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const btful = await uploadImages(mediaData, `${sender}_img`)
						axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/creator1/beautiful?apikey=${lolhuman}&img=${btful}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break

				case prefix + 'blur':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `kirim gambar dengan caption ${prefix}blur level blur\ncontoh #blur 30`, id)
					const levelb = body.slice(6)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const blurcok = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/canvas/blur?img=${blurcok}&level=${levelb}&apikey=${dapuhyapi}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'korbanldr':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const bnldr = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `http://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${bnldr}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'imgrotate':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `kirim gambar dengan caption ${prefix}blur level\ncontoh #blur 10`, id)
					const rotsi = body.slice(11)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imgrrt = await uploadImages(mediaData, `${sender}_img`)
						await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/editor/rotate?apikey=${lolhuman}&img=${imgrrt}&rotate=${rotsi}`, '', '', id)
							.catch(() => {
								axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break

				case prefix + 'thuglife':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const inimage = await uploadImages(mediaData, `${sender.id}_img`)
						await axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/thuglife?url=${inimage}&apikey=${zekais}`, 'thuglife.jpg', '', id)
							.catch(() => {
								axv.reply(from, 'lagi error', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, hanya bisa foto', id)
					}
					break
				case prefix + 'tobecontinue':
				case prefix + 'tobecontinued':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const inimage = await uploadImages(mediaData, `${sender.id}_img`)
						await axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/tobecontinue?url=${inimage}&apikey=${zekais}`, 'tobe.jpg', '', id)
							.catch(() => {
								axv.reply(from, 'Lagi error', id)
							})
					} else {
						axv.reply(from, 'Format pesan salah, kirim foto bukan video/gif', id)
					}
					break

				case prefix + 'imgtopdf':
				case prefix + 'topdf':
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const skript = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(skript, uaOverride)
						const linksx = await uploadImages(mediaData, `${sender.id}_img`)
						await axv.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolhuman}&img=${linksx}`, `${sender.id}`, '', id)
					} else {
						axv.reply(from, 'Format pesan salah', id)
					}
					break
				case prefix + 'nobg':
				case prefix + 'stcnobg':
				case prefix + 'stikernobg':
				case prefix + 'stickernobg':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mimetipeee = isQuotedImage ? quotedMsg.mimetype : mimetype
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const heynobg = `data:${mimetipeee};base64,${mediaData.toString('base64')}`
						axv.sendImageAsSticker(from, heynobg, { author: '@axv', pack: 'https://axvstore.my.id', removebg: true })
							.catch((err) => {
								console.log(err)
								axv.reply(from, err.message, id)
							})
					} else {
						axv.reply(from, `Reply/post foto dengan caption ${prefix}nobg`, id)
					}
					break
				case prefix + 'textmaker':
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const textbot = body.slice(11)
						const skruap = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(skruap, uaOverride)
						const imgs = await uploadImages(mediaData, false)
						axv.sendImageAsSticker(from, `https://api.memegen.link/images/custom/_/${textbot}.png?background=${imgs}`, StickerMetadata)
					} else {
						axv.reply(from, 'Reply fotonya om', id)
					}
					break
				case prefix + 'imagetourl':
				case prefix + 'imgtourl':
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const linkImg = await uploadImages(mediaData, false)
						await axv.reply(from, linkImg, id)
					} else {
						await axv.reply(from, 'Format pesan salah...', id)
					}
					break
				case prefix + 'pinterestdown':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Mendownload video dari pinterest\nUsage : ${prefix}pinterestdown url\nContoh: ${prefix}pinterestdown https://pin.it/27kpehu`, id)
					axv.reply(from, mess.wait, id)
					const argim = body.slice(15)
					axios.get(`https://zekais-api.herokuapp.com/pinterestdl?url=${argim}&apikey=${zekais}`)
						.then(async (res) => {
							if (res.data.status == 500) return axv.reply(from, 'Url tidak valid', id)
							await axv.sendFileFromUrl(from, res.data.result, 'pin.mp4', '', id)
						})
					break
				case prefix + 'pinterest':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mencari foto dari pinterest\nUsage: ${prefix}pinterest image\nContoh: ${prefix}pinterest oreki`, id)
					limitFunc.pushLimit(sender.id, 1);
					const pinquery = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/search/pinterest-image?query=${pinquery}&apikey=${dapuhyapi}`)
					break
				case prefix + 'igreels':
				case prefix + 'instagramreels':
				case prefix + 'reelsig':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Untuk mendownload reel instagram gunakan ${prefix}igreels link\nContoh: ${prefix}igreels https://www.instagram.com/reel/CTMQQxunAXb/`, id)
					const reelink = body.slice(9)
					axios.get(`https://cakrayp.herokuapp.com/api/instagram/feeds?url=${reelink}&apikey=${cakrayp}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, res.data.message.info, id)
							axv.sendFileFromUrl(from, res.data.result.thumbimg, 'thumb.jpg', `• *Username:* ${res.data.result.username}\n• *Likes:* ${res.data.result.likes}\n• *Comments:* ${res.data.result.comments}\n• *Caption:* ${res.data.result.caption}`, id)
							axv.sendFileFromUrl(from, res.data.result.link[0].url, '', '', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'ig':
				case prefix + 'instagram':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim perintah *${prefix}ig [linkIg]*`, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					insta.fetchPost(args[0])
						.then(async (result) => {
							if (args[1] == '' || args[1] == undefined) {
								var beone = 1
							} else {
								var beone = args[1]
							}
							for (let i = 0; i < beone; i++) {
								await axv.sendFileFromUrl(from, result.links[i].url, '', '', id)
									.then(() => {
										console.log('Success sending Media')
									})
									.catch((err) => {
										console.error(err)
									})
							}
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break

				case prefix + 'nhpdf':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Kode nuklir tidak ditemukan\nUsage : ${prefix}nhpdf 20935`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const nhpdfx = body.slice(7)
					axios.get(`http://api.lolhuman.xyz/api/nhentaipdf/${nhpdfx}?apikey=${lolhuman}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, `${res.data.result}`, '', '', id)
						})
						.catch((e) => {
							console.log(e)
						})
						.catch(() => {
							axv.reply(from, 'Error', id)
						})
					break

				case prefix + 'asupan5':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://api.lolhuman.xyz/api/asupan?apikey=${lolhuman}`)
						.then(async (res) => {
							if (res.data.status == 404) return axv.reply(from, res.data.message, id)
							await axv.sendFileFromUrl(from, res.data.result, `asupan.mp4`, `*R A N D O M  A S U P A N*`, id)
						})
						.catch(err => {
							axv.reply(from, err.data, id)
						})
					break
				case prefix + 'asupanrika':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*R A N D O M  A S U P A N*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'asupanukhty':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupanukhty?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*R A N D O M  A S U P A N*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'asupanbocil':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupanbocil?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*R A N D O M  A S U P A N*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'asupansantuy':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupansantuy?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*R A N D O M  A S U P A N*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'asupan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupan?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*R A N D O M  A S U P A N*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'storyanime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/anime/storyanime?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*Story Anime By AXV Bot*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'gheayoubi':
				case prefix + 'ghea':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/asupan/asupanghea?apikey=${dapuhyapi}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result, '', '*ASUPAN GHEAYUBI*', id)
								.catch(() => {
									console.log(err)
									axv.reply(from, 'Error bang', id)
								})
						})
						.catch(err => {
							axv.reply(from, 'Error bang', id)
						})
					break
				case prefix + 'bioskop':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari bioskop yang ada dikota Kalian\nGunakan ${prefix}bioskop nama kota\nContoh: ${prefix}bioskop Pontianak`, id)
					axv.reply(from, mess.wait, id)
					limitFunc.pushLimit(sender.id, 1);
					const namabis = body.slice(9)
					try {
						const forbis = await fetch(`http://docs-jojo.herokuapp.com/api/bioskop?kota=${namabis}`)
						const fordat = await forbis.json()
						const { result } = await fordat
						let namabisa = `*「 BIOSKOP 」*\n`
						for (let i = 0; i < result.length; i++) {
							namabisa += `\n─────────────────\n\n*•Nama:* ${result[i].title}\n*•Alamat:* ${result[i].alamat}\n*•Bintang:* ${result[i].bintang}\n*•Url:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].img, 'img.jpg', namabisa, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Error bang', id)
					}
					break
				case prefix + 'jadwaltvnow':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://docs-jojo.herokuapp.com/api/jadwaltvnow`)
						.then(async (res) => {
							const nihcp = `*•Jam:* ${res.data.result.jam}\n\n*•Jadwal TV:* ${res.data.result.jadwalTV}`
							axv.reply(from, nihcp, id)
								.catch(() => {
									axv.reply(from, 'Error nih bang, mungkin server sedang maintenance', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'sindiran':
					axios.get(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${leysapi}`)
						.then(async (res) => {
							axv.reply(from, res.data.result, id)
								.catch(() => {
									axv.reply(from, 'Maaf terjadi kesalahan, mungkin website sedang maintenance', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, 'Terjadi kesalahan, silahkan coba ulangi', id)
						})
					break
				case prefix + 'infoloker':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const infolok = await fetch(`http://docs-jojo.herokuapp.com/api/infoloker`)
						const bejson = await infolok.json()
						const { result } = await bejson
						let infonich = `*「 INFO LOKER 」*\n`
						for (let i = 0; i < result.length; i++) {
							infonich += `\n─────────────────\n\n*•Nama Perusahaan:* ${result[i].perusahaan}\n*•Profesi:* ${result[i].profesi}\n*•Lokasi:* ${result[i].lokasi}\n*•Gaji:* ${result[i].gaji}\n*•Pengalaman:* ${result[i].pengalaman}\n*•Job Function:* ${result[i].jobFunction}\n*•Level Karir:* ${result[i].levelKarir}\n*•Edukasi:* ${result[i].edukasi}\n*•Syarat:* ${result[i].syarat}\n*•Link:* ${result[i].link}\n*•Deskripsi:* ${result[i].desc}\n`
						}
						await axv.reply(from, infonich, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Terjadi kesalahan nich', id)
					}
					break
				case prefix + 'jadwaltv':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari jadwal sebuah channel tv, gunakan ${prefix}jadwaltv nama channel\nContoh: ${prefix}jadwaltv trans7\n${prefix}jadwaltv gtv`, id)
					const tvsearch = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const fortv = await axios.get(`https://dappagantengg.herokuapp.com/api/others/jadwaltv?channel=${tvsearch}&apikey=${dapuhyapi}`)
						const tojson = fortv.data.result

						let betv = `*「 JADWAL TV ${tvsearch} 」*\n`
						for (let i = 0; i < tojson.length; i++) {
							betv += `\n*Jam* : ${tojson[i].jam}\n*Tayangan* : ${tojson[i].tayang}\n`
						}
						await axv.reply(from, betv, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Tv yang anda cari tidak tersedia`, id)
					}
					break

				case prefix + 'lk21new':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const new21 = await axios.get(`https://api-lk21.herokuapp.com/newupload`)
						const new2 = new21.data
						const { result } = new2
						let nw21 = `*「 LK21 NEW 」*\n`
						for (let i = 0; i < result.length; i++) {
							nw21 += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Genre:* ${result[i].genre}\n*•Rating:* ${result[i].rating}\n*•Duration:* ${result[i].duration}\n*•Quality:* ${result[i].quality}\n*•Streaming:* ${result[i].watch}\n*•Trailer:* ${result[i].trailer}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'img.jpg', nw21, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Lagi Error', id)
					}
					break
				case prefix + 'lk21comingsoon':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const nws = await axios.get(`https://api-lk21.herokuapp.com/comingsoon`)
						const nwsa = nws.data
						const { result } = nwsa
						let nwss = `*「 LK21 COMING SOON 」*\n`
						for (let i = 0; i < result.length; i++) {
							nwss += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Genre:* ${result[i].genre}\n*•Rating:* ${result[i].rating}\n*•Duration:* ${result[i].duration}\n*•Quality:* ${result[i].quality}\n*•Streaming:* ${result[i].watch}\n*•Trailer:* ${result[i].trailer}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'img.jpg', nwss, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Terjadi kesalahan, silahkan coba lagi nanti', id)
					}
					break
				case prefix + 'lk21seriestv':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const nwsx = await axios.get(`https://api-lk21.herokuapp.com/tv`)
						const nwsax = nwsx.data
						const { result } = nwsax
						let nwsz = `*「 LK21 SERIES TV 」*\n`
						for (let i = 0; i < result.length; i++) {
							nwsz += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Genre:* ${result[i].genre}\n*•Rating:* ${result[i].rating}\n*•Duration:* ${result[i].duration}\n*•Quality:* ${result[i].quality}\n*•Streaming:* ${result[i].watch}\n*•Trailer:* ${result[i].trailer}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'img.jpg', nwsz, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Terjadi kesalahan, silahkan coba lagi nanti', id)
					}
					break
				case prefix + 'lk21negara':
					if (args.length == 0) return axv.reply(from, `Mencari sebuah film berdasarkan negara, gunakan ${prefix}lk21negara negara\nContoh: ${prefix}lk21negara usa`, id)
					const tipex = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const aish = await axios.get(`http://api-lk21.herokuapp.com/country?country=${tipex}`)
						const iash = aish.data
						const { result } = iash
						let nwsz = `*「 LK21 COUNTRY 」*\n`
						for (let i = 0; i < result.length; i++) {
							nwsz += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Genre:* ${result[i].genre}\n*•Rating:* ${result[i].rating}\n*•Duration:* ${result[i].duration}\n*•Quality:* ${result[i].quality}\n*•Streaming:* ${result[i].watch}\n*•Trailer:* ${result[i].trailer}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'img.jpg', nwsz, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Film negara ${tipex} tidak ada didalam website`, id)
					}
					break
				case prefix + 'lk21genre':
					if (args.length == 0) return axv.reply(from, `Mencari sebuah film berdasarkan genre, gunakan ${prefix}lk21genre genrenya\nContoh: ${prefix}lk21genre action`, id)
					const tipe = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const nwz = await axios.get(`http://api-lk21.herokuapp.com/genre?genre=${tipe}`)
						const nwa = nwz.data
						const { result } = nwa
						let nwsz = `*「 LK21 GENRE 」*\n`
						for (let i = 0; i < result.length; i++) {
							nwsz += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Genre:* ${result[i].genre}\n*•Rating:* ${result[i].rating}\n*•Duration:* ${result[i].duration}\n*•Quality:* ${result[i].quality}\n*•Streaming:* ${result[i].watch}\n*•Trailer:* ${result[i].trailer}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'img.jpg', nwsz, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Genre ${tipe} tidak ada didalam website!`, id)
					}
					break
				case prefix + 'faktaunik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.zekais.com/fakta?apikey=${zekais}`)
						.then(res => {
							const faktaunik = `${res.data.result}`
							axv.reply(from, faktaunik, id)
						})
					break
				case prefix + 'ytplaylist':
				case prefix + 'playlistyt':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `mencari sebuah playlist dari youtube gunakan ${prefix}ytplaylist nama playlist\nContoh: ${prefix}ytplaylist good taste music`, id)
					const playlists = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const ytplays = await fetchJson(`https://api.zeks.me/api/ytplaylist?apikey=${apikeyvinz}&q=${playlists}`)
						if (ytplays.status == false) return axv.reply(from, 'Playlist yang anda cari tidak ada', id)
						const { result } = await ytplays
						let playsyt = `*「 YOUTUBE  PLAYLISTS  」*\n`
						for (let i = 0; i < result.length; i++) {
							playsyt += `\n─────────────────\n\n*•Playlist Name:* ${result[i].title}\n*•Video Count:* ${result[i].video_count}\n*•Playlist ID:* ${result[i].id}\n*•Username:* ${result[i].uploader.username}\n*Playlist Url:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumbnail, 'thumbnail.jpg', playsyt, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'indoxxi':
					if (args.length == 0) return axv.reply(from, `Mencari film dari website indoxxi, gunakan ${prefix}indoxxi judul film`, id)
					const inxxi = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const indoxxii = await axios.get(`https://zenzapis.xyz/searching/xvideos?query=${inxxi}&apikey=${zenzapis}`)
						const indodata = indoxxii.data
						if (indodata.status == false) return axv.reply(from, 'Film yang kamu cari tidak ada', id)
						const { result } = await indodata
						let indotext = `*「 INDO XXI  」*\n`
						for (let i = 0; i < result.length; i++) {
							indotext += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Link:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', indotext, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, err.message, id)
					}
					break

				case prefix + 'trendfilm':
				case prefix + 'trendingfilm':
				case prefix + 'filmtrending':
				case prefix + 'filmtrend':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const trendata = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/news/filmtrending?apikey=${hackapi}`)
						const trenjs = trendata.data
						if (trenjs.status == false) return axv.reply(from, 'Film yang kamu cari ngga ada', id)
						const { result } = await trenjs
						let trenword = `*「 TRENDING FILM  」*\n`
						for (let i = 0; i < result.length; i++) {
							trenword += `\n─────────────────\n\n*•Film:* ${result[i].title}\n*•Rank:* ${result[i].rank}\n*•Views:* ${result[i].penonton}\n*•Url:* ${result[i].link}\n`
						}
						await axv.reply(from, trenword, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Terjadi kesalahan, silahkan coba lagi', id)
					}
					break

				case prefix + 'drakorupdate':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const latest = await axios.get(`http://zekais-api.herokuapp.com/drakorlatest?apikey=${zekais}`)
						const belasts = latest.data
						if (belasts.status == 500) return axv.reply(from, res.message, id)
						const { result } = belasts
						let latestdrak = `*「 DRAKOR UPDATE 」*\n`
						for (let i = 0; i < result.length; i++) {
							latestdrak += `\n─────────────────\n\n*•Title:* ${result[i].name}\n*•Uploaded:* ${result[i].upload}\n*•Tag:* ${result[i].tag}\n*•Content:* ${result[i].conten}\n\n*•Link Streaming:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumb, 'korea.jpg', latestdrak, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Lagi error', id)
					}
					break
				case prefix + 'drakorapik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					try {
						const apikdrak = await axios.get(`http://zekais-api.herokuapp.com/filmapikdrama?apikey=${zekais}`)
						const apikkz = apikdrak.data
						const { result } = apikkz
						let bedrak = `*「 FILM APIK DRAKOR 」*\n`
						for (let i = 0; i < result.length; i++) {
							bedrak += `\n─────────────────\n\n*•Judul:* ${result[i].name}\n*•Episode:* ${result[i].episode}\n*•Stars:* ${result[i].star}\n*•Url:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', bedrak, id)
					} catch (err) {
						axv.reply(from, 'Lagi error', id)
					}
					break
				case prefix + 'drakor':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mencari drakor gunakan ${prefix}drakor judul`, id)
					const caridrakor = body.slice(8)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const juduldrakor = await axios.get(`http://zekais-api.herokuapp.com/drakor?query=${caridrakor}&apikey=${zekais}`)
						const anjays = juduldrakor.data
						if (anjays.status == 500) return axv.reply(from, anjays.message, id)
						const { download } = anjays
						let inidrakor = `*•Judul:* ${anjays.title}\n*•Genre:* ${anjays.genre}\n*•Tayang:* ${anjays.tayang}\n*•Director:* ${anjays.director}\n*•Total Episodes:* ${anjays.total_episode}\n*•Sinopsis:* ${anjays.sinopsis}\n`
						for (let i = 0; i < download.length; i++) {
							inidrakor += `\n─────────────────\n\n*•Nama:* ${download[i].name}\n\n*•Zippyshare:* ${download[i].Zippyshare}\n\n*•MirrorDrive:* ${download[i].MirrorDrive}\n\n*•Uptocloud:* ${download[i].Uptocloud}\n\n`
						}
						await axv.sendFileFromUrl(from, anjays.thumb, 'drakor.jpg', inidrakor, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Drakor yang anda cari tidak ada', id)
					}
					break
				case prefix + 'manga':
					if (args.length == 0) return axv.reply(from, 'Judulnya mana?', id)
					const mangasearch = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const mangax = await axios.get(`https://dappagantengg.herokuapp.com/api/manga/klikmanga?query=${mangasearch}&apikey=${dapuhyapi}`)
						const mangas = mangax.data.result
						const { downloads } = mangas
						let mangi = `*•Judul:* ${mangas.title}\n*•Nama:* ${mangas.title}\n*•Author:* ${mangas.author}\n*•Released Year:* ${mangas.release}\n*•Status:* ${mangas.status}\n*•Description:* ${mangas.desc[0]}\n`
						for (let i = 0; i < downloads.length; i++) {
							mangi += `\n─────────────────\n\n*•Link:* ${downloads[i].url}\n`
						}
						await axv.reply(from, mangi, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Manga yang anda cari tidak ada', id)
					}
					break
				case prefix + 'topanime':
					axv.reply(from, 'Error', id)
					break
				case prefix + 'filmkat':
					if (args.length == 0) return axv.reply(from, `Mencari sebuah kategori film dari website Film Apik, Gunakan ${prefix}filmkat kategori\nContoh: ${prefix}filmkat comedy\n\nGunakan bahasa inggris buat kategorinya`, id)
					const katsearch = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const forkat = await axios.get(`https://api-filmapik.herokuapp.com/category?search=${katsearch}`)
						const bekat = forkat.data
						const { result } = await bekat
						let kat = `*「 FILM APIK CATEGORY 」*\n`
						for (let i = 0; i < result.length; i++) {
							kat += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Rating:* ${result[i].rating}\n*•Quality:* ${result[i].quality}\n*•Id:* ${result[i].movieId}\n*•Views:* ${result[i].detail.views}\n*•Genre:* ${result[i].detail.genre}\n*•Director:* ${result[i].detail.director}\n*•Actors:* ${result[i].detail.actors}\n*•Country:* ${result[i].detail.country}\n*•Duration:* ${result[i].detail.duration}\n*•Released Year:* ${result[i].detail.release}\n*•Description:* ${result[i].detail.description}\n`
						}
						const thumbnailpot = result[0].thumbnailPotrait
						const thumbnailscp = result[0].detail.thumbnailLandscape
						if (thumbnailscp == '' || thumbnailscp == undefined || thumbnailscp == null) {
							var pfps = thumbnailpot
						} else {
							var pfps = thumbnailscp
						}
						await axv.sendFileFromUrl(from, pfps, 'img.jpg', kat, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Kategori yang anda cari tidak ada didalam Website!`, id)
					}
					break
				case prefix + 'filmapiknew':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const forkats = await axios.get(`https://api-filmapik.herokuapp.com/latest`)
						const bekats = forkats.data
						const { result } = await bekats
						let kat = `*「 FILM APIK TERBARU 」*\n`
						for (let i = 0; i < result.length; i++) {
							kat += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Rating:* ${result[i].rating}\n*•Quality:* ${result[i].quality}\n*•Id:* ${result[i].movieId}\n*•Views:* ${result[i].detail.views}\n*•Genre:* ${result[i].detail.genre}\n*•Director:* ${result[i].detail.director}\n*•Actors:* ${result[i].detail.actors}\n*•Country:* ${result[i].detail.country}\n*•Duration:* ${result[i].detail.duration}\n*•Released Year:* ${result[i].detail.release}\n*•Description:* ${result[i].detail.description}\n`
						}
						const thumbnailpots = result[0].thumbnailPotrait
						const thumbnailscps = result[0].detail.thumbnailLandscape
						if (thumbnailscps == '' || thumbnailscps == undefined) {
							var pfpz = thumbnailpots
						} else {
							var pfpz = thumbnailscps
						}
						await axv.sendFileFromUrl(from, pfpz, 'img.jpg', kat, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Terjadi kesalahan pada sistem, silahkan coba lagi nanti`, id)
					}
					break
				case prefix + 'film':
					if (args.length == 0) return axv.reply(from, `Format salah!\nKirim perintah ${prefix}film [judul film]\nContoh : ${prefix}film the conjuring`, id)
					const carifilm = body.slice(6)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					try {
						const filmlk = await axios.get(`https://api.vhtear.com/downloadfilm?judul=${carifilm}&apikey=${vhtearkey}`)
						const filmdata = filmlk.data.result
						const { data } = filmdata
						let lkfl = `*「 FILM 」*\n`
						for (let i = 0; i < data.length; i++) {
							lkfl += `\n─────────────────\n\n*•Resolusi:* ${data[i].resolusi}\n*•Url Download:* ${data[i].urlDownload}\n`
						}
						await axv.reply(from, lkfl, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Film yang anda cari tidak ada didalam Website!`, id)
					}
					break
				case prefix + 'filmapik':
					if (args.length == 0) return axv.reply(from, `mendownload film dari Website Film Apik!\nContoh : ${prefix}filmapik url`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const pilem = body.slice(10)
					try {
						const scpik = await axios.get(`https://api.zekais.com/filmapikdl?url=${pilem}&apikey=${zekais}`)
						const apikjson = scpik.data
						const { result } = await apikjson
						let iniapik = `*「 FILM APIK 」*\n`
						for (let i = 0; i < result.length; i++) {
							iniapik += `\n─────────────────\n\n*•Title:* ${result[i].title}\n*•Rating:* ${result[i].rating}\n*•Quality:* ${result[i].quality}\n*•Episode:* ${result[i].episode}\n*•Id:* ${result[i].movieId}\n*•Views:* ${result[i].detail.views}\n*•Genre:* ${result[i].detail.genre}\n*•Duration:* ${result[i].detail.duration}\n*•Director:* ${result[i].detail.director}\n*•Actors:* ${result[i].detail.actors}\n*•Country:* ${result[i].detail.country}\n*•Released Year:* ${result[i].detail.release}\n*•Description:* ${result[i].detail.description}\n`
						}
						const thportrait = result[0].thumbnailPotrait
						const thlandscape = result[0].detail.thumbnailLandscape
						if (thlandscape == '' || thlandscape == undefined) {
							var thp = thportrait
						} else {
							var thp = thlandscape
						}
						await axv.sendFileFromUrl(from, thp, 'img.jpg', iniapik, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Film yang anda cari tidak ada didalam website`, id)
					}
					break
				case prefix + 'randomkpop':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/bts?apikey=${lolhuman}`, 'img.jpg', `nehh ${pushname}`, id)

					break
				case prefix + 'drakorindo':
					if (args.length == 0) return axv.reply(from, `Untuk mencari drakor dari website Drakor Indo, gunakan ${prefix}drakorindo judul drakor`, id)
					const scdrak = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const respo1 = await fetch(`https://axv-api.herokuapp.com/api/drakorindo?q=${scdrak}&apikey=${axvapi}`)
						const respo11 = await respo1.json()
						const { result } = await respo11
						let drk = `*「 DRAKOR INDO 」*\n`
						for (let i = 0; i < result.length; i++) {
							drk += `\n─────────────────\n\n• *Judul:* ${result[i].title}\n• *Upload:* ${result[i].upload}\n• *Link:* ${result[i].link}\n• *Sinopsis:* ${result[i].sinopsis}\n`
						}
						await axv.sendFileFromUrl(from, result[0].image, 'img.jpg', drk, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Drakor yang anda cari tidak ada didalam website`, id)
					}
					break
				case prefix + 'doramaindo':
					if (args.length == 0) return axv.reply(from, `Untuk mencari drakor dari website Dorama Indo, Gunakan ${prefix}doramaindo judul drakor`, id)
					const draksc = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const resp1 = await fetch(`https://axv-api.herokuapp.com/api/doramaindo?q=${draksc}&apikey=${axvapi}`)
						const resp11 = await resp1.json()
						const { result } = await resp11
						let doramax = `*「 DORAMA INDO 」*\n`
						for (let i = 0; i < result.length; i++) {
							doramax += `\n─────────────────\n\n• *Judul:* ${result[i].title}\n• *Genre:* ${result[i].genre}\n• *Status:* ${result[i].status}\n• *Link:* ${result[i].link}\n`
						}
						await axv.sendFileFromUrl(from, result[0].image, 'img.jpg', doramax, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Drakor yang anda cari tidak tersedia diwebsite`, id)
					}
					break
				case prefix + 'xnxx':
					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					if (args.length == 0) return axv.reply(from, `Mendapatkan detail video dari website xnxx, Gunakan ${prefix}xnxx link\nContoh: ${prefix}xnxx https://www.xnxx.com/video-kt0nb99/who_is_she_big_hot_girl_asia_japan_korean_jav`, id)
					const pcas = body.slice(6)
					axios.get(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhuman}&url=${pcas}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result.thumbnail, 'img.jpg', `「 *XNXX* 」\n\n*Title:* ${res.data.result.title}\n*Duration:* ${res.data.result.duration}\n*Views:* ${res.data.result.view}\n*Rating:* ${res.data.result.rating}\n*Like:* ${res.data.result.like}\n*Dislike:* ${res.data.result.dislike}\n*Comment:* ${res.data.result.comment}`, id)
							const inihasilvid = res.data.result.link[1].link
							await axv.sendFileFromUrl(from, inihasilvid, 'vid.mp4', '', id)
								.catch(() => {
									axv.reply(from, 'Url salah, silahkan masukkan url yang benar', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break

				case prefix + 'diamondml':
					axv.sendImage(from, './media/ml.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'diamondff':
					axv.sendImage(from, './media/ff.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'pulsa':
					axv.sendImage(from, './media/pulsa.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'ucpubg':
					axv.sendImage(from, './media/pubg.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'pln':
					axv.sendImage(from, './media/pln.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'igfoll1':
					axv.sendImage(from, './media/igfoll1.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'igfoll2':
					axv.sendImage(from, './media/igfoll2.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'igfoll3':
					axv.sendImage(from, './media/igfoll1.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'iglikes':
					axv.sendImage(from, './media/iglike.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'dominoemas':
					axv.sendImage(from, './media/higgsemas.jpg', '', 'https://axvstore.my.id', id)
					break
				case prefix + 'dominoungu':
					axv.sendImage(from, './media/higgsungujpg', '', 'https://axvstore.my.id', id)
					break



				case prefix + 'xnxxsearch':

					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					if (args.length == 0) return axv.reply(from, `Mencari video dari website XNXX, Gunakan ${prefix}xnxxsearch judul\nContoh: ${prefix}xnxxsearch japan`, id)
					const xsch = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const fucth = await axios.get(`https://zenzapi.xyz/searching/xnxx/search?query=${xsch}&apikey=${zenzapi}`)
						const fucth2 = fucth.data
						const { result } = fucth2
						let xsz = `*「 XNXX 」*\n`
						for (let i = 0; i < result.length; i++) {
							xsz += `\n─────────────────\n\n• *Title:* ${result[i].title}\n• *Url:* ${result[i].url}\n`
						}
						await axv.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', xsz, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, `Mungkin hasil pencarian yang anda inginkan tidak ada didalam website`, id)
					}
					break
				case prefix + 'tebakanime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					const animesoal = await axios.get(`https://zekais-api.herokuapp.com/tebakanime?apikey=${zekais}`)
					if (animesoal.status == false) return axv.reply(from, 'Lagi error', id)
					const imageanime = animesoal.data.image
					limitFunc.pushLimit(sender.id, 1);
					const jawabananime = `*Jawaban* : ${animesoal.data.name}\nDeskripsi : ${animesoal.data.desc}`
					console.log(`${jawabananime}`)
					axv.sendFileFromUrl(from, imageanime, 'image.jpg', `Tebak chara apa ini`, id)
					await sleep(10000)
					axv.sendText(from, '_30 detik lagi_')
					await sleep(10000)
					axv.sendText(from, '_20 detik lagi_')
					await sleep(10000)
					axv.sendText(from, '_10 detik lagi_')
					await sleep(10000)
					axv.reply(from, jawabananime, id)
					break
				case prefix + 'phsearch':
					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					if (args.length == 0) return axv.reply(from, `Mencari bokep dari website Pornhub, gunakan ${prefix}phsearch judul\nContoh: ${prefix}phsearch step sister`, id)
					const phword = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const phapi = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/phub-search?q=${phword}&apikey=${hackapi}`)
					const phdata = phapi.data
					if (phdata.status == false) return axv.reply(from, 'Film yang anda cari tidak dapat ditemukan', id)
					const pornhubb = phdata.result
					let phtext = `*「 P O R N H U B 」*\n`
					for (let i = 0; i < pornhubb.length; i++) {
						phtext += `\n─────────────────\n\n•*Title:* ${result[i].title}\n•*Views:* ${result[i].views}\n•*Channel:* ${result[i].author}\n•*Uploaded:* ${result[i].publish}\n•*Url:* ${result[i].url}\n`
					}
					await axv.sendFileFromUrl(from, result[0].thumb, 'thumbnail.jpg', phtext, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'Terjadi kesalahan, coba lagi nanti', id)
						})
					break
				case prefix + 'searchuser':
					if (args.length == 0) return axv.reply(from, `Mencari user instagram gunakan ${prefix}searchuser query\nContoh: ${prefix}searchuser zennny`, id)
					const userinsta = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const userapi = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/iguser?q=${userinsta}&apikey=${hackapi}`)
					const userdata = userapi.data
					const resultdata2 = userdata.result
					let instatext = `*「 INSTAGRAM USER 」*\n`
					for (let i = 0; i < resultdata2.length; i++) {
						instatext = `\n─────────────────\n\n• *Username:* ${resultdata2[i].username}\n• *Fullname:* ${resultdata2[i].full_name}\n• *Verified:* ${resultdata2[i].verified_user}\n• *Private:* ${resultdata2[i].private_user}\n`
					}
					await axv.sendFileFromUrl(from, resultdata2[0].profile_pic, 'profile.jpg', instatext, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'npbioskop':
				case prefix + 'nowplaying':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const bioskopurl = await axios.get(`https://dappagantengg.herokuapp.com/api/movie/jadwalbioskop?apikey=${dapuhyapi}`)
					const bioskopdata = bioskopurl.data
					if (bioskopdata.status == false) return axv.reply(from, 'Rest Api sedang error', id)
					const bioskopresult = bioskopdata.result
					let bioskoptxt = `*「 NOW PLAYING ON BIOSKOP 」*\n`
					for (let i = 0; i < bioskopresult.length; i++) {
						bioskoptxt += `\n─────────────────\n\n• *Title:* ${bioskopresult[i].title}\n• *Url:* ${bioskopresult[i].url}\n`
					}
					await axv.sendFileFromUrl(from, bioskopresult[0].thumb, 'img.jpg', bioskoptxt, id)
					break
				case prefix + 'bbcindo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const bbcurl = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/cnn?apikey=${dapuhyapi}`)
					const bbcdata = bbcurl.data
					if (bbcdata.status == false) return axv.reply(from, 'Rest Api sedang error', id)
					const bbcresult = bbcdata.result
					let bbctxt = `*「 BBC INDONESIA 」*\n`
					for (let i = 0; i < bbcresult.length; i++) {
						bbctxt += `\n─────────────────\n\n• *Berita:* ${bbcresult[i].title}\n• *Upload:* ${bbcresult[i].upload}\n• *Url:* ${bbcresult[i].url}\n`
					}
					await axv.reply(from, bbctxt, id)
					break
				case prefix + 'cnnindonesia':
				case prefix + 'cnnindo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const cnnapi = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/cnn?apikey=${dapuhyapi}`)
					const cnndata = cnnapi.data
					if (cnndata.status == false) return axv.reply(from, 'Rest Api sedang error', id)
					const cnnresult = cnndata.result
					let cnntext = `*「 CNN INDONESIA 」*\n`
					for (let i = 0; i < cnnresult.length; i++) {
						cnntext += `\n─────────────────\n\n• *Berita:* ${cnnresult[i].title}\n• *Upload:* ${cnnresult[i].upload}\n• *Url:* ${cnnresult[i].url}\n`
					}
					await axv.sendFileFromUrl(from, cnnresult[0].thumb, 'img.jpg', cnntext, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'nanimelatest':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const nanimeurl = await axios.get(`http://zekais-api.herokuapp.com/nanimenew?apikey=${zekais}`)
					const nanimedata = nanimeurl.data
					if (nanimedata.status == 500) return axv.reply(from, nanimedata.result, id)
					const nanimeres = nanimedata.result
					let nanimetxt = `*「 NANIME LATEST 」*\n`
					for (let i = 0; i < nanimeres.length; i++) {
						nanimetxt += `\n─────────────────\n\n• *Judul:* ${nanimeres[i].name}\n• *Rating:* ${nanimeres[i].rating}\n• *Status:* ${nanimeres[i].status}\n• *Url:* ${nanimeres[i].url}\n`
					}
					await axv.sendFileFromUrl(from, nanimeres[0].thumb, 'thumb.jpg', nanimetxt, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'nanimesr':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mencari anime dari website Nanime gunakan ${prefix}nanimesr query\nContoh: ${prefix}nanimesr sword`, id)
					const sranime = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const sranimeurl = axios.get(`http://zekais-api.herokuapp.com/nanimesr?query=${sranime}&apikey=${zekais}`)
					const srdatanime = sranimeurl.data
					if (srdatanime == 500) return axv.reply(from, srdatanime.result, id)
					const resultnime = srdatanime.result
					let txtnanim = `*「 NANIME SEARCH 」*\n`
					for (let i = 0; i < resultnime.length; i++) {
						txtanim += `\n─────────────────\n\n• *Judul:* ${resultnime[i].name}\n• *Rating:* ${resultnime[i].rating}\n• *Status:* ${resultnime[i].status}\n• *Url:* ${resultnime[i].url}\n`
					}
					await axv.sendFileFromUrl(from, resultnime[0].thumb, 'thumb.jpg', txtanim, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'nanimeget':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Masukan url nanime nya\nContoh: ${prefix}nanimeget https://nanime.biz/anime/sword-art-online-alicization-war-of-underworld-2nd-season`, id)
					const getnanime = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const geturlnime = axios.get(`http://zekais-api.herokuapp.com/nanimeget?url=${getnanime}&apikey=${zekais}`)
					const nanimedata2 = geturlnime.data.result
					if (geturlnime.data.result.status == 500) return axv.reply(from, geturlnime.data.result, id)
					const judulnanime = nanimedata2.title
					const thumbnanime = nanimedata2.thumb
					const descnanime = nanimedata2.desc
					axv.sendFileFromUrl(from, thumbnanime, 'thumb.jpg', `Judul: ${judulnanime}\nDeskripsi: ${descnanime}`, id)
					const nameandurl = nanimedata2.url
					let nanimegetxt = `*「 NANIME INFO 」*\n`
					for (let i = 0; i < nanimedata2.length; i++) {
						nanimegetxt += `\n─────────────────\n\n• *Judul:* ${nanimedata2[i].name}\n• *Url:* ${nanimedata2[i].url}\n`
					}
					await axv.reply(from, nanimegetxt, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'youtubetrending':
				case prefix + 'trendingyt':
				case prefix + 'trendingyoutube':
				case prefix + 'yttrending':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Usage : ${prefix}trendingyt countrycode\nContoh : ${prefix}trendingyt id\nContoh 2 : ${prefix}trendingyt usa\nCountry Code bisa ditemukan menggunakan ${prefix}kodebahasa`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const trendyt = await axios.get(`https://cakrayp.herokuapp.com/api/youtube/trending?country=${args[0]}&page=trending&apikey=${cakrayp}`)
					const datatrend = trendyt.data
					if (datatrend.status == false) return axv.reply(from, datatrend.message, id)
					const trendres = datatrend.result
					let trendtxt = `*「 YOUTUBE TRENDING 」*\n`
					for (let i = 0; i < trendres.length; i++) {
						trendtxt += `\n─────────────────\n\n• *Title:* ${trendres[i].title}\n• *Duration:* ${trendres[i].duration}\n• *Viewers:* ${trendres[i].viewers}\n• *Uploaded:* ${trendres[i].publishedat}\n• *Channel:* ${trendres[i].channel.name}\n• *Verified:* ${trendres[i].isverified}\n• *Url:* ${trendres[i].video.url}\n• *Description:* ${trendres[i].description}\n`
					}
					await axv.sendFileFromUrl(from, trendres[0].thumbnail.url, 'thumbnail.jpg', trendtxt, id)
					break
				case prefix + 'trendingmusic':
				case prefix + 'trendmusic':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Usage : ${prefix}trendmusic countrycode\nContoh : ${prefix}trendmusic id\nContoh 2 : ${prefix}trendmusic usa\nCountry Code bisa ditemukan menggunakan ${prefix}kodebahasa`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const trendyt2 = await axios.get(`https://cakrayp.herokuapp.com/api/youtube/trending?country=${args[0]}&page=music&apikey=${cakrayp}`)
					const datatrend2 = trendyt2.data
					if (datatrend2.status == false) return axv.reply(from, datatrend2.message, id)
					const trendres2 = datatrend2.result
					let trendtxt2 = `*「 YOUTUBE TRENDING MUSIC 」*\n`
					for (let i = 0; i < trendres2.length; i++) {
						trendtxt2 += `\n─────────────────\n\n• *Title:* ${trendres2[i].title}\n• *Duration:* ${trendres2[i].duration}\n• *Viewers:* ${trendres2[i].viewers}\n• *Uploaded:* ${trendres2[i].publishedat}\n• *Channel:* ${trendres2[i].channel.name}\n• *Verified:* ${trendres2[i].isverified}\n• *Url:* ${trendres2[i].video.url}\n• *Description:* ${trendres2[i].description}\n`
					}
					await axv.sendFileFromUrl(from, trendres2[0].thumbnail.url, 'thumbnail.jpg', trendtxt2, id)
					break
				case prefix + 'trendgaming':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Usage : ${prefix}trendgaming countrycode\nContoh : ${prefix}trendgaming id\nContoh 2 : ${prefix}trendgaming usa\nCountry Code bisa ditemukan menggunakan ${prefix}kodebahasa`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const trendyt3 = await axios.get(`https://cakrayp.herokuapp.com/api/youtube/trending?country=${args[0]}&page=gaming&apikey=${cakrayp}`)
					const datatrend3 = trendyt3.data
					if (datatrend3.status == false) return axv.reply(from, datatrend3.message, id)
					const trendres3 = datatrend3.result
					let trendtxt3 = `*「 YOUTUBE TRENDING GAMING 」*\n`
					for (let i = 0; i < trendres3.length; i++) {
						trendtxt3 += `\n─────────────────\n\n• *Title:* ${trendres3[i].title}\n• *Duration:* ${trendres3[i].duration}\n• *Viewers:* ${trendres3[i].viewers}\n• *Uploaded:* ${trendres3[i].publishedat}\n• *Channel:* ${trendres3[i].channel.name}\n• *Verified:* ${trendres3[i].isverified}\n• *Url:* ${trendres3[i].video.url}\n• *Description:* ${trendres3[i].description}\n`
					}
					await axv.sendFileFromUrl(from, trendres3[0].thumbnail.url, 'thumbnail.jpg', trendtxt3, id)
					break
				case prefix + 'appstore':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mencari aplikasi dari AppStore!\nGunakan ${prefix}appstore nama aplikasi\nContoh: ${prefix}appstore instagram`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					appstore.search({
						term: q,
						num: 10,
						lang: 'id',
						country: 'id',
						fullDetail: true
					})
						.then(res => {
							let apptext = `*「 App Store 」*\n\n`
							for (let i = 0; i < res.length; i++) {
								apptext += `*- Title:* ${res[i].title}\n*- Developer:* ${res[i].developer}\n*- App Id:* ${res[i].appId}\n*- Genres:* ${res[i].genres}\n*- Content Rating:* ${res[i].contentRating}\n*- Languages:* ${res[i].languages}\n*- Size:* ${res[i].size}\n*- Required OS Version:* ${res[i].requiredOsVersion}\n*- Released:* ${res[i].released}\n*- Updated:* ${res[i].updated}\n*- Version:* ${res[i].version}\n*- Price:* ${res[i].price}\n*- Score:* ${res[i].score}\n*- Reviews:* ${res[i].reviews}\n*- Release Notes:* ${res[i].releaseNotes}\n*- Supported Devices:* {\n\n${res[i].supportedDevices}\n\n}\n\n`
							}
							axv.sendFileFromUrl(from, res[0].icon, '', apptext, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, `Aplikasi yang kamu cari tidak tersedia\n\n${err.message}`, id)
						})
					break
				case prefix + 'ytsearch':
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : ${prefix}ytsearch alan walker alone`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const response2 = await yt.ytSearch(q)
						const jsonserc = await response2
						let xixixi = `*「 YOUTUBE SEARCH 」*`
						for (let i = 0; i < jsonserc.length; i++) {
							xixixi += `\n─────────────────\n\n• *Title* : ${jsonserc[i].title}\n• *Views* : ${jsonserc[i].views}\n• *Duration* : ${jsonserc[i].timestamp} Sec\n• *Uploaded* : ${jsonserc[i].ago}\n• *videoId:* ${jsonserc[i].videoId}\n• *Url* : ${jsonserc[i].url}\n`
						}
						await axv.sendFileFromUrl(from, jsonserc[0].thumbnail, 'thumbserc.jpg', xixixi, id)
					} catch (err) {
						console.log(err)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
					}
					break

				//Primbon Menu
				case prefix + 'kalender':
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const imageLinka = await uploadImages(mediaData, `${sender.id}.jpg`)
						axios.get(`http://docs-jojo.herokuapp.com/api/calendar?image_url=${imageLinka}`)
							.then(async (res) => {
								await axv.sendFileFromUrl(from, res.data.result, 'kalen.jpg', `nihh dah jadi`, id)
								console.log('Berhasil berhasil widirit oyeyy')
							})
							.catch(err => {
								console.log(err)
								axv.reply(from, 'Error om', id)
							})
					} else {
						axv.reply(from, `Format pesan salah\nReply atau post foto dengan menggunakan caption ${prefix}kalender`, id)
					}
					break
				case prefix + 'missing':
					if (args.length == 0) return axv.reply(from, 'Format pesan salah')
					const atas = q.substring(0, q.indexOf('|') - 1)
					const tengah = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
					const bawah = q.substring(q.lastIndexOf('|') + 2)
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const imageLink = await uploadImages(mediaData, `missing.${sender.id}`)
						rugaapi.missing(atas, tengah, bawah, imageLink)
							.then(async ({ result }) => {
								await axv.sendFileFromUrl(from, result.imgUrl, 'missing.jpg', '', id)
								console.log('Success sending image!')
							})
							.catch(async (err) => {
								console.error(err)
								await axv.reply(from, 'Error!', id)
							})
					} else {
						await axv.reply(from, 'Format pesan salah', id)
					}
					break
				case prefix + 'myzodiac':
				case prefix + 'myzodiak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return await axv.reply(from, `Kirim perintah ${prefix}myzodiak namazodiak\nContoh: ${prefix}myzodiak aquarius`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					fetchJson(`https://zenzapi.xyz/api/zodiak-harian?query=${args[0]}&apikey=${zenzapi}`)
						.then(async (res) => {
							if (res.status == false) return axv.reply(from, 'Zodiak yang kamu cari tidak ada', id)
							const zodiakmu = res.result.judul
							const thumbnailni = res.result.thumb
							const datezodiak = res.result.date
							const nohoky = res.result.no_hoki
							const teoriumum2 = res.result.teori.umum
							const teoricinta2 = res.result.teori.love
							const teoriduit2 = res.result.teori.keuangan
							const initextnya = `Zodiak: ${zodiakmu}\nTanggal: ${datezodiak}\nNo Hoki: ${nohoky}\nUmum: ${teoriumum2}\nPercintaan: ${teoricinta2}\nKeuangan: ${teoriduit2}`
							await axv.sendFileFromUrl(from, thumbnailni, 'thumb.jpg', initextnya, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.messsage, id)
						})
					break
				case prefix + 'zodiak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length !== 4) return axv.reply(from, `Untuk mengecek zodiak, gunakan ${prefix}zodiak nama tanggallahir bulanlahir tahunlahir\nContoh: ${prefix}zodiak fikri 13 06 2004`, id)
					const cekzodiak = await rugaapi.cekzodiak(args[0], args[1], args[2])
					await axv.reply(from, cekzodiak, id)
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'zodiakmingguan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mengecek zodiak mingguan, gunakan ${prefix}zodiakmingguan nama zodiak\nContoh: ${prefix}zodiakmingguan sagitarius`, id)
					fetchJson(`https://zenzapi.xyz/api/zodiak-harian?query=${args[0]}&apikey=${zenzapi}`)
						.then(async (res) => {
							if (res.status == false) return axv.reply(from, 'Zodiak yang kamu cari tidak ada, pastikan ketik dengan benar', id)
							const namezod = res.result.judul
							const thumbzod = res.result.thumb
							const datezod = res.result.date
							const nohoki = res.result.no_hoki
							const teoriumum = res.result.teori.umum
							const teorilove = res.result.teori.love
							const teoriduit = res.result.teori.duit
							const bethetext = `Zodiak: ${namezod}\nTanggal: ${datezod}\nNo Hoki: ${nohoki}\nTeori Umum: ${teoriumum}\nTeori Cinta: ${teorilove}\nTeori Keuangan: ${teoriduit}`
							await axv.sendFileFromUrl(from, thumbzod, 'thumbnail.jpg', bethetext, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'artinama':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Untuk mengetahui arti nama seseorang\nketik ${prefix}artinama namakamu`, id)
					rugaapi.artinama(body.slice(10))
						.then(async (res) => {
							await axv.reply(from, `*Arti* : ${res}`, id)
								.catch(() => {
									axv.reply(from, 'Sedang error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'lk21':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Nama Film nya apa??`, id)
					limitFunc.pushLimit(sender.id, 1);
					const lk21x = body.slice(6)
					axios.get(`http://docs-jojo.herokuapp.com/api/lk21?q=${lk21x}`)
						.then(async (res) => {
							await axv.reply(from, `• *Url* : ${res.data.url}\n• *Nama* : ${res.data.title}\n• *Genre* : ${res.data.genre}\n• *Desc* : ${res.data.description}\n• *Actor* : ${res.data.actor}\n• *Country* : ${res.data.country}\n• *Durasi* : ${res.data.duration}\n• *Years* : ${res.data.year}\n• *View* : ${res.data.view}\n• *Director* : ${res.data.directors}\n\n\n_By : AXV_`, id)
								.catch(() => {
									axv.reply(from, 'Sedang error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'cekjodoh':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Untuk mengecek jodoh melalui nama\nketik: ${prefix}cekjodoh nama-kamu nama-pasangan\n\ncontoh: ${prefix}cekjodoh bagas siti\n\nhanya bisa pakai nama panggilan (satu kata)`, id)
					const namax = args[0]
					const pasanganx = args[1]
					axios.get(`https://api.zekais.com/cekjodoh?nama=${namax}&pasangan=${pasanganx}&apikey=${zekais}`).then(async (res) => {
						await axv.reply(from, `Nama: ${res.data.namaAnda}\nPasangan: ${res.data.namaPasangan}\nPositif: ${res.data.sisiPositif}\nSisi Negatif: ${res.data.sisiNegatif}\nDeskripsif: ${res.data.deskripsi}`, id)
							.catch(() => {
								axv.reply(from, 'Server sedang maintenance atau apikey sudah limit', id)
							})
					})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break

				// Random Kata
				case prefix + 'fiersa':
					fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/Fiersa-Besari/main/fiersa-besari.txt')
						.then(res => res.text())
						.then(body => {
							let ff = body.split('\n')
							let randomff = ff[Math.floor(Math.random() * ff.length)]
							axv.reply(from, randomff, id)
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'buatgrup':
					const bwtgrup = body.trim().split(' ')
					const gcnuma = bwtgrup[1]
					axv.createGroup(gcnuma, sender.id)
					axv.sendText(from, 'berhasil membuat grup', id)
					break
				case prefix + 'chika':
					await axv.reply(from, `_Maaf Menu ini telah di hapus._`, id)

					break
				case prefix + 'tomp3':
					if (isMedia || isQuotedVideo || isVideo) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedVideo ? quotedMsg : message
						const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
						console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const temp = './temp'
						const name = new Date() * 1
						const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
						const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
						fs.writeFile(fileInputPath, mediaData, (err) => {
							if (err) return console.error(err)
							ffmpeg(fileInputPath)
								.format('mp3')
								.on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
								.on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
								.on('end', async () => {
									console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
									await axv.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
									console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
									setTimeout(() => {
										fs.unlinkSync(fileInputPath)
										fs.unlinkSync(fileOutputPath)
									}, 30000)
								})
								.save(fileOutputPath)
						})
					} else {
						await axv.reply(from, 'Format pesan salah', id)
					}
					break

				case prefix + 'urgay':
					if (args.length == 0) return axv.reply(from, `Untuk mengetahui seberapa gay seseorang gunakan ${prefix}urgay namanya\n\nContoh: ${prefix}urgay burhan`, id)
					axios.get(`https://axvz.herokuapp.com/api/howgay`)
						.then(res => {
							const gayy = res.data.desc
							axv.reply(from, gayy, id)
						})
					break
				case prefix + 'fakta2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					axios.get(`https://kocakz.herokuapp.com/api/random/text/faktaunik`).then(res => {
						const faktuy = `${res.data.result}`
						axv.reply(from, faktuy, id)
					})
					break
				case prefix + 'fakta':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
						.then(res => res.text())
						.then(body => {
							let splitnix = body.split('\n')
							let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
							axv.reply(from, randomnix, id)
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'katabijak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
						.then(res => res.text())
						.then(body => {
							let splitbijak = body.split('\n')
							let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
							axv.reply(from, randombijak, id)
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'fakboy':
					fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
						.then(res => res.text())
						.then(body => {
							let splitpantun = body.split('\n')
							let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
							axv.reply(from, randompantun.replace(/axv-line/g, "\n"), id)
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'quote':
				case prefix + 'quotes':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					const quotex = await rugaapi.quote()
					await axv.reply(from, quotex, id)
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'cerpen':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://zekais-api.herokuapp.com/cerpen?apikey=${zekais}`)
						.then(async (res) => {
							const ceritanya = `*Judul:* ${res.data.title}\n*Pengarang:* ${res.data.pengarang}\n*Kategori:* ${res.data.category}\n\n*Cerpen:* ${res.data.post}`
							await axv.reply(from, ceritanya, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'motivasi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.zekais.com/quotes?apikey=${zekais}`)
						.then(async (res) => {
							const motiva = `*Motivasi:* ${res.data.quotes}`
							await axv.reply(from, motiva, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'cersex':

					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					rugaapi.cersex()
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.Thumb, 'image.jpg', `- Judul: ${res.Judul}\nCerita : ${res.Cerita}`, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'puisi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/random/puisi?apikey=${lolhuman}`)
						.then(async (res) => {
							const ceritanyya = `*Puisi : :* ${res.data.result}`
							await axv.reply(from, ceritanyya, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'quoteanime':
				case prefix + 'quotesanime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhuman}`)
						.then(async (res) => {
							const qtanime = `*Quote :* ${res.data.result.quote}\n*Character :* ${res.data.result.character}\n*Anime :* ${res.data.result.anime}`
							await axv.reply(from, qtanime, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'nomorhoki':
				case prefix + 'nomerhoki':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Nomernyaa??`, id)
					const nmrhk = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/primbon/nomerhoki?query=${nmrhk}&apikey=${zenzapis}`)
						.then(async (res) => {
							const nmhx = `*Nomor :* ${res.data.result.nomer_hp}\n*Angka Suci :* ${res.data.result.angka_shuzi}\n*Catatan :* ${res.data.result.catatan}`
							await axv.reply(from, nmhx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'katacinta':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://docs-jojo.herokuapp.com/api/katacinta`)
						.then(async (res) => {
							const ktcin = `*${res.data.result}*\n\n_By : AXV_`
							await axv.reply(from, ktcin, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'quotedilan':
				case prefix + 'quotesdilan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhuman}`)
						.then(async (res) => {
							const qtdln = `*Quote :* ${res.data.result}`
							await axv.reply(from, qtdln, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'quotejawa':
				case prefix + 'quotesjawa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zenzapis.xyz/randomtext/jawaquote?apikey=${zenzapis}`)
						.then(async (res) => {
							const jwax = `*Quote :* ${res.data.result.message}`
							await axv.reply(from, jwax, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'infotsunami':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zahirr-web.herokuapp.com/api/infotsunami?apikey=zahirgans`)
						.then(async (res) => {
							const tsnm = `*Tanggal :* ${res.data.result.daftar_tsunami[0].tangal}\n*Lokasi :* ${res.data.result.daftar_tsunami[0].lokasi}\n*Magnitude :* ${res.data.result.daftar_tsunami[0].magnitude}\n*Kedalaman :* ${res.data.result.daftar_tsunami[0].kedalaman}\n*Wilayah :* ${res.data.result.daftar_tsunami[0].wilayah}\n\n_By : AXV_`
							axv.reply(from, tsnm, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'agedetect':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const agxc = await uploadImages(mediaData, `${sender}_img`)
						axios.get(`https://api.lolhuman.xyz/api/agedetect?apikey=${lolhuman}&img=${agxc}`)
							.then(async (res) => {
								const tsnmxx = `*Age :* ${res.data.result}`
								axv.reply(from, tsnmxx, id)
									.catch(() => {
										axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
									})
							})
					}

					else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break

				case prefix + 'whatanime':

					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const whtc = await uploadImages(mediaData, `${sender}_img`)
						axios.get(`https://api.lolhuman.xyz/api/wait?apikey=${lolhuman}&img=${whtc}`)
							.then(async (res) => {
								const whtcx = `*Judul :* ${res.data.result.title_romaji}\n*At :* ${res.data.result.at}\n*Episode :* ${res.data.result.episode}\n*Rate :* ${res.data.result.similarity}\n\n\n_Fitur Ini Belum Tentu Akurat._`
								const vixxdio = `${res.data.result.video}`
								axv.sendFileFromUrl(from, vixxdio, 'anime.mp4', whtcx, id)
								axv.reply(from, whtcx, id)
									.catch(() => {
										axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
									})
							})
					}

					else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'whatanime1':

					if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
						if (isMedia) {
							var mediaData = await decryptMedia(message, uaOverride)
						} else {
							var mediaData = await decryptMedia(quotedMsg, uaOverride)
						}
						const fetch = require('node-fetch')
						const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
						axv.reply(from, 'Searching....', id)
						fetch('https://api.trace.moe/search', {
							method: 'POST',
							body: JSON.stringify({ image: imgBS4 }),
							headers: { "Content-Type": "application/json" }
						})
							.then(respon => respon.json())
							.then(resolt => {
								if (resolt.docs && resolt.docs.length <= 0) {
									axv.reply(from, 'Maaf, saya tidak tau ini anime apa, pastikan gambar yang akan di Search tidak Buram/Kepotong', id)
								}
								const { is_adult, title, title_native, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
								teks = ''
								if (similarity < 0.92) {
									teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
								}
								teks += `➸ *Title Japanese* : ${title_native}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
								teks += `➸ *R-18?* : ${is_adult}\n`
								teks += `➸ *Eps* : ${episode.toString()}\n`
								teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
								var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
								axv.sendFileFromUrl(from, video, 'anime.mp4', teks, id)
								axv.reply(from, teks, id)

							})
							.catch((e) => {
								console.log(e)
								axv.reply(from, 'Ada yang Error!', id)
							})
					} else {
						axv.reply(from, `Maaf format salah\n\nSilahkan kirim foto dengan caption ${prefix}whatanime\n\nAtau reply foto dengan caption ${prefix}whatanime`, id)
					}
					break



				case prefix + 'skatabijak':
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}skatabijak [ Query ]*, Contoh : *${prefix}skatabijak Cinta*`, id)
					const gpwaxx = body.slice(12)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const gpwaxxi = await axios.get(`https://api.lolhuman.xyz/api/searchbijak?apikey=${lolhuman}&query=${gpwaxx}`)
						const gpwaxxy = gpwaxxi.data.result
						let gpwaxxw = `*Kata Bijak Search*`
						for (let i = 0; i < gpwaxxy.length; i++) {
							gpwaxxw += `\n─────────────────\n\n• *Author* : AXV\n• *Quote* : ${gpwaxxy[i].quote}`
						}
						axv.sendText(from, gpwaxxw, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'merdeka':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc1 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/merdeka?apikey=${dapuhyapi}`)
						const bxxc1 = bxc1.data.result
						let bxcc1 = `*MERDEKA NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc1.length; i++) {
							bxcc1 += `\n─────────────────\n\n• *Title* : ${bxxc1[i].title}\n• *Upload* : ${bxxc1[i].upload}\n• *Url* : ${bxxc1[i].url}`
						}
						axv.sendText(from, bxcc1, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'kontan':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc2 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/kontan?apikey=${dapuhyapi}`)
						const bxxc2 = bxc2.data.result
						let bxcc2 = `*KONTAN NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc2.length; i++) {
							bxcc2 += `\n─────────────────\n\n• *Title* : ${bxxc2[i].title}\n• *Jenis* : ${bxxc2[i].jenis}\n• *Upload* : ${bxxc2[i].upload}\n• *Url* : ${bxxc2[i].url}`
						}
						axv.sendText(from, bxcc2, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'antara':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc3 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/antara?apikey=${dapuhyapi}`)
						const bxxc3 = bxc3.data.result
						let bxcc3 = `*ANTARA NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc3.length; i++) {
							bxcc3 += `\n─────────────────\n\n• *Title* : ${bxxc3[i].title}\n• *Jenis* : ${bxxc3[i].jenis}\n• *Upload* : ${bxxc3[i].upload}\n• *Url* : ${bxxc3[i].url}`
						}
						axv.sendText(from, bxcc3, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'zoneid':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc4 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/indozone?apikey=${dapuhyapi}`)
						const bxxc4 = bxc4.data.result
						let bxcc4 = `*ZONE INDO NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc4.length; i++) {
							bxcc4 += `\n─────────────────\n\n• *Title* : ${bxxc4[i].title}\n• *Jenis* : ${bxxc4[i].jenis}\n• *Upload* : ${bxxc4[i].upload}\n• *Url* : ${bxxc4[i].url}`
						}
						axv.sendText(from, bxcc4, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'sindo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc5 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/sindo?apikey=${dapuhyapi}`)
						const bxxc5 = bxc5.data.result
						let bxcc5 = `*SINDO NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc5.length; i++) {
							bxcc5 += `\n─────────────────\n\n• *Title* : ${bxxc5[i].title}\n• *Jenis* : ${bxxc5[i].jenis}\n• *Upload* : ${bxxc5[i].upload}\n• *Url* : ${bxxc5[i].url}`
						}
						axv.sendText(from, bxcc5, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'kompas':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc6 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/kompas?apikey=${dapuhyapi}`)
						const bxxc6 = bxc6.data.result
						let bxcc6 = `*KOMPAS NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc6.length; i++) {
							bxcc6 += `\n─────────────────\n\n• *Title* : ${bxxc6[i].title}\n• *Jenis* : ${bxxc6[i].jenis}\n• *Upload* : ${bxxc6[i].upload}\n• *Url* : ${bxxc6[i].url}`
						}
						axv.sendText(from, bxcc6, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'cnbc':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc7 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/cnbc?apikey=${dapuhyapi}`)
						const bxxc7 = bxc7.data.result
						let bxcc7 = `*CNBC NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc7.length; i++) {
							bxcc7 += `\n─────────────────\n\n• *Title* : ${bxxc7[i].title}\n• *Upload* : ${bxxc7[i].upload}\n• *Url* : ${bxxc7[i].url}`
						}
						axv.sendText(from, bxcc7, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'okezone':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc8 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/okezone?apikey=${dapuhyapi}`)
						const bxxc8 = bxc8.data.result
						let bxcc8 = `*OKEZONE NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc8.length; i++) {
							bxcc8 += `\n─────────────────\n\n• *Title* : ${bxxc8[i].title}\n• *Upload* : ${bxxc8[i].upload}\n• *Url* : ${bxxc8[i].url}`
						}
						axv.sendText(from, bxcc8, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'detik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc9 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/detik?apikey=${dapuhyapi}`)
						const bxxc9 = bxc9.data.result
						let bxcc9 = `*DETIK NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc9.length; i++) {
							bxcc9 += `\n─────────────────\n\n• *Title* : ${bxxc9[i].title}\n• *Upload* : ${bxxc9[i].upload}\n• *Url* : ${bxxc9[i].url}`
						}
						axv.sendText(from, bxcc9, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'daily':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc10 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/daily?apikey=${dapuhyapi}`)
						const bxxc10 = bxc10.data.result
						let bxcc10 = `*DAILY NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc10.length; i++) {
							bxcc10 += `\n─────────────────\n\n• *Title* : ${bxxc10[i].title}\n• *Upload* : ${bxxc10[i].upload}\n• *Url* : ${bxxc10[i].url}`
						}
						axv.sendText(from, bxcc10, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'tribun':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc11 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/tribun?apikey=${dapuhyapi}`)
						const bxxc11 = bxc11.data.result
						let bxcc11 = `*TRIBUN NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc11.length; i++) {
							bxcc11 += `\n─────────────────\n\n• *Title* : ${bxxc11[i].title}\n• *Jenis* : ${bxxc11[i].jenis}\n• *Upload* : ${bxxc11[i].upload}\n• *Url* : ${bxxc11[i].url}`
						}
						axv.sendText(from, bxcc11, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'inews':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bxc12 = await axios.get(`https://dappagantengg.herokuapp.com/api/berita/inews?apikey=${dapuhyapi}`)
						const bxxc12 = bxc12.data.result
						let bxcc12 = `*I NEWS BY AXV BOT*`
						for (let i = 0; i < bxxc12.length; i++) {
							bxcc12 += `\n─────────────────\n\n• *Title* : ${bxxc12[i].title}\n• *Jenis* : ${bxxc12[i].jenis}\n• *Upload* : ${bxxc12[i].upload}\n• *Url* : ${bxxc12[i].url}`
						}
						axv.sendText(from, bxcc12, id)
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'postimg':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);
						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const postimgx = await uploadImages(mediaData, `${sender}_img`)
						axios.get(`https://dappagantengg.herokuapp.com/api/others/imgbb?img=${postimgx}&apikey=${dapuhyapi}`)
							.then(async (res) => {
								const pximg = `${res.data.result.url}`
								axv.reply(from, pximg, id)
									.catch(() => {
										axv.reply(from, 'Kesalahan waktu mengupload foto, silahkan coba lagi', id)
									})
							})
					}

					else {
						axv.reply(from, 'Format pesan salah, silahkan post/reply foto', id)
					}
					break
				case prefix + 'pantun':
					if (isLimit(serial)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolhuman}`)
						.then(async (res) => {
							const pantun = `${res.data.result}`
							await axv.reply(from, pantun, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'freedata':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://zahirr-web.herokuapp.com/api/fakedata?country=en&apikey=zahirgans`)
						.then(async (res) => {
							const osntx = `*Nama* : ${res.data.result.name}\n*Lahir* : ${res.data.result.birthday}\n*Address* : ${res.data.result.address}\n*Kota* : ${res.data.result.city}\n*Wilayah* : ${res.data.result.region}\n*Daerah* : ${res.data.result.country}\n*Zip* : ${res.data.result.zip}\n*Nomer Hp* : ${res.data.result.phone_number}\n*Email* : ${res.data.result.email}\n*Passsword* : ${res.data.result.password}\n\n_By : AXV_`
							await axv.reply(from, osntx, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break

				//Random Images
				case prefix + 'anime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Untuk menggunakan ${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, id)
					if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
						fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
							.then(res => res.text())
							.then(body => {
								let randomnime = body.split('\n')
								let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
								axv.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
							})
							.catch(() => {
								axv.reply(from, 'Ada yang Error!', id)
							})
					} else {
						axv.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}anime untuk melihat list query`)
					}
					break

				case prefix + 'kpop':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
					if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
						fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
							.then(res => res.text())
							.then(body => {
								let randomkpop = body.split('\n')
								let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
								axv.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
							})
							.catch(() => {
								axv.reply(from, 'Ada yang Error!', id)
							})
					} else {
						axv.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
					}
					break
				case prefix + 'ppcp2':
				case prefix + 'ppcouple2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolhuman}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result.male, 'img.jpg', '', id)
							axv.sendFileFromUrl(from, res.data.result.female, 'img.jpg', '', id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Error', id)
								})
						})
					break
				case prefix + 'ppcp':
				case prefix + 'ppcouple':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/randomimage/couple?apikey=${dapuhyapi}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result.pria, 'cp.jpg', '', id)
							await axv.sendFileFromUrl(from, res.data.result.wanita, 'cp.jpg', '', id)
								.catch(() => {
									axv.reply(from, 'lagii error nich', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break


				// Search Any
				case prefix + 'dewabatch':
					if (args.length == 0) return axv.reply(from, `Untuk mencari anime batch dari Dewa Batch, ketik ${prefix}dewabatch judul\n\nContoh: ${prefix}dewabatch naruto`, id)
					rugaapi.dewabatch(args[0])
						.then(async (res) => {
							await axv.sendFileFromUrl(from, `${res.link}`, '', `${res.text}, id`)
						})
					break
				case prefix + 'infoalamat':
					if (args.length == 0) return axv.reply(from, `Untuk mencari suatu alamat\nUsage : ${prefix}infoalamat polresta`, id)
					limitFunc.pushLimit(sender.id, 1);
					rugaapi.ingfo(body.slice(12))
						.then(async (res) => {
							const ingf = `*Alamat :* ${res.result.data}\n\n*Keterangan :* ${res.result.deskripsi}`
							axv.reply(from, ingf, id)
						})
						.catch(() => {
							axv.reply(from, 'Errorr...', id)
						})
					break
				case prefix + 'kusonime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mencari anime dari website Kusonime, gunakan ${prefix}kusonime judul anime`, id)
					const carianim = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const kuson = await axios.get(`https://zahirr-web.herokuapp.com/api/anime/kusonime?search=${carianim}&apikey=zahirgans`)
						const kusondat = kuson.data.result
						const { download } = kusondat
						let kusonimx = `*Title:* ${kusondat.title}\n*Title JP:* ${kusondat.title_jp}\n*Genre:* ${kusondat.genre}\n*Season:* ${kusondat.season}\n*Producer:* ${kusondat.producer}\n*Type:* ${kusondat.type}\n*Status:* ${kusondat.status}\n*Score:* ${kusondat.score}\n*Duration:* ${kusondat.duration}\n*Released On:* ${kusondat.released_on}\n*Description:* ${kusondat.description}\n`
						for (let i = 0; i < download.length; i++) {
							kusonimx += `\n─────────────────\n\n*•Resolution:* ${download[i].resolution}\n*•Web Down:* ${download[i].download_list[0].downloader}\n*•Link Down:* ${download[i].download_list[0].download_link}\n`
						}
						await axv.sendFileFromUrl(from, kusondat.thumbs, 'kusonime.jpg', kusonimx, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'anime yang anda cari tidak ada', id)
					}
					break
				/*
				case prefix+'kusonime':
					if (args.length == 0) return axv.reply(from, `Untuk mencari anime batch dari Kusonime, ketik ${prefix}kusonime judul\n\nContih : ${prefix}kusonime naruto`, id)
					rugaapi.kusonime(args[0])
					.then(async(res) => {
						await axv.sendFileFromUrl(from, `${res.link}`, '', `${res.text}, id`)
					})
					break
					*/

				case prefix + 'randomtiktok':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (q.length == 0) return axv.reply(from, 'nyari random video apa?', id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					scrape.randomTiktok(q)
						.then(res => {
							console.log(res.username)
							ffmpeg(res.video)
								.videoBitrate(1000)
								.save(`./temp/video/${q}.mp4`)
								.on('progress', p => {
									console.log(color(`${p.targetSize}`, 'cyan'), color('downloaded', 'magenta'))
								})
								.on('end', () => {
									console.log(color('[DONE]', 'cyan'), color('Fetching video', 'magenta'))
									axv.sendFile(from, `./temp/video/${q}.mp4`, '', `Username: ${res.username}\nLikes: ${res.likes}\nComments: ${res.comment}\nShare: ${res.share}`, id)
										.then(() => {
											console.log(color('[WAPI]', 'cyan'), color('Success sending video', 'magenta'))
											setTimeout(() => {
												fs.unlinkSync(`./temp/video/${q}.mp4`)
												console.log(color('[SUCCESS]', 'cyan'), color(`Delete file temp/video/${q}.mp4`, 'magenta'))
											}, 5000)
										})
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'sreddit':
					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari gambar dari sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					const carireddit = body.slice(9)
					const hasilreddit = await images.sreddit(carireddit)
					await axv.sendFileFromUrl(from, hasilreddit, '', '', id)
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'ayatkursi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/islam/ayatkursi?apikey=${dapuhyapi}`)
						.then(async (res) => {
							const tafsr = `*Arab:* ${res.data.result.arabic}\n\n*Latin:* ${res.data.result.latin}\n\n*Arti:* ${res.data.result.translation}\n\n*Tafsir:* ${res.data.result.tafsir}`
							await axv.reply(from, tafsr, id)
								.catch((err) => {
									axv.reply(from, err, id)
									console.log(err)
								})
						})
					break
				case prefix + 'resep':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
					const cariresep = body.slice(7)
					const hasilresep = await resep.resep(cariresep)
					await axv.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'quotesislamic':
				case prefix + 'quotesislam':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axios.get(`https://cakrayp.herokuapp.com/api/randomquote/muslim?apikey=${cakrayp}`)
						.then(async (res) => {
							const islm = res.data.result.text_id
							axv.reply(from, islm, id)
								.catch((err) => {
									axv.reply(from, err, id)
									console.log(err)
								})
						})
					break
				case prefix + 'stalktiktok':
				case prefix + 'stalktik':
				case prefix + 'stalktt':
					if (args.length == 0) return axv.reply(from, `Untuk men-stalk akun Tiktok seseorang\nUsage ${prefix}stalktiktok [username]\ncontoh : ${prefix}stalktiktok @itsandani`, id)
					axv.reply(from, mess.wait, id)
					stalkuy.user(q)
						.then(User => {
							console.log(User)
							axv.sendFileFromUrl(from, User.avatar, '', `*- Username:* ${User.uniqueId}\n*- Nickname:* ${User.nickname}\n*- Followers:* ${User.followers}\n*- Following:* ${User.following}\n*- Verified:* ${User.verified}\n*- Private:* ${User.privateAccount}\n*- Total Likes:* ${User.hearts}\n*- Total Videos:* ${User.videos}\n*- Created At:* ${User.createdAt}\n*- Bio:* ${User.signature}\n*- Bio Url:* ${User.bioLink}`, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'gsmarena':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari spefisikasi handphone dari Website GSMArena\nKetik ${prefix}gsmarena [jenishandphone]`, id)
					fetchJson(`https://api.zeks.me/api/gsmArena?apikey=${apikeyvinz}&q=${body.slice(10)}`)
						.then(async (res) => {
							if (res.status == false) return axv.reply(from, 'Barang yang kamu cari tidak ada', id)
							const namabarang = res.data.title
							const linkbarang = res.data.link
							const thumbnailhp = res.data.thumb
							const stringnich = res.data.full_desc.string
							await axv.sendFileFromUrl(from, thumbnailhp, '', `Nama: ${namabarang}\nLink: ${linkbarang}\n${stringnich}`, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
					break
				case prefix + 'memeindo2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolhuman}`, 'img.jpg', '', id)
					break
				case prefix + 'darkjokes':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/randomimage/darkjokes?apikey=${dapuhyapi}`, 'img.jpg', '', id)
					break
				case prefix + 'memeindo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolhuman}`, 'img.jpg', '', id)
					break
				case prefix + 'goldpb':
					if (args.length == 0) return axv.reply(from, `Bot akan mengirimkan Gold Play Button dengan nama yang kalian custom sendiri\nContoh : ${prefix}goldpb axve`, id)
					const yuza = body.slice(8)
					await axv.sendFileFromUrl(from, `https://api.zeks.me/api/gplaybutton?apikey=${apikeyvinz}&text=${yuza}`, 'img.jpg', `Congrats *${yuza} for passed 1M Subscribers`, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'silverpb':
					if (args.length == 0) return axv.reply(from, `Bot akan mengirimkan Silver Play Button dengan kata yang anda masukkan\nContoh : ${prefix}silverpb axve`, id)
					const silsc = body.slice(10)
					await axv.sendFileFromUrl(from, `https://api.zeks.me/api/splaybutton?apikey=${apikeyvinz}&text=${silsc}`, '', `Congrats ${silsc} for passing 100K Subscribers`, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'stalktwit':
				case prefix + 'stalktwitter':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk men-stalk akun Burung Biru/Twitter seseorang\nketik ${prefix}stalktwit [username]\ncontoh : ${prefix}stalktwit anakbabi123`, id)
					const usernya = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/twitter/${usernya}?apikey=${lolhuman}`)
						.then(async (res) => {
							const cptntw = `*Username:* ${res.data.result.name}\n*Full Name:* ${res.data.result.screen_name}\n*Followers:* ${res.data.result.followers}\n*Following:* ${res.data.result.following}\n*Desc:* ${res.data.result.description}`
							await axv.sendFileFromUrl(from, res.data.result.profile_picture, 'img.jpg', cptntw, id)
								.catch(() => {
									axv.reply(from, 'Error', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'stalkig2':
				case prefix + 'igstalk':
				case prefix + 'stalkig':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `${prefix}stalkig user`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					insta.fetchUser(q)
						.then(async (result) => {
							console.log(result)
							await axv.sendFileFromUrl(from, result.hd_profile_pic_url_info.url, '', `*- Username:* ${result.username}\n*- Fullname:* ${result.fullname}\n*- Followers:* ${result.followers} Followers\n*- Following:* ${result.following} Following\n*- Verified:* ${result.is_verified}\n*- Private:* ${result.is_private}\n*- Bio:* ${result.biography}\n*- Url Account:* https://instagram.com/${q}`, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'lyrics':
				case prefix + 'lirik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Untuk mencari lirik dari sebuah lagu\bketik: ${prefix}lirik [judul_lagu]`, id)
					axios.get(`https://api.zekais.com/lirik?query=${body.slice(7)}&apikey=${zekais}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'Lirik yang kamu cari tidak ada', id)
							await axv.sendFileFromUrl(from, res.data.thumb, 'thumb.jpg', `*Judul* : ${res.data.title}\n*Penyanyi* : ${res.data.author}\n*Lirik* : ${res.data.lirik}`, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'rcosplay':
				case prefix + 'cosplayer':
				case prefix + 'cosplayers':
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/mobil?apikey=ApiRevita`, 'ngenggg.jpg', '', id)
					break
				case prefix + 'creepypasta':
				case prefix + 'creepyfact':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					axios.get(`https://zenzapi.xyz/api/creepyfact?apikey=${zenzapi}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'Lagi error', id)
							axv.reply(from, res.data.result.message, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'chord':
					if (args.length == 0) return axv.reply(from, `Untuk mencari lirik dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
					const chordq = body.slice(7)
					axios.get(`https://docs-jojo.herokuapp.com/api/chord?q=${chordq}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, res.data.error, id)
							const textchord = `Chord Guitar : ${chordq}\n\n${res.data.result}`
							axv.reply(from, textchord, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'ssweb':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Kirim perintah *${prefix}ssweb [link website]\nContoh: ${prefix}ssweb https://axvstore.my.id`, id)
					const webss = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					await axv.sendFileFromUrl(from, `https://dappagantengg.herokuapp.com/api/others/ssweb?url=${webss}&apikey=${dapuhyapi}`, 'img.jpg', `nih screenshot-an ${webss} nya`, id)
					break


				case prefix + 'fb2':
				case prefix + 'fbvid':
				case prefix + 'fb3':
				case prefix + 'facebook3':
					if (args.length == 0) return axv.reply(from, `Untuk mendownload sebuah video dari Facebook, Ketik ${prefix}fb linkvideo`, id)
					break

				case prefix + 'ig2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}ig2 linkig`, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, '_Scrapping Metadataa..._', id)
					axios.get(`http://api.lolhuman.xyz/api/instagram2?apikey=${lolhuman}&url=${body.slice(5)}`)
						.then(async (res) => {
							axv.sendFileFromUrl(from, res.data.result.media[0], 'ig.mp4', '', id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Error njing', id)
								})
						})
					break
				case prefix + 'twitter':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim Perintah ${prefix}twitter [linktwitter]`, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					qqq
					axios.get(`https://dappagantengg.herokuapp.com/api/socialmedia/twitter?url=${anjayx}&apikey=${dapuhyapi}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.download.hd, '', `*caption: ${res.data.desc}*`, id)
								.catch(() => {
									axv.reply(from, 'error njing', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'fb':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}fb link`, id)
					const fbd = body.slice(4)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${lolhuman}&url=${fbd}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result, '', 'Donee..', id)
								.catch(() => {
									axv.reply(from, 'Link salah, silahkan masukkan link yang baik dan benar:v', id)
								})
						})
						.catch(err => {
							console.log(err)
						})
					break

				case prefix + 'tiktok3':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Kirim perintah ${prefix}tiktok3 link tiktok`, id)
					const belink = body.slice(9)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					axios.get(`http://zekais-api.herokuapp.com/tiktok?url=${belink}&apikey=${zekais}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result, '', '', id)
								.catch(() => {
									axv.reply(from, 'Link salah, silahkan masukkan link yang baik dan benar:v', id)
								})
						})
						.catch(err => {
							console.log(err)
						})
					break
				case prefix + 'lolivid': //BY : Piyobot
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
						.then(res => res.text())
						.then(body => {
							let loliaxv = body.split('\n')
							let papololi = loliaxv[Math.floor(Math.random() * loliaxv.length)]
							axv.sendFileFromUrl(from, papololi, 'loli.mp4', 'Nih asu', id)
								.then(() => console.log('Success sending Video Loli'))
						})
						.catch(() => {
							axv.reply(from, 'Ada yang Error!', id)
						})
					break
				case prefix + 'tiktok':
					
				axv.reply(from, 'Untuk mendownload video tiktok gunakan command :\n*#tiktoknowm link* atau *#tiktokwm link*\n\n*#tiktokaudio link* untuk mendonwload vidio tiktok dan dikirim menjadi audio.', id)
					break
case prefix + 'tiktoknowm':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mendownload video dari tiktok, gunakan ${prefix}tiktoknowm link`, id)
					const lika = body.slice(12)
					limitFunc.pushLimit(sender.id, 3)
					axv.reply(from, mess.wait, id)
					try {
				        const ttx = await axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolhuman}&url=${lika}`)
				        await axv.sendFileFromUrl(from, ttx.data.result.link, '', '', id)
				    } catch (e) {
				        console.log(e)
				        axv.reply(from, '' + e, id)
				    }
					break
				case prefix + 'tiktokwm':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Kirim perintah *${prefix}tiktokwm [linkTiktok]*`, id)
					limitFunc.pushLimit(sender.id, 1);
					const linktik = body.slice(10)
					axv.reply(from, mess.wait, id)
					try {
					axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolhuman}&url=${linktik}`, '', 'TiktokWm', id)
						} catch (e) {
				        console.log(e)
				        axv.reply(from, '' + e, id)
				    }
					break
				case prefix + 'ytmp4':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Contoh: ${prefix}ytmp4 https://youtu.be/P6GGq9D37Rg`, id)
					limitFunc.pushLimit(sender.id, 3);

					const ytmp4x = body.slice(7)
					axios.get(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${ytmp4x}`)
						.then(async (res) => {
							if (Number(res.data.result.link.size.split(' MB')[0]) >= 40) return axv.reply(from, 'Size video terlalu besar,Max 40mb', id)
							await axv.sendFileFromUrl(from, `${res.data.result.thumbnail}`, 'img.jpg', `「 *YTMP4* 」\n\n*Judul :* ${res.data.result.title}\n*Duration :* ${res.data.result.duration}\n*Channel :* ${res.data.result.channel}\n*Desc :* ${res.data.result.description}\n*Size* : ${res.data.result.link.size}`)
							await axv.sendFileFromUrl(from, `${res.data.result.link.link}`, '', '', id)

								.catch(() => {
									axv.reply(from, `Maaf, lagu yang anda cari tidak ditemukan`, id)
								})
						})
					break

				case prefix + 'joox':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari lagu dari Joox\n\nUsage : ${prefix}joox judul lagu\nContoh: ${prefix}joox akad`, id)

					axios.get(`https://cakrayp.herokuapp.com/api/joox/music?query=${body.slice(6)}&apikey=${cakrayp}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, `${res.data.result.jooxdata.image}`, 'img.jpg', `「 *JOOX* 」\n\n*Judul :* ${res.data.result.jooxdata.title}\n*Penyanyi :* ${res.data.result.jooxdata.artist}\n*Album :* ${res.data.result.jooxdata.album}\n*Publish :* ${res.data.result.jooxdata.published}`)
							await axv.sendFileFromUrl(from, `${res.data.result.linkMp3.url}`, '', '', id)
							limitFunc.pushLimit(sender.id, 3);
							const liruk = `${res.data.result.jooxdata.lyric}`
							axv.reply(from, `Lirik dari ${body.slice(6)}\n\n${res.liruk}`)
								.catch(() => {
									axv.reply(from, `Maaf, lagu yang anda cari tidak ditemukan, maklum joox mah ga lengkap`, id)
								})
						})
					break
				case prefix + 'playapik':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari detail film dan link download film gunakan ${prefix}playapik id movie\nContoh : ${prefix}playapik 142455`, id)
					axios.get(`https://api-filmapik.herokuapp.com/play?id=${body.slice(10)}`)
						.then(async (res) => {
							const linkapik = res.data.link
							await axv.sendLinkWithAutoPreview(from, linkapik)
								.catch(() => {
									axv.reply(from, 'Error', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'ytdl':
					if (args.length == 0) return axv.reply(from, 'Kirim perintah /ytdl <query>\nContoh : /ytdl slow dancing in the dark', id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					const pncrian = body.slice(6)
					axios.get(`https://dappagantengg.herokuapp.com/api/socialmedia/ytplaymp4?query=${pncrian}&apikey=${dapuhyapi}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, `${res.data.result.thumb}`, '', `「 *Youtube Download* 」\n\nJudul: ${res.data.result.title}\nChannel: ${res.data.result.channel}\nSize: ${res.data.result.size}\nQuality: ${res.data.result.quality}\n\n*_Waitt, sedang di prosess oleh Bot!_*`, id)
							const saveit2 = await fetch(res.data.result.url)
							const bufflah = await saveit2.buffer();
							await sleep(1000)
							fs.writeFile('./media/lagu.mp3', bufflah)
							await axv.sendFile(from, './media/lagu.mp3', '', '', id)
							rugaapi.ymp4(`https://youtu.be/${res.data.result.id}`)
								.then(async (res) => {
									await axv.sendFileFromUrl(from, res.result, '', '', id)
										.catch(() => {
											axv.reply(from, 'Maaf, terjadi kesalahan', id)
										})
								})
						})
					break

				case prefix + 'igstory2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, 'Usernamenya mana?', id)
					const usernamee = body.slice(10)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/socialmedia/igstory?username=${usernamee}&apikey=${dapuhyapi}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, res.data.message, id)
							await axv.sendFileFromUrl(from, res.data.url, '', '', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'igstory':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Mencari story dari username, Gunakan ${prefix}igstory username jumlahyangingindidownload\nContoh: ${prefix}igstory jokowi|2`, id)
					const igsc = body.slice(11)
					const igsxxa2 = igsc.split('|')[0]
					const igsxxa3 = igsc.split('|')[1]
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					try {
						const igsxxa4 = await axios.get(`https://zenzapis.xyz/downloader/igstory?apikey=${zenzapis}&username=${igsxxa2}`)
						const igsxxa5 = igsxxa4.data.result
						if (igsxxa3 > 11) return axv.reply(from, `Maksimal 10 story!`, id)
						for (let i = 0; i < igsxxa3; i++) {
							axv.sendFilefromUrl(from, igsxxa5[i].url, '', '', id)
						}
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'stikerline':
				case prefix + 'stickerline':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Contoh: ${prefix}stickerline link 3`, id)
					const lnxv = body.slice(13)
					const stclna2 = lnxv.split(' ')[0]
					const stclna3 = lnxv.split(' ')[1]
					limitFunc.pushLimit(sender.id, 2);
					axv.reply(from, mess.wait, id)
					try {
						const stclna4 = await axios.get(`https://zenzapis.xyz/downloader/linesticker?apikey=${zenzapis}&url=${stclna2}`)
						const stclna5 = stclna4.data.result
						if (stclna3 > 20) return axv.reply(from, `Maksimal 20 sticker!`, id)
						for (let i = 0; i < stclna3; i++) {
							await axv.sendStickerfromUrl(from, stclna5[0].stickers[i], StickerMetadata)
						}
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'wallpaper3':
				case prefix + 'wallhd':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari wallpaper HD gunakan ${prefix}wallpaper3 nama image.jumlah\nContoh: ${prefix}wallpaper3 aesthetic.3`, id)
					const wewxa2 = q.split('.')[0]
					const wewxa3 = q.split('.')[1]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const wewxa4 = await axios.get(`https://api.lolhuman.xyz/api/wallpaper3?apikey=${lolhuman}&query=${wewxa2}`)
						const wewxa5 = wewxa4.data
						if (wewxa3 > 7) return axv.reply(from, `Maksimal 7 image!`, id)
						for (let i = 0; i < wewxa3; i++) {
							await axv.sendFileFromUrl(from, wewxa5[0].result[i], '', '', id)
						}
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'stickerwa':
				case prefix + 'stikerwa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari Stiker Whatsapp  gunakan ${prefix}stikerwa nama stiker.jumlah\nContoh: ${prefix}stikerwa aesthetic.3`, id)
					const ashhh = body.slice(11)
					const weswxa2 = ashhh.split('.')[0]
					const weswxa3 = ashhh.split('.')[1]
					limitFunc.pushLimit(sender.id, 2);
					axv.reply(from, mess.wait, id)
					try {
						const weswxa4 = await axios.get(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolhuman}&query=${weswxa2}`)
						const weswxa5 = weswxa4.data
						if (weswxa3 > 20) return axv.reply(from, `Maksimal 20 sticker!`, id)
						for (let i = 0; i < weswxa3; i++) {
							await axv.sendStickerfromUrl(from, weswxa5.result[0].stickers[i], StickerMetadata)
						}
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'findsticker':
				case prefix + 'findstiker':
					if (args.length == 0) return axv.reply(from, `Format pesan salah!\nContoh : ${prefix}findstiker gore|4`, id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					const namstik = q.split('|')[0]
					const jumstik = q.split('|')[1]
					try {
						const nihah = await axios.get(`https://api.vhtear.com/wasticker?query=${namstik}&apikey=${vhtearkey}`)
						const beres = nihah.data
						for (let i = 0; i < jumstik; i++) {
							await axv.sendStickerfromUrl(from, beres.result.data[i], StickerMetadata)
						}
					} catch (err) {
						axv.reply(from, 'Mungkin stiker yang anda cari tidak ada', id)
						console.log(err)
					}
					break
				case prefix + 'postigurl':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Silahkan kirim perintah ${prefix}postigurl linkurl jumlah\nfitur ini untuk mendownload jumlah yang ingin didownload\nContoh: ${prefix}postigurl https://www.instagram.com/p/CP3QRfTpUGN/ 2`, id)
					const jams = args[0]
					const jamss = args[1]
					if (jamss > 11) return axv.reply(from, 'Maksimal 10', id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const beasin = await axios.get(`https://zekais-api.herokuapp.com/igdl?url=${jams}&apikey=${zekais}`)
						const beasin2 = beasin.data
						if (beasin2.status == 500) return axv.reply(from, `Link tidak valid`, id)
						for (let i = 0; i < jamss; i++) {
							await axv.sendFileFromUrl(from, beasin2.result[i].url, '', `*from: ${beasin2.owner_user}*\n*uploaded: ${beasin2.date}*\n*caption:* ${beasin2.capt}*`, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						}
					} catch (err) {
						console.log(err)
						axv.reply(from, err.message, id)
					}
					break
				case prefix + 'postig':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Fitur untuk mendownload postingan dengan banyak dari instagram seseorang\nketik ${prefix}postig url jumlah\ncontoh: ${prefix}postig https://www.instagram.com/p/CPdHEUAHjls/ 3`, id)
					const jml = args[0]
					const jml2 = args[1]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const wall = await axios.get(`https://cakrayp.herokuapp.com/api/instagram/feeds?url=${jml}&apikey=${cakrayp}`)
						const wall2 = wall.data
						if (jml2 > 7) return axv.reply(from, 'Maksimal 7!', id)
						for (let i = 0; i < jml2; i++) {
							await axv.sendFileFromUrl(from, wall2.result.link[i].url, '', '', id)
						}
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Terjadi kesalahan pada sistem, silahkan coba lagi!', id)
					}
					break
				case prefix + 'carimanga':
				case prefix + 'mangasearch':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Menampilkan list mangatoon dari query\nContoh: ${prefix}mangasearch love`, id)
					const carimanga = args[0]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const datamanga = await axios.get(`http://zekais-api.herokuapp.com/mangatoonsr?query=${carimanga}&apikey=${zekais}`)
					const resmanga = datamanga.data
					const manres = resmanga.result
					let mangatext = `*「 M A N G A T O O N 」*\n`
					for (let i = 0; i < manres.length; i++) {
						mangatext += `\n─────────────────\n\n*•Title:* ${manres[i].title}\n*•Genre:* ${manres[i].genre}\n*•Url:* ${manres[i].url}\n`
					}
					await axv.sendFileFromUrl(from, manres[0].thumb, 'thumb.jpg', mangatext, id)
						.catch(() => {
							axv.reply(from, 'Manga yang kamu cari tidak ada', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'readmanga':
				case prefix + 'bacamanga':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, 'linknya mana?', id)
					const linkmanga = args[0]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const downmanga = await axios.get(`http://zekais-api.herokuapp.com/getmangatoon?url=${linkmanga}&apikey=${zekais}`)
					const downdata = downmanga.data
					const mangaresult = downdata.result
					const replys = `*•Judul:* ${downdata.title}\n*•Genre:* ${downdata.genre}\n*•Author:* ${downdata.author}\n*•Rating:* ${downdata.score}\n*•Views:* ${downdata.view_count}\n*•Likes:* ${downdata.like_count}\n*•Desc:* ${downdata.desc}`
					await axv.sendFileFromUrl(from, downmanga.thumb, 'thumb.jpg', replys, id)
					let mangatext2 = `*「 M A N G A T O O N 」*\n`
					for (let i = 0; i < mangaresult.length; i++) {
						mangatext2 += `\n─────────────────\n\n*•Episode 1:* ${mangaresult[i].episode}\n*•Url:* ${mangaresult[i].url}\n`
					}
					await axv.reply(from, mangatext2, id)
						.catch(() => {
							axv.reply(from, 'Manga yang kamu cari tidak ada', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'bass':
					if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
						if (args.length !== 1) return await axv.reply(from, `Reply audionya lalu ketik ${prefix}bass 40 (bebas)`, id)
						await axv.reply(from, 'Bentar kak Sedang diproses..', id)
						const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
						console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const temp = './temp'
						const name = new Date() * 1
						const fileInputPath = path.join(temp, `${name}.mp3`)
						const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
						fs.writeFile(fileInputPath, mediaData, (err) => {
							if (err) return console.error(err)
							ffmpeg(fileInputPath)
								.audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
								.format('mp3')
								.on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
								.on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
								.on('end', async () => {
									console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
									await axv.sendPtt(from, fileOutputPath, id)
									console.log(color('[WAPI]', 'green'), 'Success sending audio!')
									setTimeout(() => {
										fs.unlinkSync(fileInputPath)
										fs.unlinkSync(fileOutputPath)
									}, 30000)
								})
								.save(fileOutputPath)
						})
					} else {
						await axv.reply(from, `Format Salah kak.`, id)
					}
					break
				case prefix + 'javhd':
					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari yaa you know lah mwehehe\nUsage : ${prefix}javhd title\nContoh: ${prefix}javhd big tits`, id)
					const carijav = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const javapi = await axios.get(`https://dappagantengg.herokuapp.com/api/search/javhdd?query=${carijav}&apikey=${dapuhyapi}`)
					const javdata = javapi.data
					const javres = javdata.result
					let javtext = `*「 J A V  H D 」*\n`
					for (let i = 0; i < javres.length; i++) {
						javtext += `\n─────────────────\n\n*•Judul:* ${javres[i].title}\n*•Kualitas:* ${javres[i].quality}\n*•Url:* ${javres[i].url}\n`
					}
					await axv.sendFileFromUrl(from, javres[0].thumb, 'img.jpg', javtext, id)
						.catch(() => {
							axv.reply(from, `Query yang anda cari tidak dapat ditemukan`, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'javporn':

					if (!isNsfwOn) return axv.reply(from, mess.nsfwnoton, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari yaa you know lah mwehehe\nUsage : ${prefix}javporn title\nContoh: ${prefix}javporn mom`, id)
					const cariporn = body.slice(9)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const javpornapi = await axios.get(`https://dappagantengg.herokuapp.com/api/search/javhdporn?query=${cariporn}&apikey=${dapuhyapi}`)
					const javporndata = javpornapi.data
					const pornres = javporndata.result
					let porntext = `*「 J A V  P O R N 」*\n`
					for (let i = 0; i < pornres.length; i++) {
						porntext += `\n─────────────────\n\n*•Judul:* ${pornres[i].title}\n*•Views:* ${pornres[i].viewers}\n*•Durasi:* ${pornres[i].duration}\n*•Kualitas:* ${pornres[i].quality}\n*•Url:* ${pornres[i].url}\n`
					}
					await axv.sendFileFromUrl(from, pornres[0].thumb, 'thumb.jpg', porntext, id)
						.catch(() => {
							axv.reply(from, 'Query yang kamu cari tidak ada', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'spotifysearch':
				case prefix + 'searchspotify':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Menampilkan list spotify yang anda cari!\nGunakan ${prefix}spotifysearch judul lagu\nContoh: ${prefix}spotifysearch young`, id)
					const carispotify = body.slice(15)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const spotifyapi = await axios.get(`https://api.zeks.me/api/spotify?apikey=${apikeyvinz}&q=${carispotify}`)
					const spotifydata = spotifyapi.data
					const spotres = spotifydata.data
					let spotifytext = `*「 S P O T I F Y 」*\n`
					for (let i = 0; i < spotres.length; i++) {
						spotifytext += `\n─────────────────\n\n*•Title:* ${spotres[i].title}\n*•Artists:* ${spotres[i].artists}\n*•Album:* ${spotres[i].album}\n*•Url:* ${spotres[i].url}\n`
					}
					await axv.sendFileFromUrl(from, spotres[0].thumb, 'img.jpg', spotifytext, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, 'Terjadi kesalahan, silahkan ulangi', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'spotifydown':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Mendownload lagu dari spotify menggunakan link spotify\nPenggunaan : ${prefix}spotifydown url track\nContoh : ${prefix}spotifydown https://open.spotify.com/track/3OP8UeYimRl9HCNxMg7Ihl`, id)
					const linkspot = body.slice(13)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					rugaapi.spotify2(linkspot)
						.then(async (res) => {
							if (res.status == 400) return axv.reply(from, 'Link tidak valid atau rest api sedang error!', id)
							axv.sendFileFromUrl(from, res.thumbnail, 'thumb.jpg', `「 *SPOTIFY* 」\n\n*•Title:* ${res.title}\n*•Artists:* ${res.artists}\n\n\n${mess.sendfileaudio}`, id)
							axv.sendFileFromUrl(from, res.link, '', '', id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Meng-error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'spotify':
				case prefix + 'spotify2':
					if (args.length == 0) return axv.reply(from, `Untuk mencari lagu dari spotify, gunakan ${prefix}spotify judul lagu`, id)
					limitFunc.pushLimit(sender.id, 3);
					axv.reply(from, mess.wait, id)
					const spos2 = async (query) => {
						searchthis = await spotsearch.search({ q: query, type: 'track', limit: 1 })
						datpot = searchthis.tracks.items[0]
						artis = []
						datpot.artists.map(s => {
							artis.push({
								name: s.name
							})
						})
						return {
							title: datpot.name,
							artists: artis,
							releaseDate: datpot.album.release_date,
							popularity: datpot.popularity,
							thumb: datpot.album.images[0].url,
							url: datpot.external_urls.spotify
						}
					}
					spos2(q)
						.then(res => {
							if (res.artists.length == 2) {
								var hasil2 = `${res.artists[0].name}, ${res.artists[1].name}`
							} else {
								var hasil2 = res.artists[0].name
							}
							axv.sendFileFromUrl(from, res.thumb, 'thumb.jpg', `「 *SPOTIFY* 」\n\n*• Title:* ${res.title}\n*• Artists:* ${hasil2}\n*• Release Date:* ${res.releaseDate}\n*• Popularity:* ${res.popularity}\n*• Url:* ${res.url}\n\n${mess.sendfileaudio}`, id)
							spotify.downloadTrack(res.url)
								.then(async (data) => {
									const buffaudio = await buffeerr(data)
									await fs.writeFile(`./temp/audio/${res.title}.mp3`, buffaudio)
								})
								.then(async () => {
									await axv.sendFile(from, `./temp/audio/${res.title}.mp3`, '', '', id)
									setTimeout(() => {
										fs.unlinkSync(`./temp/audio/${res.title}.mp3`)
										console.log(color(`Success delete file /temp/audio/${res.title}.mp3`, 'magenta'))
									}, 10000)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'exec':
					if (!isOwner) return axv.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner Bot!`, id)
					if (!q) return await axv.reply(from, `Masukkan kode command prompt`, id)
					//const execute = require("child_process")
					var spawn = require('child_process').exec;
					function os_func() {
						this.execCommand = function (command) {
							return new Promise((resolve, reject) => {
								spawn(command, (error, stdout) => {
									if (error) {
										reject(error);
										return;
									}
									resolve(stdout)
								});
							})
						}
					}
					var oz = new os_func();
					oz.execCommand(q).then((res) => {
						axv.reply(from, `> root@AXV:~ # ${res}`, id)
					}).catch(err => {
						return axv.reply(from, `> root@AXV:~ # ${err}`, id)
						//console.log("os >>>", err);
					})
					break
				case prefix + 'play3':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `what are u looking for?`, id)
					const linuxsc = body.slice(7)
					fetchJson(`https://api.zeks.me/api/yts?apikey=${apikeyvinz}&q=${linuxsc}`)
						.then(async (res) => {
							console.log(color(`Nickname : ${pushname}\nNomor : ${serial.replace('@c.us', '')}\nJudul: ${res.result[0].video.title}\nDurasi: ${res.result[0].video.duration} detik`, 'aqua'))
							await axv.sendFileFromUrl(from, res.result[0].video.thumbnail_src, 'thumb.jpg', `「 *PLAY* 」\n\n*Title:* ${res.result[0].video.title}\n*Duration:* ${res.result[0].video.duration} detik\n*Views:* ${res.result[0].video.views}\n*Uploaded:* ${res.result[0].video.upload_date}\n*Channel:* ${res.result[0].uploader.username}\n*Url:* ${res.result[0].video.url}\n\n*_Waitt, lagi ngirim Audionyaa_*`, id)
							rugaapi.playlinux(linuxsc)
							if (res.status == false) return axv.reply(from, res.message, id)
							axv.sendFileFromUrl(from, res.url, 'song.mp3', '', id)
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
					break
				case prefix + 'ytmp4hd':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Masukkan link youtube, contoh : ${prefix}ytmp4hd https://www.youtube.com/watch?v=WuWfNapyjKI`, id)
					axios.get(`https://api.dapuhy.ga/api/socialmedia/aiovideodl?url=${body.slice(9)}&apikey=${dapuhyapi}`)
						.then(async (res) => {
							if (res.data.status == 500) return axv.reply(from, 'Link tidak valid atau mungkin Rest Api sedang error', id)
							if (res.data.status == 400) return axv.reply(from, res.data.message, id)
							axv.sendFileFromUrl(from, res.data.thumb, 'img.jpg', `「 *YT MP4 HD* 」\n\nTitle: ${res.data.title}\nDuration: ${res.data.duration}\nQuality: ${res.data.medias[2].quality}\nSize: ${res.data.medias[2].formattedSize}\n\n${mess.sendfilevideo}`, id)
							await axv.sendFileFromUrl(from, res.data.medias[2].url, `${res.data.title}.mp4`, `*${res.data.title}`, id)
						})
						.catch(err => {
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'play'://silahkan kalian custom sendiri jika ada yang ingin diubah
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)

					axv.reply(from, mess.wait, id)
					yt.ytSearch(q)
						.then(async (res) => {
							console.log(color(`Title: ${res[0].title}\nDuration: ${res[0].timestamp} seconds\nViews: ${res[0].views}\nUploaded: ${res[0].ago}\nChannel: ${res[0].author.name}\nUrl: ${res[0].url}`, 'magenta'))
							console.log(color(`Nickname : ${pushname}\nNomor : ${serial.replace('@c.us', '')}\nJudul: ${res[0].title}\nDurasi: ${res[0].timestamp} seconds`, 'aqua'))
							const thumbnailytSD = res[0].thumbnail
							await axv.sendFileFromUrl(from, thumbnailytSD, 'thumb.jpg', `「 *PLAY* 」\n\nTitle: ${res[0].title}\nDuration: ${res[0].timestamp} seconds\nViews: ${res[0].views}\nUploaded: ${res[0].ago}\nChannel: ${res[0].author.name}\nUrl: ${res[0].url}\n\n${mess.sendfileaudio}`, id)
							limitFunc.pushLimit(sender.id, 3);
							let nowey = ytdown(res[0].videoId, {
								quality: 'highestaudio',
							})
							let deyy = Date.now()
							ffmpeg(nowey)
								.audioBitrate(128)
								.save(`./temp/audio/${res[0].videoId}.mp3`)
								.on('progress', p => {
									readline.cursorTo(process.stdout, 0)
									process.stdout.write(`${p.targetSize}kb downloaded`)
								})
								.on('end', () => {
									console.log(`\nDone, ${(Date.now() - deyy) / 1000}s`)
									axv.sendFile(from, `./temp/audio/${res[0].videoId}.mp3`, '', '', id)
										.then(() => {
											console.log(color('[WAPI]', 'cyan'), color('Success sending song!', 'magenta'))
											setTimeout(() => {
												fs.unlinkSync(`./temp/audio/${res[0].videoId}.mp3`)
												console.log(color(`Success delete file ${res[0].videoId}.mp3`, 'cyan'))
											}, 10000)
										})
								})
						})
					break
				case prefix + 'trendingtwit':
				case prefix + 'trendtwit':
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					rugaapi.trend()
						.then(async ({ result }) => {
							let trend = '-----[ *TRENDING TWITTER* ]-----'
							for (let i = 0; i < result.length; i++) {
								trend += `\n\n➸ *Hashtag :* ${result[i].hastag}\n➸ *Trending Number :* ${result[i].rank}\n➸ *Jumlah Tweets :* ${result[i].tweet}\n➸ *Link :* ${result[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
							}
							await axv.reply(from, trend, id)
							console.log('Success sending Trending Tweets')
						})
						.catch(async (err) => {
							console.error(err)
							await axv.reply(from, 'Error!', id)
						})
					break
				case prefix + 'ytshorts':
					if (q.length == 0) return axv.reply(from, `Untuk mendownload video dari snap youtube, gunakan ${prefix}ytshorts link snap`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					ytdown.getBasicInfo(q)
						.then(res => {
							if (res.formats[1].url == 0 || res.formats[1].url == undefined || res.formats[1].url == '') {
								var lowqual = res.formats[0].url
							} else {
								var lowqual = res.formats[1].url
							}
							if (res.formats[1].qualityLabel == 0 || res.formats[1].qualityLabel == undefined) {
								var qualname = res.formats[0].qualityLabel
							} else {
								var qualname = res.formats[1].qualityLabel
							}
							axv.sendFileFromUrl(from, lowqual, '', `Title: ${res.videoDetails.title}\nViews: ${res.videoDetails.viewCount}\nChannel: ${res.player_response.videoDetails.author}\nQuality: ${qualname}`, id)
								.then(() => {
									console.log(color(`Success sending media to ${pushname}`, 'cyan'))
								})
								.catch(err => {
									console.log(err)
									axv.reply(from, err.message, id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'playvid'://silahkan kalian custom sendiri jika ada yang ingin diubah
				case prefix + 'play2':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 3);
					if (args.length == 0) return axv.reply(from, `Untuk mencari video dari youtube\n\nPenggunaan: ${prefix}play judul video`, id)
					yt.ytSearch(q)
						.then(async (res) => {
							console.log(color(`Title: ${res[0].title}\nDuration: ${res[0].timestamp} seconds\nViews: ${res[0].views}\nUploaded: ${res[0].ago}\nChannel: ${res[0].author.name}\nUrl: ${res[0].url}`, 'magenta'))
							console.log(color(`Nickname : ${pushname}\nNomor : ${serial.replace('@c.us', '')}\nJudul: ${res[0].title}\nDurasi: ${res[0].timestamp} seconds`, 'aqua'))
							const thumbnailytSD2 = res[0].thumbnail
							await axv.sendFileFromUrl(from, thumbnailytSD2, 'thumb.jpg', `「 *PLAY VID* 」\n\nTitle: ${res[0].title}\nDuration: ${res[0].timestamp} seconds\nViews: ${res[0].views}\nUploaded: ${res[0].ago}\nChannel: ${res[0].author.name}\nUrl: ${res[0].url}\n\n${mess.sendfilevideo}`, id)
							yt.ytMp4(res[0].url)
								.then(result => {
									axv.sendFileFromUrl(from, result.url, '', '', id)

										.catch(() => {
											console.log(err)
											axv.reply(from, 'Sedang error', id)
										})
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break

				// Other Command
				case prefix + 'resi':
					if (args.length !== 2) return axv.reply(from, `Maaf, format pesan salah.\nSilahkan ketik pesan dengan ${prefix}resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
					const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
					if (!kurirs.includes(args[0])) return axv.sendText(from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
					console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
					cekResi(args[0], args[1]).then((result) => axv.sendText(from, result))
					break
				case prefix + 'tts':
					if (args.length == 0) return axv.reply(from, `Mengubah teks menjadi sound (google voice)\nketik: ${prefix}tts <kode_bahasa> <teks>\ncontoh : ${prefix}tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8\n\nAtau kalian bisa menggunakan command ${prefix}kodebahasa`, id)
					const ttsGB = require('node-gtts')(args[0])
					const dataText = body.slice(8)
					if (dataText === '') return axv.reply(from, 'apa teksnya syg..', id)
					try {
						ttsGB.save('./media/tts.mp3', dataText, function () {
							axv.sendPtt(from, './media/tts.mp3', id)
							setTimeout(() => {
								fs.unlinkSync('./media/tts.mp3')
							}, 30000)
						})
					} catch (err) {
						axv.reply(from, err, id)
					}
					break
				case prefix + 'searchwp':

					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari wallpaper HD gunakan ${prefix}searchwp nama image.jumlah\nContoh: ${prefix}searchwp aesthetic.3`, id)
					const wpx2 = q.split('.')[0]
					const wpx3 = q.split('.')[1]
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const wpx4 = await axios.get(`https://dappagantengg.herokuapp.com/api/search/googleimage?query=${wpx2}&apikey=${dapuhyapi}`)
						const wpx5 = wpx4.data
						if (wpx3 > 5) return axv.reply(from, `Maksimal 5 image!`, id)
						for (let i = 0; i < wpx3; i++) {
							await axv.sendFileFromUrl(from, wpx5.result[i].url, '', '', id)
						}
					} catch (err) {
						console.log(err)
					}
					break
				case prefix + 'covid19':
				case prefix + 'corona':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					rugaapi.corona()
						.then(async (res) => {
							await axv.reply(from, `${res}`, id)
						})
					break
				case prefix + 'covidindo':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					rugaapi.covidindo()
						.then(async (res) => {
							await axv.reply(from, `${res}`, id)
						})
					break
				case prefix + 'ceklokasi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (quotedMsg.type !== 'location') return axv.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
					console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
					const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
					if (zoneStatus.kode !== 200) axv.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
					let datax = ''
					for (let i = 0; i < zoneStatus.data.length; i++) {
						const { zone, region } = zoneStatus.data[i]
						const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
						datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
					}
					const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
					axv.sendText(from, text)
					break
				case prefix + 'shortlink':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `ketik ${prefix}shortlink <url>`, id)
					axios.get(`https://dappagantengg.herokuapp.com/api/others/tinyurl?url=${body.slice(11)}&apikey=${dapuhyapi}`).then(res => {
						const shortin = `${res.data.result}`
						axv.reply(from, shortin, id)
							.catch(() => {
								axv.reply(from, 'Error njing', id)
							})
					})
					break

				case prefix + 'bapakfont':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					if (args.length == 0) return axv.reply(from, `Mengubah kalimat menjadi alayyyyy\n\nketik ${prefix}bapakfont kalimat`, id)
					const bpkfnt = body.slice(11)
					axios.get(from, `https://api.lolhuman.xyz/api/alay?apikey=${lolhuman}&text=${bpkfnt}`)
						.then(async (res) => {
							await axv.sendText(from, `${res.data.result}`, id)
						})
					break

				// Group Commands (group admin only)
				case prefix + 'add':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!, Member mah gosah sok keras', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, kalo mau pake fitur ini, jadiin gua admin', id)
					if (args.length !== 1) return axv.reply(from, `Untuk menggunakan ${prefix}add\nPenggunaan: ${prefix}add <nomor>\ncontoh: ${prefix}add 628xxx`, id)
					try {
						await axv.addParticipant(from, `${args[0]}@c.us`)
					} catch {
						axv.reply(from, 'Target hilang diradar, Enemies Ahead!', id)
					}
					break
				case prefix + 'pkick':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini hanya bisa di gunakan oleh Admin Grup!!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, kalo mau pake fitur ini, jadiin gw admin', id)
					if (mentionedJidList.length === 0) return axv.reply(from, 'Maaf, format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id)
					if (mentionedJidList[0] === botNumber) return await axv.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', id)
					await axv.sendTextWithMentions(from, `Done!, mengeluarkan ${mentionedJidList.map(x => `@${x.replace('@c.us', '')} agar menjadi anak pungut`).join('\n')}`)
					for (let i = 0; i < mentionedJidList.length; i++) {
						if (ownerNumber.includes(mentionedJidList[i])) return axv.reply(from, 'Siapa lu mau ngekick Owner gua?', id)
						if (groupAdmins.includes(mentionedJidList[i])) return await axv.reply(from, 'GOBLOK, Mana bisa ngekick admin tolol', id)
						await axv.removeParticipant(groupId, mentionedJidList[i])
					}
					break
				case prefix + 'kick':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini bakalan work kalo dipake sama admin, member mah gausah sok keras', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, kalo mau pake fitur ini, jadiin gw admin', id)
					if (mentionedJidList.length === 0) return axv.reply(from, 'Maaf, format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id)
					if (mentionedJidList[0] === botNumber) return await axv.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', id)
					await axv.sendTextWithMentions(from, `Request diterima, mengeluarkan:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
					for (let i = 0; i < mentionedJidList.length; i++) {
						if (groupAdmins.includes(mentionedJidList[i])) return await axv.sendText(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.')
						await axv.removeParticipant(groupId, mentionedJidList[i])
					}
					break
				case prefix + 'opromote':
					var senderx = quotedMsgObj.sender.id
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya bisa digunakan didalam Grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Admin Grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Fitur ini hanya bisa digunakan ketika Bot menjadi Admin', id)
					await axv.promoteParticipant(groupId, senderx)
					await axv.sendText(from, `Donee!\n\nCieee diangkat derajatnya xixi`)
					break
				case prefix + 'promote':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Gagal, fitur ini hanya bisa di gunakan oleh Admin Grup!!', id)
					if (!isBotGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, kalo mau pake fitur ini jadiin gw admin', id)
					if (mentionedJidList.length !== 1) return axv.reply(from, 'Maaf, hanya bisa mempromote 1 user', id)
					if (groupAdmins.includes(mentionedJidList[0])) return await axv.reply(from, 'GOBLOG, tuh anak udah jadi admin bego.', id)
					if (mentionedJidList[0] === botNumber) return await axv.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id)
					await axv.promoteParticipant(groupId, mentionedJidList[0])
					await axv.sendTextWithMentions(from, `Done, ciee, @${mentionedJidList[0].replace('@c.us', '')} Diangkat derajatnyaaa xixi.`)
					break
				case prefix + 'demoteme':
					if (!isGroupAdmins) return axv.reply(from, 'cuman bisa dipake sama Admin!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Jadiin admin dulu', id)
					await axv.demoteParticipant(groupId, serial)
					await axv.sendText(from, `request diterima, ${pushname} ingin jadi babi karna dia kepengen`)
					await axv.promoteParticipant(groupId, serial)
					await axv.sendText(from, `Prank boiss, jadi admin lagi kok`)
					break
				case prefix + 'odemote':
					var sendis = quotedMsgObj.sender.id
					if (!isGroupMsg) return axv.reply(from, 'Maaf, fitur ini hanya bisa digunakan didalam Grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini bakalan work kalo dipake sama Admin', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Silahkan tambahkan bot menjadi admin agar bisa mendemote seseorang', id)
					await axv.demoteParticipant(groupId, sendis)
					await axv.sendText(from, `Donee!, mampus jadi Babi lu kan`)
					break
				case prefix + 'demote':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini hanya bisa di gunakan oleh Admin Grup!!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, kalo mau pake fitur ini, jadiin gw admin', id)
					if (mentionedJidList.length !== 1) return axv.reply(from, 'Maaf, hanya bisa mendemote 1 user', id)
					if (!groupAdmins.includes(mentionedJidList[0])) return await axv.reply(from, 'GOBLOG, tuh anak udah belom jadi admin mau lu demote. mana bisa tolol.', id)
					if (mentionedJidList[0] === botNumber) return await axv.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id)
					await axv.demoteParticipant(groupId, mentionedJidList[0])
					await axv.sendTextWithMentions(from, `Done, Mampus lu @${mentionedJidList[0].replace('@c.us', '')} Jadi babi lu kan awkowko`)
					break
				case prefix + 'bye':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini hanya bisa di gunakan oleh Admin Grup!!', id)
					axv.sendText(from, 'Jahat kelen sama aku... ( ⇀‸↼‶ )').then(() => axv.leaveGroup(groupId))
					break
				case prefix + 'del':
				case prefix + 'delete':
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Gagal, fitur ini hanya bisa di gunakan oleh Admin Grup!!', id)
					if (!quotedMsg) return axv.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
					if (!quotedMsgObj.fromMe) return axv.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
					axv.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
					break
				case prefix + 'sandwriting':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}sandwriting [ Teks ]*\nContoh *${prefix}sandwriting axv Ganteng*`, id)
					const swrt = body.slice(13)
					try {
						const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
						const { imgUrl } = swrt2.data.result
						const swrt3 = `*「 SAND WRITING 」*
                        *Text : ${swrt}*`
						const pictk = await bent("buffer")(imgUrl)
						const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
						axv.sendImage(from, base64, swrt3)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
						axv.sendText(from, 'Sand Writing Error : ' + err)
					}
					break
				case prefix + 'artimimpi':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length === 0) return axv.reply(from, `Kirim perintah *${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi jatuh*`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const resp = await axios.get('https://dappagantengg.herokuapp.com/api/fun/artimimpi?mimpi=' + body.slice(10) + '&apikey=' + dapuhyapi)
						if (resp.data.error) return axv.reply(from, resp.data.error, id)
						const anm2 = `➸ Artimimpi : ${resp.data.result}`
						axv.reply(from, anm2, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
						axv.sendText(from, 'Artimimpi Error : ' + err)
					}
					break
				case prefix + 'attp':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, 'teksnya mana sayang?', id)
					const txtx = body.slice(6)
					const beattp = await axios.get(`https://api.xteam.xyz/attp?text=${txtx}`)
					const beresult = beattp.data.result
					axv.sendRawWebpAsSticker(from, beresult)
					break
				case prefix + 'trigger':
				case prefix + 'triggered':
					if (isMedia && isImage || isQuotedImage) {
						var encryptMedia = isQuotedImage ? quotedMsg : message
						var pepa = await decryptMedia(encryptMedia, uaOverride)
						canvas.Canvas.trigger(pepa)
							.then(async (buffer) => {
								canvas.write(buffer, `${sender.id}_trigger.jpg`)
								await axv.sendImageAsSticker(from, `${sender.id}_trigger.jpg`, StickerMetadata)
								fs.unlinkSync(`${sender.id}_trigger.jpg`)
							})
					} else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
						const mediaData = await decryptMedia(quotedMsg, uaOverride)
						canvas.Canvas.trigger(mediaData)
							.then(async (buffer) => {
								canvas.write(buffer, `${sender.id}_trigger.jpg`)
								await axv.sendImageAsSticker(from, `${sender.id}_trigger.jpg`, StickerMetadata)
								fs.unlinkSync(`${sender.id}_trigger.jpg`)
							})
					} else {
						axv.reply(from, 'format pesan salah', id)
					}
					break
				case prefix + 'wanted':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
					limitFunc.pushLimit(sender.id, 1);
					const wantedd = body.slice(8)
					try {
						if (isMedia && isImage || isQuotedImage) {
							var encryptMedia = isQuotedImage ? quotedMsg : message
							var ppRaww = await decryptMedia(encryptMedia, uaOverride)
							canvas.Canvas.wanted(ppRaww)
								.then(async (buffer) => {
									canvas.write(buffer, `${sender.id}_wanted.png`)
									await axv.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
									fs.unlinkSync(`${sender.id}_wanted.png`)
								})
						} else if (wantedd == "me") {
							var ppRaww = await axv.getProfilePicFromServer(sender.id)
							if (ppRaww == undefined) {
								axv.reply(from, 'Foto tidak ada atau mungkin bersifat private', id)
							} else {
								canvas.Canvas.wanted(ppRaww)
									.then(async (buffer) => {
										canvas.write(buffer, `${sender.id}_wanted.png`)
										await axv.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
										fs.unlinkSync(`${sender.id}_wanted.png`)
									})
							}
						} else if (args[0] === 'nih') {
							var qmbans = quotedMsgObj.sender.id
							var jss = await axv.getProfilePicFromServer(qmbans)
							if (jss == undefined) {
								axv.reply(from, 'Foto profil kosong/Private nih', id)
							}
							else {
								canvas.Canvas.wanted(jss)
									.then(async (buffer) => {
										canvas.write(buffer, `${sender.id}_wanted.png`)
										await axv.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
										fs.unlinkSync(`${sender.id}_wanted.png`)
									})
							}
						} else {
							var texnugmm = body.slice(8)
							var getnomberr = await axv.checkNumberStatus(texnugmm)
							var useriqq = getnomberr.id.replace('@', '') + '@c.us'
							var jnck = await axv.getProfilePicFromServer(useriqq)
							if (jnck == undefined) {
								axv.reply(from, 'Foto profil kosong atau private', id)
							}
							else {
								canvas.Canvas.wanted(jnck)
									.then(async (buffer) => {
										canvas.write(buffer, `${sender.id}_wanted.png`)
										await axv.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
										fs.unlinkSync(`${sender.id}_wanted.png`)
									})
							}
						}
					} catch (err) {
						console.log(err)
						await axv.reply(from, 'Error!', id)
					}
					break
				case prefix + 'arrowsigns':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Membuat text menjadi foto petunjuk arah, gunakan ${prefix}arrowsigns nama1 nama2\nContoh: ${prefix}arrowsigns axve Xyz`, id)
					const ahshit = args[0]
					const ahshit2 = args[1]
					if (ahshit.length > 7) return axv.reply(from, `Maksimal 7 huruf!`, id)
					if (ahshit2.length > 7) return axv.reply(from, `Maksimal 7 Huruf!`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://fzn-gaz.herokuapp.com/api/arrow-signs?text=${ahshit}&text2=${ahshit2}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result, 'arrow.jpg', `nehhh ${pushname} dah jadi`, id)
								.catch(() => {
									axv.reply(from, 'Error!, mungkin server sedang maintenance', id)
								})
						})
						.catch(err => {
							console.log(err)
						})
					break
				case prefix + 'tahta':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const jreng = body.slice(7)
					if (!jreng) return axv.reply(from, `Kirim perintah *${prefix}tahta [teks]*\n\nContoh *${prefix}tahta elaina*`, id)
					if (jreng.length > 7) return axv.reply(from, 'Maksimal 7 Huruf!', id)
					axv.reply(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
					const tahtuy = `https://api.zekais.com/hartatahta?text={jreng}&apikey=${zekais}`
					axv.sendFileFromUrl(from, tahtuy, `${jreng}.jpg`, `*_Harta_*\n*_Tahta_*\n*_${jreng}_*`, id)
					axv.sendImageAsSticker(from, tahtuy, StickerMetadata)
						.catch(() => {
							axv.reply(from, 'Error', id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'family100':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const resp = await axios.get('https://zekais-api.herokuapp.com/family100?apikey=' + zekais)
						if (resp.data.error) return axv.reply(from, resp.data.error, id)
						const anm2 = `➸ Soal : ${resp.data.soal}\n_Silahkan DiJawab_`
						const jwban = `➸ Jawaban : ${resp.data.jawaban}`
						console.log(`${jwban}`)
						axv.reply(from, anm2, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Family100 Error : ' + err)
					}
					break
				case prefix + 'tebakbendera':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const resp1 = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolhuman}`)
						if (resp1.data.error) return axv.reply(from, resp1.data.error, id)
						const xanm2 = `➸ Soal : ${resp1.data.result.flag}\n_Silahkan DiJawab_`
						const jwban = `➸ Jawaban : ${resp1.data.result.name}`
						console.log(`${jwban}`)
						axv.reply(from, xanm2, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'tebakkata':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps2 = await axios.get(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolhuman}`)
						if (reps2.data.error) return axv.reply(from, reps2.data.error, id)
						const xanm3 = `➸ Soal : ${reps2.data.result.pertanyaan}\n_Silahkan DiJawab_`
						const jwban = `➸ Jawaban : ${reps2.data.result.jawaban}`
						console.log(`${jwban}`)
						axv.reply(from, xanm3, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'tebakkimia':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps3 = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolhuman}`)
						if (reps3.data.error) return axv.reply(from, reps3.data.error, id)
						const xanm4 = `➸ Soal : ${reps3.data.result.lambang}\n_Silahkan jawab arti dari singkatan tersebut._ `
						const jwban = `➸ Jawaban : ${reps3.data.result.nama}`
						console.log(`${jwban}`)
						axv.reply(from, xanm4, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'tebaklagu':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps4 = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolhuman}`)
						if (reps4.data.error) return axv.reply(from, reps4.data.error, id)
						const xanm5 = `➸ Soal : ${reps4.data.result.question}\n_Silahkan jawab judul lagu tersebut_`
						const jwban = `➸ Jawaban : ${reps4.data.result.answer}`
						console.log(`${jwban}`)
						axv.reply(from, xanm5, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'asahotak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps5 = await axios.get(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolhuman}`)
						if (reps5.data.error) return axv.reply(from, reps5.data.error, id)
						const xanm6 = `➸ Soal : ${reps5.data.result.pertanyaan}\n_Silahkan jawab_`
						const jwban = `➸ Jawaban : ${reps5.data.result.jawaban}`
						console.log(`${jwban}`)
						axv.reply(from, xanm6, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'susunkata':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps6 = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolhuman}`)
						if (reps6.data.error) return axv.reply(from, reps6.data.error, id)
						const xanm7 = `➸ Soal : ${reps6.data.result.pertanyaan}\n_Silahkan jawab_`
						const jwban = `➸ Jawaban : ${reps6.data.result.jawaban}`
						console.log(`${jwban}`)
						axv.reply(from, xanm7, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'siapaaku':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					try {
						const reps7 = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolhuman}`)
						if (reps7.data.error) return axv.reply(from, reps7.data.error, id)
						const xanm8 = `➸ Soal : ${reps7.data.result.question}\n_Silahkan jawab_`
						const jwban = `➸ Jawaban : ${reps7.data.result.answer}`
						console.log(`${jwban}`)
						axv.reply(from, xanm8, id)
						axv.sendText(from, `30 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `20 Detik Lagi...`, id)
						await sleep(10000)
						axv.sendText(from, `10 Detik Lagi...`, id)
						await sleep(10000)
						axv.reply(from, jwban, id)
					} catch (err) {
						console.error(err.message)
						await axv.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
						axv.sendText(ownerNumber, 'Error : ' + err)
					}
					break
				case prefix + 'stalkyt':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk menstalk akun youtube seseorang\nKetik ${prefix}stalkyt nama channel\nContoh: ${prefix}stalkyt CUCO`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					const ytstlk = body.slice(9)
					axios.get(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolhuman}&query=${ytstlk}`)
						.then(async (res) => {
							await axv.sendFileFromUrl(from, res.data.result[0].channel_picture.medium.url, 'img.jpg', `*Nama Channel:* ${res.data.result[0].channel_name}\n*Tentang Channel:* ${res.data.result[0].channel_about}\n*Id Channel:* ${res.data.result[0].channel_id}\n*Channel Created:* ${res.data.result[0].channel_created}`, id)
								.catch(() => {
									axv.reply(from, 'Error om', id)
								})
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'tiktokpic':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return await axv.reply(from, `Untuk mendapatkan foto dari username tiktok\nUsage : ${prefix}tiktokpic itsandani`, id)
					const namaih = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `http://api.lolhuman.xyz/api/pptiktok/${namaih}?apikey=${lolhuman}`, 'img.jpg', '', id)
						.catch(() => {
							axv.reply(from, 'error', id)
						})
						.catch((err) => {
							console.log(err)
						})
					break
				case prefix + 'sfiledown':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mendapatkan hasil download, silahkan gunakan ${prefix}sfiledown link sfile`, id)
					const downsf = body.slice(11)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${downsf}`)
						.then(async (res) => {
							const dock = res.data.result
							const tobelink = await axios.get(`https://lindow-api.herokuapp.com/api/short/tiny?url=${dock}&apikey=${lindowapi}`)
							const link1 = tobelink.data.result.link
							if (!isPrem && !isOwnerB) return axv.reply(from, `Maaf karna anda bukan user premium, silahkan download melalui link dibawah\n\nLink: ${link1}`, id)
							await axv.sendFileFromUrl(from, dock, '', '', id)
								.catch(() => {
									axv.reply(from, 'Lagi error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, 'Linknya ga valid kali atau gada diweb', id)
						})
					break

				case prefix + 'gabut':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://cakrayp.herokuapp.com/api/gabut?apikey=${cakrayp}`)
						.then(async (res) => {
							const gabt = `*Aktivitas* : ${res.data.result.activity}\n\n*Tipe* : ${res.data.result.type}`
							await axv.reply(from, gabt, id)
								.catch(err => {
									axv.reply(from, 'Maaf, sistem sedang error', id)
								})
						})
						.catch((err) => {
							axv.reply(from, err, id)
						})
					break
				case prefix + 'sfile':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk mencari file/config di website Sfile, kirim perintah ${prefix}sfile nama config/file`, id)
					const cariconfig = body.slice(7)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					try {
						const becon = await axios.get(`https://dappagantengg.herokuapp.com/api/search/sfile?query=${cariconfig}&apikey=${dapuhyapi}`)
						const configdat = becon.data.result

						let confa = `*「 SFILE 」*\n`
						for (let i = 0; i < configdat.length; i++) {
							confa += `\n─────────────────\n\n*•Title:* ${configdat[i].title}\n*•Link:* ${configdat[i].url}\n`
						}
						await axv.reply(from, confa, id)
					} catch (err) {
						console.log(err)
						axv.reply(from, 'Lagi error', id)
					}
					break
				case prefix + 'googleimg':
				case prefix + 'images':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (q.length == 0) return axv.reply(from, 'nyari apa?', id)
					limitFunc.pushLimit(sender.id, 1);

					axv.reply(from, mess.wait, id)
					gis(q)
						.then(async (img) => {
							const imgRandom = Math.floor(Math.random() * img.length)
							await axv.sendFileFromUrl(from, img[imgRandom].url, '', '', id)
								.catch(err => {
									console.error(err)
									axv.reply(from, 'Error :' + err.message, id)
								})
						})
					break
				case prefix + 'bot':
					if (args.length == 0) return axv.reply(from, 'Kirim perintah */axv [teks]*\nContoh : */axv halo*', id)

					break
				case prefix + 'github':
				case prefix + 'githubstalk':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk men-stalk akun Github seseorang\nKetik : ${prefix}github [username]\nContoh : ${prefix}github axve`, id)
					limitFunc.pushLimit(sender.id, 1);
					const gitstalk = await rugaapi.github(args[0])
					const gitpict = await rugaapi.githubpict(args[0])
					await axv.sendFileFromUrl(from, gitpict, '', gitstalk, id)
						.catch(() => {
							axv.reply(from, 'Username salah, silahkan masukkan username yang benar', id)
						})
					break
				case prefix + 'reverseword':
					if (args.length == 0) return axv.reply(from, `Fitur untuk membalikkan huruf\nContoh : ${prefix}reverseword kok kebalik hurufnya`, id)
					const rev = body.slice(13)
					axios.get(`https://videfikri.com/api/hurufterbalik/?query=${rev}`).then(res => {
						console.log(rev)
						const balikin = `${res.data.result.kata}`
						axv.reply(from, balikin, id)
						console.log(balikin)
					})
					break
				case prefix + 'prediksicuaca':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk memprediksi cuaca Kota gunakan ${prefix}prediksicuaca [namakota]\nContoh : ${prefix}prediksicuaca Pontianak`, id)
					limitFunc.pushLimit(sender.id, 1);
					const predik = await axios.get(`https://api.vhtear.com/weather?city=${body.slice(15)}&apikey=${vhtearkey}`)
					const iksi = predik.data.result
					const resil = `${iksi.weather}\n\n${iksi.location}`
					axv.reply(from, resil, id)
						.catch(() => {
							return axv.reply(from, 'Kota yang anda ketik tidak ditemukan...', id)
						})
					break
				case prefix + 'happymod':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Fitur untuk mencari sebuah aplikasi mod dari Happymod\nContoh : ${prefix}happymod pubg`, id)
					limitFunc.pushLimit(sender.id, 1);
					const happymod = await axios.get(`https://zekais-api.herokuapp.com/happymodsr?query=${body.slice(10)}&apikey=${zekais}`)
					const hppy = happymod.data
					const modo = hppy.result
					if (modo.length == 0) return axv.reply(from, 'Tidak dapat menemukan hasil', id)
					let resmod = `*「 HAPPY MOD 」*\n`
					for (let i = 0; i < modo.length; i++) {
						resmod += `\n─────────────────\n\n• *Title:* ${modo[i].name}\n• *Rating:* ${modo[i].rating}\n• *Url:* ${modo[i].url}\n`
					}
					axv.sendFileFromUrl(from, modo[0].thumb, 'HAPPYMOD.jpg', resmod, id)
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'burn':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `textnya mana sayang?`, id)
					const initextnya = body.slice(6)
					await axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/sbburn?text=${initextnya}&apikey=${zekais}`, '', '', id)
					break
				case prefix + 'wikihow':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`http://zekais-api.herokuapp.com/wikihow?apikey=${zekais}`)
						.then(async (res) => {
							const freply = res.data.title
							await axv.sendFileFromUrl(from, res.data.url, 'img.jpg', freply, id)
								.catch(() => {
									axv.reply(from, 'Lagi error', id)
								})
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, 'lagi error', id)
						})
					break
				case prefix + 'tobijak':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Membuat kata bijak dari query\nContoh: ${prefix}tobijak sayang`, id)
					axios.get(`https://zenzapi.xyz/api/buatkata?query=${body.slice(9)}&apikey=${zenzapi}`)
						.then(async (res) => {
							if (res.data.status == false) return axv.reply(from, 'Kata yang kamu masukkan tidak dapat ditemukan', id)
							axv.reply(from, `${res.data.result.message}\n- ${res.data.result.by}`, id)
						})
						.catch(err => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break

				case prefix + 'wame':
					const gethosts = await axv.getProfilePicFromServer(sender.id)
					if (gethosts == undefined) {
						var pfp = errorurl
					} else {
						var pfp = gethosts
					}
					await axv.sendFileFromUrl(from, pfp, '', `wa.me/${serial.replace(/@c.us/g, '')}`, id)
					break
				case prefix + 'oedotensei':
					var qmes = quotedMsgObj.sender.id
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					if (!isGroupAdmins && !isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Admin Grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Fitur ini hanya bisa digunakan ketika Bot menjadi Admin', id)
					try {
						if (ownerNumber.includes(qmes)) return axv.reply(from, 'Siapa lu mau ngekick Owner gua?', id)
						if (botNumber.includes(qmes)) return axv.reply(from, 'mau ngekick gua kah? akwoakwoa', id)
						await axv.removeParticipant(groupId, qmes)
						await sleep(1000)
						await axv.addParticipant(from, qmes)
					} catch {
						axv.reply(from, 'Maaf, terjadi kesalahan', id)
					}
					break
				case prefix + 'edotensei':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
					if (!isGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
					if (mentionedJidList.length === 0) return axv.reply(from, 'Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah ${prefix}edotensei @tagmember', id)
					for (let i = 0; i < mentionedJidList.length; i++) {
						if (groupAdmins.includes(mentionedJidList[i])) return axv.reply(from, mess.error.Ki, id)
						if (ownerNumber.includes(mentionedJidList[i])) return axv.reply(from, 'Tidak bisa mengeluarkan owner Bot')
						await axv.removeParticipant(groupId, mentionedJidList[i])
						await sleep(1000)
						await axv.addParticipant(from, `${mentionedJidList}`)
					}
					break
				case prefix + 'hidetag':
					if (!isGroupMsg) return axv.reply(from, `Command ini hanya bisa digunakan didalam grup!`, id)
					if (!isGroupAdmins) return axv.reply(from, `Command ini hanya bisa digunakan oleh Admin Grup`, id)
					await axv.getGroupMembersId(groupId)
						.then(async (member) => {
							let thistext = q
							for (let i = 0; i < member.length; i++) {
								thistext += `@${member[i].replace(/@c.us/g, '')}`
							}
							await axv.sendTextWithMentions(from, thistext, true)
						})
					break
				case prefix + 'infoall':
				case prefix + 'everyone':
				case prefix + 'tagall':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins & !isOwnerB) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
					const textInfo = body.slice(8)
					const namagcnih = name
					const memchu = chat.groupMetadata.participants.length
					const groupMem = await axv.getGroupMembers(groupId)
					let hehex = `Name Group : *${namagcnih}*\n\nTotal Members : *${memchu}*\n\n╔══✪〘 Mention All 〙✪══\n╠\n`
					for (let i = 0; i < groupMem.length; i++) {
						hehex += `╠➥`
						hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
					}
					hehex += '╠\n╚═〘 *A X V  B O T* 〙'
					await axv.sendTextWithMentions(from, `Info dari : @${sender.id.replace(/@c.us/g, '')}\n\n` + textInfo + '\n\n' + hehex)
					break
				case prefix + 'mutegrup':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
					if (args.length !== 1) return axv.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
					if (args[0] == 'on') {
						axv.setGroupToAdminsOnly(groupId, true).then(() => axv.sendText(from, 'Berhasil mengubah agar hanya admin yang dapat chat!'))
					} else if (args[0] == 'off') {
						axv.setGroupToAdminsOnly(groupId, false).then(() => axv.sendText(from, 'Berhasil mengubah agar semua anggota dapat chat!'))
					} else {
						axv.reply(from, `Untuk mengubah settingan group chat agar hanya admin saja yang bisa chat\n\nPenggunaan:\n${prefix}mutegrup on --aktifkan\n${prefix}mutegrup off --nonaktifkan`, id)
					}
					break
				case prefix + 'seticon':
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
					if (isMedia && type == 'image' || isQuotedImage) {
						const dataMedia = isQuotedImage ? quotedMsg : message
						const _mimetype = dataMedia.mimetype
						const mediaData = await decryptMedia(dataMedia, uaOverride)
						const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
						await axv.setGroupIcon(groupId, imageBase64)
					} else if (args.length === 1) {
						if (!isUrl(url)) { await axv.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
						axv.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
							? axv.reply(from, 'Maaf, link yang kamu kirim tidak memuat gambar.', id)
							: axv.reply(from, 'Berhasil mengubah profile group', id))
					} else {
						axv.reply(from, `Commands ini digunakan untuk mengganti icon/profile group chat\n\n\nPenggunaan:\n1. Silahkan kirim/reply sebuah gambar dengan caption ${prefix}setprofile\n\n2. Silahkan ketik ${prefix}setprofile linkImage`)
					}
					break

				//Owner Group
				case prefix + 'kickall': //mengeluarkan semua member
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					let isOwnerGroup = sender.id === chat.groupMetadata.owner
					if (!isOwnerGroup) return axv.reply(from, 'Maaf, perintah ini hanya dapat digunakan oleh Owner Grup!', id)
					if (!isBotGroupAdmins) return axv.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id)
					const allMem = await axv.getGroupMembers(groupId)
					for (let i = 0; i < allMem.length; i++) {
						if (groupAdmins.includes(allMem[i].id)) {

						} else {
							await axv.removeParticipant(groupId, allMem[i].id)
						}
					}
					axv.reply(from, 'Success kick all member', id)
					break

				//Owner Bot	
				case prefix + 'oblock':
					if (!isOwnerB) return axv.reply(from, 'Maaf, perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					var qmblock = quotedMsgObj.sender.id
					axv.contactBlock(qmblock)
					axv.reply(from, 'Berhasil blokir kontak', id)
					break
				case prefix + 'oaddprem':
					var qmbann = quotedMsgObj.sender.id
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
					try {
						prem.push(qmbann)
						fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
						axv.reply(from, 'Success add member to Premium user!', id)
					} catch {
						axv.reply(from, 'Maaf, terjadi kesalan', id)
					}
					break
				case prefix + 'unblock':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh owner Bot!', id)
					var qmunblok = quotedMsgObj.sender.id
					axv.contactUnblock(qmunblok)
					axv.reply(from, 'Berhasil unblock kontak', id)
					break
				case prefix + 'unblocked':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh owner bot!', id)
					axv.contactUnblock(args[0] + '@c.us')
					axv.reply(from, 'Berhasil unblock kontak', id)
					break
				case prefix + 'odelprem':
					var qmban2 = quotedMsgObj.sender.id
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					try {
						let xnxx = prem.indexOf(qmban2)
						prem.splice(xnxx, 1)
						fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
						axv.reply(from, 'Success delete Premium member!', id)
					} catch {
						axv.reply(from, 'Maaf, terjadi kesalahan saat membanned member', id)
					}
					break
				case prefix + 'block':
					if (!isOwnerB) return axv.reply(from, 'Maaf, perintah ini hanya bisa digunakan oleh owner bot!', id)
					axv.contactBlock(args[0] + '@c.us')
					axv.reply(from, 'Berhasil memblokir kontak', id)
					break
				case prefix + 'listprem':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					const premlistcase = JSON.parse(fs.readFileSync('./lib/database/prem.json'))
					let textpremlist = '┏━─✪[ Premium List ]✪──╮\n'
					for (let i = 0; i < premlistcase.length; i++) {
						textpremlist += `┃➥ @${premlistcase[i].replace(/@.+/g, '')}\n`
					}
					textpremlist += '┗━───────────────╯'
					axv.sendTextWithMentions(from, textpremlist)
					break
				case prefix + 'addprem':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					if (args.length == 0) return axv.reply(from, `Untuk menambah seseorang menjadi member premium`, id)
					prem.push(args[0].replace('@', '') + '@c.us')
					fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
					axv.reply(from, 'success add', id)
					break
				case prefix + 'trash':
					if (isMedia || isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						const uploadImagex = await uploadImages(mediaData, `${sender.id}_img`)
						axv.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/delete?url=${uploadImagex}&apikey=${zekais}`, '', '', id)
					} else {
						axv.reply(from, 'Format pesan salah', id)
					}
					break
				case prefix + 'addcecan':
					if (!isOwnerB) return axv.reply(from, 'Maaf, fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					if (isMedia && isImage || isQuotedImage) {
						limitFunc.pushLimit(sender.id, 1);

						axv.reply(from, mess.wait, id)
						const encryptMedia2 = isQuotedImage ? quotedMsg : message
						const medta2 = await decryptMedia(encryptMedia2, uaOverride)
						const linkpic2 = await uploadImages(medta2, `${sender.id}_img`)
						const linknyes = linkpic2
						cecann.push(linknyes)
						fs.writeFileSync('./lib/helper/cecan.json', JSON.stringify(cecann))
						axv.reply(from, 'Foto berhasil disimpan didalam database!', id)
					} else {
						axv.reply(from, 'Terjadi kesalahan saat menambahkan foto ke database', id)
					}
					break
				case prefix + 'addcogan':
					if (!isOwnerB) return axv.reply(from, 'Maaf, fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					if (isMedia && isImage || isQuotedImage) {


						axv.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const medta = await decryptMedia(encrypt, uaOverride)
						const linkpic = await uploadImages(medta, `${sender.id}_img`)
						const linkah = linkpic
						cogann.push(linkah)
						fs.writeFileSync('./lib/helper/cogan.json', JSON.stringify(cogann))
						axv.reply(from, 'Foto berhasil disimpan ke dalam database', id)
					} else {
						axv.reply(from, 'Terjadi kesalahan saat menambahkan foto ke database!', id)
					}
					break
				case prefix + 'ban':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
					if (args.length == 0) return axv.reply(from, `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`, id)
					try {
						banned.push(args + '@c.us')
						fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
						axv.reply(from, 'Mampus ke BAN! awkowkowko', id)
					} catch {
						axv.reply(from, 'Terjadi kesalahan', id)
					}
					break
				case prefix + 'unban':
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner bot & Member Premium', id)
					try {
						let xnxx = banned.indexOf(args + '@c.us')
						banned.splice(xnxx, 1)
						fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
						axv.reply(from, 'Kasian, makanya ku unban', id)
					} catch {
						axv.reply(from, 'Terjadi kesalahan', id)
					}
					break
				case prefix + 'afk':
					if (!isGroupMsg) return await axv.reply(from, 'Maaf, fitur ini hanya bisa digunakan didalam Grup!', id)
					if (isAfkOn) return await axv.reply(from, `${pushname} sekarang sedang *AFK (AWAY FROM KEYBOARD)*\n\nReason: ${reason}`, id)
					addAfk(sender.id, time, reason)
					axv.sendTextWithMentions(from, `*@${sender.id.replace(/@c.us/g, '')} SEKARANG SEDANG AFK! (AWAY FROM KEYBOARD)*\n\n*Alasan: ${reason}*`)
					break
				case prefix + 'left':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa digunakan didalam Grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Admin Grup!', id)
					if (args.length === 0) return axv.reply(from, 'Pilih enable atau disable tod', id)
					if (args[0].toLowerCase() === 'enable') {
						left.push(chat.id)
						fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
						axv.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
					} else if (args[0].toLowerCase() === 'disable') {
						var thisgc = left.indexOf(groupId)
						left.splice(thisgc, 1)
						fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
						axv.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
					} else {
						axv.reply(from, 'Pilih enable atau disable!', id)
					}
					break
				case prefix + 'deleteleft':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					let index = left.includes(chats)
					left.splice(index)
					fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
					axv.reply(from, 'berhasil mendelete semua id grup didalam database left.json', id)
					break
				case prefix + 'deleteban':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					let delban = banned.includes(chats)
					banned.splice(delban)
					fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
					axv.reply(from, 'Berhasil menghapus semua user banned', id)
					break
				case prefix + 'deletewelcome':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					let walcm = welkom.includes(chats)
					welkom.splice(walcm)
					fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
					axv.reply(from, 'berhasil mendelete semua id didalam database welcome.json', id)
					break
				case prefix + 'nsfw':
					if (args[0] === 'on') {
						if (_nsfw.includes(chatId)) return axv.reply(from, mess.nsfwalready, id)
						_nsfw.push(chatId)
						fs.writeFileSync('./lib/database/group/nsfw.json', JSON.stringify(_nsfw))
						axv.reply(from, mess.nsfwon, id)
					} else if (args[0] === 'off') {
						var nsfwsplice = _nsfw.indexOf(chatId)
						_nsfw.splice(nsfwsplice, 1)
						fs.writeFileSync('./lib/database/group/nsfw.json', JSON.stringify(_nsfw))
						axv.reply(from, mess.nsfwoff, id)
					} else {
						axv.reply(from, 'Pilih on/off', id)
					}
					break
				case prefix + 'welcome':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan didalam Grup!', id)
					if (!isGroupAdmins) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Admin Grup!', id)
					if (args.length === 0) return axv.reply(from, 'Pilih enable atau disable', id)
					if (args[0].toLowerCase() === 'enable') {
						welkom.push(chat.id)
						fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
						axv.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
					} else if (args[0].toLowerCase() === 'disable') {
						var thisgc = welkom.indexOf(groupId)
						welkom.splice(thisgc, 1)
						fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
						axv.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
					} else {
						axv.reply(from, 'Pilih enable atau disable!', id)
					}
					break
				case prefix + 'ban':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
					var qmban = quotedMsgObj.sender.id
					try {
						banned.push(qmban)
						fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
						axv.reply(from, 'Mampus ke BAN! awkowkowko', id)
					} catch {
						axv.reply(from, 'Maaf, terjadi kesalahan saat membanned member', id)
					}
					break
				case prefix + 'unban':
				case prefix + 'odelprem':
					var qmban2 = quotedMsgObj.sender.id
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner Bot!', id)
					try {
						let xnxx = banned.indexOf(qmban2)
						banned.splice(xnxx, 1)
						fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
						axv.reply(from, 'Kasian, makanya ku unban', id)
					} catch {
						axv.reply(from, 'Maaf, terjadi kesalahan saat membanned member!', id)
					}
					break
				case prefix + 'delprem':
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner Bot!', id)
					if (args.length == 0) return axv.reply(from, `Untuk mendelete seseorang menjadi member biasa`, id)
					let prsl = prem.indexOf(args[0] + '@c.us')
					prem.splice(prsl, 1)
					fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
					axv.reply(from, 'Success delete prem member', id)
					break
				case prefix + 'google':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					const googleQuery = body.slice(8)
					if (googleQuery == undefined || googleQuery == ' ') return axv.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
					google({ 'query': googleQuery }).then(results => {
						let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
						for (let i = 0; i < results.length; i++) {
							vars += `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
						}
						axv.reply(from, vars, id);
					}).catch(e => {
						console.log(e)
						axv.sendText(ownerNumber, 'Google Error : ' + e);
					})
					break
				case prefix + 'crygif':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/gifs?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'wallprogramming':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/programing?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwgangbang':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/gangbang?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwglasses':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/glasses?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwbjanime':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/blowjob?apikey=ApiRevita`, 'bjanime.png', '', id)
					break
				case prefix + 'nsfwzettai':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/zettai?apikey=ApiRevita`, '', '', id)
					break

				case prefix + 'nsfwass':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/ass?apikey=ApiRevita`, '', '', id)
					break

				case prefix + 'nsfwyuri':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/yuri?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwcum':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/cum?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwfemdom':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/femdom?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwmanga':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/manga?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwtentacles':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/tentacles?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwpasties':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/panties?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfworgy':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/orgy?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwmasturbation':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/masturbation?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwbdsm':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/bdsm?apikey=ApiRevita`, '', '', id)
					break

				case prefix + 'nsfwneko':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/neko2?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwthighs':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/thighs?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwpussy':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/pussy?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwcuckold':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/cuckold?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'hentai':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/hentai?apikey=ApiRevita`, '', '', id)
					break

				case prefix + 'nsfwfoot':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/foot?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'nsfwero':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/ero?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'natajadeh':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://zenzapis.xyz/randomasupan/natajadeh?apikey=${zenzapis}`, '', '', id)
					break
				case prefix + 'aeunicetjoaa':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://zenzapis.xyz/randomasupan/aeunicetjoaa?apikey=${zenzapis}`, '', '', id)
					break
				case prefix + 'nsfwrwink':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animu/wink`).then(res => {
						axv.sendStickerfromUrl(from, res.data.link, StikerMetadata)
					})
						.catch((err) => {
							axv.reply(from, 'Error!', id)
						})
					break
				case prefix + 'nsfwahegao':
					if (!isPrem && !isOwnerB) return axv.reply(from, mess.prem, id)
					axv.sendText(from, mess.wait);
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/nsfw/ahegao?apikey=ApiRevita`, '', '', id)
					break
				case prefix + 'pinimg':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (args.length == 0) return axv.reply(from, `Untuk mencari Foto dari Pinterest gunakan ${prefix}pinimg image`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					try {
						const bodys = body.slice(8)
						const topin = await axios.get(`https://api.vhtear.com/pinterest?query=${bodys}&apikey=${vhtearkey}`)
						const tomg = topin.data.result
						let pup2 = tomg[Math.floor(Math.random() * tomg.length)]
						axv.sendFileFromUrl(from, pup2, '', 'nihh om', id)
					} catch (err) {
						axv.reply(from, 'Gada kali om di pinterest', id)
						console.log(err)
					}
					break
				case prefix + 'ptl':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg", "https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg", "https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg", "https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg", "https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg", "https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg", "https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg", "https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg", "https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg", "https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg", "https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg", "https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg", "https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg", "https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg", "https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg", "https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg", "https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg", "https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg", "https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg", "https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg", "https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg", "https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg", "https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg", "https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg", "https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg", "https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg", "https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg", "https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg", "https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg", "https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg", "https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
					let pep = pptl[Math.floor(Math.random() * pptl.length)]
					axv.sendFileFromUrl(from, pep, 'pptl.jpg', 'nihh ngab', id)
					break
				case prefix + 'groupicon':
				case prefix + 'gcicon':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa digunakan didalam grup!`, id)
					var groupic = await axv.getProfilePicFromServer(chat.id)
					if (groupic == undefined) {
						var pfp = 'https://i.ibb.co/DthYrSB/a256bae0f5ed.jpg'
					} else {
						var pfp = groupic
					}
					await axv.sendFileFromUrl(from, pfp, 'group.jpg', '', id)
					break
				case prefix + 'groupinfo':
				case prefix + 'gcinfo':
				case prefix + 'grupinfo':
				case prefix + 'infogroup':
				case prefix + 'infogrup':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					var totalMem = chat.groupMetadata.participants.length
					var desc = chat.groupMetadata.desc
					var groupname = name
					var timestp = chat.groupMetadata.creation
					var date = moment(timestp * 1000).format('dddd, DD MMMM YYYY')
					var timeh = moment(timestp * 1000).format('HH:mm:ss')
					var ownerwoi = chat.groupMetadata.owner
					var grplink = antilink.includes(chat.id)
					var botadmin = isBotGroupAdmins ? 'Admin' : 'Member'
					var grouppic = await axv.getProfilePicFromServer(chat.id)
					if (grouppic == undefined) {
						var pfp = errorurl
					} else {
						var pfp = grouppic
					}
					await axv.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*
                 *➸ Name : ${groupname}*
                  Group ini didirikan sejak *${date}* Pukul *${timeh}* oleh @${ownerwoi.replace('@c.us', '')}


*➸ Members : ${totalMem}*
*➸ Antilink Status : ${grplink ? 'On' : 'Off'}*
*➸ Bot Group Status : ${botadmin}*
*➸ Group Description* 
${desc}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
_Desc di update oleh : @${chat.groupMetadata.descOwner.replace('@c.us', '')} pada *${moment(chat.groupMetadata.descTime * 1000).format('dddd, DD MMMM YYYY')}* pukul ${moment(chat.groupMetadata.descTime * 1000).format('HH:mm:ss')}_`)

					break
				case prefix + 'grupbot':
				case prefix + 'gcbot':
				case prefix + 'groupbot':
					await axv.reply(from, `https://chat.whatsapp.com/K7CyWPZ3fpq30bRziLLMrm\n\nSkuyy joinn`, id)
					break
				case prefix + 'discordserver':
					const serverdiscord = '\n\ngaada'
					await axv.sendLinkWithAutoPreview(from, serverdiscord)
					break
				case prefix + 'discord':
					await axv.reply(from, `English :\nNew feature is discord emoji, if u send code emoji from discord, bot will send it to be a sticker\nIndonesian :\nFitur terbaru adalah emoji discord, jika kamu mengirim kode emoji dari discord, Bot akan mengirimkan emoji berupa stiker\nExample: :veryangry:`, id)
					break
				case prefix + 'tiktokaudio':
					if (q.length == 0) return axv.reply(from, `Fitur untuk mengkonversi Video menjadi Audio!\nKirim perintah ${prefix}tiktokaudio link tiktok`, id)
					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					stalkuy.getMusic(q)
						.then(res => {
							axv.sendFileFromUrl(from, res.coverLarge, '', `*- Title:* ${res.title}\n*- Author:* ${res.author}\n*- Duration:* ${res.duration}\n*- Original:* ${res.original}\n*- Album:* ${res.album}`, id)
								.then(() => {
									axv.sendFileFromUrl(from, res.playURL, '', '', id)
										.catch((err) => {
											axv.reply(from, err.message, id)
										})
								})
						})
						.catch((err) => {
							console.log(err)
							axv.reply(from, err.message, id)
						})
					break
				case prefix + 'math':
				case prefix + 'mtk':
					if (args.length === 3) return axv.reply(from, `[❗] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12 * 12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
					const mtkk = body.slice(5)
					if (typeof Math_js.evaluate(mtkk) !== "number") {
						axv.reply(from, `"${mtkk}", bukan angka!\n[❗] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12 * 12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
					} else {
						axv.reply(from, `*Hasil :*\n_${mtkk}_ = _${Math_js.evaluate(mtkk)}_`, id)
					}
					break
				case prefix + 'twister':
					fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/kuis/twister?apikey=${hackapi}`)
						.then(async (res) => {
							if (res.status == false) return axv.reply(from, 'Terjadi kesalahan, silahkan ulangi', id)
							axv.reply(from, res.result, id)
								.catch(err => {
									console.log(err)
									axv.reply(from, 'Sedang error', id)
								})
						})
					break
				case prefix + 'kalkulator':
					if (args.length === 0) return axv.reply(from, `[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12 * 12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
					const mtk = body.slice(12)
					axios.get(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${vhtearkey}`)
						.then(async (res) => {
							const jawabannya = res.data.result.data
							const salah = res.data.result.data
							axv.reply(from, jawabannya, id)
								.catch((err) => {
									axv.reply(from, salah, id)
								})
						})
					break
				case prefix + 'screen': {
					if (!isOwnerB) return await axv.reply(from, 'Fitur ini hanya dapat digunakan oleh admin bot')
					const snap = await axv.getSnapshot()
					axv.sendImage(from, snap, 'snapshot.png', 'Session Snapshot')
				}
					break
				case prefix + 'listbacot':
					const bacul = dbcot
					let bacotanmu = `╔══✪〘 *List Bacot!* 〙✪══\n`
					for (let i = 0; i < bacul.length; i++) {
						bacotanmu += '╠➥'
						bacotanmu += ` ${bacul[i]}\n`
					}
					bacotanmu += '╚═〘 *A X V  B O T* 〙'
					await axv.reply(from, bacotanmu, id)
					break
				case prefix + 'premlist':
					const premlist = prem
					let kuntul = `╔══✪〘 *Prem Member!* 〙✪══\n╠➥Total Premium user : ${prem.length}\n`
					for (let i = 0; i < premlist.length; i++) {
						kuntul += `╠➥`
						kuntul += `${premlist[i].replace(/@c.us/g, '')}\n`
					}
					kuntul += '╚═〘 *A X V  B O T* 〙'
					await axv.reply(from, kuntul, id)
					break
				case prefix + 'listcecan':
					const ccn = cecann
					let xoxi = `List Foto Cecan\n\n`
					for (let i = 0; i < ccn.length; i++) {
						xoxi += '-'
						xoxi += `${ccn[i]}\n`
					}
					await axv.reply(from, xoxi, id)
					break
				case prefix + 'listcogan':
					const cgn = cogann
					let xoxo = `List Foto Cogan\n\n`
					for (let i = 0; i < cgn.length; i++) {
						xoxo += '-'
						xoxo += `${cgn[i]}\n`
					}
					await axv.reply(from, xoxo, id)
					break
				case prefix + 'listleft':
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh owner bot!', id)
					const lefting = left
					let lefs = `List ID Grup\n\n`
					for (let i = 0; i < lefting.length; i++) {
						lefs += '-'
						lefs += `${lefting[i]}\n`
					}
					await axv.reply(from, lefs, id)
					break
				case prefix + 'listwelcome':
					if (!isOwnerB) return axv.reply(from, 'Fitur ini hanya bisa digunakan oleh owner bot!', id)
					const wulcum = welkom
					let wels = `List ID Grup\n\n`
					for (let i = 0; i < wulcum.length; i++) {
						wels += '-'
						wels += `${wulcum[i]}\n`
					}
					await axv.reply(from, wels, id)
					break
				case prefix + 'listimg':
					const imagick = listimg
					let kemtull = `╔══✪〘 *List Image!* 〙✪══\n`
					for (let i = 0; i < imagick.length; i++) {
						kemtull += '╠➥'
						kemtull += `${imagick[i]}\n`
					}
					kemtull += '╚═〘 *A X V  B O T* 〙'
					await axv.reply(from, kemtull, id)
					break
				case prefix + 'listvn':
					const vnlist = listvn
					let kemtul = `╔══✪〘 *List VN!* 〙✪══\n`
					for (let i = 0; i < vnlist.length; i++) {
						kemtul += '╠➥'
						kemtul += `${vnlist[i]}\n`
					}
					kemtul += '╚═〘 *A X V  B O T* 〙'
					await axv.reply(from, kemtul, id)
					break
				case prefix + 'liststiker':
					const stiklist = liststicker
					let kumtul = `╔══✪〘 *List Sticker!* 〙✪══\n`
					for (let i = 0; i < stiklist.length; i++) {
						kumtul += '╠➥'
						kumtul += `${stiklist[i]}\n`
					}
					kumtul += '╚═〘 *A X V  B O T* 〙'
					await axv.reply(from, kumtul, id)
					break
				case prefix + 'saylist':
					const saylest = dsay
					let kimtil = `╔══✪〘 *Say List!* 〙✪══\n`
					for (let i = 0; i < saylest.length; i++) {
						kimtil += '╠➥'
						kimtil += `${saylest[i]}\n`
					}
					kimtil += '╚═〘 *A X V  B O T* 〙'
					await axv.sendText(from, kimtil)
					break
				case prefix + 'addsay': {
					if (!args.length >= 1) return axv.reply(from, 'Kalimatnya manaa?', id)
					const say = body.slice(8)
					dsay.push(say)
					fs.writeFileSync('./lib/database/say.json', JSON.stringify(dsay))
					axv.reply(from, `Done add say ke database\nTotal add say : *${dsay.length - 1}* ,`, id)
				}
					break
				case prefix + 'addbacot': {
					if (!args.length >= 1) return axv.reply(from, 'BACOTAN NYA MANA ANJING?? DASAR BODOH!', id)
					const bacot = body.slice(10)
					dbcot.push(bacot)
					fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
					axv.reply(from, `Sukses menambahkan Kata bacot ke database\nTotal data bacot sekarang : *${dbcot.length - 1}*`, id)
				}
					break
				case prefix + 'delbacot':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa di gunakan didalam grup!`, id)
					const delbd = dbcot.indexOf(body.slice(12))
					dbcot.splice(delbd, 1)
					fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
					axv.reply(from, `Success Menghapus Bacot!`, id)
					break
				case prefix + 'bacot':
					if (args.length == 1) {
						const no = args[0]
						const cekdb = dbcot.length
						if (cekdb <= no) return await axv.reply(from, `Total data saat ini hanya sampai *${cekdb - 1}*`, id)
						const res = dbcot[Math.floor(Math.random() * (dbcot.length))]
						axv.sendreply(from, res, id)
					} else {
						const kata = dbcot[Math.floor(Math.random() * (dbcot.length))];
						axv.reply(from, kata, id)
					}
					break
				case prefix + 'say':
					if (args.length == 1) {
						const wuh = args[0]
						const sayur = dsay.length
						if (sayur <= wuh) return await axv.reply(from, `Total database saat ini hanya sampe *${sayur - 1}`, id)
						const lahs = dsay[wuh]
						axv.sendText(from, lahs)
					} else {
						const kata = dsay[Math.floor(Math.random() * (dsay.length))];
						axv.reply(from, kata, id)
					}
					break
				case prefix + 'delprem':
					if (!isOwnerB) return axv.reply(from, `Perintah ini hanya bisa digunakan oleh Owner Bot`, id)
					const delprem = prem.indexOf(body.slice(9) + '@c.us')
					prem.splice(delprem, 1)
					fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
					axv.reply(from, `Success delete premium member`, id)
					break
				case prefix + 'delsay':
					if (!isGroupMsg) return axv.reply(from, `Perintah ini hanya bisa di gunakan didalam grup!`, id)
					const delsay = dsay.indexOf(body.slice(8))
					dsay.splice(delsay, 1)
					fs.writeFileSync('./lib/database/say.json', JSON.stringify(dsay))
					axv.reply(from, `Success Menghapus Say!`, id)
					break
				case prefix + 'iplocation':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Tidak ada ip Address, silahkan masuk ip address anda\nContoh : ${prefix}iplocation 180.242.215.107`, id)
					axios.get(`https://ipapi.co/${body.slice(12)}/json/`)
						.then(async (res) => {
							const addr = `• *Ip :* ${res.data.ip}\n• *Ip Version :* ${res.data.version}\n• *Negara :* ${res.data.country_name}\n• *Kode Negara :* ${res.data.country_code}\n• *Ibu Kota :* ${res.data.country_capital}\n• *Wilayah :* ${res.data.region}\n• *Kode Wilayah :* ${res.data.region_code}\n• *Postal :* ${res.data.postal}\n• *Latitude :* ${res.data.latitude}\n• *Longitude :* ${res.data.longitude}\n• *Timezone :* ${res.data.timezone}\n• *Utc Offset :* ${res.data.utc_offset}\n• *Kode Panggilan Negara :* ${res.data.country_calling_code}\n• *Mata Uang :* ${res.data.currency_name}\n• *Kode Mata Uang :* ${res.data.currency}\n• *Bahasa :* ${res.data.languages}\n• *Jumlah Wilayah :* ${res.data.country_area}\n• *Populasi Negara :* ${res.data.country_population}\n• *ASN :* ${res.data.asn}\n• *Provider :* ${res.data.org}`
							axv.reply(from, addr, id)
						})
					break
				case prefix + 'matauang':
					const matung = `List Currency : btc, usd, eur, gbp, aud, cad, chf, cny, jpy, sgd, nzd, pkr, hkd, krw, mxn, nok, egp, clp, ngn, brl, rub, uah, thb, pln, inr, eth, xmr, dash, doge, ltc, str, xrp`
					axv.reply(from, matung, id)
					break
				case prefix + 'nyenye':
					if (args.length = 0) return axv.reply(from, `Fitur ini dah Gaada', id`)
					break
				case prefix + 'convertduit':
					if (args.length == 0) return axv.reply(from, `Untuk mengkonversi uang dari negara luar menjadi IDR\nContoh : ${prefix}convertduit usd|2000\n\nDan untuk mengecek mata uang bisa gunakan ${prefix}matauang`, id)
					const duit1 = arg.split('|')[0]
					const duit2 = arg.split('|')[1]
					await axios.get('https://api.terhambar.com/r=' + duit1 + '&bal=' + duit2).then(res => {
						const duitnya = `Konversi mata uang ${res.data.result.currency} dari ${duit2}\n\nBalance Currency : *${res.data.result.balanceCurrency}*\n\nHasil Dirupiahkan : *${res.data.result.resultConvert}*`
						axv.reply(from, duitnya, id)
					})
					break
				case prefix + 'hitungwr':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `untuk Menghitung WR MLBB, Contoh : ${prefix}hitungwr 50|60|90`, id)
					const wr1 = arg.split('|')[0]
					const wr2 = arg.split('|')[1]
					const wr3 = arg.split('|')[2]
					const URL = `https://zenzapis.xyz/information/hitungwr?apikey=${zenzapis}&text=${wr1}&text2=${wr2}&text3=${wr3}`
					console.log(URL)
					axios.get(URL).then(res => {
						const wrnya = `Match ${res.data.result.total_match} Total Wr : ${res.data.result.total_winrate}\nReq WR : ${res.data.result.req_winrate}\n\nDesc : ${res.data.result.description}`
						axv.reply(from, wrnya, id)
					})
					break
				case prefix + 'translate':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Untuk translate kata gunakan ${prefix}translate from|to|Kata kata\n\nContoh : ${prefix}translate id|en|Bagaimana kabarmu?`, id)
					const suway0 = arg.split('|')[0]
					const suway1 = arg.split('|')[1]
					const suway2 = arg.split('|')[2]
					await axios.get(`https://dappagantengg.herokuapp.com/api/others/translate?from=${suway0}&to=${suway1}&text=${suway2}&apikey=${dapuhyapi}`).then(res => {
						const texttr = res.data.result
						axv.reply(from, texttr, id)
					})
					break
				case prefix + 'santet': //work
					if (!isGroupMsg) return axv.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
					if (mentionedJidList.length === 0) return axv.reply(from, 'Tag member yang mau disantet, contoh : /santet @wahyu | karena dia gay', id)
					if (args.length === 1) return axv.reply(from, 'Masukkan alasan kenapa menyantet dia!!', id)
					const target = arg.split('|')[0]
					const alasan = arg.split('|')[1]
					await axv.sendTextWithMentions(from, `Santet terkirim ke ${target}, Dengan alasan : ${alasan}`)
					break
				case prefix + 'doggo':
					const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg", "https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg", "https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg", "https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg", "https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg", "https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg", "https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg", "https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg", "https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg", "https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg", "https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg", "https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg", "https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg", "https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg", "https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg", "https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg", "https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg", "https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg", "https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg", "https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg", "https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg", "https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg", "https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg", "https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg", "https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg", "https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg", "https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg", "https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg", "https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg", "https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg", "https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg", "https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg", "https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg", "https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg", "https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg", "https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg", "https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg", "https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg", "https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg", "https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg", "https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg", "https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg", "https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg", "https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg", "https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg", "https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg", "https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg", "https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg", "https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg", "https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg", "https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg", "https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg", "https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg", "https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg", "https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg", "https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg", "https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg", "https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg", "https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg", "https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg", "https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg", "https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg", "https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg", "https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg", "https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg", "https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg", "https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg", "https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg", "https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg", "https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg", "https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg", "https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg", "https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg", "https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg", "https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg", "https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg", "https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg", "https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg", "https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg", "https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg", "https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg", "https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg", "https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg", "https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg", "https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg", "https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg", "https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg", "https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg", "https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg", "https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg", "https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg", "https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg", "https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg", "https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg", "https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg", "https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg", "https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg", "https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg", "https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg", "https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
					let kya = list[Math.floor(Math.random() * list.length)]
					axv.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Doggo sparkles', id)
					break
				case prefix + 'wpanime':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					limitFunc.pushLimit(sender.id, 1);
					axv.reply(from, mess.wait, id)
					axv.sendFileFromUrl(from, `https://revita.herokuapp.com/api/wallpaper/anime?apikey=ApiRevita`, 'img.jpg', '', id)
					break
				case prefix + 'aiquote':
					const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
					await axv.sendFileFromUrl(from, aiquote.data, 'quote.jpg', '', id)
					break
				case prefix + 'ttp':
					if (args.length == 0) return axv.reply(from, 'textnya mana?', id)
					const beword = body.slice(5)
					await axv.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/ttp4?apikey=${lolhuman}&text=${beword}`, '', '', id)

					break
				case prefix + 'kapan':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					if (args.length == 0) return axv.reply(from, `Tidak ada Kata!\n Contoh : ${prefix}kapan kamu mati?`, id)
					const when = args.join(' ')
					const ans = kapan[Math.floor(Math.random() * (kapan.length))]
					if (!when) axv.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`)
					await axv.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
					break
				case prefix + 'nilai':
				case prefix + 'rate':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					if (args.length == 0) return axv.reply(from, `Fitur untuk menilai yang kalian katakan\n Contoh : ${prefix}rate kegantenganku`, id)
					const rating = args.join(' ')
					const awr = rate[Math.floor(Math.random() * (rate.length))]
					if (!rating) axv.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`)
					await axv.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
					break
				case prefix + 'apakah':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					if (args.length == 0) return axv.reply(from, `Tidak ada Kata!\nContoh : ${prefix}apakah dia cantik?`, id)
					const nanya = args.join(' ')
					const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
					if (!nanya) axv.reply(from, '⚠️ Format salah! Ketik */menu* untuk penggunaan.')
					await axv.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
					break
				case prefix + 'bisakah':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					if (args.length == 0) return axv.reply(from, `Tidak ada Kata!\nContoh : ${prefix}bisakah dia mencintaiku?`, id)
					const bsk = args.join(' ')
					const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
					if (!bsk) axv.reply(from, '⚠️ Format salah! Ketik */menu* untuk penggunaan.')
					await axv.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
					break
				case prefix + 'listmuted':
				case prefix + 'listmute':
					let inmuted = `This is list of Muted grup\nTotal : ${muted.length}\n`
					for (let i of muted) {
						inmuted += `-\n`
					}
					await axv.reply(from, inmuted, id)
					break
				case prefix + 'listban':
					let bened = `This is list of banned number\nTotal : ${banned.length}\n`
					for (let i of banned) {
						bened += `➸ ${i.replace(/@c.us/g, '')}\n`
					}
					await axv.reply(from, bened, id)
					break
				case prefix + 'me':
					if (!isGroupMsg) return axv.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
					if (isBanned) return false
					if (isGroupMsg) {
						if (!quotedMsg) {
							var pic = await axv.getProfilePicFromServer(author)
							var namae = pushname
							var sts = await axv.getStatus(author)
							var adm = isGroupAdmins
							const userLevel = level.getLevelingLevel(sender.id, _level)
							const myXp = level.getLevelingXp(sender.id, _level)
							const reqXp = 5 * Math.pow(userLevel, 2) + 50 * 1 + 100
							const { status } = sts
							if (pic == undefined) {
								var pfp = errorImg
							} else {
								var pfp = pic
							}
							await axv.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *Level: ${userLevel}*\n\n➸ *Xp : ${myXp} / ${reqXp}*\n\n➸ *User Info: ${status}*\n\n➸ *Admin Group: ${adm}*\n\n`)
						} else if (quotedMsg) {
							var qmid = quotedMsgObj.sender.id
							var pic = await axv.getProfilePicFromServer(qmid)
							var namae = quotedMsgObj.sender.name
							var sts = await axv.getStatus(qmid)
							var adm = isGroupAdmins
							const userLevel = level.getLevelingLevel(qmid, _level)
							const myXp = level.getLevelingXp(qmid, _level)
							const reqXp = 5 * Math.pow(userLevel, 2) + 50 * 1 + 100
							const { status } = sts
							if (pic == undefined) {
								var pfp = errorImg
							} else {
								var pfp = pic
							}
							await axv.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *Level: ${userLevel}*\n\n➸ *Xp : ${myXp} / ${reqXp}*\n\n➸ *User Info: ${status}*\n\n➸ *Admin Group: ${adm}*\n\n`)
						}
					}
					break
				case prefix + 'listblock':
					let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
					for (let i of blockNumber) {
						hih += `➸ ${i.replace(/@c.us/g, '')}\n`
					}
					await axv.reply(from, hih, id)
					break
				case prefix + 'bcgrup':
					if (!isOwnerB) return axv.reply(from, `Command ini hanya bisa digunakan oleh Owner Bot`, id)
					bcgruptxt = body.slice(8)
					txtbcgrp = `${bcgruptxt}\n\n〘 *A X V B O T* 〙`
					const semuagrup2 = await axv.getAllGroups();
					if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg)
						const imageBase6444 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let allgroupbc of semuagrup2) {
							var cekgrup = await axv.getChatById(allgroupbc)
							if (!cekgrup.isReadOnly) axv.sendImage(allgroupbc, imageBase6444, 'img.jpg', txtbcgrp)
						}
						axv.reply(from, 'Broadcast type image for All Groups was Successfully', id)
					} else if (quotedMsg && quotedMsg.type == 'audio' || quotedMsg && quotedMsg.type == 'ptt') {
						const mediaData = await decryptMedia(quotedMsg)
						const audiobase6444 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let allgroupbc of semuagrup2) {
							var cekgrup = await axv.getChatById(allgroupbc)
							if (!cekgrup.isReadOnly) axv.sendPtt(allgroupbc, audiobase6444, 'audio.mp3')
						}
						axv.reply(from, 'Broadcast type Audio for All Groups was Successfully', id)
					} else if (quotedMsg && quotedMsg.type == 'sticker') {
						const mediaData = await decryptMedia(quotedMsg)
						const stickbase6444 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let allgroupbc of semuagrup2) {
							var cekgrup = await axv.getChatById(allgroupbc)
							if (!cekgrup.isReadOnly) axv.sendImageAsSticker(allgroupbc, stickbase6444, StickerMetadata)
						}
						axv.reply(from, 'Broadcast type Sticker for All Groups was successfully')
					} else {
						for (let allgroupbc of semuagrup2) {
							var cekgrup = await axv.getChatById(allgroupbc)
							if (!cekgrup.isReadOnly) axv.sendText(allgroupbc, txtbcgrp)
						}
						axv.reply(from, 'Broadcast was successfully', id)
					}
					break
				case prefix + 'bc':
					if (!isOwnerB) return axv.reply(from, `Command ini hanya bisa digunakan oleh Owner Bot`, id)
					bctxt = body.slice(4)
					txtbc = `〘 *A X V B O T* 〙\n\n${bctxt}`
					const semuagrup = await axv.getAllChatIds();
					if (quotedMsg && quotedMsg.type == 'image') {
						const mediaData = await decryptMedia(quotedMsg)
						const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let grupnya of semuagrup) {
							var cekgrup = await axv.getChatById(grupnya)
							if (!cekgrup.isReadOnly) axv.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
						}
						axv.reply('Broadcast sukses!')
					} else if (quotedMsg && quotedMsg.type == 'audio' || quotedMsg && quotedMsg.type == 'ptt') {
						const mediaData = await decryptMedia(quotedMsg)
						const audiobase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let grupnya of semuagrup) {
							var cekgrup = await axv.getChatById(grupnya)
							if (!cekgrup.isReadOnly) axv.sendPtt(grupnya, audiobase64, 'audio.mp3')
						}
						axv.reply(from, 'Broadcast audio sukses', id)
					} else if (quotedMsg && quotedMsg.type == 'sticker') {
						const mediaData = await decryptMedia(quotedMsg)
						const stickbase = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
						for (let grupnya of semuagrup) {
							var cekgrup = await axv.getChatById(grupnya)
							if (!cekgrup.isReadOnly) axv.sendImageAsSticker(grupnya, stickbase, StickerMetadata)
						}
						axv.reply(from, 'Broadcast stiker berhasil', id)
					} else {
						for (let grupnya of semuagrup) {
							var cekgrup = await axv.getChatById(grupnya)
							if (!cekgrup.isReadOnly && isMuted(grupnya)) axv.sendText(grupnya, txtbc)
						}
						axv.reply('Broadcast Success!')
					}
					break
				case prefix + 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
					if (!isOwnerB) return axv.reply(from, 'Perintah ini hanya untuk Owner bot', id)
					const allChatso = await axv.getAllChatIds()
					const loadedx = await axv.getAmountOfLoadedMessages()
					const allGroupq = await axv.getAllGroups()
					for (let gclist of allGroupq) {
						await axv.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, Total Grup yang Bot join saat ini sebanyak: *${allGroupq.length}*\n\nSilahkan invite bot lagi jika dibutuhkan`)
						sleep(1000)
						await axv.leaveGroup(gclist.contact.id)
					}
					axv.reply(from, 'Success leave all group!', id)
					break
				case prefix + 'clearall': //menghapus seluruh pesan diakun bot
					if (!isOwnerBot) return axv.reply(from, 'Perintah ini hanya untuk Owner bot', id)
					const allChatx = await axv.getAllChats()
					for (let dchat of allChatx) {
						await axv.deleteChat(dchat.id)
					}
					axv.reply(from, 'Success clear all chat!', id)
					break

				case prefix + 'adminlist':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					let mimin = `*LIST ADMIN FROM ${name}*\n`
					for (let admon of groupAdmins) {
						mimin += `➸ @${admon.replace(/@c.us/g, '')}\n`
					}
					await axv.sendTextWithMentions(from, mimin, id)
					break
				case prefix + 'howmuch':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa digunakan dalam Grup')
					const tulul = name
					const yaelah = chat.groupMetadata.participants.length
					await axv.sendText(from, `Total Member in *${tulul}* is : *${yaelah}*`)
					break
				case prefix + 'ownergc':
					if (!isGroupMsg) return axv.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
					const Owner_ = chat.groupMetadata.owner
					await axv.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
					break
				case prefix + 'axv':
					if (!limitFunc.cekLimit(sender.id, setting.limitCount)) return axv.reply(from, `_Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu_`, id)

					if (args.length == 0) return axv.reply(from, `Menu ini buat ngomong sama AXV Bot.\n usage : .axv haiiii\n\nInfo : untuk fitur ini setiap pesannya memakan limit sebesar 1.`, id)
					limitFunc.pushLimit(sender.id, 1);
					smgtt = body.slice(5)
					axios.get(`https://api.lolhuman.xyz/api/simi?apikey=${lolhuman}&text=${smgtt}`)
						.then((res) => {
							if (res.data.status == 403) return axv.sendText(ownerNumber, `${res.data.result}\n\n${res.data.pesan}`)
							axv.reply(from, `*${res.data.result}*\n\n_AXV BOT_`, id)
						})
						.catch((err) => {
							axv.reply(from, `${err}`, id)
						})
			}


			// Simi-simi function
			if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
				axios.get(`https://api.lolhuman.xyz/api/simi?apikey=${lolhuman}&text=${encodeURIComponent(message.body)}`)
					.then((res) => {
						if (res.data.status == 403) return axv.sendText(ownerNumber, `${res.data.result}\n\n${res.data.pesan}`)
						axv.reply(from, `${res.data.result}`, id)
					})
					.catch((err) => {
						axv.reply(from, `${err}`, id)
					})
			}
		}
	} catch (err) {
		console.log(color('[EROR]', 'red'), err)
	}
}
