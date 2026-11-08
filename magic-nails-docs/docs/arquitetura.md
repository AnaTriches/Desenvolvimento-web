# Arquitetura

A arquitetura do sistema foi documentada com o **C4 Model**, nos dois primeiros níveis de abstração: o Diagrama de Contexto (Nível 1) e o Diagrama de Containers (Nível 2).

## Nível 1 - Diagrama de Contexto

Mostra a plataforma Magic Nails no centro, com as pessoas que a utilizam e os sistemas externos com os quais ela se comunica.

![Diagrama de Contexto - Nível 1](img/Diagrama%20de%20Contexto%20Magic%20Nails-Diagrama%20de%20contexto.drawio.png)

### Atores

| Ator | Descrição |
|---|---|
| Cliente | Visualiza designs, pesquisa profissionais, agenda serviços e realiza pagamentos. |
| Manicure | Cadastra designs, divulga serviços, disponibiliza horários e gerencia agendamentos. |
| Administrador | Gerencia usuários e acompanha o funcionamento da plataforma. |

### Sistemas externos

| Sistema | Finalidade |
|---|---|
| API do WhatsApp (Meta) | Envio de notificações, confirmações e lembretes de agendamentos pelo WhatsApp. |
| Gateway de Pagamento | Processamento dos pagamentos realizados na plataforma. |

### Interações

| Origem | Destino | Descrição |
|---|---|---|
| Cliente | Magic Nails | Pesquisa e agendamento. |
| Manicure | Magic Nails | Cadastro de serviços e horários. |
| Administrador | Magic Nails | Gerenciamento da plataforma. |
| Magic Nails | API do WhatsApp (Meta) | Envio de notificações. |
| Magic Nails | Gateway de Pagamento | Solicitação de pagamento e retorno do status. |

## Nível 2 - Diagrama de Containers

Detalha as partes fundamentais da plataforma e as tecnologias usadas em cada uma.

![Diagrama de Containers - Nível 2](img/Diagrama%20de%20Containers%20Magic%20Nails-Diagrama%20de%20containers.drawio.png)

### Containers

| Container | Tecnologia | Responsabilidade |
|---|---|---|
| Front-end | React, HTML e CSS | Interface web usada por clientes, manicures e administradores para acessar as funcionalidades da plataforma. |
| Back-end | Java, Spring Boot | Regras de negócio e gerenciamento de usuários, profissionais, designs, serviços, agendamentos e pagamentos. |
| Banco de Dados | PostgreSQL | Armazena usuários, manicures, designs, serviços, horários, agendamentos e pagamentos. |

### Comunicação entre os blocos

| Origem | Destino | Descrição |
|---|---|---|
| Cliente, Manicure e Administrador | Front-end | Acessam a plataforma, gerenciam seus serviços e gerenciam a plataforma. |
| Front-end | Back-end | Requisições HTTP / API REST. |
| Back-end | Banco de Dados | Consultas e armazenamento. |
| Back-end | API do WhatsApp (Meta) | Envio de notificações. |
| Back-end | Gateway de Pagamento | Solicita o pagamento e recebe o status da transação. |

!!! note "Notação"
    Nos diagramas, **azul escuro** representa pessoas (atores), **azul** representa o sistema e seus containers, e **cinza-roxo** representa sistemas externos.
