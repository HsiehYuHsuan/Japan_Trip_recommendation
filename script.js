const ja = new URLSearchParams(location.search).get('lang') === 'ja';
document.documentElement.lang = ja ? 'ja' : 'zh-Hant';
document.body.classList.toggle('lang-ja', ja);

const J = {
  '.language-label':'言語','.privacy':'公開用ページ・個人情報や予約情報は含まれていません',
  '.hero h1':'私たちの東京旅行に<br>おすすめを教えてください。',
  '.intro':'台湾から二人で東京を訪れます。定番の観光地だけでなく、東京の方が本当に好きなレストランやカフェ、最近話題の新スポットも知りたいです。',
  '.hero nav a:nth-child(1)':'日程','.hero nav a:nth-child(2)':'食べたいもの','.hero nav a:nth-child(3)':'お土産','.hero nav a:nth-child(4)':'マーケット','.hero nav a:nth-child(5)':'候補リスト','.hero nav a:nth-child(6)':'教えてほしいこと','.hero nav a:nth-child(7)':'ここから回答',
  '.note p':'<strong>私たちの旅のスタイル</strong> 朝は早起きできますが、午後はカフェや休憩の時間を取りたいです。予定を詰め込みすぎず、同じエリアをゆっくり歩いて楽しみたいと思っています。',
  '#schedule .section-title h2':'東京での予定','#schedule .section-title p':'現在考えているエリアと、皆さんに伺いたいこと',
  '.day:nth-child(1) .date span':'木曜日','.day:nth-child(1) h3':'東京へ戻る日','.day:nth-child(1) p':'夕方に東京へ戻ります。六本木へ行くか、東京の東側でゆっくり休むか検討中です。','.day:nth-child(1) .ask':'質問：この日は無理をせず休むほうがよいでしょうか？',
  '.day:nth-child(2) .date span':'金曜日','.day:nth-child(2) h3':'築地・銀座・東京駅・丸の内','.day:nth-child(2) p':'築地で朝食をとり、銀座で買い物をしたあと、東京駅と丸の内を散策します。周辺の新しいスポットや夕食のお店も知りたいです。','.day:nth-child(2) .ask':'候補：TOFROM YAESU',
  '.day:nth-child(3) .date span':'土曜日','.day:nth-child(3) h3':'明治神宮・原宿・渋谷','.day:nth-child(3) p':'朝は明治神宮へ行き、午後は原宿と渋谷を歩きます。混雑を避けやすい回り方と、ゆっくり休めるカフェを探しています。','.day:nth-child(3) .ask':'質問：SHIBUYA SKYは行く価値がありますか？',
  '.day:nth-child(4) .date span':'日曜日','.day:nth-child(4) h3':'浅草・上野','.day:nth-child(4) p':'早朝に浅草寺へ行き、その後は上野方面へ散策します。下町らしい飲食店、レトロ喫茶、散歩コースを知りたいです。','.day:nth-child(4) .ask':'質問：日曜日でもゆっくり過ごせる場所はありますか？',
  '.day:nth-child(5) .date span':'月曜日','.day:nth-child(5) h3':'東京スカイツリー・池袋','.day:nth-child(5) p':'昼は東京スカイツリー周辺、午後は池袋でアニメや漫画のお店を巡る予定です。','.day:nth-child(5) .ask':'質問：今の池袋で特に面白く、おすすめの場所はどこですか？',
  '#food .section-title h2':'食べたいもの','#food .section-title p':'本当においしく、また行きたくなるお店を探しています',
  '.cards article:nth-child(1) b':'寿司・海鮮','.cards article:nth-child(1) p':'築地で朝食を食べたいです。観光客向けすぎず、朝でも入りやすいお店が希望です。',
  '.cards article:nth-child(2) b':'焼肉・すき焼き','.cards article:nth-child(2) p':'景色より味を重視しています。事前予約がおすすめのお店も知りたいです。',
  '.cards article:nth-child(3) b':'ラーメン・町中華','.cards article:nth-child(3) p':'行列だけで有名なお店より、地元で長く愛されているお店に行きたいです。',
  '.cards article:nth-child(4) b':'レトロ喫茶・コーヒー','.cards article:nth-child(4) p':'固めのプリン、ハンドドリップのコーヒー、静かに休めるお店が好きです。',
  '.cards article:nth-child(5) b':'和菓子・スイーツ','.cards article:nth-child(5) p':'栗、抹茶、あんこが好きです。11月限定の季節のスイーツにも興味があります。',
  '.cards article:nth-child(6) b':'居酒屋','.cards article:nth-child(6) p':'二人でも入りやすく、料理がおいしいお店が希望です。禁煙ならさらにうれしいです。',
  '#souvenir .section-title h2':'お土産','#souvenir .section-title p':'台湾へ持ち帰りやすい東京のおすすめ',
  '.souvenir-grid div:nth-child(1) h3':'家族へ','.souvenir-grid div:nth-child(1) p':'常温保存できる上質なもの。和菓子、フルーツ菓子、だし、調味料など。',
  '.souvenir-grid div:nth-child(2) h3':'友人・職場へ','.souvenir-grid div:nth-child(2) p':'個包装で配りやすい東京限定品。甘すぎないお菓子も喜ばれます。',
  '.souvenir-grid div:nth-child(3) h3':'自分用','.souvenir-grid div:nth-child(3) p':'コーヒー豆、器、文房具、アニメグッズ、スーパーで買える日用品。',
  '#markets .section-title h2':'行きたいマーケット','#markets .section-title p':'その日の予定と組み合わせやすい東京のマーケット',
  '.market-grid article:nth-child(1) .market-date':'11/13・金曜日','.market-grid article:nth-child(1) .market-area':'築地・海鮮と食品の市場','.market-grid article:nth-child(1) p:not(.market-area)':'築地での朝食として予定に入れています。朝に訪れてから銀座と東京駅へ向かう予定です。',
  '.market-grid article:nth-child(2) .market-date':'11/14 または 11/15・週末','.market-grid article:nth-child(2) .market-area':'青山・農産物、食品、クラフト','.market-grid article:nth-child(2) p:not(.market-area)':'毎週土・日曜日の10:00〜16:00。表参道、原宿、渋谷から近く、時間に合わせて立ち寄れます。',
  '.market-grid article:nth-child(3) .market-date':'11/15・日曜日','.market-grid article:nth-child(3) h3':'アメ横','.market-grid article:nth-child(3) .market-area':'上野・食品、お菓子、食べ歩き','.market-grid article:nth-child(3) p:not(.market-area)':'浅草・上野の日程に近いため、午後の散策とあわせて食品やローカルフードを探したいです。',
  '.market-grid a':'地図を見る ↗','.market-note':'大江戸骨董市も調べましたが、2026年11月の開催日は11/7と11/23で、東京滞在日と重ならないため今回は候補から外しています。',
  '#pocket-list .section-title h2':'候補リスト','#pocket-list .section-title p':'旅行計画に保存している95件から、おすすめを選んでください','.pocket-intro p':'私たちが事前に保存した候補です。行ったことがある店、好きな場所、おすすめしたい項目にチェックを入れてください。',
  '.pocket-toolbar > label:nth-child(1) span':'検索','.pocket-toolbar > label:nth-child(2) span':'カテゴリー','.pocket-toolbar > label:nth-child(3) span':'エリア','#addSelections':'選んだ項目を回答欄へ追加','#selectionStatus':'検索や絞り込みを使って、複数の項目を選べます。',
  '#questions .section-title h2':'教えてほしいこと','#questions .section-title p':'一つだけの回答でも、とても参考になります',
  '.questions li:nth-child(1)':'最近の東京で、本当に話題になっているおすすめの新スポットはありますか？','.questions li:nth-child(2)':'この日程の中で、行かなくてもよいと思う場所はありますか？','.questions li:nth-child(3)':'各エリアで、地元の方がよく行くレストランやカフェはありますか？','.questions li:nth-child(4)':'事前予約がおすすめのお店や、混雑を避けるコツはありますか？','.questions li:nth-child(5)':'台湾へ持ち帰るのにおすすめの東京土産はありますか？','#copyButton':'回答用テンプレートをコピー',
  '#feedback .section-title h2':'おすすめを直接送る','#feedback .section-title p':'回答は私たちのGoogleフォームへ直接届きます',
  '.form-field:nth-child(1) span':'最近の東京で、本当に話題になっているおすすめの新スポットはありますか？','.form-field:nth-child(2) span':'この日程の中で、行かなくてもよいと思う場所はありますか？','.form-field:nth-child(3) span':'各エリアで、地元の方がよく行くレストランやカフェはありますか？','.form-field:nth-child(4) span':'事前予約がおすすめのお店や、混雑を避けるコツはありますか？','.form-field:nth-child(5) span':'台湾へ持ち帰るのにおすすめの東京土産はありますか？',
  '.form-actions button':'おすすめを送信','#formStatus':'すべての質問に答えなくても大丈夫です。','.form-note':'ログインは不要で、メールアドレスも収集しません。回答はGoogleフォームに保存されます。送信できない場合は、<a href="https://docs.google.com/forms/d/e/1FAIpQLSc0QR7cX4DqbK_vz3-PjG1rCjvfWZ_W_pMgeYqj8zC2_0rqZw/viewform" target="_blank" rel="noopener">予備のフォームを開いてください</a>。',
  '.volleyball-kicker':'ナイスレシーブ！','.volleyball-thanks h2':'THANK YOU.','.volleyball-message':'皆さんのアドバイスのおかげで、東京旅行がもっと素敵なものになりそうです。',
  'footer p':'このページには氏名、宿泊先、予約番号、座席、支払い情報は掲載していません。'
};
if(ja){
  document.title='東京旅行のおすすめを教えてください';
  document.querySelector('meta[name="description"]').content='台湾から東京を訪れる二人の旅行者です。おすすめの観光スポット、グルメ、お土産を教えてください。';
  Object.entries(J).forEach(([s,v])=>document.querySelectorAll(s).forEach(e=>e.innerHTML=v));
}
document.querySelectorAll('.language-switch a').forEach(a=>{const on=a.classList.contains(ja?'lang-ja':'lang-zh');a.classList.toggle('is-active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});

const catJa={'餐廳':'レストラン','甜點咖啡':'スイーツ・カフェ','伴手禮':'お土産','購物':'ショッピング','市集':'マーケット','景點':'観光スポット'};
const areaJa={'東京站':'東京駅','東京站・丸之內':'東京駅・丸の内','澀谷':'渋谷','澀谷・青山':'渋谷・青山','澀谷・宮下公園':'渋谷・宮下公園','澀谷・道玄坂':'渋谷・道玄坂','淺草':'浅草','淺草・藏前':'浅草・蔵前','巢鴨':'巣鴨','惠比壽':'恵比寿','代官山・惠比壽':'代官山・恵比寿','代代木八幡・富谷':'代々木八幡・富ヶ谷','虎之門':'虎ノ門','表參道':'表参道','青山・表參道':'青山・表参道'};
const tc=v=>ja?(catJa[v]||v):v, ta=v=>ja?(areaJa[v]||v||'東京'):(v||'東京');
const U=ja?{selected:n=>`${n}件選択中`,count:(a,b)=>`${b}件中 ${a}件を表示`,empty:'条件に合う項目がありません。',map:'地図 ↗',rec:'おすすめ',candidate:'候補として保存',fail:'候補リストを読み込めませんでした。',none:'現在、保存データを読み込めません。',choose:'おすすめしたい項目を一つ以上選んでください。',added:n=>`${n}件を下の回答欄へ追加しました。`,prefix:'おすすめ',copied:'コピーしました。LINEなどに貼り付けられます。',copyFail:'自動でコピーできませんでした。',sending:'送信中です…',thanks:'ありがとうございます！おすすめを受け取りました。'}:{selected:n=>`已勾選 ${n} 個`,count:(a,b)=>`顯示 ${a}／${b} 筆收藏`,empty:'找不到符合條件的項目，請換一個關鍵字或篩選方式。',map:'地圖 ↗',rec:'推薦',candidate:'收藏候選',fail:'口袋名單載入失敗，請重新整理頁面。',none:'目前無法載入收藏資料。',choose:'請先勾選至少一個想推薦的項目。',added:n=>`已把 ${n} 個勾選項目加入下方回覆。`,prefix:'推薦',copied:'已複製，可以直接貼到 LINE 或其他訊息中。',copyFail:'無法自動複製。',sending:'正在送出你的推薦…',thanks:'謝謝！我們已經收到你的推薦。'};
const replyText=ja?'東京旅行のおすすめを教えてください！\n\n1. 最近おすすめのスポット：\n2. おすすめのレストラン／カフェ：\n3. おすすめのお土産：\n4. 日程についてのアドバイス：\n5. その他：':'謝謝你提供東京旅行的推薦！\n\n1. 最近推薦的景點：\n2. 推薦的餐廳／咖啡店：\n3. 值得購買的伴手禮：\n4. 建議調整的行程：\n5. 其他建議：';
const grid=document.querySelector('#pocketGrid'),search=document.querySelector('#pocketSearch'),cat=document.querySelector('#categoryFilter'),area=document.querySelector('#areaFilter'),count=document.querySelector('#pocketCount'),selectedCount=document.querySelector('#selectedCount'),selected=new Map();let places=[];
if(ja){search.placeholder='店名、料理、エリア…';cat.innerHTML='<option value="all">すべて</option>'+Object.entries(catJa).map(([v,t])=>`<option value="${v}">${t}</option>`).join('');area.innerHTML='<option value="all">すべてのエリア</option>';document.querySelectorAll('.form-field textarea').forEach((e,i)=>e.placeholder=['おすすめのスポットと理由…','よりよい回り方があれば教えてください…','店名、エリア、好きなメニューなど…','予約方法や混雑を避ける方法…','食品、雑貨、文房具など…'][i])}
const esc=(v='')=>String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),kind=c=>(c==='景點'||c==='市集')?'spot':(c==='伴手禮'||c==='購物')?'gift':'food';
function update(){selectedCount.textContent=U.selected(selected.size)}
update();
function render(){const term=search.value.trim().toLowerCase(),filtered=places.filter(p=>`${p.n} ${p.c} ${p.t||''} ${p.a||''} ${p.note||''}`.toLowerCase().includes(term)&&(cat.value==='all'||p.c===cat.value)&&(area.value==='all'||p.a===area.value));count.textContent=U.count(filtered.length,places.length);if(!filtered.length){grid.innerHTML=`<p class="empty-result">${U.empty}</p>`;return}grid.innerHTML=filtered.map(p=>{const id=`${p.c}::${p.a}::${p.n}`,detail=ja?`${ta(p.a)}・${tc(p.c)}`:[p.t,p.note].filter(Boolean).join('・'),map=p.m?.startsWith('https://www.google.com/maps/')?`<a href="${esc(p.m)}" target="_blank" rel="noopener">${U.map}</a>`:'';return `<article class="pocket-card"><label class="pocket-check"><input type="checkbox" data-id="${esc(id)}"${selected.has(id)?' checked':''}><span>${U.rec} ${esc(p.n)}</span></label><div><div class="tags"><span class="category">${esc(tc(p.c))}</span><span class="area">${esc(ta(p.a))}</span></div><h4>${esc(p.n)}</h4><p>${esc(detail||U.candidate)}</p></div>${map}</article>`}).join('');grid.querySelectorAll('input').forEach(i=>i.addEventListener('change',()=>{const p=places.find(x=>`${x.c}::${x.a}::${x.n}`===i.dataset.id);i.checked?selected.set(i.dataset.id,p):selected.delete(i.dataset.id);update()}))}
[search,cat,area].forEach(e=>e.addEventListener(e===search?'input':'change',render));
fetch('./tokyo-pocket-list.json?v=market-list-20261103').then(r=>r.json()).then(x=>{places=x;[...new Set(x.map(p=>p.a).filter(Boolean))].sort((a,b)=>a.localeCompare(b,ja?'ja':'zh-Hant')).forEach(a=>area.insertAdjacentHTML('beforeend',`<option value="${esc(a)}">${esc(ta(a))}</option>`));render()}).catch(()=>{count.textContent=U.fail;grid.innerHTML=`<p class="empty-result">${U.none}</p>`});
const form=document.querySelector('#recommendationForm');
document.querySelector('#addSelections').addEventListener('click',()=>{const arr=[...selected.values()],status=document.querySelector('#selectionStatus');if(!arr.length){status.textContent=U.choose;return}[[ 'spot','entry.131475043'],['food','entry.321660944'],['gift','entry.1749250682']].forEach(([k,n])=>{const f=form.querySelector(`[name="${n}"]`),lines=arr.filter(x=>kind(x.c)===k).map(x=>`${U.prefix}：${ta(x.a)}｜${x.n}`);if(lines.length)f.value=[f.value.trim(),...lines].filter(Boolean).join('\n')});status.textContent=U.added(arr.length);document.querySelector('#feedback').scrollIntoView({behavior:'smooth'})});
document.querySelector('#copyButton').addEventListener('click',async()=>{const s=document.querySelector('#copyStatus');try{await navigator.clipboard.writeText(replyText);s.textContent=U.copied}catch{s.textContent=U.copyFail}});
const frame=document.querySelector('#googleFormTarget'),formStatus=document.querySelector('#formStatus');let submitted=false;
form.addEventListener('submit',()=>{submitted=true;form.querySelector('button').disabled=true;formStatus.textContent=U.sending});
frame.addEventListener('load',()=>{if(!submitted)return;submitted=false;form.reset();selected.clear();render();update();form.querySelector('button').disabled=false;formStatus.textContent=U.thanks});
