import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Calendar, Layers, Settings, Menu, X, ListTodo } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Visão Geral", path: "/", icon: LayoutDashboard },
    { label: "Semana 1", path: "/semana-1", icon: ListTodo },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card/30 backdrop-blur-sm h-screen sticky top-0 z-20">
        <div className="p-6 border-b border-border/50">
          <h1 className="text-2xl font-bold font-display tracking-wider text-primary flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
            CORE<span className="text-foreground">OPS</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">Intelligence Center</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group cursor-pointer",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(255,107,0,0.1)]"
                      : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "group-hover:text-foreground")} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--color-primary)]" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-border/50">
          <div className="bg-gradient-to-br from-card to-background border border-border rounded-xl p-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all duration-500" />
            <p className="text-xs text-muted-foreground mb-1">Deadline</p>
            <p className="text-lg font-bold font-display text-foreground">28 Fev 2026</p>
            <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full w-[35%] shadow-[0_0_10px_var(--color-primary)]" />
            </div>
            <p className="text-[10px] text-right mt-1 text-primary">35% Concluído</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
          <span className="font-bold font-display text-lg">COREOPS</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border transition-all",
                    location === item.path
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "border-transparent hover:bg-white/5"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Background Ambient Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
