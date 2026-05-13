/* ========================================
   FARMSMART – COMPLETE JAVASCRIPT
   Covers: Clock, Weather, Market Prices,
   Seeds, Crops, Pests, Water, Farmer,
   AI Chatbot, Language Switching
   ======================================== */

// ===== LANGUAGE DATA =====
const LANG = {
  en: {
    nav_soil:"Soil", nav_crop:"Crops", nav_seeds:"Seeds", nav_weather:"Weather",
    nav_pest:"Pest", nav_water:"Water", nav_market:"Market", nav_farmer:"Farmer",
    hero_tag:"Smart Agricultural Platform", hero_title:"Grow Smarter.\nHarvest Better.",
    hero_sub:"Identify the right seeds for your soil, track live prices, get weather updates and AI-powered farming guidance.",
    hero_btn1:"Segregate Seeds", hero_btn2:"Live Market Prices",
    stat1:"Crop Varieties", stat2:"Soil Types", stat3:"Wheat/Qtl (Live)",
    weather_title:"Live Weather", market_title:"Live Market Prices",
    soil_quick_title:"Quick Soil Check", soil_quick_desc:"Select your soil type to see best crops:",
    soil_sandy:"🏜️ Sandy", soil_clay:"🧱 Clay", soil_loamy:"🌱 Loamy", soil_black:"⚫ Black",
    soil_tag:"SOIL SYSTEM", soil_h2:"Know Your Soil",
    soil_p:"Understanding your soil type is the foundation of successful farming.",
    seed_tag:"SEED SEGREGATION", seed_h2:"Find the Right Seed for Your Land",
    seed_p:"Filter seeds based on your soil type, season, and water availability.",
    filter_soil:"Soil Type", filter_season:"Season", filter_water:"Water Need",
    filter_type:"Type", filter_search:"Search", all:"All",
    weather_advice_sunny:"☀️ Good weather for fieldwork. Irrigate early morning to avoid evaporation.",
    weather_advice_rain:"🌧️ Rain expected. Hold off on pesticide spraying. Check drainage channels.",
    weather_advice_cloud:"⛅ Overcast skies. Good conditions for transplanting seedlings.",
    crop_tag:"CROP PRODUCTION", crop_h2:"Crop Production Guide",
    pest_tag:"PEST & DISEASE", pest_h2:"Pest & Disease Management",
    pest_p:"Early identification and proper treatment saves your harvest.",
    pesticide_h:"Pesticide & Medicine Guide",
    pest_warn:"Excessive use of pesticides damages soil health, kills beneficial insects, and leaves harmful residues in food. Always follow recommended doses.",
    water_tag:"WATER MANAGEMENT", water_h2:"Water Scarcity Solutions",
    mkt_tag:"MARKET PRICES", mkt_h2:"Live Market & Selling Prices",
    mkt_p:"Track real-time commodity prices, MSP rates, and plan your selling strategy.",
    farmer_tag:"FARMER PROFILES", farmer_h2:"Farmer Details & Registration",
    farmer_reg:"Register Farmer", farmer_list:"Registered Farmers",
    footer_about:"Empowering farmers with smart technology, data-driven insights, and AI assistance.",
    footer_copy:"© 2025 FarmSmart. Built for Indian Farmers.",
    market_note:"* Prices are indicative. Check local mandi for exact rates."
  },
  hi: {
    nav_soil:"मिट्टी", nav_crop:"फसलें", nav_seeds:"बीज", nav_weather:"मौसम",
    nav_pest:"कीट", nav_water:"जल", nav_market:"बाज़ार", nav_farmer:"किसान",
    hero_tag:"स्मार्ट कृषि प्लेटफ़ॉर्म", hero_title:"समझदारी से उगाएं।\nबेहतर फसल काटें।",
    hero_sub:"अपनी मिट्टी के लिए सही बीज पहचानें, लाइव कीमतें देखें, मौसम अपडेट पाएं।",
    hero_btn1:"बीज चुनें", hero_btn2:"लाइव बाज़ार मूल्य",
    stat1:"फसल किस्में", stat2:"मिट्टी के प्रकार", stat3:"गेहूं/क्विंटल (लाइव)",
    weather_title:"लाइव मौसम", market_title:"लाइव बाज़ार मूल्य",
    soil_quick_title:"त्वरित मिट्टी जांच", soil_quick_desc:"बेस्ट फसल देखने के लिए मिट्टी का प्रकार चुनें:",
    soil_sandy:"🏜️ रेतीली", soil_clay:"🧱 चिकनी", soil_loamy:"🌱 दोमट", soil_black:"⚫ काली",
    soil_tag:"मिट्टी प्रणाली", soil_h2:"अपनी मिट्टी जानें",
    soil_p:"मिट्टी का प्रकार समझना सफल खेती की नींव है।",
    seed_tag:"बीज पृथक्करण", seed_h2:"अपनी भूमि के लिए सही बीज खोजें",
    seed_p:"मिट्टी के प्रकार, मौसम और जल उपलब्धता के आधार पर बीज फ़िल्टर करें।",
    filter_soil:"मिट्टी का प्रकार", filter_season:"मौसम", filter_water:"पानी की ज़रूरत",
    filter_type:"प्रकार", filter_search:"खोजें", all:"सभी",
    market_note:"* कीमतें सांकेतिक हैं। सटीक दरों के लिए स्थानीय मंडी से जांचें।"
  },
  ta: {
    nav_soil:"மண்", nav_crop:"பயிர்கள்", nav_seeds:"விதைகள்", nav_weather:"வானிலை",
    nav_pest:"பூச்சி", nav_water:"நீர்", nav_market:"சந்தை", nav_farmer:"விவசாயி",
    hero_tag:"ஸ்மார்ட் வேளாண் தளம்", hero_title:"புத்திசாலியாக விளையுங்கள்.\nசிறப்பாக அறுவடை செய்யுங்கள்.",
    hero_sub:"உங்கள் நிலத்திற்கு சரியான விதைகளை கண்டறியுங்கள், நேரடி விலைகளை கண்காணியுங்கள்.",
    hero_btn1:"விதைகளை பிரி", hero_btn2:"நேரடி சந்தை விலைகள்",
    stat1:"பயிர் வகைகள்", stat2:"மண் வகைகள்", stat3:"கோதுமை/குவிண்டால்",
    weather_title:"நேரடி வானிலை", market_title:"நேரடி சந்தை விலைகள்",
    soil_quick_title:"விரைவான மண் சரிபார்ப்பு", soil_quick_desc:"சிறந்த பயிர்களை பார்க்க மண் வகையை தேர்ந்தெடுக்கவும்:",
    soil_sandy:"🏜️ மணல்", soil_clay:"🧱 களிமண்", soil_loamy:"🌱 வண்டல்", soil_black:"⚫ கருப்பு",
    soil_tag:"மண் அமைப்பு", soil_h2:"உங்கள் மண்ணை அறியுங்கள்",
    soil_p:"மண் வகையைப் புரிந்துகொள்வது வெற்றிகரமான விவசாயத்தின் அடித்தளம்.",
    seed_tag:"விதை பிரித்தல்", seed_h2:"உங்கள் நிலத்திற்கு சரியான விதையை கண்டறியுங்கள்",
    seed_p:"மண் வகை, பருவகாலம் மற்றும் நீர் கிடைக்கும் தன்மையின் அடிப்படையில் விதைகளை வடிகட்டவும்.",
    filter_soil:"மண் வகை", filter_season:"பருவகாலம்", filter_water:"நீர் தேவை",
    filter_type:"வகை", filter_search:"தேடல்", all:"அனைத்தும்",
    market_note:"* விலைகள் சுட்டிக்காட்டல் மட்டுமே. சரியான விலைக்கு உள்ளூர் மண்டியை சரிபார்க்கவும்."
  },
  te: {
    nav_soil:"నేల", nav_crop:"పంటలు", nav_seeds:"విత్తనాలు", nav_weather:"వాతావరణం",
    nav_pest:"పురుగు", nav_water:"నీరు", nav_market:"మార్కెట్", nav_farmer:"రైతు",
    hero_tag:"స్మార్ట్ వ్యవసాయ వేదిక",
    hero_title:"తెలివిగా పెరగండి.\nమెరుగ్గా పండించండి.",
    hero_sub:"మీ నేలకు సరైన విత్తనాలను గుర్తించండి, లైవ్ ధరలను ట్రాక్ చేయండి.",
    hero_btn1:"విత్తనాలు వేరుచేయండి", hero_btn2:"లైవ్ మార్కెట్ ధరలు",
    stat1:"పంట రకాలు", stat2:"నేల రకాలు", stat3:"గోధుమ/క్వింటాల్",
    weather_title:"లైవ్ వాతావరణం", market_title:"లైవ్ మార్కెట్ ధరలు",
    soil_quick_title:"త్వరిత నేల తనిఖీ", soil_quick_desc:"ఉత్తమ పంటలు చూడటానికి నేల రకాన్ని ఎంచుకోండి:",
    soil_sandy:"🏜️ ఇసుక", soil_clay:"🧱 సీమ", soil_loamy:"🌱 మెట్ట", soil_black:"⚫ నల్ల",
    soil_tag:"నేల వ్యవస్థ", soil_h2:"మీ నేలను తెలుసుకోండి",
    soil_p:"నేల రకాన్ని అర్థం చేసుకోవడం విజయవంతమైన వ్యవసాయానికి పునాది.",
    seed_tag:"విత్తన వేరీకరణ", seed_h2:"మీ భూమికి సరైన విత్తనం కనుగొనండి",
    seed_p:"నేల రకం, సీజన్ మరియు నీటి లభ్యత ఆధారంగా విత్తనాలను ఫిల్టర్ చేయండి.",
    filter_soil:"నేల రకం", filter_season:"సీజన్", filter_water:"నీటి అవసరం",
    filter_type:"రకం", filter_search:"వెతుకు", all:"అన్నీ",
    market_note:"* ధరలు సూచనప్రాయంగా మాత్రమే. ఖచ్చితమైన రేట్లకు స్థానిక మండి తనిఖీ చేయండి."
  },
  kn: {
    nav_soil:"ಮಣ್ಣು", nav_crop:"ಬೆಳೆಗಳು", nav_seeds:"ಬೀಜಗಳು", nav_weather:"ಹವಾಮಾನ",
    nav_pest:"ಕೀಟ", nav_water:"ನೀರು", nav_market:"ಮಾರುಕಟ್ಟೆ", nav_farmer:"ರೈತ",
    hero_tag:"ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವೇದಿಕೆ",
    hero_title:"ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಬೆಳೆಸಿ.\nಉತ್ತಮವಾಗಿ ಕೊಯ್ಲು ಮಾಡಿ.",
    hero_sub:"ನಿಮ್ಮ ಮಣ್ಣಿಗೆ ಸರಿಯಾದ ಬೀಜಗಳನ್ನು ಗುರುತಿಸಿ, ಲೈವ್ ಬೆಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    hero_btn1:"ಬೀಜ ವಿಂಗಡಿಸಿ", hero_btn2:"ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    stat1:"ಬೆಳೆ ತಳಿಗಳು", stat2:"ಮಣ್ಣಿನ ವಿಧಗಳು", stat3:"ಗೋಧಿ/ಕ್ವಿಂಟಾಲ್",
    weather_title:"ಲೈವ್ ಹವಾಮಾನ", market_title:"ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    soil_quick_title:"ತ್ವರಿತ ಮಣ್ಣು ಪರಿಶೀಲನೆ", soil_quick_desc:"ಅತ್ಯುತ್ತಮ ಬೆಳೆಗಳನ್ನು ನೋಡಲು ಮಣ್ಣಿನ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ:",
    soil_sandy:"🏜️ ಮರಳು", soil_clay:"🧱 ಜೇಡಿ", soil_loamy:"🌱 ಮೆಕ್ಕಲು", soil_black:"⚫ ಕಪ್ಪು",
    soil_tag:"ಮಣ್ಣಿನ ವ್ಯವಸ್ಥೆ", soil_h2:"ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ",
    soil_p:"ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಯಶಸ್ವಿ ಕೃಷಿಯ ಆಧಾರ.",
    seed_tag:"ಬೀಜ ವಿಂಗಡಣೆ", seed_h2:"ನಿಮ್ಮ ಭೂಮಿಗೆ ಸರಿಯಾದ ಬೀಜ ಕಂಡುಕೊಳ್ಳಿ",
    seed_p:"ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಋತು ಮತ್ತು ನೀರಿನ ಲಭ್ಯತೆಯ ಆಧಾರದ ಮೇಲೆ ಬೀಜಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ.",
    filter_soil:"ಮಣ್ಣಿನ ಪ್ರಕಾರ", filter_season:"ಋತು", filter_water:"ನೀರಿನ ಅಗತ್ಯ",
    filter_type:"ಪ್ರಕಾರ", filter_search:"ಹುಡುಕಿ", all:"ಎಲ್ಲಾ",
    market_note:"* ಬೆಲೆಗಳು ಸೂಚಕ ಮಾತ್ರ. ನಿಖರ ದರಗಳಿಗೆ ಸ್ಥಳೀಯ ಮಂಡಿಯನ್ನು ಪರಿಶೀಲಿಸಿ."
  },
  mr: {
    nav_soil:"माती", nav_crop:"पिके", nav_seeds:"बियाणे", nav_weather:"हवामान",
    nav_pest:"कीड", nav_water:"पाणी", nav_market:"बाजार", nav_farmer:"शेतकरी",
    hero_tag:"स्मार्ट कृषी व्यासपीठ",
    hero_title:"हुशारीने पिकवा.\nचांगले काढणी करा.",
    hero_sub:"तुमच्या जमिनीसाठी योग्य बियाणे ओळखा, थेट किंमती ट्रॅक करा.",
    hero_btn1:"बियाणे वेगळे करा", hero_btn2:"थेट बाजार किंमती",
    stat1:"पीक वाण", stat2:"माती प्रकार", stat3:"गहू/क्विंटल",
    weather_title:"थेट हवामान", market_title:"थेट बाजार किंमती",
    soil_quick_title:"त्वरित माती तपासणी", soil_quick_desc:"सर्वोत्तम पिके पाहण्यासाठी माती प्रकार निवडा:",
    soil_sandy:"🏜️ वाळू", soil_clay:"🧱 चिकणमाती", soil_loamy:"🌱 चिकणमाती-वाळू", soil_black:"⚫ काळी",
    soil_tag:"माती प्रणाली", soil_h2:"तुमची माती जाणून घ्या",
    soil_p:"माती प्रकार समजणे हे यशस्वी शेतीचा पाया आहे.",
    seed_tag:"बियाणे विभाजन", seed_h2:"तुमच्या जमिनीसाठी योग्य बियाणे शोधा",
    seed_p:"माती प्रकार, हंगाम आणि पाण्याच्या उपलब्धतेनुसार बियाणे फिल्टर करा.",
    filter_soil:"माती प्रकार", filter_season:"हंगाम", filter_water:"पाण्याची गरज",
    filter_type:"प्रकार", filter_search:"शोध", all:"सर्व",
    market_note:"* किंमती सूचक आहेत. अचूक दरांसाठी स्थानिक मंडीशी संपर्क साधा."
  }
};
let currentLang = 'en';

function switchLang(lang) {
  currentLang = lang;
  const t = LANG[lang] || LANG.en;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key]) el.textContent = t[key];
  });
}

// ===== LIVE CLOCK =====
function updateClock() {
  const now = new Date();
  document.getElementById('liveClock').textContent = now.toLocaleTimeString('en-IN');
  document.getElementById('liveDate').textContent = now.toLocaleDateString('en-IN', {weekday:'short', day:'numeric', month:'short', year:'numeric'});
}
setInterval(updateClock, 1000);
updateClock();

// ===== MOBILE NAV =====
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== WEATHER SYSTEM =====
const weatherProfiles = [
  { icon:'☀️', desc:'Sunny & Clear', temp:32, humidity:60, wind:12, vis:10, feels:34, rain:0 },
  { icon:'⛅', desc:'Partly Cloudy', temp:28, humidity:72, wind:15, vis:8, feels:29, rain:5 },
  { icon:'🌧️', desc:'Light Rain', temp:24, humidity:88, wind:20, vis:5, feels:23, rain:40 },
  { icon:'⛈️', desc:'Thunderstorm', temp:22, humidity:92, wind:35, vis:3, feels:21, rain:80 },
  { icon:'🌤️', desc:'Mostly Sunny', temp:30, humidity:65, wind:10, vis:10, feels:32, rain:0 },
  { icon:'🌥️', desc:'Overcast', temp:26, humidity:78, wind:18, vis:7, feels:27, rain:20 },
  { icon:'🌈', desc:'Clearing Showers', temp:25, humidity:82, wind:14, vis:9, feels:24, rain:15 }
];
const forecastEmojis = ['☀️','🌤️','⛅','🌧️','🌦️','☀️','⛅'];
const forecastDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const forecastTemps = [32,29,26,24,28,31,30];

function initWeather() {
  // Try geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    }, () => { loadDemoWeather(); });
  } else { loadDemoWeather(); }
}

function fetchWeatherByCoords(lat, lon) {
  // Demo weather with realistic India-based data
  // In production: use OpenWeatherMap API
  // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_KEY&units=metric`)
  const w = weatherProfiles[Math.floor(Math.random() * weatherProfiles.length)];
  w.temp = Math.round(w.temp + (Math.random()-0.5)*4);
  renderWeather(w, `${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E`);
}

function loadDemoWeather() {
  const w = weatherProfiles[Math.floor(Math.random() * weatherProfiles.length)];
  renderWeather(w, 'Karnataka, India');
}

function renderWeather(w, loc) {
  document.getElementById('weatherIcon').textContent = w.icon;
  document.getElementById('weatherTemp').textContent = `${w.temp}°C`;
  document.getElementById('weatherDesc').textContent = w.desc;
  document.getElementById('weatherLoc').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${loc}`;
  document.getElementById('wHumidity').textContent = `${w.humidity}%`;
  document.getElementById('wWind').textContent = `${w.wind} km/h`;
  document.getElementById('wVis').textContent = `${w.vis} km`;
  document.getElementById('wFeels').textContent = `${w.feels}°C`;

  // Forecast
  const fc = document.getElementById('weatherForecast');
  const today = new Date().getDay();
  fc.innerHTML = forecastDays.slice(0,5).map((d,i) => `
    <div class="forecast-day">
      <div class="f-day">${forecastDays[(today+i)%7]}</div>
      <div class="f-icon">${forecastEmojis[i]}</div>
      <div class="f-temp">${forecastTemps[i]}°</div>
    </div>`).join('');

  // Farming advice
  const t = LANG[currentLang] || LANG.en;
  let advice = t.weather_advice_sunny || '☀️ Good weather for fieldwork.';
  if (w.rain > 30) advice = t.weather_advice_rain || '🌧️ Rain expected. Hold off on spraying.';
  else if (w.rain > 5) advice = t.weather_advice_cloud || '⛅ Overcast. Good for transplanting.';
  document.getElementById('weatherAdvice').textContent = advice;
}

// Refresh weather every 10 minutes
setInterval(initWeather, 600000);

// ===== MARKET PRICES DATA =====
const MARKET_DATA = [
  { name:'Wheat', emoji:'🌾', cat:'cereal', base:2150, msp:2275, unit:'Qtl' },
  { name:'Rice (Paddy)', emoji:'🍚', cat:'cereal', base:2183, msp:2300, unit:'Qtl' },
  { name:'Maize', emoji:'🌽', cat:'cereal', base:1870, msp:2090, unit:'Qtl' },
  { name:'Sorghum (Jowar)', emoji:'🌿', cat:'cereal', base:3180, msp:3371, unit:'Qtl' },
  { name:'Pearl Millet (Bajra)', emoji:'🌿', cat:'cereal', base:2625, msp:2500, unit:'Qtl' },
  { name:'Tur (Arhar)', emoji:'🫘', cat:'pulse', base:7200, msp:7550, unit:'Qtl' },
  { name:'Moong (Green Gram)', emoji:'🫛', cat:'pulse', base:8500, msp:8682, unit:'Qtl' },
  { name:'Urad (Black Gram)', emoji:'🫘', cat:'pulse', base:7200, msp:7400, unit:'Qtl' },
  { name:'Chana (Chickpea)', emoji:'🫘', cat:'pulse', base:5440, msp:5440, unit:'Qtl' },
  { name:'Lentil (Masur)', emoji:'🫘', cat:'pulse', base:5500, msp:6425, unit:'Qtl' },
  { name:'Tomato', emoji:'🍅', cat:'vegetable', base:800, msp:null, unit:'Qtl' },
  { name:'Onion', emoji:'🧅', cat:'vegetable', base:1200, msp:null, unit:'Qtl' },
  { name:'Potato', emoji:'🥔', cat:'vegetable', base:900, msp:null, unit:'Qtl' },
  { name:'Brinjal (Eggplant)', emoji:'🍆', cat:'vegetable', base:600, msp:null, unit:'Qtl' },
  { name:'Cabbage', emoji:'🥬', cat:'vegetable', base:500, msp:null, unit:'Qtl' },
  { name:'Cauliflower', emoji:'🥦', cat:'vegetable', base:700, msp:null, unit:'Qtl' },
  { name:'Groundnut', emoji:'🥜', cat:'oilseed', base:5850, msp:6783, unit:'Qtl' },
  { name:'Soybean', emoji:'🫛', cat:'oilseed', base:4600, msp:4892, unit:'Qtl' },
  { name:'Sunflower', emoji:'🌻', cat:'oilseed', base:5800, msp:7280, unit:'Qtl' },
  { name:'Mustard (Rapeseed)', emoji:'🌼', cat:'oilseed', base:5650, msp:5950, unit:'Qtl' },
  { name:'Cotton (Medium)', emoji:'🌸', cat:'oilseed', base:7020, msp:7121, unit:'Qtl' },
  { name:'Sugarcane', emoji:'🎋', cat:'cereal', base:315, msp:340, unit:'Tonne' },
  { name:'Turmeric', emoji:'🌿', cat:'spice', base:14000, msp:null, unit:'Qtl' },
  { name:'Chilli (Dry)', emoji:'🌶️', cat:'spice', base:9000, msp:null, unit:'Qtl' },
  { name:'Coriander', emoji:'🌿', cat:'spice', base:6500, msp:null, unit:'Qtl' },
  { name:'Garlic', emoji:'🧄', cat:'spice', base:8000, msp:null, unit:'Qtl' },
  { name:'Ginger', emoji:'🫚', cat:'spice', base:7500, msp:null, unit:'Qtl' },
  { name:'Banana', emoji:'🍌', cat:'oilseed', base:1200, msp:null, unit:'Qtl' },
  { name:'Mango', emoji:'🥭', cat:'oilseed', base:2500, msp:null, unit:'Qtl' },
];

let marketPrices = MARKET_DATA.map(item => ({
  ...item,
  current: item.base,
  prev: item.base,
  min: Math.round(item.base * 0.92),
  max: Math.round(item.base * 1.08)
}));

function updateMarketPrices() {
  marketPrices = marketPrices.map(item => {
    const change = (Math.random() - 0.48) * item.base * 0.012;
    const prev = item.current;
    const current = Math.max(item.base * 0.8, Math.min(item.base * 1.2, item.current + change));
    return { ...item, prev, current: Math.round(current) };
  });
}

function renderMarketTable() {
  const top = marketPrices.slice(0, 8);
  const body = document.getElementById('marketBody');
  if (!body) return;
  body.innerHTML = top.map(item => {
    const diff = item.current - item.prev;
    const cls = diff > 0 ? 'price-up' : diff < 0 ? 'price-down' : '';
    const sign = diff > 0 ? '+' : '';
    return `<tr>
      <td>${item.emoji} ${item.name}</td>
      <td><strong>₹${item.current.toLocaleString('en-IN')}</strong></td>
      <td class="${cls}">${sign}${Math.round(diff)}</td>
      <td style="color:#888">₹${item.msp ? item.msp.toLocaleString('en-IN') : '-'}</td>
    </tr>`;
  }).join('');

  // Update ticker
  const ticker = document.getElementById('marketTicker');
  if (ticker) {
    ticker.innerHTML = `<span class="ticker-inner">${marketPrices.map(item => {
      const diff = item.current - item.prev;
      const arrow = diff > 0 ? '▲' : diff < 0 ? '▼' : '●';
      const col = diff > 0 ? '#a5d6a7' : diff < 0 ? '#ef9a9a' : '#fff9c4';
      return `<span style="color:${col}; margin-right:20px;">${item.emoji} ${item.name}: ₹${item.current.toLocaleString('en-IN')} ${arrow}</span>`;
    }).join('')}</span>`;
  }

  // Update hero live price
  const wheat = marketPrices.find(m => m.name === 'Wheat');
  if (wheat) document.getElementById('livePrice').textContent = '₹' + wheat.current.toLocaleString('en-IN');
}

function renderBigMarketTable(filter = '', category = 'all') {
  const body = document.getElementById('bigMarketBody');
  if (!body) return;
  const filtered = marketPrices.filter(item => {
    const matchCat = category === 'all' || item.cat === category;
    const matchSearch = item.name.toLowerCase().includes(filter.toLowerCase());
    return matchCat && matchSearch;
  });
  body.innerHTML = filtered.map(item => {
    const diff = item.current - item.prev;
    const trend = diff > 5 ? '<span class="trend-up">▲ Rising</span>' : diff < -5 ? '<span class="trend-down">▼ Falling</span>' : '<span class="trend-stable">● Stable</span>';
    return `<tr>
      <td><strong>${item.emoji} ${item.name}</strong></td>
      <td>₹${item.min.toLocaleString('en-IN')}</td>
      <td>₹${item.max.toLocaleString('en-IN')}</td>
      <td><strong>₹${item.current.toLocaleString('en-IN')}</strong></td>
      <td>${item.msp ? '₹' + item.msp.toLocaleString('en-IN') : '<span style="color:#aaa">N/A</span>'}</td>
      <td>${trend}</td>
    </tr>`;
  }).join('');
}

function filterMarket() {
  const q = document.getElementById('mktSearch')?.value || '';
  const cat = document.getElementById('mktCategory')?.value || 'all';
  renderBigMarketTable(q, cat);
}

// ===========================
// SEED SEGREGATION TOOL
// ===========================
var seedData = {
  sandy: {
    low: { rain: ['🌻 Groundnut', '🌾 Bajra (Pearl Millet)', '🌿 Moong Dal'], irrigation: ['🥜 Peanuts', '🌾 Jowar', '🌵 Watermelon'], drip: ['🍉 Watermelon', '🥒 Cucumber', '🍋 Lemon'] },
    moderate: { rain: ['🌽 Maize', '🌾 Bajra', '🌿 Sesame'], irrigation: ['🍅 Tomato', '🌽 Sweet Corn', '🥕 Carrot'], drip: ['🍓 Strawberry', '🥕 Carrot', '🧅 Onion'] },
    high: { rain: ['🌾 Maize', '🌿 Cowpea', '🌱 Green Gram'], irrigation: ['🥦 Brinjal', '🍅 Tomato', '🌽 Maize'], drip: ['🥦 Cauliflower', '🍅 Tomato', '🥬 Lettuce'] }
  },
  clay: {
    low: { rain: ['🌾 Wheat', '🌿 Lentil', '🥜 Chickpea'], irrigation: ['🌾 Wheat', '🌻 Sunflower', '🌿 Mustard'], drip: ['🍅 Tomato', '🥦 Broccoli', '🌿 Mustard'] },
    moderate: { rain: ['🌾 Rice', '🌿 Jute', '🌱 Sugarcane'], irrigation: ['🌾 Rice', '🍅 Tomato', '🌽 Maize'], drip: ['🥦 Cauliflower', '🧅 Onion', '🥕 Carrot'] },
    high: { rain: ['🌾 Rice', '🌿 Jute', '🌱 Taro'], irrigation: ['🌾 Rice', '🌿 Sugarcane', '🍌 Banana'], drip: ['🍌 Banana', '🌾 Rice', '🌿 Sugarcane'] }
  },
  loamy: {
    low: { rain: ['🌾 Wheat', '🌻 Sunflower', '🌿 Mustard'], irrigation: ['🥬 Spinach', '🍅 Tomato', '🌿 Fenugreek'], drip: ['🍅 Tomato', '🥒 Cucumber', '🫑 Capsicum'] },
    moderate: { rain: ['🌾 Wheat', '🌽 Maize', '🌿 Soybean'], irrigation: ['🥦 Cabbage', '🍅 Tomato', '🧅 Onion'], drip: ['🥬 Lettuce', '🫑 Bell Pepper', '🥦 Broccoli'] },
    high: { rain: ['🌾 Rice', '🌿 Soybean', '🌽 Maize'], irrigation: ['🍅 Tomato', '🥦 Cabbage', '🌿 Ginger'], drip: ['🌿 Turmeric', '🧄 Garlic', '🫚 Cardamom'] }
  },
  black: {
    low: { rain: ['🌿 Cotton', '🌾 Jowar', '🌱 Pigeon Pea'], irrigation: ['🌿 Cotton', '🌾 Wheat', '🌻 Sunflower'], drip: ['🌿 Cotton', '🍅 Tomato', '🧅 Onion'] },
    moderate: { rain: ['🌿 Cotton', '🌾 Sorghum', '🌱 Soybean'], irrigation: ['🌿 Cotton', '🌽 Maize', '🍅 Tomato'], drip: ['🧅 Onion', '🍅 Tomato', '🥦 Cauliflower'] },
    high: { rain: ['🌾 Rice', '🌿 Sugarcane', '🌱 Cotton'], irrigation: ['🌾 Rice', '🌿 Sugarcane', '🌽 Maize'], drip: ['🌿 Sugarcane', '🍌 Banana', '🌾 Rice'] }
  }
};

var seasonTips = {
  kharif: '🌧️ Kharif Season (June–Oct): Best for rain-fed crops. Ensure field drainage.',
  rabi: '❄️ Rabi Season (Nov–Apr): Cool & dry. Ideal for wheat, mustard, and pulses.',
  zaid: '☀️ Zaid Season (Mar–Jun): Hot & short. Good for watermelon, cucumber, and fodder.'
};

function analyzeSeed() {
  var soil = document.getElementById('soilType').value;
  var rainfall = document.getElementById('rainfall').value;
  var water = document.getElementById('water').value;
  var season = document.getElementById('season').value;
  var area = document.getElementById('landArea').value;
  var resultDiv = document.getElementById('toolResult');

  if (!soil || !rainfall || !water || !season || !area) {
    resultDiv.innerHTML = '<div class="result-placeholder"><span>⚠️</span><p style="color:#e53935;">Please fill all fields before analyzing.</p></div>';
    return;
  }

  var crops = [];
  if (seedData[soil] && seedData[soil][rainfall] && seedData[soil][rainfall][water]) {
    crops = seedData[soil][rainfall][water];
  } else {
    crops = ['🌾 Wheat', '🌽 Maize', '🌿 Soybean'];
  }

  var tipSeason = seasonTips[season] || '';
  var soilNames = { sandy: 'Sandy Soil', clay: 'Clay Soil', loamy: 'Loamy Soil', black: 'Black Soil' };
  var rainfallNames = { low: 'Low Rainfall', moderate: 'Moderate Rainfall', high: 'High Rainfall' };
  var waterNames = { rain: 'Rain-fed', irrigation: 'Irrigated', drip: 'Drip Irrigation' };

  var cropDescs = {
    '🌾 Wheat': 'Best sown in rows. Use certified seeds. Apply nitrogen fertilizer at sowing.',
    '🌽 Maize': 'Requires well-drained soil. Space 60cm apart. Irrigate every 10 days.',
    '🌾 Rice': 'Grows well in water-logged clay soil. Transplant seedlings after 25 days.',
    '🌿 Soybean': 'Fix atmospheric nitrogen. Rotate with cereals. Sow 3–4 cm deep.',
    '🌻 Sunflower': 'Drought tolerant. Deep rooted. Harvest when back of head turns yellow.',
    '🌿 Cotton': 'Needs warm climate. Apply potassium fertilizer. Watch for bollworm.',
    '🥜 Groundnut': 'Needs sandy loam. Do not over-water. Harvest when leaves turn yellow.',
    '🍅 Tomato': 'Needs regular watering. Stake tall varieties. Watch for leaf curl virus.',
    '🧅 Onion': 'Plant bulbs 10cm apart. Reduce water before harvest for better storage.',
    '🌿 Sugarcane': 'Needs deep, well-drained soil. Long growing period (10–12 months).',
  };

  var html = '<div class="result-box">';
  html += '<h3>✅ Recommended Crops for Your Land</h3>';
  html += '<p style="font-size:0.88rem;color:#777;margin-bottom:16px;">Based on: <strong>' + soilNames[soil] + '</strong> · <strong>' + rainfallNames[rainfall] + '</strong> · <strong>' + waterNames[water] + '</strong> · <strong>' + area + ' Acres</strong></p>';

  crops.forEach(function (crop) {
    var desc = cropDescs[crop] || 'Suitable for your land conditions. Follow local agricultural guidelines.';
    html += '<div class="crop-rec"><h4>' + crop + '</h4><p>' + desc + '</p></div>';
  });

  html += '<div class="alert-box">📅 ' + tipSeason + '</div>';
  html += '<div class="alert-box" style="margin-top:8px;background:#e8f5e9;border-color:var(--green-light);color:#1a4a1f;">🌱 Estimated seeds needed for ' + area + ' acres: <strong>' + Math.ceil(area * 8) + '–' + Math.ceil(area * 12) + ' kg</strong>. Consult your local Krishi Kendra for certified seeds.</div>';
  html += '</div>';

  resultDiv.innerHTML = html;
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
// ===========================
// MODAL CONTENT
// ===========================
var modalContent = {
  soil: {
    title: '🪨 Soil System',
    body: '<p>Soil fertility is the backbone of successful farming. Different soil types support different crops and need different care.</p>' +
      '<ul><li><strong>Sandy Soil:</strong> Good drainage, low nutrients. Best for groundnut, watermelon, bajra. Add compost to improve fertility.</li>' +
      '<li><strong>Clay Soil:</strong> High water retention, nutrient-rich. Ideal for rice and wheat. Needs drainage management.</li>' +
      '<li><strong>Loamy Soil:</strong> Best overall soil — balanced drainage and nutrients. Supports most crops including vegetables and cereals.</li>' +
      '<li><strong>Black Soil (Regur):</strong> High clay content, self-ploughing. Excellent for cotton, sorghum, and soybean.</li></ul>' +
      '<p>🔬 <strong>Soil Testing Tip:</strong> Test your soil every 2–3 years for pH, nitrogen, phosphorus, and potassium levels. Contact your nearest Krishi Vigyan Kendra.</p>'
  },
  crop: {
    title: '🌾 Crop Production',
    body: '<p>Maximizing crop yield requires quality seeds, proper planting techniques, and timely management.</p>' +
      '<ul><li>Use certified seeds from government-approved seed centers or Krishi Kendra.</li>' +
      '<li>Proper seed treatment with fungicides before sowing prevents early disease.</li>' +
      '<li>Follow recommended spacing to avoid competition for nutrients and sunlight.</li>' +
      '<li>Apply fertilizers in splits — basal + top dressing — for better absorption.</li>' +
      '<li>Timely irrigation at critical growth stages significantly improves yield.</li></ul>' +
      '<p>🌱 Key crops: Rice, Wheat, Maize, Vegetables, Oilseeds, Pulses, and Cash Crops like Cotton and Sugarcane.</p>'
  },
  weather: {
    title: '☁️ Weather Conditions',
    body: '<p>Weather is one of the biggest factors affecting farming decisions. Climate-smart farming helps manage weather risks.</p>' +
      '<ul><li>Monitor daily weather forecasts via the India Meteorological Department (IMD) or Kisan App.</li>' +
      '<li>Plan sowing and harvesting around predicted rainfall patterns.</li>' +
      '<li>Use crop insurance (PMFBY) to protect against drought or flood losses.</li>' +
      '<li>Build farm ponds to store rainwater for dry spells.</li>' +
      '<li>Use shade nets and mulching to manage extreme heat stress.</li></ul>' +
      '<p>🌡️ Temperature range for most crops: 20°C–35°C. Extreme cold or heat can cause crop failure.</p>'
  },
  pest: {
    title: '🐛 Pest & Disease Attacks',
    body: '<p>Pests and diseases can destroy up to 30–40% of crop yields if not managed on time.</p>' +
      '<ul><li><strong>Insects:</strong> Aphids, armyworms, borers, hoppers — spray recommended insecticides.</li>' +
      '<li><strong>Fungal Diseases:</strong> Blight, rust, wilt — use fungicide sprays and resistant varieties.</li>' +
      '<li><strong>Locust Attacks:</strong> Report to the District Agriculture Office immediately.</li>' +
      '<li>Use Integrated Pest Management (IPM): combine biological, cultural, and chemical controls.</li>' +
      '<li>Neem-based sprays are eco-friendly and effective for mild infestations.</li></ul>' +
      '<p>📞 Contact the nearest Agriculture Extension Officer for free pest identification services.</p>'
  },
  water: {
    title: '💧 Water Scarcity Solutions',
    body: '<p>Water is becoming scarce. Efficient water use is critical for sustainable farming.</p>' +
      '<ul><li><strong>Drip Irrigation:</strong> Delivers water directly to roots. Saves 40–50% water vs flood irrigation.</li>' +
      '<li><strong>Sprinkler Systems:</strong> Good for field crops. Reduces soil erosion.</li>' +
      '<li><strong>Farm Ponds:</strong> Collect rainwater for use in dry seasons.</li>' +
      '<li><strong>Mulching:</strong> Reduce evaporation from soil surface by 30–40%.</li>' +
      '<li>Grow drought-tolerant varieties during water-scarce periods.</li></ul>' +
      '<p>💡 Government schemes like PM Krishi Sinchai Yojana provide subsidies for drip and sprinkler systems.</p>'
  },
  market: {
    title: '📈 Marketing Price Insights',
    body: '<p>Getting fair prices for produce is a major challenge for farmers. Understanding market dynamics helps.</p>' +
      '<ul><li>Sell through APMC (Agriculture Produce Market Committee) regulated markets for fair prices.</li>' +
      '<li>Use the eNAM platform (National Agriculture Market) to access online mandi prices.</li>' +
      '<li>Form Farmer Producer Organizations (FPOs) for collective bargaining power.</li>' +
      '<li>Avoid distress selling immediately after harvest when prices are lowest.</li>' +
      '<li>Store produce in warehouses and sell when prices improve.</li></ul>' +
      '<p>📱 Check daily mandi prices on the Agmarknet portal or Kisan Suvidha app.</p>'
  },
  selling: {
    title: '💰 Selling Price Strategies',
    body: '<p>Setting the right selling price ensures you cover costs and earn a fair profit.</p>' +
      '<ul><li>Calculate total production cost including seeds, fertilizers, labor, irrigation, and transport.</li>' +
      '<li>Add a minimum 20–25% profit margin over your total cost.</li>' +
      '<li>Direct selling to consumers at local markets or via WhatsApp groups improves margins.</li>' +
      '<li>Consider value-added products (dried, packed, processed) for higher returns.</li>' +
      '<li>Use cold storage to extend shelf life and sell at better prices later.</li></ul>' +
      '<p>🏪 Direct selling, e-commerce platforms, and restaurant supply contracts eliminate middlemen and increase farmer income.</p>'
  },
  pesticide: {
    title: '🧪 Pesticides & Medicine Guide',
    body: '<p>Correct use of pesticides protects crops while minimizing harm to soil, water, and human health.</p>' +
      '<ul><li>Always read labels and follow dosage recommendations strictly.</li>' +
      '<li>Wear protective gear (gloves, mask, goggles) during application.</li>' +
      '<li>Do not spray on windy days or near water bodies.</li>' +
      '<li>Maintain a pre-harvest interval (PHI) — stop spraying before harvest.</li>' +
      '<li>Rotate chemicals to prevent pest resistance.</li>' +
      '<li>Prefer bio-pesticides (neem oil, Trichoderma) wherever possible.</li></ul>' +
      '<p>⚠️ Excess use of pesticides harms soil microbes, earthworms, and bees. Follow Integrated Pest Management (IPM) principles for long-term soil health.</p>'
  }
};

function openModal(type) {
  var data = modalContent[type];
  document.getElementById('modalContent').innerHTML = '<h2>' + data.title + '</h2>' + data.body;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});




// ===== CROP PRODUCTION DATA =====
const CROP_DATA = {
  cereals: [
    { name:'Rice', icon:'🍚', sub:'Oryza sativa', season:'Kharif', soil:'Clay/Loamy', stages:5, activeStages:3, water:'High', npk:'120-60-60 kg/ha', pest:'BPH, Stem Borer', yield:'40-60 Qtl/ha' },
    { name:'Wheat', icon:'🌾', sub:'Triticum aestivum', season:'Rabi', soil:'Loamy/Clay', stages:5, activeStages:2, water:'Medium', npk:'120-60-40 kg/ha', pest:'Rust, Aphids', yield:'40-55 Qtl/ha' },
    { name:'Maize', icon:'🌽', sub:'Zea mays', season:'Kharif', soil:'Loamy/Sandy', stages:5, activeStages:4, water:'Medium', npk:'120-60-40 kg/ha', pest:'FAW, Aphids', yield:'25-35 Qtl/ha' },
    { name:'Bajra', icon:'🌿', sub:'Pennisetum glaucum', season:'Kharif', soil:'Sandy/Loamy', stages:5, activeStages:1, water:'Low', npk:'80-40-40 kg/ha', pest:'Downy Mildew', yield:'10-20 Qtl/ha' },
    { name:'Sugarcane', icon:'🎋', sub:'Saccharum officinarum', season:'Annual', soil:'Loamy/Black', stages:5, activeStages:5, water:'High', npk:'250-60-120 kg/ha', pest:'Borers, Whitefly', yield:'600-700 Qtl/ha' },
  ],
  vegetables: [
    { name:'Tomato', icon:'🍅', sub:'Solanum lycopersicum', season:'Rabi/Kharif', soil:'Loamy/Sandy', stages:5, activeStages:3, water:'Medium', npk:'200-100-100 kg/ha', pest:'TSWV, Aphids', yield:'200-400 Qtl/ha' },
    { name:'Onion', icon:'🧅', sub:'Allium cepa', season:'Rabi', soil:'Loamy/Black', stages:5, activeStages:2, water:'Medium', npk:'100-50-50 kg/ha', pest:'Thrips, Purple Blotch', yield:'200-250 Qtl/ha' },
    { name:'Potato', icon:'🥔', sub:'Solanum tuberosum', season:'Rabi', soil:'Sandy/Loamy', stages:5, activeStages:4, water:'Medium', npk:'180-80-100 kg/ha', pest:'Late Blight, Aphids', yield:'250-400 Qtl/ha' },
    { name:'Brinjal', icon:'🍆', sub:'Solanum melongena', season:'Kharif', soil:'Loamy/Clay', stages:5, activeStages:3, water:'Medium', npk:'150-75-75 kg/ha', pest:'Shoot Borer, Spider Mite', yield:'200-250 Qtl/ha' },
    { name:'Okra', icon:'🫑', sub:'Abelmoschus esculentus', season:'Kharif', soil:'Loamy/Sandy', stages:5, activeStages:2, water:'Medium', npk:'120-60-40 kg/ha', pest:'Jassids, Yellow Vein Mosaic', yield:'100-150 Qtl/ha' },
    { name:'Cabbage', icon:'🥬', sub:'Brassica oleracea', season:'Rabi', soil:'Loamy/Clay', stages:5, activeStages:1, water:'High', npk:'200-100-100 kg/ha', pest:'Diamond Back Moth', yield:'200-300 Qtl/ha' },
  ],
  fruits: [
    { name:'Mango', icon:'🥭', sub:'Mangifera indica', season:'Perennial', soil:'Loamy/Sandy', stages:5, activeStages:4, water:'Low-Med', npk:'500-250-500 g/tree', pest:'Mango Hopper, Mealybug', yield:'2-3 Tonne/tree/yr' },
    { name:'Banana', icon:'🍌', sub:'Musa acuminata', season:'Perennial', soil:'Loamy/Black', stages:5, activeStages:3, water:'High', npk:'200-60-300 g/plant', pest:'Sigatoka, Wilt', yield:'25-45 Tonne/ha' },
    { name:'Papaya', icon:'🍑', sub:'Carica papaya', season:'Perennial', soil:'Loamy/Sandy', stages:5, activeStages:2, water:'Medium', npk:'200-200-250 g/plant', pest:'Ring Spot Virus, Aphids', yield:'40-60 Tonne/ha' },
    { name:'Watermelon', icon:'🍉', sub:'Citrullus lanatus', season:'Zaid', soil:'Sandy/Loamy', stages:5, activeStages:3, water:'Medium', npk:'100-50-50 kg/ha', pest:'Red Pumpkin Beetle', yield:'200-300 Qtl/ha' },
  ],
  pulses: [
    { name:'Tur (Arhar)', icon:'🫘', sub:'Cajanus cajan', season:'Kharif', soil:'Black/Loamy', stages:5, activeStages:2, water:'Low', npk:'20-50-0 kg/ha', pest:'Pod Borer, Wilt', yield:'8-12 Qtl/ha' },
    { name:'Chana', icon:'🫘', sub:'Cicer arietinum', season:'Rabi', soil:'Loamy/Black', stages:5, activeStages:1, water:'Low', npk:'20-40-0 kg/ha', pest:'Pod Borer, Wilt', yield:'10-15 Qtl/ha' },
    { name:'Moong', icon:'🫛', sub:'Vigna radiata', season:'Zaid', soil:'Loamy/Sandy', stages:5, activeStages:3, water:'Low', npk:'20-40-20 kg/ha', pest:'Yellow Mosaic, Aphids', yield:'6-8 Qtl/ha' },
    { name:'Urad', icon:'🫘', sub:'Vigna mungo', season:'Kharif', soil:'Loamy/Black', stages:5, activeStages:2, water:'Low', npk:'20-40-20 kg/ha', pest:'Yellow Mosaic, Thrips', yield:'6-8 Qtl/ha' },
  ],
  oilseeds: [
    { name:'Groundnut', icon:'🥜', sub:'Arachis hypogaea', season:'Kharif', soil:'Sandy/Loamy', stages:5, activeStages:4, water:'Medium', npk:'25-50-75 kg/ha', pest:'Tikka, Aphids', yield:'20-25 Qtl/ha' },
    { name:'Soybean', icon:'🫛', sub:'Glycine max', season:'Kharif', soil:'Black/Loamy', stages:5, activeStages:3, water:'Medium', npk:'30-60-40 kg/ha', pest:'Girdle Beetle, Pod Borer', yield:'15-20 Qtl/ha' },
    { name:'Mustard', icon:'🌼', sub:'Brassica juncea', season:'Rabi', soil:'Loamy/Sandy', stages:5, activeStages:2, water:'Low', npk:'80-40-40 kg/ha', pest:'Aphids, Alternaria', yield:'10-15 Qtl/ha' },
    { name:'Sunflower', icon:'🌻', sub:'Helianthus annuus', season:'Rabi', soil:'Loamy/Black', stages:5, activeStages:1, water:'Medium', npk:'80-60-40 kg/ha', pest:'Head Rot, Aphids', yield:'8-12 Qtl/ha' },
    { name:'Cotton', icon:'🌸', sub:'Gossypium hirsutum', season:'Kharif', soil:'Black/Loamy', stages:5, activeStages:3, water:'Medium', npk:'150-60-60 kg/ha', pest:'Bollworm, Whitefly', yield:'15-20 Qtl/ha' },
  ]
};

function showCropTab(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const items = CROP_DATA[category] || [];
  const container = document.getElementById('cropContent');
  if (!container) return;
  container.innerHTML = `<div class="crop-content-grid">${items.map(crop => {
    const stageBlocks = Array(crop.stages).fill(0).map((_,i) =>
      `<div class="stage-block ${i < crop.activeStages ? 'active' : ''}"></div>`
    ).join('');
    return `<div class="crop-item">
      <div class="crop-item-header">
        <span class="crop-item-icon">${crop.icon}</span>
        <div><h4>${crop.name}</h4><span>${crop.sub}</span></div>
      </div>
      <div class="crop-details-row"><span>Season:</span><strong>${crop.season}</strong></div>
      <div class="crop-details-row"><span>Soil:</span><strong>${crop.soil}</strong></div>
      <div class="crop-details-row"><span>Water:</span><strong>${crop.water}</strong></div>
      <div class="crop-details-row"><span>NPK:</span><strong>${crop.npk}</strong></div>
      <div class="crop-details-row"><span>Main Pest:</span><strong>${crop.pest}</strong></div>
      <div class="crop-details-row"><span>Avg. Yield:</span><strong>${crop.yield}</strong></div>
      <div class="crop-stages">
        <small style="color:#888">Growth Progress</small>
        <div class="crop-stages-bar">${stageBlocks}</div>
      </div>
    </div>`;
  }).join('')}</div>`;
}



// ===== IRRIGATION TABLE =====
const IRRIG_DATA = [
  { crop:'🌾 Wheat', freq:'6-8 times', method:'Sprinkler/Furrow', stage:'Crown Root Initiation (21 days after sowing)' },
  { crop:'🍚 Rice', freq:'Continuous flooding', method:'Flood/Drip (SRI)', stage:'Transplanting & Panicle Initiation' },
  { crop:'🌽 Maize', freq:'5-6 times', method:'Drip/Furrow', stage:'Knee-high stage & Silking' },
  { crop:'🍅 Tomato', freq:'Every 3-4 days', method:'Drip Irrigation', stage:'Flowering & Fruit Development' },
  { crop:'🧅 Onion', freq:'Every 7-10 days', method:'Sprinkler/Furrow', stage:'Bulb Development' },
  { crop:'🥔 Potato', freq:'Every 8-10 days', method:'Drip/Furrow', stage:'Tuber Initiation (45-60 DAS)' },
  { crop:'🥜 Groundnut', freq:'Every 10-12 days', method:'Drip/Sprinkler', stage:'Pegging & Pod Development' },
  { crop:'🌸 Cotton', freq:'Every 10-15 days', method:'Drip/Furrow', stage:'Boll Formation Stage' },
  { crop:'🎋 Sugarcane', freq:'Every 5-7 days (summer)', method:'Drip/Furrow', stage:'Grand Growth Period' },
  { crop:'🌿 Turmeric', freq:'Every 7-10 days', method:'Drip/Furrow', stage:'Tillering & Rhizome Development' },
];

function renderIrrigTable() {
  const tbody = document.getElementById('irrigTable');
  if (!tbody) return;
  tbody.innerHTML = IRRIG_DATA.map(r => `
    <tr>
      <td>${r.crop}</td>
      <td>${r.freq}</td>
      <td>${r.method}</td>
      <td>${r.stage}</td>
    </tr>`).join('');
}

// ===== QUICK SOIL CHECK =====
const soilCrops = {
  sandy: { crops:'Groundnut, Watermelon, Carrot, Radish, Millet, Mustard, Cucumber, Sweet Potato', note:'Light soil with low fertility. Add compost and use drip irrigation.' },
  clay: { crops:'Rice, Wheat, Cotton, Sugarcane, Cabbage, Lotus', note:'Heavy soil with high water retention. Avoid waterlogging. Deep plough before sowing.' },
  loamy: { crops:'Wheat, Maize, Vegetables, Pulses, Fruits, Oilseeds — almost all crops thrive!', note:'Best all-purpose soil. Ideal for crop rotation and high-value crops.' },
  black: { crops:'Cotton, Soybean, Sunflower, Sorghum, Lentils, Chilli, Turmeric', note:'Rich in calcium. Cracks in summer aid aeration. Add nitrogen fertilizer.' }
};
function quickSoil(type) {
  document.querySelectorAll('.soil-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  const data = soilCrops[type];
  document.getElementById('soilQuickResult').innerHTML = `
    <strong style="color:#2e7d32;display:block;margin-bottom:6px">Recommended Crops:</strong>
    <p style="margin-bottom:6px">${data.crops}</p>
    <p style="font-size:0.78rem;color:#6a7c6a;border-top:1px solid #c8e6c9;padding-top:6px">${data.note}</p>`;
}

// ===== FARMER REGISTRATION =====
let farmers = JSON.parse(localStorage.getItem('farmsmart_farmers') || '[]');

function registerFarmer() {
  const name = document.getElementById('fName')?.value.trim();
  const village = document.getElementById('fVillage')?.value.trim();
  const district = document.getElementById('fDistrict')?.value.trim();
  const state = document.getElementById('fState')?.value;
  const land = document.getElementById('fLand')?.value;
  const soil = document.getElementById('fSoil')?.value;
  const phone = document.getElementById('fPhone')?.value.trim();
  const crop = document.getElementById('fCrop')?.value.trim();

  if (!name || !village || !phone) { alert('Please fill Name, Village and Phone number.'); return; }

  const farmer = { id: Date.now(), name, village, district, state, land, soil, phone, crop, date: new Date().toLocaleDateString('en-IN') };
  farmers.unshift(farmer);
  localStorage.setItem('farmsmart_farmers', JSON.stringify(farmers));
  renderFarmers(farmers);

  // Clear form
  ['fName','fVillage','fDistrict','fLand','fPhone','fCrop'].forEach(id => { if (document.getElementById(id)) document.getElementById(id).value = ''; });
  alert(`✅ ${name} registered successfully!`);
}

function renderFarmers(list) {
  const container = document.getElementById('farmerList');
  if (!container) return;
  if (!list.length) { container.innerHTML = '<p style="color:#aaa;text-align:center;padding:20px">No farmers registered yet.</p>'; return; }
  container.innerHTML = list.map(f => `
    <div class="farmer-item">
      <div class="farmer-avatar">${f.name.charAt(0).toUpperCase()}</div>
      <div class="farmer-info">
        <h4>${f.name}</h4>
        <p>${f.village}, ${f.district || ''} ${f.state}</p>
        <p>${f.phone} | ${f.land} acres | ${f.soil} soil</p>
      </div>
      <div class="farmer-badge">${f.crop || 'Farmer'}</div>
    </div>`).join('');
}

function searchFarmers() {
  const q = (document.getElementById('farmerSearch')?.value || '').toLowerCase();
  const filtered = farmers.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.village.toLowerCase().includes(q) ||
    (f.crop || '').toLowerCase().includes(q)
  );
  renderFarmers(filtered);
}

// ===== PROFIT CALCULATOR =====
function calcProfit() {
  const crop = document.getElementById('calcCrop')?.value || 'Crop';
  const qty = parseFloat(document.getElementById('calcQty')?.value) || 0;
  const cost = parseFloat(document.getElementById('calcCost')?.value) || 0;
  const sell = parseFloat(document.getElementById('calcSell')?.value) || 0;

  const totalCost = qty * cost;
  const totalRevenue = qty * sell;
  const profit = totalRevenue - totalCost;
  const margin = totalRevenue > 0 ? ((profit / totalRevenue) * 100).toFixed(1) : 0;

  const el = document.getElementById('calcResult');
  if (!el) return;
  el.classList.add('show');
  const color = profit >= 0 ? '#2e7d32' : '#d32f2f';
  el.innerHTML = `
    <strong>${crop} — ${qty} Quintals</strong>
    <div style="margin-top:8px">Total Cost: ₹${totalCost.toLocaleString('en-IN')}</div>
    <div>Total Revenue: ₹${totalRevenue.toLocaleString('en-IN')}</div>
    <div class="profit-num" style="color:${color}">
      ${profit >= 0 ? '✅ Profit' : '❌ Loss'}: ₹${Math.abs(profit).toLocaleString('en-IN')}
    </div>
    <div style="font-size:0.82rem;color:#666">Profit Margin: ${margin}%</div>
    ${profit < 0 ? '<p style="font-size:0.78rem;color:#c62828;margin-top:8px">💡 Consider storage and selling later, or reduce production cost via FPO.</p>' : ''}`;
}

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