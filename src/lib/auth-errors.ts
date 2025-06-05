import type { AuthError } from "@supabase/supabase-js";

export interface ErrorMessage {
  title: string;
  description: string;
}

export const getAuthErrorMessage = (
  error: AuthError | Error | string
): ErrorMessage => {
  let message: string;
  let code: string = "";

  if (typeof error === "string") {
    message = error.toLowerCase();
  } else if ("message" in error) {
    message = error.message.toLowerCase();
    if ("code" in error) {
      code = (error as AuthError).code || "";
    }
  } else {
    message = "unknown error";
  }

  // Email already registered
  if (
    message.includes("user already registered") ||
    message.includes("email already registered") ||
    message.includes("email already exists") ||
    code === "email_address_already_in_use"
  ) {
    return {
      title: "Email Already Registered",
      description:
        "An account with this email address already exists. Try signing in instead, or use a different email address.",
    };
  }

  // Rate limiting
  if (
    message.includes("rate limit") ||
    message.includes("too many requests") ||
    code === "over_email_send_rate_limit"
  ) {
    return {
      title: "Too Many Attempts",
      description:
        "Please wait a moment before trying again. We've received too many requests from this email address.",
    };
  }

  // Invalid email format
  if (
    message.includes("invalid email") ||
    message.includes("email format") ||
    code === "invalid_email"
  ) {
    return {
      title: "Invalid Email",
      description: "Please enter a valid email address.",
    };
  }

  // Weak password
  if (
    message.includes("password") &&
    (message.includes("weak") ||
      message.includes("short") ||
      message.includes("length"))
  ) {
    return {
      title: "Password Too Weak",
      description:
        "Please choose a stronger password with at least 6 characters.",
    };
  }

  // Network/connection errors
  if (
    message.includes("network") ||
    message.includes("connection") ||
    message.includes("fetch")
  ) {
    return {
      title: "Connection Error",
      description:
        "Unable to connect to our servers. Please check your internet connection and try again.",
    };
  }

  // Invalid credentials (sign in)
  if (
    message.includes("invalid login credentials") ||
    message.includes("wrong password") ||
    message.includes("user not found")
  ) {
    return {
      title: "Invalid Credentials",
      description:
        "The email or password you entered is incorrect. Please try again.",
    };
  }

  // Email not confirmed
  if (
    message.includes("email not confirmed") ||
    message.includes("confirm your email")
  ) {
    return {
      title: "Email Not Confirmed",
      description:
        "Please check your email and click the confirmation link before signing in.",
    };
  }

  // Supabase not configured (development)
  if (message.includes("supabase not configured")) {
    return {
      title: "Development Mode",
      description:
        "Authentication is running in development mode. Please configure Supabase to enable full functionality.",
    };
  }
  // Generic fallback
  return {
    title: "Something Went Wrong",
    description:
      typeof error === "string"
        ? error
        : error.message || "An unexpected error occurred. Please try again.",
  };
};

export const getValidationErrorMessage = (
  validationError: string
): ErrorMessage => {
  switch (validationError) {
    case "passwords_dont_match":
      return {
        title: "Passwords Don't Match",
        description: "Please make sure both password fields match.",
      };
    case "password_too_short":
      return {
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
      };
    case "invalid_email":
      return {
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      };
    default:
      return {
        title: "Validation Error",
        description: validationError,
      };
  }
};
