# Magic Nails

Portal de documentação da **Magic Nails**, uma plataforma para divulgação de designs de unhas, busca de manicures e agendamento de serviços.

## O que você encontra aqui

| Página | Conteúdo |
|---|---|
| [Arquitetura](arquitetura.md) | Diagramas C4 (Nível 1 - Contexto e Nível 2 - Containers) e a descrição de cada bloco do sistema. |
| [Regra de Negócio / Fluxo](regra-de-negocio.md) | Fluxo de agendamento de serviço, com passo a passo, regras de negócio e resumo. |

## Sobre o sistema

A plataforma atende três perfis de usuário:

- **Cliente:** visualiza designs, pesquisa profissionais, agenda serviços e realiza pagamentos.
- **Manicure:** cadastra designs, divulga serviços, disponibiliza horários e gerencia agendamentos.
- **Administrador:** gerencia usuários e acompanha o funcionamento da plataforma.

Ela também se integra a dois serviços externos: a **API do WhatsApp (Meta)**, para envio de notificações, confirmações e lembretes, e um **Gateway de Pagamento**, para o processamento dos pagamentos.
