export default function SignUp() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h1>
          </div>
  
          {/* Input Fields */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
  
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
  
            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
  
            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-orange-400 focus:ring-2 focus:ring-orange-400"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me?
              </label>
            </div>
          </div>
  
          {/* Sign-Up Button */}
          <div className="mt-6">
            <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-orange-500">
              Sign Up
            </button>
          </div>
  
          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
  
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          {/* Social Buttons */}
          <div className="space-y-4">
            <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
              <img
                src="/Google.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
              <img
                src="/Apple.png"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    );
  }
  