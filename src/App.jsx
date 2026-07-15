import { useState } from "react";

const BRAND = "Tipos de Apegos";
const PRODUCT = "Quiz Apegos";

const preguntas = [
  {
    id: 1,
    texto: "Cuando alguien cercano no me responde rápido, yo...",
    opciones: [
      { texto: "Me preocupo mucho y envío varios mensajes", tipo: "ansioso" },
      { texto: "Me molesta pero confío en que está ocupado/a", tipo: "seguro" },
      { texto: "Prefiero no esperar nada de nadie, así no me decepciono", tipo: "evitativo" },
      { texto: "Siento pánico y a veces actúo de formas que luego lamento", tipo: "desorganizado" },
    ],
  },
  {
    id: 2,
    texto: "En una relación romántica, lo que más me cuesta es...",
    opciones: [
      { texto: "Confiar en que me van a querer de verdad", tipo: "ansioso" },
      { texto: "Muy poco, me siento cómodo/a con la cercanía", tipo: "seguro" },
      { texto: "Abrirme emocionalmente, prefiero mantener distancia", tipo: "evitativo" },
      { texto: "No sé qué quiero: a veces quiero cercanía y a veces huyo", tipo: "desorganizado" },
    ],
  },
  {
    id: 3,
    texto: "Cuando discuto con alguien importante, tiendo a...",
    opciones: [
      { texto: "Calmarme y buscar una solución juntos/as", tipo: "seguro" },
      { texto: "Escalar el conflicto por miedo a que me abandonen", tipo: "ansioso" },
      { texto: "Cerrarme y necesitar tiempo solo/a para procesar", tipo: "evitativo" },
      { texto: "Reaccionar de forma intensa y luego arrepentirme", tipo: "desorganizado" },
    ],
  },
  {
    id: 4,
    texto: "¿Con qué frecuencia piensas en tus relaciones?",
    opciones: [
      { texto: "Constantemente, me preocupa si todo está bien", tipo: "ansioso" },
      { texto: "Lo justo, no me generan ansiedad constante", tipo: "seguro" },
      { texto: "Casi nunca, prefiero enfocarme en otras cosas", tipo: "evitativo" },
      { texto: "Mucho, pero mis pensamientos son contradictorios", tipo: "desorganizado" },
    ],
  },
  {
    id: 5,
    texto: "Cuando alguien me ofrece apoyo emocional...",
    opciones: [
      { texto: "Lo acepto con gratitud y me siento bien al recibirlo", tipo: "seguro" },
      { texto: "Lo necesito mucho pero temo pedir demasiado", tipo: "ansioso" },
      { texto: "Me incomoda, prefiero resolverlo solo/a", tipo: "evitativo" },
      { texto: "A veces lo quiero y otras veces lo rechazo sin saber por qué", tipo: "desorganizado" },
    ],
  },
  {
    id: 6,
    texto: "Tu mayor miedo en las relaciones es...",
    opciones: [
      { texto: "Que me abandonen o dejen de quererme", tipo: "ansioso" },
      { texto: "Perder mi independencia o espacio personal", tipo: "evitativo" },
      { texto: "No tengo miedos grandes en este ámbito", tipo: "seguro" },
      { texto: "Tanto el abandono como la cercanía me asustan", tipo: "desorganizado" },
    ],
  },
  {
    id: 7,
    texto: "Cuando una relación termina, ¿cómo sueles reaccionar?",
    opciones: [
      { texto: "Me duele pero eventualmente lo proceso y sigo adelante", tipo: "seguro" },
      { texto: "Me cuesta muchísimo soltarlo/a, sigo pensando en esa persona", tipo: "ansioso" },
      { texto: "Suelo distanciarme rápido y enfocarme en otras cosas", tipo: "evitativo" },
      { texto: "Reacciono de formas extremas e impredecibles", tipo: "desorganizado" },
    ],
  },
  {
    id: 8,
    texto: "¿Cómo te sientes con la intimidad emocional?",
    opciones: [
      { texto: "Me siento cómodo/a y disfruto conectar profundamente", tipo: "seguro" },
      { texto: "La busco intensamente pero me genera mucha ansiedad", tipo: "ansioso" },
      { texto: "Me genera incomodidad, prefiero mantener cierta distancia", tipo: "evitativo" },
      { texto: "La deseo pero me asusta, no sé cómo manejarla", tipo: "desorganizado" },
    ],
  },
  {
    id: 9,
    texto: "¿Cómo describes tu autoestima en relaciones?",
    opciones: [
      { texto: "Relativamente estable, no depende de la validación ajena", tipo: "seguro" },
      { texto: "Sube y baja mucho según cómo me traten", tipo: "ansioso" },
      { texto: "Aparentemente alta, pero evito situaciones donde me puedan herir", tipo: "evitativo" },
      { texto: "Muy inestable, me cuesta mucho valorarme", tipo: "desorganizado" },
    ],
  },
  {
    id: 10,
    texto: "En tu infancia, tus cuidadores eran...",
    opciones: [
      { texto: "Consistentes y cariñosos/as, me sentía seguro/a", tipo: "seguro" },
      { texto: "Impredecibles, a veces cariñosos/as y a veces distantes", tipo: "ansioso" },
      { texto: "Distantes o poco expresivos emocionalmente", tipo: "evitativo" },
      { texto: "A veces aterradores/as o fuentes de confusión emocional", tipo: "desorganizado" },
    ],
  },
  {
    id: 11,
    texto: "Cuando siento que alguien se aleja emocionalmente...",
    opciones: [
      { texto: "Lo hablo con calma y busco entender qué pasa", tipo: "seguro" },
      { texto: "Me angustio mucho e intento recuperar la conexión a toda costa", tipo: "ansioso" },
      { texto: "Me adapto, igual prefería mi espacio", tipo: "evitativo" },
      { texto: "Entro en pánico pero al mismo tiempo quiero alejarme también", tipo: "desorganizado" },
    ],
  },
  {
    id: 12,
    texto: "¿Cómo te relacionas con tus propias emociones?",
    opciones: [
      { texto: "Las identifico con relativa facilidad y las expreso sanamente", tipo: "seguro" },
      { texto: "Las siento muy intensamente y me desbordan con frecuencia", tipo: "ansioso" },
      { texto: "Prefiero no pensar mucho en ellas, las racional izo o ignoro", tipo: "evitativo" },
      { texto: "Son caóticas y contradictorias, me cuesta mucho gestionarlas", tipo: "desorganizado" },
    ],
  },
];

const resultados = {
  seguro: {
    titulo: "Apego Seguro",
    emoji: "💚",
    color: "#2d9b6f",
    colorLight: "#e8f7f2",
    descripcion:
      "Tienes una base emocional sólida. Te sientes cómodo/a con la intimidad y la independencia. Puedes confiar en los demás sin perder tu sentido de identidad. Las relaciones te nutren sin consumirte.",
    fortalezas: [
      "Comunicación abierta y asertiva",
      "Capacidad de confiar sin perder autonomía",
      "Gestión saludable del conflicto",
      "Autoestima estable",
    ],
    consejo:
      "Continúa cultivando tus relaciones con la misma conciencia. Puedes ser un ancla para quienes te rodean con estilos de apego más desafiantes.",
  },
  ansioso: {
    titulo: "Apego Ansioso",
    emoji: "💛",
    color: "#d4900a",
    colorLight: "#fef9e7",
    descripcion:
      "Anhelas profunda conexión pero el miedo al abandono te genera mucha ansiedad. Buscas constantemente validación y puedes volverte hiperatento/a a las señales de los demás. Tu corazón es enorme, y con trabajo puedes encontrar la calma que mereces.",
    fortalezas: [
      "Gran capacidad de amar y entregarte",
      "Profunda empatía emocional",
      "Deseo genuino de conexión",
      "Alta sensibilidad interpersonal",
    ],
    consejo:
      "Trabaja en construir una relación más segura contigo mismo/a. La terapia, especialmente el enfoque de apego, puede ayudarte a calmar tu sistema nervioso y confiar más en tus relaciones.",
  },
  evitativo: {
    titulo: "Apego Evitativo",
    emoji: "💙",
    color: "#2b6cb0",
    colorLight: "#ebf4ff",
    descripcion:
      "Valoras mucho tu independencia y te incomoda la intimidad emocional profunda. Has aprendido a depender de ti mismo/a, lo cual tiene mucho valor. Sin embargo, esto puede alejarte de conexiones que en realidad deseas.",
    fortalezas: [
      "Gran autonomía e independencia",
      "Capacidad de autorregulación",
      "Claridad en tus límites personales",
      "Fortaleza emocional aparente",
    ],
    consejo:
      "Explorar tu mundo interior con un profesional puede ayudarte a descubrir que la vulnerabilidad no es debilidad. Permitirte recibir también es una forma de fortaleza.",
  },
  desorganizado: {
    titulo: "Apego Desorganizado",
    emoji: "🤍",
    color: "#6b46c1",
    colorLight: "#f3f0ff",
    descripcion:
      "Experimentas un conflicto interno entre el deseo de cercanía y el miedo a ella. Esto suele originarse en experiencias tempranas de cuidado inconsistente o aterrador. No es tu culpa, y con el apoyo adecuado puedes sanar profundamente.",
    fortalezas: [
      "Profunda capacidad de introspección",
      "Gran resiliencia ante la adversidad",
      "Conciencia emocional, aunque confusa",
      "Potencial enorme de crecimiento",
    ],
    consejo:
      "El acompañamiento terapéutico especializado en trauma y apego es muy valioso para ti. Mereces relaciones que se sientan seguras. La sanación es posible y tú ya estás en el camino.",
  },
};

const coloresBotones = ["#f472b6", "#a78bfa", "#60a5fa", "#34d399"];

export default function App() {
  const [paso, setPaso] = useState("inicio"); // inicio | quiz | resultado
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [seleccionada, setSeleccionada] = useState(null);
  const [animando, setAnimando] = useState(false);
  const [nombre, setNombre] = useState("");
  const [nombreInput, setNombreInput] = useState("");

  const calcularResultado = (resp) => {
    const conteo = { seguro: 0, ansioso: 0, evitativo: 0, desorganizado: 0 };
    resp.forEach((r) => { conteo[r]++; });
    return Object.entries(conteo).sort((a, b) => b[1] - a[1])[0][0];
  };

  const handleIniciar = () => {
    setNombre(nombreInput.trim() || "");
    setPaso("quiz");
    setPreguntaActual(0);
    setRespuestas([]);
    setSeleccionada(null);
  };

  const handleSeleccionar = (tipo, idx) => {
    if (animando) return;
    setSeleccionada(idx);
    setTimeout(() => {
      const nuevasRespuestas = [...respuestas, tipo];
      setAnimando(true);
      setTimeout(() => {
        if (preguntaActual + 1 < preguntas.length) {
          setPreguntaActual(preguntaActual + 1);
          setSeleccionada(null);
          setAnimando(false);
        } else {
          setRespuestas(nuevasRespuestas);
          setPaso("resultado");
          setAnimando(false);
        }
        setRespuestas(nuevasRespuestas);
      }, 350);
    }, 300);
  };

  const handleReiniciar = () => {
    setPaso("inicio");
    setPreguntaActual(0);
    setRespuestas([]);
    setSeleccionada(null);
    setNombreInput("");
    setNombre("");
  };

  const tipoResultado = paso === "resultado" ? calcularResultado(respuestas) : null;
  const resultado = tipoResultado ? resultados[tipoResultado] : null;
  const progreso = ((preguntaActual) / preguntas.length) * 100;

  const styles = {
    app: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fdf4ff 0%, #fef9f0 50%, #f0f9ff 100%)",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0",
    },
    header: {
      width: "100%",
      background: "linear-gradient(90deg, #c084fc 0%, #f472b6 50%, #fb923c 100%)",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 12px rgba(192,132,252,0.3)",
    },
    headerTitle: {
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "800",
      letterSpacing: "0.5px",
      textShadow: "0 1px 3px rgba(0,0,0,0.15)",
    },
    container: {
      width: "100%",
      maxWidth: "640px",
      padding: "24px 20px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // INICIO
    inicioCard: {
      background: "#fff",
      borderRadius: "24px",
      padding: "40px 32px",
      boxShadow: "0 8px 40px rgba(192,132,252,0.15)",
      textAlign: "center",
      marginTop: "24px",
      width: "100%",
    },
    emojiGrande: {
      fontSize: "4rem",
      marginBottom: "16px",
      display: "block",
    },
    inicioTitulo: {
      fontSize: "2rem",
      fontWeight: "900",
      color: "#2d1a4e",
      marginBottom: "8px",
      lineHeight: "1.2",
    },
    inicioBadge: {
      display: "inline-block",
      background: "linear-gradient(90deg, #c084fc, #f472b6)",
      color: "#fff",
      borderRadius: "20px",
      padding: "4px 16px",
      fontSize: "0.85rem",
      fontWeight: "700",
      marginBottom: "20px",
      letterSpacing: "0.5px",
    },
    inicioDesc: {
      color: "#555",
      fontSize: "1rem",
      lineHeight: "1.7",
      marginBottom: "28px",
    },
    inputLabel: {
      display: "block",
      color: "#6b46c1",
      fontWeight: "700",
      fontSize: "0.95rem",
      marginBottom: "8px",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "12px",
      border: "2px solid #e9d5ff",
      fontSize: "1rem",
      color: "#2d1a4e",
      outline: "none",
      marginBottom: "20px",
      transition: "border-color 0.2s",
      background: "#fdf4ff",
    },
    btnPrimario: {
      background: "linear-gradient(90deg, #c084fc 0%, #f472b6 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "14px",
      padding: "16px 36px",
      fontSize: "1.1rem",
      fontWeight: "800",
      cursor: "pointer",
      width: "100%",
      boxShadow: "0 4px 16px rgba(192,132,252,0.4)",
      transition: "transform 0.15s, box-shadow 0.15s",
      letterSpacing: "0.3px",
    },
    infoChips: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "28px",
    },
    chip: {
      background: "#f3e8ff",
      color: "#6b46c1",
      borderRadius: "20px",
      padding: "6px 14px",
      fontSize: "0.82rem",
      fontWeight: "600",
    },
    // QUIZ
    progressBar: {
      width: "100%",
      height: "8px",
      background: "#f0e6ff",
      borderRadius: "10px",
      marginTop: "20px",
      marginBottom: "6px",
      overflow: "hidden",
    },
    progressFill: {
      height: "100%",
      background: "linear-gradient(90deg, #c084fc, #f472b6)",
      borderRadius: "10px",
      transition: "width 0.4s ease",
      width: `${progreso}%`,
    },
    progressText: {
      color: "#a78bfa",
      fontSize: "0.82rem",
      fontWeight: "600",
      marginBottom: "18px",
      alignSelf: "flex-end",
    },
    quizCard: {
      background: "#fff",
      borderRadius: "22px",
      padding: "32px 28px",
      boxShadow: "0 6px 32px rgba(192,132,252,0.12)",
      width: "100%",
      marginBottom: "12px",
    },
    numeroPregunta: {
      fontSize: "0.8rem",
      fontWeight: "700",
      color: "#c084fc",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "10px",
    },
    textoPregunta: {
      fontSize: "1.2rem",
      fontWeight: "800",
      color: "#2d1a4e",
      lineHeight: "1.5",
      marginBottom: "24px",
    },
    opcionBtn: (idx, isSelected) => ({
      width: "100%",
      textAlign: "left",
      background: isSelected
        ? `${coloresBotones[idx % coloresBotones.length]}22`
        : "#fafafa",
      border: isSelected
        ? `2px solid ${coloresBotones[idx % coloresBotones.length]}`
        : "2px solid #f0e6ff",
      borderRadius: "14px",
      padding: "14px 18px",
      fontSize: "0.97rem",
      color: "#2d1a4e",
      cursor: "pointer",
      marginBottom: "10px",
      fontWeight: isSelected ? "700" : "500",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      lineHeight: "1.4",
    }),
    opcionLetra: (idx, isSelected) => ({
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: isSelected
        ? coloresBotones[idx % coloresBotones.length]
        : "#f0e6ff",
      color: isSelected ? "#fff" : "#9c6fe4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.8rem",
      fontWeight: "800",
      flexShrink: 0,
      transition: "all 0.2s",
    }),
    // RESULTADO
    resultadoCard: {
      background: "#fff",
      borderRadius: "24px",
      padding: "36px 28px",
      boxShadow: "0 8px 40px rgba(192,132,252,0.15)",
      width: "100%",
      marginTop: "20px",
      textAlign: "center",
    },
    resultadoEmoji: {
      fontSize: "4.5rem",
      marginBottom: "10px",
      display: "block",
    },
    resultadoBadge: (color) => ({
      display: "inline-block",
      background: color,
      color: "#fff",
      borderRadius: "20px",
      padding: "6px 20px",
      fontSize: "0.9rem",
      fontWeight: "800",
      marginBottom: "12px",
      letterSpacing: "0.3px",
    }),
    resultadoTitulo: {
      fontSize: "1.8rem",
      fontWeight: "900",
      color: "#2d1a4e",
      marginBottom: "16px",
    },
    resultadoDesc: (colorLight) => ({
      background: colorLight,
      borderRadius: "14px",
      padding: "18px 20px",
      color: "#333",
      fontSize: "0.97rem",
      lineHeight: "1.7",
      marginBottom: "22px",
      textAlign: "left",
    }),
    fortalezasTitle: {
      fontSize: "1rem",
      fontWeight: "800",
      color: "#2d1a4e",
      marginBottom: "12px",
      textAlign: "left",
    },
    fortalezasList: {
      listStyle: "none",
      padding: 0,
      marginBottom: "22px",
      textAlign: "left",
    },
    fortalezasItem: (color) => ({
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      padding: "8px 0",
      borderBottom: "1px solid #f0e6ff",
      color: "#444",
      fontSize: "0.93rem",
    }),
    checkIcon: (color) => ({
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.7rem",
      flexShrink: 0,
      marginTop: "1px",
    }),
    consejoBox: (colorLight, color) => ({
      background: colorLight,
      border: `1.5px solid ${color}44`,
      borderRadius: "14px",
      padding: "18px 20px",
      marginBottom: "26px",
      textAlign: "left",
    }),
    consejoTitle: (color) => ({
      fontWeight: "800",
      color: color,
      fontSize: "0.9rem",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }),
    consejoText: {
      color: "#555",
      fontSize: "0.93rem",
      lineHeight: "1.6",
    },
    resultadosDistrib: {
      background: "#fdf4ff",
      borderRadius: "14px",
      padding: "18px 20px",
      marginBottom: "24px",
      textAlign: "left",
    },
    distribTitle: {
      fontWeight: "800",
      color: "#2d1a4e",
      fontSize: "0.9rem",
      marginBottom: "14px",
    },
    distribBarra: {
      marginBottom: "10px",
    },
    distribLabel: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.82rem",
      fontWeight: "600",
      color: "#555",
      marginBottom: "4px",
    },
    distribTrack: {
      height: "8px",
      background: "#f0e6ff",
      borderRadius: "6px",
      overflow: "hidden",
    },
    distribFill: (pct, color) => ({
      height: "100%",
      width: `${pct}%`,
      background: color,
      borderRadius: "6px",
      transition: "width 0.8s ease",
    }),
    btnSecundario: {
      background: "#f3e8ff",
      color: "#7c3aed",
      border: "2px solid #ddd6fe",
      borderRadius: "14px",
      padding: "14px 28px",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
      width: "100%",
      transition: "background 0.2s",
    },
  };

  const letras = ["A", "B", "C", "D"];

  const calcularDistribucion = () => {
    const conteo = { seguro: 0, ansioso: 0, evitativo: 0, desorganizado: 0 };
    respuestas.forEach((r) => { conteo[r]++; });
    return conteo;
  };

  const coloresDistrib = {
    seguro: "#2d9b6f",
    ansioso: "#d4900a",
    evitativo: "#2b6cb0",
    desorganizado: "#6b46c1",
  };
  const nombresDistrib = {
    seguro: "Seguro",
    ansioso: "Ansioso",
    evitativo: "Evitativo",
    desorganizado: "Desorganizado",
  };

  return (
    <div style={styles.app}>
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.headerTitle}>💜 {BRAND}</span>
      </div>

      <div style={styles.container}>
        {/* ===================== INICIO ===================== */}
        {paso === "inicio" && (
          <div style={styles.inicioCard}>
            <span style={styles.emojiGrande}>🌸</span>
            <div style={styles.inicioBadge}>{PRODUCT}</div>
            <h1 style={styles.inicioTitulo}>
              ¿Cuál es tu<br />estilo de apego?
            </h1>
            <p style={styles.inicioDesc}>
              Descubre cómo te vinculas emocionalmente con las personas que
              quieres. Este quiz te ayudará a entender tus patrones de apego y
              cómo impactan en tus relaciones.
            </p>
            <div style={styles.infoChips}>
              <span style={styles.chip}>✨ 12 preguntas</span>
              <span style={styles.chip}>⏱️ 3 minutos</span>
              <span style={styles.chip}>🔒 100% confidencial</span>
            </div>
            <label style={styles.inputLabel}>
              ¿Cómo te llamas? (opcional)
            </label>
            <input
              style={styles.input}
              placeholder="Tu nombre..."
              value={nombreInput}
              onChange={(e) => setNombreInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleIniciar()}
            />
            <button
              style={styles.btnPrimario}
              onClick={handleIniciar}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(192,132,252,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(192,132,252,0.4)";
              }}
            >
              Comenzar el quiz 🚀
            </button>
            <p style={{ color: "#aaa", fontSize: "0.78rem", marginTop: "16px" }}>
              Basado en la teoría del apego de John Bowlby y Mary Ainsworth
            </p>
          </div>
        )}

        {/* ===================== QUIZ ===================== */}
        {paso === "quiz" && (
          <>
            <div style={{ ...styles.progressBar, width: "100%" }}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${((preguntaActual) / preguntas.length) * 100}%`,
                }}
              />
            </div>
            <div style={{ ...styles.progressText, alignSelf: "flex-end" }}>
              {preguntaActual + 1} / {preguntas.length}
            </div>

            <div
              style={{
                ...styles.quizCard,
                opacity: animando ? 0 : 1,
                transform: animando ? "translateX(30px)" : "translateX(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div style={styles.numeroPregunta}>
                Pregunta {preguntaActual + 1}
              </div>
              <div style={styles.textoPregunta}>
                {preguntas[preguntaActual].texto}
              </div>

              {preguntas[preguntaActual].opciones.map((opcion, idx) => (
                <button
                  key={idx}
                  style={styles.opcionBtn(idx, seleccionada === idx)}
                  onClick={() => handleSeleccionar(opcion.tipo, idx)}
                  onMouseEnter={(e) => {
                    if (seleccionada !== idx) {
                      e.currentTarget.style.borderColor = coloresBotones[idx % coloresBotones.length];
                      e.currentTarget.style.background = `${coloresBotones[idx % coloresBotones.length]}11`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (seleccionada !== idx) {
                      e.currentTarget.style.borderColor = "#f0e6ff";
                      e.currentTarget.style.background = "#fafafa";
                    }
                  }}
                >
                  <span style={styles.opcionLetra(idx, seleccionada === idx)}>
                    {letras[idx]}
                  </span>
                  {opcion.texto}
                </button>
              ))}
            </div>
          </>
        )}

        {/* ===================== RESULTADO ===================== */}
        {paso === "resultado" && resultado && (
          <div style={styles.resultadoCard}>
            <span style={styles.resultadoEmoji}>{resultado.emoji}</span>
            {nombre && (
              <p style={{ color: "#a78bfa", fontWeight: "700", fontSize: "1rem", marginBottom: "6px" }}>
                {nombre}, tu estilo de apego es:
              </p>
            )}
            {!nombre && (
              <p style={{ color: "#a78bfa", fontWeight: "700", fontSize: "1rem", marginBottom: "6px" }}>
                Tu estilo de apego es:
              </p>
            )}
            <div style={styles.resultadoBadge(resultado.color)}>
              {resultado.titulo}
            </div>
            <h2 style={styles.resultadoTitulo}>{resultado.titulo}</h2>

            <div style={styles.resultadoDesc(resultado.colorLight)}>
              {resultado.descripcion}
            </div>

            {/* Fortalezas */}
            <div style={styles.fortalezasTitle}>✨ Tus fortalezas</div>
            <ul style={styles.fortalezasList}>
              {resultado.fortalezas.map((f, i) => (
                <li key={i} style={styles.fortalezasItem(resultado.color)}>
                  <span style={styles.checkIcon(resultado.color)}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Consejo */}
            <div style={styles.consejoBox(resultado.colorLight, resultado.color)}>
              <div style={styles.consejoTitle(resultado.color)}>
                💡 Mi consejo para ti
              </div>
              <p style={styles.consejoText}>{resultado.consejo}</p>
            </div>

            {/* Distribución */}
            <div style={styles.resultadosDistrib}>
              <div style={styles.distribTitle}>📊 Tu distribución de apego</div>
              {Object.entries(calcularDistribucion()).map(([tipo, cnt]) => {
                const pct = Math.round((cnt / preguntas.length) * 100);
                return (
                  <div key={tipo} style={styles.distribBarra}>
                    <div style={styles.distribLabel}>
                      <span>{nombresDistrib[tipo]}</span>
                      <span>{pct}%</span>
                    </div>
                    <div style={styles.distribTrack}>
                      <div style={styles.distribFill(pct, coloresDistrib[tipo])} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tipos de apego info */}
            <div style={{ background: "#f8f4ff", borderRadius: "14px", padding: "18px 20px", marginBottom: "22px", textAlign: "left" }}>
              <div style={{ fontWeight: "800", color: "#2d1a4e", fontSize: "0.9rem", marginBottom: "12px" }}>
                🌈 Los 4 estilos de apego
              </div>
              {Object.entries(resultados).map(([key, r]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{r.emoji}</span>
                  <div>
                    <span style={{ fontWeight: "700", color: r.color, fontSize: "0.88rem" }}>{r.titulo}</span>
                    {key === tipoResultado && (
                      <span style={{ background: r.color, color: "#fff", borderRadius: "8px", padding: "1px 8px", fontSize: "0.7rem", fontWeight: "700", marginLeft: "6px" }}>
                        Tú
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              style={styles.btnPrimario}
              onClick={handleReiniciar}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(192,132,252,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(192,132,252,0.4)";
              }}
            >
              Hacer el quiz de nuevo 🔄
            </button>
            <p style={{ color: "#bbb", fontSize: "0.78rem", marginTop: "14px" }}>
              Comparte con alguien que quieras 💜
            </p>
          </div>
        )}
      </div>
    </div>
  );
}