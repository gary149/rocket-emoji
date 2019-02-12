export default {
  copy(text) {
    const element = document.createElement('textarea')
    element.value = text
    element.style.position = 'fixed'
    document.body.appendChild(element)
    element.focus({ preventScroll: true })
    element.setSelectionRange(0, element.value.length)
    document.execCommand('copy')
    document.body.removeChild(element)
  }
}
