import { h } from 'hyperapp'
import { storage } from '../modules'

export default ({ active, ontoggle }) => (
  <div
    class="absolute pin-r mr-8 mt-2 hidden lg:block"
    onupdate={_ => storage.saveMenuState(active)}
  >
    <div
      onclick={ontoggle}
      class={`h-1 w-3 hover:bg-indigo-light ${
        active ? 'bg-indigo' : 'bg-grey-dark'
      } rounded-full mb-2 ml-auto cursor-pointer select-none`}
    />
    {active && (
      <div class="text-grey-dark text-right text-xs leading-tight">
        <p class="mb-1 text-grey-darkest mt-3">New</p>
        <p class="mb-3">Country flags are now available!</p>
        <p class="mb-1 text-grey-darkest">Help</p>
        <p>Start typing ⌨ to search an emoji</p>
        <p>Click emoji to copy to clipboard</p>
        <p class="mb-3">Press ESC to hide search</p>
        <p class="mb-1 text-grey-darkest">Others</p>
        <a href="https://github.com/gary149/rocket-emoji">
          🐙<span class="underline">Source code</span>
        </a>
        <a href="https://github.com/gary149/rocket-emoji/issues">
          🐞<span class="underline">Bug report</span>
        </a>
        <a href="https://twitter.com/victormustar">
          🐦<span class="underline">Twitter</span>
        </a>
      </div>
    )}
  </div>
)
