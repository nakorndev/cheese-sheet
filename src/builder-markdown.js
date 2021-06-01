const fs = require('fs')
const hljs = require('highlight.js')
const markdownIt = require('markdown-it')

const md = markdownIt({
  highlight: function (str, language) {
    if (language && hljs.getLanguage(language)) {
      return `<pre class="hljs"><code>${hljs.highlight(str, { language }).value}</code></pre>`
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
  html: true,
  linkify: true
})

module.exports = (cheatsheetPath) => {
  const cheatsheet = fs.readFileSync(cheatsheetPath).toString()

  const heads = cheatsheet.split('##')
  const top = heads.shift().split('\n\n')
  const title = top[0].substr(2)
  const subtitle = md.render(top[1])
  const cheats = []

  for (const head of heads) {
    const section = head.split('\n\n')
    cheats.push({
      title: section.shift().substr(1),
      body: md.render(section.join('\n\n'))
    })
  }

  return {
    title,
    subtitle,
    cheats
  }
}
