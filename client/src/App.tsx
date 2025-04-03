import { Route, Switch, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    // Ensure the base matches your GitHub Pages repository name
    <Router base="/vibeJam_Journey_Replit">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Add a fallback UI to ensure rendering issues are visible */}
      <div>
        <AppRouter />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;