import { motion } from 'motion/react';
import { 
  Bot, 
  User, 
  MessageSquare, 
  Globe, 
  Shield, 
  Bell, 
  Save, 
  Camera,
  ChevronRight,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [botName, setBotName] = useState('Customer Support Bot');
  const [greeting, setGreeting] = useState("Hi! I'm your AI assistant. How can I help you today?");
  const [personality, setPersonality] = useState('Professional, helpful, and concise.');

  const tabs = [
    { id: 'general', icon: Bot, label: 'Bot Profile' },
    { id: 'appearance', icon: Camera, label: 'Appearance' },
    { id: 'behavior', icon: MessageSquare, label: 'Behavior' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Chatbot Settings</h1>
        <p className="text-slate-500 text-sm">Customize how your AI clone looks and behaves.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all group ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'text-slate-500 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-200'
              }`}
            >
              <tab.icon className={`w-5 h-5 shrink-0 ${activeTab === tab.id ? 'text-white' : 'group-hover:text-indigo-600'}`} />
              <span className="font-bold text-sm">{tab.label}</span>
              {activeTab === tab.id && <ChevronRight className="ml-auto w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm"
          >
            {activeTab === 'general' && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 pb-8 border-b border-slate-100">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100 overflow-hidden">
                      <img 
                        src="https://picsum.photos/seed/bot1/200/200" 
                        alt="Bot Avatar" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-slate-200 rounded-xl shadow-lg hover:bg-slate-50 transition-all">
                      <Camera className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Bot Avatar</h3>
                    <p className="text-sm text-slate-500 mt-1">This will be visible to your users in the chat widget.</p>
                    <div className="flex gap-2 mt-4">
                      <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-all">Upload New</button>
                      <button className="text-xs font-bold text-slate-400 hover:text-red-600 px-3 py-1.5 rounded-lg transition-all">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Bot Name</label>
                    <input 
                      type="text" 
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Display Language</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Greeting Message</label>
                  <textarea 
                    rows={3}
                    value={greeting}
                    onChange={(e) => setGreeting(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none"
                  />
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">The first message your bot sends to users.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">AI Personality & Instructions</label>
                  <textarea 
                    rows={4}
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none"
                  />
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Define the tone, style, and core values of your AI clone.</p>
                </div>

                <div className="pt-6 flex justify-end gap-3">
                  <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-all">Discard Changes</button>
                  <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Settings
                  </button>
                </div>
              </div>
            )}

            {activeTab !== 'general' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-6">
                  <Settings className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tabs.find(t => t.id === activeTab)?.label} Settings</h3>
                <p className="text-slate-500 max-w-xs mx-auto">These settings are currently being optimized for your Pro plan.</p>
                <button className="mt-8 bg-slate-100 text-slate-900 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
                  Back to Profile
                </button>
              </div>
            )}
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-indigo-500 transition-all cursor-pointer">
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <Globe className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Embed Widget</h4>
                <p className="text-xs text-slate-500 mt-0.5">Get the code for your website</p>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-all" />
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-indigo-500 transition-all cursor-pointer">
              <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <Plus className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Add Team Member</h4>
                <p className="text-xs text-slate-500 mt-0.5">Collaborate on your clones</p>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
