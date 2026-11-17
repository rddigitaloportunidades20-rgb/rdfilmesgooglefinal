import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '@/src/constants';

// V2 — Laranja: background galáxia azul-roxo
const TESTIMONIALS = [
  { initials: "JD", name: "João Duarte",       time: "Cliente há 6 meses",  msg: "Fui em Saiba Mais, ganhei gratuitamente um acesso de 4 horas. O sinal não trava e o suporte foi super atencioso na hora da instalação." },
  { initials: "MC", name: "Mariana Costa",     time: "Cliente há 3 meses",  msg: "A configuração com o suporte levou menos de 2 minutos. Uso no celular, TV e notebook sem problema nenhum." },
  { initials: "RS", name: "Rafael Souza",      time: "Cliente há 8 meses",  msg: "O suporte humano é o diferencial. Toda vez que precisei, respondem rápido e resolvem de verdade." },
  { initials: "AL", name: "Ana Luiza",         time: "Cliente há 1 ano",    msg: "Preço justo e qualidade top. Já indiquei pra toda a família. Meu marido era cético, mas depois que conheceu assinou na hora." },
  { initials: "FP", name: "Felipe Prado",      time: "Cliente há 4 meses",  msg: "Fiquei surpreso com a estabilidade. Assisto futebol ao vivo sem travar nenhuma vez. Vale muito cada centavo." },
  { initials: "CB", name: "Carla Braga",       time: "Cliente há 2 meses",  msg: "Tentei outros serviços antes e era decepção. Aqui o sinal é limpo e o atendimento é humano de verdade." },
  { initials: "TM", name: "Thiago Mendes",     time: "Cliente há 7 meses",  msg: "Assino o plano anual e economizei muito. A qualidade em 4K é absurda, nunca pixeliza." },
  { initials: "LF", name: "Luciana Ferreira",  time: "Cliente há 5 meses",  msg: "Minha internet não é das melhores e mesmo assim o serviço roda perfeito. Recomendo sem hesitar." },
  { initials: "GN", name: "Gustavo Nunes",     time: "Cliente há 9 meses",  msg: "Atendimento no WhatsApp é rápido demais. Tive problema numa sexta à noite e responderam em menos de 3 minutos." },
  { initials: "PR", name: "Priscila Reis",     time: "Cliente há 6 meses",  msg: "Uso na Smart TV e no Fire Stick. Interface fácil — minha mãe consegue usar sozinha." },
  { initials: "BE", name: "Bruno Esteves",     time: "Cliente há 1 ano",    msg: "Duas contas pelo preço de uma. Minha esposa também usa e nunca tivemos conflito de sinal." },
  { initials: "JO", name: "Juliana Oliveira",  time: "Cliente há 3 meses",  msg: "Pude ver a qualidade com os meus próprios olhos antes de pagar. Confiança total." },
  { initials: "DV", name: "Diego Vasconcelos", time: "Cliente há 11 meses", msg: "Sou exigente com qualidade de imagem e esse serviço atende perfeitamente. 4K sem travamento mesmo nos horários de pico." },
  { initials: "NM", name: "Natália Moura",     time: "Cliente há 4 meses",  msg: "Vim pelo preço e fiquei pela qualidade. O primeiro mês com desconto me mostrou que vale muito mais." },
  { initials: "RB", name: "Ricardo Barbosa",   time: "Cliente há 8 meses",  msg: "Transparência total. O que prometem é exatamente o que entregam. Isso é raro hoje em dia." },
  { initials: "SM", name: "Sabrina Melo",      time: "Cliente há 2 meses",  msg: "Configuração simples com o suporte e atendimento sempre disponível. Nota dez." },
  { initials: "ED", name: "Eduardo Dias",      time: "Cliente há 6 meses",  msg: "Uso para séries e filmes em 4K. Qualidade incrível — nunca perdi uma cena por buffering." },
  { initials: "VP", name: "Vinicius Pereira",  time: "Cliente há 5 meses",  msg: "Pago menos da metade do que pagava antes com qualidade muito superior. Não tem pra onde correr." },
  { initials: "LC", name: "Larissa Campos",    time: "Cliente há 7 meses",  msg: "Fizeram questão de me explicar tudo antes de eu assinar. Senti segurança desde o início." },
  { initials: "AM", name: "Alexandre Martins", time: "Cliente há 10 meses", msg: "Indiquei para 6 amigos e todos continuam assinantes. Quando é bom de verdade, a indicação é natural." },
];

export function TestePage() {
  const whatsappUrl = getWhatsAppLink("Olá, gostaria de fazer um _*teste*_ para conhecer o serviço, pode me ajudar?", "TESTE");

  const GROUPS = Math.ceil(TESTIMONIALS.length / 3);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentGroup(prev => (prev + 1) % GROUPS);
    }, 5000);
    return () => clearInterval(id);
  }, [GROUPS]);

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Header fixo animado — Laranja */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b-2 border-orange-500 shadow-lg overflow-hidden"
        animate={{ backgroundColor: ['#1c1917', '#431407', '#1c1917', '#1c1307', '#1c1917'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ boxShadow: ['0 0 0px #ea580c', '0 0 18px #ea580c', '0 0 0px #ea580c'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <a href={whatsappUrl} target="_blank" rel="noreferrer"
          className="relative flex flex-col items-center justify-center py-3 px-4 text-center"
        >
          <motion.span className="text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight"
            animate={{ color: ['#fed7aa', '#ffffff', '#fde68a', '#fed7aa'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            CANSADO DE PAGAR CARO E RECEBER POUCO?
          </motion.span>
          <motion.span className="text-lg md:text-2xl font-black uppercase tracking-widest leading-tight"
            animate={{
              color: ['#ea580c', '#facc15', '#ffffff', '#ea580c'],
              textShadow: ['0 0 0px #ea580c', '0 0 12px #facc15, 0 0 24px #facc15', '0 0 8px #ffffff', '0 0 0px #ea580c'],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            TESTE AGORA — É DE GRAÇA!
          </motion.span>
        </a>
      </motion.header>
      <div className="h-[72px] md:h-[76px]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-12 flex flex-col gap-16">

        {/* Como funciona — topo desta versão */}
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide text-white drop-shadow">COMO FUNCIONA?</h2>
            <p className="text-orange-300 text-sm mt-1">São apenas 3 passos e você já está assistindo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: 1, title: "CLIQUE AQUI", desc: "Acesse o WhatsApp. Um especialista estará pronto para te atender agora mesmo. Sem esperar fila." },
              { n: 2, title: "RECEBA SEU TESTE", desc: "Em minutos o seu teste gratuito está ativo. Veja você mesmo a qualidade antes de assinar qualquer coisa." },
              { n: 3, title: "ASSINE SE GOSTAR", desc: "Aprovou? Assine o plano que cabe no seu bolso. Se não gostar, não paga nada. É simples assim." },
            ].map(step => (
              <a key={step.n} href={whatsappUrl} target="_blank" rel="noreferrer"
                className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:bg-black/60 hover:border-orange-400/60 hover:scale-[1.02] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black text-lg flex items-center justify-center shrink-0">{step.n}</div>
                <h3 className="font-black uppercase text-orange-300 text-sm tracking-wide">{step.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Hero */}
        <div className="text-center flex flex-col items-center gap-5">
          <h1 className="text-2xl md:text-4xl font-black uppercase leading-snug tracking-wide drop-shadow-lg">
            PARE DE PAGAR CARO.{' '}
            <span className="text-orange-400">ASSISTA MAIS POR MENOS AGORA!</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow">
            Mais de 10 anos no mercado. Estabilidade comprovada em qualidade 4K real. Canais, filmes, séries e esportes — tudo num só lugar, pelo menor preço do mercado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 hover:bg-orange-400 text-white font-black text-sm md:text-base uppercase tracking-wide px-10 py-4 rounded-2xl shadow-xl shadow-orange-900/50 transition-all"
          >
            Falar com Especialista pelo WhatsApp
          </a>
        </div>

        {/* CTA secundário */}
        <div id="testegratis" className="flex flex-col gap-4">
          <h2 className="text-xl md:text-3xl font-extrabold leading-tight text-white drop-shadow-lg">
            Teste gratuito: 2 ou 4 horas para você ver antes de assinar
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Sem dados de cartão, sem mensalidade automática, sem compromisso. Você testa, aprova e assina — ou não. A escolha é sua. Mas quem testa, não volta atrás.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="self-start bg-orange-500 hover:bg-orange-400 text-white font-black text-sm uppercase tracking-wide px-8 py-3 rounded-xl shadow-lg transition-all"
          >
            Falar com Especialista Agora
          </a>
        </div>

        {/* Destaque */}
        <p className="text-center text-orange-300 text-sm md:text-base font-black uppercase tracking-widest drop-shadow">
          MAIS DE 100 MIL CONTEÚDOS. ZERO TRAVAMENTO. CONFIRME COM SEU PRÓPRIO OLHO.
        </p>

        {/* Depoimentos */}
        <div id="suporte" className="flex flex-col gap-6">
          <h2 className="text-center text-xl md:text-2xl font-black uppercase tracking-wide text-white drop-shadow">
            QUEM JÁ TESTOU, FICOU
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {TESTIMONIALS.slice(currentGroup * 3, currentGroup * 3 + 3).map((t, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-900/70 rounded-full flex items-center justify-center text-orange-300 font-bold text-sm shrink-0">{t.initials}</div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.time}</div>
                    </div>
                  </div>
                  <p className="text-sm italic text-slate-300 leading-relaxed">"{t.msg}"</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2">
            {Array.from({ length: GROUPS }).map((_, i) => (
              <button key={i} onClick={() => setCurrentGroup(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentGroup ? 'w-6 bg-orange-400' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="flex flex-col items-center gap-6 pb-4">
          <p className="text-slate-200 text-sm md:text-base leading-relaxed text-center max-w-xl drop-shadow">
            Você já sabe que outros clientes aprovaram. Agora é a sua vez. Fale com nosso especialista pelo WhatsApp e receba seu teste gratuito em minutos.
          </p>
          <motion.a
            href={whatsappUrl} target="_blank" rel="noreferrer"
            animate={{
              color: ['#fb923c', '#facc15', '#ffffff', '#fb923c'],
              textShadow: ['0 0 0px #ea580c', '0 0 14px #facc15, 0 0 28px #facc15', '0 0 10px #ffffff', '0 0 0px #ea580c'],
              scale: [1, 1.06, 1],
              borderColor: ['#ea580c', '#facc15', '#ffffff', '#ea580c'],
              boxShadow: ['0 0 0px #ea580c', '0 0 20px #facc15', '0 0 10px #ffffff', '0 0 0px #ea580c'],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block border-4 rounded-2xl px-8 py-4 font-black text-lg md:text-2xl uppercase tracking-widest cursor-pointer"
          >
            FALAR COM ESPECIALISTA AGORA !
          </motion.a>
        </div>

      </div>
    </div>
  );
}
