// Schema Markup Generator - Enhanced with Dynamic Fields
// Allows unlimited addition of repeatable fields (FAQs, steps, breadcrumbs, etc.)
// Schema field definitions - now with repeatable field support
const schemaFields = {
    Organization: [
        { name: 'name', label: 'Organization Name *', type: 'text', required: true },
        { name: 'url', label: 'Website URL *', type: 'url', required: true },
        { name: 'logo', label: 'Logo URL', type: 'url', required: false },
        { name: 'description', label: 'Description', type: 'textarea', required: false },
        { name: 'telephone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'address', label: 'Street Address', type: 'text', required: false },
        { name: 'city', label: 'City', type: 'text', required: false },
        { name: 'state', label: 'State/Region', type: 'text', required: false },
        { name: 'postalCode', label: 'Postal Code', type: 'text', required: false },
        { name: 'country', label: 'Country', type: 'text', required: false }
    ],
    LocalBusiness: [
        { name: 'name', label: 'Business Name *', type: 'text', required: true },
        { name: 'image', label: 'Business Image URL', type: 'url', required: false },
        { name: 'telephone', label: 'Phone Number *', type: 'tel', required: true },
        { name: 'address', label: 'Street Address *', type: 'text', required: true },
        { name: 'city', label: 'City *', type: 'text', required: true },
        { name: 'state', label: 'State/Region *', type: 'text', required: true },
        { name: 'postalCode', label: 'Postal Code *', type: 'text', required: true },
        { name: 'country', label: 'Country *', type: 'text', required: true },
        { name: 'priceRange', label: 'Price Range (e.g. $$)', type: 'text', required: false },
        { name: 'openingHours', label: 'Opening Hours (e.g. Mo-Fr 09:00-17:00)', type: 'text', required: false }
    ],
    Product: [
        { name: 'name', label: 'Product Name *', type: 'text', required: true },
        { name: 'image', label: 'Product Image URL *', type: 'url', required: true },
        { name: 'description', label: 'Product Description *', type: 'textarea', required: true },
        { name: 'brand', label: 'Brand Name', type: 'text', required: false },
        { name: 'sku', label: 'SKU', type: 'text', required: false },
        { name: 'price', label: 'Price *', type: 'number', required: true },
        { name: 'priceCurrency', label: 'Currency Code (e.g. USD) *', type: 'text', required: true },
        { name: 'availability', label: 'Availability (InStock/OutOfStock)', type: 'text', required: false },
        { name: 'ratingValue', label: 'Rating Value (1-5)', type: 'number', required: false },
        { name: 'reviewCount', label: 'Number of Reviews', type: 'number', required: false }
    ],
    Article: [
        { name: 'headline', label: 'Article Headline *', type: 'text', required: true },
        { name: 'image', label: 'Article Image URL *', type: 'url', required: true },
        { name: 'author', label: 'Author Name *', type: 'text', required: true },
        { name: 'publisher', label: 'Publisher Name *', type: 'text', required: true },
        { name: 'publisherLogo', label: 'Publisher Logo URL *', type: 'url', required: true },
        { name: 'datePublished', label: 'Published Date (YYYY-MM-DD) *', type: 'date', required: true },
        { name: 'dateModified', label: 'Modified Date (YYYY-MM-DD)', type: 'date', required: false },
        { name: 'description', label: 'Article Description', type: 'textarea', required: false }
    ],
    FAQPage: {
        staticFields: [],
        repeatableGroup: {
            name: 'faq',
            label: 'FAQ Item',
            minItems: 1,
            fields: [
                { name: 'question', label: 'Question *', type: 'text', required: true },
                { name: 'answer', label: 'Answer *', type: 'textarea', required: true }
            ]
        }
    },
    HowTo: {
        staticFields: [
            { name: 'name', label: 'How-To Title *', type: 'text', required: true },
            { name: 'description', label: 'Description *', type: 'textarea', required: true },
            { name: 'image', label: 'Image URL', type: 'url', required: false },
            { name: 'totalTime', label: 'Total Time (e.g. PT1H30M)', type: 'text', required: false }
        ],
        repeatableGroup: {
            name: 'step',
            label: 'Step',
            minItems: 1,
            fields: [
                { name: 'text', label: 'Step Instructions *', type: 'textarea', required: true },
                { name: 'image', label: 'Step Image URL', type: 'url', required: false }
            ]
        }
    },
    Recipe: {
        staticFields: [
            { name: 'name', label: 'Recipe Name *', type: 'text', required: true },
            { name: 'image', label: 'Recipe Image URL *', type: 'url', required: true },
            { name: 'author', label: 'Author Name *', type: 'text', required: true },
            { name: 'description', label: 'Description', type: 'textarea', required: false },
            { name: 'prepTime', label: 'Prep Time (e.g. PT30M)', type: 'text', required: false },
            { name: 'cookTime', label: 'Cook Time (e.g. PT1H)', type: 'text', required: false },
            { name: 'totalTime', label: 'Total Time (e.g. PT1H30M)', type: 'text', required: false },
            { name: 'recipeYield', label: 'Servings (e.g. 4 servings)', type: 'text', required: false },
            { name: 'calories', label: 'Calories', type: 'text', required: false }
        ],
        repeatableGroup: {
            name: 'ingredient',
            label: 'Ingredient',
            minItems: 1,
            fields: [
                { name: 'ingredient', label: 'Ingredient *', type: 'text', required: true }
            ]
        }
    },
    Event: [
        { name: 'name', label: 'Event Name *', type: 'text', required: true },
        { name: 'startDate', label: 'Start Date & Time (YYYY-MM-DDTHH:MM) *', type: 'datetime-local', required: true },
        { name: 'endDate', label: 'End Date & Time (YYYY-MM-DDTHH:MM)', type: 'datetime-local', required: false },
        { name: 'location', label: 'Location Name *', type: 'text', required: true },
        { name: 'address', label: 'Street Address', type: 'text', required: false },
        { name: 'city', label: 'City', type: 'text', required: false },
        { name: 'description', label: 'Event Description', type: 'textarea', required: false },
        { name: 'image', label: 'Event Image URL', type: 'url', required: false },
        { name: 'price', label: 'Ticket Price', type: 'number', required: false },
        { name: 'priceCurrency', label: 'Currency (e.g. USD)', type: 'text', required: false }
    ],
    Person: [
        { name: 'name', label: 'Full Name *', type: 'text', required: true },
        { name: 'jobTitle', label: 'Job Title', type: 'text', required: false },
        { name: 'image', label: 'Photo URL', type: 'url', required: false },
        { name: 'url', label: 'Website URL', type: 'url', required: false },
        { name: 'telephone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'address', label: 'Street Address', type: 'text', required: false },
        { name: 'city', label: 'City', type: 'text', required: false },
        { name: 'description', label: 'Bio/Description', type: 'textarea', required: false }
    ],
    Review: [
        { name: 'itemReviewed', label: 'Item Reviewed (Name) *', type: 'text', required: true },
        { name: 'author', label: 'Reviewer Name *', type: 'text', required: true },
        { name: 'reviewRating', label: 'Rating (1-5) *', type: 'number', required: true },
        { name: 'reviewBody', label: 'Review Text *', type: 'textarea', required: true },
        { name: 'datePublished', label: 'Review Date (YYYY-MM-DD)', type: 'date', required: false }
    ],
    VideoObject: [
        { name: 'name', label: 'Video Title *', type: 'text', required: true },
        { name: 'description', label: 'Video Description *', type: 'textarea', required: true },
        { name: 'thumbnailUrl', label: 'Thumbnail URL *', type: 'url', required: true },
        { name: 'uploadDate', label: 'Upload Date (YYYY-MM-DD) *', type: 'date', required: true },
        { name: 'duration', label: 'Duration (e.g. PT1M33S)', type: 'text', required: false },
        { name: 'contentUrl', label: 'Video URL', type: 'url', required: false }
    ],
    BreadcrumbList: {
        staticFields: [],
        repeatableGroup: {
            name: 'breadcrumb',
            label: 'Breadcrumb Level',
            minItems: 2,
            fields: [
                { name: 'name', label: 'Page Name *', type: 'text', required: true },
                { name: 'url', label: 'Page URL *', type: 'url', required: true }
            ]
        }
    }
};
// Track repeatable field counters
let repeatableCounters = {};
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
// Create field element
function createFieldElement(field, uniqueId = null) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    if (uniqueId) formGroup.dataset.uniqueId = uniqueId;
   
    const label = document.createElement('label');
    label.textContent = field.label;
    const inputId = uniqueId || field.name;
    label.htmlFor = inputId;
   
    let input;
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 3;
    } else {
        input = document.createElement('input');
        input.type = field.type;
    }
   
    input.id = inputId;
    input.name = field.name;
    input.className = 'form-control';
    input.required = field.required;
   
    formGroup.appendChild(label);
    formGroup.appendChild(input);
   
    return formGroup;
}
// Create repeatable group container
function createRepeatableGroup(groupConfig, schemaType) {
    const container = document.createElement('div');
    container.className = 'repeatable-container';
    container.dataset.groupName = groupConfig.name;
   
    const header = document.createElement('div');
    header.className = 'repeatable-header';
    header.innerHTML = `<h4>📋 ${groupConfig.label}s</h4>`;
    container.appendChild(header);
   
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'repeatable-items';
    container.appendChild(itemsContainer);
   
    // Initialize counter
    if (!repeatableCounters[schemaType]) {
        repeatableCounters[schemaType] = {};
    }
    repeatableCounters[schemaType][groupConfig.name] = 0;
   
    // Add initial items (minItems)
    for (let i = 0; i < groupConfig.minItems; i++) {
        addRepeatableItem(itemsContainer, groupConfig, schemaType);
    }
   
    // Add button
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'btn btn-add-more';
    addButton.innerHTML = `➕ Add Another ${groupConfig.label}`;
    addButton.onclick = () => addRepeatableItem(itemsContainer, groupConfig, schemaType);
    container.appendChild(addButton);
   
    return container;
}
// Add repeatable item
function addRepeatableItem(container, groupConfig, schemaType) {
    const counter = repeatableCounters[schemaType][groupConfig.name]++;
   
    const item = document.createElement('div');
    item.className = 'repeatable-item';
    item.dataset.itemIndex = counter;
   
    const itemHeader = document.createElement('div');
    itemHeader.className = 'repeatable-item-header';
    itemHeader.innerHTML = `
        <span>${groupConfig.label} #${counter + 1}</span>
        <button type="button" class="btn-remove" onclick="removeRepeatableItem(this)">🗑️ Remove</button>
    `;
    item.appendChild(itemHeader);
   
    const fieldsContainer = document.createElement('div');
    fieldsContainer.className = 'repeatable-item-fields';
   
    groupConfig.fields.forEach(field => {
        const uniqueId = `${groupConfig.name}_${counter}_${field.name}`;
        const fieldElement = createFieldElement(field, uniqueId);
        fieldsContainer.appendChild(fieldElement);
    });
   
    item.appendChild(fieldsContainer);
    container.appendChild(item);
   
    // Update item numbers
    updateItemNumbers(container, groupConfig.label);
}
// Remove repeatable item
window.removeRepeatableItem = function(button) {
    const item = button.closest('.repeatable-item');
    const container = item.parentElement;
    const repeatableContainer = item.closest('.repeatable-container');
    const groupLabel = repeatableContainer.querySelector('.repeatable-header h4').textContent.replace('📋 ', '').replace('s', '');
   
    // Check minimum items
    const itemCount = container.querySelectorAll('.repeatable-item').length;
    const minItems = parseInt(repeatableContainer.dataset.minItems) || 1;
   
    if (itemCount <= minItems) {
        alert(`You must have at least ${minItems} ${groupLabel}${minItems > 1 ? 's' : ''}`);
        return;
    }
   
    item.remove();
    updateItemNumbers(container, groupLabel);
};
// Update item numbers
function updateItemNumbers(container, label) {
    const items = container.querySelectorAll('.repeatable-item');
    items.forEach((item, index) => {
        const header = item.querySelector('.repeatable-item-header span');
        header.textContent = `${label} #${index + 1}`;
        item.dataset.itemIndex = index;
    });
}
// Render fields based on schema type
function renderFields() {
    const schemaType = schemaTypeSelect.value;
    const config = schemaFields[schemaType];
   
    dynamicFields.innerHTML = '';
    repeatableCounters = {};
   
    // Handle array-based schema (simple fields only)
    if (Array.isArray(config)) {
        config.forEach(field => {
            const fieldElement = createFieldElement(field);
            dynamicFields.appendChild(fieldElement);
        });
    }
    // Handle object-based schema (with repeatable groups)
    else {
        // Render static fields first
        if (config.staticFields && config.staticFields.length > 0) {
            config.staticFields.forEach(field => {
                const fieldElement = createFieldElement(field);
                dynamicFields.appendChild(fieldElement);
            });
        }
       
        // Render repeatable group
        if (config.repeatableGroup) {
            const groupContainer = createRepeatableGroup(config.repeatableGroup, schemaType);
            groupContainer.dataset.minItems = config.repeatableGroup.minItems;
            dynamicFields.appendChild(groupContainer);
        }
    }
}
// Collect form data
function collectFormData(schemaType) {
    const config = schemaFields[schemaType];
    const data = {};
   
    if (Array.isArray(config)) {
        // Simple fields
        config.forEach(field => {
            const input = document.getElementById(field.name);
            const value = input ? input.value.trim() : '';
            if (value) {
                data[field.name] = value;
            }
        });
    } else {
        // Static fields
        if (config.staticFields) {
            config.staticFields.forEach(field => {
                const input = document.getElementById(field.name);
                const value = input ? input.value.trim() : '';
                if (value) {
                    data[field.name] = value;
                }
            });
        }
       
        // Repeatable group
        if (config.repeatableGroup) {
            const groupName = config.repeatableGroup.name;
            const repeatableContainer = document.querySelector(`[data-group-name="${groupName}"]`);
            const itemsContainer = repeatableContainer ? repeatableContainer.querySelector('.repeatable-items') : null;
            const items = itemsContainer ? itemsContainer.querySelectorAll('.repeatable-item') : [];
            data[groupName + 's'] = [];
           
            items.forEach((item) => {
                const itemData = {};
                config.repeatableGroup.fields.forEach(field => {
                    const input = item.querySelector(`[name="${field.name}"]`);
                    const value = input ? input.value.trim() : '';
                    if (value) {
                        itemData[field.name] = value;
                    }
                });
                if (Object.keys(itemData).length > 0) {
                    data[groupName + 's'].push(itemData);
                }
            });
        }
    }
   
    return data;
}
// Validate required fields
function validateForm(schemaType) {
    const config = schemaFields[schemaType];
    let isValid = true;
   
    // Clear previous validation
    document.querySelectorAll('.form-control').forEach(input => {
        input.style.borderColor = '';
    });
   
    if (Array.isArray(config)) {
        config.forEach(field => {
            if (field.required) {
                const input = document.getElementById(field.name);
                if (input && !input.value.trim()) {
                    input.style.borderColor = '#F44336';
                    isValid = false;
                }
            }
        });
    } else {
        // Validate static fields
        if (config.staticFields) {
            config.staticFields.forEach(field => {
                if (field.required) {
                    const input = document.getElementById(field.name);
                    if (input && !input.value.trim()) {
                        input.style.borderColor = '#F44336';
                        isValid = false;
                    }
                }
            });
        }
       
        // Validate repeatable items
        if (config.repeatableGroup) {
            const groupName = config.repeatableGroup.name;
            const repeatableContainer = document.querySelector(`[data-group-name="${groupName}"]`);
            const itemsContainer = repeatableContainer ? repeatableContainer.querySelector('.repeatable-items') : null;
            const items = itemsContainer ? itemsContainer.querySelectorAll('.repeatable-item') : [];
           
            items.forEach((item) => {
                config.repeatableGroup.fields.forEach(field => {
                    if (field.required) {
                        const input = item.querySelector(`[name="${field.name}"]`);
                        if (input && !input.value.trim()) {
                            input.style.borderColor = '#F44336';
                            isValid = false;
                        }
                    }
                });
            });
        }
    }
   
    return isValid;
}
// Schema generators
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
    FAQPage: (data) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }),
    HowTo: (data) => ({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": data.name,
        "description": data.description,
        ...(data.image && { "image": data.image }),
        ...(data.totalTime && { "totalTime": data.totalTime }),
        "step": data.steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "text": step.text,
            ...(step.image && { "image": step.image })
        }))
    }),
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
        ...(data.ingredients && data.ingredients.length > 0 && {
            "recipeIngredient": data.ingredients.map(ing => ing.ingredient)
        }),
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
    BreadcrumbList: (data) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    })
};
// Generate schema
function generateSchema() {
    const schemaType = schemaTypeSelect.value;
   
    if (!validateForm(schemaType)) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }
   
    const data = collectFormData(schemaType);
    const generator = schemaGenerators[schemaType];
    currentSchema = generator(data);
   
    // Display schema wrapped in JSON-LD script tag
    const jsonStr = JSON.stringify(currentSchema, null, 2);
    const scriptTag = `<script type="application/ld+json">\n${jsonStr}\n</script>`;
    const escapedScriptTag = scriptTag
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    schemaOutput.innerHTML = `<pre style="white-space: pre-wrap; background: #f8f9fa; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px; overflow: auto; font-family: monospace; font-size: 14px;">${escapedScriptTag}</pre>`;
   
    // Update validation status
    validationStatus.textContent = '✓ Valid Schema';
    validationStatus.className = 'validation-status valid';
}
// Clear form
function clearForm() {
    renderFields();
    schemaOutput.innerHTML = `<pre style="white-space: pre-wrap; background: #f8f9fa; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px; overflow: auto; font-family: monospace; font-size: 14px;">// Your generated schema will appear here...</pre>`;
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
   
    const jsonStr = JSON.stringify(currentSchema, null, 2);
    const schemaText = `<script type="application/ld+json">\n${jsonStr}\n</script>`;
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
// Download JSON-LD script tag as HTML snippet
function downloadJSON() {
    if (!currentSchema) {
        alert('Please generate schema first');
        return;
    }
   
    const jsonStr = JSON.stringify(currentSchema, null, 2);
    const schemaText = `<script type="application/ld+json">\n${jsonStr}\n</script>`;
    const blob = new Blob([schemaText], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${schemaTypeSelect.value.toLowerCase()}-schema.html`;
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
schemaTypeSelect.addEventListener('change', renderFields);
generateBtn.addEventListener('click', generateSchema);
clearBtn.addEventListener('click', clearForm);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFields();
    initFAQ();
});
