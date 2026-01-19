import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Semana1 from "./pages/Semana1";
import Semana2 from "./pages/Semana2";
import Semana3 from "./pages/Semana3";
import Semana4 from "./pages/Semana4";
import Semana5 from "./pages/Semana5";
import Semana6 from "./pages/Semana6";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/semana-1"} component={Semana1} />
      <Route path={"/semana-2"} component={Semana2} />
      <Route path={"/semana-3"} component={Semana3} />
      <Route path={"/semana-4"} component={Semana4} />
      <Route path={"/semana-5"} component={Semana5} />
      <Route path={"/semana-6"} component={Semana6} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
