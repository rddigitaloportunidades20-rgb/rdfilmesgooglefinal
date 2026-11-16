/**
 * Configuration for WhatsApp rotation and site constants
 */

// Número de WhatsApp: (43) 99856-1481 → formato internacional 5543998561481.
// Para adicionar mais números no futuro, basta incluí-los na lista do pool desejado.
const WHATSAPP_OFICIAL = "5543998561481"; // (43) 99856-1481

export const WHATSAPP_POOLS = {
  TESTE: [
    WHATSAPP_OFICIAL,
  ],
  COMPRA: [
    WHATSAPP_OFICIAL,
  ],
  COMPLETO: [
    WHATSAPP_OFICIAL,
  ],
  HOME: [
    WHATSAPP_OFICIAL,
  ],
};

export const WHATSAPP_MODAL_CONFIG = {
  ativo: false,
  modelo: 1 as 1 | 2,
  nomeObrigatorio: false,
  telefoneObrigatorio: true,
  titulo: "Vamos começar seu atendimento?",
  subtitulo: "Preencha os dados abaixo para continuar.",
  rotuloNome: "Seu nome",
  placeholderNome: "Digite seu nome",
  rotuloTelefone: "Seu WhatsApp",
  placeholderTelefone: "(DDD) 99999-9999",
  textoBotao: "Falar No Whatsapp - Gerar Teste",
  textoContinuarSemPreencher: "Continuar sem preencher",
  textoFinalidade: "Usamos seu WhatsApp somente para identificar e agilizar o seu atendimento.",
};

export const SITE_CONFIG = {
  name: "RD Filmes In View",
  responsible: "Marcos Rodrigo Lourenço Soares",
  email: "rdgraficooportunidades20@gmail.com",
  phone: "(43) 99856-1481",
  address: "QR 306 Conjunto 10 Casa 01 — Samambaia/DF — CEP 72306-310",
  cpf: "002.110.941-96",
  description: "RD Filmes In View - Portal informativo de recomendações de filmes e séries. Conteúdo 100% legal.",
  regionTitle: "Atendimento online em todo o Brasil",
  footerDisclaimer: "Este site não hospeda, transmite ou disponibiliza conteúdos audiovisuais. Apenas publicamos informações e recomendamos plataformas oficiais.",
  copyright: "© 2026 RD Filmes In View - Portal em conformidade com Google Ads"
};

export type PoolType = keyof typeof WHATSAPP_POOLS;

export function getActiveWhatsApp(pool: PoolType = "TESTE"): string {
  const numbers = WHATSAPP_POOLS[pool];
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return numbers[dayOfYear % numbers.length];
}

export function getWhatsAppLink(
  message: string = "Olá, gostaria de saber mais sobre o guia RD Filmes In View.",
  pool: PoolType = "TESTE"
): string {
  const number = getActiveWhatsApp(pool);
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
