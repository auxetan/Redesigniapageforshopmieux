import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatAreaProps {
  activeConversationId: string | null;
}

export function ChatArea({ activeConversationId }: ChatAreaProps) {
  // Mock conversations data - in real app this would come from a state management solution
  const conversationsData: Record<string, Message[]> = {
    '1': [
      {
        id: '1',
        role: 'assistant',
        content: 'Bonjour ! Je suis votre assistant shopping IA. Comment puis-je vous aider à trouver les meilleurs produits aujourd\'hui ?',
        timestamp: '10:30'
      },
      {
        id: '2',
        role: 'user',
        content: 'Je cherche un bon ordinateur portable pour le travail et le design graphique.',
        timestamp: '10:32'
      },
      {
        id: '3',
        role: 'assistant',
        content: 'Excellente question ! Pour le design graphique et le travail, je vous recommande de privilégier :\n\n1. **Écran de qualité** : Un écran avec une bonne couverture colorimétrique (99% sRGB minimum)\n2. **Processeur puissant** : Intel Core i7/i9 ou AMD Ryzen 7/9\n3. **RAM** : Au moins 16 Go, idéalement 32 Go\n4. **Carte graphique dédiée** : NVIDIA RTX ou équivalent\n\nQuel est votre budget approximatif ?',
        timestamp: '10:33'
      }
    ]
  };

  const messages = activeConversationId ? (conversationsData[activeConversationId] || []) : [];

  const handleSendMessage = (content: string) => {
    // In real app, this would update the conversation in state management
    console.log('Send message:', content);
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 pb-32 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl text-gray-800 mb-3">Demander à l'IA</h2>
            <p className="text-gray-600 text-center max-w-md mb-8">
              Votre assistant shopping intelligent. Posez-moi n'importe quelle question sur les produits, je suis là pour vous aider à faire le meilleur choix.
            </p>
            
            {/* Suggestion cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {[
                'Meilleurs smartphones 2025',
                'Ordinateurs portables gaming',
                'Écouteurs sans fil recommandés',
                'Téléviseurs 4K comparatif'
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(suggestion)}
                  className="bg-white/40 backdrop-blur-lg rounded-2xl p-5 border border-white/60 hover:bg-white/60 transition-all duration-200 text-left shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                >
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>

      {/* Floating input area */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-6 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}