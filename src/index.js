import './style.css'
import state from './state'
import actions from './actions'
import emojis from './emoji.json'
import { h, app } from 'hyperapp'
import { device, keyboard, storage, serviceWorker } from './modules'
import { Emoji, Search, Menu, MobileFallback } from './components'

serviceWorker.register()

const filteredEmojis = search =>
  search.length
    ? emojis.filter(
        emoji =>
          emoji.keywords.filter(keyword => keyword.includes(search)).length > 0
      )
    : emojis

const view = (state, actions) =>
  device.isMobile() ? (
    <MobileFallback />
  ) : (
    <div created={keyboard.bindEvents(state, actions)}>
      {state.search.length > 0 && (
        <Search
          value={state.search}
          pos={state.searchInputPos}
          oninput={actions.search}
          ondrag={actions.setInputSearchPos}
        />
      )}

      <Menu ontoggle={actions.toggleMenu} active={state.menu} />

      <div class="mx-auto text-center my-8" style={{ maxWidth: '600px' }}>
        {filteredEmojis(state.search).map(emoji => (
          <Emoji key={emoji.symbol} emoji={emoji} />
        ))}
      </div>
    </div>
  )

app(
  { ...state, menu: storage.getMenuState(state.menu) },
  actions,
  view,
  document.body
)
