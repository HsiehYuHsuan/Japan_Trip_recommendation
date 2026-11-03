const replyText = `謝謝你提供東京旅行的推薦！\n\n1. 最近推薦的景點：\n2. 推薦的餐廳／咖啡店：\n3. 值得購買的伴手禮：\n4. 建議調整的行程：\n5. 其他建議：`;

const pocketGrid = document.querySelector('#pocketGrid');
const pocketSearch = document.querySelector('#pocketSearch');
const categoryFilter = document.querySelector('#categoryFilter');
const areaFilter = document.querySelector('#areaFilter');
const pocketCount = document.querySelector('#pocketCount');
const selectedCount = document.querySelector('#selectedCount');
const selectedPlaces = new Map();
let pocketPlaces = [];

const escapeHtml = (value = '') => String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
const placeKind = (category) => (category === '景點' || category === '市集') ? 'spot' : (category === '伴手禮' || category === '購物') ? 'gift' : 'food';

function updateSelectedCount() {
  selectedCount.textContent = `已勾選 ${selectedPlaces.size} 個`;
}

function renderPocketList() {
  const term = pocketSearch.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const area = areaFilter.value;
  const filtered = pocketPlaces.filter((place) => {
    const searchable = `${place.n} ${place.c} ${place.t || ''} ${place.a || ''} ${place.note || ''}`.toLowerCase();
    return (!term || searchable.includes(term)) && (category === 'all' || place.c === category) && (area === 'all' || place.a === area);
  });
  pocketCount.textContent = `顯示 ${filtered.length}／${pocketPlaces.length} 筆收藏`;
  if (!filtered.length) {
    pocketGrid.innerHTML = '<p class="empty-result">找不到符合條件的項目，請換一個關鍵字或篩選方式。</p>';
    return;
  }
  pocketGrid.innerHTML = filtered.map((place) => {
    const id = `${place.c}::${place.a}::${place.n}`;
    const checked = selectedPlaces.has(id) ? ' checked' : '';
    const mapLink = place.m?.startsWith('https://www.google.com/maps/') ? `<a href="${escapeHtml(place.m)}" target="_blank" rel="noopener">地圖 ↗</a>` : '';
    const detail = [place.t, place.note].filter(Boolean).join('・');
    return `<article class="pocket-card"><label class="pocket-check"><input type="checkbox" data-id="${escapeHtml(id)}"${checked}><span>推薦 ${escapeHtml(place.n)}</span></label><div><div class="tags"><span class="category">${escapeHtml(place.c)}</span><span class="area">${escapeHtml(place.a || '東京')}</span></div><h4>${escapeHtml(place.n)}</h4><p title="${escapeHtml(detail)}">${escapeHtml(detail || '收藏候選')}</p></div>${mapLink}</article>`;
  }).join('');
  pocketGrid.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener('change', () => {
      const place = pocketPlaces.find((item) => `${item.c}::${item.a}::${item.n}` === input.dataset.id);
      if (input.checked) selectedPlaces.set(input.dataset.id, place);
      else selectedPlaces.delete(input.dataset.id);
      updateSelectedCount();
    });
  });
}

[pocketSearch, categoryFilter, areaFilter].forEach((control) => control.addEventListener(control === pocketSearch ? 'input' : 'change', renderPocketList));

fetch('./tokyo-pocket-list.json?v=market-list-20261103')
  .then((response) => response.json())
  .then((places) => {
    pocketPlaces = places;
    [...new Set(places.map((place) => place.a).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-Hant')).forEach((area) => {
      areaFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(area)}">${escapeHtml(area)}</option>`);
    });
    renderPocketList();
  })
  .catch(() => {
    pocketCount.textContent = '口袋名單載入失敗，請重新整理頁面。';
    pocketGrid.innerHTML = '<p class="empty-result">目前無法載入收藏資料。</p>';
  });

document.querySelector('#addSelections').addEventListener('click', () => {
  const selected = [...selectedPlaces.values()];
  const status = document.querySelector('#selectionStatus');
  if (!selected.length) {
    status.textContent = '請先勾選至少一個想推薦的項目。';
    return;
  }
  const spots = selected.filter((item) => placeKind(item.c) === 'spot').map((item) => `推薦：${item.a}｜${item.n}`);
  const food = selected.filter((item) => placeKind(item.c) === 'food').map((item) => `推薦：${item.a}｜${item.n}`);
  const gifts = selected.filter((item) => placeKind(item.c) === 'gift').map((item) => `推薦：${item.a}｜${item.n}`);
  const spotField = recommendationForm.querySelector('[name="entry.131475043"]');
  const foodField = recommendationForm.querySelector('[name="entry.321660944"]');
  const giftField = recommendationForm.querySelector('[name="entry.1749250682"]');
  if (spots.length) spotField.value = [spotField.value.trim(), ...spots].filter(Boolean).join('\n');
  if (food.length) foodField.value = [foodField.value.trim(), ...food].filter(Boolean).join('\n');
  if (gifts.length) giftField.value = [giftField.value.trim(), ...gifts].filter(Boolean).join('\n');
  status.textContent = `已把 ${selected.length} 個勾選項目加入下方回覆。`;
  document.querySelector('#feedback').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#copyButton').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');
  try {
    await navigator.clipboard.writeText(replyText);
    status.textContent = '已複製，可以直接貼到 LINE 或其他訊息中。';
  } catch {
    status.textContent = '無法自動複製，請直接將頁面中的問題貼到訊息中。';
  }
});

const recommendationForm = document.querySelector('#recommendationForm');
const googleFormTarget = document.querySelector('#googleFormTarget');
const formStatus = document.querySelector('#formStatus');
let formSubmitted = false;

recommendationForm.addEventListener('submit', () => {
  formSubmitted = true;
  const button = recommendationForm.querySelector('button[type="submit"]');
  button.disabled = true;
  formStatus.textContent = '正在送出你的推薦…';
});

googleFormTarget.addEventListener('load', () => {
  if (!formSubmitted) return;
  formSubmitted = false;
  recommendationForm.reset();
  selectedPlaces.clear();
  renderPocketList();
  updateSelectedCount();
  const button = recommendationForm.querySelector('button[type="submit"]');
  button.disabled = false;
  formStatus.textContent = '謝謝！我們已經收到你的推薦。';
});
