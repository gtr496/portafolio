const nombreCache ="PWAIDGS10A"
const archivosCache =[
    "/",
    "/index.html",
    "/css/styles.css",
    "/css/styles1.css",
    "/js/app.js",
    "/js/scroll.js",
    "/img/perfil.jpg",
    "/img/img1.jpg",
    "/img/programer1.jpg",
    "/img/tecnico.jpg",
    "/img/soporte-tecnico-integral.jpg"

]

self.addEventListener('install', e =>{
    console.log('el service worker se instalo', e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada")
            cache.addAll(archivosCache)
        })
    )
})

self.addEventListener('activate',e=>{
    console.log('els service worker esta activo',e)
})

self.addEventListener('fetch',e=>{
    console.log('fetch..',e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache=>{
            return respuestaCache
        })
    )
})