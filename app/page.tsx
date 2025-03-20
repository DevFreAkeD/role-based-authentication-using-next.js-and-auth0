import { login, logout } from "@/actions/auth";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import ProfileServer from "@/components/ProfileServer";

export default async function Home() {
  const session = await getSession();
  const isAuthenticated = !!session;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          🚀 Auth0 Role-Based User Management
        </h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
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

          <Link
            href="/admin"
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-all"
          >
            Admin Page 🛡️
          </Link>
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
          <Link
            href="/api/protected"
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-all"
          >
            Protected Admin API 🔒
          </Link>
        </div>

        {/* Profile Section */}
        <div className="border-t border-gray-300 pt-6 text-center">
          {isAuthenticated ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Welcome back, {session?.user?.name || "User"}! 🎉
              </h2>
              <ProfileServer />
            </>
          ) : (
            <h2 className="text-xl font-semibold text-gray-800">
              Please log in to see your profile details.
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}