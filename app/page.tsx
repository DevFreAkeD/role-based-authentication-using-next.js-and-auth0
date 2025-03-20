import { login, logout } from "@/actions/auth";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  const isAuthenticated = !!session;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          🚀 Auth0 Simple Authentication
        </h1>

        {/* Login / Logout */}
        <div className="flex justify-center mb-6">
          {!isAuthenticated ? (
            <form action={login}>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all">
                Login
              </button>
            </form>
          ) : (
            <form action={logout}>
              <button className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 transition-all">
                Logout
              </button>
            </form>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/logged-in"
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-all"
          >
            Logged In Page 🔐
          </Link>
          <Link
            href="/api/public"
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-all"
          >
            Public API 🌍
          </Link>
        </div>
      </div>
    </section>
  );
}