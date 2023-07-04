

export default function SwDev() {
 
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker
      .register(swUrl)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error registering service worker:", error);
      });


}
