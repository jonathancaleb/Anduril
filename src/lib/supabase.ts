import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient, Session, AuthError } from "@supabase/supabase-js";

// Type for the mock client interface
interface MockSupabaseClient {
  auth: {
    signUp: (
      credentials: unknown
    ) => Promise<{ data: unknown; error: AuthError | null }>;
    signInWithPassword: (
      credentials: unknown
    ) => Promise<{ data: unknown; error: AuthError | null }>;
    signInWithOAuth: (
      options: unknown
    ) => Promise<{ data: unknown; error: AuthError | null }>;
    signOut: () => Promise<{ error: AuthError | null }>;
    getSession: () => Promise<{
      data: { session: Session | null };
      error: AuthError | null;
    }>;
    onAuthStateChange: (
      callback: (event: string, session: Session | null) => void
    ) => {
      data: { subscription: { unsubscribe: () => void } };
    };
  };
  from: (table: string) => {
    select: (
      columns?: string
    ) => Promise<{ data: unknown[]; error: Error | null }>;
    insert: (data: unknown) => Promise<{ data: unknown; error: Error | null }>;
    update: (data: unknown) => Promise<{ data: unknown; error: Error | null }>;
    delete: () => Promise<{ data: unknown; error: Error | null }>;
  };
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for placeholder values or missing variables
const isPlaceholder = (value: string | undefined) =>
  !value ||
  value.includes("your-supabase-project-url-here") ||
  value.includes("your-supabase-anon-key-here");

// Get the current origin for redirect URLs
export const getRedirectUrl = () => {
  return window.location.origin;
};

// Initialize Supabase client
let supabaseClient: SupabaseClient | MockSupabaseClient;

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  isPlaceholder(supabaseUrl) ||
  isPlaceholder(supabaseAnonKey)
) {
  console.warn(
    "⚠️ Supabase credentials not configured. Using development mode.\n" +
      "To enable authentication:\n" +
      "1. Create a Supabase project at https://supabase.com\n" +
      "2. Update .env.local with your project URL and anon key"
  );
  const createMockAuthError = (message: string): AuthError => {
    const error = new Error(message) as AuthError;
    error.code = "supabase_not_configured";
    error.status = 500;
    return error;
  };

  supabaseClient = {
    auth: {
      signUp: () =>
        Promise.resolve({
          data: null,
          error: createMockAuthError("Supabase not configured"),
        }),
      signInWithPassword: () =>
        Promise.resolve({
          data: null,
          error: createMockAuthError("Supabase not configured"),
        }),
      signInWithOAuth: () =>
        Promise.resolve({
          data: null,
          error: createMockAuthError("Supabase not configured"),
        }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () =>
        Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
    },
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () =>
        Promise.resolve({
          data: null,
          error: new Error("Supabase not configured"),
        }),
      update: () =>
        Promise.resolve({
          data: null,
          error: new Error("Supabase not configured"),
        }),
      delete: () =>
        Promise.resolve({
          data: null,
          error: new Error("Supabase not configured"),
        }),
    }),
  } satisfies MockSupabaseClient;
} else {
  // Use real Supabase client
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      // Force development flow detection
      flowType: "pkce",
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
    },
  });
}

export const supabase = supabaseClient;
export default supabase;
