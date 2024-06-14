"use client";
import { SessionProvider as AuthProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
