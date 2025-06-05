import type { User, Session, AuthError } from "@supabase/supabase-js";

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: AuthError | null }>;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  signInWithGitHub: () => Promise<{ error: AuthError | null }>;
  updateProfile: (updates: {
    email?: string;
    password?: string;
    data?: Record<string, unknown>;
  }) => Promise<{ error: AuthError | null }>;
  updatePassword: (password: string) => Promise<{ error: AuthError | null }>;
  updateEmail: (email: string) => Promise<{ error: AuthError | null }>;
  deleteAccount: () => Promise<{ error: AuthError | null }>;
}
