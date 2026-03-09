import { motion } from 'motion/react';
import { 
  CreditCard, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Download, 
  Plus,
  AlertCircle
} from 'lucide-react';

const invoices = [
  { id: 'INV-001', date: 'Mar 1, 2024', amount: '$49.00', status: 'Paid' },
  { id: 'INV-002', date: 'Feb 1, 2024', amount: '$49.00', status: 'Paid' },
  { id: 'INV-003', date: 'Jan 1, 2024', amount: '$49.00', status: 'Paid' },
];

export default function Billing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Billing & Subscription</h1>
        <p className="text-slate-500 text-sm">Manage your plan, payment methods, and invoices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Plan */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">Current Plan</span>
                <h2 className="text-4xl font-extrabold mb-2">Pro Plan</h2>
                <p className="text-indigo-100 text-sm font-medium">Your next billing date is April 1, 2024</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold mb-2">$49<span className="text-xl font-medium opacity-60">/mo</span></div>
                <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all shadow-xl">
                  Upgrade Plan
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10 relative z-10">
              <div>
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Conversations</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-white rounded-full" />
                  </div>
                  <span className="text-xs font-bold">75%</span>
                </div>
                <p className="text-[10px] text-indigo-200 mt-2">7,500 / 10,000</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">AI Clones</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-white rounded-full" />
                  </div>
                  <span className="text-xs font-bold">60%</span>
                </div>
                <p className="text-[10px] text-indigo-200 mt-2">3 / 5 Clones</p>
              </div>
              <div>
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Storage</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-white rounded-full" />
                  </div>
                  <span className="text-xs font-bold">25%</span>
                </div>
                <p className="text-[10px] text-indigo-200 mt-2">250 MB / 1 GB</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-lg">Payment Methods</h3>
              <button className="text-indigo-600 font-bold text-sm hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 border border-indigo-100 bg-indigo-50/30 rounded-3xl group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <CreditCard className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Visa ending in 4242</p>
                    <p className="text-xs text-slate-500 mt-0.5">Expiry 12/26 • Default</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-indigo-600 bg-white px-2 py-1 rounded-lg border border-indigo-100 uppercase tracking-wider">Primary</span>
                  <button className="text-slate-400 hover:text-slate-600 font-bold text-xs">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Invoice History */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Invoice History</h3>
            <div className="space-y-6">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-50 p-2.5 rounded-xl group-hover:bg-indigo-50 transition-colors">
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{invoice.id}</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{invoice.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{invoice.amount}</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase mt-0.5">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all">
              View All Invoices
            </button>
          </div>

          {/* Support Card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="relative z-10">
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg mb-2">Need help?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Have questions about your billing or need a custom enterprise plan?</p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
