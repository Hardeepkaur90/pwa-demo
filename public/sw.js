let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/static/js/main.chunk.js",
                "index.html",
                "/",
                "/users"
            ]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        );
    }
});
