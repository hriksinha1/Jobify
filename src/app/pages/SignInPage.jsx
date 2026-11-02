import React, { useEffect } from "react";
import { Navigate, useSearchParams, Link } from "react-router-dom";
import { SignIn, useUser } from "@clerk/react";
import { Sparkles } from "lucide-react";

/** Split-screen sign-in. Authentication itself is Clerk's <SignIn />; Google is enabled in the Clerk dashboard. */
export default function SignInPage() {
  const [params] = useSearchParams();
  const { isLoaded, isSignedIn } = useUser();
  const raw = params.get("redirect_to") || "/app/chat";
  const redirect = raw.startsWith("/") && !raw.startsWith("//") ? raw : "/app/chat"; // same-origin paths only

  useEffect(() => { document.title = "Sign in · Jobify"; }, []);
  if (isLoaded && isSignedIn) return <Navigate to={redirect} replace />;

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#F5F5F5] font-body">
      <div className="hidden lg:flex relative flex-col justify-between p-10 bg-[#EEEEEE] border-r border-[#E7E7E7] overflow-hidden">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Jobify home">
          <span className="w-9 h-9 rounded-xl bg-[#141414] text-white flex items-center justify-center"><Sparkles className="w-4 h-4" /></span>
          <span className="font-display font-semibold text-[18px]">Jobify</span>
        </Link>
        <svg aria-hidden="true" viewBox="0 0 400 300" className="absolute right-0 bottom-0 w-[70%] opacity-60" fill="none" stroke="#888" strokeWidth="1">
          {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${20 + i * 40} 300 Q ${120 + i * 30} ${160 - i * 8} ${400} ${40 + i * 14}`} />)}
        </svg>
        <div className="relative max-w-[460px]">
          <p className="text-[22px] leading-snug">“Bring your jobs, Gmail applications, profile, portfolio, and career assistant into one focused workspace.”</p>
          <p className="mt-3 font-mono text-[12px] text-[#444]">A calmer operating system for your job search</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 gap-5">
        <SignIn routing="hash" forceRedirectUrl={redirect} signUpForceRedirectUrl={redirect} />
        <p className="text-[12px] text-[#707070] text-center max-w-[320px]">
          New here? Continue with Google or email above; your account is created automatically.
        </p>
        <div className="text-[12.5px] text-[#444] flex gap-4">
          <Link to="/demo/chat" className="underline">Try the demo workspace</Link>
          <Link to="/" className="underline">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
