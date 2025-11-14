# English Avatar Course - TODO

## Projeto Overview
Plataforma de curso de inglês (Básico e Médio) com 20 módulos focados em conversação do cotidiano, utilizando avatar realista e avaliação de pronúncia em tempo real.

## Backend & Database

- [x] Criar schema de banco de dados para módulos, lições, exercícios e progresso do aluno
- [x] Implementar API tRPC para gerenciar conteúdo do curso
- [ ] Integrar Amazon Transcribe para avaliação de pronúncia
- [ ] Implementar funções Lambda para processamento de áudio e geração de feedback
- [ ] Configurar integração com serviço de geração de avatar (D-ID ou similar)
- [x] Implementar sistema de rastreamento de progresso do aluno

## Frontend - Estrutura Base

- [x] Criar layout principal da plataforma (navegação, sidebar)
- [x] Implementar sistema de autenticação (login/logout)
- [x] Criar página de dashboard do aluno
- [x] Implementar navegação entre módulos

## Nível Básico (Módulos 1-10)

- [ ] Módulo 1: Primeiros Passos (Saudações e Apresentações)
- [ ] Módulo 2: Meu Mundo (Descrições Pessoais)
- [ ] Módulo 3: Rotina Diária
- [ ] Módulo 4: Na Cidade (Direções)
- [ ] Módulo 5: Comida e Restaurantes (Básico)
- [ ] Módulo 6: Compras e Preços
- [ ] Módulo 7: Passado Simples
- [ ] Módulo 8: Viagem (Básico)
- [ ] Módulo 9: Saúde e Sentimentos
- [ ] Módulo 10: Revisão e Planejamento

## Nível Médio (Módulos 11-20)

- [ ] Módulo 11: Viagens Internacionais (Avançado)
- [ ] Módulo 12: Aluguel de Carros e Transporte
- [ ] Módulo 13: Restaurantes e Culinária (Avançado)
- [ ] Módulo 14: Vida Profissional
- [ ] Módulo 15: Opiniões e Argumentos
- [ ] Módulo 16: Tecnologia e Mídia
- [ ] Módulo 17: Emergências e Imprevistos
- [ ] Módulo 18: Cultura e Entretenimento
- [ ] Módulo 19: Habilidades e Possibilidades
- [ ] Módulo 20: Revisão e Transição

## Funcionalidades de Aprendizado

- [ ] Implementar player de vídeo com avatar
- [ ] Criar interface de gravação de áudio do aluno
- [ ] Implementar feedback visual de pronúncia (correto/incorreto)
- [ ] Criar sistema de repetição até acerto
- [ ] Implementar exercícios interativos por módulo

## Testes e Validação

- [ ] Testar fluxo de autenticação
- [ ] Testar gravação e processamento de áudio
- [ ] Testar avaliação de pronúncia
- [ ] Testar navegação entre módulos
- [ ] Testar rastreamento de progresso

## Deployment

- [ ] Preparar ambiente de produção
- [ ] Configurar variáveis de ambiente
- [ ] Testar deploy na AWS Amplify
- [ ] Validar hospedagem e CI/CD


## Design & Identidade Visual (WIMEX-UP)

- [x] Gerar logo do WIMEX-UP
- [x] Criar página principal (Home) com design atrativo
- [x] Implementar paleta de cores e tipografia
- [x] Criar fundo e elementos visuais
- [x] Adicionar call-to-action na página principal
- [x] Criar componentes visuais reutilizáveis
- [x] Atualizar Dashboard com tema escuro
- [ ] Atualizar favicon com o logo do WIMEX-UP (via Management Dashboard)

## Scripts e Documentação

- [x] Criar script de seed para popular banco de dados
- [x] Criar README completo do WIMEX-UP
- [x] Criar Guia de Deployment
- [x] Adicionar script seed ao package.json


## Inscrição e Pagamento

- [x] Criar componente de formulário de inscrição
- [x] Adicionar banner de lançamento com promoção 50%
- [x] Implementar seção de opções de pagamento
- [x] Criar componente de FAQ
- [x] Adicionar ícones de suporte (chat, email, WhatsApp)
- [ ] Integrar com sistema de pagamento (Stripe/PagSeguro)
- [ ] Criar página de confirmação de inscrição
