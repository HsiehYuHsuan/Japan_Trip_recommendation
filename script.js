const replyText = `謝謝你提供東京旅行的推薦！\n\n1. 最近推薦的景點：\n2. 推薦的餐廳／咖啡店：\n3. 值得購買的伴手禮：\n4. 建議調整的行程：\n5. 其他建議：`;

document.querySelectorAll('.pocket-group').forEach((group) => {
  const isGift = group.querySelector('h3')?.textContent.includes('伴手禮');
  group.querySelectorAll('.pocket-card').forEach((card, index) => {
    const name = card.querySelector('h4').textContent.trim();
    const area = card.querySelector('.area').textContent.trim();
    const check = document.createElement('label');
    check.className = 'pocket-check';
    check.innerHTML = `<input type="checkbox" value="${area}｜${name}" data-kind="${isGift ? 'gift' : 'food'}"><span>推薦 ${name}</span>`;
    card.prepend(check);
  });
});

document.querySelector('#addSelections').addEventListener('click', () => {
  const selected = [...document.querySelectorAll('.pocket-check input:checked')];
  const status = document.querySelector('#selectionStatus');
  if (!selected.length) {
    status.textContent = '請先勾選至少一個想推薦的項目。';
    return;
  }
  const food = selected.filter((item) => item.dataset.kind === 'food').map((item) => `推薦：${item.value}`);
  const gifts = selected.filter((item) => item.dataset.kind === 'gift').map((item) => `推薦：${item.value}`);
  const foodField = recommendationForm.querySelector('[name="entry.321660944"]');
  const giftField = recommendationForm.querySelector('[name="entry.1749250682"]');
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
  document.querySelectorAll('.pocket-check input').forEach((item) => { item.checked = false; });
  const button = recommendationForm.querySelector('button[type="submit"]');
  button.disabled = false;
  formStatus.textContent = '謝謝！我們已經收到你的推薦。';
});
