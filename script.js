const linguagem = document.querySelector('linguagem')
const areaDoCodigo = document.querySelector('.editor__codigo')
const botao = document = document.querySelector('.visualizador__highlight')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code spellcheck="false" contenteditable="true" class="codigo hljs" aria-label="editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})