var btn =document.getElementById('btn')
var mdl_back = document.querySelector('.mdl-background')
var modal = document.querySelector('.modal')
var btn_close = document.getElementById('btn_close')
var btn_add = document.getElementById('add')
var body = document.querySelector('body')
var time = document.querySelector('.timer')
var frases=['Desisti Não e Uma opção','Quem Não Dorme No Ponto Realiza Seu Sonho','“Concentre todos os seus pensamentos no trabalho em mãos. Os raios do sol não queimam até serem focalizados”.','Não Tem Problema Nenhum Em Errar:)','Quem Nunca Errou Não Sabe o Prazer De Acertar','Não Espere o Futuro Mudar Sua Vida, O Furo E Consequençia Do Onten',
"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
"Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
"Só existe um êxito: a capacidade de viver a vida do jeito que se quer.",
"Ouse, arrisque, não desista jamais e saiba valorizar quem te ama, esses sim merecem seu respeito.",
"Nenhum obstáculo será grande se a sua vontade de vencer for maior.",
"Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.",
"Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
"A persistência é o caminho do êxito.",
"Imagine uma nova história para sua vida e acredite nela.",
"No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.",
"Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",
"A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
"Nunca é tarde demais para ser aquilo que sempre desejou ser.",
"A força não vem da capacidade física, e sim de uma vontade indomável.",
"Quanto maior o obstáculo, maior a glória em superá-lo.",
"A motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
"Seja a mudança que você quer ver no mundo.",
"Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas.",
"A persistência realiza o impossível.",
"A melhor maneira de prever o futuro é criá-lo."
]
var fs = document.querySelector('.moti')
btn.addEventListener('click',()=>{
    modal.style.display = 'block'
    mdl_back.style.display = 'block'
})
btn_close.addEventListener('click',()=>{
    modal.style.display = 'none'
    mdl_back.style.display = 'none'
    
})
btn_add.addEventListener('click',()=>{
    modal.style.display = 'none'
    mdl_back.style.display = 'none'
    
})
function loadthemes(){
    body.style.backgroundColor = ''
    fs.innerHTML = '<span class="spn-y">'+frases[parseInt(Math.random()*frases.length)]
    console.log(parseInt(Math.random()*frases.length))
    
}
setInterval(()=>{
   var sumDate = sumTime()
   time.innerHTML = `${sumDate}`
},1000)



function sumTime(){
            // Data do evento
        const dataDoEvento = new Date('2024-11-03T13:30:00');

        // Data atual
        const dataAtual = new Date();

        // Calcula a diferença em milissegundos entre as datas
        let diferencaEmMilissegundos = Math.abs(dataDoEvento - dataAtual) / 1000; // Convertendo para segundos

        // Calcula os dias
        const dias = Math.floor(diferencaEmMilissegundos / 86400); // 1 dia = 86400 segundos

        diferencaEmMilissegundos %= 86400; // Remove os segundos dos dias

        // Calcula as horas, minutos e segundos restantes
        const horas = Math.floor(diferencaEmMilissegundos / 3600); // 1 hora = 3600 segundos

        diferencaEmMilissegundos %= 3600; // Remove os segundos das horas

        const minutos = Math.floor(diferencaEmMilissegundos / 60); // 1 minuto = 60 segundos

        const segundos = Math.floor(diferencaEmMilissegundos % 60);

        var result = `${dias}d:${horas}h:${minutos}m:${segundos}s`
        return result


}