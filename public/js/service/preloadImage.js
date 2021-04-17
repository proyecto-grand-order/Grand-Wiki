var preloadImages = function preloadImages(urls, callback) {
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;
    var callback = callback

    function preloadImage(url, anImageLoadedCallback) {
        try {
            var img = new Image();
            img.onload = anImageLoadedCallback;
            img.src = url;
        } catch(err) {
            console.log('error', err)
        }
    }

    urls.forEach(function(url) {
        preloadImage(url, function() {
            loadedCounter++;
            console.log('[Preload] Images: ' + loadedCounter);
            if (loadedCounter == toBeLoadedNumber) {
                callback()
            }
        });
    });
}

console.log('[Modulo] Preload de imagenes cargado!')