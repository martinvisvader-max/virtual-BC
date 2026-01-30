// State
let currentStep = 1;
let selectedGoals = [];
let selectedUseCases = [];
let liftResults = [];

// Initialize
function initApp() {
    render();
}

// Render main
function render() {
    const app = document.getElementById('app');

    if (currentStep === 1) {
        app.innerHTML = renderGoalSelection();
    } else if (currentStep === 2) {
        app.innerHTML = renderUseCaseSelection();
    } else if (currentStep === 3) {
        app.innerHTML = renderLiftCalculation();
    } else if (currentStep === 4) {
        app.innerHTML = renderPresentation();
    }
}

// Step 1: Goal Selection
function renderGoalSelection() {
    return `
        <div class="max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-3xl font-bold mb-2 text-gray-900">Virtual BC</h1>
                <p class="text-gray-600 mb-8">Select your business goals</p>

                <div class="grid grid-cols-2 gap-4 mb-8">
                    ${GOAL_CATEGORIES.map(g => `
                        <div onclick="toggleGoal('${g.id}')"
                             class="goal-card p-6 border-2 rounded-xl cursor-pointer transition-all
                                    ${selectedGoals.includes(g.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}">
                            <div class="text-3xl mb-2">${g.icon}</div>
                            <h3 class="text-xl font-bold text-gray-900">${g.name}</h3>
                            <p class="text-sm text-gray-600 mt-1">${g.description}</p>
                            <div class="mt-3 text-xs text-gray-500">
                                ${getUseCasesByCategory(g.id).length} use cases
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button onclick="goToStep(2)"
                        ${selectedGoals.length === 0 ? 'disabled' : ''}
                        class="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold
                               ${selectedGoals.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}">
                    Continue with ${selectedGoals.length} goal${selectedGoals.length !== 1 ? 's' : ''} selected
                </button>
            </div>
        </div>
    `;
}

function toggleGoal(goalId) {
    if (selectedGoals.includes(goalId)) {
        selectedGoals = selectedGoals.filter(g => g !== goalId);
    } else {
        selectedGoals.push(goalId);
    }
    render();
}

// Step 2: Use Case Selection
function renderUseCaseSelection() {
    const relevantUseCases = USE_CASES.filter(uc => selectedGoals.includes(uc.category));

    return `
        <div class="max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-2xl font-bold mb-6 text-gray-900">Recommended Use Cases</h1>

                <div class="space-y-3 mb-8 max-h-96 overflow-y-auto">
                    ${relevantUseCases.map(uc => {
                        const cat = GOAL_CATEGORIES.find(c => c.id === uc.category);
                        return `
                        <div onclick="toggleUseCase(${uc.id})"
                             class="p-4 border-2 rounded-lg cursor-pointer transition-all
                                    ${selectedUseCases.includes(uc.id) ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <div class="flex items-center gap-2">
                                        <span class="text-lg">${cat.icon}</span>
                                        <h3 class="font-semibold text-gray-900">${uc.name}</h3>
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">${uc.description}</p>
                                </div>
                                <div class="text-right ml-4">
                                    <div class="text-green-600 font-bold">${uc.benchmark.value}%</div>
                                    <div class="text-xs text-gray-500">benchmark</div>
                                </div>
                            </div>
                        </div>
                    `}).join('')}
                </div>

                <div class="flex gap-4">
                    <button onclick="goToStep(1)" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Back
                    </button>
                    <button onclick="goToStep(3)"
                            ${selectedUseCases.length === 0 ? 'disabled' : ''}
                            class="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold
                                   ${selectedUseCases.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}">
                        Calculate Lift (${selectedUseCases.length} selected)
                    </button>
                </div>
            </div>
        </div>
    `;
}

function toggleUseCase(ucId) {
    if (selectedUseCases.includes(ucId)) {
        selectedUseCases = selectedUseCases.filter(id => id !== ucId);
    } else {
        selectedUseCases.push(ucId);
    }
    render();
}

// Step 3: Lift Calculation
function renderLiftCalculation() {
    const selected = USE_CASES.filter(uc => selectedUseCases.includes(uc.id));

    return `
        <div class="max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-2xl font-bold mb-6 text-gray-900">Calculate Revenue Lift</h1>

                <div class="space-y-6 mb-8">
                    ${selected.map(uc => `
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="font-semibold text-gray-900 mb-3">${uc.name}</h3>
                            <div class="grid grid-cols-2 gap-3">
                                ${uc.metrics.map(m => `
                                    <div>
                                        <label class="block text-sm text-gray-600 mb-1">${m.label}</label>
                                        <input type="number"
                                               id="uc${uc.id}_${m.id}"
                                               value="${m.defaultValue}"
                                               class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="flex gap-4">
                    <button onclick="goToStep(2)" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Back
                    </button>
                    <button onclick="calculateAllLift()"
                            class="flex-1 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
                        Calculate & Show Results
                    </button>
                </div>
            </div>
        </div>
    `;
}

function calculateAllLift() {
    liftResults = [];
    const selected = USE_CASES.filter(uc => selectedUseCases.includes(uc.id));

    selected.forEach(uc => {
        const metrics = {};
        uc.metrics.forEach(m => {
            const input = document.getElementById(`uc${uc.id}_${m.id}`);
            metrics[m.id] = parseFloat(input.value) || 0;
        });

        const result = calculateLift(uc, metrics);
        liftResults.push({
            useCase: uc,
            metrics: metrics,
            ...result
        });
    });

    goToStep(4);
}

function calculateLift(uc, metrics) {
    const benchmark = uc.benchmark.value / 100;
    const coefficient = uc.coefficient || 1;
    let revenue = 0;
    let conversions = 0;

    if (uc.formula === 'standard') {
        revenue = metrics.metric1 * metrics.metric2 * benchmark * coefficient;
        conversions = Math.round(metrics.metric1 * benchmark);
    } else if (uc.formula === 'post_purchase') {
        revenue = metrics.metric2 * benchmark * metrics.metric3 * coefficient;
        conversions = Math.round(metrics.metric2 * benchmark);
    } else if (uc.formula === 'reactivation') {
        const diff = metrics.metric3 - metrics.metric2;
        revenue = metrics.metric1 * benchmark * diff * coefficient;
        conversions = Math.round(metrics.metric1 * benchmark);
    }

    // Annualize
    let multiplier = 1;
    if (uc.period.includes('14')) multiplier = 365 / 14;
    else if (uc.period.includes('90')) multiplier = 365 / 90;
    else if (uc.period.includes('180')) multiplier = 365 / 180;

    return {
        periodRevenue: revenue,
        annualRevenue: revenue * multiplier,
        conversions: conversions
    };
}

// Step 4: Presentation
function renderPresentation() {
    const totalAnnual = liftResults.reduce((sum, r) => sum + r.annualRevenue, 0);
    const totalConversions = liftResults.reduce((sum, r) => sum + r.conversions, 0);

    return `
        <div class="max-w-5xl mx-auto p-6">
            <div class="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl p-8 text-white">

                <!-- Header -->
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold mb-2">Revenue Opportunity</h1>
                    <p class="text-blue-200">Bloomreach Use Case Impact Analysis</p>
                </div>

                <!-- Big Number -->
                <div class="bg-white/10 rounded-xl p-8 text-center mb-8">
                    <div class="text-6xl font-bold text-green-400">
                        $${Math.round(totalAnnual).toLocaleString()}
                    </div>
                    <div class="text-xl text-blue-200 mt-2">Annual Revenue Potential</div>
                    <div class="text-sm text-blue-300 mt-1">${totalConversions.toLocaleString()} additional conversions</div>
                </div>

                <!-- Use Cases Grid -->
                <div class="grid grid-cols-2 gap-4 mb-8">
                    ${liftResults.map(r => {
                        const cat = GOAL_CATEGORIES.find(c => c.id === r.useCase.category);
                        return `
                        <div class="bg-white/10 rounded-lg p-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span>${cat.icon}</span>
                                <span class="font-semibold text-sm">${r.useCase.name}</span>
                            </div>
                            <div class="text-2xl font-bold text-green-400">
                                $${Math.round(r.annualRevenue).toLocaleString()}
                            </div>
                            <div class="text-xs text-blue-300">${r.conversions} conversions/period</div>
                        </div>
                    `}).join('')}
                </div>

                <!-- Goals Summary -->
                <div class="flex justify-center gap-4 mb-8">
                    ${selectedGoals.map(gId => {
                        const g = GOAL_CATEGORIES.find(c => c.id === gId);
                        return `
                        <div class="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                            <span>${g.icon}</span>
                            <span class="text-sm">${g.name}</span>
                        </div>
                    `}).join('')}
                </div>

                <!-- Actions -->
                <div class="flex gap-4">
                    <button onclick="goToStep(1); selectedGoals=[]; selectedUseCases=[]; liftResults=[];"
                            class="px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30">
                        Start Over
                    </button>
                    <button onclick="window.print()"
                            class="flex-1 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600">
                        Export / Print
                    </button>
                </div>
            </div>
        </div>
    `;
}

function goToStep(step) {
    currentStep = step;
    render();
}

// Init
window.onload = initApp;
