/**
 * Configuração do painel de leads (copie e ajuste em produção).
 * ZIRA_ADMIN_CODE: string — ex.: 'seu-pin-secreto' (vazio = abre sem gate; use só em dev)
 * ZIRA_LEADS.webhookUrl: opcional — só URLs HTTPS públicas válidas (validadas em leads.js)
 */
(function (w) {
  'use strict';
  w.ZIRA_ADMIN_CODE = '';
  // w.ZIRA_LEADS = { webhookUrl: 'https://hooks.zapier.com/hooks/catch/.../' };
})(typeof window !== 'undefined' ? window : this);
