// app/page.tsx

import Link from "next/link";


export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main className="w-full max-w-[420px] bg-white dark:bg-[#1e1c2e] rounded-2xl shadow-card overflow-hidden">
        {/* Header Section */}
        <div className="pt-10 pb-6 px-8 flex flex-col items-center text-center">
          {/* Logo Placeholder */}
          <div className="w-20 h-20 mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[40px]">church</span>
          </div>

          {/* Titles */}
          <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight mb-2">
            APP Gereja
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
            Amplop Pemberian Persembahan
          </p>
        </div>

        {/* Login Form */}
        <div className="px-8 pb-10">
          <form action="#" className="flex flex-col gap-5" method="POST">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 dark:text-white text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 px-4 placeholder:text-slate-400 text-sm transition-all duration-200"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-slate-900 dark:text-white text-sm font-medium" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="relative group">
                <input
                  className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 pl-4 pr-12 placeholder:text-slate-400 text-sm transition-all duration-200"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <a className="text-primary hover:text-primary/80 text-xs font-semibold" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            {/* Login Button */}
            <Link
              href="/dashboard"
              className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg shadow-soft transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Login</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              Need help accessing your account? <br />
              <a className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary" href="#">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Decorative Bottom Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-[#6366f1] to-[#818cf8]"></div>

        {/* Background Decoration Image */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#5048e5 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />
          {/* Abstract gradient blobs */}
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </main>
    </div>
  );
}
