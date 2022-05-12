const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.background = 'none'
}
function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptada
}
function btnDesencriptar() {
  const textoDecriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDecriptado
  mensagem.style.background = 'none'
}
function desencriptar(stringEncriptada) {
  let matrizCodigo = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptada
}
function myFunction() {
  var copyText = document.getElementById('myInput')
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value)
  alert('Texto Copiado!')
  limpaResultado()
}
function limpaResultado() {
  mensagem.value = ''
}
