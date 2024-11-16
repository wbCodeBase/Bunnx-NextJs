const mongoose = require('mongoose');

// Define the HeroSection schema
const HeroSectionSchema = new mongoose.Schema({
    titlePrefix: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    ctaText: {
        type: String,
        required: true
    },
    ctaRedirectUrl: {
        type: String,
        required: true
    },
    fetchOnSlug: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

// Define the Services schema
const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    fetchOnSlug: [{
        type: String,
        required: true,
        unique: true
    }]
}, {
    timestamps: true
});

// Define the Template schema, including heroSection and servicesSection as arrays of sub-documents
const TemplateSchema = new mongoose.Schema({
    heroSection: {
        type: [HeroSectionSchema],
        required: false // heroSection is optional at the top level
    },
    servicesSection: {
        type: [ServiceSchema],
        required: false // servicesSection is also optional if needed
    },    
    templateName: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.Template || mongoose.model('Template', TemplateSchema);
