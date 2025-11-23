import { Sparkles, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for assistant */}
      {!isUser && (
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Message content */}
      <div className={`flex flex-col max-w-2xl ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`px-6 py-4 rounded-3xl shadow-md ${
            isUser
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-tr-lg'
              : 'bg-white/60 backdrop-blur-lg border border-white/80 text-gray-800 rounded-tl-lg'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-2 px-2">{message.timestamp}</span>
      </div>

      {/* Avatar for user */}
      {isUser && (
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}