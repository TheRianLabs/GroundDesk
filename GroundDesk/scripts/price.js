const plansData = [
    {
        name: 'Standard',
        price: { monthly: 5, annually: 54 },
        featured: false,
        features: [
            { text: '5 collections', available: true },
            { text: 'Worldwide accessibility', available: true },
            { text: '25 automation actions', available: true },
            { text: 'Access all features', available: true },
            { text: '24 hours support', available: true },
            { text: 'Sync across devices', available: false },
            { text: 'Share with more than 5 users', available: false }
        ]
    },
    {
        name: 'Extended',
        price: { monthly: 12, annually: 130 },
        featured: true,
        features: [
            { text: 'Unlimited collections', available: true },
            { text: 'Worldwide accessibility', available: true },
            { text: 'Unlimited automation actions', available: true },
            { text: 'Access all features', available: true },
            { text: '24 hours support', available: true },
            { text: 'Sync across devices', available: true },
            { text: 'Share with more than 5 users', available: true }
        ]
    },
    {
        name: 'Premium+',
        price: { monthly: 16, annually: 173 },
        featured: false,
        features: [
            { text: 'Unlimited collections', available: true },
            { text: 'Worldwide accessibility', available: true },
            { text: 'Unlimited automation actions', available: true },
            { text: 'Access all features', available: true },
            { text: '24 hours support', available: true },
            { text: 'Sync across devices', available: true },
            { text: 'Share with more than 10 users', available: true }
        ]
    }
];

const priceTags = document.querySelector('.js-price-tags');
const billingToggle = document.querySelector('.js-billing-toggle');

let billing = 'monthly';

function renderPlans() {
    const period = billing === 'monthly' ? '/month' : '/year';
    let plansHTML = '';

    plansData.forEach(plan => {
        let featuresHTML = '';

        plan.features.forEach(feature => {
            featuresHTML += `
                <li class="${feature.available ? '' : 'unavailable'}">${feature.text}</li>
            `;
        });

        plansHTML += `
            <div class="price-tag-box ${plan.featured ? 'featured' : ''}">
                <div class="price-offer">
                    <p class="price-title">${plan.name}</p>
                    <p class="national">The national average cost of buying coins easy.</p>
                    <p class="price">$${plan.price[billing]}<span class="month">${period}</span></p>
                    <button type="button" class="btn ${plan.featured ? 'btn-light' : 'btn-blue'} select-button">Select Plan</button>
                </div>

                <ul class="features">
                    ${featuresHTML}
                </ul>
            </div>
        `;
    });

    priceTags.innerHTML = plansHTML;
}

billingToggle.addEventListener('click', () => {
    billing = billing === 'monthly' ? 'annually' : 'monthly';
    billingToggle.setAttribute('aria-checked', String(billing === 'annually'));
    renderPlans();
});

renderPlans();
