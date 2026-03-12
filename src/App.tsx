import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Star, 
  Activity,
  ArrowRight,
  Volume2,
  Ear,
  Brain,
  Moon,
  FileText,
  Lock,
  BookOpen,
  Calendar,
  Leaf
} from 'lucide-react';

type Step = 'intro' | 'quiz' | 'analyzing' | 'diagnosis' | 'offer';

const QUESTIONS = [
  {
    id: 1,
    question: "Com que frequência você percebe o zumbido no ouvido?",
    icon: <Clock className="w-5 h-5 text-slate-600" />,
    options: [
      "O tempo todo",
      "Algumas vezes por dia",
      "Apenas em momentos de silêncio",
      "Raramente"
    ]
  },
  {
    id: 2,
    question: "Qual desses sons mais se parece com o que você escuta?",
    icon: <Volume2 className="w-5 h-5 text-slate-600" />,
    options: [
      "Apito",
      "Cigarra",
      "Chiado",
      "Cachoeira",
      "Outro"
    ]
  },
  {
    id: 3,
    question: "Há quanto tempo você percebe esse zumbido?",
    icon: <Activity className="w-5 h-5 text-slate-600" />,
    options: [
      "Dias ou semanas (Muito recente)",
      "Menos de 3 meses",
      "De 3 a 6 meses",
      "De 6 meses a 1 ano",
      "De 1 a 3 anos",
      "Mais de 3 anos",
      "Há tantos anos que nem me lembro"
    ]
  },
  {
    id: 4,
    question: "O zumbido piora quando você tenta dormir?",
    icon: <Moon className="w-5 h-5 text-slate-600" />,
    options: [
      "Sim, muito",
      "Às vezes",
      "Não"
    ]
  },
  {
    id: 5,
    question: "Isso tem atrapalhado sua concentração ou memória?",
    icon: <Brain className="w-5 h-5 text-slate-600" />,
    options: [
      "Sim",
      "Um pouco",
      "Não"
    ]
  },
  {
    id: 6,
    question: "Você já tentou outros tratamentos ou remédios para o zumbido?",
    icon: <ShieldCheck className="w-5 h-5 text-slate-600" />,
    options: [
      "Sim, vários",
      "Apenas um ou dois",
      "Não, nunca tentei"
    ]
  },
  {
    id: 7,
    question: "Qual é a sua idade aproximada?",
    icon: <Ear className="w-5 h-5 text-slate-600" />,
    options: [
      "Menos de 30 anos",
      "30 a 45 anos",
      "46 a 60 anos",
      "Mais de 60 anos"
    ]
  }
];

export default function App() {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [analyzingText, setAnalyzingText] = useState("Iniciando análise...");

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('analyzing');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  useEffect(() => {
    if (step === 'analyzing') {
      const texts = [
        "Avaliando respostas...",
        "Cruzando dados com estudos clínicos...",
        "Identificando padrões auditivos...",
        "Gerando relatório final..."
      ];
      
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i < texts.length) {
          setAnalyzingText(texts[i]);
        } else {
          clearInterval(interval);
          setStep('diagnosis');
        }
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [step]);

  const Header = () => (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">
            S
          </div>
          <span className="font-serif text-slate-900 text-xl font-black tracking-tight uppercase">
            Saúde <span className="font-light text-slate-500">Diária</span>
          </span>
        </div>
        <div className="text-xs text-slate-500 font-medium uppercase tracking-widest hidden sm:block">
          Atualização Médica
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
        <AnimatePresence mode="wait">
          
          {/* INTRO STEP */}
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-5 text-center sm:text-left">
                <span className="inline-block border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                  Descoberta Científica
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-tight text-slate-900">
                  O protocolo japonês que está ajudando a silenciar o zumbido no ouvido
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 font-serif italic leading-relaxed">
                  Especialistas revelam como uma combinação de ingredientes naturais pode ajudar a restaurar a paz e o silêncio sem intervenções invasivas.
                </p>
              </div>

              <figure className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Medicina natural" 
                  className="w-full h-64 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 text-white text-sm font-medium">
                  Práticas tradicionais japonesas têm inspirado novas abordagens para a saúde auditiva.
                </figcaption>
              </figure>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center my-10 shadow-sm">
                <h3 className="font-serif font-bold text-2xl mb-3 text-slate-900">Avaliação de Perfil Auditivo</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">Responda a 7 perguntas simples para descobrir se o protocolo japonês é indicado para o seu caso.</p>
                <button 
                  onClick={() => setStep('quiz')}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 px-10 rounded-xl shadow-[0_8px_30px_rgb(5,150,105,0.3)] transition-all flex items-center justify-center gap-3 mx-auto text-xl animate-pulse"
                >
                  INICIAR AVALIAÇÃO AGORA
                  <ChevronRight className="w-6 h-6" />
                </button>
                <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Suas respostas são 100% confidenciais.
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-slate-700 space-y-5 leading-relaxed">
                <p>
                  Milhares de brasileiros estão relatando alívio após testar um método natural inspirado na medicina tradicional do Japão. Diferente de tratamentos convencionais, essa abordagem foca em reequilibrar o organismo de dentro para fora.
                </p>
                <p>
                  Se você sofre com aquele som constante, apito ou chiado que afeta seu sono e concentração, responda a este rápido teste de 1 minuto para descobrir se o seu perfil se encaixa neste novo protocolo.
                </p>
              </div>
            </motion.div>
          )}

          {/* QUIZ STEP */}
          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-10">
                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <span>Passo {currentQuestion + 1} de {QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div 
                    className="bg-slate-900 h-1.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-slate-200">
                <div className="flex flex-col gap-4 mb-8">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    {QUESTIONS[currentQuestion].icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                    {QUESTIONS[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-3 mt-8">
                  {QUESTIONS[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full text-left p-5 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all duration-200 font-medium text-slate-700 flex items-center justify-between group"
                    >
                      <span className="text-lg">{option}</span>
                      <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-slate-900 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ANALYZING STEP */}
          {step === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 border-2 border-slate-100 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-slate-900 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-slate-900 animate-pulse" />
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3">Processando Dados</h2>
              <p className="text-slate-500 font-medium animate-pulse">{analyzingText}</p>
            </motion.div>
          )}

          {/* DIAGNOSIS STEP */}
          {step === 'diagnosis' && (
            <motion.div
              key="diagnosis"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-200">
                <div className="bg-rose-700 p-8 text-center text-white border-b border-rose-800 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-rose-400 animate-pulse"></div>
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-rose-100 animate-bounce" />
                  <h2 className="text-3xl font-serif font-black mb-2">Alerta Vermelho: Relatório Clínico</h2>
                  <p className="text-rose-100 font-bold text-sm tracking-widest uppercase">Análise Concluída com Nível de Risco Elevado</p>
                </div>
                
                <div className="p-8 sm:p-12 space-y-8">
                  <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-xl shadow-sm">
                    <h3 className="text-rose-900 font-bold text-xl mb-2 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      Atenção Imediata Necessária
                    </h3>
                    <p className="text-rose-800 font-medium leading-relaxed">
                      Seu perfil indica sinais graves de zumbido crônico. O que você está sentindo <strong className="font-black underline decoration-rose-400">não é apenas um barulho incômodo</strong>, mas um sinal de alerta do seu cérebro de que as células auditivas estão em sofrimento contínuo.
                    </p>
                  </div>

                  <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                    <p>
                      Estudos neurológicos recentes alertam: ignorar o zumbido pode levar a consequências irreversíveis. Quando não tratado, o zumbido constante está diretamente ligado a:
                    </p>
                    
                    <ul className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 bg-rose-600 rounded-full shrink-0"></div>
                        <span><strong>Perda auditiva progressiva</strong> e acelerada.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 bg-rose-600 rounded-full shrink-0"></div>
                        <span><strong>Declínio cognitivo</strong>, falhas de memória e dificuldade extrema de concentração.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 bg-rose-600 rounded-full shrink-0"></div>
                        <span><strong>Insônia crônica</strong>, ansiedade severa e quadros depressivos profundos.</span>
                      </li>
                    </ul>

                    <p className="font-bold text-slate-900 text-xl border-l-4 border-slate-900 pl-4 py-2">
                      A boa notícia é que a ciência encontrou uma saída antes que seja tarde demais.
                    </p>

                    <p>
                      Pesquisadores descobriram que <strong className="text-emerald-700">receitas naturais específicas da medicina japonesa</strong> possuem compostos bioativos capazes de "desligar" esse alarme cerebral, agindo diretamente na raiz da inflamação auditiva.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-200 mt-8">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6 text-center">
                      <p className="text-emerald-800 font-bold text-lg mb-1">Existe uma janela de oportunidade para agir.</p>
                      <p className="text-emerald-600 text-sm">Um protocolo com 30 receitas naturais foi liberado hoje para o público brasileiro.</p>
                    </div>
                    
                    <button 
                      onClick={() => setStep('offer')}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white font-black py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgb(225,29,72,0.4)] transition-all flex items-center justify-center gap-3 text-2xl sm:text-3xl animate-pulse border-b-4 border-rose-800"
                    >
                      VER A SOLUÇÃO DE EMERGÊNCIA
                      <ArrowRight className="w-8 h-8" />
                    </button>
                    <p className="text-center text-rose-500 font-bold text-sm mt-4 uppercase tracking-wider">
                      Aja agora antes que o dano piore
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* OFFER STEP */}
          {step === 'offer' && (
            <motion.div
              key="offer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 pb-20"
            >
              <div className="text-center space-y-5">
                <span className="inline-block border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                  Solução Recomendada
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">
                  O Protocolo Japonês Para o Zumbido
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-serif italic">
                  Conheça o método natural que está ajudando milhares de pessoas a recuperarem o silêncio e a qualidade de vida.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-square md:aspect-auto md:h-full relative bg-slate-100">
                    <img 
                      src="https://i.ibb.co/LdmbxghY/Gemini-Generated-Image-fzxw5qfzxw5qfzxw.png" 
                      alt="Protocolo Japonês" 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 sm:p-8">
                    <div className="prose sm:prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
                    <p>
                      Uma <strong>nova descoberta científica japonesa</strong> revelou um protocolo com 30 receitas naturais, incluindo um chá específico utilizado há gerações para ajudar a reduzir o zumbido e promover a saúde auditiva.
                    </p>
                    <p>
                      Este protocolo foi inspirado em práticas tradicionais do Japão e utiliza ingredientes simples e naturais que podem ser preparados na sua própria casa, sem complicações ou equipamentos caros.
                    </p>
                    
                    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 p-4 sm:p-8 rounded-2xl mt-6 sm:mt-8 border-2 border-emerald-200 shadow-lg relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
                      
                      <h3 className="text-emerald-900 font-serif font-black text-xl sm:text-3xl mt-0 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 relative z-10">
                        <CheckCircle2 className="text-emerald-600 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                        O que está incluso no seu acesso:
                      </h3>
                      
                      <ul className="space-y-3 sm:space-y-4 mb-0 relative z-10">
                        <li className="flex items-start gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg text-emerald-600 shrink-0">
                            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="text-slate-700 text-sm sm:text-lg leading-relaxed">
                            <strong className="text-emerald-900 block mb-0.5 sm:mb-1 text-base sm:text-xl">Manual Terapêutico Digital:</strong> 
                            30 formulações naturais desenvolvidas especificamente para o alívio do zumbido e saúde auditiva.
                          </span>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg text-emerald-600 shrink-0">
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="text-slate-700 text-sm sm:text-lg leading-relaxed">
                            <strong className="text-emerald-900 block mb-0.5 sm:mb-1 text-base sm:text-xl">Metodologia Prática:</strong> 
                            Cronograma estruturado em um passo a passo direto, criado para fácil implementação na sua rotina diária.
                          </span>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg text-emerald-600 shrink-0">
                            <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="text-slate-700 text-sm sm:text-lg leading-relaxed">
                            <strong className="text-emerald-900 block mb-0.5 sm:mb-1 text-base sm:text-xl">Compostos Acessíveis:</strong> 
                            Utilização exclusiva de ingredientes 100% naturais, facilmente encontrados em mercados locais ou empórios.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                <div className="flex justify-center pb-2">
                  <a 
                    href="https://ggcheckout.com.br/checkout/v5/7o2owTi3USmuzz7rY3Vb?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all flex items-center gap-2 text-sm sm:text-base no-underline"
                  >
                    Quero Adquirir o Protocolo <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-center text-slate-900">
                  Relatos de quem já aplicou o protocolo
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                      <p className="text-slate-600 italic mb-3 text-sm leading-snug">
                        "Eu já não aguentava mais aquele apito na hora de dormir. Comecei a fazer o chá da receita 4 e em poucas semanas percebi uma diferença enorme. Finalmente estou conseguindo descansar."
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      <img src="https://i.ibb.co/Hfx9JYJn/senhora-idosa-12351598.png" alt="Maria R." className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-none">Maria R.</p>
                        <p className="text-xs text-slate-500 mt-1">58 anos</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                      <p className="text-slate-600 italic mb-3 text-sm leading-snug">
                        "Sempre fui cético com coisas naturais, mas o zumbido estava atrapalhando meu trabalho. O guia é muito fácil de seguir. As receitas são simples e o alívio foi real."
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      <img src="https://i.ibb.co/tp2DY8VZ/pastor-ailton.png" alt="João S." className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-none">João S.</p>
                        <p className="text-xs text-slate-500 mt-1">62 anos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offer Box */}
              <div className="bg-slate-900 rounded-3xl shadow-xl p-1 sm:p-1.5 max-w-3xl mx-auto">
                <div className="bg-white rounded-[1.35rem] p-6 sm:p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                    ACESSO IMEDIATO
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mb-2 mt-2">
                    Guia Digital: 30 Receitas Naturais
                  </h2>
                  <p className="text-base text-slate-600 mb-6">
                    Tenha acesso agora mesmo ao protocolo completo e comece hoje.
                  </p>

                  <div className="flex flex-col items-center justify-center mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 line-through text-sm mb-1">De R$ 97,00 por apenas</span>
                    <div className="flex items-start text-emerald-600">
                      <span className="text-xl font-bold mt-1.5">R$</span>
                      <span className="text-5xl font-black tracking-tighter">27,90</span>
                    </div>
                    <span className="text-xs text-slate-500 mt-2 font-medium">Pagamento único. Acesso vitalício.</span>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto mt-8">
                    <a 
                      href="https://ggcheckout.com.br/checkout/v5/7o2owTi3USmuzz7rY3Vb?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-6 px-6 rounded-2xl shadow-[0_10px_40px_rgb(16,185,129,0.4)] transition-all text-2xl sm:text-3xl animate-pulse flex flex-col items-center justify-center gap-1 border-b-4 border-emerald-700 text-center no-underline"
                    >
                      <span>QUERO COMEÇAR AGORA</span>
                      <span className="text-sm font-medium opacity-90 tracking-wide">(Clique aqui para acessar)</span>
                    </a>
                    <a 
                      href="https://ggcheckout.com.br/checkout/v5/7o2owTi3USmuzz7rY3Vb?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-sm transition-all text-lg flex items-center justify-center gap-2 text-center no-underline"
                    >
                      ACESSAR O GUIA <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>


            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
