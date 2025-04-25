const photoUrls = [
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF1935.jpg?v=1725469686221",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF1944.jpg?v=1725469686982",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF1951.jpg?v=1725469687808",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF1961.jpg?v=1725469688984",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF1981.jpg?v=1725469689681",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2021.jpg?v=1725469690326",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2022.jpg?v=1725469690963",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2023.jpg?v=1725469691682",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2024.jpg?v=1725469692253",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2037.jpg?v=1725469692909",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2042.jpg?v=1725469693835",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2045.jpg?v=1725469694634",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2051.jpg?v=1725469695307",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2057.jpg?v=1725469696053",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2077.jpg?v=1725469696828",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2080.jpg?v=1725469697517",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2084.jpg?v=1725469698166",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2096.jpg?v=1725469699090",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2097.jpg?v=1725469699725",
  "https://cdn.glitch.global/d6da9e36-e150-4a04-8aac-2a224dc24a8d/DSCF2104.jpg?v=1725469700454"
  // Add more photo URLs as needed
];

const gallery = document.querySelector('.gallery');

photoUrls.forEach(url => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = url;
    item.appendChild(img);
    gallery.appendChild(item);
});

new Masonry(gallery, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true
});