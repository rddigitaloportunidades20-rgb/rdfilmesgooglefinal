/**
 * Configuration for WhatsApp rotation and site constants
 */

// Número oficial de WhatsApp: (43) 99856-1481 → 5543998561481.
// Para rotacionar entre vários números no futuro, basta trocar os itens das listas.
const WHATSAPP_OFICIAL = "5543998561481"; // (43) 99856-1481

export const WHATSAPP_POOLS = {
  TESTE: [WHATSAPP_OFICIAL],
  COMPRA: [WHATSAPP_OFICIAL],
  COMPLETO: [WHATSAPP_OFICIAL],
  HOME: [WHATSAPP_OFICIAL],
};

export const SITE_CONFIG = {
  name: "RD Filmes In View",
  email: "rdgraficooportunidades20@gmail.com",
  phone: "(43) 99856-1481",
  description: "RD Filmes In View - Portal de entretenimento digital.",
  regionTitle: "Atendimento 100% ONLINE",
  footerDisclaimer: "Venha Conferir com um teste Gratuito.",
  copyright: "© 2026 RD Filmes In View"
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
  message: string = "Olá, gostaria de um teste gratuito.",
  pool: PoolType = "TESTE"
): string {
  const number = getActiveWhatsApp(pool);
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
