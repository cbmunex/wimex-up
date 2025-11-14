# 🌍 WIMEX-UP - Plataforma de Aprendizado de Inglês com Avatar

**WIMEX-UP** é uma plataforma inovadora de ensino de inglês que utiliza um professor avatar realista para ensinar situações práticas do dia a dia. Aprenda inglês de forma interativa, com avaliação de pronúncia em tempo real e sem necessidade de um professor humano.

## 🎯 Visão Geral

WIMEX-UP foi desenvolvido para pessoas que têm dificuldade em situações cotidianas como:

- ✈️ **Aeroportos** - Check-in, imigração, bagagem
- 🍽️ **Restaurantes** - Pedir comida, fazer reclamações
- 🚗 **Aluguel de Carros** - Entender termos, negociar
- 💬 **Conversas Informais** - Fazer amigos, socializar
- 🎬 **Filmes e Entretenimento** - Entender diálogos
- 📅 **Dia a Dia** - Compras, direções, saúde

## 📚 Estrutura do Curso

O curso é dividido em **20 módulos** organizados em 2 níveis:

### Nível Básico (Módulos 1-10)
Construa uma base sólida com vocabulário essencial e estruturas gramaticais simples.

1. **Primeiros Passos** - Saudações e apresentações
2. **Meu Mundo** - Descrições de pessoas e objetos
3. **Rotina Diária** - Hábitos e atividades
4. **Na Cidade** - Direções e locais públicos
5. **Comida e Restaurantes (Básico)** - Pedir comida
6. **Compras e Preços** - Transações comerciais
7. **Passado Simples** - Eventos passados
8. **Viagem (Básico)** - Hospedagem e transporte
9. **Saúde e Sentimentos** - Bem-estar e emoções
10. **Revisão e Planejamento** - Consolidação

### Nível Intermediário (Módulos 11-20)
Aprofunde em estruturas gramaticais complexas e conversas avançadas.

11. **Viagens Internacionais (Avançado)** - Aeroporto e imigração
12. **Aluguel de Carros e Transporte** - Negociações
13. **Restaurantes e Culinária (Avançado)** - Experiências gastronômicas
14. **Vida Profissional** - Contexto de trabalho
15. **Opiniões e Argumentos** - Discussão e debate
16. **Tecnologia e Mídia** - Comunicação digital
17. **Emergências e Imprevistos** - Situações urgentes
18. **Cultura e Entretenimento** - Lazer e diversão
19. **Habilidades e Possibilidades** - Perspectivas futuras
20. **Revisão e Transição** - Consolidação avançada

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ e pnpm
- Banco de dados MySQL/TiDB
- Navegador moderno com suporte a WebRTC (para gravação de áudio)

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/wimex-up.git
   cd wimex-up
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   # Edite .env.local com suas credenciais
   ```

4. **Execute as migrações do banco de dados**
   ```bash
   pnpm db:push
   ```

5. **Popule o banco de dados com os módulos**
   ```bash
   node scripts/seed-course-data.mjs
   ```

6. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

7. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 🎨 Design e Identidade Visual

### Paleta de Cores WIMEX-UP

- **Azul Profundo**: `#001a4d` - Confiança e profissionalismo
- **Teal/Ciano**: `#0099cc` - Inovação e tecnologia
- **Laranja**: `#ff6b35` - Energia e entusiasmo
- **Branco**: `#ffffff` - Clareza e limpidez

### Logo

O logo do WIMEX-UP combina:
- 🌐 Um globo representando alcance global
- ⬆️ Uma seta para cima simbolizando crescimento
- 📱 Elementos modernos e geométricos

## 🎓 Funcionalidades Principais

### 1. **Dashboard Interativo**
- Visualize seu progresso em cada módulo
- Navegue facilmente entre níveis básico e intermediário
- Acompanhe seu desempenho

### 2. **Módulos Estruturados**
- Cada módulo contém múltiplas lições
- Cada lição tem exercícios práticos
- Conteúdo focado em situações reais

### 3. **Exercícios de Pronúncia**
- Grave sua voz e receba feedback instantâneo
- O avatar professor avalia sua pronúncia
- Pratique até acertar antes de prosseguir

### 4. **Professor Avatar Realista**
- Avatar que fala o conteúdo das lições
- Demonstra pronúncia correta
- Fornece feedback personalizado

### 5. **Rastreamento de Progresso**
- Veja quantos módulos você completou
- Acompanhe seu desempenho em exercícios
- Receba recomendações personalizadas

## 🔧 Arquitetura Técnica

### Stack Tecnológico

**Frontend:**
- React 19 com TypeScript
- Tailwind CSS 4 para styling
- tRPC para comunicação com backend
- Wouter para roteamento

**Backend:**
- Express.js
- tRPC para API type-safe
- Drizzle ORM para banco de dados

**Banco de Dados:**
- MySQL/TiDB
- Migrações automáticas com Drizzle

**Hospedagem:**
- AWS Amplify para deployment
- S3 para armazenamento de mídia
- Lambda para processamento de áudio

## 📱 Estrutura de Pastas

```
wimex-up/
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Dashboard.tsx       # Dashboard do aluno
│   │   │   ├── Module.tsx          # Página de módulo
│   │   │   └── Lesson.tsx          # Página de lição
│   │   ├── components/             # Componentes reutilizáveis
│   │   ├── lib/trpc.ts            # Configuração tRPC
│   │   └── App.tsx                # Roteamento
│   └── public/                     # Ativos estáticos
│       ├── wimex-up-logo.png      # Logo
│       ├── hero-background.png    # Fundo hero
│       └── course-content/        # Conteúdo do curso
├── server/                          # Backend Express
│   ├── routers.ts                  # Procedimentos tRPC
│   ├── db.ts                       # Funções de banco de dados
│   └── storage.ts                  # Integração com S3
├── drizzle/                         # Schema e migrações
│   └── schema.ts                   # Definição das tabelas
├── scripts/                         # Scripts utilitários
│   └── seed-course-data.mjs       # Popular banco de dados
└── README_WIMEX_UP.md             # Este arquivo
```

## 🌐 Deployment na AWS Amplify

### Passo 1: Preparar o Repositório Git
```bash
git init
git add .
git commit -m "Initial commit: WIMEX-UP"
git remote add origin https://github.com/seu-usuario/wimex-up.git
git push -u origin main
```

### Passo 2: Conectar ao AWS Amplify
1. Acesse [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Clique em "Create app" → "Host web app"
3. Selecione seu repositório GitHub
4. Configure as variáveis de ambiente
5. Clique em "Save and deploy"

### Passo 3: Configurar Variáveis de Ambiente
No console do Amplify, adicione:

| Variável | Valor |
| --- | --- |
| `DATABASE_URL` | Sua string de conexão MySQL |
| `JWT_SECRET` | Chave aleatória segura |
| `VITE_APP_TITLE` | WIMEX-UP |
| `NODE_ENV` | production |

## 🎯 Próximos Passos

1. **Integrar Amazon Transcribe** para avaliação automática de pronúncia
2. **Adicionar Serviço de Avatar** (D-ID ou Synthesia)
3. **Implementar Gamificação** com pontos e badges
4. **Adicionar Comunidade** para alunos compartilharem progresso
5. **Criar App Mobile** com React Native

## 📞 Suporte

Para dúvidas, sugestões ou reportar bugs, entre em contato através de:
- Email: support@wimex-up.com
- GitHub Issues: [Reportar um problema](https://github.com/seu-usuario/wimex-up/issues)

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

---

**Desenvolvido com ❤️ para ajudar você a falar inglês com confiança.**
