const fs = require('fs')
const path = require('path')

module.exports = (dist, info) => {
  const webmanifest = {
    start_url: info.startUrl,
    scope: info.startUrl,
    display: 'standalone',
    name: `${info.title} | ${info.description}`,
    short_name: info.title,
    description: info.description,
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: info.themeColor,
    background_color: info.themeColor
  }
  fs.writeFileSync(path.join(dist, 'site.webmanifest'), JSON.stringify(webmanifest))
}
