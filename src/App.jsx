import React, { useState } from 'react';
import { 
  Heart, X, Star, RotateCcw, Settings, Home, Search, 
  MessageCircle, User, Diamond, Rocket, Bell, ChevronRight 
} from 'lucide-react';

const HelicaApp = () => {
  const [view, setView] = useState('discovery');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      id: 1,
      name: 'Sofia Mendes',
      age: 22,
      location: 'Benguela, Angola',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
      bio: 'Amante de fotografia e design. Gosto de explorar novos lugares e capturar momentos únicos.',
      tags: ['Culinária', 'Medicina', 'Leitura']
    },
    {
      id: 2,
      name: 'Anselmo Dias',
      age: 25,
      location: 'Luanda, Angola',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      bio: 'Designer gráfico apaixonado por tecnologia e inovação. Sempre buscando criar experiências incríveis.',
      tags: ['Design', 'Tech', 'Criatividade']
    },
    {
      id: 3,
      name: 'Mariana Costa',
      age: 24,
      location: 'Saurimo, Angola',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
      bio: 'Influenciadora de moda e lifestyle. Apaixonada por viajar e descobrir culturas diferentes.',
      tags: ['Moda', 'Viagens', 'Lifestyle']
    }
  ];

  const currentCard = cards[currentCardIndex];

  const handleCardAction = (action) => {
    console.log(`Ação: ${action}`);
    setCurrentCardIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="bg-[#0D0D12] text-white min-h-screen font-['Inter'] flex flex-col items-center">
      {/* Container Mobile - Largura fixa como nas fotos */}
      <div className="w-full max-w-[390px] min-h-screen border-x border-[#1A1A22] flex flex-col relative bg-[#0D0D12]">
        
        {/* HEADER - Exatamente como nas capturas */}
        <header className="px-5 py-4 flex items-center justify-between border-b border-[#1A1A22] sticky top-0 bg-[#0D0D12] z-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] flex items-center justify-center">
              <span className="text-white font-black text-lg">H</span>
            </div>
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] bg-clip-text text-transparent">HÉLICA</span>
          </div>
          <div className="flex items-center gap-3">
            <Diamond size={22} className="text-[#8B5CF6]" />
            <Rocket size={22} className="text-[#8B5CF6]" />
            <div className="relative">
              <Bell size={22} className="text-[#F59E0B]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full text-[10px] flex items-center justify-center font-bold">3</span>
            </div>
          </div>
        </header>

        {/* VIEW: DISCOVERY (TELA DE DESCOBERTA) */}
        {view === 'discovery' && (
          <main className="flex-1 px-4 py-6 flex flex-col">
            {/* Card Principal */}
            <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl border border-[#1A1A22]">
              <img 
                src={currentCard.image}
                className="w-full h-full object-cover"
                alt={currentCard.name}
              />
              {/* Gradiente Inferior de Legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              {/* Informações do Card */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h1 className="text-3xl font-black mb-1">{currentCard.name}, {currentCard.age}</h1>
                <div className="flex items-center gap-1 text-gray-300 text-sm mb-3">
                  <span>📍</span> {currentCard.location}
                </div>
                <p className="text-gray-200 text-sm leading-snug mb-4">
                  {currentCard.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentCard.tags.map(tag => (
                    <span key={tag} className="bg-[#1A1A22]/80 px-3 py-1 rounded-full text-xs border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTÕES DE INTERAÇÃO - Cores exatas */}
            <div className="flex justify-between items-center px-4 mt-8 mb-20">
              <button 
                onClick={() => handleCardAction('rewind')}
                className="w-14 h-14 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#FBBF24] active:scale-90 transition text-black"
              >
                <RotateCcw size={24} />
              </button>
              <button 
                onClick={() => handleCardAction('dislike')}
                className="w-14 h-14 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#F87171] active:scale-90 transition"
              >
                <X size={30} />
              </button>
              <button 
                onClick={() => handleCardAction('superlike')}
                className="w-14 h-14 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#60A5FA] active:scale-90 transition"
              >
                <Star size={24} fill="white" />
              </button>
              <button 
                onClick={() => handleCardAction('like')}
                className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#34D399] active:scale-90 transition"
              >
                <Heart size={24} fill="white" />
              </button>
            </div>
          </main>
        )}

        {/* VIEW: DEFINIÇÕES (TELA DE PERFIL) */}
        {view === 'settings' && (
          <main className="flex-1 px-5 py-6 overflow-y-auto pb-24">
            <h2 className="text-2xl font-black mb-6">Definições</h2>
            
            {/* Card de Perfil */}
            <div className="bg-[#1A1A22] rounded-[24px] p-5 flex items-center gap-4 mb-8 border border-white/5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] flex items-center justify-center text-xl font-bold">
                RM
              </div>
              <div>
                <p className="font-black">Ribeiro Mendes</p>
                <p className="text-xs text-gray-400 font-medium tracking-wide">ribeiro@helica.ao</p>
              </div>
            </div>

            {/* Categorias de Configuração */}
            <div className="space-y-6">
              {/* CONTA */}
              <div>
                <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">CONTA</p>
                <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
                  <SettingRow label="Editar Perfil" />
                  <SettingRow label="Segurança" />
                  <SettingRow label="Verificação" border={false} />
                </div>
              </div>
              
              {/* PREFERÊNCIAS */}
              <div>
                <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">PREFERÊNCIAS</p>
                <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
                  <SettingRow label="Notificações" toggle active={true} />
                  <SettingRow label="Modo Escuro" toggle active={true} />
                  <SettingRow label="Idioma" border={false} />
                </div>
              </div>

              {/* SUPORTE */}
              <div>
                <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">SUPORTE</p>
                <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
                  <SettingRow label="Ajuda" />
                  <SettingRow label="Privacidade" />
                  <SettingRow label="Termos" border={false} />
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-[#EF4444] py-4 rounded-[14px] font-black text-sm tracking-wide hover:bg-[#F87171] active:scale-95 transition">
              Terminar Sessão
            </button>
          </main>
        )}

        {/* VIEW: BUSCA */}
        {view === 'search' && (
          <main className="flex-1 flex items-center justify-center pb-24">
            <div className="text-center">
              <Search size={48} className="text-[#8B5CF6] mx-auto mb-4" />
              <p className="text-gray-400 text-lg font-semibold">Em Desenvolvimento</p>
            </div>
          </main>
        )}

        {/* VIEW: CHAT */}
        {view === 'chat' && (
          <main className="flex-1 flex items-center justify-center pb-24">
            <div className="text-center">
              <MessageCircle size={48} className="text-[#8B5CF6] mx-auto mb-4" />
              <p className="text-gray-400 text-lg font-semibold">Em Desenvolvimento</p>
            </div>
          </main>
        )}

        {/* NAVBAR INFERIOR - Fixa na base */}
        <nav className="h-20 bg-[#1A1A22] border-t border-white/5 flex items-center justify-around px-4 sticky bottom-0 z-50">
          <button 
            onClick={() => setView('discovery')} 
            className={`transition-colors ${ view === 'discovery' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Home size={26} />
          </button>
          <button 
            onClick={() => setView('search')}
            className={`transition-colors ${view === 'search' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Search size={26} />
          </button>
          <button 
            onClick={() => setView('chat')}
            className={`transition-colors ${view === 'chat' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <MessageCircle size={26} />
          </button>
          <button 
            onClick={() => setView('settings')} 
            className={`transition-colors ${view === 'settings' ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <User size={26} />
          </button>
        </nav>
      </div>
    </div>
  );
};

// Componentes Auxiliares
const SettingRow = ({ label, toggle, active, border = true }) => (
  <div className={`flex items-center justify-between p-4 ${border ? 'border-b border-white/5' : ''}`}>
    <span className="text-sm font-semibold">{label}</span>
    {toggle ? (
      <button className={`w-11 h-6 rounded-full relative transition-colors ${active ? 'bg-[#8B5CF6]' : 'bg-[#2A2A35]'}`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'left-6' : 'left-1'}`}></div>
      </button>
    ) : (
      <ChevronRight size={18} className="text-gray-600" />
    )}
  </div>
);

export default HelicaApp;
