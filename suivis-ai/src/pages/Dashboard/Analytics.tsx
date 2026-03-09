import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock, 
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const metrics = [
  { label: 'Total Conversations', value: '12,482', change: '+12.5%', trend: 'up', icon: MessageSquare },
  { label: 'Avg. Response Time', value: '1.2s', change: '-5.2%', trend: 'up', icon: Clock },
  { label: 'User Satisfaction', value: '98.2%', change: '+2.1%', trend: 'up', icon: Users },
  { label: 'Knowledge Accuracy', value: '94.5%', change: '-0.8%', trend: 'down', icon: BarChart3 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics & Insights</h1>
          <p className="text-slate-500 text-sm">Track how your AI clones are performing.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-2xl bg-slate-50 text-indigo-600">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${metric.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {metric.change}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{metric.label}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{metric.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Usage Over Time */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg">Usage Over Time</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                Conversations
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <div className="w-3 h-3 bg-slate-200 rounded-full" />
                Previous Period
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3">
            {[30, 45, 25, 60, 80, 55, 90, 75, 40, 65, 85, 50].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                  className="w-full bg-indigo-600 rounded-t-lg group-hover:bg-indigo-700 transition-colors"
                />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {h * 15} chats
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-1">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
              <span key={m} className="text-[10px] font-bold text-slate-400 uppercase">{m}</span>
            ))}
          </div>
        </div>

        {/* Top Clones */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-8">Top Performing Clones</h3>
          <div className="space-y-6">
            {[
              { name: 'Customer Support Bot', chats: '8,432', color: 'indigo' },
              { name: 'Sales Assistant', chats: '3,120', color: 'blue' },
              { name: 'Personal Knowledge AI', chats: '930', color: 'violet' },
            ].map((clone, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-900">{clone.name}</span>
                  <span className="font-bold text-slate-500">{clone.chats} chats</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(parseInt(clone.chats.replace(',', '')) / 12482) * 100}%` }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                    className={`h-full bg-${clone.color}-600 rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Growth Insight</h4>
                <p className="text-xs text-slate-500 mt-0.5">Your conversation volume has increased by 15% this week. Consider adding more knowledge sources to maintain accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
