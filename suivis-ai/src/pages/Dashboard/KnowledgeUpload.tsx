import { motion } from 'motion/react';
import { 
  FileUp, 
  Globe, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Plus, 
  Search,
  MoreVertical,
  Trash2
} from 'lucide-react';
import { useState } from 'react';

const initialSources = [
  { id: 1, name: 'Product Documentation.pdf', type: 'PDF', size: '2.4 MB', status: 'Processed', date: 'Mar 1, 2024' },
  { id: 2, name: 'https://docs.suivis.ai', type: 'URL', size: '12 Pages', status: 'Processing', date: 'Mar 5, 2024' },
  { id: 3, name: 'Company FAQ.txt', type: 'Text', size: '15 KB', status: 'Processed', date: 'Feb 28, 2024' },
];

export default function KnowledgeUpload() {
  const [sources, setSources] = useState(initialSources);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' or 'manage'

  const deleteSource = (id: number) => {
    setSources(sources.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Knowledge Base</h1>
          <p className="text-slate-500 text-sm">Train your AI clones with your own data.</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-200">
          <button 
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'upload' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Upload Data
          </button>
          <button 
            onClick={() => setActiveTab('manage')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'manage' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Manage Sources
          </button>
        </div>
      </div>

      {activeTab === 'upload' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Options */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: FileUp, title: 'Upload PDF', desc: 'Drag & drop your PDF files' },
                { icon: Globe, title: 'Website URL', desc: 'Sync from any website' },
                { icon: FileText, title: 'Text Content', desc: 'Paste raw text knowledge' },
              ].map((option, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-200 rounded-3xl text-left hover:border-indigo-500 hover:shadow-xl transition-all group"
                >
                  <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <option.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900">{option.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{option.desc}</p>
                </motion.button>
              ))}
            </div>

            {/* Dropzone Placeholder */}
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center group hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer">
              <div className="bg-slate-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FileUp className="w-10 h-10 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your files here</h3>
              <p className="text-slate-500 text-sm mb-6">Support for PDF, TXT, DOCX up to 50MB</p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                Browse Files
              </button>
            </div>

            {/* Website URL Input */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Add Website URL</h3>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="url" 
                    placeholder="https://example.com/docs" 
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  />
                </div>
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                  Sync URL
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
                <AlertCircle className="w-3 h-3" />
                We will crawl up to 50 pages from this domain.
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="space-y-6">
            <div className="bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <h3 className="font-bold text-lg mb-4 relative z-10">Pro Tips</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex gap-3 text-sm text-indigo-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                  Use clear, descriptive headings in your documents.
                </li>
                <li className="flex gap-3 text-sm text-indigo-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                  Avoid uploading images or scanned PDFs without OCR.
                </li>
                <li className="flex gap-3 text-sm text-indigo-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                  Keep your content concise for better AI responses.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Storage Usage</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500 font-medium">Total Storage</span>
                  <span className="text-slate-900 font-bold">45.2 MB / 500 MB</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '9%' }}
                    className="h-full bg-indigo-600 rounded-full"
                  />
                </div>
                <p className="text-xs text-slate-400">You are using 9% of your available storage on the Pro plan.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search sources..." 
                className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Source Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date Added</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sources.map((source) => (
                  <tr key={source.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-50 p-2 rounded-lg">
                          {source.type === 'PDF' ? <FileUp className="w-4 h-4 text-indigo-600" /> : 
                           source.type === 'URL' ? <Globe className="w-4 h-4 text-indigo-600" /> : 
                           <FileText className="w-4 h-4 text-indigo-600" />}
                        </div>
                        <span className="text-sm font-bold text-slate-900 truncate max-w-[200px]">{source.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">{source.type}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{source.size}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${source.status === 'Processed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                        <span className={`text-xs font-bold ${source.status === 'Processed' ? 'text-emerald-600' : 'text-amber-600'}`}>{source.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{source.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteSource(source.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
