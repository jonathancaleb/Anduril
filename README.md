# Andúril - GitHub Productivity Tools

A React application with Supabase authentication, featuring GitHub OAuth integration and a protected dashboard. This is a personal experiment in developer productivity tooling, inspired by tools like ZenHub, Linear, and Zerocracy.

## 🗡️ Features

- **Authentication System**
  - Email/password registration and login
  - GitHub OAuth integration
  - Persistent sessions across browser refresh
  - Protected routes with automatic redirects

- **User Dashboard**
  - Protected dashboard accessible only to authenticated users
  - User profile information display
  - GitHub username and avatar (when using OAuth)
  - Session management and logout functionality

- **Modern UI/UX**
  - Responsive design with Tailwind CSS
  - Dark mode support
  - Loading states and error handling
  - LOTR-inspired theming

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- (Optional) GitHub OAuth app for social login

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd anduril
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings → API to find your project URL and anon key
3. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. GitHub OAuth Setup (Optional)

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create a new OAuth App with:
   - Application name: `Andúril` (or your preferred name)
   - Homepage URL: `http://localhost:5173` (for development)
   - Authorization callback URL: `http://localhost:5173/auth/callback`

3. Add your GitHub Client ID to `.env.local`:

```env
VITE_GITHUB_CLIENT_ID=your-github-client-id
```

4. In your Supabase dashboard:
   - Go to Authentication → Providers
   - Enable GitHub provider
   - Add your GitHub OAuth app credentials
   - Set redirect URL to: `https://your-project-ref.supabase.co/auth/v1/callback`

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with auth state
│   ├── Layout.tsx          # App layout wrapper
│   └── ProtectedRoute.tsx  # Route protection component
├── contexts/
│   └── AuthContext.tsx     # Authentication state management
├── lib/
│   └── supabase.ts         # Supabase client configuration
├── pages/
│   ├── HomePage.tsx        # Landing page
│   ├── LoginPage.tsx       # Sign in form
│   ├── RegisterPage.tsx    # Sign up form
│   ├── DashboardPage.tsx   # Protected user dashboard
│   ├── AboutPage.tsx       # About the project
│   └── DocsPage.tsx        # Documentation
└── router/
    └── index.tsx           # React Router configuration
```

## 🔧 Key Components

### AuthContext

Manages authentication state using Supabase Auth:

```tsx
const { user, session, loading, signIn, signUp, signOut, signInWithGitHub } = useAuth()
```

### ProtectedRoute

Wraps components that require authentication:

```tsx
<ProtectedRoute>
  <DashboardPage />
</ProtectedRoute>
```

### Supabase Configuration

```tsx
import { supabase } from './lib/supabase'

// Sign in
const { error } = await supabase.auth.signInWithPassword({ email, password })

// GitHub OAuth
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'github',
  options: { redirectTo: `${window.location.origin}/dashboard` }
})
```

## 📝 Authentication Flow

1. **Registration**: Users can create accounts with email/password or GitHub OAuth
2. **Email Confirmation**: Email signups require email verification
3. **Login**: Multiple authentication methods supported
4. **Session Persistence**: Sessions persist across browser refresh
5. **Protected Routes**: Dashboard requires authentication
6. **Logout**: Clean session termination

## 🎨 Styling

Built with Tailwind CSS featuring:

- Responsive design (mobile-first)
- Dark mode support
- Custom color palette (amber/orange theme)
- Smooth transitions and hover effects
- Loading states and error styling

## 🚢 Deployment

### Environment Variables for Production

Update your production environment with:

```env
VITE_SUPABASE_URL=your-production-supabase-url
VITE_SUPABASE_ANON_KEY=your-production-anon-key
VITE_GITHUB_CLIENT_ID=your-production-github-client-id
```

### Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set environment variables in your hosting platform
3. Update GitHub OAuth callback URLs for production domain
4. Update Supabase redirect URLs for production

## 🔮 Future Features

- GitHub repository integration
- Productivity analytics dashboard
- Focus tools and distraction blocking
- Project management features
- Advanced user preferences

## 🧙‍♂️ About

This is a personal experiment in understanding GitHub-integrated productivity tools. Named after the legendary sword from *The Lord of the Rings*, it's built in public as a learning journey.

Not a startup or commercial product—just one developer figuring out what actually helps with productivity while learning how tools like ZenHub and Linear work under the hood.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*"The Blade that was Broken shall return to Minas Tirith."* ⚔️
