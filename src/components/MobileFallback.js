import { h } from 'hyperapp'

export default () => (
  <div class="container mx-auto p-8">
    <p class="mb-3 px-2 font-bold">
      🚀 Rocket Emoji is a desktop website. Please connect from your desktop to
      use it.
    </p>
    <p class="mb-4 px-2">
      It is the fastest way to find and copy an emoji to your clipboard!
    </p>
    <video autoplay playsinline muted class="w-full">
      <source
        src="https://res.cloudinary.com/picturesbase/video/upload/v1549280289/rocketemoji_drivfk.mp4"
        type="video/mp4"
      />
    </video>
  </div>
)
