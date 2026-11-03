const replyText = `謝謝你提供東京旅行的推薦！\n\n1. 最近推薦的景點：\n2. 推薦的餐廳／咖啡店：\n3. 值得購買的伴手禮：\n4. 建議調整的行程：\n5. 其他建議：`;

document.querySelector('#copyButton').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');
  try {
    await navigator.clipboard.writeText(replyText);
    status.textContent = '已複製，可以直接貼到 LINE 或其他訊息中。';
  } catch {
    status.textContent = '無法自動複製，請直接將頁面中的問題貼到訊息中。';
  }
});
