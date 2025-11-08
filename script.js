// Schema Markup Generator - Enhanced UX Version

// Schema field definitions for each type (unchanged)
const schemaFields = {
    Organization: [
        { name: 'name', label: 'Organization Name *', type: 'text', required: true, placeholder: 'e.g., Acme Corporation' },
        { name: 'url', label: 'Website URL *', type: 'url', required: true, placeholder: 'https://example.com' },
        { name: 'logo', label: 'Logo URL', type: 'url', required: false, placeholder: 'https://example.com/logo.png' },
        { name: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Brief description of your organization' },
        { name: 'telephone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+1-555-123-4567' },
        { name: 'email', label: 'Email', type: 'email', required: false, placeholder: 'contact@example.com' },
        { name: 'address', label: 'Street Address', type: 'text', required: false, placeholder: '123 Main Street' },
        { name: 'city', label: 'City', type: 'text', required: false, placeholder: 'New York' },
        { name: 'state', label: 'State/Region', type: 'text', required: false, placeholder: 'NY' },
        { name: 'postalCode', label: 'Postal Code', type: 'text', required: false, placeholder: '10001' },
        { name: 'country', label: 'Country', type: 'text', required: false, placeholder: 'United States' }
    ],
    LocalBusiness: [
        { name: 'name', label: 'Business Name *', type: 'text', required: true, placeholder: 'e.g., Joe\'s Pizza' },
        { name: 'image', label: 'Business Image URL', type: 'url', required: false, placeholder: 'https://example.com/storefront.jpg' },
        { name: 'telephone', label: 'Phone Number *', type: 'tel', required: true, placeholder: '+1-555-123-4567' },
        { name: 'address', label: 'Street Address *', type: 'text', required: true, placeholder: '123 Main Street' },
        { name: 'city', label: 'City *', type: 'text', required: true, placeholder: 'New York' },
        { name: 'state', label: 'State/Region *', type: 'text', required: true, placeholder: 'NY' },
        { name: 'postalCode', label: 'Postal Code *', type: 'text', required: true, placeholder: '10001' },
        { name: 'country', label: 'Country *', type: 'text', required: true, placeholder: 'United States' },
        { name: 'priceRange', label: 'Price Range (e.g. $$)', type: 'text', required: false, placeholder: '$$' },
        { name: 'openingHours', label: 'Opening Hours', type: 'text', required: false, placeholder: 'Mo-Fr 09:00-17:00' }
    ],
    Product: [
        { name: 'name', label: 'Product Name *', type: 'text', required: true, placeholder: 'e.g., Wireless Headphones' },
        { name: 'image', label: 'Product Image URL *', type: 'url', required: true, placeholder: 'https://example.com/product.jpg' },
        { name: 'description', label: 'Product Description *', type: 'textarea', required: true, placeholder: 'Detailed product description...' },
        { name: 'brand', label: 'Brand Name', type: 'text', required: false, placeholder: 'e.g., Sony' },
        { name: 'sku', label: 'SKU', type: 'text', required: false, placeholder: 'ABC-12345' },
        { name: 'price', label: 'Price *', type: 'number', required: true, placeholder: '99.99', step: '0.01' },
        { name: 'priceCurrency', label: 'Currency Code *', type: 'text', required: true, placeholder: 'USD' },
        { name: 'availability', label: 'Availability', type: 'select', required: false, options: ['InStock', 'OutOfStock', 'PreOrder'] },
        { name: 'ratingValue', label: 'Rating Value (1-5)', type: 'number', required: false, placeholder: '4.5', step: '0.1', min: '1', max: '5' },
        { name: 'reviewCount', label: 'Number of Reviews', type: 'number', required: false, placeholder: '128' }
    ],
    Article: [
        { name: 'headline', label: 'Article Headline *', type: 'text', required: true, placeholder: 'e.g., 10 Tips for Better SEO' },
        { name: 'image', label: 'Article Image URL *', type: 'url', required: true, placeholder: 'https://example.com/article-image.jpg' },
        { name: 'author', label: 'Author Name *', type: 'text', required: true, placeholder: 'John Doe' },
        { name: 'publisher', label: 'Publisher Name *', type: 'text', required: true, placeholder: 'Example Publishing' },
        { name: 'publisherLogo', label: 'Publisher Logo URL *', type: 'url', required: true, placeholder: 'https://example.com/logo.png' },
        { name: 'datePublished', label: 'Published Date *', type: 'date', required: true },
        { name: 'dateModified', label: 'Modified Date', type: 'date', required: false },
        { name: 'description', label: 'Article Description', type: 'textarea', required: false, placeholder: 'Brief summary of the article...' }
    ],
    FAQPage: [
        { name: 'question1', label: 'Question 1 *', type: 'text', required: true, placeholder: 'What is schema markup?' },
        { name: 'answer1', label: 'Answer 1 *', type: 'textarea', required: true, placeholder: 'Schema markup is structured data...' },
        { name: 'question2', label: 'Question 2', type: 'text', required: false, placeholder: 'How do I implement it?' },
        { name: 'answer2', label: 'Answer 2', type: 'textarea', required: false, placeholder: 'You can implement it by...' },
        { name: 'question3', label: 'Question 3', type: 'text', required: false, placeholder: 'Why is it important?' },
        { name: 'answer3', label: 'Answer 3', type: 'textarea', required: false, placeholder: 'It helps search engines...' }
    ],
    HowTo: [
        { name: 'name', label: 'How-To Title *', type: 'text', required: true, placeholder: 'e.g., How to Bake a Cake' },
        { name: 'description', label: 'Description *', type: 'textarea', required: true, placeholder: 'Learn how to bake a delicious cake...' },
        { name: 'image', label: 'Image URL', type: 'url', required: false, placeholder: 'https://example.com/howto-image.jpg' },
        { name: 'totalTime', label: 'Total Time', type: 'text', required: false, placeholder: 'PT1H30M (1 hour 30 minutes)' },
        { name: 'step1', label: 'Step 1 *', type: 'textarea', required: true, placeholder: 'Preheat the oven to 350°F...' },
        { name: 'step2', label: 'Step 2', type: 'textarea', required: false, placeholder: 'Mix the dry ingredients...' },
        { name: 'step3', label: 'Step 3', type: 'textarea', required: false, placeholder: 'Add wet ingredients...' }
    ],
    Recipe: [
        { name: 'name', label: 'Recipe Name *', type: 'text', required: true, placeholder: 'e.g., Chocolate Chip Cookies' },
        { name: 'image', label: 'Recipe Image URL *', type: 'url', required: true, placeholder: 'https://example.com/recipe.jpg' },
        { name: 'author', label: 'Author Name *', type: 'text', required: true, placeholder: 'Chef John' },
        { name: 'description', label: 'Description', type: 'textarea', required: false, placeholder: 'Delicious homemade cookies...' },
        { name: 'prepTime', label: 'Prep Time', type: 'text', required: false, placeholder: 'PT30M (30 minutes)' },
        { name: 'cookTime', label: 'Cook Time', type: 'text', required: false, placeholder: 'PT1H (1 hour)' },
        { name: 'totalTime', label: 'Total Time', type: 'text', required: false, placeholder: 'PT1H30M' },
        { name: 'recipeYield', label: 'Servings', type: 'text', required: false, placeholder: '4 servings' },
        { name: 'calories', label: 'Calories', type: 'text', required: false, placeholder: '250 calories' }
    ],
    Event: [
        { name: 'name', label: 'Event Name *', type: 'text', required: true, placeholder: 'e.g., Summer Music Festival' },
        { name: 'startDate', label: 'Start Date & Time *', type: 'datetime-local', required: true },
        { name: 'endDate', label: 'End Date & Time', type: 'datetime-local', required: false },
        { name: 'location', label: 'Location Name *', type: 'text', required: true, placeholder: 'Central Park' },
        { name: 'address', label: 'Street Address', type: 'text', required: false, placeholder: '123 Park Avenue' },
        { name: 'city', label: 'City', type: 'text', required: false, placeholder: 'New York' },
        { name: 'description', label: 'Event Description', type: 'textarea', required: false, placeholder: 'Join us for an amazing music festival...' },
        { name: 'image', label: 'Event Image URL', type: 'url', required: false, placeholder: 'https://example.com/event.jpg' },
        { name: 'price', label: 'Ticket Price', type: 'number', required: false, placeholder: '50', step: '0.01' },
        { name: 'priceCurrency', label: 'Currency', type: 'text', required: false, placeholder: 'USD' }
    ],
    Person: [
        { name: 'name', label: 'Full Name *', type: 'text', required: true, placeholder: 'John Doe' },
        { name: 'jobTitle', label: 'Job Title', type: 'text', required: false, placeholder: 'Software Engineer' },
        { name: 'image', label: 'Photo URL', type: 'url', required: false, placeholder: 'https://example.com/photo.jpg' },
        { name: 'url', label: 'Website URL', type: 'url', required: false, placeholder: 'https://johndoe.com' },
        { name: 'telephone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+1-555-123-4567' },
        { name: 'email', label: 'Email', type: 'email', required: false, placeholder: 'john@example.com' },
        { name: 'address', label: 'Street Address', type: 'text', required: false, placeholder: '123 Main Street' },
        { name: 'city', label: 'City', type: 'text', required: false, placeholder: 'New York' },
        { name: 'description', label: 'Bio/Description', type: 'textarea', required: false, placeholder: 'Brief biography...' }
    ],
    Review: [
        { name: 'itemReviewed', label: 'Item Reviewed (Name) *', type: 'text', required: true, placeholder: 'Product or service name' },
        { name: 'author', label: 'Reviewer Name *', type: 'text', required: true, placeholder: 'Jane Smith' },
        { name: 'reviewRating', label: 'Rating (1-5) *', type: 'number', required: true, placeholder: '5', min: '1', max: '5', step: '0.1' },
        { name: 'reviewBody', label: 'Review Text *', type: 'textarea', required: true, placeholder: 'This product is amazing because...' },
        { name: 'datePublished', label: 'Review Date', type: 'date', required: false }
    ],
    VideoObject: [
        { name: 'name', label: 'Video Title *', type: 'text', required: true, placeholder: 'e.g., How to Use Schema Markup' },
        { name: 'description', label: 'Video Description *', type: 'textarea', required: true, placeholder: 'In this video, you will learn...' },
        { name: 'thumbnailUrl', label: 'Thumbnail URL *', type: 'url', required: true, placeholder: 'https://example.com/thumbnail.jpg' },
        { name: 'uploadDate', label: 'Upload Date *', type: 'date', required: true },
        { name: 'duration', label: 'Duration', type: 'text', required: false, placeholder: 'PT1M33S (1 min 33 sec)' },
        { name: 'contentUrl', label: 'Video URL', type: 'url', required: false, placeholder: 'https://example.com/video.mp4' }
    ],
    BreadcrumbList: [
        { name: 'item1Name', label: 'Level 1 Name *', type: 'text', required: true, placeholder: 'Home' },
        { name: 'item1Url', label: 'Level 1 URL *', type: 'url', required: true, placeholder: 'https://example.com' },
        { name: 'item2Name', label: 'Level 2 Name', type: 'text', required: false, placeholder: 'Products' },
        { name: 'item2Url', label: 'Level 2 URL', type: 'url', required: false, placeholder: 'https://example.com/products' },
        { name: 'item3Name', label: 'Level 3 Name', type: 'text', required: false, placeholder: 'Electronics' },
        { name: 'item3Url', label: 'Level 3 URL', type: 'url', required: false, placeholder: 'https://example.com/products/electronics' }
    ]
};

// Example data for each schema type
const exampleData = {
    Organization: {
        name: 'Acme Corporation',
        url: 'https://www.acme.com',
        logo: 'https://www.acme.com/logo.png',
        description: 'Leading provider of innovative solutions',
        telephone: '+1-555-123-4567',
        email: 'contact@acme.com',
        address: '123 Business Street',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'United States'
    },
    Product: {
        name: 'Wireless Bluetooth Headphones',
        image: 'https://example.com/headphones.jpg',
        description: 'Premium wireless headphones with noise cancellation',
        brand: 'AudioTech',
        sku: 'AT-WH-5000',
        price: '199.99',
        priceCurrency: 'USD',
        availability: 'InStock',
        ratingValue: '4.5',
        reviewCount: '328'
    }
};

// Schema generators (unchanged from original)
const schemaGenerators = {
    Organization: (data) => ({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": data.name,
        "url": data.url,
        ...(data.logo && { "logo": data.logo }),
        ...(data.description && { "description": data.description }),
        ...(data.telephone && { "telephone": data.telephone }),
        ...(data.email && { "email": data.email }),
        ...((data.address || data.city) && {
            "address": {
                "@type": "PostalAddress",
                ...(data.address && { "streetAddress": data.address }),
                ...(data.city && { "addressLocality": data.city }),
                ...(data.state && { "addressRegion": data.state }),
                ...(data.postalCode && { "postalCode": data.postalCode }),
                ...(data.country && { "addressCountry": data.country })
            }
        })
    }),

    LocalBusiness: (data) => ({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": data.name,
        ...(data.image && { "image": data.image }),
        "telephone": data.telephone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address,
            "addressLocality": data.city,
            "addressRegion": data.state,
            "postalCode": data.postalCode,
            "addressCountry": data.country
        },
        ...(data.priceRange && { "priceRange": data.priceRange }),
        ...(data.openingHours && { "openingHours": data.openingHours })
    }),

    Product: (data) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": data.name,
        "image": data.image,
        "description": data.description,
        ...(data.brand && { "brand": { "@type": "Brand", "name": data.brand } }),
        ...(data.sku && { "sku": data.sku }),
        "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": data.priceCurrency,
            ...(data.availability && { "availability": `https://schema.org/${data.availability}` }),
            "url": window.location.href
        },
        ...((data.ratingValue && data.reviewCount) && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": data.ratingValue,
                "reviewCount": data.reviewCount
            }
        })
    }),

    Article: (data) => ({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.headline,
        "image": data.image,
        "author": {
            "@type": "Person",
            "name": data.author
        },
        "publisher": {
            "@type": "Organization",
            "name": data.publisher,
            "logo": {
                "@type": "ImageObject",
                "url": data.publisherLogo
            }
        },
        "datePublished": data.datePublished,
        ...(data.dateModified && { "dateModified": data.dateModified }),
        ...(data.description && { "description": data.description })
    }),

    FAQPage: (data) => {
        const mainEntity = [];
        for (let i = 1; i <= 3; i++) {
            if (data[`question${i}`] && data[`answer${i}`]) {
                mainEntity.push({
                    "@type": "Question",
                    "name": data[`question${i}`],
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": data[`answer${i}`]
                    }
                });
            }
        }
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": mainEntity
        };
    },

    HowTo: (data) => {
        const steps = [];
        for (let i = 1; i <= 3; i++) {
            if (data[`step${i}`]) {
                steps.push({
                    "@type": "HowToStep",
                    "text": data[`step${i}`]
                });
            }
        }
        return {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": data.name,
            "description": data.description,
            ...(data.image && { "image": data.image }),
            ...(data.totalTime && { "totalTime": data.totalTime }),
            "step": steps
        };
    },

    Recipe: (data) => ({
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": data.name,
        "image": data.image,
        "author": {
            "@type": "Person",
            "name": data.author
        },
        ...(data.description && { "description": data.description }),
        ...(data.prepTime && { "prepTime": data.prepTime }),
        ...(data.cookTime && { "cookTime": data.cookTime }),
        ...(data.totalTime && { "totalTime": data.totalTime }),
        ...(data.recipeYield && { "recipeYield": data.recipeYield }),
        ...(data.calories && {
            "nutrition": {
                "@type": "NutritionInformation",
                "calories": data.calories
            }
        })
    }),

    Event: (data) => ({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": data.name,
        "startDate": data.startDate,
        ...(data.endDate && { "endDate": data.endDate }),
        "location": {
            "@type": "Place",
            "name": data.location,
            ...((data.address || data.city) && {
                "address": {
                    "@type": "PostalAddress",
                    ...(data.address && { "streetAddress": data.address }),
                    ...(data.city && { "addressLocality": data.city })
                }
            })
        },
        ...(data.description && { "description": data.description }),
        ...(data.image && { "image": data.image }),
        ...((data.price && data.priceCurrency) && {
            "offers": {
                "@type": "Offer",
                "price": data.price,
                "priceCurrency": data.priceCurrency
            }
        })
    }),

    Person: (data) => ({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": data.name,
        ...(data.jobTitle && { "jobTitle": data.jobTitle }),
        ...(data.image && { "image": data.image }),
        ...(data.url && { "url": data.url }),
        ...(data.telephone && { "telephone": data.telephone }),
        ...(data.email && { "email": data.email }),
        ...((data.address || data.city) && {
            "address": {
                "@type": "PostalAddress",
                ...(data.address && { "streetAddress": data.address }),
                ...(data.city && { "addressLocality": data.city })
            }
        }),
        ...(data.description && { "description": data.description })
    }),

    Review: (data) => ({
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Thing",
            "name": data.itemReviewed
        },
        "author": {
            "@type": "Person",
            "name": data.author
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.reviewRating,
            "bestRating": "5"
        },
        "reviewBody": data.reviewBody,
        ...(data.datePublished && { "datePublished": data.datePublished })
    }),

    VideoObject: (data) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": data.name,
        "description": data.description,
        "thumbnailUrl": data.thumbnailUrl,
        "uploadDate": data.uploadDate,
        ...(data.duration && { "duration": data.duration }),
        ...(data.contentUrl && { "contentUrl": data.contentUrl })
    }),

    BreadcrumbList: (data) => {
        const itemListElement = [];
        for (let i = 1; i <= 3; i++) {
            if (data[`item${i}Name`] && data[`item${i}Url`]) {
                itemListElement.push({
                    "@type": "ListItem",
                    "position": i,
                    "name": data[`item${i}Name`],
                    "item": data[`item${i}Url`]
                });
            }
        }
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": itemListElement
        };
    }
};

// DOM elements
const schemaTypeSelect = document.getElementById('schemaType');
const dynamicFields = document.getElementById('dynamicFields');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const schemaOutput = document.getElementById('schemaOutput');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const validationStatus = document.getElementById('validationStatus');

// Current schema data
let currentSchema = null;

// Toast notification function
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Render dynamic fields based on selected schema type
function renderFields() {
    const schemaType = schemaTypeSelect.value;
    const fields = schemaFields[schemaType];
    
    dynamicFields.innerHTML = '';
    
    // Add "Load Example" button at the top if example data exists
    if (exampleData[schemaType]) {
        const exampleBtn = document.createElement('button');
        exampleBtn.type = 'button';
        exampleBtn.className = 'btn btn-example';
        exampleBtn.innerHTML = '💡 Load Example Data';
        exampleBtn.onclick = loadExampleData;
        dynamicFields.appendChild(exampleBtn);
    }
    
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.label;
        label.htmlFor = field.name;
        
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 3;
        } else if (field.type === 'select') {
            input = document.createElement('select');
            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                input.appendChild(opt);
            });
        } else {
            input = document.createElement('input');
            input.type = field.type;
            if (field.step) input.step = field.step;
            if (field.min) input.min = field.min;
            if (field.max) input.max = field.max;
        }
        
        input.id = field.name;
        input.name = field.name;
        input.className = 'form-control';
        input.required = field.required;
        if (field.placeholder) input.placeholder = field.placeholder;
        
        // Add aria-label for accessibility
        input.setAttribute('aria-label', field.label);
        
        // Error message container
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.setAttribute('role', 'alert');
        errorMsg.id = `error-${field.name}`;
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formGroup.appendChild(errorMsg);
        dynamicFields.appendChild(formGroup);
    });
}

// Load example data
function loadExampleData() {
    const schemaType = schemaTypeSelect.value;
    const example = exampleData[schemaType];
    
    if (!example) {
        showToast('No example data available for this schema type', 'info');
        return;
    }
    
    Object.keys(example).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
            input.value = example[key];
            input.style.borderColor = '';
            // Clear any error messages
            const errorMsg = document.getElementById(`error-${key}`);
            if (errorMsg) errorMsg.textContent = '';
        }
    });
    
    showToast('Example data loaded successfully!', 'success');
}

// Validate single field
function validateField(field, input) {
    const value = input.value.trim();
    const errorMsg = document.getElementById(`error-${field.name}`);
    
    if (field.required && !value) {
        input.style.borderColor = '#F44336';
        if (errorMsg) errorMsg.textContent = 'This field is required';
        return false;
    } else {
        input.style.borderColor = '';
        if (errorMsg) errorMsg.textContent = '';
        return true;
    }
}

// Generate schema from form data
function generateSchema() {
    const schemaType = schemaTypeSelect.value;
    const fields = schemaFields[schemaType];
    const data = {};
    
    // Show loading state
    generateBtn.disabled = true;
    generateBtn.innerHTML = '⏳ Generating...';
    
    // Collect form data and validate
    let hasRequiredFields = true;
    let firstInvalidField = null;
    
    fields.forEach(field => {
        const input = document.getElementById(field.name);
        if (input) {
            const isValid = validateField(field, input);
            if (!isValid && !firstInvalidField) {
                firstInvalidField = input;
            }
            if (!isValid) {
                hasRequiredFields = false;
            }
            
            const value = input.value.trim();
            if (value) {
                data[field.name] = value;
            }
        }
    });
    
    if (!hasRequiredFields) {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '✨ Generate Schema';
        showToast('Please fill in all required fields', 'error');
        
        // Focus first invalid field
        if (firstInvalidField) {
            firstInvalidField.focus();
            firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Simulate processing time for better UX
    setTimeout(() => {
        // Generate schema
        const generator = schemaGenerators[schemaType];
        currentSchema = generator(data);
        
        // Display schema
        schemaOutput.textContent = JSON.stringify(currentSchema, null, 2);
        
        // Update validation status
        validationStatus.textContent = '✓ Valid Schema';
        validationStatus.className = 'validation-status valid';
        
        // Reset button
        generateBtn.disabled = false;
        generateBtn.innerHTML = '✨ Generate Schema';
        
        // Show success message
        showToast('Schema generated successfully!', 'success');
        
        // Scroll to output
        schemaOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 500);
}

// Clear form
function clearForm() {
    dynamicFields.querySelectorAll('input, textarea, select').forEach(input => {
        input.value = '';
        input.style.borderColor = '';
    });
    
    // Clear error messages
    dynamicFields.querySelectorAll('.error-message').forEach(msg => {
        msg.textContent = '';
    });
    
    schemaOutput.textContent = '// Your generated schema will appear here...';
    validationStatus.textContent = '';
    validationStatus.className = 'validation-status';
    currentSchema = null;
    
    showToast('Form cleared', 'info');
}

// Copy to clipboard
function copyToClipboard() {
    if (!currentSchema) {
        showToast('Please generate schema first', 'error');
        return;
    }
    
    const schemaText = JSON.stringify(currentSchema, null, 2);
    navigator.clipboard.writeText(schemaText).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓ Copied!';
        copyBtn.disabled = true;
        
        showToast('Schema copied to clipboard!', 'success');
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.disabled = false;
        }, 2000);
    }).catch(err => {
        showToast('Failed to copy to clipboard', 'error');
        console.error('Copy error:', err);
    });
}

// Download JSON
function downloadJSON() {
    if (!currentSchema) {
        showToast('Please generate schema first', 'error');
        return;
    }
    
    const schemaText = JSON.stringify(currentSchema, null, 2);
    const blob = new Blob([schemaText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${schemaTypeSelect.value.toLowerCase()}-schema.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Schema downloaded successfully!', 'success');
}

// FAQ Accordion with keyboard support
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question, index) => {
        // Add keyboard accessibility
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        
        const answer = question.nextElementSibling;
        answer.id = `faq-answer-${index}`;
        
        question.addEventListener('click', () => {
            toggleFAQ(question);
        });
        
        // Keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(question);
            }
        });
    });
}

function toggleFAQ(question) {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        faqItem.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
            menuBtn.innerHTML = isExpanded ? '✕' : '☰';
        });
        
        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.innerHTML = '☰';
            });
        });
    }
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to generate
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            generateSchema();
        }
        
        // Ctrl/Cmd + K to clear
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            clearForm();
        }
    });
}

// Event listeners
schemaTypeSelect.addEventListener('change', () => {
    renderFields();
    // Clear output when changing schema type
    schemaOutput.textContent = '// Your generated schema will appear here...';
    validationStatus.textContent = '';
    validationStatus.className = 'validation-status';
    currentSchema = null;
});

generateBtn.addEventListener('click', generateSchema);
clearBtn.addEventListener('click', clearForm);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFields();
    initFAQ();
    initMobileMenu();
    initKeyboardShortcuts();
    
    // Add help text for keyboard shortcuts
    const toolActions = document.querySelector('.tool-actions');
    if (toolActions) {
        const helpText = document.createElement('small');
        helpText.className = 'keyboard-hint';
        helpText.innerHTML = '💡 Tip: Press <kbd>Ctrl+Enter</kbd> to generate';
        helpText.style.display = 'block';
        helpText.style.marginTop = '0.5rem';
        helpText.style.color = 'var(--text-gray)';
        toolActions.appendChild(helpText);
    }
});
