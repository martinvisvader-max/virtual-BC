// Goal Categories from Bloomreach
const GOAL_CATEGORIES = [
    {
        id: 'acquire',
        name: 'Acquire Customers',
        icon: '🎯',
        color: 'blue',
        description: 'Convert visitors into first-time buyers'
    },
    {
        id: 'retention',
        name: 'Increase Retention',
        icon: '💎',
        color: 'purple',
        description: 'Keep customers coming back'
    },
    {
        id: 'reactivate',
        name: 'Reactivate Customers',
        icon: '🔄',
        color: 'orange',
        description: 'Win back lapsed and inactive customers'
    },
    {
        id: 'reengage',
        name: 'Reengage Subscribers',
        icon: '📧',
        color: 'green',
        description: 'Bring back disengaged email subscribers'
    },
    {
        id: 'grow_database',
        name: 'Grow Database',
        icon: '📈',
        color: 'teal',
        description: 'Expand your subscriber base'
    },
    {
        id: 'drive_traffic',
        name: 'Drive Traffic',
        icon: '🚀',
        color: 'red',
        description: 'Increase website visits and engagement'
    }
];

// Use Cases with UCCC benchmarks mapped to Bloomreach goals
const USE_CASES = [
    // ACQUIRE CUSTOMERS
    {
        id: 1,
        name: "Personalized Abandoned Cart Email",
        category: "acquire",
        description: "Recover lost sales by sending personalized reminders with cart items",
        benchmark: { value: 1.74, unit: "%" },
        metrics: [
            { id: "metric1", label: "Customers with abandoned carts", defaultValue: 15000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },
    {
        id: 2,
        name: "Abandoned Cart with Recommendations",
        category: "acquire",
        description: "Cart recovery + AI product recommendations for 8% better performance",
        benchmark: { value: 1.74, unit: "%" },
        metrics: [
            { id: "metric1", label: "Customers with abandoned carts", defaultValue: 15000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1.08
    },
    {
        id: 3,
        name: "Welcome Flow",
        category: "acquire",
        description: "Convert new subscribers to first-time buyers with personalized welcome series",
        benchmark: { value: 4.20, unit: "%" },
        metrics: [
            { id: "metric1", label: "New subscribers without purchase", defaultValue: 490 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "90 days",
        coefficient: 1
    },
    {
        id: 4,
        name: "Abandoned Browse Flow",
        category: "acquire",
        description: "Re-engage visitors who browsed but didn't add to cart",
        benchmark: { value: 0.92, unit: "%" },
        metrics: [
            { id: "metric1", label: "Browsers without purchase", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },

    // INCREASE RETENTION
    {
        id: 5,
        name: "Post-Purchase Recommendations",
        category: "retention",
        description: "Increase repeat purchase rate with personalized product recommendations",
        benchmark: { value: 10.00, unit: "%" },
        metrics: [
            { id: "metric1", label: "Total unique buyers", defaultValue: 10000 },
            { id: "metric2", label: "Repeat buyers", defaultValue: 2000 },
            { id: "metric3", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "post_purchase",
        period: "90 days",
        coefficient: 1
    },
    {
        id: 6,
        name: "Birthday Campaign",
        category: "retention",
        description: "Strengthen loyalty with personalized birthday offers",
        benchmark: { value: 0.72, unit: "%" },
        metrics: [
            { id: "metric1", label: "Customers with birthdays", defaultValue: 2153 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "90 days",
        coefficient: 1
    },
    {
        id: 7,
        name: "Purchase Anniversary",
        category: "retention",
        description: "Re-engage customers on their purchase anniversary",
        benchmark: { value: 0.80, unit: "%" },
        metrics: [
            { id: "metric1", label: "Customers with purchase anniversary", defaultValue: 6990 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "90 days",
        coefficient: 1
    },
    {
        id: 8,
        name: "Retention Campaign - Repeat Purchasers",
        category: "retention",
        description: "Keep repeat buyers engaged and increase purchase frequency",
        benchmark: { value: 0.22, unit: "%" },
        metrics: [
            { id: "metric1", label: "Repeat buyers (not recent)", defaultValue: 32210 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "90 days",
        coefficient: 1
    },

    // REACTIVATE CUSTOMERS
    {
        id: 9,
        name: "Reactivation - Lapsed Subscribers",
        category: "reactivate",
        description: "Win back subscribers who are becoming inactive",
        benchmark: { value: 0.21, unit: "%" },
        metrics: [
            { id: "metric1", label: "Lapsing/Lapsed subscribers", defaultValue: 16580 },
            { id: "metric2", label: "Avg revenue - Lapsed ($)", defaultValue: 81 },
            { id: "metric3", label: "Avg revenue - Active ($)", defaultValue: 145 }
        ],
        formula: "reactivation",
        period: "90 days",
        coefficient: 1
    },
    {
        id: 10,
        name: "Reactivation - Disengaged Buyers",
        category: "reactivate",
        description: "Bring back customers who haven't purchased recently",
        benchmark: { value: 0.17, unit: "%" },
        metrics: [
            { id: "metric1", label: "Disengaged buyers", defaultValue: 16872 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "180 days",
        coefficient: 1
    },

    // REENGAGE SUBSCRIBERS
    {
        id: 11,
        name: "Favorite Brand Newsletter",
        category: "reengage",
        description: "Automated alerts when new items from favorite brands arrive",
        benchmark: { value: 0.25, unit: "%" },
        metrics: [
            { id: "metric1", label: "Active email subscribers", defaultValue: 19200 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },
    {
        id: 12,
        name: "New Items of Interest",
        category: "reengage",
        description: "Personalized newsletter with new products matching customer interests",
        benchmark: { value: 0.25, unit: "%" },
        metrics: [
            { id: "metric1", label: "Active email subscribers", defaultValue: 19200 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },

    // DRIVE TRAFFIC
    {
        id: 13,
        name: "Bi-Weekly Recommendation Newsletter",
        category: "drive_traffic",
        description: "Regular personalized newsletters to drive repeat visits",
        benchmark: { value: 0.19, unit: "%" },
        metrics: [
            { id: "metric1", label: "Total email subscribers", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    }
];

// Get use cases by category
function getUseCasesByCategory(categoryId) {
    return USE_CASES.filter(uc => uc.category === categoryId);
}
