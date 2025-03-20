# 🔐 Next.js 15 + Auth0 Role-Based Authentication Demo

This is a **demo project** showcasing **role-based authentication and authorization** using **Next.js 15 (App Router)** and **Auth0**.  
It includes **protected routes, admin-only pages, secured API endpoints, and advanced authentication patterns** for seamless access control.

## 🚀 Features

✅ **Authentication with Auth0** (Login/Logout)  
✅ **Role-Based Authorization** (Admin vs. Normal User)  
✅ **Protected Routes** (Only accessible to logged-in users)  
✅ **Admin Dashboard** (Only for admin users)  
✅ **Public & Protected API Endpoints**  
✅ **Server & Client-Side Authentication Handling**  

## 📂 Project Structure

```
├── app/                    # Main application
│   ├── api/                # API routes
│   │   ├── auth/[auth0]/   # Authentication endpoints (login, logout, callback, me)
│   │   ├── protected/      # Admin-only API endpoints
│   │   └── public/         # Public API endpoints
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Layout wrapper
│   ├── loading.tsx         # Loading UI
│   ├── admin/              # Admin dashboard
│   │   └── page.tsx        # Admin dashboard component
│   ├── logged-in/          # Logged-in user page
│   │   └── page.tsx        # Logged-in user component
│   ├── unauthorized/       # Unauthorized access page
│   │   └── page.tsx        # Unauthorized component
├── public/                 # Static assets
│   ├── fonts/              # Custom fonts (GeistMonoVF, GeistVF)
├── actions/                # Server actions
│   ├── auth.ts             # Auth-related actions
│   ├── createAccessToken.ts# Token generation
│   ├── getUserRoles.ts     # Fetch user roles
│   ├── isUserAdmin.ts      # Admin role verification
├── components/             # Reusable React components
│   ├── ProfileClient.tsx   # Client-side authentication component
│   ├── ProfileServer.tsx   # Server-side authentication component
```

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/DevFreAkeD/role-based-authentication-using-next.js-and-auth0.git
cd role-based-authentication-using-next.js-and-auth0
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Auth0  
Create a **`.env.local`** file and add the following environment variables:

```ini
AUTH0_SECRET="use [openssl rand -hex 32] to generate a 32 bytes value"
AUTH0_BASE_URL="http://localhost:3000"
AUTH0_ISSUER_BASE_URL="https://your-auth0-domain"
AUTH0_CLIENT_ID="your-auth0-client-id"
AUTH0_CLIENT_SECRET="your-auth0-client-secret"
```

### 4️⃣ Set up Auth0 Roles
In your Auth0 dashboard:

- Create an 'admin' role
- Assign the role to test users
- Configure the API permissions

### 5️⃣ Run the Development Server
```sh
npm run dev
```
App will be available at **[http://localhost:3000](http://localhost:3000)**.

## 🔑 Authentication Flow

1️⃣ **Users log in via Auth0**  
2️⃣ **Auth0 returns user profile & roles**  
3️⃣ **Server validates roles & grants access**  
4️⃣ **Protected routes & APIs enforce permissions**  

## 🌍 API Endpoints

| Endpoint            | Access Level         | Description |
|---------------------|---------------------|-------------|
| `/api/auth/login`   | 🔑 Authenticated     | Log in to Auth0 |
| `/api/auth/logout`  | 🔑 Authenticated     | Log out from Auth0 |
| `/api/auth/callback`| 🔑 Authenticated     | Auth0 callback handler |
| `/api/auth/me`      | 🔑 Authenticated     | Get user profile |
| `/api/public`       | 🌍 Public            | Open to everyone |
| `/api/protected`    | 🔒 Admin-Only        | Restricted to admins |

## 🛠️ Technologies Used

- **Next.js 15 (App Router)**
- **Auth0 for authentication**
- **Tailwind CSS for UI**
- **React Server & Client Components**

---

🚀 **Built with ❤️ using Next.js & Auth0**  
🔗 **Need help?** Feel free to open an [issue](https://github.com/DevFreAkeD/role-based-authentication-using-next.js-and-auth0/issues)!  
