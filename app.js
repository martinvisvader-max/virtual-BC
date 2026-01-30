// State management
let currentCustomer = null;
let currentStep = 1;
let customerData = {
    name: '',
    goals: [],
    issues: [],
    priority: 'this_quarter',
    features: {},
    useCases: {},
    selectedUseCases: [],
    liftResult: null
};

// Initialize app
function initApp() {
    loadFromStorage();
    renderCustomerList();
}

// Local storage
function saveToStorage() {
    localStorage.setItem('csmAdvisorData', JSON.stringify({
        currentCustomer,
        currentStep,
        customerData
    }));
}

function loadFromStorage() {
    const saved = localStorage.getItem('csmAdvisorData');
    if (saved) {
        const data = JSON.parse(saved);
        currentCustomer = data.currentCustomer;
        currentStep = data.currentStep;
        customerData = data.customerData;
    }
}

// Navigation
function goToStep(step) {
    currentStep = step;
    saveToStorage();
    render();
}

function nextStep() {
    if (currentStep < 6) {
        goToStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

// Render functions
function render() {
    const app = document.getElementById('app');
    
    if (!currentCustomer) {
        app.innerHTML = renderCustomerList();
        return;
    }
    
    const stepContent = [
        null,
        renderGoals,
        renderFeatures,
        renderUseCases,
        renderRecommendations,
        renderLift,
        renderExport
    ][currentStep]();
    
    app.innerHTML = `
        <div class="max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-lg shadow-md p-8">
                ${renderStepIndicator()}
                ${stepContent}
            </div>
        </div>
    `;
}

function renderStepIndicator() {
    return `
        <div class="mb-6">
            <div class="text-sm text-gray-500 mb-2">Step ${currentStep} of 6</div>
            <div class="step-indicator">
                ${[1,2,3,4,5,6].map(i => `
                    <div class="step-dot ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}"></div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCustomerList() {
    const customers = [...DEMO_CUSTOMERS];
    
    return `
        <div class="max-w-4xl mx-auto p-6">
            <div class="bg-white rounded-lg shadow-md p-8">
                <h1 class="text-3xl font-bold mb-6 text-gray-900">Virtual BC</h1>
                
                <div class="mb-8">
                    <h2 class="text-xl font-semibold mb-4 text-gray-700">Select Customer</h2>
                    <div class="space-y-2">
                        ${customers.map(c => `
                            <div onclick="selectCustomer('${c.id}')" 
                                 class="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition">
                                <h3 class="font-semibold text-gray-900">${c.name}</h3>
                                <p class="text-sm text-gray-500">Demo Customer</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function selectCustomer(id) {
    const customer = DEMO_CUSTOMERS.find(c => c.id === id);
    if (customer) {
        currentCustomer = id;
        customerData = {
            name: customer.name,
            goals: customer.goals,
            issues: customer.issues,
            priority: customer.priority,
            features: {...customer.features},
            useCases: {},
            selectedUseCases: [],
            liftResult: null
        };
        goToStep(1);
    }
}

function renderGoals() {
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Customer Goals & Issues</h1>
        
        <div class="space-y-6">
            <div>
                <h2 class="text-xl font-semibold mb-4 text-gray-700">Business Goals</h2>
                <div class="grid grid-cols-2 gap-3">
                    ${GOALS_OPTIONS.map(g => `
                        <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                            <input type="checkbox" 
                                   ${customerData.goals.includes(g.id) ? 'checked' : ''}
                                   onchange="toggleGoal('${g.id}')"
                                   class="w-4 h-4 text-blue-600">
                            <span class="ml-3 text-gray-700">${g.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h2 class="text-xl font-semibold mb-4 text-gray-700">Current Issues</h2>
                <div class="grid grid-cols-2 gap-3">
                    ${ISSUES_OPTIONS.map(i => `
                        <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                            <input type="checkbox"
                                   ${customerData.issues.includes(i.id) ? 'checked' : ''}
                                   onchange="toggleIssue('${i.id}')"
                                   class="w-4 h-4 text-blue-600">
                            <span class="ml-3 text-gray-700">${i.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h2 class="text-xl font-semibold mb-4 text-gray-700">Priority</h2>
                <select onchange="setPriority(this.value)" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    ${PRIORITY_OPTIONS.map(p => `
                        <option value="${p.id}" ${customerData.priority === p.id ? 'selected' : ''}>
                            ${p.label}
                        </option>
                    `).join('')}
                </select>
            </div>
            
            <div class="flex justify-between pt-6">
                <button onclick="currentCustomer=null; render()" 
                        class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Back to Customers
                </button>
                <button onclick="nextStep()" 
                        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Next: Contract Features
                </button>
            </div>
        </div>
    `;
}

function toggleGoal(goalId) {
    if (customerData.goals.includes(goalId)) {
        customerData.goals = customerData.goals.filter(g => g !== goalId);
    } else {
        customerData.goals.push(goalId);
    }
    saveToStorage();
}

function toggleIssue(issueId) {
    if (customerData.issues.includes(issueId)) {
        customerData.issues = customerData.issues.filter(i => i !== issueId);
    } else {
        customerData.issues.push(issueId);
    }
    saveToStorage();
}

function setPriority(priority) {
    customerData.priority = priority;
    saveToStorage();
}

function renderFeatures() {
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Contract Features</h1>
        <p class="text-gray-600 mb-6">Select the features included in the customer's contract</p>
        
        <div class="grid grid-cols-1 gap-3 mb-6">
            ${ALL_FEATURES.map(f => `
                <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                    <input type="checkbox"
                           ${customerData.features[f] ? 'checked' : ''}
                           onchange="toggleFeature('${f}')"
                           class="w-5 h-5 text-blue-600">
                    <span class="ml-3 text-gray-700 font-medium">
                        ${f.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </span>
                </label>
            `).join('')}
        </div>
        
        <div class="flex justify-between pt-6">
            <button onclick="prevStep()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Back
            </button>
            <button onclick="nextStep()" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Next: Use Case Adoption
            </button>
        </div>
    `;
}

function toggleFeature(feature) {
    customerData.features[feature] = !customerData.features[feature];
    saveToStorage();
    render();
}

function renderUseCases() {
    const activeFeatures = Object.keys(customerData.features).filter(f => customerData.features[f]);
    const compatible = USE_CASES.filter(uc => 
        uc.required_features.every(rf => activeFeatures.includes(rf))
    );
    
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Use Case Adoption</h1>
        <p class="text-gray-600 mb-6">Mark which use cases are currently being used</p>
        
        ${compatible.length === 0 ? `
            <div class="text-center py-12">
                <p class="text-gray-500 text-lg">No compatible use cases. Add more features.</p>
            </div>
        ` : `
            <div class="space-y-3 mb-6">
                ${compatible.map(uc => `
                    <div class="border border-gray-200 rounded-lg p-4">
                        <label class="flex items-start cursor-pointer">
                            <input type="checkbox"
                                   ${customerData.useCases[uc.id] ? 'checked' : ''}
                                   onchange="toggleUseCase('${uc.id}')"
                                   class="mt-1 w-5 h-5 text-blue-600">
                            <div class="ml-4 flex-1">
                                <div class="font-semibold text-gray-900">${uc.name}</div>
                                <div class="text-sm text-gray-600 mt-1">
                                    Impact: ${uc.expected_impact}/5 | Complexity: ${uc.complexity}/5
                                </div>
                            </div>
                            ${customerData.useCases[uc.id] ? `
                                <span class="px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">Used</span>
                            ` : `
                                <span class="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Not Used</span>
                            `}
                        </label>
                    </div>
                `).join('')}
            </div>
        `}
        
        <div class="flex justify-between pt-6">
            <button onclick="prevStep()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Back
            </button>
            <button onclick="nextStep()" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Next: Recommendations
            </button>
        </div>
    `;
}

function toggleUseCase(ucId) {
    customerData.useCases[ucId] = !customerData.useCases[ucId];
    saveToStorage();
    render();
}

function renderRecommendations() {
    const activeFeatures = Object.keys(customerData.features).filter(f => customerData.features[f]);
    const usedUseCases = Object.keys(customerData.useCases).filter(id => customerData.useCases[id]);
    
    const scores = USE_CASES.map(uc => {
        const isCompatible = uc.required_features.every(rf => activeFeatures.includes(rf));
        const isUsed = usedUseCases.includes(uc.id);
        
        const goalMatch = uc.supports_goals.filter(g => customerData.goals.includes(g)).length;
        const issueMatch = uc.solves_issues.filter(i => customerData.issues.includes(i)).length;
        const featureAvailable = isCompatible ? 1 : 0;
        
        const score = (goalMatch * 3) + (issueMatch * 2) + (featureAvailable * 2) - uc.complexity + uc.expected_impact;
        
        return {
            ...uc,
            score,
            goalMatch,
            issueMatch,
            isCompatible,
            isUsed,
            isEligible: isCompatible && !isUsed
        };
    });
    
    const recommended = scores.filter(s => s.isEligible).sort((a, b) => b.score - a.score).slice(0, 5);
    
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Recommendations</h1>
        
        <div class="space-y-6">
            <div>
                <h2 class="text-2xl font-semibold mb-4">Top Recommended Use Cases</h2>
                <div class="space-y-3">
                    ${recommended.map((uc, idx) => `
                        <div class="border border-gray-200 rounded-lg p-5">
                            <label class="flex items-start cursor-pointer">
                                <input type="checkbox"
                                       ${customerData.selectedUseCases.includes(uc.id) ? 'checked' : ''}
                                       onchange="toggleSelectedUseCase('${uc.id}')"
                                       class="mt-1 w-5 h-5 text-blue-600">
                                <div class="ml-4 flex-1">
                                    <div class="flex items-center gap-3">
                                        <span class="text-2xl font-bold text-gray-400">#${idx + 1}</span>
                                        <div>
                                            <h3 class="font-semibold text-lg">${uc.name}</h3>
                                            <div class="text-sm text-gray-600 mt-1">
                                                Score: ${uc.score} | Goals: ${uc.goalMatch} | Issues: ${uc.issueMatch}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="flex justify-between pt-6">
                <button onclick="prevStep()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Back
                </button>
                <button onclick="nextStep()" 
                        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Continue to Lift (${customerData.selectedUseCases.length} selected)
                </button>
            </div>
        </div>
    `;
}

function toggleSelectedUseCase(ucId) {
    if (customerData.selectedUseCases.includes(ucId)) {
        customerData.selectedUseCases = customerData.selectedUseCases.filter(id => id !== ucId);
    } else {
        customerData.selectedUseCases.push(ucId);
    }
    saveToStorage();
    render();
}

function renderLift() {
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Financial Impact Calculation</h1>
        
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 class="font-semibold text-blue-900 mb-2">Selected Use Cases: ${customerData.selectedUseCases.length}</h3>
        </div>
        
        <div class="space-y-4 mb-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Monthly Sessions</label>
                <input type="number" id="sessions" placeholder="100000" 
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Conversion Rate (%)</label>
                <input type="number" step="0.1" id="cr" placeholder="2.5"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Average Order Value (€)</label>
                <input type="number" step="0.01" id="aov" placeholder="75.00"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Expected Uplift (%)</label>
                <input type="number" step="0.1" id="uplift" value="15"
                       class="w-full px-4 py-2 border border-gray-300 rounded-lg">
            </div>
            
            <button onclick="calculateLift()" 
                    class="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg">
                Calculate Impact
            </button>
        </div>
        
        <div id="liftResults"></div>
        
        <div class="flex justify-between pt-6">
            <button onclick="prevStep()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Back
            </button>
            <button onclick="nextStep()" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Next: Export
            </button>
        </div>
    `;
}

function calculateLift() {
    const sessions = parseFloat(document.getElementById('sessions').value);
    const cr = parseFloat(document.getElementById('cr').value);
    const aov = parseFloat(document.getElementById('aov').value);
    const uplift = parseFloat(document.getElementById('uplift').value);
    
    if (!sessions || !cr || !aov || !uplift) {
        alert('Please fill all fields');
        return;
    }
    
    const baseline = sessions * (cr / 100) * aov;
    const incrementalMonthly = baseline * (uplift / 100);
    const incrementalAnnual = incrementalMonthly * 12;
    
    customerData.liftResult = {
        uplift,
        baseline,
        incrementalMonthly,
        incrementalAnnual
    };
    saveToStorage();
    
    document.getElementById('liftResults').innerHTML = `
        <div class="border-t pt-6">
            <h2 class="text-2xl font-bold mb-6">Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div class="text-sm text-blue-700 mb-1">Expected Uplift</div>
                    <div class="text-3xl font-bold text-blue-900">${uplift}%</div>
                </div>
                <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div class="text-sm text-green-700 mb-1">Monthly Revenue</div>
                    <div class="text-3xl font-bold text-green-900">€${incrementalMonthly.toLocaleString('en', {maximumFractionDigits: 0})}</div>
                </div>
                <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 md:col-span-2">
                    <div class="text-sm text-purple-700 mb-1">Annual Revenue</div>
                    <div class="text-4xl font-bold text-purple-900">€${incrementalAnnual.toLocaleString('en', {maximumFractionDigits: 0})}</div>
                </div>
            </div>
        </div>
    `;
}

function renderExport() {
    return `
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Export Summary</h1>
        
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-6">
            <h2 class="text-xl font-semibold mb-4">Summary</h2>
            <div class="space-y-2 text-gray-700">
                <div><strong>Customer:</strong> ${customerData.name}</div>
                <div><strong>Goals:</strong> ${customerData.goals.map(g => GOALS_OPTIONS.find(o => o.id === g)?.label).join(', ')}</div>
                <div><strong>Issues:</strong> ${customerData.issues.map(i => ISSUES_OPTIONS.find(o => o.id === i)?.label).join(', ')}</div>
                <div><strong>Selected Use Cases:</strong> ${customerData.selectedUseCases.length}</div>
                ${customerData.liftResult ? `
                    <div><strong>Annual Value:</strong> €${customerData.liftResult.incrementalAnnual.toLocaleString('en', {maximumFractionDigits: 0})}</div>
                ` : ''}
            </div>
        </div>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <p class="text-gray-700">
                <strong>Note:</strong> PowerPoint export is not available in the static version. 
                In the full version, you would download a professional presentation here.
            </p>
        </div>
        
        <div class="flex justify-between pt-6">
            <button onclick="prevStep()" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Back
            </button>
            <button onclick="currentCustomer=null; currentStep=1; render()" 
                    class="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                Return to Customers
            </button>
        </div>
    `;
}

// Initialize on load
window.onload = initApp;
