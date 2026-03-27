import { onRequestPost as __api_concluir__id__js_onRequestPost } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\concluir\\[id].js"
import { onRequestDelete as __api_agendamentos_js_onRequestDelete } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\agendamentos.js"
import { onRequestGet as __api_agendamentos_js_onRequestGet } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\agendamentos.js"
import { onRequestPost as __api_agendamentos_js_onRequestPost } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\agendamentos.js"
import { onRequestPost as __api_concluir_js_onRequestPost } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\concluir.js"
import { onRequestGet as __api_configuracao_js_onRequestGet } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\configuracao.js"
import { onRequestPost as __api_configuracao_js_onRequestPost } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\configuracao.js"
import { onRequestDelete as __api_feedbacks_js_onRequestDelete } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\feedbacks.js"
import { onRequestGet as __api_feedbacks_js_onRequestGet } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\feedbacks.js"
import { onRequestPost as __api_feedbacks_js_onRequestPost } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\feedbacks.js"
import { onRequestGet as __api_historico_js_onRequestGet } from "C:\\Users\\PC\\Desktop\\A2-Performance\\Clientes\\Barbearia Jeff\\functions\\api\\historico.js"

export const routes = [
    {
      routePath: "/api/concluir/:id",
      mountPath: "/api/concluir",
      method: "POST",
      middlewares: [],
      modules: [__api_concluir__id__js_onRequestPost],
    },
  {
      routePath: "/api/agendamentos",
      mountPath: "/api",
      method: "DELETE",
      middlewares: [],
      modules: [__api_agendamentos_js_onRequestDelete],
    },
  {
      routePath: "/api/agendamentos",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_agendamentos_js_onRequestGet],
    },
  {
      routePath: "/api/agendamentos",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_agendamentos_js_onRequestPost],
    },
  {
      routePath: "/api/concluir",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_concluir_js_onRequestPost],
    },
  {
      routePath: "/api/configuracao",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_configuracao_js_onRequestGet],
    },
  {
      routePath: "/api/configuracao",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_configuracao_js_onRequestPost],
    },
  {
      routePath: "/api/feedbacks",
      mountPath: "/api",
      method: "DELETE",
      middlewares: [],
      modules: [__api_feedbacks_js_onRequestDelete],
    },
  {
      routePath: "/api/feedbacks",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_feedbacks_js_onRequestGet],
    },
  {
      routePath: "/api/feedbacks",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_feedbacks_js_onRequestPost],
    },
  {
      routePath: "/api/historico",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_historico_js_onRequestGet],
    },
  ]