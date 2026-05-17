import React, { useState } from 'react';
import { ChevronRight, Heart, X, Star, RotateCcw, Settings, Home, Search, MessageCircle, User, Diamond, Rocket, Bell } from 'lucide-react';

const HelicaApp = () => {
  const [currentView, setCurrentView] = useState('discovery');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [notificationsCount, setNotificationsCount] = useState(3);

  // --- DADOS MOCKADOS ---
  const discoveryCards = [
    {
      id: 1,
      name: 'Sofia Mendes',
      age: 22,
      location: 'Saurimo',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
      bio: 'Fotógrafa profissional e amante de aventuras',
      tags: ['Fotografia', 'Viagens', 'Arte']
    },
    {
      id: 2,
      name: 'Anselmo Dias',
      age: 25,
      location: 'Luanda',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
      bio: 'Designer gráfico e criativo',
      tags: ['Design', 'Tecnologia', 'Música']
    },
    {
      id: 3,
      name: 'Mariana Costa',
      age: 24,
      location: 'Benguela',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop',
      bio: 'Influencer de moda e beleza',
      tags: ['Moda', 'Beleza', 'Lifestyle']
    }
  ];

  const currentCard = discoveryCards[currentCardIndex];

  const handleCardAction = (action) => {
    console.log(`Ação: ${action}`);
    setCurrentCardIndex((prev) => (prev + 1) % discoveryCards.length);
  };

  // --- COMPONENTES ---

  // 1. HEADER GLOBAL
  const Header = () => (
    <header className="bg-[#0D0D12] border-b border-[#2A2A35] px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] rounded-full flex items-center justify-center">
          <span className="text-white font-black text-lg">H</span>
        </div>
        <span className="text-white font-black text-lg tracking-tight">HÉLICA</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#1A1A22] rounded-lg transition text-[#8B5CF6]">
          <Diamond size={20} />
        </button>
        <button className="p-2 hover:bg-[#1A1A22] rounded-lg transition text-[#8B5CF6]">
          <Rocket size={20} />
        </button>
        <button className="p-2 hover:bg-[#1A1A22] rounded-lg transition relative text-[#8B5CF6]">
          <Bell size={20} />
          {notificationsCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#EF4444] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              {notificationsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );

  // 2. DESCOBERTA (MATCHING)
  const DiscoveryView = () => (
    <div className="min-h-screen bg-[#0D0D12] pb-32">
      <div className="max-w-sm mx-auto px-4 py-8">
        {/* Card Principal */}
        <div className="relative h-96 bg-[#1A1A22] rounded-[24px] overflow-hidden shadow-2xl group">
          {/* Imagem de Fundo */}
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

          {/* Gradiente Protetor */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Informações no Card */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-3">
              <h2 className="text-3xl font-black tracking-tight">
                {currentCard.name} <span className="font-bold">{currentCard.age}</span>
              </h2>
              <p className="text-sm text-gray-300 flex items-center gap-1 mt-1">
                📍 {currentCard.location}
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm font-light mb-4 leading-relaxed">{currentCard.bio}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-[#2A2A35] border border-[#3A3A45] rounded-full text-xs font-medium text-gray-300 hover:border-[#8B5CF6] transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Botões de Interação */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Rewind - Amarelo */}
          <button
            onClick={() => handleCardAction('rewind')}
            className="w-14 h-14 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] active:scale-90 transition flex items-center justify-center text-black font-bold shadow-lg hover:shadow-[#F59E0B]/50 hover:shadow-2xl"
          >
            <RotateCcw size={20} />
          </button>

          {/* Dislike - Vermelho */}
          <button
            onClick={() => handleCardAction('dislike')}
            className="w-14 h-14 rounded-full bg-[#EF4444] hover:bg-[#F87171] active:scale-90 transition flex items-center justify-center text-white font-bold shadow-lg hover:shadow-[#EF4444]/50 hover:shadow-2xl"
          >
            <X size={24} />
          </button>

          {/* SuperLike - Azul */}
          <button
            onClick={() => handleCardAction('superlike')}
            className="w-14 h-14 rounded-full bg-[#3B82F6] hover:bg-[#60A5FA] active:scale-90 transition flex items-center justify-center text-white font-bold shadow-lg hover:shadow-[#3B82F6]/50 hover:shadow-2xl"
          >
            <Star size={20} fill="white" />
          </button>

          {/* Like - Verde */}
          <button
            onClick={() => handleCardAction('like')}
            className="w-14 h-14 rounded-full bg-[#10B981] hover:bg-[#34D399] active:scale-90 transition flex items-center justify-center text-white font-bold shadow-lg hover:shadow-[#10B981]/50 hover:shadow-2xl"
          >
            <Heart size={20} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );

  // 3. CONFIGURAÇÕES
  const SettingsView = () => (
    <div className="min-h-screen bg-[#0D0D12] pb-32">
      <div className="max-w-sm mx-auto px-4 py-8">
        {/* Header de Perfil */}
        <div className="bg-[#1A1A22] rounded-[24px] p-6 mb-8 border border-[#2A2A35]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] flex items-center justify-center text-white font-black text-2xl">
              RM
            </div>
            <div>
              <h3 className="text-white font-black text-lg">Ribeiro Mendes</h3>
              <p className="text-gray-400 text-sm">ribeiro@helica.ao</p>
            </div>
          </div>
        </div>

        {/* Seção: CONTA */}
        <div className="mb-8">
          <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4 px-2">Conta</h4>
          <div className="space-y-0 border border-[#2A2A35] rounded-[16px] overflow-hidden">
            <SettingItem icon="👤" label="Editar Perfil" />
            <SettingItem icon="🔐" label="Segurança" />
            <SettingItem icon="🛡️" label="Verificação" />
          </div>
        </div>

        {/* Seção: PREFERÊNCIAS */}
        <div className="mb-8">
          <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4 px-2">Preferências</h4>
          <div className="space-y-0 border border-[#2A2A35] rounded-[16px] overflow-hidden">
            <SettingItemWithToggle label="Notificações" defaultChecked />
            <SettingItemWithToggle label="Modo Escuro" defaultChecked />
            <SettingItem icon="🌍" label="Idioma" />
          </div>
        </div>

        {/* Seção: SUPORTE */}
        <div className="mb-8">
          <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4 px-2">Suporte</h4>
          <div className="space-y-0 border border-[#2A2A35] rounded-[16px] overflow-hidden">
            <SettingItem icon="❓" label="Ajuda" />
            <SettingItem icon="📋" label="Política de Privacidade" />
            <SettingItem icon="⚖️" label="Termos de Serviço" />
          </div>
        </div>

        {/* Logout */}
        <button className="w-full py-3 bg-[#EF4444] text-white font-black rounded-[12px] hover:bg-[#F87171] transition">
          Terminar Sessão
        </button>
      </div>
    </div>
  );

  // 4. DASHBOARD ADMIN (Simplificado)
  const DashboardView = () => (
    <div className="min-h-screen bg-[#0D0D12] pb-32">
      <div className="max-w-sm mx-auto px-4 py-8">
        <h2 className="text-white font-black text-2xl mb-8">Dashboard</h2>

        {/* Métricas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricCard title="Usuários" value="14.2K" icon="👥" color="from-[#8B5CF6]" />
          <MetricCard title="Mensagens" value="3.8K" icon="💬" color="from-[#3B82F6]" />
          <MetricCard title="Likes" value="28.5K" icon="❤️" color="from-[#10B981]" />
          <MetricCard title="Premium" value="2.1K" icon="💎" color="from-[#F59E0B]" />
        </div>

        {/* Gráfico Placeholder */}
        <div className="bg-[#1A1A22] rounded-[24px] p-6 border border-[#2A2A35] mb-8">
          <h4 className="text-white font-bold mb-4">Atividade Recente</h4>
          <div className="h-40 flex items-end justify-around gap-2">
            {[40, 60, 45, 80, 55, 70].map((height, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gradient-to-t from-[#8B5CF6] to-[#F59E0B] rounded-t-lg opacity-70 hover:opacity-100 transition"
                style={{ height: `${(height / 80) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // 5. NAVBAR INFERIOR
  const NavBar = () => (
    <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-[#1A1A22] border-t border-[#2A2A35] px-4 py-4 flex items-center justify-between">
      <NavItem icon={<Home size={24} />} label="Home" active={currentView === 'discovery'} onClick={() => setCurrentView('discovery')} />
      <NavItem icon={<Search size={24} />} label="Busca" active={currentView === 'search'} onClick={() => setCurrentView('search')} />
      <NavItem icon={<MessageCircle size={24} />} label="Chat" active={currentView === 'chat'} onClick={() => setCurrentView('chat')} />
      <NavItem icon={<Settings size={24} />} label="Config" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
    </nav>
  );

  return (
    <div className="max-w-sm mx-auto h-screen bg-[#0D0D12] flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {currentView === 'discovery' && <DiscoveryView />}
        {currentView === 'settings' && <SettingsView />}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView !== 'discovery' && currentView !== 'settings' && currentView !== 'dashboard' && (
          <div className="min-h-screen bg-[#0D0D12] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-lg font-semibold mb-4">Em Desenvolvimento</p>
              <button onClick={() => setCurrentView('discovery')} className="px-6 py-2 bg-[#8B5CF6] text-white rounded-lg font-bold">
                Voltar
              </button>
            </div>
          </div>
        )}
      </div>
      <NavBar />
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const SettingItem = ({ icon, label }) => (
  <button className="w-full px-6 py-4 flex items-center justify-between border-b border-[#2A2A35] last:border-b-0 hover:bg-[#2A2A35]/50 transition text-white">
    <div className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <span className="font-semibold">{label}</span>
    </div>
    <ChevronRight size={20} className="text-gray-600" />
  </button>
);

const SettingItemWithToggle = ({ label, defaultChecked }) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  return (
    <div className="w-full px-6 py-4 flex items-center justify-between border-b border-[#2A2A35] last:border-b-0">
      <span className="text-white font-semibold">{label}</span>
      <button
        onClick={() => setIsChecked(!isChecked)}
        className={`w-12 h-6 rounded-full transition flex items-center ${
          isChecked ? 'bg-[#8B5CF6]' : 'bg-[#2A2A35]'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white transition transform ${
            isChecked ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
};

const MetricCard = ({ title, value, icon, color }) => (
  <div className={`bg-gradient-to-br ${color} to-[#1A1A22] rounded-[16px] p-4 border border-[#2A2A35]`}>
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{title}</p>
    <p className="text-white font-black text-2xl mt-1">{value}</p>
  </div>
);

const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition ${
      active ? 'text-[#8B5CF6]' : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    {icon}
    <span className="text-xs font-semibold">{label}</span>
  </button>
);

export default HelicaApp;
