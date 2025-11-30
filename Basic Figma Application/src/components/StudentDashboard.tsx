import { BookOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const enrolledCourses = [
  { id: 1, title: 'Introduction to Web Development', progress: 75, instructor: 'Dr. Sarah Johnson', nextLesson: 'React Hooks' },
  { id: 2, title: 'Data Structures and Algorithms', progress: 45, instructor: 'Prof. Michael Chen', nextLesson: 'Binary Trees' },
  { id: 3, title: 'UX/UI Design Fundamentals', progress: 90, instructor: 'Emily Rodriguez', nextLesson: 'Final Project' },
];

const assignments = [
  { id: 1, course: 'Web Development', title: 'Build a Todo App', dueDate: '2025-12-05', status: 'pending' },
  { id: 2, course: 'Data Structures', title: 'Implement Stack & Queue', dueDate: '2025-12-03', status: 'submitted' },
];

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Student Dashboard</h2>
        <p className="text-gray-600 mt-1">Track your courses, assignments, and progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Enrolled Courses</p>
              <p className="text-2xl mt-1">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-2xl mt-1">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-2xl mt-1">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Avg Progress</p>
              <p className="text-2xl mt-1">70%</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">My Courses</h3>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-gray-900">{course.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">Instructor: {course.instructor}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {course.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Next: {course.nextLesson}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assignments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="mb-4">Assignments</h3>
        <div className="space-y-3">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
              <div>
                <h4 className="text-gray-900">{assignment.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{assignment.course} • Due: {assignment.dueDate}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                assignment.status === 'submitted' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
