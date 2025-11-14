import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { modules } from "../drizzle/schema.ts";

const basicModulesData = [
  {
    title: "Primeiros Passos",
    description: "Saudações, apresentações e informações pessoais básicas",
    level: "basic",
    moduleNumber: 1,
    order: 1,
  },
  {
    title: "Meu Mundo",
    description: "Descrever pessoas, objetos e lugares próximos",
    level: "basic",
    moduleNumber: 2,
    order: 2,
  },
  {
    title: "Rotina Diária",
    description: "Falar sobre hábitos e atividades do dia a dia",
    level: "basic",
    moduleNumber: 3,
    order: 3,
  },
  {
    title: "Na Cidade",
    description: "Pedir e dar direções simples. Identificar locais comuns",
    level: "basic",
    moduleNumber: 4,
    order: 4,
  },
  {
    title: "Comida e Restaurantes (Básico)",
    description: "Pedir comida e bebida em um restaurante simples",
    level: "basic",
    moduleNumber: 5,
    order: 5,
  },
  {
    title: "Compras e Preços",
    description: "Perguntar o preço, comprar itens e falar sobre dinheiro",
    level: "basic",
    moduleNumber: 6,
    order: 6,
  },
  {
    title: "Passado Simples",
    description: "Falar sobre eventos que aconteceram ontem ou na semana passada",
    level: "basic",
    moduleNumber: 7,
    order: 7,
  },
  {
    title: "Viagem (Básico)",
    description: "Fazer check-in em hotel e perguntar sobre horários de transporte",
    level: "basic",
    moduleNumber: 8,
    order: 8,
  },
  {
    title: "Saúde e Sentimentos",
    description: "Descrever como se sente e falar sobre problemas de saúde simples",
    level: "basic",
    moduleNumber: 9,
    order: 9,
  },
  {
    title: "Revisão e Planejamento",
    description: "Revisão das estruturas básicas e planejamento de atividades futuras",
    level: "basic",
    moduleNumber: 10,
    order: 10,
  },
];

const intermediateModulesData = [
  {
    title: "Viagens Internacionais (Avançado)",
    description: "Check-in em aeroporto, alfândega, conversas com agentes de imigração",
    level: "intermediate",
    moduleNumber: 11,
    order: 11,
  },
  {
    title: "Aluguel de Carros e Transporte",
    description: "Alugar um carro, entender termos de seguro, pedir informações sobre rotas",
    level: "intermediate",
    moduleNumber: 12,
    order: 12,
  },
  {
    title: "Restaurantes e Culinária (Avançado)",
    description: "Reservar mesa, entender o menu, expressar satisfação/insatisfação",
    level: "intermediate",
    moduleNumber: 13,
    order: 13,
  },
  {
    title: "Vida Profissional",
    description: "Falar sobre o trabalho, descrever responsabilidades e participar de reuniões",
    level: "intermediate",
    moduleNumber: 14,
    order: 14,
  },
  {
    title: "Opiniões e Argumentos",
    description: "Expressar opiniões, concordar e discordar de forma educada",
    level: "intermediate",
    moduleNumber: 15,
    order: 15,
  },
  {
    title: "Tecnologia e Mídia",
    description: "Discutir notícias, redes sociais e problemas técnicos",
    level: "intermediate",
    moduleNumber: 16,
    order: 16,
  },
  {
    title: "Emergências e Imprevistos",
    description: "Relatar um problema, pedir ajuda em situações de emergência",
    level: "intermediate",
    moduleNumber: 17,
    order: 17,
  },
  {
    title: "Cultura e Entretenimento",
    description: "Falar sobre filmes, livros, música e planejar atividades de lazer",
    level: "intermediate",
    moduleNumber: 18,
    order: 18,
  },
  {
    title: "Habilidades e Possibilidades",
    description: "Falar sobre habilidades adquiridas e possibilidades futuras",
    level: "intermediate",
    moduleNumber: 19,
    order: 19,
  },
  {
    title: "Revisão e Transição",
    description: "Revisão geral do Nível Intermediário e preparação para o Nível Avançado",
    level: "intermediate",
    moduleNumber: 20,
    order: 20,
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Iniciando seed do banco de dados...");

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(connection);

    // Insert basic modules
    console.log("📚 Inserindo módulos básicos...");
    for (const moduleData of basicModulesData) {
      await db.insert(modules).values({
        title: moduleData.title,
        description: moduleData.description,
        level: moduleData.level,
        moduleNumber: moduleData.moduleNumber,
        order: moduleData.order,
      });
    }

    // Insert intermediate modules
    console.log("📚 Inserindo módulos intermediários...");
    for (const moduleData of intermediateModulesData) {
      await db.insert(modules).values({
        title: moduleData.title,
        description: moduleData.description,
        level: moduleData.level,
        moduleNumber: moduleData.moduleNumber,
        order: moduleData.order,
      });
    }

    console.log("✅ Seed concluído com sucesso!");
    console.log("📊 20 módulos foram inseridos no banco de dados");
    
    await connection.end();
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    process.exit(1);
  }
}

seedDatabase();
