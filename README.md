# Virtual BC - Static Version

Jednoduchá statická webová aplikácia pre CSM analýzu bez backendu.

## 🎯 Čo táto verzia robí

- ✅ 6-krokový wizard
- ✅ 2 demo zákazníci (Desigual, Fashion Brand Inc)
- ✅ 12 use cases
- ✅ Recommendation engine (scoring)
- ✅ Financial lift kalkulácia
- ✅ Všetko beží v prehliadači (žiadny backend)
- ✅ Data sa ukladajú v localStorage

## 🚀 Ako to spustiť

### Možnosť 1: Lokálne (jednoduchý double-click)

1. Otvor súbor `index.html` v prehliadači
2. Hotovo! Appka beží

### Možnosť 2: GitHub Pages (online)

1. Nahraj tieto 3 súbory do GitHub repa:
   - `index.html`
   - `data.js`
   - `app.js`

2. V GitHub repo → Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. Save

6. Za pár sekúnd budeš mať live URL: 
   `https://martinvisvader-max.github.io/CSM-advisor/`

## 📁 Súbory

- `index.html` - Hlavná stránka s HTML štruktúrou
- `data.js` - Use cases, features, demo zákazníci
- `app.js` - Všetka logika aplikácie

## 🎮 Ako to používať

1. Vyber demo zákazníka (Desigual alebo Fashion Brand Inc)
2. Prejdi cez 6 krokov:
   - Goals & Issues
   - Contract Features
   - Use Case Adoption
   - Recommendations
   - Financial Lift
   - Export Summary
3. Všetko sa ukladá do localStorage

## ⚠️ Obmedzenia static verzie

- ❌ Žiadny PowerPoint export
- ❌ Žiadna databáza (len localStorage)
- ❌ Nemôžeš vytvoriť nových zákazníkov (len 2 demo)
- ✅ Ale všetko ostatné funguje!

## 🔧 Customizácia

### Pridať nový use case

Edituj `data.js`, pridaj do `USE_CASES` array:

```javascript
{
    id: "new_use_case",
    name: "Nový Use Case",
    required_features: ["email_automation"],
    supports_goals: ["retention"],
    solves_issues: ["low_engagement"],
    expected_impact: 4,
    complexity: 2
}
```

### Pridať novú feature

Pridaj do `ALL_FEATURES` v `data.js`:

```javascript
const ALL_FEATURES = [
    ...existing,
    "nova_feature"
];
```

## 🌐 Live Demo

Po nahraní na GitHub Pages bude dostupné na:
`https://tvojemeno.github.io/repo-name/`

---

**Vyrobené s ❤️ pomocou Clauda**
