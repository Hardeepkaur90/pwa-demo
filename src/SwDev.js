export default function swDev()
{
  function determineAppServerKey() {
    const vapidPublicKey =
    "BIN7QuqSgmcrrxlNm--km0MaJkPwX5XwTLNIySHGjfgKiNKZIaIebrBurPm0bXuLXWPNRzMNGcaAsyfHoxFJWwM";
      return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  
    let swUrl=  `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((registration)=>{
        console.warn("registration",registration)

        return registration.pushManager.getSubscription()
        .then(function (subscription) {
           registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
          })
          

        })

    }) 
}