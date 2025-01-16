import L from 'leaflet';

if (typeof window !== 'undefined') {
  // Ensure the map is initialized only in the browser
  const map = L.map('map').setView([37.7749, -122.4194], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([37.7749, -122.4194])
    .addTo(map)
    .bindPopup('San Francisco')
    .openPopup();
}
