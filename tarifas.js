function prepararTarifas() {
  const grid = document.querySelector('.price-grid');
  if (!grid || document.querySelector('#tariff-filter')) return;

  const controls = document.createElement('div');
  controls.className = 'tariff-controls';
  controls.innerHTML = `
    <label for="tariff-filter">Ver tarifas por área</label>
    <select id="tariff-filter">
      <option value="todas">Todas las áreas</option>
      <option value="musica">Música y producción</option>
      <option value="web">Desarrollo web</option>
      <option value="grabacion">Grabación</option>
      <option value="consultoria">Consultoría</option>
    </select>`;
  controls.style.cssText = 'display:flex;align-items:center;gap:18px;margin:0 0 24px;color:var(--muted);font:11px "DM Mono",monospace;';
  grid.parentNode.insertBefore(controls, grid);

  const cards = [...grid.querySelectorAll('.price-card')];
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.dataset.category = title.includes('sesión') ? 'grabacion' : title.includes('consulta') ? 'consultoria' : 'musica';
  });

  const webCard = document.createElement('article');
  webCard.className = 'price-card';
  webCard.dataset.category = 'web';
  webCard.innerHTML = '<span class="service-number">05 / Digital</span><h3>Desarrollo web</h3><p>Web para artistas, portfolio, lanzamiento o estudio. Diseñamos la experiencia alrededor de tu proyecto.</p><div class="price">A consultar</div><a class="button button-ghost" href="#contacto">Solicitar presupuesto <span>↗</span></a>';
  grid.append(webCard);

  controls.querySelector('select').addEventListener('change', event => {
    cards.concat(webCard).forEach(card => {
      card.style.display = event.target.value === 'todas' || card.dataset.category === event.target.value ? '' : 'none';
    });
  });
}

const tarifasObserver = new MutationObserver(prepararTarifas);
tarifasObserver.observe(document.querySelector('#app'), { childList: true });
prepararTarifas();
