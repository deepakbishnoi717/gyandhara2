import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-black/50 px-3 py-2 text-base shadow-sm transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-cyan-500 focus-visible:ring-0 focus-visible:shadow-[0_0_15px_#06b6d4] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "group-focus-within:border-cyan-500",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-0 rounded-md pointer-events-none border border-cyan-500/0 group-focus-within:border-cyan-500/50 transition-colors duration-300">
          <div className="absolute inset-[-1px] rounded-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-cyan-500 to-transparent animate-beam-x" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-bottom from-transparent via-cyan-500 to-transparent animate-beam-y" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-cyan-500 to-transparent animate-beam-x" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-bottom from-transparent via-cyan-500 to-transparent animate-beam-y" />
          </div>
        </div>
        <style>{`
          @keyframes beam-x {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes beam-y {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-beam-x {
            animation: beam-x 2s linear infinite;
          }
          .animate-beam-y {
            animation: beam-y 2s linear infinite;
          }
          .bg-gradient-to-right { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
          .bg-gradient-to-bottom { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
        `}</style>
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
