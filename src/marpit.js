// const Marpit = require('@marp-team/marpit').Marpit
const Marp = require('@marp-team/marp-core').Marp

// console.log(Marpit)

// const marpit = new Marpit()

// Convert Markdown slide deck into HTML and CSS
const marp = new Marp()

module.exports = function(content, map, meta) {
    console.log(content)
    // const { html, css } = marpit.render(content)
    const { html, css } = marp.render(content)
    // return `<style>${css}</style>${html}`;
    // return "test<style>" + css + "</style><h3>test</h3>" + html
    console.log(html)
    return html
};





