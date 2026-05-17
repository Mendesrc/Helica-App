import React, { useState } from 'react';
import { 
  Heart, X, Star, RotateCcw, Settings, Home, Search, 
  MessageCircle, User, Diamond, Rocket, Bell, ChevronRight,
  ArrowLeft, Send, Wallet, ShieldCheck, Zap, MapPin, Share2,
  PlusCircle, Lock, Eye, EyeOff, Camera, Check
} from 'lucide-react';

const HelicaApp = () => {
  // ════════════════════ ESTADOS GLOBAIS ════════════════════
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

  // ════════════════════ DADOS MOCKADOS ════════════════════
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

  const feedItems = [
    { id: 1, title: 'Ensaio Premium Saurimo', price: '15.000 Kz', location: 'Bairro Candembe', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500' },
    { id: 2, title: 'Sessão de Fotos Luanda', price: '12.000 Kz', location: 'Centro', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=500' },
    { id: 3, title: 'Aula de Fotografia', price: '8.000 Kz', location: 'Online', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=500' }
  ];

  const currentCard = discoveryCards[currentCardIndex];

  // ════════════════════ HANDLERS ════════════════════
  const handleCardAction = (action) => {
    setCurrentCardIndex((prev) => (prev + 1) % discoveryCards.length);
  };

  const handleBoostActivate = () => {
    if (coins < 50) {
      alert('Saldo insuficiente! Por favor, recarrega a tua carteira.');
      return;
    }
    setCoins(prev => prev - 50);
    setIsModalOpen(false);
    alert('Boost Ativado! O teu perfil está agora no topo da lista por 30 minutos.');
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

  // ════════════════════ HEADER GLOBAL ════════════════════
  const Header = () => (
    <header className="px-5 py-4 flex items-center justify-between border-b border-[#1A1A22] sticky top-0 bg-[#0D0D12] z-50">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] flex items-center justify-center">
          <span className="text-white font-black text-lg">H</span>
        </div>
        <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] bg-clip-text text-transparent">HÉLICA</span>
      </div>
      <div className="flex items-center gap-3">
        <Diamond size={22} className="text-[#8B5CF6] cursor-pointer" />
        <Rocket size={22} className="text-[#8B5CF6] cursor-pointer" />
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-[#F59E0B]" />
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EF4444] rounded-full text-[10px] flex items-center justify-center font-bold">{notificationsCount}</span>
          )}
        </div>
      </div>
    </header>
  );

  // ════════════════════ VIEW: DISCOVERY ════════════════════
  const DiscoveryView = () => (
    <main className="flex-1 px-4 py-6 flex flex-col">
      <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl border border-[#1A1A22]">
        <img 
          src={currentCard.image}
          className="w-full h-full object-cover"
          alt={currentCard.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h1 className="text-3xl font-black mb-1">{currentCard.name}, {currentCard.age}</h1>
          <div className="flex items-center gap-1 text-gray-300 text-sm mb-3">
            <span>📍</span> {currentCard.location}, Angola
          </div>
          <p className="text-gray-200 text-sm leading-snug mb-4">{currentCard.bio}</p>
          <div className="flex flex-wrap gap-2">
            {currentCard.tags.map(tag => (
              <span key={tag} className="bg-[#1A1A22]/80 px-3 py-1 rounded-full text-xs border border-white/10">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 mt-8">
        <button onClick={() => handleCardAction('rewind')} className="w-14 h-14 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition active:scale-90"><RotateCcw size={24} className="text-black" /></button>
        <button onClick={() => handleCardAction('dislike')} className="w-14 h-14 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition active:scale-90"><X size={30} className="text-white" /></button>
        <button onClick={() => handleCardAction('superlike')} className="w-14 h-14 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition active:scale-90"><Star size={24} fill="white" className="text-white" /></button>
        <button onClick={() => handleCardAction('like')} className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition active:scale-90"><Heart size={24} fill="white" className="text-white" /></button>
      </div>
    </main>
  );

  // ════════════════════ VIEW: WALLET ════════════════════
  const WalletView = () => (
    <main className="flex-1 px-5 py-6 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setView('discovery')} className="p-2 hover:bg-[#1A1A22] rounded-lg transition">
          <ArrowLeft size={24} className="text-gray-400" />
        </button>
        <h2 className="text-2xl font-black">Carteira</h2>
      </div>
      
      <div className="bg-gradient-to-br from-[#1A1A22] via-[#2A2A35] to-[#1A1A22] rounded-[28px] p-8 mb-8 border border-[#8B5CF6]/20">
        <p className="text-gray-400 text-sm font-medium mb-2">Saldo de Moedas</p>
        <h3 className="text-5xl font-black mb-6 flex items-center gap-3">
          {coins} <Zap size={36} className="text-[#F59E0B] fill-[#F59E0B]" />
        </h3>
        <div className="flex gap-3">
          <button className="bg-white/10 backdrop-blur px-6 py-2 rounded-full text-sm font-bold border border-white/20 hover:bg-white/20 transition">Histórico</button>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition">Resgatar</button>
        </div>
      </div>

      <h4 className="text-sm font-black mb-4">Comprar Moedas</h4>
      <div className="space-y-3">
        {[
          { q: 500, p: '2.500 Kz', desc: 'Ideal para 1 anúncio' },
          { q: 1500, p: '6.000 Kz', desc: 'Destaque semanal', popular: true },
          { q: 5000, p: '15.000 Kz', desc: 'Pack Profissional' }
        ].map((pack, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-[#1A1A22] rounded-[20px] border border-[#2A2A35] hover:border-[#8B5CF6]/50 transition cursor-pointer">
            <div>
              <div className="flex items-center gap-2 font-black text-lg">
                {pack.q} <Zap size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
                {pack.popular && <span className="bg-[#8B5CF6] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Popular</span>}
              </div>
              <p className="text-xs text-gray-500 font-medium">{pack.desc}</p>
            </div>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition">{pack.p}</button>
          </div>
        ))}
      </div>
    </main>
  );

  // ════════════════════ VIEW: CHAT ════════════════════
  const ChatView = () => (
    <main className="flex-1 flex flex-col pb-20">
      <div className="px-5 py-4 flex items-center gap-4 border-b border-[#1A1A22] bg-[#0D0D12]">
        <button onClick={() => setView('discovery')} className="p-2 hover:bg-[#1A1A22] rounded-lg transition">
          <ArrowLeft size={24} className="text-gray-400" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold">SM</div>
          <div>
            <h4 className="font-bold text-sm">Sofia Mendes</h4>
            <span className="text-[10px] text-[#10B981] flex items-center gap-0.5 font-bold">🟢 Online agora</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-center my-4">
          <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-4 py-2 rounded-2xl text-[10px] text-[#8B5CF6] font-bold uppercase tracking-widest">Negociação Iniciada</div>
        </div>
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.sender === 'me'
                ? 'bg-[#8B5CF6] text-white rounded-tr-none'
                : 'bg-[#1A1A22] text-gray-200 border border-[#2A2A35] rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#0D0D12] border-t border-[#1A1A22] flex items-center gap-2">
        <button className="p-3 bg-[#1A1A22] rounded-2xl text-gray-400 hover:text-white transition">
          <PlusCircle size={24} />
        </button>
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Escreve a tua proposta..."
          className="flex-1 bg-[#1A1A22] px-5 py-3 rounded-2xl outline-none text-sm border border-transparent focus:border-[#8B5CF6] transition text-white placeholder-gray-500"
        />
        <button onClick={sendMessage} className="bg-[#8B5CF6] p-3 rounded-2xl text-white hover:opacity-90 transition">
          <Send size={24} />
        </button>
      </div>
    </main>
  );

  // ════════════════════ VIEW: SETTINGS ════════════════════
  const SettingsView = () => (
    <main className="flex-1 px-5 py-6 pb-20">
      <h2 className="text-2xl font-black mb-6">Definições</h2>
      
      <div className="bg-[#1A1A22] rounded-[24px] p-5 flex items-center gap-4 mb-8 border border-white/5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] flex items-center justify-center text-xl font-bold">RM</div>
        <div>
          <p className="font-black">Ribeiro Mendes</p>
          <p className="text-xs text-gray-400 font-medium tracking-wide">ribeiro@helica.ao</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">CONTA</p>
          <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
            <SettingRow label="Editar Perfil" />
            <SettingRow label="Segurança" />
            <button onClick={() => setView('verification')} className="w-full flex items-center justify-between p-4 border-b border-white/5 hover:bg-[#2A2A35]/50 transition text-white">
              <span className="text-sm font-semibold">Verificação</span>
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        <div>
          <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">PREFERÊNCIAS</p>
          <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
            <SettingRowToggle label="Notificações" defaultChecked />
            <SettingRowToggle label="Modo Escuro" defaultChecked />
          </div>
        </div>

        <div>
          <p className="text-[#4B5563] text-[10px] font-black tracking-[0.15em] mb-3 px-1">SUPORTE</p>
          <div className="bg-[#1A1A22] rounded-[20px] overflow-hidden border border-white/5">
            <SettingRow label="Ajuda" />
            <SettingRow label="Privacidade" />
          </div>
        </div>
      </div>
      
      <button className="w-full mt-8 bg-[#EF4444] py-4 rounded-[14px] font-black text-sm tracking-wide hover:opacity-90 transition">Terminar Sessão</button>
    </main>
  );

  // ════════════════════ VIEW: VERIFICATION ════════════════════
  const VerificationView = () => (
    <main className="flex-1 flex flex-col pb-20 bg-[#0D0D12]">
      <div className="px-5 py-4 flex items-center justify-between border-b border-[#1A1A22] bg-[#0D0D12]">
        <div className="flex items-center gap-3">
          <button onClick={() => { resetVerification(); setView('settings'); }} className="p-2 hover:bg-[#1A1A22] rounded-lg transition">
            <ArrowLeft size={24} className="text-gray-400" />
          </button>
          <h1 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
            Verificação Oficial
            <span className="bg-[#3B82F6] text-white rounded-full p-0.5 shadow-md">
              <Check size={14} />
            </span>
          </h1>
        </div>
        <span className="text-[10px] font-black text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-1 rounded-full uppercase">Passo {verificationStep}/3</span>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-black flex items-center justify-between border-b border-[#1A1A22]">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center gap-1 shrink-0">
            <div className={`w-7 h-7 rounded-full flex justify-center items-center text-xs font-bold transition-all ${
              verificationStep >= step ? 'bg-[#3B82F6] text-white shadow-md' : 'bg-[#2A2A35] text-gray-500'
            }`}>{step}</div>
            <span className={`text-[9px] font-bold ${
              verificationStep >= step ? 'text-[#3B82F6]' : 'text-gray-600'
            }`}>{step === 1 ? 'Selfie' : step === 2 ? 'Envio' : 'Selo'}</span>
          </div>
        ))}
        {[1, 2].map((step) => (
          <div key={`line-${step}`} className={`flex-1 h-0.5 mx-2 transition-all ${
            verificationStep > step ? 'bg-[#3B82F6]' : 'bg-[#2A2A35]'
          }`} />
        ))}
      </div>

      {/* PASSO 1: Captura de Câmera */}
      {verificationStep === 1 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-5 px-5 py-8">
          <h2 className="text-base font-bold text-white text-center">Passo 1: Tira uma selfie real</h2>
          <p className="text-xs text-gray-400 text-center leading-relaxed">Precisamos de uma foto espontânea do teu rosto para validar que és o dono legítimo deste perfil.</p>

          <div className="w-64 h-64 bg-[#1A1A22] border-2 border-dashed border-[#2A2A35] rounded-3xl flex flex-col justify-center items-center group cursor-pointer hover:border-[#3B82F6] transition">
            <Camera size={32} className="text-gray-600 mb-2 group-hover:text-[#3B82F6] transition" />
            <span className="text-[11px] text-gray-500 font-semibold">Câmera pronta para disparar</span>
            <div className="absolute inset-8 border border-[#3B82F6]/20 rounded-2xl pointer-events-none"></div>
          </div>

          <button onClick={simulateCameraCapture} className="w-16 h-16 bg-white hover:bg-gray-100 rounded-full flex justify-center items-center shadow-2xl active:scale-90 transition border-4 border-[#0D0D12]">
            <div className="w-10 h-10 bg-[#3B82F6] rounded-full"></div>
          </button>
        </div>
      )}

      {/* PASSO 2: Revisão e Submissão */}
      {verificationStep === 2 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-6 px-5 py-8">
          <h2 className="text-base font-bold text-white text-center">Passo 2: Envia o teu pedido</h2>
          <p className="text-xs text-gray-400 text-center leading-relaxed">Gostas do resultado? Confirma para submeteres a tua selfie para a equipa de moderação do Hélica.</p>

          {capturedSelfie && (
            <div className="w-60 h-60 rounded-3xl overflow-hidden border border-[#2A2A35] shadow-2xl relative">
              <img src={capturedSelfie} alt="Selfie Capturada" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-[#10B981] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">Capturada</div>
            </div>
          )}

          <div className="w-full max-w-xs flex flex-col gap-2.5">
            <button onClick={handleVerificationSubmit} className="w-full py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-95 text-white rounded-xl text-xs font-black shadow-lg uppercase tracking-wider transition active:scale-95">
              Submeter para Aprovação
            </button>
            <button onClick={() => setVerificationStep(1)} className="w-full py-3 bg-[#1A1A22] hover:bg-[#2A2A35] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition">
              Tirar Nova Foto
            </button>
          </div>
        </div>
      )}

      {/* PASSO 3: Sucesso */}
      {verificationStep === 3 && (
        <div className="flex-1 flex flex-col justify-center items-center gap-5 text-center px-5 py-8">
          <div className="w-16 h-16 bg-[#3B82F6] text-white rounded-full flex justify-center items-center shadow-xl shadow-[#3B82F6]/20 relative">
            <div className="absolute inset-0 bg-[#3B82F6] rounded-full animate-ping opacity-20"></div>
            <Check size={32} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-black text-white">Pedido em Análise!</h2>
            <p className="text-xs text-gray-400 leading-relaxed px-2">
              A tua selfie foi enviada com sucesso para a fila de moderação. Em breve receberás o teu <span className="text-[#3B82F6] font-bold">Selo Azul de Verificação</span>.
            </p>
          </div>

          <button onClick={resetVerification} className="w-full max-w-xs py-3.5 bg-[#1A1A22] hover:bg-[#2A2A35] text-white rounded-xl text-xs font-bold transition mt-4">
            Voltar às Definições
          </button>
        </div>
      )}
    </main>
  );

  // ════════════════════ VIEW: BOOST ════════════════════
  const BoostView = () => (
    <main className="flex-1 px-6 py-8 flex flex-col justify-center items-center text-center gap-6 pb-20">
      <div className="flex justify-center items-center relative">
        <div className="absolute w-36 h-36 bg-[#8B5CF6]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-[#F59E0B]/20 rounded-full blur-2xl"></div>
        
        <div className="w-24 h-24 bg-gradient-to-tr from-[#8B5CF6] via-[#F59E0B] to-[#8B5CF6] rounded-full flex justify-center items-center shadow-2xl border border-[#F59E0B]/20 relative z-10">
          <Zap size={48} className="text-white fill-white drop-shadow-lg" />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 max-w-sm z-10">
        <h1 className="text-2xl font-black text-white tracking-tight uppercase">Destacar Perfil</h1>
        <p className="text-sm text-gray-400 font-medium leading-relaxed px-4">
          Sejas o centro das atenções! Ativa o boost para colocares o teu perfil no <span className="text-[#F59E0B] font-bold">topo da lista de descoberta</span> da tua região por 30 minutos.
        </p>
      </div>

      <div className="px-4 py-2 bg-[#1A1A22]/60 border border-[#2A2A35]/40 rounded-2xl text-xs font-semibold text-gray-400">
        Custo da ativação: <span className="text-[#F59E0B] font-bold">50 moedas</span>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="w-full max-w-xs py-4 bg-gradient-to-r from-[#8B5CF6] via-[#F59E0B] to-[#8B5CF6] hover:opacity-95 text-white rounded-2xl text-sm font-black shadow-xl shadow-[#8B5CF6]/20 tracking-wider uppercase transition transform active:scale-95 z-10">
        Ativar Boost
      </button>
    </main>
  );

  // ════════════════════ MODAL DE CONFIRMAÇÃO ════════════════════
  const ConfirmModal = () => (
    isModalOpen && (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1A1A22] rounded-[30px] p-8 max-w-sm border border-[#2A2A35]">
          <h2 className="text-xl font-black text-white mb-3">Confirmar Ativação</h2>
          <p className="text-sm text-gray-400 mb-6">Tens a certeza que queres gastar 50 moedas para destacar o teu perfil por 30 minutos?</p>
          <div className="flex gap-3">
            <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 bg-[#2A2A35] text-white rounded-lg font-bold text-sm hover:bg-[#3A3A45] transition">
              Cancelar
            </button>
            <button onClick={handleBoostActivate} className="flex-1 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] text-white rounded-lg font-black text-sm hover:opacity-90 transition">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  );

  // ════════════════════ NAVBAR INFERIOR ════════════════════
  const NavBar = () => (
    <nav className="h-20 bg-[#1A1A22] border-t border-white/5 flex items-center justify-around px-4 sticky bottom-0 z-40">
      <NavButton icon={<Home size={26} />} label="Home" active={view === 'discovery'} onClick={() => setView('discovery')} />
      <NavButton icon={<Search size={26} />} label="Busca" active={view === 'boost'} onClick={() => setView('boost')} />
      <NavButton icon={<MessageCircle size={26} />} label="Chat" active={view === 'chat'} onClick={() => setView('chat')} />
      <NavButton icon={<Wallet size={26} />} label="Carteira" active={view === 'wallet'} onClick={() => setView('wallet')} />
      <NavButton icon={<User size={26} />} label="Config" active={view === 'settings'} onClick={() => setView('settings')} />
    </nav>
  );

  // ════════════════════ RENDER PRINCIPAL ════════════════════
  return (
    <div className="bg-[#0D0D12] text-white min-h-screen font-['Inter'] flex flex-col items-center">
      <div className="w-full max-w-[390px] min-h-screen border-x border-[#1A1A22] flex flex-col relative bg-[#0D0D12]">
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

// ════════════════════ COMPONENTES AUXILIARES ════════════════════
const SettingRow = ({ label }) => (
  <button className="w-full flex items-center justify-between p-4 border-b border-white/5 last:border-b-0 hover:bg-[#2A2A35]/50 transition text-white">
    <span className="text-sm font-semibold">{label}</span>
    <ChevronRight size={18} className="text-gray-600" />
  </button>
);

const SettingRowToggle = ({ label, defaultChecked }) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/5 last:border-b-0">
      <span className="text-sm font-semibold text-white">{label}</span>
      <button
        onClick={() => setIsChecked(!isChecked)}
        className={`w-11 h-6 rounded-full relative transition-colors ${isChecked ? 'bg-[#8B5CF6]' : 'bg-[#2A2A35]'}`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isChecked ? 'left-6' : 'left-1'}`}></div>
      </button>
    </div>
  );
};

const NavButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition ${
    active ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'
  }`}>
    {icon}
    <span className="text-xs font-semibold">{label}</span>
  </button>
);

export default HelicaApp;
