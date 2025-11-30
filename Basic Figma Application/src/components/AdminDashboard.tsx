import { Users, BookOpen, Settings, Shield } from 'lucide-react';

const userStats = [
  { role: 'Students', count: 1245, change: '+12%' },
  { role: 'Instructors', count: 48, change: '+3%' },
  { role: 'Content Creators', count: 23, change: '+5%' },
];

const recentUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', joinedAt: '2025-11-25' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor', joinedAt: '2025-11-24' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Content Creator', joinedAt: '2025-11-23' },
];

const courses = [
  { id: 1, title: 'Web Development Bootcamp', instructor: 'Dr. Sarah Johnson', students: 245, status: 'active' },
  { id: 2, title: 'Data Science Fundamentals', instructor: 'Prof. Michael Chen', students: 189, status: 'active' },
  { id: 3, title: 'Mobile App Development', instructor: 'Emily Rodriguez', students: 167, status: 'review' },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Admin Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage platform settings, user roles, and course content</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Settings className="w-5 h-5" />
          Platform Settings
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Users</p>
              <p className="text-2xl mt-1">1,316</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Active Courses</p>
              <p className="text-2xl mt-1">47</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <p className="text-2xl mt-1">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">System Health</p>
              <p className="text-2xl mt-1">98%</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Role Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">User Role Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userStats.map((stat, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.role}</p>
                  <p className="text-2xl mt-2">{stat.count}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Recent Users</h3>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            View All Users
          </button>
        </div>
        <div className="space-y-3">
          {recentUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
              <div>
                <h4 className="text-gray-900">{user.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{user.email} • Joined: {user.joinedAt}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {user.role}
                </span>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Course Management</h3>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            View All Courses
          </button>
        </div>
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
              <div>
                <h4 className="text-gray-900">{course.title}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Instructor: {course.instructor} • {course.students} students enrolled
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  course.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
