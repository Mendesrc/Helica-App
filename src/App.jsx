import React, { useState } from 'react';
import { 
  Camera, Heart, MessageCircle, User, Search, PlusCircle, 
  ArrowLeft, Send, Wallet, ShieldCheck, Zap, MoreVertical,
  ChevronRight, Star, Clock, MapPin, Share2, Filter
} from 'lucide-react';

// --- ESTILOS GLOBAIS E ANIMAÇÕES ---
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes scaleUp {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .animate-slide-up {
    animation: slideUp 0.25s ease-out forwards;
  }

  .animate-scale-up {
    animation: scaleUp 0.18s ease-out forwards;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(styleTag);

const HelicaApp = () => {
  // --- ESTADOS DO APLICATIVO ---
  const [view, setView] = useState('menu'); 
  const [coins, setCoins] = useState(1250);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isVip, setIsVip] = useState(false);

  // --- COMPONENTES DE INTERFACE ---

  // Botão de Voltar Genérico
  const BackButton = () => (
    <button 
      onClick={() => setView('menu')}
      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <ArrowLeft size={24} className="text-gray-800" />
    </button>
  );

  // 1. MENU PRINCIPAL (FEED)
  const MainMenu = () => (
    <div className="flex flex-col h-screen bg-gray-50 pb-20">
      {/* Header Fixo */}
      <header className="glass-effect sticky top-0 z-50 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          HÉLICA
        </h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setView('wallet')} className="flex items-center gap-1 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
            <Zap size={16} className="text-purple-600 fill-purple-600" />
            <span className="text-sm font-bold text-purple-700">{coins}</span>
          </button>
          <div onClick={() => setView('profile')} className="w-9 h-9 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full border-2 border-white shadow-sm overflow-hidden cursor-pointer">
             <img src="/api/placeholder/40/40" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Categorias Horizontais */}
      <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        {['Todos', 'Fotografia', 'Moda', 'Serviços', 'Eventos'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
              selectedCategory === cat 
              ? 'bg-gray-900 text-white shadow-lg' 
              : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed de Cards */}
      <div className="flex-1 overflow-y-auto px-4 space-y-6 pb-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-scale-up">
            <div className="relative aspect-square bg-gray-200">
              <img src="/api/placeholder/400/400" alt="Item" className="w-full h-full object-cover" />
              <button className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white">
                <Heart size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Ensaio Premium Saurimo</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={12} /> Bairro Candembe
                  </p>
                </div>
                <span className="text-purple-600 font-bold">15.000 Kz</span>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                <button 
                  onClick={() => setView('chat')}
                  className="flex-1 bg-gray-900 text-white py-3 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
                >
                  Negociar
                </button>
                <button className="p-3 bg-gray-100 rounded-2xl text-gray-600">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 2. CARTEIRA E MOEDAS (BOOST)
  const WalletView = () => (
    <div className="h-screen bg-white flex flex-col animate-slide-up">
      <div className="p-4 flex items-center justify-between border-b">
        <BackButton />
        <h2 className="font-bold text-lg text-center flex-1">Carteira Hélica</h2>
        <ShieldCheck size={24} className="text-green-500" />
      </div>
      
      <div className="p-6">
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-purple-300 text-sm font-medium mb-1">Saldo de Moedas</p>
            <h3 className="text-5xl font-black mb-6 flex items-center gap-2">
              {coins} <Zap size={32} className="text-yellow-400 fill-yellow-400" />
            </h3>
            <div className="flex gap-4">
              <button className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/20">
                Histórico
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
                Resgatar
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-bold text-gray-900 px-1">Comprar Boosts</h4>
          {[
            { q: 500, p: '2.500 Kz', desc: 'Ideal para 1 anúncio' },
            { q: 1500, p: '6.000 Kz', desc: 'Destaque semanal', vip: true },
            { q: 5000, p: '15.000 Kz', desc: 'Pack Profissional' }
          ].map((pack, idx) => (
            <div key={idx} className="flex items-center justify-between p-5 rounded-3xl border-2 border-gray-100 hover:border-purple-200 transition-all active:scale-95 cursor-pointer">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-xl text-gray-800">{pack.q}</span>
                  <Zap size={16} className="text-purple-600 fill-purple-600" />
                  {pack.vip && <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Mais Popular</span>}
                </div>
                <p className="text-xs text-gray-500 font-medium">{pack.desc}</p>
              </div>
              <button className="bg-gray-900 text-white px-5 py-2 rounded-xl font-bold text-sm">
                {pack.p}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 3. CHAT DE NEGOCIAÇÃO
  const ChatView = () => (
    <div className="h-screen bg-gray-50 flex flex-col animate-slide-up">
      <div className="glass-effect p-4 flex items-center gap-4 border-b">
        <BackButton />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <img src="/api/placeholder/40/40" alt="Vendedor" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Ribeiro Mendes</h4>
            <span className="text-[10px] text-green-500 flex items-center gap-0.5 font-bold">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Online agora
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-center my-4">
          <div className="bg-purple-50 border border-purple-100 px-4 py-2 rounded-2xl text-[10px] text-purple-600 font-bold uppercase tracking-widest shadow-sm">
            Negociação Iniciada
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm text-gray-800 border border-gray-100">
          Olá! Vi que está interessado no ensaio fotográfico para o evento em Saurimo. Como posso ajudar?
        </div>
        <div className="bg-purple-600 p-4 rounded-2xl rounded-tr-none shadow-md max-w-[80%] ml-auto text-sm text-white font-medium">
          Boa tarde! Gostaria de saber se o valor já inclui a edição profissional das fotos.
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <button className="p-3 text-gray-400 bg-gray-50 rounded-2xl">
          <PlusCircle size={24} />
        </button>
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Escreve a tua proposta..." 
            className="w-full bg-gray-50 px-5 py-3 rounded-2xl outline-none text-sm border border-transparent focus:border-purple-200"
          />
        </div>
        <button className="bg-purple-600 p-3 rounded-2xl text-white shadow-lg active:scale-90 transition-transform">
          <Send size={24} />
        </button>
      </div>
    </div>
  );

  // 4. BARRA DE NAVEGAÇÃO INFERIOR
  const NavBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
      <button onClick={() => setView('menu')} className={`p-2 transition-all ${view === 'menu' ? 'text-purple-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
        <Search size={26} />
      </button>
      <button onClick={() => setView('chat')} className={`p-2 transition-all ${view === 'chat' ? 'text-purple-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
        <MessageCircle size={26} />
      </button>
      <button className="bg-gradient-to-tr from-purple-600 to-pink-500 p-4 rounded-2xl text-white shadow-lg shadow-purple-200 -mt-8 border-4 border-white active:scale-90 transition-all">
        <PlusCircle size={28} />
      </button>
      <button onClick={() => setView('wallet')} className={`p-2 transition-all ${view === 'wallet' ? 'text-purple-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
        <Wallet size={26} />
      </button>
      <button onClick={() => setView('profile')} className={`p-2 transition-all ${view === 'profile' ? 'text-purple-600 scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
        <User size={26} />
      </button>
    </nav>
  );

  // --- RENDERIZAÇÃO PRINCIPAL ---
  return (
    <div className="max-w-md mx-auto h-screen bg-gray-50 relative font-sans overflow-hidden shadow-2xl border-x border-gray-100">
      {view === 'menu' && <MainMenu />}
      {view === 'wallet' && <WalletView />}
      {view === 'chat' && <ChatView />}
      {view === 'profile' && (
        <div className="h-screen bg-white flex items-center justify-center animate-slide-up">
           <div className="text-center p-8">
             <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-300">
               <User size={64} />
             </div>
             <h2 className="text-2xl font-black mb-2">Página de Perfil</h2>
             <p className="text-gray-500 mb-6 italic text-sm">Saurimo, Lunda Sul - Angola</p>
             <button onClick={() => setView('menu')} className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold">Voltar</button>
           </div>
        </div>
      )}
      
      {/* A NavBar só aparece no Menu, Perfil ou se não estiver no Chat/Carteira (ajustável) */}
      {(view === 'menu' || view === 'profile') && <NavBar />}
    </div>
  );
};

export default HelicaApp;
