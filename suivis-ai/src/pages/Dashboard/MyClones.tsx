import { motion } from 'motion/react';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  MessageSquare, 
  Settings, 
  Trash2, 
  ExternalLink,
  Bot,
  Globe,
  Lock
} from 'lucide-react';
import { useState } from 'react';

const initialClones = [
  { id: 1, name: 'Customer Support Bot', status: 'Active', conversations: 1240, knowledge: '12 Docs', type: 'Public', avatar: 'https://picsum.photos/seed/bot1/100/100' },
  { id: 2, name: 'Personal Knowledge AI', status: 'Active', conversations: 85, knowledge: '45 Docs', type: 'Private', avatar: 'https://picsum.photos/seed/bot2/100/100' },
  { id: 3, name: 'Sales Assistant', status: 'Paused', conversations: 432, knowledge: '5 Docs', type: 'Public', avatar: 'https://picsum.photos/seed/bot3/100/100' },
];

export default function MyClones() {
  const [clones, setClones] = useState(initialClones);
  const [search, setSearch] = useState('');

  const filteredClones = clones.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const deleteClone = (id: number) => {
    setClones(clones.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My AI Clones</h1>
          <p className="text-slate-500 text-sm">Manage and deploy your digital clones.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 w-fit">
          <Plus className="w-4 h-4" />
          Create New Clone
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search your clones..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 rounded-2xl text-sm font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Paused</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-2xl text-sm font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Most Active</option>
          </select>
        </div>
      </div>

      {/* Clones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClones.map((clone, i) => (
          <motion.div
            key={clone.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <img 
                    src={clone.avatar} 
                    alt={clone.name} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${clone.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => deleteClone(clone.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{clone.name}</h3>
                  {clone.type === 'Private' ? (
                    <Lock className="w-3 h-3 text-slate-400" />
                  ) : (
                    <Globe className="w-3 h-3 text-slate-400" />
                  )}
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{clone.status}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Conversations</p>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="text-sm font-bold text-slate-700">{clone.conversations}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Knowledge Base</p>
                  <div className="flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-sm font-bold text-slate-700">{clone.knowledge}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-slate-100 text-slate-900 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Test Chat
                </button>
                <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                  Deploy
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Create New Card */}
        <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-indigo-300 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-indigo-600" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-slate-900">Create New Clone</h3>
            <p className="text-sm text-slate-500 mt-1">Start building your next AI assistant</p>
          </div>
        </button>
      </div>
    </div>
  );
}
