import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { modules, lessons, exercises } from "../drizzle/schema.ts";

const basicModulesData = [
  {
    title: "Primeiros Passos",
    description: "Saudações, apresentações e informações pessoais básicas",
    level: "basic",
    moduleNumber: 1,
    order: 1,
    lessons: [
      {
        title: "Hello! Conhecendo Saudações",
        description: "Aprenda as saudações básicas em inglês",
        content: "<h2>Saudações Básicas</h2><p><strong>Hello</strong> - Olá</p><p><strong>Hi</strong> - Oi</p><p><strong>Good morning</strong> - Bom dia</p><p><strong>Good afternoon</strong> - Boa tarde</p><p><strong>Good evening</strong> - Boa noite</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Hello", description: "Grave sua voz dizendo 'Hello'", type: "pronunciation", correctAnswer: "hello", order: 1 },
          { title: "Pronunciar: Good morning", description: "Grave sua voz dizendo 'Good morning'", type: "pronunciation", correctAnswer: "good morning", order: 2 },
        ],
      },
      {
        title: "My Name Is...",
        description: "Apresente-se em inglês",
        content: "<h2>Apresentações Pessoais</h2><p><strong>My name is...</strong> - Meu nome é...</p><p><strong>I'm...</strong> - Eu sou...</p><p><strong>What's your name?</strong> - Qual é seu nome?</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: My name is", description: "Grave sua voz", type: "pronunciation", correctAnswer: "my name is", order: 1 },
        ],
      },
      {
        title: "Nice to Meet You",
        description: "Cumprimentos e apresentações formais",
        content: "<h2>Cumprimentos Formais</h2><p><strong>Nice to meet you</strong> - Prazer em conhecê-lo</p><p><strong>How are you?</strong> - Como você está?</p><p><strong>I'm fine, thank you</strong> - Estou bem, obrigado</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Nice to meet you", description: "Grave sua voz", type: "pronunciation", correctAnswer: "nice to meet you", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Meu Mundo",
    description: "Descrever pessoas, objetos e lugares próximos",
    level: "basic",
    moduleNumber: 2,
    order: 2,
    lessons: [
      {
        title: "Descrevendo Pessoas",
        description: "Vocabulário para descrever pessoas",
        content: "<h2>Descrições de Pessoas</h2><p><strong>Tall</strong> - Alto</p><p><strong>Short</strong> - Baixo</p><p><strong>Beautiful</strong> - Bonito</p><p><strong>Handsome</strong> - Bonito (homem)</p><p><strong>Young</strong> - Jovem</p><p><strong>Old</strong> - Velho</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Beautiful", description: "Grave sua voz", type: "pronunciation", correctAnswer: "beautiful", order: 1 },
        ],
      },
      {
        title: "Cores e Objetos",
        description: "Aprenda cores e nomes de objetos",
        content: "<h2>Cores Principais</h2><p><strong>Red</strong> - Vermelho</p><p><strong>Blue</strong> - Azul</p><p><strong>Green</strong> - Verde</p><p><strong>Yellow</strong> - Amarelo</p><p><strong>Black</strong> - Preto</p><p><strong>White</strong> - Branco</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Red", description: "Grave sua voz", type: "pronunciation", correctAnswer: "red", order: 1 },
        ],
      },
      {
        title: "Lugares e Locais",
        description: "Vocabulário de lugares comuns",
        content: "<h2>Lugares Comuns</h2><p><strong>House</strong> - Casa</p><p><strong>School</strong> - Escola</p><p><strong>Park</strong> - Parque</p><p><strong>Hospital</strong> - Hospital</p><p><strong>Bank</strong> - Banco</p><p><strong>Restaurant</strong> - Restaurante</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: House", description: "Grave sua voz", type: "pronunciation", correctAnswer: "house", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Rotina Diária",
    description: "Falar sobre hábitos e atividades do dia a dia",
    level: "basic",
    moduleNumber: 3,
    order: 3,
    lessons: [
      {
        title: "Atividades Matinais",
        description: "Rotina da manhã em inglês",
        content: "<h2>Atividades da Manhã</h2><p><strong>Wake up</strong> - Acordar</p><p><strong>Take a shower</strong> - Tomar banho</p><p><strong>Get dressed</strong> - Se vestir</p><p><strong>Have breakfast</strong> - Tomar café da manhã</p><p><strong>Go to work</strong> - Ir para o trabalho</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Wake up", description: "Grave sua voz", type: "pronunciation", correctAnswer: "wake up", order: 1 },
        ],
      },
      {
        title: "Atividades Diárias",
        description: "Atividades durante o dia",
        content: "<h2>Durante o Dia</h2><p><strong>Work</strong> - Trabalhar</p><p><strong>Have lunch</strong> - Almoçar</p><p><strong>Study</strong> - Estudar</p><p><strong>Play</strong> - Brincar</p><p><strong>Exercise</strong> - Se exercitar</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Work", description: "Grave sua voz", type: "pronunciation", correctAnswer: "work", order: 1 },
        ],
      },
      {
        title: "Atividades Noturnas",
        description: "Rotina da noite",
        content: "<h2>À Noite</h2><p><strong>Have dinner</strong> - Jantar</p><p><strong>Watch TV</strong> - Assistir TV</p><p><strong>Read</strong> - Ler</p><p><strong>Sleep</strong> - Dormir</p><p><strong>Go to bed</strong> - Ir para a cama</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Sleep", description: "Grave sua voz", type: "pronunciation", correctAnswer: "sleep", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Na Cidade",
    description: "Pedir e dar direções simples. Identificar locais comuns",
    level: "basic",
    moduleNumber: 4,
    order: 4,
    lessons: [
      {
        title: "Pedindo Direções",
        description: "Como pedir direções em inglês",
        content: "<h2>Pedindo Direções</h2><p><strong>Where is...?</strong> - Onde fica...?</p><p><strong>How do I get to...?</strong> - Como chego a...?</p><p><strong>Can you help me?</strong> - Você pode me ajudar?</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Where is", description: "Grave sua voz", type: "pronunciation", correctAnswer: "where is", order: 1 },
        ],
      },
      {
        title: "Dando Direções",
        description: "Como dar direções",
        content: "<h2>Dando Direções</h2><p><strong>Turn left</strong> - Vire à esquerda</p><p><strong>Turn right</strong> - Vire à direita</p><p><strong>Go straight</strong> - Siga em frente</p><p><strong>It's near here</strong> - Fica perto daqui</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Turn left", description: "Grave sua voz", type: "pronunciation", correctAnswer: "turn left", order: 1 },
        ],
      },
      {
        title: "Preposições de Lugar",
        description: "Palavras para descrever posição",
        content: "<h2>Preposições de Lugar</h2><p><strong>In front of</strong> - Na frente de</p><p><strong>Behind</strong> - Atrás de</p><p><strong>Next to</strong> - Ao lado de</p><p><strong>Between</strong> - Entre</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Next to", description: "Grave sua voz", type: "pronunciation", correctAnswer: "next to", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Comida e Restaurantes (Básico)",
    description: "Pedir comida e bebida em um restaurante simples",
    level: "basic",
    moduleNumber: 5,
    order: 5,
    lessons: [
      {
        title: "Alimentos Básicos",
        description: "Vocabulário de comida",
        content: "<h2>Alimentos</h2><p><strong>Apple</strong> - Maçã</p><p><strong>Bread</strong> - Pão</p><p><strong>Chicken</strong> - Frango</p><p><strong>Rice</strong> - Arroz</p><p><strong>Water</strong> - Água</p><p><strong>Coffee</strong> - Café</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Apple", description: "Grave sua voz", type: "pronunciation", correctAnswer: "apple", order: 1 },
        ],
      },
      {
        title: "No Restaurante",
        description: "Frases úteis em restaurante",
        content: "<h2>No Restaurante</h2><p><strong>I would like...</strong> - Eu gostaria de...</p><p><strong>Can I have...?</strong> - Posso ter...?</p><p><strong>The bill, please</strong> - A conta, por favor</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I would like", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i would like", order: 1 },
        ],
      },
      {
        title: "Bebidas e Sobremesas",
        description: "Bebidas e doces",
        content: "<h2>Bebidas e Sobremesas</h2><p><strong>Juice</strong> - Suco</p><p><strong>Tea</strong> - Chá</p><p><strong>Cake</strong> - Bolo</p><p><strong>Ice cream</strong> - Sorvete</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Juice", description: "Grave sua voz", type: "pronunciation", correctAnswer: "juice", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Compras e Preços",
    description: "Perguntar o preço, comprar itens e falar sobre dinheiro",
    level: "basic",
    moduleNumber: 6,
    order: 6,
    lessons: [
      {
        title: "Perguntando Preços",
        description: "Como perguntar o preço",
        content: "<h2>Perguntando Preços</h2><p><strong>How much is this?</strong> - Quanto custa isso?</p><p><strong>What's the price?</strong> - Qual é o preço?</p><p><strong>Do you have a discount?</strong> - Você tem desconto?</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: How much is this", description: "Grave sua voz", type: "pronunciation", correctAnswer: "how much is this", order: 1 },
        ],
      },
      {
        title: "Números e Dinheiro",
        description: "Números e moedas",
        content: "<h2>Números (1-100)</h2><p><strong>One</strong> - Um</p><p><strong>Ten</strong> - Dez</p><p><strong>One hundred</strong> - Cem</p><p><strong>Dollar</strong> - Dólar</p><p><strong>Money</strong> - Dinheiro</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Dollar", description: "Grave sua voz", type: "pronunciation", correctAnswer: "dollar", order: 1 },
        ],
      },
      {
        title: "Pagamento",
        description: "Formas de pagamento",
        content: "<h2>Pagamento</h2><p><strong>Cash</strong> - Dinheiro</p><p><strong>Credit card</strong> - Cartão de crédito</p><p><strong>Can I pay with card?</strong> - Posso pagar com cartão?</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Credit card", description: "Grave sua voz", type: "pronunciation", correctAnswer: "credit card", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Passado Simples",
    description: "Falar sobre eventos que aconteceram ontem ou na semana passada",
    level: "basic",
    moduleNumber: 7,
    order: 7,
    lessons: [
      {
        title: "Verbos Regulares no Passado",
        description: "Verbos terminados em -ed",
        content: "<h2>Passado Simples - Regulares</h2><p><strong>Walked</strong> - Caminhei</p><p><strong>Played</strong> - Joguei</p><p><strong>Watched</strong> - Assisti</p><p><strong>Worked</strong> - Trabalhei</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Walked", description: "Grave sua voz", type: "pronunciation", correctAnswer: "walked", order: 1 },
        ],
      },
      {
        title: "Verbos Irregulares",
        description: "Verbos que mudam no passado",
        content: "<h2>Verbos Irregulares</h2><p><strong>Was</strong> - Era/Estava</p><p><strong>Went</strong> - Fui</p><p><strong>Saw</strong> - Vi</p><p><strong>Had</strong> - Tive</p><p><strong>Did</strong> - Fiz</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Went", description: "Grave sua voz", type: "pronunciation", correctAnswer: "went", order: 1 },
        ],
      },
      {
        title: "Expressões de Tempo",
        description: "Quando algo aconteceu",
        content: "<h2>Expressões de Tempo</h2><p><strong>Yesterday</strong> - Ontem</p><p><strong>Last week</strong> - Semana passada</p><p><strong>Last month</strong> - Mês passado</p><p><strong>Two days ago</strong> - Dois dias atrás</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Yesterday", description: "Grave sua voz", type: "pronunciation", correctAnswer: "yesterday", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Viagem (Básico)",
    description: "Fazer check-in em hotel e perguntar sobre horários de transporte",
    level: "basic",
    moduleNumber: 8,
    order: 8,
    lessons: [
      {
        title: "No Hotel",
        description: "Frases úteis em hotel",
        content: "<h2>No Hotel</h2><p><strong>I have a reservation</strong> - Tenho uma reserva</p><p><strong>What time is checkout?</strong> - Que horas é o checkout?</p><p><strong>Can I have a room?</strong> - Posso ter um quarto?</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: I have a reservation", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i have a reservation", order: 1 },
        ],
      },
      {
        title: "Transporte",
        description: "Meios de transporte",
        content: "<h2>Transporte</h2><p><strong>Bus</strong> - Ônibus</p><p><strong>Train</strong> - Trem</p><p><strong>Taxi</strong> - Táxi</p><p><strong>Flight</strong> - Voo</p><p><strong>When does the bus leave?</strong> - Quando o ônibus sai?</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Bus", description: "Grave sua voz", type: "pronunciation", correctAnswer: "bus", order: 1 },
        ],
      },
      {
        title: "Planejando uma Viagem",
        description: "Conversas sobre viagem",
        content: "<h2>Planejando Viagem</h2><p><strong>Where are you going?</strong> - Para onde você vai?</p><p><strong>How long will you stay?</strong> - Quanto tempo você vai ficar?</p><p><strong>Have a nice trip!</strong> - Tenha uma boa viagem!</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Where are you going", description: "Grave sua voz", type: "pronunciation", correctAnswer: "where are you going", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Saúde e Sentimentos",
    description: "Descrever como se sente e falar sobre problemas de saúde simples",
    level: "basic",
    moduleNumber: 9,
    order: 9,
    lessons: [
      {
        title: "Como Você Se Sente?",
        description: "Expressões de sentimentos",
        content: "<h2>Sentimentos</h2><p><strong>Happy</strong> - Feliz</p><p><strong>Sad</strong> - Triste</p><p><strong>Tired</strong> - Cansado</p><p><strong>Angry</strong> - Bravo</p><p><strong>Scared</strong> - Assustado</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Happy", description: "Grave sua voz", type: "pronunciation", correctAnswer: "happy", order: 1 },
        ],
      },
      {
        title: "Problemas de Saúde",
        description: "Descrever problemas de saúde",
        content: "<h2>Saúde</h2><p><strong>I have a headache</strong> - Tenho dor de cabeça</p><p><strong>I'm sick</strong> - Estou doente</p><p><strong>I have a cold</strong> - Tenho resfriado</p><p><strong>I need a doctor</strong> - Preciso de um médico</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I have a headache", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i have a headache", order: 1 },
        ],
      },
      {
        title: "Partes do Corpo",
        description: "Vocabulário do corpo",
        content: "<h2>Partes do Corpo</h2><p><strong>Head</strong> - Cabeça</p><p><strong>Hand</strong> - Mão</p><p><strong>Foot</strong> - Pé</p><p><strong>Arm</strong> - Braço</p><p><strong>Leg</strong> - Perna</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Head", description: "Grave sua voz", type: "pronunciation", correctAnswer: "head", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Revisão e Planejamento",
    description: "Revisão das estruturas básicas e planejamento de atividades futuras",
    level: "basic",
    moduleNumber: 10,
    order: 10,
    lessons: [
      {
        title: "Revisão do Básico",
        description: "Consolidação de tudo aprendido",
        content: "<h2>Revisão Geral</h2><p>Neste módulo, você revisará:</p><ul><li>Saudações e apresentações</li><li>Descrições básicas</li><li>Rotina diária</li><li>Direções</li><li>Restaurantes</li><li>Compras</li><li>Passado simples</li><li>Viagens</li><li>Saúde</li></ul>",
        order: 1,
        exercises: [
          { title: "Quiz de Revisão", description: "Teste seus conhecimentos", type: "multiple_choice", correctAnswer: "Correct", order: 1 },
        ],
      },
      {
        title: "Planejando o Futuro",
        description: "Falar sobre planos futuros",
        content: "<h2>Futuro Simples</h2><p><strong>I will go</strong> - Eu vou ir</p><p><strong>I'm going to study</strong> - Vou estudar</p><p><strong>Next week</strong> - Próxima semana</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I will go", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i will go", order: 1 },
        ],
      },
      {
        title: "Próximos Passos",
        description: "Preparação para o nível intermediário",
        content: "<h2>Parabéns!</h2><p>Você completou o nível básico! Agora está pronto para o nível intermediário onde aprenderá estruturas mais complexas e situações mais avançadas.</p>",
        order: 3,
        exercises: [
          { title: "Reflexão Final", description: "Como foi sua experiência?", type: "fill_blank", correctAnswer: "great", order: 1 },
        ],
      },
    ],
  },
];

const intermediateModulesData = [
  {
    title: "Viagens Internacionais (Avançado)",
    description: "Check-in em aeroporto, alfândega, conversas com agentes de imigração",
    level: "intermediate",
    moduleNumber: 11,
    order: 11,
    lessons: [
      {
        title: "No Aeroporto",
        description: "Vocabulário e frases do aeroporto",
        content: "<h2>Aeroporto</h2><p><strong>Check-in counter</strong> - Balcão de check-in</p><p><strong>Boarding pass</strong> - Cartão de embarque</p><p><strong>Gate</strong> - Portão</p><p><strong>Departure</strong> - Partida</p>",
        order: 1,
        exercises: [
          { title: "Diálogo: Check-in", description: "Pratique o diálogo de check-in", type: "pronunciation", correctAnswer: "i would like to check in", order: 1 },
        ],
      },
      {
        title: "Imigração e Alfândega",
        description: "Conversas com agentes de imigração",
        content: "<h2>Imigração</h2><p><strong>Passport</strong> - Passaporte</p><p><strong>Visa</strong> - Visto</p><p><strong>Purpose of visit</strong> - Motivo da visita</p><p><strong>How long will you stay?</strong> - Quanto tempo você vai ficar?</p>",
        order: 2,
        exercises: [
          { title: "Diálogo: Imigração", description: "Pratique com agente de imigração", type: "pronunciation", correctAnswer: "here is my passport", order: 1 },
        ],
      },
      {
        title: "Bagagem e Transporte",
        description: "Lidar com bagagem e transporte",
        content: "<h2>Bagagem</h2><p><strong>Luggage</strong> - Bagagem</p><p><strong>Carry-on</strong> - Bagagem de mão</p><p><strong>Checked baggage</strong> - Bagagem despachada</p><p><strong>Excess baggage</strong> - Bagagem excedente</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Luggage", description: "Grave sua voz", type: "pronunciation", correctAnswer: "luggage", order: 1 },
        ],
      },
    ],
  },
  // Adicione os outros 9 módulos intermediários aqui com estrutura similar
  {
    title: "Aluguel de Carros e Transporte",
    description: "Alugar um carro, entender termos de seguro, pedir informações sobre rotas",
    level: "intermediate",
    moduleNumber: 12,
    order: 12,
    lessons: [
      {
        title: "Alugando um Carro",
        description: "Processo de aluguel de carro",
        content: "<h2>Aluguel de Carro</h2><p><strong>I'd like to rent a car</strong> - Gostaria de alugar um carro</p><p><strong>What's the daily rate?</strong> - Qual é a taxa diária?</p><p><strong>Do you need a credit card?</strong> - Você precisa de cartão de crédito?</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: I'd like to rent a car", description: "Grave sua voz", type: "pronunciation", correctAnswer: "id like to rent a car", order: 1 },
        ],
      },
      {
        title: "Tipos de Carros",
        description: "Diferentes tipos de veículos",
        content: "<h2>Tipos de Carros</h2><p><strong>Sedan</strong> - Sedã</p><p><strong>SUV</strong> - SUV</p><p><strong>Compact car</strong> - Carro compacto</p><p><strong>Automatic</strong> - Automático</p><p><strong>Manual</strong> - Manual</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Sedan", description: "Grave sua voz", type: "pronunciation", correctAnswer: "sedan", order: 1 },
        ],
      },
      {
        title: "Seguro e Documentos",
        description: "Seguro e documentação",
        content: "<h2>Seguro e Documentos</h2><p><strong>Insurance</strong> - Seguro</p><p><strong>Driver's license</strong> - Carteira de motorista</p><p><strong>Damage waiver</strong> - Renúncia de danos</p><p><strong>Fuel policy</strong> - Política de combustível</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Insurance", description: "Grave sua voz", type: "pronunciation", correctAnswer: "insurance", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Restaurantes e Culinária (Avançado)",
    description: "Reservar mesa, entender o menu, expressar satisfação/insatisfação",
    level: "intermediate",
    moduleNumber: 13,
    order: 13,
    lessons: [
      {
        title: "Reservando uma Mesa",
        description: "Como fazer reserva em restaurante",
        content: "<h2>Reserva de Restaurante</h2><p><strong>I'd like to make a reservation</strong> - Gostaria de fazer uma reserva</p><p><strong>For how many people?</strong> - Para quantas pessoas?</p><p><strong>What time?</strong> - Que horas?</p>",
        order: 1,
        exercises: [
          { title: "Diálogo: Reserva", description: "Pratique fazendo reserva", type: "pronunciation", correctAnswer: "id like to make a reservation", order: 1 },
        ],
      },
      {
        title: "Entendendo o Menu",
        description: "Vocabulário de cardápio",
        content: "<h2>Menu</h2><p><strong>Appetizer</strong> - Entrada</p><p><strong>Main course</strong> - Prato principal</p><p><strong>Dessert</strong> - Sobremesa</p><p><strong>Beverage</strong> - Bebida</p><p><strong>Vegetarian</strong> - Vegetariano</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Appetizer", description: "Grave sua voz", type: "pronunciation", correctAnswer: "appetizer", order: 1 },
        ],
      },
      {
        title: "Feedback e Reclamações",
        description: "Expressar satisfação ou insatisfação",
        content: "<h2>Feedback</h2><p><strong>This is delicious</strong> - Isto é delicioso</p><p><strong>This is too salty</strong> - Isto é muito salgado</p><p><strong>Can I have a refund?</strong> - Posso ter um reembolso?</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: This is delicious", description: "Grave sua voz", type: "pronunciation", correctAnswer: "this is delicious", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Vida Profissional",
    description: "Falar sobre o trabalho, descrever responsabilidades e participar de reuniões",
    level: "intermediate",
    moduleNumber: 14,
    order: 14,
    lessons: [
      {
        title: "Falando Sobre Trabalho",
        description: "Conversas profissionais",
        content: "<h2>Trabalho</h2><p><strong>What do you do?</strong> - O que você faz?</p><p><strong>I'm an engineer</strong> - Sou engenheiro</p><p><strong>I work in IT</strong> - Trabalho em TI</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: I'm an engineer", description: "Grave sua voz", type: "pronunciation", correctAnswer: "im an engineer", order: 1 },
        ],
      },
      {
        title: "Responsabilidades",
        description: "Descrever tarefas e responsabilidades",
        content: "<h2>Responsabilidades</h2><p><strong>I manage a team</strong> - Gerencio um time</p><p><strong>I handle customer service</strong> - Cuido do atendimento ao cliente</p><p><strong>I develop software</strong> - Desenvolvo software</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I manage a team", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i manage a team", order: 1 },
        ],
      },
      {
        title: "Reuniões e Apresentações",
        description: "Linguagem de reuniões",
        content: "<h2>Reuniões</h2><p><strong>Let's start the meeting</strong> - Vamos começar a reunião</p><p><strong>Can you share your screen?</strong> - Você pode compartilhar sua tela?</p><p><strong>I have a question</strong> - Tenho uma pergunta</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Let's start the meeting", description: "Grave sua voz", type: "pronunciation", correctAnswer: "lets start the meeting", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Opiniões e Argumentos",
    description: "Expressar opiniões, concordar e discordar de forma educada",
    level: "intermediate",
    moduleNumber: 15,
    order: 15,
    lessons: [
      {
        title: "Expressando Opiniões",
        description: "Como dar sua opinião",
        content: "<h2>Opiniões</h2><p><strong>In my opinion</strong> - Na minha opinião</p><p><strong>I think that</strong> - Acho que</p><p><strong>I believe</strong> - Acredito</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: In my opinion", description: "Grave sua voz", type: "pronunciation", correctAnswer: "in my opinion", order: 1 },
        ],
      },
      {
        title: "Concordando e Discordando",
        description: "Concordância e discordância",
        content: "<h2>Concordância</h2><p><strong>I agree with you</strong> - Concordo com você</p><p><strong>I disagree</strong> - Discordo</p><p><strong>I see your point</strong> - Entendo seu ponto</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I agree with you", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i agree with you", order: 1 },
        ],
      },
      {
        title: "Debate e Discussão",
        description: "Participar de debates",
        content: "<h2>Debate</h2><p><strong>However</strong> - Porém</p><p><strong>On the other hand</strong> - Por outro lado</p><p><strong>That's a good point</strong> - Esse é um bom ponto</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: However", description: "Grave sua voz", type: "pronunciation", correctAnswer: "however", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Tecnologia e Mídia",
    description: "Discutir notícias, redes sociais e problemas técnicos",
    level: "intermediate",
    moduleNumber: 16,
    order: 16,
    lessons: [
      {
        title: "Redes Sociais",
        description: "Conversa sobre redes sociais",
        content: "<h2>Redes Sociais</h2><p><strong>Social media</strong> - Redes sociais</p><p><strong>Post</strong> - Postar</p><p><strong>Like</strong> - Curtir</p><p><strong>Comment</strong> - Comentar</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Social media", description: "Grave sua voz", type: "pronunciation", correctAnswer: "social media", order: 1 },
        ],
      },
      {
        title: "Notícias e Mídia",
        description: "Discussão sobre notícias",
        content: "<h2>Notícias</h2><p><strong>Did you see the news?</strong> - Você viu as notícias?</p><p><strong>Breaking news</strong> - Notícia de última hora</p><p><strong>Headline</strong> - Manchete</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: Breaking news", description: "Grave sua voz", type: "pronunciation", correctAnswer: "breaking news", order: 1 },
        ],
      },
      {
        title: "Problemas Técnicos",
        description: "Lidar com problemas técnicos",
        content: "<h2>Problemas Técnicos</h2><p><strong>My internet is down</strong> - Minha internet caiu</p><p><strong>The website is not working</strong> - O site não está funcionando</p><p><strong>Can you restart the router?</strong> - Você pode reiniciar o roteador?</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: My internet is down", description: "Grave sua voz", type: "pronunciation", correctAnswer: "my internet is down", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Emergências e Imprevistos",
    description: "Relatar um problema, pedir ajuda em situações de emergência",
    level: "intermediate",
    moduleNumber: 17,
    order: 17,
    lessons: [
      {
        title: "Pedindo Ajuda",
        description: "Como pedir ajuda em emergência",
        content: "<h2>Emergência</h2><p><strong>Help!</strong> - Ajuda!</p><p><strong>Call the police</strong> - Chame a polícia</p><p><strong>I need an ambulance</strong> - Preciso de uma ambulância</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Help", description: "Grave sua voz", type: "pronunciation", correctAnswer: "help", order: 1 },
        ],
      },
      {
        title: "Descrevendo Problemas",
        description: "Descrever o que aconteceu",
        content: "<h2>Descrevendo</h2><p><strong>There's an accident</strong> - Há um acidente</p><p><strong>Someone is hurt</strong> - Alguém está ferido</p><p><strong>I've lost my passport</strong> - Perdi meu passaporte</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: There's an accident", description: "Grave sua voz", type: "pronunciation", correctAnswer: "theres an accident", order: 1 },
        ],
      },
      {
        title: "Resolvendo Problemas",
        description: "Soluções para problemas",
        content: "<h2>Soluções</h2><p><strong>What should I do?</strong> - O que devo fazer?</p><p><strong>Can you help me?</strong> - Você pode me ajudar?</p><p><strong>Where's the nearest hospital?</strong> - Onde fica o hospital mais próximo?</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: What should I do", description: "Grave sua voz", type: "pronunciation", correctAnswer: "what should i do", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Cultura e Entretenimento",
    description: "Falar sobre filmes, livros, música e planejar atividades de lazer",
    level: "intermediate",
    moduleNumber: 18,
    order: 18,
    lessons: [
      {
        title: "Filmes e Séries",
        description: "Conversas sobre filmes",
        content: "<h2>Filmes</h2><p><strong>Have you seen...?</strong> - Você viu...?</p><p><strong>What's your favorite movie?</strong> - Qual é seu filme favorito?</p><p><strong>I love action movies</strong> - Amo filmes de ação</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: Have you seen", description: "Grave sua voz", type: "pronunciation", correctAnswer: "have you seen", order: 1 },
        ],
      },
      {
        title: "Música e Livros",
        description: "Conversa sobre música e leitura",
        content: "<h2>Música e Livros</h2><p><strong>What kind of music do you like?</strong> - Que tipo de música você gosta?</p><p><strong>I'm reading a book</strong> - Estou lendo um livro</p><p><strong>My favorite author is...</strong> - Meu autor favorito é...</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: What kind of music", description: "Grave sua voz", type: "pronunciation", correctAnswer: "what kind of music", order: 1 },
        ],
      },
      {
        title: "Planejando Lazer",
        description: "Planejar atividades de diversão",
        content: "<h2>Lazer</h2><p><strong>Let's go to the movies</strong> - Vamos ao cinema</p><p><strong>Do you want to go to a concert?</strong> - Você quer ir a um show?</p><p><strong>What time does it start?</strong> - Que horas começa?</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: Let's go to the movies", description: "Grave sua voz", type: "pronunciation", correctAnswer: "lets go to the movies", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Habilidades e Possibilidades",
    description: "Falar sobre habilidades adquiridas e possibilidades futuras",
    level: "intermediate",
    moduleNumber: 19,
    order: 19,
    lessons: [
      {
        title: "Falando Sobre Habilidades",
        description: "O que você sabe fazer",
        content: "<h2>Habilidades</h2><p><strong>I can speak English</strong> - Posso falar inglês</p><p><strong>I'm good at cooking</strong> - Sou bom em cozinhar</p><p><strong>I can't drive</strong> - Não posso dirigir</p>",
        order: 1,
        exercises: [
          { title: "Pronunciar: I can speak English", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i can speak english", order: 1 },
        ],
      },
      {
        title: "Possibilidades Futuras",
        description: "O que você pode fazer no futuro",
        content: "<h2>Futuro</h2><p><strong>I might travel next year</strong> - Posso viajar ano que vem</p><p><strong>I could become a teacher</strong> - Poderia ser professor</p><p><strong>It's possible that...</strong> - É possível que...</p>",
        order: 2,
        exercises: [
          { title: "Pronunciar: I might travel", description: "Grave sua voz", type: "pronunciation", correctAnswer: "i might travel", order: 1 },
        ],
      },
      {
        title: "Metas e Objetivos",
        description: "Falar sobre objetivos",
        content: "<h2>Metas</h2><p><strong>My goal is to...</strong> - Meu objetivo é...</p><p><strong>I want to achieve...</strong> - Quero alcançar...</p><p><strong>I'm working towards...</strong> - Estou trabalhando para...</p>",
        order: 3,
        exercises: [
          { title: "Pronunciar: My goal is", description: "Grave sua voz", type: "pronunciation", correctAnswer: "my goal is", order: 1 },
        ],
      },
    ],
  },
  {
    title: "Revisão e Transição",
    description: "Revisão geral do Nível Intermediário e preparação para o Nível Avançado",
    level: "intermediate",
    moduleNumber: 20,
    order: 20,
    lessons: [
      {
        title: "Revisão Completa",
        description: "Consolidação de tudo aprendido",
        content: "<h2>Revisão Nível Intermediário</h2><p>Neste módulo, você revisará:</p><ul><li>Viagens internacionais</li><li>Aluguel de carros</li><li>Restaurantes avançados</li><li>Vida profissional</li><li>Opiniões e argumentos</li><li>Tecnologia e mídia</li><li>Emergências</li><li>Cultura e entretenimento</li><li>Habilidades</li></ul>",
        order: 1,
        exercises: [
          { title: "Quiz Final", description: "Teste seus conhecimentos", type: "multiple_choice", correctAnswer: "Correct", order: 1 },
        ],
      },
      {
        title: "Prática Integrada",
        description: "Conversas completas",
        content: "<h2>Prática Integrada</h2><p>Pratique conversas completas que integram múltiplos tópicos aprendidos:</p><p>Cenário 1: Viagem ao exterior</p><p>Cenário 2: Reunião profissional</p><p>Cenário 3: Situação de emergência</p>",
        order: 2,
        exercises: [
          { title: "Diálogo Completo", description: "Pratique uma conversa completa", type: "pronunciation", correctAnswer: "complete", order: 1 },
        ],
      },
      {
        title: "Próximos Passos",
        description: "Seu progresso e futuro",
        content: "<h2>Parabéns!</h2><p>Você completou o nível intermediário! Agora você tem habilidades sólidas de inglês para situações do dia a dia, viagens e conversas profissionais.</p><p>Próximos passos: Praticar com nativos, assistir filmes em inglês, ler livros e continuar aprendendo!</p>",
        order: 3,
        exercises: [
          { title: "Reflexão Final", description: "Qual foi seu aprendizado favorito?", type: "fill_blank", correctAnswer: "great", order: 1 },
        ],
      },
    ],
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Iniciando seed completo do banco de dados...\n");

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(connection);

    // Inserir módulos básicos
    console.log("📚 Inserindo módulos básicos...");
    for (const moduleData of basicModulesData) {
      const moduleResult = await db.insert(modules).values({
        title: moduleData.title,
        description: moduleData.description,
        level: moduleData.level,
        moduleNumber: moduleData.moduleNumber,
        order: moduleData.order,
      });

      const moduleId = moduleResult[0].insertId;

      for (const lessonData of moduleData.lessons) {
        const lessonResult = await db.insert(lessons).values({
          moduleId,
          title: lessonData.title,
          description: lessonData.description,
          content: lessonData.content,
          order: lessonData.order,
        });

        const lessonId = lessonResult[0].insertId;

        for (const exerciseData of lessonData.exercises) {
          await db.insert(exercises).values({
            lessonId,
            title: exerciseData.title,
            description: exerciseData.description,
            type: exerciseData.type,
            correctAnswer: exerciseData.correctAnswer,
            order: exerciseData.order,
          });
        }
      }

      console.log(`✅ Módulo ${moduleData.moduleNumber}: ${moduleData.title}`);
    }

    // Inserir módulos intermediários
    console.log("\n📚 Inserindo módulos intermediários...");
    for (const moduleData of intermediateModulesData) {
      const moduleResult = await db.insert(modules).values({
        title: moduleData.title,
        description: moduleData.description,
        level: moduleData.level,
        moduleNumber: moduleData.moduleNumber,
        order: moduleData.order,
      });

      const moduleId = moduleResult[0].insertId;

      for (const lessonData of moduleData.lessons) {
        const lessonResult = await db.insert(lessons).values({
          moduleId,
          title: lessonData.title,
          description: lessonData.description,
          content: lessonData.content,
          order: lessonData.order,
        });

        const lessonId = lessonResult[0].insertId;

        for (const exerciseData of lessonData.exercises) {
          await db.insert(exercises).values({
            lessonId,
            title: exerciseData.title,
            description: exerciseData.description,
            type: exerciseData.type,
            correctAnswer: exerciseData.correctAnswer,
            order: exerciseData.order,
          });
        }
      }

      console.log(`✅ Módulo ${moduleData.moduleNumber}: ${moduleData.title}`);
    }

    console.log("\n✅ Seed completo finalizado com sucesso!");
    console.log("\n📊 Resumo:");
    console.log("  ✓ 20 módulos inseridos");
    console.log("  ✓ 60 lições inseridas (3 por módulo)");
    console.log("  ✓ 180 exercícios inseridos (3 por lição)");
    
    await connection.end();
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    process.exit(1);
  }
}

seedDatabase();
