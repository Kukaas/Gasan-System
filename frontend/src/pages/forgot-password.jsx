import { ArrowLeft, GalleryVerticalEnd } from "lucide-react";
import bg from "../assets/bg.png";

import ForgotPasswordForm from "@/components/forms/forgot-password-form";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center gap-2 mb-3">
          <ArrowLeft className="size-5" />
          <Link to="/" className="text-black">
            Home
          </Link>
        </div>
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Company Name
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={bg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale brightness-50"
        />
      </div>
    </div>
  );
}
