import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  FileText,
  Send,
  Download,
  CheckCircle,
  Clock,
  Eye,
  Tag,
  Share2
} from 'lucide-react';

export default function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);

  // Homework & Worksheet Repository State
  const [resources, setResources] = useState([
    {
      id: 'RES-101',
      title: '5-Column Thought Log',
      category: 'CBT Worksheets',
      format: 'Interactive Form / PDF',
      assignedCount: 28,
      completedCount: 22,
      description: 'Helps clients identify cognitive distortions, record trigger situations, and formulate rational alternative thoughts.',
      estimatedTime: '15 mins',
      tags: ['CBT', 'Anxiety', 'Cognitive Restructuring']
    },
    {
      id: 'RES-102',
      title: 'Box Breathing & Grounding Guide',
      category: 'Mindfulness',
      format: 'Audio / Guided Sheet',
      assignedCount: 45,
      completedCount: 41,
      description: '4x4 breathing sequence combined with 5-4-3-2-1 sensory grounding techniques for acute anxiety management.',
      estimatedTime: '10 mins',
      tags: ['Somatic', 'Mindfulness', 'Panic Relief']
    },
    {
      id: 'RES-103',
      title: 'Externalizing the Problem Exercise',
      category: 'Narrative Therapy',
      format: 'Reflection Prompt Sheet',
      assignedCount: 14,
      completedCount: 9,
      description: 'Structured writing prompts guiding clients to separate their personal identity from their presenting symptoms.',
      estimatedTime: '20 mins',
      tags: ['Narrative Therapy', 'Self-Identity', 'Reframing']
    },
    {
      id: 'RES-104',
      title: 'Sleep Hygiene Checklist & Tracker',
      category: 'Behavioral Activation',
      format: 'Daily Tracker',
      assignedCount: 19,
      completedCount: 15,
      description: '7-day daily tracking sheet for screen time, caffeine intake, bedroom environment, and sleep consistency.',
      estimatedTime: '5 mins/day',
      tags: ['Behavioral', 'Sleep', 'Habit Building']
    }
  ]);

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || res.category.toLowerCase().includes(categoryFilter.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Resource & Homework Library</h1>
          <p className="text-xs text-slate-500">Manage therapeutic worksheets, assign exercises, and track client submissions.</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1B7B87] hover:bg-[#125861] text-white text-xs font-semibold rounded-xl shadow-md shadow-[#1B7B87]/20 transition-all">
          <Plus size={15} />
          <span>Create New Resource</span>
        </button>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search exercises, tags, or titles..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1B7B87] transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <Filter size={13} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-500">Category:</span>
          {['all', 'CBT', 'Mindfulness', 'Narrative'].map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                categoryFilter === cat
                  ? 'bg-[#0F2D32] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESOURCE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#1B7B87]/30 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-teal-50 text-[#1B7B87] rounded-xl flex items-center justify-center font-bold text-sm border border-teal-100">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{item.title}</h3>
                    <span className="text-[10px] font-semibold text-[#1B7B87] bg-teal-50 px-2 py-0.5 rounded-full inline-block mt-1">
                      {item.category}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                  {item.estimatedTime}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Tag size={10} className="text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Completion Analytics & Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1">
                  <Share2 size={13} className="text-slate-400" /> {item.assignedCount} Assigned
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle size={13} /> {item.completedCount} Completed
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setSelectedResource(item)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-all flex items-center gap-1"
                >
                  <Eye size={13} />
                  <span>Preview</span>
                </button>
                <button className="px-3 py-1.5 bg-[#1B7B87] hover:bg-[#125861] text-white font-semibold rounded-lg text-xs transition-all flex items-center gap-1 shadow-sm">
                  <Send size={13} />
                  <span>Assign</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}