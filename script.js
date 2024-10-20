document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-btn');
    exploreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('destinations').offsetTop - 60,
            behavior: 'smooth'
        });
    });

   
    const map = L.map('map').setView([20, 0], 2); 

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    
    const destinations = [
        { name: 'Paris, France', coords: [48.8566, 2.3522] },
        { name: 'Bali, Indonesia', coords: [-8.3405, 115.0920] },
        { name: 'Tokyo, Japan', coords: [35.6762, 139.6503] }
    ];

    destinations.forEach(destination => {
        L.marker(destination.coords).addTo(map)
            .bindPopup(`<b>${destination.name}</b>`)
            .openPopup();
    });
});
