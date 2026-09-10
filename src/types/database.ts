export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profile: { Row: any, Insert: any, Update: any }
      social_links: { Row: any, Insert: any, Update: any }
      experience: { Row: any, Insert: any, Update: any }
      projects: { 
        Row: {
          id: string; name: string; slug: string; category: string;
          short_description: string; full_description: string; role: string;
          technologies: string[]; architecture: string; responsibilities: string[];
          features: string[]; outcome: string; platform: string; image_url: string;
          featured: boolean; sort_order: number;
        }, 
        Insert: any, Update: any 
      }
      project_images: { Row: any, Insert: any, Update: any }
      skills: { Row: any, Insert: any, Update: any }
      certifications: { Row: any, Insert: any, Update: any }
      resume_files: { Row: any, Insert: any, Update: any }
      contact_messages: { 
        Row: any, 
        Insert: { name: string, email: string, subject: string, message: string }, 
        Update: any 
      }
      site_settings: { Row: any, Insert: any, Update: any }
    }
  }
}
