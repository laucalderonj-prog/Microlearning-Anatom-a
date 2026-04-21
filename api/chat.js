// api/chat.js — Proxy seguro hacia Anthropic
// USA CommonJS (module.exports) — requerido por Vercel sin package.json

module.exports = async function handler(req, res) {
  // CORS headers — necesarios para llamadas desde el navegador
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") return res.status(200).end();

  // Solo acepta POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }
