-- Supabase SQL Schema for Portfolio

-- ==============================================================================
-- 1. Enable UUID Extension
-- ==============================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. Create Tables
-- ==============================================================================

-- PROFILE
CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    headline TEXT NOT NULL,
    short_bio TEXT,
    long_bio TEXT,
    location TEXT,
    email TEXT,
    phone TEXT,
    availability_status TEXT,
    profile_image_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- SOCIAL LINKS
CREATE TABLE social_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    linkedin_url TEXT,
    github_url TEXT,
    website_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- EXPERIENCE
CREATE TABLE experience (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    is_current BOOLEAN DEFAULT false
);

-- PROJECTS
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT,
    short_description TEXT,
    full_description TEXT,
    role TEXT,
    technologies TEXT[],
    architecture TEXT,
    responsibilities TEXT[],
    features TEXT[],
    outcome TEXT,
    platform TEXT,
    image_url TEXT,
    featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0
);

-- PROJECT IMAGES
CREATE TABLE project_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    sort_order INTEGER DEFAULT 0
);

-- SKILLS
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL, -- e.g., Android, iOS, Cross-platform, Backend/supporting, AI
    name TEXT NOT NULL,
    level_type TEXT NOT NULL, -- core, strong, working, expanding
    sort_order INTEGER DEFAULT 0
);

-- CERTIFICATIONS
CREATE TABLE certifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    issuer TEXT NOT NULL,
    credential_url TEXT,
    issued_date DATE,
    sort_order INTEGER DEFAULT 0
);

-- RESUME FILES
CREATE TABLE resume_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resume_type TEXT NOT NULL, -- e.g., Android-focused, iOS-focused, Mobile Lead
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- CONTACT MESSAGES
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    is_read BOOLEAN DEFAULT false
);

-- SITE SETTINGS
CREATE TABLE site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL
);

-- ==============================================================================
-- 3. Row Level Security (RLS) Policies
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ ACCESS (Allow anyone to view portfolio content)
CREATE POLICY "Public profiles are viewable by everyone." ON profile FOR SELECT USING (true);
CREATE POLICY "Public social links are viewable by everyone." ON social_links FOR SELECT USING (true);
CREATE POLICY "Public experience is viewable by everyone." ON experience FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone." ON projects FOR SELECT USING (true);
CREATE POLICY "Public project images are viewable by everyone." ON project_images FOR SELECT USING (true);
CREATE POLICY "Public skills are viewable by everyone." ON skills FOR SELECT USING (true);
CREATE POLICY "Public certifications are viewable by everyone." ON certifications FOR SELECT USING (true);
CREATE POLICY "Public resumes are viewable by everyone." ON resume_files FOR SELECT USING (true);
CREATE POLICY "Public site settings are viewable by everyone." ON site_settings FOR SELECT USING (true);

-- PUBLIC INSERT ACCESS (Allow anyone to submit contact messages)
CREATE POLICY "Anyone can insert a contact message." ON contact_messages FOR INSERT WITH CHECK (true);

-- ADMIN ACCESS (Allow authenticated admin to perform all CRUD operations)
-- Assuming admin uses Supabase Auth. auth.uid() ensures the user is logged in.
CREATE POLICY "Admins can do everything on profile" ON profile FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on social_links" ON social_links FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on experience" ON experience FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on project_images" ON project_images FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on certifications" ON certifications FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on resume_files" ON resume_files FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on contact_messages" ON contact_messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can do everything on site_settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');

-- ==============================================================================
-- 4. Initial Seed Data (Optional)
-- ==============================================================================
INSERT INTO profile (name, headline, short_bio, location, email, phone) 
VALUES ('Mayur Rokade', 'Building mobile products that scale beyond the screen.', '10+ years building and leading Android and iOS products across enterprise, e-commerce, healthcare, utility and smart-city domains.', 'Pune, India', 'rokademayurjp0207@gmail.com', '+91-8767690878');

INSERT INTO social_links (linkedin_url, github_url)
VALUES ('https://www.linkedin.com/in/mayuroakde/', 'https://github.com/mayurrokadecp01-svg');
