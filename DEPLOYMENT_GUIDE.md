# English Avatar Course - Guia de Deployment no AWS Amplify

Este projeto é uma plataforma de curso de inglês (Básico e Intermediário) com 20 módulos, construída com AWS Amplify, React, Express e tRPC.

## Pré-requisitos

Antes de fazer o deployment, certifique-se de que você tem:

1. **Conta AWS** com acesso ao AWS Amplify
2. **Git** instalado e configurado
3. **Node.js** (versão 18+) e **pnpm** instalados
4. **Repositório GitHub** (ou GitLab/Bitbucket) para o projeto

## Estrutura do Projeto

```
english-avatar-course/
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Dashboard.tsx       # Dashboard do aluno
│   │   │   ├── Module.tsx          # Página de módulo
│   │   │   ├── Lesson.tsx          # Página de lição com exercícios
│   │   │   └── ...
│   │   ├── components/             # Componentes reutilizáveis
│   │   ├── lib/trpc.ts            # Configuração tRPC
│   │   └── App.tsx                # Roteamento principal
│   ├── public/                     # Ativos estáticos
│   │   └── course-content/
│   │       ├── modules/            # Estrutura JSON dos módulos
│   │       ├── avatars/            # Vídeos dos avatares
│   │       └── audio/              # Arquivos de áudio
│   └── package.json
├── server/                          # Backend Express + tRPC
│   ├── routers.ts                  # Procedimentos tRPC
│   ├── db.ts                       # Funções de banco de dados
│   ├── storage.ts                  # Integração com S3
│   └── _core/                      # Plumbing do framework
├── drizzle/                         # Schema e migrações do banco de dados
│   ├── schema.ts                   # Definição das tabelas
│   └── migrations/                 # Histórico de migrações
├── shared/                          # Código compartilhado
├── package.json
├── tsconfig.json
├── vite.config.ts
└── amplify.yml                      # Configuração de build para Amplify
```

## Passo 1: Preparar o Repositório Git

1. **Inicializar Git** (se ainda não estiver):
   ```bash
   cd english-avatar-course
   git init
   git add .
   git commit -m "Initial commit: English Avatar Course setup"
   ```

2. **Fazer push para um repositório remoto**:
   ```bash
   git remote add origin https://github.com/seu-usuario/english-avatar-course.git
   git branch -M main
   git push -u origin main
   ```

## Passo 2: Configurar o AWS Amplify

### Opção A: Via Console AWS (Recomendado para Iniciantes)

1. **Acesse o AWS Amplify Console**:
   - Vá para [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Clique em "Create app" → "Host web app"

2. **Conecte seu Repositório Git**:
   - Selecione seu provedor (GitHub, GitLab, Bitbucket)
   - Autorize o Amplify a acessar seu repositório
   - Selecione o repositório `english-avatar-course`
   - Selecione a branch `main`

3. **Configure as Configurações de Build**:
   - O Amplify detectará automaticamente que é um projeto Node.js
   - Verifique se o arquivo `amplify.yml` está presente (já incluído neste projeto)
   - Configure as variáveis de ambiente necessárias (veja Passo 3)

4. **Implante**:
   - Clique em "Save and deploy"
   - Aguarde o build completar (geralmente 5-10 minutos)

### Opção B: Via AWS Amplify CLI

1. **Instale a CLI do Amplify**:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configure a CLI**:
   ```bash
   amplify configure
   ```

3. **Inicialize o Amplify no projeto**:
   ```bash
   amplify init
   ```

4. **Adicione hospedagem**:
   ```bash
   amplify add hosting
   ```

5. **Implante**:
   ```bash
   amplify publish
   ```

## Passo 3: Configurar Variáveis de Ambiente

No console do AWS Amplify, vá para **App settings** → **Environment variables** e adicione:

| Variável | Valor | Descrição |
| :--- | :--- | :--- |
| `DATABASE_URL` | `mysql://user:password@host:port/database` | String de conexão do banco de dados MySQL/TiDB |
| `JWT_SECRET` | Gere uma chave aleatória segura | Chave para assinar cookies de sessão |
| `VITE_APP_TITLE` | `English Avatar Course` | Título da aplicação |
| `VITE_APP_LOGO` | URL do logo | Logo da aplicação |
| `NODE_ENV` | `production` | Ambiente de execução |

**Nota**: As variáveis de OAuth (`VITE_APP_ID`, `OAUTH_SERVER_URL`, etc.) são fornecidas automaticamente pelo Manus.

## Passo 4: Configurar o Banco de Dados

### Opção A: Amazon RDS (MySQL)

1. **Crie uma instância RDS**:
   - Vá para [Amazon RDS Console](https://console.aws.amazon.com/rds/)
   - Clique em "Create database"
   - Selecione **MySQL** como mecanismo
   - Configure o tamanho (db.t3.micro é suficiente para começar)
   - Anote as credenciais (usuário, senha, host, porta)

2. **Crie um banco de dados**:
   ```bash
   mysql -h seu-rds-host -u admin -p
   CREATE DATABASE english_avatar_course;
   ```

3. **Atualize a variável de ambiente `DATABASE_URL`** com as credenciais do RDS.

### Opção B: PlanetScale (MySQL serverless)

1. **Crie uma conta em [PlanetScale](https://planetscale.com/)**
2. **Crie um novo banco de dados**
3. **Obtenha a string de conexão** e configure como `DATABASE_URL`

## Passo 5: Executar Migrações do Banco de Dados

Após configurar o banco de dados, execute as migrações:

```bash
# Localmente (antes de fazer push)
pnpm db:push

# Ou via console do Amplify, execute um build com:
npm run build
```

## Passo 6: Adicionar Conteúdo do Curso (Módulos e Lições)

O projeto já inclui a estrutura JSON dos 20 módulos em `public/course-content/modules/course-structure.json`. Para adicionar o conteúdo real:

1. **Adicione as lições e exercícios ao banco de dados** via API ou script de seed:
   ```bash
   # Exemplo: criar um script de seed
   node scripts/seed-course-data.mjs
   ```

2. **Adicione os vídeos dos avatares** ao Amazon S3:
   - Gere os vídeos usando o serviço de avatar (D-ID, Synthesia, etc.)
   - Faça upload para S3
   - Atualize as URLs no banco de dados

3. **Adicione os arquivos de áudio** (pronúncia de referência) ao S3

## Passo 7: Testar a Aplicação

1. **Acesse a URL do Amplify**:
   - Após o deployment bem-sucedido, o Amplify fornecerá uma URL pública
   - Exemplo: `https://main.xxxxx.amplifyapp.com`

2. **Teste as funcionalidades**:
   - Faça login com suas credenciais
   - Navegue pelos módulos e lições
   - Teste a gravação de áudio (requer permissão de microfone)

## Passo 8: Configurar Domínio Customizado (Opcional)

1. **No console do Amplify**, vá para **Domain management**
2. **Adicione um domínio customizado** (ex: `english-avatar-course.com`)
3. **Configure os registros DNS** conforme instruído pelo Amplify

## Troubleshooting

### Build falha com erro de banco de dados
- Verifique se a variável `DATABASE_URL` está corretamente configurada
- Certifique-se de que o banco de dados está acessível da AWS (verificar security groups)

### Aplicação carrega mas mostra erro de autenticação
- Verifique se as variáveis de OAuth estão configuradas
- Verifique se o callback URL está correto nas configurações de OAuth

### Vídeos/áudio não carregam
- Verifique se os arquivos estão no S3 e as URLs estão corretas
- Verifique as permissões de acesso do S3 (devem ser públicas ou com presigned URLs)

## Próximos Passos

1. **Integrar Serviço de Avatar**: Configure a integração com D-ID ou Synthesia para gerar vídeos de avatar
2. **Integrar Amazon Transcribe**: Configure a avaliação de pronúncia em tempo real
3. **Adicionar Conteúdo**: Popule o banco de dados com os 20 módulos completos
4. **Otimizar Performance**: Configure CDN, caching e otimizações de imagem
5. **Monitorar**: Configure logs e alertas no CloudWatch

## Referências

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [AWS RDS Documentation](https://docs.aws.amazon.com/rds/)
- [tRPC Documentation](https://trpc.io/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)

---

**Dúvidas?** Consulte a documentação oficial do AWS Amplify ou entre em contato com o suporte.
