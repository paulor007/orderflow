# OrderFlow

Plataforma de gestão de pedidos, construída como projeto de portfólio.

> **Status:** em desenvolvimento. Etapa 1 de 14 concluída (base do projeto).
> Nesta primeira fase, o projeto é só frontend e todos os dados exibidos serão **simulados**.

## Objetivo

Construir, de forma progressiva e profissional, uma plataforma para cadastrar, acompanhar e processar pedidos, com:

- gestão de pedidos, clientes, produtos, estoque e pagamentos;
- dashboard com indicadores;
- eventos, mensageria e monitoramento em modo demonstrativo.

O frontend vem primeiro, com uma camada de acesso a dados preparada para ser trocada por uma API REST. Depois, o backend será desenvolvido em Java com Spring Boot.

## Tecnologias

| Camada                    | Tecnologias                                            |
| ------------------------- | ------------------------------------------------------ |
| Frontend (atual)          | React 19, TypeScript, Vite 8                           |
| Qualidade de código       | ESLint, Prettier                                       |
| Planejado para o frontend | Tailwind CSS, React Router, Vitest                     |
| Backend (futuro)          | Java, Spring Boot, Spring Data JPA, PostgreSQL, Docker |

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) 24 LTS (recomendado) e Git.

```bash
git clone https://github.com/paulor007/orderflow.git
cd orderflow/frontend
npm ci
npm run dev
```

A aplicação abre em `http://localhost:5173`.

## Scripts do frontend

| Comando                | O que faz                                      |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento com recarga rápida |
| `npm run build`        | Verifica os tipos e gera a versão de produção  |
| `npm run preview`      | Serve localmente a versão de produção          |
| `npm run lint`         | Analisa o código com o ESLint                  |
| `npm run format`       | Formata o código com o Prettier                |
| `npm run format:check` | Verifica a formatação sem alterar arquivos     |

## Roteiro

- [x] 1. Ambiente e estrutura do projeto
- [ ] 2. Identidade visual e design system
- [ ] 3. Landing page
- [ ] 4. Navegação, rotas e layout administrativo
- [ ] 5. Componentes reutilizáveis
- [ ] 6. Tipos, dados simulados e serviços
- [ ] 7. Gestão de pedidos
- [ ] 8. Clientes e produtos
- [ ] 9. Controle de estoque
- [ ] 10. Pagamentos
- [ ] 11. Dashboard
- [ ] 12. Eventos e mensageria (demonstrativo)
- [ ] 13. Monitoramento e observabilidade (simulado)
- [ ] 14. Testes, acessibilidade, documentação e publicação

## Autor

Paulo Roberto Lavarini de Oliveira — [github.com/paulor007](https://github.com/paulor007)
