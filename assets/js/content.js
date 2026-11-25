/**
 * Melvale CMS - Sistema Central de Conteúdo e Produtos
 * Permite gerenciar textos, contatos e produtos da loja com sincronização em tempo real.
 */

const DEFAULT_CONTENT = {
  // HERO (INDEX)
  hero_title: "Gestão Sustentável de Paletes<br class=\"hidden sm:inline\" /> e Resíduos de Madeira",
  hero_subtitle: "Transformando um problema operacional em uma solução ambiental",
  hero_desc: "Realizamos a coleta, o reaproveitamento, a reciclagem e a destinação ambientalmente adequada de paletes e resíduos de madeira, ajudando empresas a manterem ambientes mais limpos, organizados, seguros e alinhados às boas práticas ambientais.",
  
  // NOSSA MISSÃO E COMPROMISSO
  missao_title: "Nossa Missão",
  missao_subtitle: "Soluções sustentáveis para empresas mais organizadas e responsáveis",
  missao_desc: "Promover soluções sustentáveis para a gestão de paletes e resíduos de madeira, contribuindo para a preservação ambiental, para a segurança sanitária das empresas e para o fortalecimento da economia circular por meio do reaproveitamento e da reciclagem de materiais.",
  
  compromisso_title: "Nosso Compromisso Ambiental",
  compromisso_subtitle: "Sustentabilidade presente em<br />todas as etapas do processo",
  compromisso_p1: "Resíduos não devem ser tratados como descarte, mas como recursos que podem retornar à cadeia produtiva de forma responsável.",
  compromisso_p2: "Por isso, buscamos aproveitar ao máximo cada material coletado, reduzindo desperdícios e minimizando os impactos ambientais causados pelo descarte inadequado da madeira.",

  // PILARES
  pilares_title: "Nosso trabalho é baseado em três pilares",
  pilar_reaproveitamento_title: "Reaproveitamento",
  pilar_reaproveitamento_desc: "Reaproveitamento de materiais sempre que possível.",
  pilar_reciclagem_title: "Reciclagem",
  pilar_reciclagem_desc: "Reciclagem dos resíduos sem condições de reutilização.",
  pilar_destinacao_title: "Destinação Final",
  pilar_destinacao_desc: "Destinação final ambientalmente adequada para os materiais não aproveitáveis.",

  // POR QUE A GESTÃO É IMPORTANTE
  porque_title: "Por que a gestão adequada de paletes é importante?",
  porque_p1: "Muitas empresas não percebem o impacto que o acúmulo de paletes pode gerar ao longo do tempo.",
  porque_p2: "Quando armazenados de forma inadequada, os paletes e resíduos de madeira podem se transformar em um passivo operacional, sanitário e ambiental.",

  // COMO FUNCIONA
  comofunciona_title: "Como Funciona Nosso Trabalho",
  comofunciona_p1: "Realizamos a coleta dos paletes e resíduos de madeira diretamente nas instalações da empresa.",
  comofunciona_p2: "Após a retirada, todo o material passa por uma avaliação<br />técnica para definição da destinação mais adequada.",
  cf_p1_title: "Reaproveitamento",
  cf_p1_subtitle: "Recuperação de Paletes",
  cf_p1_text1: "Nossa primeira prioridade é prolongar a vida útil dos materiais. Os paletes que apresentam condições de uso são reformados por nossa equipe especializada.",
  cf_p1_text2: "Substituímos peças danificadas e realizamos os reparos necessários para que o palete possa retornar às operações com segurança.",
  cf_p2_title: "Reciclagem Energética",
  cf_p2_text1: "Os resíduos de madeira que não possuem condições de reaproveitamento são transformados em cavaco de madeira.",
  cf_p2_text2: "Esse material é utilizado como combustível para alimentação e partida de caldeiras industriais, contribuindo para o aproveitamento energético da biomassa e reduzindo a necessidade de descarte e desmatamento.",
  cf_p3_title: "Destinação Final Adequada",
  cf_p3_text1: "Os materiais que não podem ser reaproveitados ou reciclados recebem destinação ambientalmente adequada, seguindo as normas e boas práticas aplicáveis ao gerenciamento de resíduos.",

  // BENEFÍCIOS
  beneficios_title: "Benefícios para Sua Empresa",
  beneficios_subtitle: "Ao contratar nossos serviços, sua empresa obtém benefícios<br class=\"hidden sm:inline\" /> que vão muito além da simples retirada de paletes.",

  // FILIAIS (PRIMEIRA DOBRA E MAPA)
  filiais_header_title: "Nossas Filiais",
  filiais_intro_p1: "Com uma estrutura presente em diferentes estados, nossa empresa fortalece sua atuação, ampliando a proximidade com clientes e parceiros. Trabalhamos de forma integrada, compartilhando os mesmos valores e o compromisso com a qualidade, a confiança e a excelência em nossos serviços. Nossa Matriz e nossas filiais formam uma rede integrada, refletindo o crescimento da empresa e nosso compromisso com cada região em que estamos presentes.",
  filiais_intro_p2: "Cada unidade tem um papel importante nessa trajetória, contribuindo para o crescimento da empresa e para um atendimento cada vez mais próximo e eficiente.",
  filiais_map_title: "Conheça nossas unidades e saiba onde estamos presentes:",

  // CONTATO
  contato_banner_title: "Entre em contato conosco",
  contato_banner_desc: "Descubra como podemos ajudar sua empresa a manter ambientes mais limpos, seguros e ambientalmente responsáveis.",
  contato_compromisso_title: "Nosso Compromisso<br />com Sua Empresa",

  // RODAPÉ / CONTATO
  footer_slogan: "Gestão Sustentável de<br />Paletes e Resíduos de Madeira.",
  footer_phone: "(00) 3000-0000",
  footer_phone_clean: "0030000000",
  footer_whatsapp: "(00) 93000-0000",
  footer_whatsapp_clean: "5500930000000",
  footer_email: "contato@melvale.com.br",

  // LISTA DE PRODUTOS DA LOJA
  products: [
    {
      id: 1,
      title: "Paletes de Madeira",
      image: "assets/Paletes.webp",
      whatsappNumber: "5549999999999",
      whatsappMsg: "Olá! Gostaria de solicitar cotação para Paletes de Madeira."
    },
    {
      id: 2,
      title: "Chapas de Eucatex (Chapas de Fibra de Madeira)",
      image: "assets/chapa-eucatex.jpg",
      whatsappNumber: "5549999999999",
      whatsappMsg: "Olá! Gostaria de solicitar cotação para Chapas de Eucatex (Chapas de Fibra de Madeira)."
    }
  ]
};

// Funções de Gerenciamento do Conteúdo
const MelvaleCMS = {
  STORAGE_KEY: "melvale_site_content",

  // Obter todo o conteúdo (mescla padrão com o salvo no localStorage)
  getContent() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_CONTENT, ...parsed };
      }
    } catch (e) {
      console.warn("Erro ao ler localStorage do CMS, usando padrão:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CONTENT));
  },

  // Salvar novo conteúdo
  saveContent(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new Event("melvale_content_updated"));
      return true;
    } catch (e) {
      console.error("Erro ao salvar no localStorage:", e);
      return false;
    }
  },

  // Resetar para os dados padrões da copy
  resetContent() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      window.dispatchEvent(new Event("melvale_content_updated"));
      return true;
    } catch (e) {
      return false;
    }
  },

  // Aplicar os textos nos elementos HTML marcados com data-cms="chave"
  applyTexts() {
    const content = this.getContent();
    
    // Atualiza todos os elementos com data-cms
    document.querySelectorAll("[data-cms]").forEach((el) => {
      const key = el.getAttribute("data-cms");
      if (content[key] !== undefined && content[key] !== null) {
        // Se for um link telefônico
        if (key === "footer_phone" && el.tagName === "A") {
          el.textContent = content[key];
          el.href = `tel:${content.footer_phone_clean || content[key].replace(/\D/g, '')}`;
        } else if (key === "footer_whatsapp" && el.tagName === "A") {
          el.textContent = content[key];
          const cleanNum = content.footer_whatsapp_clean || content[key].replace(/\D/g, '');
          el.href = `https://wa.me/${cleanNum}`;
        } else if (key === "footer_email" && el.tagName === "A") {
          el.textContent = content[key];
          el.href = `mailto:${content[key]}`;
        } else {
          el.innerHTML = content[key];
        }
      }
    });
  },

  // Renderizar a lista de produtos na página produtos.html
  renderProducts(containerId = "productsListContainer") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const content = this.getContent();
    const products = content.products || [];

    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300">
          <p class="text-slate-500 font-medium">Nenhum produto cadastrado no momento.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map((prod) => {
      const encodedMsg = encodeURIComponent(prod.whatsappMsg || `Olá! Gostaria de solicitar cotação para ${prod.title}.`);
      const num = prod.whatsappNumber || "5549999999999";
      const waLink = `https://wa.me/${num}?text=${encodedMsg}`;

      return `
        <!-- PRODUTO: ${prod.title} -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-eco-200/80 flex flex-col sm:flex-row items-stretch sm:h-[240px] lg:h-[250px]">
          <!-- Foto na esquerda (quadrada no desktop, balanceada no mobile) -->
          <div class="w-full sm:w-auto h-56 sm:h-full aspect-[4/3] sm:aspect-square shrink-0 overflow-hidden relative bg-eco-50">
            <img 
              src="${prod.image}" 
              alt="${prod.title}" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onerror="this.src='assets/Paletes.webp'"
            />
          </div>

          <!-- Título e botão na direita -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5 text-center sm:text-left">
            <div>
              <h2 class="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug text-balance">
                ${prod.title}
              </h2>
            </div>

            <div>
              <a 
                href="${waLink}" 
                target="_blank" 
                class="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-eco-600 hover:bg-eco-700 active:scale-[0.98] text-white font-heading font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all touch-target"
              >
                <i data-lucide="message-circle" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                <span>Solicitar Cotação</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) {
      lucide.createIcons();
    }
  },

  // Inicialização automática
  init() {
    this.applyTexts();
    this.renderProducts();
    
    // Escuta atualizações caso outra aba/janela altere o CMS
    window.addEventListener("storage", (e) => {
      if (e.key === this.STORAGE_KEY) {
        this.applyTexts();
        this.renderProducts();
      }
    });

    window.addEventListener("melvale_content_updated", () => {
      this.applyTexts();
      this.renderProducts();
    });
  }
};

// Auto inicializar no carregamento do DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => MelvaleCMS.init());
} else {
  MelvaleCMS.init();
}
