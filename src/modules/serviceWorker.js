export default {
  register() {
    if (process.env.NODE_ENV !== 'production') return
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swPath = `service-worker.js`
        navigator.serviceWorker.register(swPath).then(
          registration => {
            console.log(
              'ServiceWorker registration successful with scope: ',
              registration.scope
            )
          },
          err => {
            console.log('ServiceWorker registration failed: ', err)
          }
        )
      })
    }
  }
}
