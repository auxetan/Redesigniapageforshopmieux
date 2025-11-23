import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/ChatArea';
import { useState } from 'react';

export default function App() {
  const [activeConversationId, setActiveConversationId] = useState<string | null>('1');

  const handleNewChat = () => {
    setActiveConversationId(null);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeConversationId={activeConversationId}
          onSelectConversation={setActiveConversationId}
          onNewChat={handleNewChat}
        />
        <ChatArea 
          activeConversationId={activeConversationId}
        />
      </div>
    </div>
  );
}