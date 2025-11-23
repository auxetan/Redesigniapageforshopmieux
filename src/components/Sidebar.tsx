import { Plus, MessageSquare, Clock, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Conversation {
  id: string;
  title: string;
  timestamp: string;
}

interface SidebarProps {
  activeConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
}

export function Sidebar({ activeConversationId, onSelectConversation, onNewChat }: SidebarProps) {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: '1', title: 'Meilleurs écouteurs sans fil', timestamp: 'Il y a 2h' },
    { id: '2', title: 'Comparaison ordinateurs portables', timestamp: 'Hier' },
    { id: '3', title: 'Smartphones pour la photo', timestamp: 'Il y a 3 jours' },
    { id: '4', title: 'Conseils télévision 4K', timestamp: 'Il y a 1 semaine' },
    { id: '5', title: 'Casques gaming recommandés', timestamp: 'Il y a 2 semaines' },
  ]);

  return (
    <div className="w-80 h-full p-4 flex flex-col gap-4">
      {/* Glassy sidebar panel */}
      <div className="flex-1 bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg border border-white/60 p-5 flex flex-col">
        {/* Header with New Chat button */}
        <div className="mb-6">
          <button
            onClick={onNewChat}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl px-6 py-3.5 flex items-center justify-center gap-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            <Plus className="w-5 h-5" />
            <span>Nouvelle conversation</span>
          </button>
        </div>

        {/* Conversations list */}
        <div className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar">
          <div className="flex items-center gap-2 px-2 mb-2 opacity-60">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">Conversations récentes</span>
          </div>

          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                activeConversationId === conversation.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-300/50 shadow-sm'
                  : 'bg-white/30 hover:bg-white/50 border border-transparent'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <MessageSquare
                  className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                    activeConversationId === conversation.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs truncate ${
                      activeConversationId === conversation.id ? 'text-blue-900' : 'text-gray-800'
                    }`}
                  >
                    {conversation.title}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{conversation.timestamp}</p>
                </div>
                <button
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Delete conversation logic
                  }}
                >
                  <Trash2 className="w-3 h-3 text-red-500" />
                </button>
              </div>
            </button>
          ))}
        </div>

        {/* User profile section */}
        <div className="mt-4 pt-4 border-t border-white/40">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white">
              SM
            </div>
            <div className="flex-1">
              <p className="text-sm">ShopMieux User</p>
              <p className="text-xs text-gray-500">Premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}