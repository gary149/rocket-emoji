export default {
  search: text => state => ({
    search: text
  }),

  setInputSearchPos: ({ x, y }) => state => ({
    searchInputPos: {x, y}
  }),

  toggleMenu: () => state => ({
    menu: !state.menu
  })
}
