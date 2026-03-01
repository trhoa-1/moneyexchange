// Language Management System
let currentLanguage = localStorage.getItem('language') || 'en';
let translations = {};

// Load translations
async function loadTranslations() {
  try {
    const response = await fetch('json/language.json');
    translations = await response.json();
    applyLanguage(currentLanguage);
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Apply language to the page
function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
      value = value[k];
    }
    
    if (element.tagName === 'INPUT' && element.type === 'text' || element.type === 'number') {
      element.placeholder = value;
    } else if (element.tagName === 'BUTTON' && element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', value);
    } else {
      element.textContent = value;
    }
  });
  
  // Update language button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? '🇻🇳 VN' : '🇺🇸 EN';
  }
}

// Toggle language
function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'vi' : 'en';
  applyLanguage(newLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadTranslations);
