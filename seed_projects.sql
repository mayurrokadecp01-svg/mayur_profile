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

-- Seed More Products (Detailed Entries for Case Studies)
INSERT INTO projects (name, slug, category, role, short_description, full_description, platform, technologies, architecture, responsibilities, features)
VALUES
(
  'My Safe Pune', 'my-safe-pune', 'Civic Safety', 'Senior Mobile Engineer', 
  'Civic safety and emergency assistance application for citizens.',
  'My Safe Pune is a critical civic application designed to connect citizens with emergency services rapidly. It provides instant SOS features, real-time location broadcasting, and a directory of essential municipal contacts.',
  'Android & iOS',
  ARRAY['Kotlin', 'Swift', 'Firebase', 'Google Maps API'],
  'Utilizes a cloud-native backend with real-time database listeners to ensure emergency alerts are dispatched instantly. The mobile client focuses on high availability and offline resilience.',
  ARRAY['Implemented the SOS broadcast logic', 'Integrated real-time mapping for responder tracking', 'Optimized battery usage for background location services'],
  ARRAY['SOS Alerts', 'Real-time Location', 'Emergency Contacts', 'Incident Reporting']
),
(
  'Zylem', 'zylem', 'Enterprise Operations', 'Mobile Developer', 
  'Enterprise operations and asset logging application.',
  'Zylem serves as a robust asset management and logging tool for enterprise operations, allowing field workers to document equipment status, track maintenance schedules, and generate reports on the go.',
  'Android',
  ARRAY['Java', 'Android SDK', 'SQLite', 'REST APIs'],
  'The app relies on an offline-first architecture using SQLite, synchronizing data with the central enterprise ERP system once a stable connection is established.',
  ARRAY['Designed the offline data synchronization engine', 'Built dynamic forms for asset logging', 'Ensured secure data transmission over corporate VPNs'],
  ARRAY['Asset Tracking', 'Offline Logging', 'Dynamic Forms', 'ERP Sync']
),
(
  'Farmers Basket', 'farmers-basket', 'Agri-Commerce', 'Mobile Developer', 
  'Agri-commerce and fresh produce supply chain application.',
  'Farmers Basket bridges the gap between local farmers and urban consumers. The application manages the entire lifecycle from farm inventory listing to consumer checkout and delivery tracking.',
  'Android',
  ARRAY['Java', 'Android SDK', 'Retrofit', 'Firebase Cloud Messaging'],
  'Features a dual-sided marketplace architecture, optimized for low-bandwidth environments typically found in rural farming communities.',
  ARRAY['Developed the inventory management module for farmers', 'Integrated push notifications for order updates', 'Optimized image loading for low-end devices'],
  ARRAY['Marketplace', 'Order Tracking', 'Inventory Management', 'Push Notifications']
),
(
  'Baav', 'baav', 'Local Marketplace', 'Mobile Developer', 
  'Localized marketplace and merchant listings platform.',
  'Baav is a localized merchant discovery and marketplace platform. It enables local businesses to list their services and products, while allowing consumers to browse, review, and contact vendors.',
  'Mobile',
  ARRAY['React Native', 'Redux', 'Node.js'],
  'Built as a cross-platform solution to quickly capture market share, utilizing Redux for state management and a Node.js backend for rapid API development.',
  ARRAY['Led the transition to React Native for cross-platform delivery', 'Implemented the search and filtering engine', 'Built the user review and rating system'],
  ARRAY['Business Listings', 'Search & Discovery', 'Reviews', 'User Profiles']
),
(
  'NexMoney', 'nexmoney', 'Fintech & Payments', 'Senior Mobile Engineer', 
  'Digital wallet and multi-utility payment application.',
  'NexMoney is a comprehensive digital wallet solution enabling peer-to-peer transfers, utility bill payments, and secure digital transactions with banking-grade security protocols.',
  'Android & iOS',
  ARRAY['Kotlin', 'Swift', 'Biometrics API', 'Encryption'],
  'Employs a highly secure architecture with end-to-end encryption, utilizing hardware-backed keystores for biometric authentication and tokenized payment processing.',
  ARRAY['Integrated biometric authentication pipelines', 'Ensured PCI-DSS compliance on the mobile client', 'Developed the peer-to-peer transfer UI'],
  ARRAY['Digital Wallet', 'P2P Transfers', 'Bill Payments', 'Biometric Security']
),
(
  'NexShopping', 'nexshopping', 'Consumer E-Commerce', 'Senior Mobile Engineer', 
  'Consumer e-commerce and shopping experience mobile app.',
  'A high-conversion consumer shopping application featuring personalized recommendations, streamlined checkout, and loyalty program integration.',
  'Android',
  ARRAY['Kotlin', 'MVVM', 'Coroutines', 'Room Database'],
  'Utilizes a modern Android tech stack (MVVM, Coroutines, Room) to provide a fluid, lag-free shopping experience with robust local caching of product catalogs.',
  ARRAY['Architected the MVVM presentation layer', 'Implemented advanced search with auto-suggest', 'Built the loyalty rewards tracking UI'],
  ARRAY['Product Catalog', 'Smart Search', 'Cart & Checkout', 'Loyalty Program']
),
(
  'NexMoney Merchant', 'nexmoney-merchant', 'Merchant Retail', 'Senior Mobile Engineer', 
  'Retailer QR code and transaction management interface.',
  'The merchant companion to NexMoney, allowing retailers to accept payments via dynamic QR codes, track daily settlements, and manage refunds directly from their mobile devices.',
  'Android',
  ARRAY['Kotlin', 'CameraX', 'WebSockets'],
  'Designed for rapid transaction processing at the point of sale, utilizing WebSockets for instant payment confirmations and CameraX for reliable QR code scanning.',
  ARRAY['Integrated CameraX for high-speed QR scanning', 'Implemented WebSocket listeners for real-time payment success', 'Built the daily settlement dashboard'],
  ARRAY['QR Payments', 'Real-time Confirmations', 'Settlement Dashboard', 'Refund Management']
),
(
  'Lisungui', 'lisungui', 'Community Health', 'Technical Lead', 
  'Community healthcare and referral management workflow.',
  'Lisungui is a specialized healthcare application designed to manage patient referrals between community health workers and specialized clinics, ensuring continuity of care.',
  'Mobile',
  ARRAY['React Native', 'TypeScript', 'GraphQL'],
  'Leverages a cross-platform architecture with strict type safety (TypeScript) and GraphQL to handle complex, nested patient healthcare records efficiently.',
  ARRAY['Architected the cross-platform codebase', 'Designed the secure patient data transfer protocol', 'Implemented offline forms for remote health workers'],
  ARRAY['Patient Referrals', 'Health Records', 'Offline Forms', 'Care Tracking']
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
  features = EXCLUDED.features;
