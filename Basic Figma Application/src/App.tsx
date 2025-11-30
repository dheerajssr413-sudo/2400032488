import { useState } from 'react';
import { AdminDashboard } from './components/AdminDashboard';
import { InstructorDashboard } from './components/InstructorDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { ContentCreatorDashboard } from './components/ContentCreatorDashboard';
import { UserCircle, LogOut } from 'lucide-react';

type UserRole = 'admin' | 'instructor' | 'student' | 'content-creator';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student' as UserRole,
    phone: '',
    organization: ''
  });

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setShowLogoutConfirm(false);
    setShowRegistration(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentRole('student');
  };

  const handleRegistration = () => {
    // Validate password match
    if (registrationData.password !== registrationData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // In a real app, you would send this to a backend API
    console.log('Registration data:', registrationData);
    
    // Auto login after registration
    setIsLoggedIn(true);
    setCurrentRole(registrationData.role);
    setShowRegistration(false);
  };

  // Show login/registration screen if not logged in
  if (!isLoggedIn) {
    if (showRegistration) {
      // Registration Form
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-md w-full">
            <h2 className="text-center mb-2">Create Account</h2>
            <p className="text-gray-600 text-center mb-6">Join FEDF-PS10 LMS</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={registrationData.fullName}
                  onChange={(e) => setRegistrationData({...registrationData, fullName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={registrationData.email}
                  onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={registrationData.phone}
                  onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Organization/Institution</label>
                <input
                  type="text"
                  placeholder="Enter your organization"
                  value={registrationData.organization}
                  onChange={(e) => setRegistrationData({...registrationData, organization: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Role *</label>
                <select
                  value={registrationData.role}
                  onChange={(e) => setRegistrationData({...registrationData, role: e.target.value as UserRole})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="content-creator">Content Creator</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Password *</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={registrationData.password}
                  onChange={(e) => setRegistrationData({...registrationData, password: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Confirm Password *</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={registrationData.confirmPassword}
                  onChange={(e) => setRegistrationData({...registrationData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                onClick={handleRegistration}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => setShowRegistration(false)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Login Form
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-md w-full">
          <h2 className="text-center mb-2">FEDF-PS10 LMS</h2>
          <p className="text-gray-600 text-center mb-6">Learning Management System</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm mb-2">
              Demo: Click login to access the system
            </p>
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button
                onClick={() => setShowRegistration(true)}
                className="text-blue-600 hover:text-blue-700"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const renderDashboard = () => {
    switch (currentRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'instructor':
        return <InstructorDashboard />;
      case 'student':
        return <StudentDashboard />;
      case 'content-creator':
        return <ContentCreatorDashboard />;
    }
  };

  const getRoleName = () => {
    switch (currentRole) {
      case 'admin':
        return 'Admin';
      case 'instructor':
        return 'Instructor';
      case 'student':
        return 'Student';
      case 'content-creator':
        return 'Content Creator';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="mb-2">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-blue-600">FEDF-PS10 LMS</h1>
              <p className="text-gray-600 text-sm mt-1">Learning Management System</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Role Switcher */}
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-gray-600" />
                <select
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value as UserRole)}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="content-creator">Content Creator</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Role Badge */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <p className="text-blue-800 text-sm">
            Current Role: <span className="font-medium">{getRoleName()}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
}
