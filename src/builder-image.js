const path = require('path')
const fs = require('fs')
const sharp = require('sharp')
const pngToIco = require('png-to-ico')

module.exports = async (dist, logo, title) => {
  const presets = [
    { size: 512, name: 'android-chrome-512x512.png' },
    { size: 192, name: 'android-chrome-192x192.png' }
  ]
  for (const preset of presets) {
    await sharp(logo)
      .png()
      .resize(preset.size)
      .toFile(path.join(dist, preset.name))
  }

  const icon = await pngToIco(logo)
  fs.writeFileSync(path.join(dist, 'favicon.ico'), icon)
}
