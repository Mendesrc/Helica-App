import React, { useState } from 'react';
import { 
  Heart, X, Star, RotateCcw, Home, Search, 
  MessageCircle, User, Diamond, Rocket, Bell, ChevronRight,
  ArrowLeft, Send, Wallet, Zap, Camera, Check, PlusCircle,
  Flag, MapPin
} from 'lucide-react';

const HelicaApp = () => {
  const [view, setView] = useState('discovery');
  const [coins, setCoins] = useState(1250);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationStep, setVerificationStep] = useState(1);
  const [capturedSelfie, setCapturedSelfie] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'other', text: 'Olá! Vi que está interessado no ensaio fotográfico para o evento em Saurimo. Como posso ajudar?' },
    { id: 2, sender: 'me', text: 'Boa tarde! Gostaria de saber se o valor já inclui a edição profissional das fotos.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const discoveryCards = [
    {
      id: 1,
      name: 'Sofia Mendes',
      age: 22,
      location: 'Benguela',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
      bio: 'Amante de fotografia e design. Gosto de explorar novos lugares e capturar momentos únicos.',
      tags: ['Culinária', 'Medicina', 'Leitura']
    },
    {
      id: 2,
      name: 'Anselmo Dias',
      age: 25,
      location: 'Luanda',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      bio: 'Designer gráfico criativo com paixão por inovação digital.',
      tags: ['Design', 'Tecnologia', 'Música']
    },
    {
      id: 3,
      name: 'Mariana Costa',
      age: 24,
      location: 'Saurimo',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
      bio: 'Influencer de moda e estilo de vida. Sempre buscando novas parcerias criativas.',
      tags: ['Moda', 'Beleza', 'Viagens']
    }
  ];

  const currentCard = discoveryCards[currentCardIndex];

  const handleCardAction = (action) => {
    setCurrentCardIndex((prev) => (prev + 1) % discoveryCards.length);
  };

  const handleBoostActivate = () => {
    if (coins < 50) {
      alert('Saldo insuficiente!');
      return;
    }
    setCoins(prev => prev - 50);
    setIsModalOpen(false);
    alert('Boost Ativado! O teu perfil está agora em destaque por 30 minutos.');
  };

  const simulateCameraCapture = () => {
    setCapturedSelfie('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80');
    setVerificationStep(2);
  };

  const handleVerificationSubmit = () => {
    setVerificationStep(3);
  };

  const resetVerification = () => {
    setCapturedSelfie(null);
    setVerificationStep(1);
    setView('settings');
  };

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { id: chatMessages.length + 1, sender: 'me', text: chatInput }]);
      setChatInput('');
    }
  };

  // HEADER PREMIUM
  const Header = () => (
    <header className="px-5 py-4 flex items-center justify-between sticky top-0 bg-[#0c111e]/95 backdrop-blur-xl z-50 border-b border-[#1e293b]/50 shadow-lg shadow-purple-500/5">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black bg-gradient-to-r from-[#a855f7] via-[#f97316] to-[#a855f7] bg-clip-text text-transparent tracking-tight animate-pulse">HÉLICA</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2.5 bg-[#1e293b]/50 hover:bg-[#334155]/80 rounded-[14px] transition-all duration-300 text-[#fbbf24] hover:scale-110 active:scale-95 backdrop-blur-sm border border-[#334155]/30">
          <Diamond size={20} />
        </button>
        <button className="p-2.5 bg-[#1e293b]/50 hover:bg-[#334155]/80 rounded-[14px] transition-all duration-300 text-[#fbbf24] hover:scale-110 active:scale-95 backdrop-blur-sm border border-[#334155]/30">
          <Rocket size={20} />
        </button>
        <button className="p-2.5 bg-[#1e293b]/50 hover:bg-[#334155]/80 rounded-[14px] transition-all duration-300 relative hover:scale-110 active:scale-95 backdrop-blur-sm border border-[#334155]/30">
          <Bell size={20} className="text-[#fbbf24]" />
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-full text-[11px] flex items-center justify-center font-bold text-white shadow-lg animate-bounce">
              {notificationsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );

  // DISCOVERY VIEW - PREMIUM
  const DiscoveryView = () => (
    <main className="flex-1 px-4 py-6 flex flex-col mb-20 overflow-y-auto">
      {/* Card Premium com Animação */}
      <div className="relative h-[500px] rounded-[35px] overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#1e293b]/50 group hover:shadow-purple-500/30 transition-all duration-500">
        <img 
          src={currentCard.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={currentCard.name}
        />
        
        {/* Overlay com Gradient Sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Botão Flag Flutuante */}
        <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white p-3 rounded-[16px] transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl">
          <Flag size={22} />
        </button>
        
        {/* Informações Premium */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex items-end gap-2 mb-3 transform group-hover:-translate-y-1 transition-transform duration-300">
            <h1 className="text-4xl font-black tracking-tight">{currentCard.name}</h1>
            <span className="text-2xl font-light mb-1">{currentCard.age}</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-sm text-gray-300 mb-4">
            <MapPin size={16} className="text-[#f97316]" />
            {currentCard.location}, Angola
          </div>
          
          <p className="text-sm leading-relaxed mb-4 text-gray-200 line-clamp-2">
            {currentCard.bio}
          </p>
          
          {/* Tags com Glassmorphism */}
          <div className="flex flex-wrap gap-2">
            {currentCard.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-white/8 backdrop-blur-lg border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Botões de Ação com Animações */}
      <div className="flex items-center justify-center gap-8 mt-12">
        <button 
          onClick={() => handleCardAction('dislike')} 
          className="w-16 h-16 bg-[#1a2236]/50 hover:bg-[#1e293b] border-2 border-[#ef4444]/30 hover:border-[#ef4444]/60 rounded-full flex items-center justify-center shadow-xl shadow-red-500/10 transition-all duration-300 hover:scale-110 active:scale-90 group backdrop-blur-sm hover:shadow-red-500/30"
        >
          <X size={28} className="text-[#ef4444] group-hover:text-[#ff5555]" />
        </button>
        
        <button 
          onClick={() => handleCardAction('superlike')} 
          className="w-20 h-20 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-125 active:scale-95 transform hover:-translate-y-2"
        >
          <Star size={32} fill="white" className="text-white" />
        </button>
        
        <button 
          onClick={() => handleCardAction('like')} 
          className="w-16 h-16 bg-[#1a2236]/50 hover:bg-[#1e293b] border-2 border-[#22c55e]/30 hover:border-[#22c55e]/60 rounded-full flex items-center justify-center shadow-xl shadow-green-500/10 transition-all duration-300 hover:scale-110 active:scale-90 group backdrop-blur-sm hover:shadow-green-500/30"
        >
          <Heart size={28} fill="#22c55e" className="text-[#22c55e] group-hover:text-[#4ade80]" />
        </button>
      </div>
    </main>
  );

  // WALLET VIEW
  const WalletView = () => (
    <main className="flex-1 px-5 py-6 pb-20 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView('discovery')} className="p-2 hover:bg-[#1e293b] rounded-lg transition-all duration-300 hover:scale-110 active:scale-95">
          <ArrowLeft size={24} className="text-gray-400" />
        </button>
        <h2 className="text-3xl font-black">Carteira</h2>
      </div>
      
      {/* Card de Saldo Premium */}
      <div className="bg-gradient-to-br from-[#1e293b]/50 via-[#334155]/30 to-[#1e293b]/50 rounded-[28px] p-8 mb-8 border border-[#a855f7]/30 shadow-2xl shadow-purple-500/20 backdrop-blur-lg transform hover:scale-105 transition-all duration-500">
        <p className="text-gray-400 text-sm font-medium mb-3">Saldo de Moedas</p>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-5xl font-black bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
            {coins}
          </h3>
          <Zap size={40} className="text-[#f97316] fill-[#f97316] animate-bounce" />
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-white/10 backdrop-blur px-4 py-2.5 rounded-full text-sm font-bold border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300">Histórico</button>
          <button className="flex-1 bg-white text-black px-4 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">Resgatar</button>
        </div>
      </div>

      <h4 className="text-sm font-black mb-4 text-gray-200">Comprar Moedas</h4>
      <div className="space-y-3">
        {[
          { q: 500, p: '2.500 Kz', desc: 'Ideal para 1 anúncio' },
          { q: 1500, p: '6.000 Kz', desc: 'Destaque semanal', popular: true },
          { q: 5000, p: '15.000 Kz', desc: 'Pack Profissional' }
        ].map((pack, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-[20px] border transition-all duration-300 cursor-pointer hover:scale-105 transform ${
              pack.popular 
                ? 'bg-gradient-to-r from-[#a855f7]/20 to-[#f97316]/20 border-[#a855f7]/50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40'
                : 'bg-[#1e293b]/50 border-[#334155]/50 hover:border-[#a855f7]/40 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 font-black text-lg mb-1">
                  <span className="bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent">{pack.q}</span>
                  <Zap size={16} className="text-[#f97316] fill-[#f97316]" />
                  {pack.popular && <span className="bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-2 shadow-lg">Popular</span>}
                </div>
                <p className="text-xs text-gray-500 font-medium">{pack.desc}</p>
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg">€{pack.p}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );

  // CHAT VIEW
  const ChatView = () => (
    <main className="flex-1 flex flex-col pb-20">
      <div className="px-5 py-4 flex items-center gap-4 border-b border-[#1e293b]/30 bg-[#0c111e]/95 backdrop-blur-xl sticky top-0 z-10">
        <button onClick={() => setView('discovery')} className="p-2 hover:bg-[#1e293b] rounded-lg transition-all hover:scale-110 active:scale-95">
          <ArrowLeft size={24} className="text-gray-400" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">SM</div>
          <div>
            <h4 className="font-bold text-sm">Sofia Mendes</h4>
            <span className="text-[11px] text-[#22c55e] font-bold">🟢 Online agora</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-center my-4">
          <div className="bg-[#a855f7]/10 border border-[#a855f7]/30 px-4 py-2 rounded-2xl text-[10px] text-[#a855f7] font-bold uppercase tracking-widest backdrop-blur-lg">Negociação Iniciada</div>
        </div>
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
            <div className={`max-w-[75%] p-4 rounded-2xl text-sm backdrop-blur-sm transition-all duration-300 ${
              msg.sender === 'me'
                ? 'bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white rounded-br-none shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50'
                : 'bg-[#1e293b]/50 text-gray-200 border border-[#334155]/50 rounded-bl-none hover:bg-[#1e293b]/70'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#0c111e]/95 border-t border-[#1e293b]/30 flex items-center gap-2 backdrop-blur-xl sticky bottom-0">
        <button className="p-3 bg-[#1e293b]/50 hover:bg-[#334155]/80 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm border border-[#334155]/30">
          <PlusCircle size={22} />
        </button>
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Escreve a tua proposta..."
          className="flex-1 bg-[#1e293b]/50 px-5 py-3 rounded-2xl outline-none text-sm border border-[#334155]/50 focus:border-[#a855f7] transition-all duration-300 text-white placeholder-gray-500 backdrop-blur-sm focus:bg-[#1e293b]/80"
        />
        <button onClick={sendMessage} className="bg-gradient-to-r from-[#a855f7] to-[#f97316] p-3 rounded-2xl text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 hover:scale-110 active:scale-95">
          <Send size={22} />
        </button>
      </div>
    </main>
  );

  // SETTINGS VIEW
  const SettingsView = () => (
    <main className="flex-1 px-5 py-6 pb-20 overflow-y-auto">
      <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent">Definições</h2>
      
      {/* Card de Perfil Premium */}
      <div className="bg-gradient-to-r from-[#1e293b]/50 to-[#334155]/50 rounded-[24px] p-5 flex items-center gap-4 mb-8 border border-[#a855f7]/30 shadow-lg shadow-purple-500/15 backdrop-blur-sm hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] flex items-center justify-center text-xl font-black text-white shadow-lg">RM</div>
        <div>
          <p className="font-black text-white">Ribeiro Mendes</p>
          <p className="text-xs text-gray-400 font-medium">ribeiro@helica.ao</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-black tracking-[0.2em] mb-3 px-2 text-gray-500 uppercase">CONTA</p>
          <div className="bg-[#1e293b]/30 rounded-[20px] overflow-hidden border border-[#334155]/50 shadow-lg backdrop-blur-sm hover:border-[#a855f7]/30 transition-all duration-300">
            <SettingRow label="Editar Perfil" />
            <SettingRow label="Segurança" />
            <button onClick={() => setView('verification')} className="w-full flex items-center justify-between p-4 border-b border-[#334155]/30 hover:bg-[#334155]/30 transition-all duration-300 text-white last:border-b-0 active:scale-95">
              <span className="text-sm font-semibold">Verificação</span>
              <ChevronRight size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <div>
          <p className="text-[11px] font-black tracking-[0.2em] mb-3 px-2 text-gray-500 uppercase">PREFERÊNCIAS</p>
          <div className="bg-[#1e293b]/30 rounded-[20px] overflow-hidden border border-[#334155]/50 shadow-lg backdrop-blur-sm hover:border-[#a855f7]/30 transition-all duration-300">
            <SettingRowToggle label="Notificações" defaultChecked={true} />
            <SettingRowToggle label="Modo Escuro" defaultChecked={true} />
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black tracking-[0.2em] mb-3 px-2 text-gray-500 uppercase">SUPORTE</p>
          <div className="bg-[#1e293b]/30 rounded-[20px] overflow-hidden border border-[#334155]/50 shadow-lg backdrop-blur-sm hover:border-[#a855f7]/30 transition-all duration-300">
            <SettingRow label="Ajuda" />
            <SettingRow label="Privacidade" />
          </div>
        </div>
      </div>
      
      <button className="w-full mt-8 bg-gradient-to-r from-[#ef4444] to-[#f87171] py-4 rounded-[14px] font-black text-sm tracking-wide hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-red-500/40 transform hover:scale-105 active:scale-95">Terminar Sessão</button>
    </main>
  );

  // VERIFICATION VIEW
  const VerificationView = () => (
    <main className="flex-1 flex flex-col pb-20 bg-[#0c111e]">
      <div className="px-5 py-4 flex items-center justify-between border-b border-[#1e293b]/30 bg-[#0c111e]/95 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => { resetVerification(); setView('settings'); }} className="p-2 hover:bg-[#1e293b] rounded-lg transition-all hover:scale-110 active:scale-95">
            <ArrowLeft size={24} className="text-gray-400" />
          </button>
          <h1 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            Verificação
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white rounded-full p-1 shadow-lg shadow-blue-500/30">
              <Check size={14} />
            </span>
          </h1>
        </div>
        <span className="text-[10px] font-black text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded-full uppercase border border-[#3b82f6]/30 backdrop-blur-sm">Passo {verificationStep}/3</span>
      </div>

      {/* Progress Bar Premium */}
      <div className="px-6 py-4 bg-gradient-to-r from-[#1e293b]/50 to-[#0c111e] flex items-center justify-between border-b border-[#1e293b]/30 backdrop-blur-sm">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-1 shrink-0 transform transition-all duration-300 hover:scale-110">
              <div className={`w-8 h-8 rounded-full flex justify-center items-center text-xs font-bold transition-all duration-300 shadow-lg ${
                verificationStep >= step 
                  ? 'bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white shadow-blue-500/40 scale-110' 
                  : 'bg-[#1e293b] text-gray-500 border border-[#334155]'
              }`}>{step}</div>
              <span className={`text-[9px] font-bold transition-all duration-300 ${
                verificationStep >= step ? 'text-[#3b82f6]' : 'text-gray-600'
              }`}>{step === 1 ? 'Selfie' : step === 2 ? 'Envio' : 'Selo'}</span>
            </div>
            {step < 3 && (
              <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                verificationStep > step ? 'bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] shadow-lg shadow-blue-500/30' : 'bg-[#334155]'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* PASSO 1 */}
      {verificationStep === 1 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-6 px-5 py-8 animate-fadeIn">
          <h2 className="text-xl font-bold text-white text-center">Tira uma selfie real</h2>
          <p className="text-sm text-gray-400 text-center leading-relaxed max-w-xs">Precisamos de uma foto espontânea do teu rosto para validar que és o dono legítimo deste perfil.</p>

          <div className="w-64 h-64 bg-gradient-to-br from-[#1e293b]/50 to-[#0c111e] border-2 border-dashed border-[#334155]/50 rounded-3xl flex flex-col justify-center items-center group cursor-pointer hover:border-[#3b82f6] transition-all duration-300 relative shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm">
            <Camera size={40} className="text-gray-600 mb-2 group-hover:text-[#3b82f6] transition-all duration-300" />
            <span className="text-[12px] text-gray-500 font-semibold">Câmera pronta</span>
          </div>

          <button onClick={simulateCameraCapture} className="w-16 h-16 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center shadow-2xl shadow-white/20 active:scale-90 transition-all duration-300 border-4 border-[#0c111e] transform hover:scale-110">
            <div className="w-11 h-11 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] rounded-full"></div>
          </button>
        </div>
      )}

      {/* PASSO 2 */}
      {verificationStep === 2 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-6 px-5 py-8 animate-fadeIn">
          <h2 className="text-xl font-bold text-white text-center">Envia o teu pedido</h2>
          <p className="text-sm text-gray-400 text-center leading-relaxed max-w-xs">Confirma para submeteres a tua selfie para a equipa de moderação.</p>

          {capturedSelfie && (
            <div className="w-60 h-60 rounded-3xl overflow-hidden border-2 border-[#334155] shadow-2xl shadow-purple-500/20 relative transform hover:scale-105 transition-all duration-300">
              <img src={capturedSelfie} alt="Selfie" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg animate-bounce">Capturada</div>
            </div>
          )}

          <div className="w-full max-w-xs flex flex-col gap-3">
            <button onClick={handleVerificationSubmit} className="w-full py-4 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] hover:opacity-95 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/30 uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95">
              Submeter para Aprovação
            </button>
            <button onClick={() => setVerificationStep(1)} className="w-full py-3 bg-[#1e293b]/50 hover:bg-[#334155]/50 text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 border border-[#334155]/50 backdrop-blur-sm transform hover:scale-105 active:scale-95">
              Tirar Nova Foto
            </button>
          </div>
        </div>
      )}

      {/* PASSO 3 */}
      {verificationStep === 3 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-6 text-center px-5 py-8 animate-fadeIn">
          <div className="w-20 h-20 bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white rounded-full flex justify-center items-center shadow-2xl shadow-blue-500/50 relative transform hover:scale-110 transition-all duration-300">
            <div className="absolute inset-0 bg-[#3b82f6] rounded-full animate-ping opacity-20"></div>
            <Check size={40} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black text-white">Pedido Enviado!</h2>
            <p className="text-sm text-gray-400 leading-relaxed px-2">
              A tua selfie foi enviada. Em breve receberás o <span className="text-[#3b82f6] font-bold">Selo de Verificação</span>.
            </p>
          </div>

          <button onClick={resetVerification} className="w-full max-w-xs py-4 bg-gradient-to-r from-[#1e293b] to-[#334155] hover:opacity-90 text-white rounded-xl text-xs font-bold transition-all duration-300 border border-[#334155] backdrop-blur-sm transform hover:scale-105 active:scale-95 shadow-lg">
            Voltar
          </button>
        </div>
      )}
    </main>
  );

  // BOOST VIEW - MEGA PREMIUM
  const BoostView = () => (
    <main className="flex-1 px-6 py-8 flex flex-col justify-center items-center text-center gap-8 pb-20">
      <div className="flex justify-center items-center relative">
        <div className="absolute w-40 h-40 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-gradient-to-r from-[#f97316] to-[#a855f7] rounded-full blur-2xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="w-28 h-28 bg-gradient-to-r from-[#a855f7] via-[#f97316] to-[#a855f7] rounded-full flex justify-center items-center shadow-2xl shadow-purple-500/60 relative z-10 border-4 border-[#0c111e] transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/80">
          <Zap size={56} className="text-white fill-white" />
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-sm z-10 transform hover:scale-105 transition-all duration-300">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Destaque Premium</h1>
        <p className="text-sm text-gray-400 font-medium leading-relaxed">
          Sejas o centro das atenções! Coloca o teu perfil no <span className="bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent font-black">topo da descoberta</span> por 30 minutos.
        </p>
      </div>

      <div className="px-5 py-3 bg-gradient-to-r from-[#a855f7]/15 to-[#f97316]/15 border border-[#a855f7]/40 rounded-2xl text-sm font-semibold text-gray-300 backdrop-blur-lg shadow-lg">
        Custo: <span className="text-transparent bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text font-black">50 moedas</span>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="w-full max-w-xs py-5 bg-gradient-to-r from-[#a855f7] via-[#f97316] to-[#a855f7] hover:opacity-95 text-white rounded-2xl text-sm font-black shadow-2xl shadow-purple-500/50 tracking-wider uppercase transition-all duration-300 transform hover:scale-110 active:scale-95 z-10 border-2 border-[#fbbf24]/30">
        Ativar Boost Agora
      </button>
    </main>
  );

  // MODAL PREMIUM
  const ConfirmModal = () => (
    isModalOpen && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0c111e] rounded-[30px] p-8 max-w-sm border border-[#a855f7]/40 shadow-2xl shadow-purple-500/40 backdrop-blur-lg transform scale-100 hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-black text-white mb-3">Confirmar Ativação</h2>
          <p className="text-sm text-gray-400 mb-8">Tens a certeza que queres gastar 50 moedas para destacar o teu perfil?</p>
          <div className="flex gap-3">
            <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-[#1e293b]/50 text-white rounded-lg font-bold text-sm hover:bg-[#334155]/50 transition-all duration-300 border border-[#334155]/50 backdrop-blur-sm transform hover:scale-105 active:scale-95">
              Cancelar
            </button>
            <button onClick={handleBoostActivate} className="flex-1 py-3 bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white rounded-lg font-black text-sm hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );

  // NAVBAR PREMIUM
  const NavBar = () => (
    <nav className="h-20 bg-[#0c111e]/95 border-t border-[#1e293b]/50 flex items-center justify-around px-4 sticky bottom-0 z-40 backdrop-blur-xl shadow-2xl shadow-purple-500/5">
      <NavButton icon={<Home size={26} />} label="Home" active={view === 'discovery'} onClick={() => setView('discovery')} />
      <NavButton icon={<Search size={26} />} label="Busca" active={view === 'boost'} onClick={() => setView('boost')} />
      <NavButton icon={<MessageCircle size={26} />} label="Chat" active={view === 'chat'} onClick={() => setView('chat')} />
      <NavButton icon={<Wallet size={26} />} label="Carteira" active={view === 'wallet'} onClick={() => setView('wallet')} />
      <NavButton icon={<User size={26} />} label="Config" active={view === 'settings'} onClick={() => setView('settings')} />
    </nav>
  );

  return (
    <div className="bg-[#0c111e] text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[420px] min-h-screen flex flex-col relative bg-[#0c111e]">
        {view !== 'verification' && view !== 'boost' && <Header />}
        {view === 'discovery' && <DiscoveryView />}
        {view === 'wallet' && <WalletView />}
        {view === 'chat' && <ChatView />}
        {view === 'settings' && <SettingsView />}
        {view === 'verification' && <VerificationView />}
        {view === 'boost' && <BoostView />}
        {view !== 'verification' && <NavBar />}
        <ConfirmModal />
      </div>
    </div>
  );
};

// COMPONENTES AUXILIARES
const SettingRow = ({ label }) => (
  <button className="w-full flex items-center justify-between p-4 border-b border-[#334155]/30 last:border-b-0 hover:bg-[#334155]/40 transition-all duration-300 text-white active:scale-95 transform">
    <span className="text-sm font-semibold">{label}</span>
    <ChevronRight size={18} className="text-gray-500" />
  </button>
);

const SettingRowToggle = ({ label, defaultChecked }) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#334155]/30 last:border-b-0 hover:bg-[#334155]/20 transition-all duration-300">
      <span className="text-sm font-semibold text-white">{label}</span>
      <button
        onClick={() => setIsChecked(!isChecked)}
        className={`w-11 h-6 rounded-full relative transition-all duration-500 shadow-lg transform hover:scale-110 active:scale-95 ${
          isChecked 
            ? 'bg-gradient-to-r from-[#a855f7] to-[#f97316] shadow-purple-500/40' 
            : 'bg-[#334155]'
        }`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
          isChecked ? 'left-6' : 'left-1'
        }`}></div>
      </button>
    </div>
  );
};

const NavButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95 ${
    active 
      ? 'text-transparent bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-white shadow-lg shadow-purple-500/20' 
      : 'text-gray-500 hover:text-gray-300'
  }`}>
    {icon}
    <span className="text-xs font-semibold">{label}</span>
  </button>
);

export default HelicaApp;
