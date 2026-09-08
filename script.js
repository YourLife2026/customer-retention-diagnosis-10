const LECTURE_URL = "#"; // 採用後、90分講座URLに差し替え

const questions = [
  {
    axis:"継続設計力",
    title:"商品・サービスを提供した“後”にも、お客様があなたに相談する「次の理由」が設計されていますか？",
    help:"購入後の新しい課題や状況の変化に応じて、次の相談・提案・サポートへ自然につながる状態を指します。"
  },
  {
    axis:"顧客理解力",
    title:"お客様の「今回の悩み」だけでなく、将来の目標や、今後起こりそうな課題まで把握できていますか？",
    help:"「今、何が欲しいか」だけではなく、「この人はこれから何を実現したいのか」まで理解できているかを考えてみてください。"
  },
  {
    axis:"価値拡張力",
    title:"自社の商品・サービスだけでは解決できない相談にも、別の選択肢を提案できる体制がありますか？",
    help:"必要に応じて他の専門家やサービスとも連携し、「自社で解決できなくても、ここに相談すれば選択肢が見つかる」と思ってもらえる状態を指します。"
  },
  {
    axis:"関係拡張力",
    title:"お客様との関係が、本人だけで終わらず、家族・会社・周囲の人へ広がる機会がありますか？",
    help:"紹介制度の有無ではありません。提供している価値や信頼関係によって、自然に相談の範囲や関係性が広がっていく状態を指します。"
  },
  {
    axis:"顧問ポジション力",
    title:"お客様が何か困ったとき、「この商品について相談しよう」ではなく、「まず、あなたに相談しよう」と思ってもらえる存在になっていますか？",
    help:"商品ではなく、あなた自身・あなたの会社が相談先になっているか。これが「顧問型」への大きな分岐点です。"
  },
  {
    axis:"継続設計力",
    title:"お客様一人に対して、複数回・複数テーマで価値提供できる商品・サービス設計になっていますか？",
    help:"一度の提供で関係が完結せず、時間の経過や状況変化に応じて別のテーマでも支援できるかを確認します。"
  },
  {
    axis:"顧客理解力",
    title:"お客様との接点が増えるほど、その人への理解や提案の精度が高まる仕組みがありますか？",
    help:"面談・相談・利用履歴などが蓄積され、次の提案やサポートの質が上がっていく状態を指します。"
  },
  {
    axis:"価値拡張力",
    title:"お客様の状況が変化したとき、自社の既存商品に限定せず、新しい選択肢を提案できますか？",
    help:"売りたい商品を起点にするのではなく、お客様の状況を起点に、必要な選択肢を増やせるかを考えてみてください。"
  },
  {
    axis:"関係拡張力",
    title:"お客様が、あなたの会社を大切な人にも紹介したくなるような関係性が生まれていますか？",
    help:"紹介制度や紹介特典ではなく、信頼や満足から自然に「この人にも教えたい」と思ってもらえる状態を指します。"
  },
  {
    axis:"顧問ポジション力",
    title:"お客様は、特定の商品やサービスだけでなく、「あなたと長く付き合うこと」そのものに価値を感じていますか？",
    help:"商品単体では代替できても、相談相手としては代替しにくい存在になっているかを確認します。"
  }
];

const results = [
  {
    min:0,max:10,level:"LEVEL 1",type:"売り切り型",
    why:"顧客が離れる理由は、「商品に不満があるから」とは限りません。",
    body:`<p><strong>商品・サービスを提供した後に、もう一度あなたに相談する理由が十分に設計されていない可能性があります。</strong></p>
    <p>商品やサービスそのものに価値があっても、「購入した」「サービスを受けた」「目的を達成した」その時点で関係が完結してしまうと、お客様から再び連絡する必要がなくなってしまいます。</p>
    <p>これは「顧客に嫌われた」のではなく、<strong>ビジネスそのものが“売ったら終わる設計”になっている</strong>可能性があります。</p>`,
    growth:`<p>新しい商品を増やす前に、<strong>「この商品を利用したお客様は、半年後・1年後にどんなことで困るだろう？」</strong>を考えてみてください。</p>`,
    step:"商品提供後に起こりそうな「次の顧客課題」を3つ書き出す。"
  },
  {
    min:11,max:20,level:"LEVEL 2",type:"フォロー型",
    why:"顧客との接点はある。でも、「次に何を相談できるのか」が見えていない可能性があります。",
    body:`<p>メール、LINE、SNS、定期連絡などを通じて、お客様との関係は維持できています。</p>
    <p>一方で、<strong>「つながっていること」と「次の価値を提供できること」は別物です。</strong></p>
    <p>接点だけが続いていても、「この会社に次は何を相談できるのか」がお客様から見えなければ、継続やLTVにはつながりにくくなります。</p>`,
    growth:`<p>「連絡を続ける仕組み」から、<strong>「次の価値を提供する仕組み」</strong>へ進むことです。</p>`,
    step:"既存顧客に「今、他にどんなことで困っていますか？」と聞いてみる。"
  },
  {
    min:21,max:30,level:"LEVEL 3",type:"伴走型",
    why:"お客様との関係性は強い状態です。次の課題は、「自社だけで提供できる価値の限界」です。",
    body:`<p>あなたの会社は、お客様の状況を理解しながら、購入後も継続的に価値提供できています。</p>
    <p>すでに「売って終わり」の関係からは抜け出しています。</p>
    <p>ここからさらに顧客との関係を強くするポイントは、<strong>自社でできることだけに限定しないこと。</strong></p>
    <p>お客様の悩みは、自社の商品カテゴリーだけで完結するとは限りません。</p>`,
    growth:`<p>自社では解決できない顧客課題についても、信頼できる専門家や企業と連携できれば、<strong>提供価値そのものを広げることができます。</strong></p>`,
    step:"既存顧客からよく相談される「自社では解決できない相談」を3つ書き出す。"
  },
  {
    min:31,max:40,level:"LEVEL 4",type:"顧問型",
    why:"あなたの会社は、顧客が離れにくい関係をすでに築けている可能性があります。",
    body:`<p>商品ではなく、<strong>「あなたに相談すること」そのものに価値が生まれている状態です。</strong></p>
    <p>何か困ったとき、「まず、あの人に相談してみよう。」そう思い出してもらえる。</p>
    <p>それが、この診断でいう<strong>「顧問型」</strong>です。</p>
    <p>単一の商品を購入する関係ではなく、長期的な相談相手として選ばれている状態に近づいています。</p>`,
    growth:`<p>顧問型まで来た会社が次に考えたいのは、<strong>自社の顧客基盤 × 他社の専門性</strong>です。自社だけでは対応できない相談にも応えられるようになれば、顧客への提供価値をさらに広げることができます。</p>`,
    step:"「相談されるけれど、自社では提供していないもの」を書き出してみる。"
  }
];

const axisMap = {
  "継続設計力":[0,5],
  "顧客理解力":[1,6],
  "価値拡張力":[2,7],
  "関係拡張力":[3,8],
  "顧問ポジション力":[4,9]
};

let current=0;
let scores=[];

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-next]").forEach(btn=>{
  btn.addEventListener("click",()=>show(btn.dataset.next));
});

document.querySelector("[data-start]").addEventListener("click",()=>{
  current=0;scores=[];renderQuestion();show("screen-question");
});

function renderQuestion(){
  const q=questions[current];
  document.getElementById("q-counter").textContent=`QUESTION ${String(current+1).padStart(2,"0")} / 10`;
  document.getElementById("q-axis").textContent=q.axis;
  document.getElementById("q-title").textContent=q.title;
  document.getElementById("q-help").textContent=q.help;
  document.getElementById("progress-fill").style.width=`${((current+1)/questions.length)*100}%`;
}

document.querySelectorAll(".answers button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    scores[current]=Number(btn.dataset.score);
    current++;
    if(current<questions.length){renderQuestion();}
    else{startAnalysis();}
  });
});

function startAnalysis(){
  show("screen-analyzing");
  const rows=[...document.querySelectorAll("#analysis-list div")];
  rows.forEach(r=>r.classList.remove("done"));
  rows.forEach((r,i)=>setTimeout(()=>r.classList.add("done"),450+i*300));
  setTimeout(renderResult,2200);
}

function axisTotals(){
  const totals={};
  for(const [axis,indexes] of Object.entries(axisMap)){
    totals[axis]=indexes.reduce((sum,i)=>sum+(scores[i]||0),0);
  }
  return totals;
}

function renderResult(){
  const total=scores.reduce((a,b)=>a+b,0);
  const r=results.find(x=>total>=x.min&&total<=x.max);
  const totals=axisTotals();

  document.getElementById("result-level").textContent=r.level;
  document.getElementById("result-type").textContent=r.type;
  document.getElementById("result-score").textContent=total;
  document.getElementById("why-title").textContent=r.why;
  document.getElementById("result-body").innerHTML=r.body;
  document.getElementById("growth-copy").innerHTML=r.growth;
  document.getElementById("first-step").textContent=r.step;

  const box=document.getElementById("axis-scores");
  box.innerHTML="";
  Object.entries(totals).forEach(([axis,value])=>{
    const el=document.createElement("div");
    el.className="axis-score";
    el.innerHTML=`<span>${axis}</span><b>${value} / 8</b>`;
    box.appendChild(el);
  });

  drawRadar(Object.values(totals));
  document.getElementById("lecture-link").href=LECTURE_URL;
  show("screen-result");
}

function drawRadar(values){
  const svg=document.getElementById("radar");
  svg.innerHTML="";
  const cx=180,cy=150,r=105,n=5;
  const labels=["継続設計","顧客理解","価値拡張","関係拡張","顧問力"];
  const point=(i,rr)=>{
    const a=-Math.PI/2+i*Math.PI*2/n;
    return[cx+Math.cos(a)*rr,cy+Math.sin(a)*rr];
  };

  for(let l=1;l<=4;l++){
    const p=document.createElementNS("http://www.w3.org/2000/svg","polygon");
    p.setAttribute("points",Array.from({length:n},(_,i)=>point(i,r*l/4).join(",")).join(" "));
    p.setAttribute("fill","none");
    p.setAttribute("stroke",l===4?"#C9B98E":"#E4DED0");
    svg.appendChild(p);
  }

  for(let i=0;i<n;i++){
    const [x,y]=point(i,r);
    const line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1",cx);line.setAttribute("y1",cy);
    line.setAttribute("x2",x);line.setAttribute("y2",y);
    line.setAttribute("stroke","#E4DED0");
    svg.appendChild(line);
  }

  const data=document.createElementNS("http://www.w3.org/2000/svg","polygon");
  data.setAttribute("points",values.map((v,i)=>point(i,r*v/8)).join(" "));
  data.setAttribute("fill","rgba(184,154,94,.22)");
  data.setAttribute("stroke","#B89A5E");
  data.setAttribute("stroke-width","3");
  svg.appendChild(data);

  labels.forEach((lab,i)=>{
    const[x,y]=point(i,r+34);
    const t=document.createElementNS("http://www.w3.org/2000/svg","text");
    t.setAttribute("x",x);t.setAttribute("y",y);
    t.setAttribute("text-anchor","middle");
    t.setAttribute("dominant-baseline","middle");
    t.setAttribute("font-size","12");
    t.setAttribute("font-weight","700");
    t.setAttribute("fill","#0E2340");
    t.textContent=lab;
    svg.appendChild(t);
  });
}

document.getElementById("restart-btn").addEventListener("click",()=>{
  current=0;scores=[];show("screen-top");
});
