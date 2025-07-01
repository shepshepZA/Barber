from flask import render_template, request, jsonify, redirect, url_for, flash
from app import app
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def index():
    """Main page route"""
    return render_template('index.html')

@app.route('/book')
def book():
    """Booking redirect route - redirects to WhatsApp"""
    whatsapp_number = "27123456789"  # Replace with actual barber shop WhatsApp number
    message = "Hi! I'd like to book an appointment at Hout Bay Barber Shop. What times do you have available?"
    whatsapp_url = f"https://wa.me/{whatsapp_number}?text={message}"
    return redirect(whatsapp_url)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact form handler"""
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        message = request.form.get('message')
        
        # Log the contact form submission
        logging.info(f"Contact form submitted: {name}, {email}, {phone}")
        
        # In a real application, you would send an email or save to database
        # For now, we'll just flash a success message
        flash('Thank you for your message! We will get back to you soon.', 'success')
        return redirect(url_for('index'))
    
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    """404 error handler"""
    return render_template('index.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    """500 error handler"""
    return render_template('index.html'), 500
