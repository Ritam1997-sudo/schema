// Organization Schema Generator - Dedicated Page JavaScript

// DOM elements
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const schemaOutput = document.getElementById('schemaOutput');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const validationStatus = document.getElementById('validationStatus');

// Current schema
let currentSchema = null;

// Generate Organization Schema
function generateSchema() {
    // Get form values
    const name = document.getElementById('orgName').value.trim();
    const url = document.getElementById('orgUrl').value.trim();
    const logo = document.getElementById('orgLogo').value.trim();
    const description = document.getElementById('orgDescription').value.trim();
    const telephone = document.getElementById('orgTelephone').value.trim();
    const email = document.getElementById('orgEmail').value.trim();
    const address = document.getElementById('orgAddress').value.trim();
    const city = document.getElementById('orgCity').value.trim();
    const state = document.getElementById('orgState').value.trim();
    const postalCode = document.getElementById('orgPostalCode').value.trim();
    const country = document.getElementById('orgCountry').value.trim();
    
    // Validate required fields
    if (!name || !url) {
        alert('Please fill in all required fields (Organization Name and Website URL)');
        if (!name) document.getElementById('orgName').style.borderColor = '#F44336';
        if (!url) document.getElementById('orgUrl').style.borderColor = '#F44336';
        return;
    }
    
    // Clear validation errors
    document.querySelectorAll('.form-control').forEach(input => {
        input.style.borderColor = '';
    });
    
    // Build schema object
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url
    };
    
    // Add optional fields
    if (logo) schema.logo = logo;
    if (description) schema.description = description;
    if (telephone) schema.telephone = telephone;
    if (email) schema.email = email;
    
    // Add address if any address field is filled
    if (address || city || state || postalCode || country) {
        schema.address = {
            "@type": "PostalAddress"
        };
        if (address) schema.address.streetAddress = address;
        if (city) schema.address.addressLocality = city;
        if (state) schema.address.addressRegion = state;
        if (postalCode) schema.address.postalCode = postalCode;
        if (country) schema.address.addressCountry = country;
    }
    
    currentSchema = schema;
    
    // Display schema
    schemaOutput.textContent = JSON.stringify(schema, null, 2);
    
    // Update validation status
    validationStatus.textContent = '✓ Valid Schema';
    validationStatus.className = 'validation-status valid';
}

// Clear form
function clearForm() {
    document.querySelectorAll('.form-control').forEach(input => {
        input.value = '';
        input.style.borderColor = '';
    });
    schemaOutput.textContent = '// Your organization schema will appear here...';
    validationStatus.textContent = '';
    validationStatus.className = 'validation-status';
    currentSchema = null;
}

// Copy to clipboard
function copyToClipboard() {
    if (!currentSchema) {
        alert('Please generate schema first');
        return;
    }
    
    const schemaText = JSON.stringify(currentSchema, null, 2);
    navigator.clipboard.writeText(schemaText).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        alert('Failed to copy to clipboard');
    });
}

// Download JSON
function downloadJSON() {
    if (!currentSchema) {
        alert('Please generate schema first');
        return;
    }
    
    const schemaText = JSON.stringify(currentSchema, null, 2);
    const blob = new Blob([schemaText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'organization-schema.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Event listeners
generateBtn.addEventListener('click', generateSchema);
clearBtn.addEventListener('click', clearForm);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
});
