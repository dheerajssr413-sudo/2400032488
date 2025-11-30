import { FileText, Video, CheckCircle, Clock } from 'lucide-react';

const myContent = [
  { id: 1, title: 'Introduction to React Hooks', type: 'video', status: 'published', views: 1250 },
  { id: 2, title: 'CSS Grid Layout Guide', type: 'article', status: 'published', views: 890 },
  { id: 3, title: 'Advanced TypeScript Patterns', type: 'video', status: 'draft', views: 0 },
  { id: 4, title: 'API Design Best Practices', type: 'article', status: 'review', views: 0 },
];

export function ContentCreatorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Content Creator Dashboard</h2>
          <p className="text-gray-600 mt-1">Develop course materials, update content, and ensure quality</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Create New Content
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Content</p>
              <p className="text-2xl mt-1">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Published</p>
              <p className="text-2xl mt-1">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">In Review</p>
              <p className="text-2xl mt-1">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Views</p>
              <p className="text-2xl mt-1">2.1K</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">My Content</h3>
        <div className="space-y-3">
          {myContent.map((content) => (
            <div key={content.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  content.type === 'video' ? 'bg-purple-100' : 'bg-blue-100'
                }`}>
                  {content.type === 'video' ? (
                    <Video className={`w-5 h-5 ${content.type === 'video' ? 'text-purple-600' : 'text-blue-600'}`} />
                  ) : (
                    <FileText className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <div>
                  <h4 className="text-gray-900">{content.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {content.type === 'video' ? 'Video' : 'Article'} • {content.views} views
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  content.status === 'published' 
                    ? 'bg-green-100 text-green-700' 
                    : content.status === 'review'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                </span>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">Quality Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Average Rating</p>
            <p className="text-2xl mt-2">4.8/5.0</p>
            <p className="text-gray-600 text-sm mt-1">Based on 156 reviews</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Completion Rate</p>
            <p className="text-2xl mt-2">87%</p>
            <p className="text-gray-600 text-sm mt-1">Students who finish</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Engagement Score</p>
            <p className="text-2xl mt-2">92/100</p>
            <p className="text-gray-600 text-sm mt-1">Above average</p>
          </div>
        </div>
      </div>
    </div>
  );
}
