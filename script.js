const replyText = `東京旅行のおすすめを教えてくれて、ありがとう！\n\n1. 最近おすすめの場所：\n2. おすすめのレストラン／カフェ：\n3. 買ったほうがいいお土産：\n4. この予定で変えたほうがいいところ：\n5. その他のアドバイス：`;

document.querySelector('#copyButton').addEventListener('click', async () => {
  const status = document.querySelector('#copyStatus');
  try {
    await navigator.clipboard.writeText(replyText);
    status.textContent = 'コピーしました。LINEやメッセージに貼り付けてください。';
  } catch {
    status.textContent = 'コピーできませんでした。ページの質問をそのままメッセージで送ってください。';
  }
});
