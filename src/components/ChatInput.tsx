import { Send, Mic, Paperclip } from 'lucide-react';
import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="bg-white/60 backdrop-blur-lg border border-white/80 rounded-full shadow-lg flex items-center gap-3 px-6 py-3.5 focus-within:shadow-xl transition-all duration-200">
        {/* Attachment button */}
        <button
          type="button"
          className="text-gray-500 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Input field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Posez votre question..."
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
        />

        {/* Voice input button */}
        <button
          type="button"
          className="text-gray-500 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
          aria-label="Voice input"
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-2.5 rounded-full transition-all duration-200 ${
            message.trim()
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg hover:scale-105'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* Helper text */}
      <p className="text-xs text-gray-500 text-center mt-3">
        L'IA peut faire des erreurs. Vérifiez les informations importantes.
      </p>
    </form>
  );
}
