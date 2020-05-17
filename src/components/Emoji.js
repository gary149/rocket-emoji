import { h } from 'hyperapp'
import clipboard from '../modules/clipboard'
import picostyle, { keyframes } from 'picostyle'
const style = picostyle(h)

const StyledEmoji = style('button')(props => ({
  transition: 'text-shadow .2s ease-in',
  textShadow: 'rgba(12, 8, 9, 0) 1px 1px -2px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 0 0 inset',
  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px -1px 2px 0px inset',
    textShadow: 'rgba(12, 8, 9, 0.53) 1px 1px 2px'
  },
  '.active': {
    animation: `${keyframes({
      from: { background: '#ffffff' },
      to: { background: '#353535' }
    })} .2s 2 ease-in`
  }
}))

const toggleBlinkAnimation = target => {
  target.classList.add('active')
  target.addEventListener('animationend', function removeAnimation() {
    target.classList.remove('active')
    target.removeEventListener('animationend', removeAnimation)
  })
}

const handleClick = ({ target }) => {
  clipboard.copy(target.textContent)
  toggleBlinkAnimation(target)
}

export default ({ emoji }) => (
  <StyledEmoji
    onclick={handleClick}
    class="w-12 h-12 inline-block text-4xl relative rounded text-center hover:bg-grey-lighter"
    title={emoji.title}
  >
    {emoji.symbol}
  </StyledEmoji>
)
