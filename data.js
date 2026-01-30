// All use cases database
const USE_CASES = [
    {
        id: "personalized_homepage",
        name: "Personalized Homepage",
        required_features: ["personalization_engine", "user_tracking"],
        supports_goals: ["retention", "aov", "personalization"],
        solves_issues: ["low_engagement", "no_ai_usage"],
        expected_impact: 4,
        complexity: 3
    },
    {
        id: "abandoned_cart_recovery",
        name: "Abandoned Cart Recovery",
        required_features: ["email_automation", "cart_tracking"],
        supports_goals: ["retention", "acquisition"],
        solves_issues: ["low_conversion", "manual_processes"],
        expected_impact: 5,
        complexity: 2
    },
    {
        id: "product_recommendations",
        name: "AI Product Recommendations",
        required_features: ["personalization_engine", "recommendation_ai"],
        supports_goals: ["aov", "personalization", "first_to_second_purchase"],
        solves_issues: ["low_engagement", "no_ai_usage"],
        expected_impact: 5,
        complexity: 3
    },
    {
        id: "dynamic_search",
        name: "Dynamic Search with AI",
        required_features: ["search_ai", "user_tracking"],
        supports_goals: ["search_conversion", "personalization"],
        solves_issues: ["poor_search", "low_conversion"],
        expected_impact: 4,
        complexity: 4
    },
    {
        id: "welcome_series",
        name: "Automated Welcome Series",
        required_features: ["email_automation", "segmentation"],
        supports_goals: ["acquisition", "first_to_second_purchase"],
        solves_issues: ["weak_onboarding", "low_repeat_purchase"],
        expected_impact: 4,
        complexity: 2
    },
    {
        id: "win_back_campaign",
        name: "Win-Back Campaign",
        required_features: ["email_automation", "segmentation", "user_tracking"],
        supports_goals: ["retention", "reduce_churn"],
        solves_issues: ["low_engagement", "low_repeat_purchase"],
        expected_impact: 3,
        complexity: 2
    },
    {
        id: "behavioral_triggers",
        name: "Behavioral Trigger Emails",
        required_features: ["email_automation", "user_tracking", "event_tracking"],
        supports_goals: ["retention", "campaign_efficiency"],
        solves_issues: ["manual_processes", "poor_segmentation"],
        expected_impact: 4,
        complexity: 3
    },
    {
        id: "smart_segmentation",
        name: "AI-Powered Smart Segmentation",
        required_features: ["segmentation", "recommendation_ai", "user_tracking"],
        supports_goals: ["campaign_efficiency", "personalization"],
        solves_issues: ["poor_segmentation", "no_ai_usage"],
        expected_impact: 3,
        complexity: 4
    },
    {
        id: "browse_abandonment",
        name: "Browse Abandonment Recovery",
        required_features: ["email_automation", "user_tracking", "cart_tracking"],
        supports_goals: ["acquisition", "retention"],
        solves_issues: ["low_conversion", "low_engagement"],
        expected_impact: 3,
        complexity: 2
    },
    {
        id: "post_purchase_upsell",
        name: "Post-Purchase Upsell Flow",
        required_features: ["email_automation", "recommendation_ai", "order_tracking"],
        supports_goals: ["aov", "first_to_second_purchase"],
        solves_issues: ["low_repeat_purchase"],
        expected_impact: 4,
        complexity: 2
    },
    {
        id: "loyalty_program",
        name: "Automated Loyalty Program",
        required_features: ["loyalty_platform", "segmentation", "email_automation"],
        supports_goals: ["retention", "reduce_churn", "aov"],
        solves_issues: ["low_repeat_purchase", "low_engagement"],
        expected_impact: 5,
        complexity: 5
    },
    {
        id: "category_affinity",
        name: "Category Affinity Campaigns",
        required_features: ["personalization_engine", "user_tracking", "email_automation"],
        supports_goals: ["personalization", "aov"],
        solves_issues: ["poor_segmentation", "low_engagement"],
        expected_impact: 3,
        complexity: 3
    }
];

// All features
const ALL_FEATURES = [
    "email_automation",
    "user_tracking",
    "segmentation",
    "cart_tracking",
    "personalization_engine",
    "recommendation_ai",
    "search_ai",
    "event_tracking",
    "loyalty_platform",
    "order_tracking"
];

// Goals options
const GOALS_OPTIONS = [
    { id: 'retention', label: 'Retention' },
    { id: 'acquisition', label: 'Acquisition' },
    { id: 'aov', label: 'Average Order Value' },
    { id: 'first_to_second_purchase', label: 'First to Second Purchase' },
    { id: 'personalization', label: 'Personalization' },
    { id: 'campaign_efficiency', label: 'Campaign Efficiency' },
    { id: 'reduce_churn', label: 'Reduce Churn' },
    { id: 'search_conversion', label: 'Search Conversion' }
];

// Issues options
const ISSUES_OPTIONS = [
    { id: 'low_conversion', label: 'Low Conversion' },
    { id: 'low_repeat_purchase', label: 'Low Repeat Purchase' },
    { id: 'poor_segmentation', label: 'Poor Segmentation' },
    { id: 'weak_onboarding', label: 'Weak Onboarding' },
    { id: 'low_engagement', label: 'Low Engagement' },
    { id: 'no_ai_usage', label: 'No AI Usage' },
    { id: 'manual_processes', label: 'Manual Processes' },
    { id: 'poor_search', label: 'Poor Search' }
];

// Priority options
const PRIORITY_OPTIONS = [
    { id: 'this_quarter', label: 'This Quarter' },
    { id: 'this_year', label: 'This Year' },
    { id: 'nice_to_have', label: 'Nice to Have' }
];

// Demo customers
const DEMO_CUSTOMERS = [
    {
        id: "desigual",
        name: "Desigual",
        goals: ["retention", "aov", "personalization"],
        issues: ["low_engagement", "no_ai_usage", "poor_segmentation"],
        priority: "this_quarter",
        features: {
            "email_automation": true,
            "user_tracking": true,
            "segmentation": true,
            "cart_tracking": true,
            "personalization_engine": false,
            "recommendation_ai": false,
            "search_ai": false,
            "event_tracking": false,
            "loyalty_platform": false,
            "order_tracking": true
        }
    },
    {
        id: "fashionbrand",
        name: "Fashion Brand Inc",
        goals: ["acquisition", "first_to_second_purchase", "search_conversion"],
        issues: ["weak_onboarding", "poor_search", "low_conversion"],
        priority: "this_year",
        features: {
            "email_automation": true,
            "user_tracking": true,
            "segmentation": false,
            "cart_tracking": true,
            "personalization_engine": true,
            "recommendation_ai": true,
            "search_ai": false,
            "event_tracking": true,
            "loyalty_platform": false,
            "order_tracking": true
        }
    }
];
