const keys = {
  alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
}

export default {
  bindEvents(state, actions) {
    document.addEventListener('keypress', event => {
      if (keys.alphabet.includes(event.key)) {
        if (state.search.length > 0) return
        actions.search(event.key)
      }
    })

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        actions.search('')
      }
    })
  }
}
