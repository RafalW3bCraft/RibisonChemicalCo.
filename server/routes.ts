import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      const phpScript = path.join(__dirname, "email", "send-email-production.php");
      const emailData = JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        company: validatedData.company || '',
        sector: validatedData.sector || '',
        message: validatedData.message
      });
      
      exec(`php "${phpScript}" '${emailData}'`, (error, stdout, stderr) => {
        if (error) {
          console.error('Email sending error:', error);
          console.error('stderr:', stderr);
        } else {
          console.log('Email sent successfully:', stdout);
          try {
            const emailResult = JSON.parse(stdout);
            if (emailResult.success) {
              console.log('Email confirmed sent at:', emailResult.timestamp);
            }
          } catch (parseError) {
            console.log('Email response:', stdout);
          }
        }
      });
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contactSubmission.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
