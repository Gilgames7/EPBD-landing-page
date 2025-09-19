// Application data for MaPrimeRénov Document Checklist - CLEANED VERSION
const appData = {
  "sections": [
    {
      "id": "avant-identite",
      "phase": "AVANT L'APPLICATION",
      "title": "Identité et Propriété",
      "duration": "20 min",
      "icon": "📄",
      "priority": "high",
      "items": [
        {
          "id": "certificat-dpe",
          "text": "Certificat DPE actuel (moins de 10 ans, classe E/F/G confirmée, numéro visible)",
          "type": "obligatoire",
          "warning": "Certificat DPE > 10 ans = cause rejet #1"
        },
        {
          "id": "justificatif-propriete",
          "text": "Justificatif de propriété (acte de propriété OU taxe foncière récente, PDF max 5MB)",
          "type": "obligatoire"
        },
        {
          "id": "documents-location",
          "text": "Documents de location si applicable (bail en cours, adresse exacte identique)",
          "type": "si-applicable"
        },
        {
          "id": "coherence-adresses",
          "text": "Vérification cohérence adresses sur tous documents",
          "type": "obligatoire",
          "warning": "Incohérences adresses = cause rejet fréquente"
        }
      ]
    },
    {
      "id": "avant-revenus",
      "phase": "AVANT L'APPLICATION", 
      "title": "Revenus et Éligibilité",
      "duration": "25 min",
      "icon": "💰",
      "priority": "high",
      "items": [
        {
          "id": "avis-imposition",
          "text": "Avis d'imposition N-2 ET N-1 (les DEUX années obligatoires)",
          "type": "obligatoire",
          "warning": "Utiliser seulement N-1 au lieu de N-2 ET N-1 = cause rejet #1"
        },
        {
          "id": "infos-fiscales",
          "text": "Informations fiscales personnelles (date naissance exacte, numéro fiscal, revenu fiscal référence sans décimales)",
          "type": "obligatoire",
          "warning": "Date naissance ou numéro fiscal manquant = rejet"
        },
        {
          "id": "telephone",
          "text": "Numéro téléphone avec code international (+33 pour France)",
          "type": "obligatoire"
        },
        {
          "id": "composition-foyer",
          "text": "Documentation composition du foyer (tous membres pour calculs familiaux)",
          "type": "recommande"
        }
      ]
    },
    {
      "id": "avant-declarations",
      "phase": "AVANT L'APPLICATION",
      "title": "Déclarations Statut Propriété", 
      "duration": "15 min",
      "icon": "🏠",
      "priority": "high",
      "items": [
        {
          "id": "statut-propriete",
          "text": "Déclaration statut propriété (propriétaire-occupant/bailleur/indivision)",
          "type": "obligatoire",
          "warning": "Statut propriété manquant = cause rejet"
        },
        {
          "id": "details-propriete",
          "text": "Détails propriété (année construction, surface habitable documentée)",
          "type": "obligatoire"
        },
        {
          "id": "energie-chauffage",
          "text": "Type énergie chauffage principal AVANT travaux rénovation",
          "type": "obligatoire"
        },
        {
          "id": "justificatif-residence",
          "text": "Justificatif résidence principale si adresse fiscale différente adresse bien (factures, taxe habitation)",
          "type": "si-applicable"
        }
      ]
    },
    {
      "id": "avant-professionnels",
      "phase": "AVANT L'APPLICATION",
      "title": "Services Professionnels",
      "duration": "60 min", 
      "icon": "🔍",
      "priority": "high",
      "items": [
        {
          "id": "audit-energetique",
          "text": "Audit énergétique (moins d'1 an recommandé, auditeur RGE certifié, amélioration 2 classes minimum)",
          "type": "obligatoire",
          "warning": "Audit > 1 an ou auditeur non-RGE = rejet"
        },
        {
          "id": "mar-accompagnateur",
          "text": "Mon Accompagnateur Rénov (MAR) sélectionné et engagé - OBLIGATOIRE (numéro SIRET MAR requis)",
          "type": "obligatoire",
          "warning": "MAR non certifié ANAH = rejet automatique"
        },
        {
          "id": "grille-analyse",
          "text": "Grille analyse logement (complétée par Mon Accompagnateur Rénov)",
          "type": "obligatoire"
        },
        {
          "id": "verification-rge",
          "text": "Vérification RGE temps réel sur france-renov.gouv.fr/annuaires-professionnels (sauvegarder numéro RGE)",
          "type": "recommande"
        }
      ]
    },
    {
      "id": "avant-entrepreneurs",
      "phase": "AVANT L'APPLICATION",
      "title": "Documentation Entrepreneurs",
      "duration": "60 min",
      "icon": "🔨", 
      "priority": "high",
      "items": [
        {
          "id": "devis-entrepreneur",
          "text": "Devis entrepreneur RGE (maximum 3 mois, rénovation complète 2 classes, coûts HT et TTC)",
          "type": "obligatoire"
        },
        {
          "id": "certificat-rge",
          "text": "Certificat RGE entrepreneur (vérification temps réel, numéro SIRET complet pas seulement SIREN)",
          "type": "obligatoire",
          "warning": "SIRET entrepreneur manquant = cause rejet fréquente"
        },
        {
          "id": "specialistes-renovation",
          "text": "Focus spécialistes rénovation globale (plus d'isolation murs individuelles dès 2026)",
          "type": "recommande"
        }
      ]
    },
    {
      "id": "pendant-compte",
      "phase": "PENDANT L'APPLICATION",
      "title": "Configuration Compte",
      "duration": "30 min",
      "icon": "🔐",
      "priority": "high", 
      "items": [
        {
          "id": "franceconnect-plus",
          "text": "Compte FranceConnect+ vérifié AVANT 30 septembre (fortement recommandé)",
          "type": "recommande"
        },
        {
          "id": "adresse-compte",
          "text": "Adresse compte identique aux documents propriété (vérification exacte)",
          "type": "obligatoire"
        },
        {
          "id": "screenshots-verification",
          "text": "Screenshots vérification compte sauvegardés pour preuve",
          "type": "recommande"
        }
      ]
    },
    {
      "id": "pendant-paiement",
      "phase": "PENDANT L'APPLICATION", 
      "title": "Configuration Paiement",
      "duration": "10 min",
      "icon": "💳",
      "priority": "medium",
      "items": [
        {
          "id": "rib-bancaire",
          "text": "RIB bancaire (nom exact correspondant au demandeur, format PDF)",
          "type": "obligatoire"
        }
      ]
    },
    {
      "id": "pendant-conditionnels",
      "phase": "PENDANT L'APPLICATION",
      "title": "Documents Conditionnels",
      "duration": "Variable",
      "icon": "📋",
      "priority": "medium",
      "items": [
        {
          "id": "declaration-indivision", 
          "text": "Déclaration indivision (Cerfa n° 13462*01 pour revenus modestes/très modestes en copropriété)",
          "type": "si-applicable"
        },
        {
          "id": "engagement-location",
          "text": "Engagement location bailleur (6 ans minimum pour propriétaires bailleurs)",
          "type": "si-applicable"
        },
        {
          "id": "travaux-urgence",
          "text": "Justification travaux urgence (formulaire spécial panne chauffage/eau chaude)",
          "type": "si-applicable"
        },
        {
          "id": "designation-representant",
          "text": "Désignation représentant (Cerfa 16089*02 si tiers gère dossier, signatures requises)",
          "type": "si-applicable"
        }
      ]
    },
    {
      "id": "pendant-financieres",
      "phase": "PENDANT L'APPLICATION",
      "title": "Déclarations Financières", 
      "duration": "15 min",
      "icon": "💶",
      "priority": "medium",
      "items": [
        {
          "id": "subventions-cee",
          "text": "Déclaration subventions CEE (montants reçus ou prévus des Certificats Économies Énergie)",
          "type": "obligatoire"
        },
        {
          "id": "autres-subventions",
          "text": "Autres subventions reçues ou planifiées (toutes aides publiques/privées)",
          "type": "obligatoire"
        },
        {
          "id": "subventions-mar",
          "text": "Subventions financement MAR (collectivités locales, caisses retraite, autres soutiens MAR)",
          "type": "si-applicable"
        }
      ]
    },
    {
      "id": "pendant-techniques",
      "phase": "PENDANT L'APPLICATION",
      "title": "Spécifications Techniques",
      "duration": "30 min", 
      "icon": "⚙️",
      "priority": "low",
      "items": [
        {
          "id": "systemes-solaires",
          "text": "Systèmes solaires si applicable (fiche technique Label Pack A+, spécifications ballon)",
          "type": "si-applicable"
        },
        {
          "id": "specifications-isolation",
          "text": "Spécifications isolation détaillées (surface m², épaisseur, valeurs résistance thermique R, conformité NF)",
          "type": "si-applicable"
        }
      ]
    },
    {
      "id": "apres-completion",
      "phase": "APRÈS L'APPLICATION",
      "title": "Documents Post-Travaux",
      "duration": "45 min",
      "icon": "✅", 
      "priority": "high",
      "items": [
        {
          "id": "audit-post-renovation",
          "text": "Rapport audit énergétique post-rénovation (nouvelle étiquette A-G, consommation kWh/m²/an, émissions GES)",
          "type": "obligatoire"
        },
        {
          "id": "documentation-mar",
          "text": "Documentation fin service MAR (certificat/facture MAR, rapport fin service MAR)",
          "type": "obligatoire"
        },
        {
          "id": "certificat-cee-anah",
          "text": "Certificat valorisation CEE ANAH (certificat officiel ANAH pour gestion CEE)",
          "type": "obligatoire"
        },
        {
          "id": "factures-finales",
          "text": "Factures finales complètes (date fin travaux, numéro SIRET sur toutes factures, coûts HT et TTC séparés)",
          "type": "obligatoire"
        }
      ]
    }
  ],
  "phases": [
    {
      "id": "avant",
      "title": "AVANT L'APPLICATION",
      "description": "Préparation des documents et audits avant soumission"
    },
    {
      "id": "pendant", 
      "title": "PENDANT L'APPLICATION",
      "description": "Configuration compte et documents conditionnels"
    },
    {
      "id": "apres",
      "title": "APRÈS L'APPLICATION", 
      "description": "Documents post-travaux pour versement des aides"
    }
  ]
};

class MaPrimeRenovDocumentsApp {
  constructor() {
    this.checkedItems = new Set();
    this.totalItems = 0;
    this.phaseItemsCount = {
      'avant': 0,
      'pendant': 0, 
      'apres': 0
    };
    this.phaseCheckedCount = {
      'avant': 0,
      'pendant': 0,
      'apres': 0
    };
    
    // Dual countdown dates
    this.reopeningDate = new Date('2025-09-30T00:00:00');
    this.finalDeadlineDate = new Date('2025-12-31T23:59:59');
    this.currentCountdownTarget = null;
    this.currentCountdownLabel = '';
    
    this.deferredPrompt = null;
    
    this.initializeApp();
  }

  // CRITICAL: Text cleaning function to remove encoding artifacts
  cleanText(text) {
    if (!text) return '';
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/Ã©/g, 'é')
      .replace(/Ã¨/g, 'è')
      .replace(/Ã /g, 'à')
      .replace(/Ã§/g, 'ç')
      .replace(/Ã¢/g, 'â')
      .replace(/Ã´/g, 'ô')
      .replace(/Ã®/g, 'î')
      .replace(/Ã»/g, 'û')
      .replace(/Ã¹/g, 'ù')
      .replace(/Ã«/g, 'ë')
      .replace(/Ã¯/g, 'ï')
      .replace(/Ã¼/g, 'ü')
      .replace(/Ã±/g, 'ñ')
      .replace(/[^\u0020-\u007E\u00A0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]/g, '')
      .trim();
  }

  initializeApp() {
    this.calculateTotalItems();
    this.renderSections();
    this.loadProgress();
    this.setupEventListeners();
    this.startCountdownTimer();
    this.registerServiceWorker();
    this.setupPWAInstall();
    
    // Update progress after initial load
    setTimeout(() => {
      this.updateAllProgress();
    }, 100);
  }

  calculateTotalItems() {
    this.totalItems = 0;
    this.phaseItemsCount = { avant: 0, pendant: 0, apres: 0 };
    
    appData.sections.forEach(section => {
      this.totalItems += section.items.length;
      
      const phaseKey = this.getPhaseKey(section.phase);
      this.phaseItemsCount[phaseKey] += section.items.length;
    });
    
    const totalCountElement = document.getElementById('total-count');
    if (totalCountElement) {
      totalCountElement.textContent = this.totalItems;
    }
  }

  getPhaseKey(phaseName) {
    if (phaseName === "AVANT L'APPLICATION") return 'avant';
    if (phaseName === "PENDANT L'APPLICATION") return 'pendant';
    if (phaseName === "APRÈS L'APPLICATION") return 'apres';
    return 'avant';
  }

  renderSections() {
    const container = document.getElementById('checklist-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const phaseGroups = this.groupSectionsByPhase();
    
    Object.keys(phaseGroups).forEach(phase => {
      // Create phase header
      const phaseHeader = document.createElement('div');
      phaseHeader.className = 'phase-header';
      
      const phaseInfo = appData.phases.find(p => p.id === phase);
      phaseHeader.innerHTML = `
        <h2 class="phase-title">${this.cleanText(phaseInfo.title)}</h2>
        <p class="phase-description">${this.cleanText(phaseInfo.description)}</p>
      `;
      
      container.appendChild(phaseHeader);
      
      // Create sections for this phase
      phaseGroups[phase].forEach(section => {
        const sectionElement = this.createSectionElement(section);
        container.appendChild(sectionElement);
      });
    });
  }

  groupSectionsByPhase() {
    const groups = { avant: [], pendant: [], apres: [] };
    
    appData.sections.forEach(section => {
      const phaseKey = this.getPhaseKey(section.phase);
      if (groups[phaseKey]) {
        groups[phaseKey].push(section);
      }
    });
    
    return groups;
  }

  createSectionElement(section) {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'section';
    sectionElement.dataset.sectionId = section.id;
    
    const completedItems = section.items.filter(item => this.checkedItems.has(item.id)).length;
    
    sectionElement.innerHTML = `
      <div class="section-header" data-section="${section.id}">
        <div class="section-title-group">
          <span class="section-icon">${section.icon}</span>
          <div class="section-info">
            <h3 class="section-title">${this.cleanText(section.title)}</h3>
            <div class="section-duration">${this.cleanText(section.duration)}</div>
          </div>
        </div>
        <div class="section-progress">
          <span class="section-count">${completedItems}/${section.items.length}</span>
          <span class="section-chevron">▼</span>
        </div>
      </div>
      <div class="section-content">
        <div class="section-items">
          ${section.items.map(item => this.createItemHTML(item)).join('')}
        </div>
      </div>
    `;
    
    return sectionElement;
  }

  createItemHTML(item) {
    const badges = this.createBadgeHTML(item.type);
    const warning = item.warning ? `<div class="item-warning">${this.cleanText(item.warning)}</div>` : '';
    
    return `
      <div class="checklist-item" data-item-id="${item.id}">
        <div class="checklist-checkbox"></div>
        <div class="checklist-content">
          <div class="checklist-text">${this.cleanText(item.text)}</div>
          <div class="item-badges">${badges}</div>
          ${warning}
        </div>
      </div>
    `;
  }

  createBadgeHTML(type) {
    const badgeMap = {
      'obligatoire': '<span class="item-badge badge-obligatoire">Obligatoire</span>',
      'recommande': '<span class="item-badge badge-recommande">Recommandé</span>',
      'si-applicable': '<span class="item-badge badge-si-applicable">Si applicable</span>'
    };
    
    return badgeMap[type] || '';
  }

  setupEventListeners() {
    // FIXED: More selective event handling - don't prevent default for all clicks
    document.addEventListener('click', (e) => {
      // Allow normal links to work (don't prevent default for external links)
      if (e.target.closest('a[href^="http"]') || e.target.closest('a[href^="tel:"]')) {
        return; // Let the browser handle these normally
      }
      
      // Handle section header clicks
      const sectionHeader = e.target.closest('.section-header');
      if (sectionHeader) {
        e.preventDefault();
        const section = sectionHeader.closest('.section');
        if (section) {
          this.toggleSection(section);
        }
        return;
      }
      
      // Handle checklist item clicks (but not if clicking on section header)
      const checklistItem = e.target.closest('.checklist-item');
      if (checklistItem && !e.target.closest('.section-header')) {
        e.preventDefault();
        this.toggleChecklistItem(checklistItem);
        return;
      }
      
      // Handle export button
      if (e.target.id === 'export-btn' || e.target.closest('#export-btn')) {
        e.preventDefault();
        this.exportToPDF();
        return;
      }
      
      // Handle install button
      if (e.target.id === 'install-button' || e.target.closest('#install-button')) {
        e.preventDefault();
        this.installPWA();
        return;
      }
    });

    // PWA install prompt detection
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallBanner();
    });
  }

  toggleSection(section) {
    if (!section) return;
    
    const isExpanded = section.classList.contains('expanded');
    
    if (isExpanded) {
      section.classList.remove('expanded');
    } else {
      section.classList.add('expanded');
    }
  }

  toggleChecklistItem(item) {
    if (!item) return;
    
    const itemId = item.dataset.itemId;
    if (!itemId) return;
    
    const isChecked = item.classList.contains('checked');
    
    if (isChecked) {
      item.classList.remove('checked');
      this.checkedItems.delete(itemId);
    } else {
      item.classList.add('checked');
      this.checkedItems.add(itemId);
    }
    
    // Force immediate progress update
    this.updateAllProgress();
    this.saveProgress();
    this.showSaveIndicator();
  }

  updateAllProgress() {
    this.updateMainProgress();
    this.updateSectionProgress();
    this.updatePhaseProgress();
  }

  updateMainProgress() {
    const completedCount = this.checkedItems.size;
    const percentage = this.totalItems > 0 ? Math.round((completedCount / this.totalItems) * 100) : 0;
    
    const completedElement = document.getElementById('completed-count');
    const percentageElement = document.getElementById('progress-percentage');
    const fillElement = document.getElementById('progress-fill');
    
    if (completedElement) {
      completedElement.textContent = completedCount;
    }
    if (percentageElement) {
      percentageElement.textContent = percentage;
    }
    if (fillElement) {
      fillElement.style.width = `${percentage}%`;
    }
  }

  updateSectionProgress() {
    appData.sections.forEach(section => {
      const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
      if (sectionElement) {
        const completedItems = section.items.filter(item => this.checkedItems.has(item.id)).length;
        const countElement = sectionElement.querySelector('.section-count');
        if (countElement) {
          countElement.textContent = `${completedItems}/${section.items.length}`;
        }
      }
    });
  }

  updatePhaseProgress() {
    // Reset phase counts
    this.phaseCheckedCount = { avant: 0, pendant: 0, apres: 0 };
    
    // Calculate phase progress
    appData.sections.forEach(section => {
      const phaseKey = this.getPhaseKey(section.phase);
      const checkedInSection = section.items.filter(item => this.checkedItems.has(item.id)).length;
      this.phaseCheckedCount[phaseKey] += checkedInSection;
    });
    
    // Update phase indicators
    Object.keys(this.phaseCheckedCount).forEach(phase => {
      const element = document.getElementById(`${phase}-count`);
      if (element) {
        element.textContent = `${this.phaseCheckedCount[phase]}/${this.phaseItemsCount[phase]}`;
      }
    });
  }

  startCountdownTimer() {
    const updateTimer = () => {
      const now = new Date();
      
      // Dual countdown logic - CRITICAL IMPLEMENTATION
      let target, countdownLabel;
      
      if (now < this.reopeningDate) {
        // Show: "Réouverture dans X jours"
        target = this.reopeningDate;
        countdownLabel = "Réouverture dans";
      } else {
        // Show: "Fin candidatures dans X jours" 
        target = this.finalDeadlineDate;
        countdownLabel = "Fin candidatures dans";
      }
      
      // Update countdown label if changed
      const labelElement = document.getElementById('countdown-label');
      if (labelElement && labelElement.textContent !== countdownLabel) {
        labelElement.textContent = countdownLabel;
      }
      
      const timeDiff = target - now;
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
      } else {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement) daysElement.textContent = '0';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
      }
    };
    
    updateTimer();
    setInterval(updateTimer, 60000); // Update every minute
  }

  saveProgress() {
    const progressData = {
      checkedItems: Array.from(this.checkedItems),
      lastSaved: new Date().toISOString(),
      version: '2.1.0'
    };
    
    try {
      // Using cookie as fallback since localStorage might not be available in sandbox
      const data = JSON.stringify(progressData);
      document.cookie = `maprimerenov_documents=${encodeURIComponent(data)}; path=/; max-age=31536000`; // 1 year
    } catch (error) {
      console.warn('Impossible de sauvegarder la progression:', error);
    }
  }

  loadProgress() {
    try {
      // Load from cookie
      const cookies = document.cookie.split(';');
      const progressCookie = cookies.find(cookie => cookie.trim().startsWith('maprimerenov_documents='));
      
      if (progressCookie) {
        const data = JSON.parse(decodeURIComponent(progressCookie.split('=')[1]));
        this.checkedItems = new Set(data.checkedItems || []);
        
        // Apply loaded state to UI
        setTimeout(() => {
          this.checkedItems.forEach(itemId => {
            const item = document.querySelector(`[data-item-id="${itemId}"]`);
            if (item) {
              item.classList.add('checked');
            }
          });
          this.updateAllProgress();
        }, 200);
      }
    } catch (error) {
      console.warn('Impossible de charger la progression:', error);
      this.checkedItems = new Set();
    }
  }

  showSaveIndicator() {
    const indicator = document.getElementById('save-indicator');
    if (indicator) {
      indicator.classList.add('show');
      
      setTimeout(() => {
        indicator.classList.remove('show');
      }, 2500);
    }
  }

  setupPWAInstall() {
    // Hide install banner if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      const banner = document.getElementById('pwa-banner');
      if (banner) {
        banner.classList.add('hidden');
      }
    }
  }

  showInstallBanner() {
    const banner = document.getElementById('pwa-banner');
    if (banner) {
      banner.classList.remove('hidden');
    }
  }

  async installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        const banner = document.getElementById('pwa-banner');
        if (banner) {
          banner.classList.add('hidden');
        }
      }
      
      this.deferredPrompt = null;
    }
  }

  // CRITICAL: Updated PDF export function - ONLY CHECKED ITEMS
  async exportToPDF() {
    try {
      // Check if jsPDF is available
      if (!window.jspdf) {
        console.error('jsPDF library not loaded');
        alert('Erreur: Bibliothèque PDF non chargée. Veuillez actualiser la page et réessayer.');
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');
      
      // Set proper font for French characters
      doc.setFont('helvetica', 'normal');
      
      // Get only checked items
      const checkedSections = appData.sections.filter(section => {
        const checkedItems = section.items.filter(item => 
          this.checkedItems.has(item.id)
        );
        return checkedItems.length > 0;
      }).map(section => ({
        ...section,
        items: section.items.filter(item => 
          this.checkedItems.has(item.id)
        )
      }));
      
      // Calculate progress
      const totalItems = appData.sections.reduce((sum, s) => sum + s.items.length, 0);
      const checkedCount = this.checkedItems.size;
      
      // Show message if no items checked
      if (checkedCount === 0) {
        alert('Aucun document coché. Veuillez cocher des documents avant d\'exporter le PDF.');
        return;
      }
      
      let yPosition = 20;
      
      // Header
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(this.cleanText('MaPrimeRénov - Documents Cochés'), 10, yPosition);
      yPosition += 10;
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(this.cleanText(`Progression: ${checkedCount}/${totalItems} documents (${Math.round(checkedCount/totalItems*100)}%)`), 10, yPosition);
      yPosition += 8;
      
      const now = new Date();
      doc.setFontSize(10);
      doc.text(this.cleanText(`Exporté le ${now.toLocaleDateString('fr-FR')} à ${now.toLocaleTimeString('fr-FR')}`), 10, yPosition);
      yPosition += 15;
      
      // Export only checked sections and items
      checkedSections.forEach(section => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        // Section header
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(34, 197, 94); // Green color
        doc.text(this.cleanText(`${section.icon} ${section.title}`), 10, yPosition);
        yPosition += 8;
        
        // Items (checked only)
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0); // Black text
        
        section.items.forEach(item => {
          const cleanItemText = this.cleanText(`✅ ${item.text} [${item.type.toUpperCase()}]`);
          const splitText = doc.splitTextToSize(cleanItemText, 180);
          
          splitText.forEach(line => {
            if (yPosition > 280) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(line, 15, yPosition);
            yPosition += 5;
          });
          
          yPosition += 3;
        });
        
        yPosition += 8;
      });
      
      // Footer with contacts
      if (yPosition > 220) {
        doc.addPage();
        yPosition = 20;
      }
      
      yPosition += 15;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(34, 197, 94);
      doc.text(this.cleanText('Contacts utiles MaPrimeRénov'), 10, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      
      const contacts = [
        '📞 France Rénov: 0 808 800 700 (gratuit)',
        '🌐 Site officiel: maprimerenov.gouv.fr', 
        '👥 Trouver un MAR: france-renov.gouv.fr/mon-accompagnateur-renov',
        '🔍 Annuaire RGE: france-renov.gouv.fr/annuaires-professionnels/artisan-rge-architecte',
        '',
        '⏰ Échéances critiques: 30 septembre puis 31 décembre 2025',
        '✅ Ce PDF contient uniquement vos documents cochés'
      ];
      
      contacts.forEach(contact => {
        if (yPosition > 275) {
          doc.addPage();
          yPosition = 20;
        }
        if (contact) {
          doc.text(this.cleanText(contact), 10, yPosition);
        }
        yPosition += 6;
      });
      
      // Save PDF
      doc.save('maprimerenov-documents-completes.pdf');
      
      // Show success message
      this.showSaveIndicator();
      
    } catch (error) {
      console.error('Échec de l\'export PDF:', error);
      alert('Erreur lors de l\'export PDF. Veuillez vérifier que des documents sont cochés et réessayer.');
    }
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      const swCode = `
        const CACHE_NAME = 'maprimerenov-docs-v2-1';
        const urlsToCache = [
          './',
          './index.html',
          './style.css',
          './app.js',
          'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
        ];

        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then((cache) => cache.addAll(urlsToCache))
          );
        });

        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request)
              .then((response) => {
                return response || fetch(event.request);
              }
            )
          );
        });
      `;
      
      const blob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);
      
      navigator.serviceWorker.register(swUrl)
        .then((registration) => {
          console.log('ServiceWorker enregistré:', registration);
        })
        .catch((error) => {
          console.log('Échec de l\'enregistrement ServiceWorker:', error);
        });
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MaPrimeRenovDocumentsApp();
});

// Handle app visibility changes for timer updates
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Refresh timer when app becomes visible
    const timerElements = document.querySelectorAll('#days, #hours, #minutes');
    if (timerElements.length === 3) {
      // Timer will refresh on next interval
    }
  }
});
