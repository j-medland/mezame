// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var MPlayer = require('mplayer')
var player = new MPlayer()
var url = 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p'

player.on('ready',()=>{
  player.openFile(url,{
    cache: 128,
    cacheMin: 1
})
  player.volume(50)
  player.play()
})
