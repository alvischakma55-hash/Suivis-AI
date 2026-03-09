import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  Zap, 
  ArrowUpRight, 
  TrendingUp, 
  Clock,
  Plus,
  MoreVertical
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Total Conversations', value: '12,482', change: '+12.5%', icon: MessageSquare, color: 'indigo' },
  { label: 'AI Questions Answered', value: '45,291', change: '+8.2%', icon: Zap, color: 'blue' },
  { label: 'Active Clones', value: '3', change: '0%', icon: Users, color: 'violet' },
];

const recentActivity = [
  { clone: 'Customer Support Bot', event: 'New conversation started', time: '2 mins ago' },
  { clone: 'Personal Knowledge AI', event: 'Knowledge base updated', time: '15 mins ago' },
  { clone: 'Sales Assistant', event: 'Lead captured: John Doe', time: '1 hour ago' },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back, Alvis! Here's what's happening with your clones.</p>
        </div>
        <Link 
          to="/dashboard/clones" 
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2 w-fit"
        >
          <Plus className="w-4 h-4" />
          Create New Clone
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg">Conversation Growth</h3>
            <select className="bg-slate-50 border-none rounded-lg text-xs font-bold px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2 md:gap-4">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="w-full bg-indigo-100 rounded-t-xl group-hover:bg-indigo-600 transition-colors relative"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {h * 12} chats
                  </div>
                </motion.div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Day {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{activity.clone}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{activity.event}</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase mt-1">{activity.time}</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
