
(function(){
  const data = [
      { id: 'ia', label: 'O que é IA?', title: 'O que é inteligência artificial?',
        short: 'São programas de computador capazes de fazer tarefas que normalmente exigiriam inteligência humana, como entender um texto, escrever uma resposta ou reconhecer uma imagem.',
        example: 'Você pede a um assistente que resuma um e-mail longo. Ele lê o texto e devolve só o essencial.',
        when: 'Quando existem tarefas com texto, imagens ou dados que tomam tempo e seguem algum padrão.',
        not: 'Quando uma regra simples ou uma planilha já resolve. Nem todo problema precisa de IA.' },
      { id: 'chatbot', label: 'O que é chatbot?', title: 'O que é um chatbot?',
        short: 'É um programa que conversa com as pessoas por mensagem, no site ou no WhatsApp, para tirar dúvidas ou fazer atendimentos.',
        example: 'Um cliente pergunta o horário de funcionamento às 22h e recebe a resposta na hora, sem esperar ninguém.',
        when: 'Quando muitas pessoas fazem as mesmas perguntas todos os dias.',
        not: 'Quando cada atendimento é muito particular e exige uma pessoa desde o início, ou quando uma página de perguntas frequentes já basta.' },
      { id: 'rag', label: 'O que é RAG?', title: 'O que é RAG?',
        short: 'É a sigla, em inglês, para geração aumentada por recuperação de informações. Antes de responder, a IA consulta os seus documentos e usa o que encontrou na resposta.',
        example: 'Um funcionário pergunta quantos dias de férias o contrato prevê. A IA busca no documento da empresa e responde com base nele.',
        when: 'Quando a IA precisa responder com informações específicas do seu negócio, que ela não conhece por conta própria.',
        not: 'Quando a base de informações é pequena. Às vezes colar o texto na conversa já funciona.' },
      { id: 'agente', label: 'O que é agente de IA?', title: 'O que é um agente de IA?',
        short: 'É uma IA que não apenas responde. Ela recebe um objetivo, decide os passos e executa tarefas usando outras ferramentas.',
        example: 'Você pede para organizar os pedidos da semana. O agente lê as mensagens, atualiza a planilha e avisa quem precisa agir.',
        when: 'Quando a tarefa tem várias etapas e depende de decisões ao longo do caminho.',
        not: 'Quando as etapas são sempre as mesmas. Uma automação simples é mais barata, mais previsível e mais fácil de manter.' },
      { id: 'prompt', label: 'O que é prompt?', title: 'O que é um prompt?',
        short: 'É a instrução que você escreve para a IA. Quanto mais claro o pedido, melhor a resposta.',
        example: 'Em vez de pedir "escreva um texto", pedir "escreva um e-mail de três linhas, em tom educado, cobrando uma resposta até sexta".',
        when: 'Sempre que você usar qualquer assistente de IA.',
        not: 'Ele nunca deixa de importar, mas muitas vezes aprender a pedir bem já resolve e dispensa algo maior.' },
      { id: 'automacao', label: 'O que é automação?', title: 'O que é automação?',
        short: 'É deixar o computador fazer sozinho um trabalho repetitivo, seguindo regras que você definiu.',
        example: 'Toda vez que um cliente preenche um formulário, os dados vão para a planilha e ele recebe um e-mail de confirmação.',
        when: 'Quando a mesma tarefa se repete todos os dias do mesmo jeito.',
        not: 'Quando a tarefa muda a cada vez e exige julgamento. Nesse caso a IA pode entrar como complemento.' }
    ];
  var termsEl=document.getElementById('terms');
  var sel='ia';
  function render(){
    termsEl.innerHTML='';
    data.forEach(function(d){
      var b=document.createElement('button');
      b.type='button'; b.textContent=d.label;
      b.setAttribute('aria-pressed', d.id===sel ? 'true':'false');
      b.style.cssText='text-align:left;cursor:pointer;min-height:48px;padding:12px 18px;border-radius:14px;font-weight:700;font-size:16px;border:1px solid '+(d.id===sel?'#011130':'#D5DFEC')+';background:'+(d.id===sel?'#011130':'#FFFFFF')+';color:'+(d.id===sel?'#FFFFFF':'#011130');
      b.addEventListener('click',function(){sel=d.id;render();});
      termsEl.appendChild(b);
    });
    var a=data.filter(function(d){return d.id===sel;})[0];
    document.getElementById('g-title').textContent=a.title;
    document.getElementById('g-short').textContent=a.short;
    document.getElementById('g-example').textContent=a.example;
    document.getElementById('g-when').textContent=a.when;
    document.getElementById('g-not').textContent=a.not;
  }
  render();
  var form=document.getElementById('form'), box=document.getElementById('summary'), pre=document.getElementById('summary-text'), copyBtn=document.getElementById('copy');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var g=function(n){return (form.elements[n].value||'').trim();};
    pre.textContent='Nome: '+g('nome')+'\nE-mail: '+g('email')+'\nTelefone: '+(g('telefone')||'não informado')+'\nAjuda com: '+g('tipo')+'\nProblema: '+g('mensagem');
    copyBtn.textContent='Copiar resumo';
    form.style.display='none'; box.hidden=false; box.style.display='flex';
  });
  copyBtn.addEventListener('click',function(){
    try{navigator.clipboard.writeText(pre.textContent).then(function(){copyBtn.textContent='Copiado';});}catch(err){}
  });
  document.getElementById('back').addEventListener('click',function(){
    box.hidden=true; box.style.display='none'; form.style.display='flex';
  });
})();
