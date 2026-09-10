-- Fix RLS / Postgres Permissions for Anonymous Users
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO anon;

-- Explicitly ensure public read access policies
DROP POLICY IF EXISTS "Public projects are viewable by everyone." ON projects;
CREATE POLICY "Public projects are viewable by everyone." ON projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public project images are viewable by everyone." ON project_images;
CREATE POLICY "Public project images are viewable by everyone." ON project_images FOR SELECT USING (true);

-- Seed Primary Projects
INSERT INTO projects (name, slug, category, role, short_description, full_description, platform, technologies, architecture, responsibilities, features, image_url, sort_order)
VALUES 
(
  'NEXCART',
  'nexcart',
  'Enterprise E-Commerce Platform',
  'Technical Lead',
  'Enterprise e-commerce mobile application featuring full catalog browsing, dynamic cart, wishlist, and transactional checkout flows.',
  'Nexcart is a high-performance enterprise e-commerce platform built to handle large catalogs and concurrent user traffic. The application provides a seamless shopping experience from product discovery through checkout, focusing heavily on caching strategies and responsive UI.',
  'Android & iOS (Native)',
  ARRAY['Kotlin', 'Jetpack Compose', 'SwiftUI', 'Apollo GraphQL', 'MVVM', 'Clean Architecture', 'Hilt', 'Coroutines'],
  'The architecture follows a strict Clean Architecture pattern with MVVM at the presentation layer. It utilizes Apollo GraphQL for optimized data fetching, reducing payload sizes for the mobile clients. Dependency injection is managed via Hilt on Android.',
  ARRAY['Led cross-platform architecture alignment', 'Implemented complex GraphQL caching mechanisms', 'Oversaw payment gateway integration', 'Conducted rigorous code reviews'],
  ARRAY['Authentication', 'Product Listing', 'Product Details', 'Cart', 'Wishlist', 'Checkout'],
  '/nexcart.png',
  1
),
(
  'KAHRAMAA',
  'kahramaa',
  'Qatar Government Utility Platform',
  'Technical Lead',
  'Official bilingual mobile utility self-service platform enabling bill payments, real-time consumption monitoring, and service request tracking.',
  'Kahramaa is the official utility application for the State of Qatar. It serves as a comprehensive self-service portal for citizens and residents to manage their electricity and water accounts, featuring complex real-time telemetry dashboards and bilingual (Arabic/English) support.',
  'Android & iOS (Native)',
  ARRAY['Kotlin', 'Jetpack Compose', 'SwiftUI', 'REST APIs', 'Firebase'],
  'Built on a robust native architecture that handles complex internationalization requirements, particularly RTL (Right-to-Left) layouts. Uses a combination of local caching and real-time synchronization for telemetry data.',
  ARRAY['Engineered the RTL layout infrastructure', 'Integrated secure payment processing systems', 'Optimized data parsing for large telemetry datasets'],
  ARRAY['Bill Payment', 'Service Requests', 'Meter Reading', 'Customer Self-Service'],
  '/kahramaa.png',
  2
),
(
  'DOCTIME LOG',
  'doctime-log',
  'Healthcare Platform',
  'Technical Lead',
  'Healthcare clinician workforce application facilitating physician time tracking, schedule coordination, and authentication.',
  'DocTime Log provides mission-critical workforce management for healthcare facilities. It streamlines the tracking of clinical hours, securely handles physician authentication, and integrates with backend payroll systems.',
  'Android & iOS',
  ARRAY['Kotlin', 'Android SDK', 'Swift UIKit', 'REST APIs'],
  'The application employs strict security measures to protect PII and clinical schedules, utilizing encrypted local storage and secure authenticated API channels.',
  ARRAY['Designed the core time-tracking engine', 'Ensured HIPAA compliance on mobile clients', 'Managed the transition to updated UIKit paradigms'],
  ARRAY['Physician Time Tracking', 'Payment / Payroll', 'Authentication', 'Workforce Management'],
  '/doctime.png',
  3
),
(
  'APCCI',
  'apcci',
  'Smart City Platform',
  'Senior Mobile Engineer',
  'Civic mobile operations suite providing municipal workforce management, attendance tracking, and citizen complaint resolution.',
  'APCCI is a civic tech application designed to bridge the gap between municipal workers and citizens. It features location-based workforce tracking and a robust complaint resolution ticketing system.',
  'Android & iOS',
  ARRAY['Kotlin', 'Android SDK', 'Swift UIKit', 'REST APIs', 'Google Maps'],
  'The system relies heavily on location services and offline-first capabilities to ensure municipal workers can log data even in areas with poor connectivity.',
  ARRAY['Implemented background location tracking', 'Built offline data synchronization queues', 'Integrated complex map overlays'],
  ARRAY['Workforce', 'Attendance', 'Route Monitoring', 'Citizen Complaints', 'Mapping'],
  NULL,
  4
),
(
  'FLEETVIGIL',
  'fleetvigil',
  'Fleet Management Platform',
  'Senior Mobile Engineer',
  'Commercial fleet operations application providing real-time GPS asset tracking, driver trip monitoring, and vehicle diagnostics.',
  'FleetVigil provides comprehensive logistical oversight for commercial fleets. The app displays real-time telemetry, trip analytics, and fuel monitoring via interactive dashboards.',
  'Android & iOS',
  ARRAY['Kotlin', 'Android SDK', 'Swift UIKit', 'REST APIs', 'Google Maps'],
  'Built to process high-frequency location updates and render dynamic mapping elements without dropping frames or draining battery.',
  ARRAY['Optimized battery consumption during continuous GPS polling', 'Developed the real-time mapping engine', 'Integrated vehicle diagnostic APIs'],
  ARRAY['GPS Tracking', 'Vehicle Monitoring', 'Route Analytics', 'Fuel Monitoring', 'Fleet Dashboard'],
  NULL,
  5
)
ON CONFLICT (slug) DO UPDATE SET 
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  role = EXCLUDED.role,
  short_description = EXCLUDED.short_description,
  full_description = EXCLUDED.full_description,
  platform = EXCLUDED.platform,
  technologies = EXCLUDED.technologies,
  architecture = EXCLUDED.architecture,
  responsibilities = EXCLUDED.responsibilities,
  features = EXCLUDED.features,
  image_url = EXCLUDED.image_url;

-- Seed More Products (These can just be simple entries)
INSERT INTO projects (name, slug, category, platform, short_description)
VALUES
('My Safe Pune', 'my-safe-pune', 'Civic Safety', 'Android / iOS', 'Civic safety and emergency assistance application for citizens.'),
('Zylem', 'zylem', 'Enterprise Operations', 'Android', 'Enterprise operations and asset logging application.'),
('Farmers Basket', 'farmers-basket', 'Agri-Commerce', 'Android', 'Agri-commerce and fresh produce supply chain application.'),
('Baav', 'baav', 'Local Marketplace', 'Mobile', 'Localized marketplace and merchant listings platform.'),
('NexMoney', 'nexmoney', 'Fintech & Payments', 'Android / iOS', 'Digital wallet and multi-utility payment application.'),
('NexShopping', 'nexshopping', 'Consumer E-Commerce', 'Android', 'Consumer e-commerce and shopping experience mobile app.'),
('NexMoney Merchant', 'nexmoney-merchant', 'Merchant Retail', 'Android', 'Retailer QR code and transaction management interface.'),
('Lisungui', 'lisungui', 'Community Health', 'Mobile', 'Community healthcare and referral management workflow.')
ON CONFLICT (slug) DO NOTHING;
