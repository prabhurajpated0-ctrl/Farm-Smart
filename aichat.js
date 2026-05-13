// ===== AI CHATBOT =====
var chatKnowledge = {
  'rice': 'Rice grows best in clay or loamy soil with heavy water. It is a Kharif crop (Jun–Nov). Use paddy varieties like IR-36, Pusa Basmati, or Swarna. Yield: 20–25 qtl/acre. Keep 3–5cm standing water during tillering. Market price: ₹1,940–2,180/qtl (MSP).',
  'wheat': 'Wheat is a Rabi crop (Nov–Apr) that prefers loamy soil and cool temperatures. Varieties: HD-2967, PBW-343, WH-542. Yield: 15–20 qtl/acre. First irrigation at Crown Root Initiation (20–25 days). MSP: ₹2,015–2,275/qtl.',
  'maize': 'Maize grows in almost all soils. Season: Kharif or Rabi. Yield: 20–30 qtl/acre. Apply nitrogen in 3 splits. Hybrid varieties give best results. Price: ₹1,870–2,100/qtl.',
  'cotton': 'Cotton grows best in black soil during Kharif season. BT cotton is widely used. Bollworm and whitefly are major pests. MSP: ₹5,726–7,000/qtl. Harvest in stages.',
  'clay soil': 'Clay soil is heavy, holds water, and is nutrient-rich. Best for rice, wheat, sugarcane, and brinjal. pH: 6.0–7.0. Avoid waterlogging. Use raised beds for vegetables.',
  'sandy soil': 'Sandy soil drains fast and is low in nutrients. Best for groundnut, watermelon, carrot, and sweet potato. Add compost to improve fertility. Irrigate frequently in small quantities.',
  'loamy soil': 'Loamy soil is the ideal farming soil. Perfect for wheat, maize, tomato, onion, and cotton. pH: 6.0–7.0. Maintain with organic matter. Suitable for almost all crops.',
  'black soil': 'Black soil is rich in calcium and magnesium. Best for cotton, soybean, sorghum, and sunflower. pH: 7.5–8.5. Deep and moisture-retaining. Ideal for deep-rooted crops.',
  'stem borer': 'Stem borer is a major pest of rice, sugarcane, and maize. It bores into stems causing dead heart. Treatment: Apply Carbofuran granules (1kg/acre) in leaf whorls. Use Neem-based sprays as eco-friendly option.',
  'aphid': 'Aphids suck sap from leaves causing yellowing. They attack mustard, vegetables, and pulses. Treatment: Imidacloprid 0.5ml/L water, Neem oil 5ml/L, or strong water spray to dislodge them.',
  'fungal': 'Fungal diseases show as brown/black spots, powdery coating, or wilting. Treatment: Mancozeb 2.5g/L for blight, Sulfur-based spray for powdery mildew. Avoid waterlogging and improve air circulation.',
  'kharif': 'Kharif crops are sown in June–July and harvested in Oct–Nov. Major crops: Rice, Maize, Cotton, Soybean, Bajra, Groundnut, Sugarcane, Moong, Urad. These crops need monsoon rainfall.',
  'rabi': 'Rabi crops are sown in Oct–Nov and harvested in Mar–Apr. Major crops: Wheat, Mustard, Chickpea, Lentil, Barley, Pea, Cumin, Coriander. These crops need cool weather and moderate irrigation.',
  'zaid': 'Zaid crops are grown in April–June between Rabi and Kharif. Major crops: Watermelon, Muskmelon, Cucumber, Pumpkin, Moong Dal. These are short-duration crops needing warm weather.',
  'drip irrigation': 'Drip irrigation delivers water directly to plant roots through small tubes. It saves 40–70% water compared to flood irrigation. Ideal for vegetables, fruit crops, and areas with water scarcity. Initial cost is high but saves water and fertilizer.',
  'msp': 'Minimum Support Price (MSP) is the price set by the government to protect farmers from low market prices. Key MSPs 2024: Wheat ₹2,275/qtl, Rice ₹2,183/qtl, Cotton ₹7,020/qtl, Mustard ₹5,650/qtl. Check CACP website for latest values.',
  'water': 'Water saving tips: Use drip or sprinkler irrigation. Irrigate in the morning or evening. Mulch the field to reduce evaporation. Grow drought-tolerant varieties. Check soil moisture before irrigating. Collect rainwater in farm ponds.',
  'tomato': 'Tomato grows in loamy soil year-round (best Oct–Feb). Transplant at 35–40 days. Stake plants for support. Remove suckers. Major pests: Early blight, Late blight, Leaf curl virus. Yield: 120–200 qtl/acre. Market price: ₹500–3,000/qtl.',
  'onion': 'Onion needs sandy loam soil. Transplant at 6–8 weeks. Reduce irrigation 10 days before harvest. Storage life is 4–6 months. Best market price in May–June. Yield: 80–100 qtl/acre.',
  'potato': 'Potato grows in Rabi season (Oct–Mar) in loamy soil. Use certified seed tubers. Earth up at 30–35 days. Major disease: Late blight — spray Mancozeb preventively. Yield: 80–120 qtl/acre.',
  'urea': 'Urea is a nitrogen fertilizer (46% N). Apply in splits: 25% at sowing, 50% at active growth, 25% before flowering. Standard rate: 25–50 kg/acre depending on crop. Excess urea damages soil and reduces quality.',
  'neem': 'Neem-based pesticides are organic and eco-friendly. Neem oil (5ml/L water) controls aphids, mites, and fungal issues. Neem cake used as soil amendment also repels nematodes. Safe for humans and beneficial insects.'
};

function sendChat() {
  var input = document.getElementById('chatInput');
  var msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendMsg('user', '👤', msg);
  appendTyping();
  setTimeout(function () {
    removeTyping();
    var reply = getChatReply(msg);
    appendMsg('bot', '🌾', reply);
    scrollChat();
  }, 900 + Math.random() * 600);
}

function askQuick(msg) {
  document.getElementById('chatInput').value = msg;
  sendChat();
}

function getChatReply(msg) {
  var lower = msg.toLowerCase();
  for (var key in chatKnowledge) {
    if (lower.indexOf(key) !== -1) return chatKnowledge[key];
  }
  // Topic-based responses
  if (lower.indexOf('soil') !== -1) return 'There are 4 main soil types: Sandy (best for groundnut, watermelon), Clay (best for rice, wheat), Loamy (best for all crops — the ideal soil!), and Black soil (best for cotton, soybean). Use the Soil Analyzer in the Soil section above to get specific recommendations!';
  if (lower.indexOf('seed') !== -1) return 'We have 120+ seeds in our database! Categories: Cereals (rice, wheat, maize), Pulses (chana, moong, arhar), Oilseeds (mustard, groundnut, soybean), Spices (cumin, chilli, turmeric), and Cash crops (cotton, sugarcane). Check the Seeds section for full details!';
  if (lower.indexOf('weather') !== -1) return 'Go to the Weather section and enter your city to get real-time weather data and farming advice! Hot weather (>35°C) requires morning/evening irrigation. Rainy days are great for transplanting. Cool weather is perfect for Rabi crops.';
  if (lower.indexOf('price') !== -1 || lower.indexOf('market') !== -1) return 'Check the Market Prices section above for live mandi rates for all major crops! Always compare with MSP before selling. Use eNAM (enam.gov.in) or AgriMarket app for better price discovery. Direct selling to mandi avoids middlemen.';
  if (lower.indexOf('pest') !== -1 || lower.indexOf('disease') !== -1 || lower.indexOf('insect') !== -1) return 'Common agricultural pests include Stem Borer, Aphids, Bollworms, Locust swarms, Red Spider Mites, and fungal diseases like Blight and Powdery Mildew. Check the Pest Control section above for specific treatments! For organic control, use Neem oil (5ml/L water).';
  if (lower.indexOf('fertilizer') !== -1 || lower.indexOf('nutrition') !== -1) return 'Key fertilizers: Urea (Nitrogen), DAP (Phosphorus+Nitrogen), MOP (Potassium). Use NPK ratio based on soil test. Organic options: FYM (Farm Yard Manure), Compost, Green Manure, Vermicompost. Never apply excess urea as it damages soil structure.';
  if (lower.indexOf('hello') !== -1 || lower.indexOf('hi') !== -1 || lower.indexOf('namaste') !== -1) return 'Namaste! 🙏 Welcome to FarmSeed AI Assistant. I can help you with seed selection, soil types, pest control, weather guidance, market prices, fertilizers, and all farming queries. What would you like to know?';
  if (lower.indexOf('help') !== -1) return 'I can answer questions about: 🌾 Seed selection by soil/season, 🌍 Soil types and testing, 🌤️ Weather farming advice, 📈 Market prices and MSP, 🐛 Pest and disease control, 💧 Irrigation methods, 💊 Fertilizers and pesticides. Just type your question!';
  return 'That is a great farming question! I can help you with seeds, soil types, crop selection, pest control, weather tips, and market prices. Could you be more specific? For example: "Which seeds grow in clay soil?" or "How to control leaf blight in tomato?" You can also check our Seeds, Soil, and Pest sections above for detailed information.';
}

function appendMsg(type, avatar, text) {
  var win = document.getElementById('chatWindow');
  var div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.innerHTML = '<div class="chat-avatar">' + avatar + '</div><div class="chat-bubble">' + text + '</div>';
  win.appendChild(div);
  scrollChat();
}

function appendTyping() {
  var win = document.getElementById('chatWindow');
  var div = document.createElement('div');
  div.className = 'chat-msg bot chat-typing';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="chat-avatar">🌾</div><div class="chat-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
  win.appendChild(div);
  scrollChat();
}

function removeTyping() {
  var t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function scrollChat() {
  var win = document.getElementById('chatWindow');
  win.scrollTop = win.scrollHeight;
}


// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

function initAnimations() {
  document.querySelectorAll('.soil-card, .water-card, .pest-card, .crop-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ===== LIVE PRICE REFRESH =====
setInterval(() => {
  updateMarketPrices();
  renderMarketTable();
  renderBigMarketTable(
    document.getElementById('mktSearch')?.value || '',
    document.getElementById('mktCategory')?.value || 'all'
  );
}, 8000);

// ===== INIT ALL =====
window.addEventListener('DOMContentLoaded', () => {
  updateClock();
  initWeather();
  updateMarketPrices();
  renderMarketTable();
  renderBigMarketTable();
  filterSeeds();
  showCropTab('cereals', document.querySelector('.tab-btn'));
  renderPests();
  renderIrrigTable();
  renderFarmers(farmers);
  initAnimations();

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
});