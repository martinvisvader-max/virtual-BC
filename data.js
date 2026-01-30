// Goal Categories from Bloomreach Use Case Center
const GOAL_CATEGORIES = [
    { id: 'acquire', name: 'Acquire Customers', icon: '🛒', description: 'Convert visitors into buyers' },
    { id: 'retention', name: 'Increase Retention', icon: '💎', description: 'Keep customers coming back' },
    { id: 'reactivate', name: 'Reactivate Customers', icon: '🔄', description: 'Win back lapsed customers' },
    { id: 'reengage', name: 'Reengage Subscribers', icon: '📧', description: 'Re-engage email subscribers' },
    { id: 'grow_database', name: 'Grow Database', icon: '📈', description: 'Expand subscriber base' },
    { id: 'drive_traffic', name: 'Drive Traffic', icon: '🚀', description: 'Increase website visits' },
    { id: 'reduce_returns', name: 'Reduce Returns', icon: '📦', description: 'Minimize product returns' },
    { id: 'analyse', name: 'Analyse Data', icon: '📊', description: 'Get insights from data' }
];

// Use Cases with lift data where available
const USE_CASES = [
    // ===== ACQUIRE CUSTOMERS =====
    {
        id: 1, name: "Personalized Abandoned Cart Email", code: "LACP", category: "acquire",
        channel: "Email", description: "Recover lost sales with personalized cart reminders",
        hasLift: true, benchmark: { value: 1.74, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Customers with abandoned carts (last 90 days)", defaultValue: 15000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} customers abandoned their carts. With a {benchmark}% conversion rate, we can recover {conversions} purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 2, name: "Abandoned Cart with Recommendations", code: "LACR", category: "acquire",
        channel: "Email", description: "Cart recovery + AI recommendations for 8% better results",
        hasLift: true, benchmark: { value: 1.74, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1.08,
        metrics: [
            { id: "metric1", label: "Customers with abandoned carts (last 90 days)", defaultValue: 15000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} customers abandoned carts. With AI recommendations boosting conversion by 8%, expect {conversions} recovered purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 3, name: "Abandoned Browse Flow", code: "LABF", category: "acquire",
        channel: "Email", description: "Re-engage visitors who browsed but didn't purchase",
        hasLift: true, benchmark: { value: 0.92, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Browsers without purchase (last 90 days)", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} visitors browsed but didn't buy. With {benchmark}% conversion, expect {conversions} new customers at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 4, name: "Welcome Flow", code: "LWEF", category: "acquire",
        channel: "Email", description: "Convert new subscribers to first-time buyers",
        hasLift: true, benchmark: { value: 4.20, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "New subscribers without purchase (last 90 days)", defaultValue: 490 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} new subscribers haven't purchased yet. Welcome flow converts {benchmark}% into first-time buyers - that's {conversions} new customers at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    { id: 5, name: "Omnichannel Abandoned Cart Flow", code: "OACO", category: "acquire", channel: "Omnichannel", description: "Multi-channel cart recovery (Email, SMS, Push)", hasLift: false },
    { id: 6, name: "Abandoned Browse SMS", code: "LSAB", category: "acquire", channel: "SMS", description: "SMS reminder for browsed products", hasLift: false },
    { id: 7, name: "Abandoned Cart SMS", code: "LSAC", category: "acquire", channel: "SMS", description: "SMS reminder for abandoned cart", hasLift: false },
    { id: 8, name: "Social Proof Banner", code: "WSSP", category: "acquire", channel: "Weblayers", description: "Show 'X customers viewing this' to drive conversions", hasLift: false },
    { id: 9, name: "Recommendations Carousel Banner", code: "WCPR", category: "acquire", channel: "Weblayers", description: "Display personalized product recommendations", hasLift: false },
    { id: 10, name: "Gamified Banners", code: "WGAW", category: "acquire", channel: "Weblayers", description: "Interactive banners with voucher rewards", hasLift: false },
    { id: 11, name: "On-Exit Mobile Banner", code: "WOEM", category: "acquire", channel: "Weblayers", description: "Catch leaving mobile visitors with offers", hasLift: false },
    { id: 12, name: "Zero-Party Data Banner", code: "WZPD", category: "acquire", channel: "Weblayers", description: "Collect customer preferences for personalization", hasLift: false },
    { id: 13, name: "Customizable Customer Acquisition Weblayer", code: "WECA", category: "acquire", channel: "Weblayers", description: "Flexible weblayer for lead capture", hasLift: false },
    { id: 14, name: "Price Drop Alert Email", code: "LPAA", category: "acquire", channel: "Email", description: "Alert customers when viewed items drop in price", hasLift: false },
    { id: 15, name: "Restock Alert Email", code: "LRAA", category: "acquire", channel: "Email", description: "Notify when out-of-stock items return", hasLift: false },
    { id: 16, name: "Abandoned Cart Banner", code: "LABC", category: "acquire", channel: "Weblayers", description: "On-site reminder of cart items", hasLift: false },
    { id: 17, name: "Next-Day Delivery Countdown", code: "LNDC", category: "acquire", channel: "Weblayers", description: "Create urgency with delivery countdown", hasLift: false },
    { id: 18, name: "Discount Countdown Banner", code: "LDCB", category: "acquire", channel: "Weblayers", description: "Time-limited discount display", hasLift: false },
    { id: 19, name: "Refer a Friend Campaign", code: "ORAF", category: "acquire", channel: "Email", description: "Referral program with rewards", hasLift: false },
    { id: 20, name: "Quiz Banner With Recommendations", code: "WQPR", category: "acquire", channel: "Weblayers", description: "Interactive quiz leading to product suggestions", hasLift: false },

    // ===== INCREASE RETENTION =====
    {
        id: 30, name: "Post-Purchase Recommendations", code: "LPFU", category: "retention",
        channel: "Email", description: "Drive repeat purchases with personalized recommendations",
        hasLift: true, benchmark: { value: 10.00, unit: "%" }, formula: "post_purchase", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Total unique buyers (last 90 days)", defaultValue: 10000 },
            { id: "metric2", label: "Repeat buyers (last 90 days)", defaultValue: 2000 },
            { id: "metric3", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, you had {metric1} unique buyers with {metric2} repeat purchasers. A {benchmark}% uplift in repurchase rate adds {conversions} additional returning buyers at ${metric3} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 31, name: "Birthday Campaign", code: "LBDC", category: "retention",
        channel: "Email", description: "Personalized birthday offers to boost loyalty",
        hasLift: true, benchmark: { value: 0.72, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Customers with birthdays (next 90 days)", defaultValue: 2153 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "In the next 90 days, {metric1} customers have birthdays. With {benchmark}% conversion rate, expect {conversions} birthday purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 32, name: "Purchase Anniversary Recommendations", code: "LPAC", category: "retention",
        channel: "Email", description: "Re-engage on purchase anniversary",
        hasLift: true, benchmark: { value: 0.80, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Customers with purchase anniversary (next 90 days)", defaultValue: 6990 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "In the next 90 days, {metric1} customers reach their purchase anniversary. With {benchmark}% conversion, expect {conversions} repeat purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 33, name: "Retention Campaign for Repeat Purchasers", code: "LRRP", category: "retention",
        channel: "Email", description: "Keep repeat buyers engaged",
        hasLift: true, benchmark: { value: 0.22, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Repeat buyers without recent purchase (last 90 days)", defaultValue: 32210 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} repeat buyers haven't made a recent purchase. With {benchmark}% conversion, expect {conversions} reactivated purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    { id: 34, name: "Post-Purchase NPS Survey", code: "WNPS", category: "retention", channel: "Email", description: "Gather feedback after purchase", hasLift: false },
    { id: 35, name: "Weather Influenced Campaign", code: "OWIC", category: "retention", channel: "Email", description: "Weather-based product recommendations", hasLift: false },
    { id: 36, name: "Refill Reminder Email", code: "OREE", category: "retention", channel: "Email", description: "Automated refill reminders", hasLift: false },
    { id: 37, name: "Welcome SMS", code: "LSWC", category: "retention", channel: "SMS", description: "Welcome message for new subscribers", hasLift: false },
    { id: 38, name: "Interactive Post-Purchase Feedback", code: "WIPF", category: "retention", channel: "Weblayers", description: "Collect shopping experience feedback", hasLift: false },
    { id: 39, name: "Birthday Reminder Banner", code: "WBRR", category: "retention", channel: "Weblayers", description: "Collect friend birthdays for reminders", hasLift: false },
    { id: 40, name: "WhatsApp Product Recommendations", code: "OWAR", category: "retention", channel: "WhatsApp", description: "Interactive WhatsApp recommendations", hasLift: false },
    { id: 41, name: "Loyalty Program", code: "OLOP", category: "retention", channel: "Email", description: "Tier-based loyalty rewards", hasLift: false },

    // ===== REACTIVATE CUSTOMERS =====
    {
        id: 50, name: "Reactivation - Lapsed Subscribers", code: "OCAR", category: "reactivate",
        channel: "Email", description: "Win back inactive subscribers with 77-day flow",
        hasLift: true, benchmark: { value: 0.21, unit: "%" }, formula: "reactivation", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Lapsing/Lapsed subscribers (last 90 days)", defaultValue: 16580 },
            { id: "metric2", label: "Avg revenue - Lapsed customer ($)", defaultValue: 81 },
            { id: "metric3", label: "Avg revenue - Active customer ($)", defaultValue: 145 }
        ],
        story: "Over the last 90 days, {metric1} subscribers became lapsed. Reactivating at {benchmark}% yields {conversions} recovered customers. The revenue uplift from lapsed (${metric2}) to active (${metric3}) generates ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    { id: 51, name: "Reactivation with Contextual Personalization", code: "OCPT", category: "reactivate", channel: "Email", description: "AI-powered personalized win-back offers", hasLift: false },
    { id: 52, name: "RFM Omnichannel Winback", code: "OWBO", category: "reactivate", channel: "Omnichannel", description: "Multi-channel RFM-based reactivation", hasLift: false },
    { id: 53, name: "Reactivation for Promising Segments", code: "OPNA", category: "reactivate", channel: "Omnichannel", description: "72-hour voucher campaign", hasLift: false },
    { id: 54, name: "Flash Sale SMS", code: "LSFS", category: "reactivate", channel: "SMS", description: "Time-limited sale notification", hasLift: false },
    { id: 55, name: "Bi-Weekly Top Product Newsletter", code: "LTPR", category: "reactivate", channel: "Email", description: "Bestsellers with social proof", hasLift: false },
    { id: 56, name: "Favorite Brand Newsletter", code: "LBAN", category: "reactivate", channel: "Email", description: "New items from favorite brands", hasLift: false },
    { id: 57, name: "New Items of Interest Newsletter", code: "LCAN", category: "reactivate", channel: "Email", description: "Personalized new arrivals", hasLift: false },
    { id: 58, name: "SMS Product Recommendations", code: "LSPR", category: "reactivate", channel: "SMS", description: "SMS recs for first-time buyers", hasLift: false },
    { id: 59, name: "Post-Cancellation Follow-up", code: "OTCB", category: "reactivate", channel: "Email", description: "Re-engage after cancellation (Travel)", hasLift: false },

    // ===== REENGAGE SUBSCRIBERS =====
    {
        id: 60, name: "Reactivation - Disengaged Email Subscribers", code: "LPRC", category: "reengage",
        channel: "Email", description: "Personalized emails to lapsing subscribers",
        hasLift: true, benchmark: { value: 0.17, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Disengaged email subscribers (last 90 days)", defaultValue: 16872 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, {metric1} email subscribers became disengaged. With {benchmark}% conversion, expect {conversions} recovered customers at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 61, name: "Automated Favorite Brand Newsletter", code: "LBAN", category: "reengage",
        channel: "Email", description: "Weekly updates from favorite brands",
        hasLift: true, benchmark: { value: 0.25, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Active email subscribers (last 90 days)", defaultValue: 19200 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, you had {metric1} active email subscribers. Favorite brand newsletters convert {benchmark}% into buyers - that's {conversions} purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    {
        id: 62, name: "Automated Newsletter - New Items", code: "LCAN", category: "reengage",
        channel: "Email", description: "Personalized new product alerts",
        hasLift: true, benchmark: { value: 0.25, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Active email subscribers (last 90 days)", defaultValue: 19200 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, you had {metric1} active subscribers. New items newsletters convert {benchmark}% into buyers - that's {conversions} purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    { id: 63, name: "Email & SMS Reactivation Campaign", code: "LOPR", category: "reengage", channel: "Omnichannel", description: "Multi-channel reactivation flow", hasLift: false },
    { id: 64, name: "Warmup Campaign for Klaviyo", code: "OWCK", category: "reengage", channel: "Email", description: "Gradual migration from Klaviyo", hasLift: false },
    { id: 65, name: "Peak Season Email with Prioritization", code: "OBFS", category: "reengage", channel: "Email", description: "Black Friday send optimization", hasLift: false },

    // ===== DRIVE TRAFFIC =====
    {
        id: 70, name: "Bi-Weekly Recommendation Newsletter", code: "LTPR", category: "drive_traffic",
        channel: "Email", description: "Regular personalized newsletters",
        hasLift: true, benchmark: { value: 0.19, unit: "%" }, formula: "standard", period: "90 days", coefficient: 1,
        metrics: [
            { id: "metric1", label: "Total email subscribers (last 90 days)", defaultValue: 45000 },
            { id: "metric2", label: "Average Order Value ($)", defaultValue: 115 }
        ],
        story: "Over the last 90 days, you had {metric1} email subscribers. Bi-weekly newsletters convert {benchmark}% into buyers - that's {conversions} purchases at ${metric2} AOV, generating ${periodRevenue} per quarter or ${annualRevenue} annually."
    },
    { id: 71, name: "Paid Ad Optimization with Predictions", code: "OPAP", category: "drive_traffic", channel: "Ad Audiences", description: "AI-optimized ad targeting", hasLift: false },
    { id: 72, name: "Paid Ads Based on Email Engagement", code: "LABE", category: "drive_traffic", channel: "Ad Audiences", description: "Target non-email openers with ads", hasLift: false },
    { id: 73, name: "Social Media Ad Audiences", code: "LTAU", category: "drive_traffic", channel: "Ad Audiences", description: "FB/Google retargeting audiences", hasLift: false },
    { id: 74, name: "CLTV Lookalike Targeting", code: "LLTC", category: "drive_traffic", channel: "Ad Audiences", description: "Target lookalikes of best customers", hasLift: false },
    { id: 75, name: "Facebook Conversion API", code: "OFBC", category: "drive_traffic", channel: "Ad Audiences", description: "Server-side conversion tracking", hasLift: false },
    { id: 76, name: "YouTube Video Banner", code: "WIVI", category: "drive_traffic", channel: "Weblayers", description: "YouTube video pop-up on site", hasLift: false },
    { id: 77, name: "Instagram Content Newsletter", code: "OIGC", category: "drive_traffic", channel: "Email", description: "Repurpose Instagram in emails", hasLift: false },

    // ===== GROW DATABASE =====
    { id: 80, name: "AI-Segmented Subscription Banner", code: "WBSI", category: "grow_database", channel: "Weblayers", description: "AI picks best incentive to show", hasLift: false },
    { id: 81, name: "SMS Subscription Banner", code: "SMSB", category: "grow_database", channel: "SMS", description: "Two-tap SMS subscription", hasLift: false },
    { id: 82, name: "SMS Subscription with Offer", code: "LSDO", category: "grow_database", channel: "SMS", description: "SMS signup with voucher reward", hasLift: false },
    { id: 83, name: "SMS with Email Collection", code: "LSES", category: "grow_database", channel: "SMS", description: "Collect both SMS and email", hasLift: false },
    { id: 84, name: "SMS Checkout Subscription", code: "LSIC", category: "grow_database", channel: "SMS", description: "SMS signup during checkout", hasLift: false },
    { id: 85, name: "SMS with Zero-Party Data", code: "LSSZ", category: "grow_database", channel: "SMS", description: "Collect preferences with signup", hasLift: false },
    { id: 86, name: "Text to Join SMS", code: "LSTJ", category: "grow_database", channel: "SMS", description: "Subscribe by texting keyword", hasLift: false },
    { id: 87, name: "Single Opt-in Email Banner", code: "WSOI", category: "grow_database", channel: "Weblayers", description: "Simple email subscription", hasLift: false },
    { id: 88, name: "Double Opt-in Email Banner", code: "WDOI", category: "grow_database", channel: "Weblayers", description: "Confirmed email subscription", hasLift: false },
    { id: 89, name: "Multistep Zero-Party Data Banner", code: "LMZD", category: "grow_database", channel: "Weblayers", description: "Multi-step preference collection", hasLift: false },
    { id: 90, name: "Interactive Subscriber Banner", code: "WISB", category: "grow_database", channel: "Weblayers", description: "Email/SMS with discount incentive", hasLift: false },
    { id: 91, name: "Web Push Subscription Banner", code: "WPNS", category: "grow_database", channel: "Browser Push", description: "Browser notification opt-in", hasLift: false },

    // ===== REDUCE RETURNS =====
    { id: 100, name: "Returned Items Dashboard", code: "ARID", category: "reduce_returns", channel: "Dashboard", description: "Analyze return patterns", hasLift: false },
    { id: 101, name: "High Return Items Banner", code: "WFRI", category: "reduce_returns", channel: "Weblayers", description: "Size guide prompt on problem products", hasLift: false },
    { id: 102, name: "High Return Customer Banner", code: "LHBR", category: "reduce_returns", channel: "Weblayers", description: "Eco-message for frequent returners", hasLift: false },
    { id: 103, name: "Cart Consolidation Banner", code: "WCCB", category: "reduce_returns", channel: "Weblayers", description: "Prevent multi-size orders", hasLift: false },

    // ===== ANALYSE DATA =====
    { id: 110, name: "Conversion Dashboard", code: "ACVD", category: "analyse", channel: "Dashboard", description: "Purchase funnel analysis", hasLift: false },
    { id: 111, name: "Email Deliverability Dashboard", code: "AE1D", category: "analyse", channel: "Dashboard", description: "Email delivery metrics", hasLift: false },
    { id: 112, name: "Email Performance Dashboard", code: "AEPD", category: "analyse", channel: "Dashboard", description: "Email revenue and engagement", hasLift: false },
    { id: 113, name: "Subscriber Monitoring Dashboard", code: "ASUD", category: "analyse", channel: "Dashboard", description: "Track subscriber growth", hasLift: false },
    { id: 114, name: "Customer Lifetime Value Dashboard", code: "ACLV", category: "analyse", channel: "Dashboard", description: "CLTV trends and segments", hasLift: false },
    { id: 115, name: "RFM Segmentation", code: "LRFM", category: "analyse", channel: "Dashboard", description: "Recency/Frequency/Monetary segments", hasLift: false },
    { id: 116, name: "Key Customer Segments Dashboard", code: "ASCV", category: "analyse", channel: "Dashboard", description: "High-level business metrics", hasLift: false },
    { id: 117, name: "Executive Dashboard", code: "AETD", category: "analyse", channel: "Dashboard", description: "Channel performance overview", hasLift: false },
    { id: 118, name: "Retention Dashboard", code: "ARET", category: "analyse", channel: "Dashboard", description: "Customer retention metrics", hasLift: false },
    { id: 119, name: "Email Optimization Autosegments", code: "OASE", category: "analyse", channel: "Dashboard", description: "AI-generated email segments", hasLift: false },
    { id: 120, name: "Retention Autosegments", code: "OASR", category: "analyse", channel: "Dashboard", description: "AI segments for retention", hasLift: false },
    { id: 121, name: "Omnichannel Overview", code: "OODB", category: "analyse", channel: "Dashboard", description: "Cross-channel reach analysis", hasLift: false },
    { id: 122, name: "Black Friday Dashboard", code: "ABFD", category: "analyse", channel: "Dashboard", description: "Peak season performance", hasLift: false }
];

// Helper function
function getUseCasesByCategory(categoryId) {
    return USE_CASES.filter(uc => uc.category === categoryId);
}

function getUseCasesWithLift() {
    return USE_CASES.filter(uc => uc.hasLift === true);
}
