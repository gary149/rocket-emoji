import { h } from 'hyperapp'
import picostyle from 'picostyle'
const style = picostyle(h)

const resolveDrag = (e, cb) => {
  const offset = { x: e.offsetX, y: e.offsetY }
  document.addEventListener('mousemove', function drag(e) {
    if (e.buttons !== 1) {
      document.removeEventListener('mousemove', drag)
      return
    }
    cb({ x: e.clientX - offset.x, y: e.clientY - offset.y })
    document.addEventListener('mouseup', function drop() {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', drop)
    })
  })
}

const StyledSearch = style('input')(props => ({
  transform: props.x ? '' : 'translate3d(-50%, -50%, 0)',
  left: props.x ? `${props.x}px` : '50%',
  top: props.y ? `${props.y}px` : '50%'
}))

export default ({ value, pos, oninput, ondrag }) => (
  <StyledSearch
    type="text"
    value={value}
    x={pos.x}
    y={pos.y}
    oncreate={$el => $el.focus()}
    oninput={e => oninput(e.target.value)}
    onmousedown={e => resolveDrag(e, ondrag)}
    class="fixed bg-black p-4 text-2xl z-10 rounded text-white shadow"
  />
)
