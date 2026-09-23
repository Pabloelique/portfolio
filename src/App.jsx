import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, Mail, Download, ExternalLink, Moon, Sun, Menu, X, 
  Code, Database, Globe, Server, Cpu, Layers, CheckCircle2, Award, 
  Terminal, ShieldCheck, ChevronRight, ArrowLeft, ArrowUpRight, Share2
} from 'lucide-react';

// Componentes SVG Inline para logos de redes sociales
const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// DATOS PERSONALES
const PERSONAL_INFO = {
  name: "Pablo Jiménez Jorquera",
  title: "Estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM)",
  subtitle: "Desarrollo aplicaciones, diseño soluciones web y aprendo construyendo proyectos reales.",
  location: "Mazarrón / Región de Murcia, España",
  email: "pablojimenezjo2005@gmail.com",
  github: "https://github.com/Pabloelique",
  linkedin: "https://www.linkedin.com/in/pablo-jimenez-jorquera-38b219309/",
  cvPath: "/cv/Pablo-Jimenez-CV.pdf",
  profileImg: "/pablo.jpg",
  drivingLicense: "Carnet B y vehículo propio",
  languages: "Español (nativo), Inglés (B2 / Intermedio-Avanzado), Francés (básico)",
  bioHero: "Soy estudiante de DAM con interés en el desarrollo de software, aplicaciones de escritorio, bases de datos, desarrollo web y sistemas. Me gusta transformar ideas en soluciones funcionales, comprender cómo funcionan las tecnologías y mejorar mis proyectos mediante la práctica.",
  bioAbout: `Soy Pablo Jiménez Jorquera, estudiante de Desarrollo de Aplicaciones Multiplataforma. En mi formación académica y proyectos personales he trabajado con Java, JavaFX, bases de datos relacionales y no relacionales, interfaces gráficas, desarrollo web, XML, Git, Linux, redes y máquinas virtuales.

Mi metodología se basa en la práctica. Me gusta analizar un problema, organizar una solución, diseñar su estructura y convertirla en una aplicación funcional. Tengo experiencia realizando proyectos web con WordPress, hosting y dominios, así como en diagnóstico de software, ordenadores y redes.

Actualmente busco una oportunidad de prácticas FCT / Formación en Empresa para aplicar mis conocimientos, aportar valor a un equipo de desarrollo y seguir aprendiendo de profesionales.`
};

// PROYECTOS REALES
const PROJECTS = [
  {
    id: "garash-studio-jf",
    slug: "garash-studio-jf",
    name: "Garash Studio JF",
    isFeatured: true,
    type: "Aplicación Integral de Gestión de Peluquería",
    context: "Proyecto Académico y Práctico Principal de DAM",
    location: "Mazarrón, Murcia",
    shortDescription: "Aplicación de escritorio desarrollada para gestionar de forma integral los procesos de una peluquería: clientes, empleados, citas, productos, inventario, facturación, promociones, fidelización y estadísticas.",
    technologies: ["Java", "JavaFX", "FXML", "Scene Builder", "NetBeans", "StarUML", "Dia", "Git", "POO", "Persistencia de Ficheros"],
    status: "Finalizado / Versión Académica Completa",
    repoUrl: "https://github.com/Pabloelique/JFGARASHSTUDIO",
    demoUrl: "",
    images: [
      { url: "/capturas/login_app.png", title: "Pantalla de Acceso / Login" },
      { url: "/capturas/menu_app.png", title: "Panel Principal de Navegación" },
      { url: "/capturas/gestion2_app.png", title: "Gestión Completa de Clientes" },
      { url: "/capturas/gestion1_app.png", title: "Inventario de Productos y Stock" },
      { url: "/capturas/estadisticas_app.png", title: "Estadísticas y Tarjeta de Fidelidad" },
      { url: "/capturas/stock_app.png", title: "Alertas Automatizadas de Stock Bajo" }
    ],
    challenge: "El objetivo era diseñar una solución capaz de centralizar la información y facilitar la gestión diaria de una peluquería, evitando que los datos de clientes, citas, servicios, productos y ventas estuvieran desorganizados o separados.",
    solution: "Una aplicación de escritorio estructurada por módulos, con interfaz gráfica fluida en JavaFX y arquitectura orientada a objetos (POO). Cada área operativa dispone de sus propias vistas y controladores para optimizar las tareas del negocio.",
    roles: [
      { name: "Dueño / Administrador", desc: "Supervisión global, configuración del sistema, copias de seguridad y estadísticas estratégicas." },
      { name: "Recepcionista", desc: "Gestión activa de agenda, citas, altas de clientes, registro de ventas y facturación." },
      { name: "Peluquero / Estilista", desc: "Consulta del calendario de atenciones, registro de servicios prestados y notas de clientes." }
    ],
    modules: [
      { name: "Gestión de Clientes", desc: "Altas, bajas, modificaciones, búsqueda por DNI y ficha del cliente." },
      { name: "Gestión de Empleados", desc: "Administración de personal, puestos, roles y credenciales de acceso." },
      { name: "Gestión de Productos", desc: "Control del catálogo, precios de compra/venta y alertas de stock mínimo." },
      { name: "Gestión de Servicios", desc: "Registro de tratamientos ofrecidos, precios y duración estimada." },
      { name: "Gestión de Citas", desc: "Programación, estados (Pendiente, Confirmada, Finalizada, Cancelada) y asignación." },
      { name: "Estadísticas", desc: "Gráficos de citas por estado, citas por peluquero y volumen de atención." },
      { name: "Fidelización", desc: "Tarjeta de puntos para clientes habituales y promociones aplicables." },
      { name: "Facturación", desc: "Generación de facturas con líneas de detalle e desglose de impuestos." }
    ],
    learning: ["Diseño modular en JavaFX", "Gestión avanzada de controladores FXML", "Validación estricta de formularios", "Modelado de clases UML con StarUML", "Manejo de colecciones y persistencia en ficheros"]
  },
  {
    id: "javafx-apps",
    slug: "javafx-apps",
    name: "Desarrollo de Aplicaciones de Escritorio JavaFX",
    isFeatured: false,
    type: "Conjunto de Prácticas Académicas",
    shortDescription: "Aplicaciones de escritorio orientadas a la creación de interfaces gráficas, formulación de datos, navegación entre escenas y controladores.",
    technologies: ["Java", "JavaFX", "FXML", "Scene Builder", "NetBeans", "CSS"],
    status: "Completado",
    repoUrl: "https://github.com/Pabloelique",
    challenge: "Crear interfaces dinámicas e interactivas adaptadas a requisitos de usuario con separación limpia de la lógica.",
    solution: "Implementación del patrón MVC estructurando vistas FXML, controladores en Java y hojas de estilo CSS para JavaFX."
  },
  {
    id: "bases-de-datos",
    slug: "bases-de-datos",
    name: "Modelado y Gestión de Bases de Datos",
    isFeatured: false,
    type: "Proyecto de Gestión de Datos",
    shortDescription: "Diseño relacional y documental de información con SQL y MongoDB, incluyendo consultas, modelado entidad-relación y XML.",
    technologies: ["SQL", "MongoDB", "Java", "XML", "XPath", "XQuery"],
    status: "Completado",
    repoUrl: "https://github.com/Pabloelique",
    challenge: "Estructurar y consultar eficientemente información compleja tanto en bases relacionales como en documentos NoSQL.",
    solution: "Diseño de esquemas optimizados, consultas relacionales avanzadas e integración de datos XML estructurados."
  },
  {
    id: "desarrollo-web",
    slug: "desarrollo-web",
    name: "Desarrollo Web & WordPress",
    isFeatured: false,
    type: "Proyectos Web Reales",
    shortDescription: "Creación y mantenimiento de sitios web corporativos, landing pages de servicios, configuración de hosting, dominios y SEO básico.",
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "Hosting & DNS"],
    status: "Completado / En Producción",
    repoUrl: "https://github.com/Pabloelique",
    challenge: "Ofrecer soluciones web optimizadas, adaptadas a dispositivos móviles y listas para captar clientes.",
    solution: "Implementación de sitios dinámicos en WordPress con constructores visuales, optimización de velocidad y hosting."
  },
  {
    id: "redes-y-sistemas",
    slug: "redes-y-sistemas",
    name: "Infraestructura de Redes y Sistemas",
    isFeatured: false,
    type: "Prácticas de Laboratorio",
    shortDescription: "Configuración de redes locales, routers, switches, máquinas virtuales Linux, entornos Docker y protocolos de comunicación.",
    technologies: ["Linux", "VirtualBox", "Docker", "SSH", "Redes TCP/IP", "WSL"],
    status: "Completado",
    repoUrl: "https://github.com/Pabloelique",
    challenge: "Desplegar entornos virtualizados y diagnosticar conectividad y rendimiento en sistemas.",
    solution: "Configuración de topologías de red, terminales SSH y contenedores de desarrollo en entornos aislados."
  }
];

// HABILIDADES Y CATEGORÍAS
const SKILL_CATEGORIES = [
  {
    title: "Desarrollo de Aplicaciones",
    icon: Code,
    skills: ["Java", "POO", "JavaFX", "FXML", "Scene Builder", "Estructuras Modulares", "Validación de Datos"],
    description: "Desarrollo de software con Java y JavaFX utilizando el patrón MVC, diseño de interfaces gráficas con Scene Builder, manejo de eventos y controladores."
  },
  {
    title: "Bases de Datos y Datos",
    icon: Database,
    skills: ["SQL", "MongoDB", "Modelado E-R", "Consultas Complejas", "Persistencia Ficheros", "NOCIONES JDBC/DAO"],
    description: "Modelado relacional y NoSQL. Creación de consultas, relaciones entre entidades, estructuras de datos en memoria y almacenamiento persistente."
  },
  {
    title: "Desarrollo Web",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "Landing Pages", "Hosting & Dominios", "Mantenimiento"],
    description: "Creación de sitios web profesionales, maquetación adaptativa, despliegue en entornos de alojamiento web y mantenimiento continuo."
  },
  {
    title: "XML y Lenguajes de Consulta",
    icon: Layers,
    skills: ["XML", "XPath", "XQuery", "Validación XML", "Estructuración de Datos"],
    description: "Representación estructurada de información con XML y lenguaje de consultas mediante XPath y XQuery para la extracción precisa de datos."
  },
  {
    title: "Herramientas de Desarrollo",
    icon: FolderGit2,
    skills: ["Git", "GitHub", "NetBeans", "StarUML", "Dia", "Docker", "WSL", "SSH"],
    description: "Control de versiones con Git, diseño de diagramas de clase e interacción con UML, desarrollo en entornos IDEs y contenedores."
  },
  {
    title: "Sistemas y Redes",
    icon: Server,
    skills: ["Linux", "Máquinas Virtuales", "Configuración Routers/Switches", "SSH", "Diagnóstico HW/SW"],
    description: "Administración básica de Linux, virtualización de entornos con VirtualBox/WSL, resolución de problemas de redes locales y hardware informático."
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300 font-sans`}>
      
      {/* NAVEGACIÓN SUPERIOR */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">PABLO JIMÉNEZ</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-mono">DAM</span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-blue-500 transition-colors">Sobre mí</a>
            <a href="#habilidades" className="hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#proyectos" className="hover:text-blue-500 transition-colors">Proyectos</a>
            <a href="#experiencia" className="hover:text-blue-500 transition-colors">Experiencia</a>
            <a href="#formacion" className="hover:text-blue-500 transition-colors">Formación</a>
            <a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900 text-amber-400' : 'border-slate-200 bg-slate-100 text-slate-700'} hover:opacity-80 transition-all`}
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={PERSONAL_INFO.cvPath}
              download
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-blue-500/20"
            >
              <Download size={14} /> CV
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-slate-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} px-4 py-6 space-y-4`}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Inicio</a>
            <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Sobre mí</a>
            <a href="#habilidades" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Habilidades</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Proyectos</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Experiencia</a>
            <a href="#formacion" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Formación</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Contacto</a>
            <a href={PERSONAL_INFO.cvPath} download className="flex items-center gap-2 text-sm font-semibold text-blue-500 pt-2">
              <Download size={16} /> Descargar Currículum
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                <CheckCircle2 size={14} /> Disponible para Prácticas / FCT
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-blue-500">
                {PERSONAL_INFO.title}
              </p>

              <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl leading-relaxed`}>
                {PERSONAL_INFO.bioHero}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#proyectos" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2">
                  Ver Proyectos <ChevronRight size={16} />
                </a>
                <a href={PERSONAL_INFO.cvPath} download className={`px-6 py-3 rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800' : 'border-slate-300 bg-white hover:bg-slate-100'} font-medium transition-all flex items-center gap-2`}>
                  <Download size={16} /> Descargar CV
                </a>
                <a href="#contacto" className={`px-6 py-3 rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800' : 'border-slate-300 bg-white hover:bg-slate-100'} font-medium transition-all`}>
                  Contacto
                </a>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-800/50">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-1 text-sm">
                  <Github size={18} /> GitHub
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-1 text-sm">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-1 text-sm">
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl bg-gradient-to-tr from-blue-900/40 to-slate-900">
                <img 
                  src={PERSONAL_INFO.profileImg} 
                  alt="Pablo Jiménez Jorquera" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.target.src = "https://raw.githubusercontent.com/Pabloelique/JFGARASHSTUDIO/main/capturas/pablo.jpg"; }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/50">
            {[
              { label: "Desarrollo de Aplicaciones", detail: "Java / JavaFX / FXML" },
              { label: "Bases de Datos", detail: "SQL & MongoDB" },
              { label: "Desarrollo Web", detail: "WordPress / HTML / CSS" },
              { label: "Sistemas & Redes", detail: "Linux / Docker / Virtualización" }
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                <p className="text-xs text-blue-500 font-semibold">{item.label}</p>
                <p className="text-sm font-medium mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Sobre Mí
          </h2>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-4 text-base leading-relaxed text-slate-300">
              {PERSONAL_INFO.bioAbout.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{paragraph}</p>
              ))}
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              {[
                "Aprendizaje Continuo", "Resolución de Problemas",
                "Metodología Práctica", "Capacidad de Adaptación",
                "Atención al Detalle", "Trabajo en Equipo",
                "Organización", "Orientación a Objetivos"
              ].map((trait, idx) => (
                <div key={idx} className={`p-3 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} text-xs font-medium flex items-center gap-2`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES TÉCNICAS */}
      <section id="habilidades" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Habilidades Técnicas
          </h2>
          <p className={`mb-12 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Pulsa en cualquier categoría para ver los detalles y aplicabilidad en proyectos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500'} cursor-pointer transition-all hover:-translate-y-1 group`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-bold text-base">{cat.title}</h3>
                  </div>

                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-4 line-clamp-2`}>
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.slice(0, 5).map((s, i) => (
                      <span key={i} className={`text-[11px] px-2 py-0.5 rounded-md ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {s}
                      </span>
                    ))}
                    {cat.skills.length > 5 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md text-blue-500 font-semibold">
                        +{cat.skills.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-slate-900/20' : 'border-slate-200 bg-slate-100/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Proyectos Destacados
          </h2>
          <p className={`mb-12 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Selección de desarrollos académicos y prácticos. Haz clic para ver el estudio de caso detallado.
          </p>

          {/* PROYECTO PRINCIPAL DESTACADO */}
          {PROJECTS.filter(p => p.isFeatured).map(mainProj => (
            <div key={mainProj.id} className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-blue-500/30' : 'bg-white border-blue-200'} shadow-xl mb-12 relative overflow-hidden`}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold mb-6">
                <Award size={14} /> PROYECTO PRINCIPAL
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold">{mainProj.name}</h3>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{mainProj.type} • {mainProj.location}</p>
                  <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                    {mainProj.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {mainProj.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => setActiveProject(mainProj)}
                      className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md flex items-center gap-2"
                    >
                      Ver Detalle Completo <ChevronRight size={16} />
                    </button>
                    {mainProj.repoUrl && (
                      <a href={mainProj.repoUrl} target="_blank" rel="noreferrer" className={`px-4 py-2.5 rounded-lg border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'} text-sm font-medium transition-all flex items-center gap-2`}>
                        <Github size={16} /> Código en GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {mainProj.images && mainProj.images.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video group relative">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center text-[10px] text-white font-medium">
                        {img.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* RESTO DE PROYECTOS */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.filter(p => !p.isFeatured).map(proj => (
              <div key={proj.id} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} flex flex-col justify-between`}>
                <div>
                  <span className="text-[11px] font-semibold text-blue-500 uppercase tracking-wider">{proj.type}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{proj.name}</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed mb-4`}>
                    {proj.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t, i) => (
                      <span key={i} className={`text-[11px] px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProject(proj)}
                  className="w-full py-2 rounded-lg border border-slate-700 hover:border-blue-500 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1"
                >
                  Ver Ficha de Proyecto <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA LABORAL PRÁCTICA */}
      <section id="experiencia" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Experiencia Práctica y Laboral
          </h2>
          <p className={`mb-12 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Trayectoria en sectores técnicos e industriales que avalan responsabilidad, trabajo en equipo y dinamismo.
          </p>

          <div className="space-y-6">
            {[
              {
                role: "Mozo de Almacén",
                company: "COEXMA",
                location: "Mazarrón, Murcia",
                period: "Jul 2024 - Sep 2024 / Jul 2025 - Sep 2025",
                tasks: ["Recepción, clasificación y ubicación de mercancías.", "Preparación de pedidos para vehículos de reparto.", "Mantenimiento del orden y control de stock."]
              },
              {
                role: "Ayudante de Mecánico",
                company: "Talleres Fernández Motor",
                location: "Mazarrón, Murcia",
                period: "Jun 2025 - Jul 2025",
                tasks: ["Asistencia en diagnóstico y reparación de vehículos ligeros.", "Mantenimiento básico: cambio de aceites, filtros y frenos.", "Organización de área de trabajo y herramientas."]
              },
              {
                role: "Peón de Construcción",
                company: "JM Group Solution S.L",
                location: "Mazarrón, Murcia",
                period: "Jun 2023 - Sep 2023",
                tasks: ["Apoyo en albañilería, pintura y fontanería.", "Organización de suministros e inventario de materiales.", "Trabajo coordinado en equipo en obra."]
              }
            ].map((exp, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-xs text-blue-500 font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'} w-fit`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs space-y-1 text-slate-400">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN ACADÉMICA */}
      <section id="formacion" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-slate-900/20' : 'border-slate-200 bg-slate-100/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Formación Académica
          </h2>

          <div className="relative border-l-2 border-blue-500/30 ml-4 pl-8 space-y-12">
            {[
              {
                title: "CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)",
                center: "IES Alfonso X el Sabio (Murcia)",
                period: "2025 - En curso",
                desc: "Formación especializada en programación orientada a objetos (Java), desarrollo de interfaces (JavaFX), gestión de bases de datos (SQL, NoSQL), sistemas operativos y redes."
              },
              {
                title: "Grado en Ingeniería Informática (2 cursos completados)",
                center: "Universidad de Murcia (UMU)",
                period: "Sep 2023 - Jun 2025",
                desc: "Fundamentos sólidos de algoritmia, estructuras de datos, lógica matemática, arquitectura de computadores y bases del desarrollo informático."
              },
              {
                title: "Bachillerato de Ciencias",
                center: "I.E.S. Felipe II (Mazarrón)",
                period: "Sep 2021 - Jun 2023",
                desc: "Modalidad científico-tecnológica."
              }
            ].map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                <span className="text-xs font-semibold text-blue-500">{edu.period}</span>
                <h3 className="text-lg font-bold mt-1">{edu.title}</h3>
                <p className="text-xs font-medium text-slate-400 mb-2">{edu.center}</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-xl`}>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5 space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Hablemos</h2>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                  Estoy disponible para realizar prácticas profesionales en empresas del sector informático. Si buscas un perfil motivado y con base técnica sólida, ponte en contacto.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="text-blue-500" size={18} />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin className="text-blue-500" size={18} />
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Github className="text-blue-500" size={18} />
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub Profile</a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                {contactSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                    <CheckCircle2 size={32} className="mx-auto" />
                    <p className="font-bold">¡Mensaje enviado correctamente!</p>
                    <p className="text-xs">Me pondré en contacto contigo a la mayor brevedad posible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1">Nombre</label>
                        <input type="text" required className={`w-full px-4 py-2.5 rounded-lg text-xs border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'} focus:outline-none focus:border-blue-500`} placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">Empresa</label>
                        <input type="text" className={`w-full px-4 py-2.5 rounded-lg text-xs border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'} focus:outline-none focus:border-blue-500`} placeholder="Nombre de la empresa" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">Correo electrónico</label>
                      <input type="email" required className={`w-full px-4 py-2.5 rounded-lg text-xs border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'} focus:outline-none focus:border-blue-500`} placeholder="tu@email.com" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">Mensaje</label>
                      <textarea rows={4} required className={`w-full px-4 py-2.5 rounded-lg text-xs border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'} focus:outline-none focus:border-blue-500`} placeholder="¿En qué puedo ayudarte?"></textarea>
                    </div>

                    <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-all shadow-lg shadow-blue-600/20">
                      Enviar Mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 border-t ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'} text-center text-xs text-slate-500`}>
        <p>© 2026 {PERSONAL_INFO.name}. Desarrollado con React y Tailwind CSS.</p>
      </footer>

      {/* MODAL DETALLE DE PROYECTO */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className={`max-w-4xl w-full my-8 p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-500">{activeProject.type}</span>
                <h3 className="text-2xl font-bold">{activeProject.name}</h3>
              </div>
              <button onClick={() => setActiveProject(null)} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div>
                <h4 className="font-bold text-sm text-blue-400 mb-1">El Reto</h4>
                <p className="text-slate-300">{activeProject.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-sm text-blue-400 mb-1">La Solución</h4>
                <p className="text-slate-300">{activeProject.solution}</p>
              </div>

              {activeProject.roles && (
                <div>
                  <h4 className="font-bold text-sm text-blue-400 mb-2">Roles de Usuario</h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {activeProject.roles.map((r, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                        <p className="font-bold text-slate-200">{r.name}</p>
                        <p className="text-[11px] text-slate-400 mt-1">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeProject.modules && (
                <div>
                  <h4 className="font-bold text-sm text-blue-400 mb-2">Módulos Implementados</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeProject.modules.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                        <p className="font-bold text-slate-200">{m.name}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeProject.images && (
                <div>
                  <h4 className="font-bold text-sm text-blue-400 mb-2">Capturas del Sistema</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeProject.images.map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                        <img src={img.url} alt={img.title} className="w-full h-auto object-cover" />
                        <p className="p-2 text-[10px] text-center text-slate-400">{img.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button onClick={() => setActiveProject(null)} className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs">
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETALLE DE HABILIDAD */}
      {activeSkillCategory && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`max-w-lg w-full p-6 sm:p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl space-y-4`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold">{activeSkillCategory.title}</h3>
              <button onClick={() => setActiveSkillCategory(null)} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400">
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{activeSkillCategory.description}</p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-blue-400">Competencias Incluidas:</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeSkillCategory.skills.map((s, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button onClick={() => setActiveSkillCategory(null)} className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}