import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-slate-800 bg-slate-900/50 px-3 py-2 text-base shadow-sm transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-cyan-500 focus-visible:ring-0 focus-visible:shadow-[0_0_20px_rgba(6,182,212,0.6)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-0 rounded-md pointer-events-none border border-cyan-500/0 group-focus-within:border-cyan-500/50 transition-colors duration-300">
          <div className="absolute inset-[-1px] rounded-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-beam-x" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-beam-x-reverse" />
          </div>
        </div>
        <style>{`
          @keyframes beam-x {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes beam-x-reverse {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-beam-x { animation: beam-x 3s linear infinite; }
          .animate-beam-x-reverse { animation: beam-x-reverse 3s linear infinite; }
        `}</style>
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
