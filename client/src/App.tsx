import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import StartHere from "@/pages/StartHere";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import DailySpin from "@/pages/DailySpin";
import FoundationalResources from "@/pages/FoundationalResources";
import Module01 from "@/pages/Module01";
import Module02 from "@/pages/Module02";
import Module03 from "@/pages/Module03";
import PEMWheel from "@/pages/PEMWheel";
import PEMWheelHelp from "@/pages/PEMWheelHelp";
import EnergyGainDrain from "@/pages/EnergyGainDrain";
import BlogPost1 from "@/pages/BlogPost1";
import BlogPost2 from "@/pages/BlogPost2";
import BlogPost3 from "@/pages/BlogPost3";
import BlogPost4 from "@/pages/BlogPost4";
import BlogPost5 from "@/pages/BlogPost5";
import WeekMarch30 from "@/pages/WeekMarch30";
import Quiz from "@/pages/Quiz";
import BookPage from "@/pages/BookPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/start" component={StartHere} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/week-march-30" component={WeekMarch30} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/blog/post-1" component={BlogPost1} />
      <Route path="/blog/post-2" component={BlogPost2} />
      <Route path="/blog/post-3" component={BlogPost3} />
      <Route path="/blog/post-4" component={BlogPost4} />
      <Route path="/blog/post-5" component={BlogPost5} />
      <Route path="/contact" component={Contact} />
      <Route path="/spin" component={DailySpin} />
      <Route path="/resources" component={FoundationalResources} />
      <Route path="/resources/module-01" component={Module01} />
      <Route path="/resources/module-02" component={Module02} />
      <Route path="/resources/module-03" component={Module03} />
      <Route path="/pem" component={PEMWheel} />
      <Route path="/pem/help" component={PEMWheelHelp} />
      <Route path="/energy" component={EnergyGainDrain} />
      <Route path="/book" component={BookPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
