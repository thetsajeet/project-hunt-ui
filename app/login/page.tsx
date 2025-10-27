"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/ui/AuthForm/login-form";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
