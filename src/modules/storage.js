export default {
  saveMenuState(active) {
    localStorage.setItem('menu', JSON.stringify(active))
  },

  getMenuState(defaultState = true) {
    return localStorage.getItem('menu')
      ? JSON.parse(localStorage.getItem('menu'))
      : defaultState
  }
}
