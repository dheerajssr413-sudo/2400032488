import { Users, BookOpen, ClipboardCheck, MessageSquare } from 'lucide-react';

const myCourses = [
  { id: 1, title: 'Introduction to Web Development', students: 45, assignments: 8, pendingGrades: 12 },
  { id: 2, title: 'Advanced JavaScript', students: 32, assignments: 6, pendingGrades: 5 },
];

const recentSubmissions = [
  { id: 1, student: 'Alice Johnson', course: 'Web Development', assignment: 'Todo App', submittedAt: '2 hours ago' },
  { id: 2, student: 'Bob Smith', course: 'Advanced JavaScript', assignment: 'API Integration', submittedAt: '5 hours ago' },
  { id: 3, student: 'Carol White', course: 'Web Development', assignment: 'Todo App', submittedAt: '1 day ago' },
];

export function InstructorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Instructor Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage courses, grade assignments, and interact with students</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Create New Course
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Active Courses</p>
              <p className="text-2xl mt-1">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl mt-1">77</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ClipboardCheck className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Pending Grades</p>
              <p className="text-2xl mt-1">17</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Messages</p>
              <p className="text-2xl mt-1">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">My Courses</h3>
        <div className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-gray-900">{course.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{course.students} Students</span>
                    <span>•</span>
                    <span>{course.assignments} Assignments</span>
                    <span>•</span>
                    <span className="text-orange-600">{course.pendingGrades} Pending Grades</span>
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">Recent Submissions</h3>
        <div className="space-y-3">
          {recentSubmissions.map((submission) => (
            <div key={submission.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
              <div>
                <h4 className="text-gray-900">{submission.student}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  {submission.course} • {submission.assignment} • {submission.submittedAt}
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Grade
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
