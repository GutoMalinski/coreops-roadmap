import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending" | "delayed";
  type: "milestone" | "task" | "integration";
  week?: string;
};

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Central Line (Desktop) / Left Line (Mobile) */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                isEven ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Content Card */}
              <div className="flex-1 w-full md:w-[calc(50%-2rem)]">
                <div className={cn(
                  "p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px]",
                  item.status === "completed" ? "bg-primary/5 border-primary/30 shadow-[0_0_20px_rgba(255,107,0,0.05)]" : 
                  item.status === "in-progress" ? "bg-card/80 border-primary/50 shadow-[0_0_15px_rgba(255,107,0,0.1)]" :
                  "bg-card/40 border-border hover:bg-card/60"
                )}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md",
                      item.status === "completed" ? "bg-primary/20 text-primary" :
                      item.status === "in-progress" ? "bg-blue-500/20 text-blue-400" :
                      "bg-white/5 text-muted-foreground"
                    )}>
                      {item.week || "TBD"}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">{item.date}</span>
                  </div>
                  
                  <h3 className={cn(
                    "text-lg font-bold font-display mb-2",
                    item.status === "completed" ? "text-primary" : "text-foreground"
                  )}>
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full z-10 flex items-center justify-center">
                <div className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_10px_currentColor]",
                  item.status === "completed" ? "bg-primary text-primary" :
                  item.status === "in-progress" ? "bg-blue-500 text-blue-500 animate-pulse" :
                  "bg-muted text-muted-foreground"
                )}>
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
              </div>

              {/* Empty Space for Desktop Layout Balance */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
