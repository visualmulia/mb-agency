// Konfigurasi Harga dan Layanan SMM/Agency
const calculatorConfig = {
    projectTypes: {
        starter: { name: "Starter: Social Media Posting (1 Platform)", basePriceUSD: 200, baseWeeks: 4 },
        growth: { name: "Growth: Multi-Platform SMM & Content Strategy", basePriceUSD: 600, baseWeeks: 4 },
        scale: { name: "Scale: SMM + Paid Ads + Funnel Strategy", basePriceUSD: 1500, baseWeeks: 4 }
    },
    features: {
        copywriting: { name: "Creative Copywriting (15 Posts)", priceUSD: 100, weeks: 0 },
        video: { name: "Short Video/Reels Production (5 Videos)", priceUSD: 250, weeks: 1 },
        influencer: { name: "Influencer Outreach & Management", priceUSD: 300, weeks: 1 },
        reporting: { name: "Weekly Performance Analytics Report", priceUSD: 80, weeks: 0 },
        ad_management: { name: "Meta & Google Ads Campaign Management", priceUSD: 400, weeks: 0 },
        branding: { name: "Visual Branding / Feeds Design Template", priceUSD: 350, weeks: 2 }
    },
    usdToIdrRate: 16000 // Kurs Konversi (1 USD = Rp 16.000)
};

function initCalculator() {
    const projectTypeSelect = document.getElementById('calc-project-type');
    const featuresContainer = document.getElementById('calc-features-list');
    const costDisplay = document.getElementById('calc-cost-range');
    const timelineDisplay = document.getElementById('calc-timeline');
    const usdIdrToggle = document.getElementById('currency-toggle');
    const bookBtn = document.getElementById('calc-book-btn');
    const contactMessage = document.getElementById('contact-message'); // Textarea form kontak

    if (!projectTypeSelect || !featuresContainer || !costDisplay || !timelineDisplay) return;

    let currency = 'IDR'; // Default ke rupiah untuk lokal

    // Mengisi Opsi Project Type
    projectTypeSelect.innerHTML = '';
    Object.keys(calculatorConfig.projectTypes).forEach(key => {
        const type = calculatorConfig.projectTypes[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = type.name;
        projectTypeSelect.appendChild(option);
    });

    // Mengisi Checkbox Fitur Tambahan (Add-on)
    featuresContainer.innerHTML = '';
    Object.keys(calculatorConfig.features).forEach(key => {
        const feat = calculatorConfig.features[key];
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'feature-checkbox-card';
        checkboxWrapper.innerHTML = `
            <input type="checkbox" id="feat-${key}" value="${key}" class="calc-feature-checkbox">
            <label for="feat-${key}">
                <div class="checkbox-indicator"></div>
                <div class="feature-info">
                    <span class="feature-name">${feat.name}</span>
                    <span class="feature-price" data-usd="${feat.priceUSD}">+$${feat.priceUSD}</span>
                </div>
            </label>
        `;
        featuresContainer.appendChild(checkboxWrapper);
    });

    // Format Rupiah / Dollar
    function formatCurrency(amountUSD) {
        if (currency === 'IDR') {
            const amountIDR = amountUSD * calculatorConfig.usdToIdrRate;
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(amountIDR);
        } else {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(amountUSD);
        }
    }

    // Fungsi Utama Kalkulasi Harga
    function calculate() {
        const selectedTypeKey = projectTypeSelect.value;
        const selectedType = calculatorConfig.projectTypes[selectedTypeKey];
        if (!selectedType) return;

        let totalUSD = selectedType.basePriceUSD;
        let totalWeeks = selectedType.baseWeeks; // Untuk SMM, 'weeks' bisa berarti durasi retainer/pengerjaan

        const checkedCheckboxes = document.querySelectorAll('.calc-feature-checkbox:checked');
        const selectedFeaturesList = [];

        checkedCheckboxes.forEach(cb => {
            const featKey = cb.value;
            const feat = calculatorConfig.features[featKey];
            if (feat) {
                totalUSD += feat.priceUSD;
                totalWeeks += feat.weeks;
                selectedFeaturesList.push(feat.name);
            }
        });

        // Membuat batas bawah (min) dan batas atas (max) estimasi harga (misal ±10% margin)
        const minCost = Math.round(totalUSD * 0.95);
        const maxCost = Math.round(totalUSD * 1.10);

        // Render hasil ke UI
        costDisplay.innerHTML = `${formatCurrency(minCost)} - ${formatCurrency(maxCost)}`;
        timelineDisplay.textContent = `Est. Service Duration: ${Math.ceil(totalWeeks)} Weeks / Campaign cycle`;

        // Integrasi saat tombol booking diklik
        if (bookBtn) {
            bookBtn.onclick = function() {
                let message = `Hi, saya baru saja menyusun kustomisasi paket SMM di kalkulator website Anda:\n\n`;
                message += `• Paket Utama: ${selectedType.name}\n`;
                if (selectedFeaturesList.length > 0) {
                    message += `• Add-on Dipilih:\n  - ` + selectedFeaturesList.join('\n  - ') + `\n`;
                } else {
                    message += `• Add-on: Standar baseline\n`;
                }
                message += `• Estimasi Budget: ${formatCurrency(minCost)} - ${formatCurrency(maxCost)} (${currency})\n\n`;
                message += `Saya tertarik untuk mendiskusikan implementasi kampanye ini lebih lanjut.`;

                if (contactMessage) {
                    contactMessage.value = message;
                    contactMessage.focus();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }
            };
        }
    }

    // Event Listener
    projectTypeSelect.addEventListener('change', calculate);
    featuresContainer.addEventListener('change', (e) => {
        if (e.target && e.target.classList.contains('calc-feature-checkbox')) {
            calculate();
        }
    });

    if (usdIdrToggle) {
        usdIdrToggle.addEventListener('click', () => {
            currency = currency === 'USD' ? 'IDR' : 'USD';
            usdIdrToggle.textContent = currency === 'USD' ? 'Switch to IDR (Rp)' : 'Switch to USD ($)';
            
            // Konversi harga di label checkbox
            const prices = featuresContainer.querySelectorAll('.feature-price');
            prices.forEach(priceSpan => {
                const usdVal = parseFloat(priceSpan.getAttribute('data-usd'));
                if (currency === 'IDR') {
                    const idrVal = usdVal * calculatorConfig.usdToIdrRate;
                    priceSpan.textContent = `+Rp ${idrVal.toLocaleString('id-ID')}`;
                } else {
                    priceSpan.textContent = `+$${usdVal}`;
                }
            });
            calculate();
        });
    }

    calculate();
}

document.addEventListener('DOMContentLoaded', initCalculator);