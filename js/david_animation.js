var animation = bodymovin.loadAnimation({
  container: document.getElementById('svgContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './json/david.json',
})