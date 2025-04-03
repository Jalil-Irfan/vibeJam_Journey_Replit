import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic API route for health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'VibeJam Portfolio Server is running' });
  });

  // Simple analytics tracking route
  app.post('/api/track', (req, res) => {
    const { event, page, metadata } = req.body;
    console.log(`[Analytics] Event: ${event}, Page: ${page}`, metadata);
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
