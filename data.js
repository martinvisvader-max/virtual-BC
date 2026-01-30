// Goal Categories
const GOAL_CATEGORIES = [
    {
        id: 'attract',
        name: 'Attract',
        icon: '🎯',
        color: 'blue',
        description: 'Drive traffic and brand awareness'
    },
    {
        id: 'inspire',
        name: 'Inspire',
        icon: '✨',
        color: 'purple',
        description: 'Engage visitors with relevant content'
    },
    {
        id: 'acquire',
        name: 'Acquire',
        icon: '🛒',
        color: 'green',
        description: 'Convert visitors to customers'
    },
    {
        id: 'retain',
        name: 'Retain',
        icon: '💎',
        color: 'orange',
        description: 'Keep customers coming back'
    }
];

// Use Cases with UCCC benchmarks and formulas
const USE_CASES = [
    {
        id: 1,
        name: "Personalized Abandoned Cart Email",
        category: "acquire",
        description: "When customers abandon their shopping basket, a personalized message is sent with items they left in the cart to encourage conversion",
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
        description: "Abandoned cart email with product recommendations performs ~8% better than without.",
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
        name: "Abandoned Browse Flow",
        category: "inspire",
        description: "Re-engage visitors who browsed products but didn't add to cart or purchase.",
        benchmark: { value: 0.92, unit: "%" },
        metrics: [
            { id: "metric1", label: "Browsers without purchase", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },
    {
        id: 4,
        name: "Welcome Flow",
        category: "acquire",
        description: "Personalized welcome sequence for new subscribers to drive first purchase.",
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
        id: 5,
        name: "Post-Purchase Recommendations",
        category: "retain",
        description: "14 days after purchase, send relevant product recommendations to increase repeat purchase rate.",
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
        category: "retain",
        description: "Personalized birthday greeting with special offer to boost loyalty.",
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
        category: "retain",
        description: "Anniversary campaign with personalized recommendations to re-engage customers.",
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
        name: "Reactivation - Lapsed Subscribers",
        category: "retain",
        description: "Win back subscribers who are becoming inactive with relevant offers.",
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
        id: 9,
        name: "Reactivation - Disengaged",
        category: "retain",
        description: "Target subscribers who haven't engaged with recent emails.",
        benchmark: { value: 0.17, unit: "%" },
        metrics: [
            { id: "metric1", label: "Disengaged subscribers", defaultValue: 16872 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "180 days",
        coefficient: 1
    },
    {
        id: 10,
        name: "Favorite Brand Newsletter",
        category: "inspire",
        description: "Automated newsletter when new items from customer's favorite brand are available.",
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
        id: 11,
        name: "New Items Newsletter",
        category: "inspire",
        description: "Newsletter with new items tailored to customer interests.",
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
        name: "Bi-Weekly Recommendation Newsletter",
        category: "attract",
        description: "Regular newsletter with personalized product recommendations.",
        benchmark: { value: 0.19, unit: "%" },
        metrics: [
            { id: "metric1", label: "Total email subscribers", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "14 days",
        coefficient: 1
    },
    {
        id: 13,
        name: "Retention - Repeat Purchasers",
        category: "retain",
        description: "Campaign for repeat purchasers to increase frequency and value.",
        benchmark: { value: 0.22, unit: "%" },
        metrics: [
            { id: "metric1", label: "Repeat buyers (not recent)", defaultValue: 32210 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        formula: "standard",
        period: "90 days",
        coefficient: 1
    }
];

// Get use cases by category
function getUseCasesByCategory(categoryId) {
    return USE_CASES.filter(uc => uc.category === categoryId);
}
