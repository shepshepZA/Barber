# Hout Bay Barber Shop Website

## Overview

This is a Flask-based website for a barber shop in Hout Bay, Cape Town. The application serves as a business website with information about services, booking functionality via WhatsApp integration, and a contact form. The design emphasizes a modern, professional appearance with traditional barbering aesthetics.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **CSS Framework**: Bootstrap 5 for responsive design
- **JavaScript**: Vanilla JavaScript for interactive features
- **Styling**: Custom CSS with CSS variables for theming
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Inter family)

### Backend Architecture
- **Framework**: Flask (Python web framework)
- **Application Structure**: Simple MVC pattern
- **Session Management**: Flask sessions with configurable secret key
- **Error Handling**: Custom error handlers for 404 and 500 errors
- **Logging**: Python's built-in logging module

## Key Components

### 1. Application Entry Points
- `app.py`: Main Flask application factory
- `main.py`: Alternative entry point for running the application
- `routes.py`: Contains all route definitions and handlers

### 2. Template Structure
- `templates/base.html`: Base template with comprehensive SEO meta tags, structured data, and responsive design
- `templates/index.html`: Main page template extending base template

### 3. Static Assets
- `static/css/style.css`: Custom styling with CSS variables and modern design patterns
- `static/js/main.js`: JavaScript for scroll animations, smooth scrolling, and form interactions

### 4. Route Handlers
- `/`: Main page displaying business information
- `/book`: WhatsApp booking redirect
- `/contact`: Contact form handler (GET/POST)
- Error handlers for 404 and 500 errors

## Data Flow

### Booking Process
1. User clicks "Book Now" button
2. Application redirects to WhatsApp with pre-filled message
3. User completes booking through WhatsApp chat

### Contact Form Process
1. User submits contact form via POST request
2. Form data is logged for business records
3. Success message is flashed to user
4. User is redirected back to main page

### SEO and Social Media
- Structured data markup for search engines
- Open Graph tags for social media sharing
- Twitter Card metadata for enhanced social sharing

## External Dependencies

### Python Packages
- Flask: Web framework
- Werkzeug: WSGI utilities (ProxyFix middleware)

### Frontend Dependencies (CDN)
- Bootstrap 5: UI framework
- Font Awesome: Icon library
- Google Fonts: Typography

### Third-party Integrations
- WhatsApp Business API: For booking appointments
- Unsplash: Hero image hosting

## Deployment Strategy

### Configuration
- Environment-based secret key configuration
- Debug mode enabled for development
- ProxyFix middleware for reverse proxy compatibility
- Host binding to all interfaces (0.0.0.0) for containerized deployment

### Static File Serving
- Flask's built-in static file serving
- CDN integration for external assets
- Image optimization through Unsplash service

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.