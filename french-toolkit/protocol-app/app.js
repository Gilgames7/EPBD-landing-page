// Application data for 72H MaPrimeRénov Protocol - CLEANED VERSION
const protocolData = {
  "phases": [
    {
      "id": "phase-0-4h",
      "title": "Évaluation Urgence & Documentation Légale",
      "timeframe": "Heure 0-4",
      "duration": "4 heures",
      "icon": "📋",
      "priority": "critical",
      "actions": [
        {
          "id": "telecharger-dpe",
          "text": "Télécharger certificat DPE actuel - vérifier date, confirmation classe G, et numéro certificat",
          "type": "obligatoire",
          "warning": "DPE obsolète (>10 ans) disqualifie des pré-vérifications subventions"
        },
        {
          "id": "imprimer-interdiction",
          "text": "Imprimer notice officielle interdiction location depuis ecologie.gouv.fr confirmant classification logements indécents",
          "type": "obligatoire"
        },
        {
          "id": "documents-propriete",
          "text": "Rassembler documents propriété - acte propriété, avis taxe, preuves revenus foyer pour demandes subventions",
          "type": "obligatoire"
        },
        {
          "id": "exposition-juridique",
          "text": "Documenter exposition juridique potentielle - risque réductions loyer ordonnées, travaux obligatoires, compensations locataires",
          "type": "recommande"
        },
        {
          "id": "maj-impots",
          "text": "Mettre à jour informations fiscales sur impots.gouv.fr pour données actuelles création compte",
          "type": "obligatoire"
        }
      ]
    },
    {
      "id": "phase-4-12h",
      "title": "Inscription Portail & Vérification Compte",
      "timeframe": "Heure 4-12", 
      "duration": "8 heures",
      "icon": "💻",
      "priority": "critical",
      "actions": [
        {
          "id": "creer-compte",
          "text": "Créer compte MaPrimeRénov sur maprimerenov.gouv.fr (URL corrigée)",
          "type": "obligatoire"
        },
        {
          "id": "verification-obligatoire",
          "text": "Vérification sécurité compte OBLIGATOIRE - soit 5-7 jours vérification postale OU FranceConnect+ pour accès immédiat",
          "type": "obligatoire",
          "warning": "Impossible finir en 72h sans FranceConnect+"
        },
        {
          "id": "franceconnect-plus",
          "text": "RECOMMANDÉ: Configurer FranceConnect+ pour vérification instantanée si possible",
          "type": "recommande"
        },
        {
          "id": "contacter-conseiller",
          "text": "Contacter conseiller France Rénov EN PREMIER - appeler 0 808 800 700 pour consultation initiale",
          "type": "obligatoire"
        },
        {
          "id": "preparer-documents",
          "text": "Préparer documents mais NE PAS TÉLÉVERSER avant vérification compte",
          "type": "obligatoire"
        },
        {
          "id": "rechercher-mar",
          "text": "Rechercher conseillers Mon Accompagnateur Rénov - OBLIGATOIRE pour Rénovation d'ampleur",
          "type": "obligatoire",
          "warning": "MAR obligatoire pour maisons classe G individuelles"
        }
      ]
    },
    {
      "id": "phase-12-24h",
      "title": "Audit Énergétique & Consultation Professionnelle",
      "timeframe": "Heure 12-24",
      "duration": "12 heures", 
      "icon": "📞",
      "priority": "high",
      "actions": [
        {
          "id": "programmer-audit",
          "text": "Programmer audit énergétique obligatoire immédiatement (délai 4-6 semaines) - appeler 0 808 800 700",
          "type": "obligatoire",
          "warning": "Audit doit être terminé AVANT demande subvention"
        },
        {
          "id": "verifier-rge-auditeur",
          "text": "Vérifier certification RGE auditeur sur annuaires officiels",
          "type": "obligatoire",
          "warning": "Auditeur non-RGE invalide audit pour subventions"
        },
        {
          "id": "perimetre-audit",
          "text": "Confirmer périmètre audit couvre amélioration MINIMUM 2 classes (objectif E ou mieux)",
          "type": "obligatoire"
        },
        {
          "id": "documenter-rdv",
          "text": "Documenter tous rendez-vous avec dates, heures, contacts professionnels",
          "type": "recommande"
        },
        {
          "id": "reserver-dpe-post",
          "text": "Réserver DPE post-rénovation séparément - requis pour prouver conformité",
          "type": "obligatoire"
        }
      ]
    },
    {
      "id": "phase-24-48h",
      "title": "Stratégie Subventions Mise à Jour",
      "timeframe": "Heure 24-48",
      "duration": "24 heures",
      "icon": "💰",
      "priority": "high", 
      "actions": [
        {
          "id": "choisir-renovation-ampleur",
          "text": "Choisir Rénovation d'ampleur pour maisons classe G (rénovation globale)",
          "type": "obligatoire"
        },
        {
          "id": "rechercher-eco-ptz",
          "text": "Rechercher Éco-PTZ auprès banque (jusqu'à 50 000€ à taux 0%)",
          "type": "recommande"
        },
        {
          "id": "verifier-categorie-revenus",
          "text": "Vérifier catégorie revenus (Très modestes/Modestes/Intermédiaires/Supérieurs)",
          "type": "obligatoire"
        },
        {
          "id": "programmer-rappels",
          "text": "Programmer rappels échéance 30 septembre",
          "type": "obligatoire"
        },
        {
          "id": "supplements-regionaux",
          "text": "Rechercher suppléments régionaux au-delà MaPrimeRénov",
          "type": "recommande"
        }
      ]
    },
    {
      "id": "phase-48-72h",
      "title": "Recherche Entrepreneurs & Planning",
      "timeframe": "Heure 48-72",
      "duration": "24 heures",
      "icon": "🔨",
      "priority": "medium",
      "actions": [
        {
          "id": "contacter-entrepreneurs",
          "text": "Contacter 3 entrepreneurs RGE avec spécifications rénovation globale identiques",
          "type": "obligatoire"
        },
        {
          "id": "verifier-rge-temps-reel",
          "text": "Vérifier statut RGE en temps réel (annuaires peuvent être obsolètes)",
          "type": "obligatoire",
          "warning": "Annuaires parfois périmés - vérification temps réel essentielle"
        },
        {
          "id": "devis-ecrits",
          "text": "Demander devis écrits avec confirmation disponibilité et délais achèvement",
          "type": "obligatoire"
        },
        {
          "id": "notifications-locataires",
          "text": "Rédiger notifications locataires si propriété louée (exigence légale)",
          "type": "si-applicable"
        },
        {
          "id": "planning-realiste",
          "text": "Créer planning réaliste tenant compte réouverture 30 septembre et contraintes météo hivernales",
          "type": "obligatoire"
        }
      ]
    }
  ],
  "deadlines": {
    "reopening": "2025-09-30T00:00:00Z",
    "final_deadline": "2025-12-31T23:59:59Z",
    "reopening_title": "Réouverture MaPrimeRénov",
    "deadline_title": "Fin candidatures", 
    "slots": "13 000 créneaux nationaux"
  },
  "key_updates": {
    "eligibility": "Seulement E, F, G éligibles - classe D EXCLUE",
    "priority": "Ménages 'Très modestes' prioritaires",
    "limit": "13 000 candidatures nationales jusqu'au 31 décembre 2025",
    "type": "Propriétaires-occupants seulement initialement - bailleurs exclus",
    "amounts": "Maximum 30 000€-40 000€ (baisse depuis 70 000€)",
    "bonus": "Bonus 10% passoire thermique supprimé",
    "processing": "Premier arrivé, premier servi"
  }
};

class MaPrimeRenov72HProtocol {
  constructor() {
    this.completedActions = new Set();
    this.totalActions = 0;
    this.phaseActionsCount = {};
    this.phaseCompletedCount = {};
    
    // Dual countdown dates
    this.reopeningDate = new Date('2025-09-30T00:00:00');
    this.finalDeadlineDate = new Date('2025-12-31T23:59:59');
    
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
    this.calculateTotalActions();
    this.renderPhases();
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

  calculateTotalActions() {
    this.totalActions = 0;
    this.phaseActionsCount = {};
    
    protocolData.phases.forEach(phase => {
      this.totalActions += phase.actions.length;
      this.phaseActionsCount[phase.id] = phase.actions.length;
    });
    
    const totalCountElement = document.getElementById('total-count');
    if (totalCountElement) {
      totalCountElement.textContent = this.totalActions;
    }
  }

  renderPhases() {
    const container = document.getElementById('protocol-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    protocolData.phases.forEach(phase => {
      const phaseElement = this.createPhaseElement(phase);
      container.appendChild(phaseElement);
    });
  }

  createPhaseElement(phase) {
    const phaseDiv = document.createElement('div');
    phaseDiv.className = 'phase-section';
    phaseDiv.dataset.phaseId = phase.id;
    
    const completedActions = phase.actions.filter(action => this.completedActions.has(action.id)).length;
    
    phaseDiv.innerHTML = `
      <div class="phase-header">
        <div class="phase-priority">${this.cleanText(phase.priority)}</div>
        <div class="phase-timeframe">${this.cleanText(phase.timeframe)}</div>
        <h2 class="phase-title">${phase.icon} ${this.cleanText(phase.title)}</h2>
        <div class="phase-duration">${this.cleanText(phase.duration)} - <span class="phase-progress-text">${completedActions}/${phase.actions.length} actions</span></div>
      </div>
      <div class="action-items">
        ${phase.actions.map(action => this.createActionHTML(action)).join('')}
      </div>
    `;
    
    return phaseDiv;
  }

  createActionHTML(action) {
    const badges = this.createBadgeHTML(action.type);
    const warning = action.warning ? `<div class="action-warning">${this.cleanText(action.warning)}</div>` : '';
    
    return `
      <div class="action-item" data-action-id="${action.id}">
        <div class="action-checkbox"></div>
        <div class="action-content">
          <div class="action-text">${this.cleanText(action.text)}</div>
          <div class="action-badges">${badges}</div>
          ${warning}
        </div>
      </div>
    `;
  }

  createBadgeHTML(type) {
    const badgeMap = {
      'obligatoire': '<span class="action-badge badge-obligatoire">Obligatoire</span>',
      'recommande': '<span class="action-badge badge-recommande">Recommandé</span>',
      'si-applicable': '<span class="action-badge badge-si-applicable">Si applicable</span>'
    };
    
    return badgeMap[type] || '';
  }

  setupEventListeners() {
    document.addEventListener('click', (e) => {
      // Allow normal links to work
      if (e.target.closest('a[href^="http"]') || e.target.closest('a[href^="tel:"]')) {
        return;
      }
      
      // Handle action item clicks
      const actionItem = e.target.closest('.action-item');
      if (actionItem) {
        e.preventDefault();
        this.toggleActionItem(actionItem);
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

  toggleActionItem(item) {
    if (!item) return;
    
    const actionId = item.dataset.actionId;
    if (!actionId) return;
    
    const isCompleted = item.classList.contains('completed');
    
    if (isCompleted) {
      item.classList.remove('completed');
      this.completedActions.delete(actionId);
    } else {
      item.classList.add('completed');
      this.completedActions.add(actionId);
    }
    
    // FIXED: Immediate progress update
    this.updateAllProgress();
    this.saveProgress();
    this.showSaveIndicator();
  }

  updateAllProgress() {
    this.updateMainProgress();
    this.updatePhaseProgress();
  }

  updateMainProgress() {
    const completedCount = this.completedActions.size;
    const percentage = this.totalActions > 0 ? Math.round((completedCount / this.totalActions) * 100) : 0;
    
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

  updatePhaseProgress() {
    // Reset phase counts
    this.phaseCompletedCount = {};
    
    // Calculate phase progress
    protocolData.phases.forEach(phase => {
      const checkedInPhase = phase.actions.filter(action => this.completedActions.has(action.id)).length;
      this.phaseCompletedCount[phase.id] = checkedInPhase;
      
      // FIXED: Update phase header progress text immediately
      const phaseElement = document.querySelector(`[data-phase-id="${phase.id}"]`);
      if (phaseElement) {
        const progressTextElement = phaseElement.querySelector('.phase-progress-text');
        if (progressTextElement) {
          progressTextElement.textContent = `${checkedInPhase}/${phase.actions.length} actions`;
        }
      }
      
      // Update phase indicators
      const indicatorElement = document.getElementById(`${phase.id}-count`);
      if (indicatorElement) {
        indicatorElement.textContent = `${checkedInPhase}/${phase.actions.length}`;
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
      completedActions: Array.from(this.completedActions),
      lastSaved: new Date().toISOString(),
      version: '2.1.0'
    };
    
    try {
      const data = JSON.stringify(progressData);
      document.cookie = `maprimerenov_protocol72h=${encodeURIComponent(data)}; path=/; max-age=31536000`; // 1 year
    } catch (error) {
      console.warn('Impossible de sauvegarder la progression:', error);
    }
  }

  loadProgress() {
    try {
      const cookies = document.cookie.split(';');
      const progressCookie = cookies.find(cookie => cookie.trim().startsWith('maprimerenov_protocol72h='));
      
      if (progressCookie) {
        const data = JSON.parse(decodeURIComponent(progressCookie.split('=')[1]));
        this.completedActions = new Set(data.completedActions || []);
        
        // Apply loaded state to UI
        setTimeout(() => {
          this.completedActions.forEach(actionId => {
            const item = document.querySelector(`[data-action-id="${actionId}"]`);
            if (item) {
              item.classList.add('completed');
            }
          });
          this.updateAllProgress();
        }, 200);
      }
    } catch (error) {
      console.warn('Impossible de charger la progression:', error);
      this.completedActions = new Set();
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

  // CRITICAL: Updated PDF export function - ONLY COMPLETED ACTIONS
  async exportToPDF() {
    try {
      if (!window.jspdf) {
        console.error('jsPDF library not loaded');
        alert('Erreur: Bibliothèque PDF non chargée. Veuillez actualiser la page et réessayer.');
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');
      
      doc.setFont('helvetica', 'normal');
      
      // Get only completed actions by phase
      const completedPhases = protocolData.phases.filter(phase => {
        const completedActions = phase.actions.filter(action => 
          this.completedActions.has(action.id)
        );
        return completedActions.length > 0;
      }).map(phase => ({
        ...phase,
        actions: phase.actions.filter(action => 
          this.completedActions.has(action.id)
        )
      }));
      
      // Calculate progress
      const totalActions = protocolData.phases.reduce((sum, phase) => sum + phase.actions.length, 0);
      const completedCount = this.completedActions.size;
      
      // Show message if no actions completed
      if (completedCount === 0) {
        alert('Aucune action accomplie. Veuillez cocher des actions avant d\'exporter le PDF.');
        return;
      }
      
      let yPosition = 20;
      
      // Header
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(this.cleanText('Protocole 72H MaPrimeRénov - Actions Accomplies'), 10, yPosition);
      yPosition += 10;
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(this.cleanText(`Progression: ${completedCount}/${totalActions} actions (${Math.round(completedCount/totalActions*100)}%)`), 10, yPosition);
      yPosition += 8;
      
      const now = new Date();
      doc.setFontSize(10);
      doc.text(this.cleanText(`Exporté le ${now.toLocaleDateString('fr-FR')} à ${now.toLocaleTimeString('fr-FR')}`), 10, yPosition);
      yPosition += 15;
      
      // Export only completed phases and actions
      completedPhases.forEach(phase => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        // Phase header
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(34, 197, 94); // Green color
        doc.text(this.cleanText(`${phase.icon} ${phase.title}`), 10, yPosition);
        yPosition += 6;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(this.cleanText(`${phase.timeframe} (${phase.duration})`), 10, yPosition);
        yPosition += 10;
        
        // Actions (completed only)
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0); // Black text
        
        phase.actions.forEach(action => {
          const cleanActionText = this.cleanText(`✅ ${action.text} [${action.type.toUpperCase()}]`);
          const splitText = doc.splitTextToSize(cleanActionText, 180);
          
          splitText.forEach(line => {
            if (yPosition > 280) {
              doc.addPage();
              yPosition = 20;
            }
            doc.text(line, 15, yPosition);
            yPosition += 5;
          });
          
          // Add warning if present
          if (action.warning) {
            const cleanWarning = this.cleanText(`⚠️ ${action.warning}`);
            const warningText = doc.splitTextToSize(cleanWarning, 175);
            
            doc.setTextColor(192, 21, 47); // Warning color
            warningText.forEach(line => {
              if (yPosition > 280) {
                doc.addPage();
                yPosition = 20;
              }
              doc.text(line, 20, yPosition);
              yPosition += 4;
            });
            doc.setTextColor(0, 0, 0); // Reset to black
          }
          
          yPosition += 4;
        });
        
        yPosition += 10;
      });
      
      // Footer with contacts and key updates
      if (yPosition > 180) {
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
        '🔍 Annuaire RGE: france-renov.gouv.fr/annuaires-professionnels',
        '',
        '⏰ Échéances critiques: 30 septembre puis 31 décembre 2025',
        '🎯 13 000 créneaux nationaux - Premier arrivé, premier servi',
        '💰 Maximum 30 000€-40 000€ (baisse depuis 70 000€)',
        '✅ Propriétaires-occupants uniquement prioritaires',
        '⚠️ Plus d\'isolation murs individuelles dès 2026',
        '',
        '✅ Ce PDF contient uniquement vos actions accomplies'
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
      doc.save('protocole-72h-maprimerenov-actions-accomplies.pdf');
      
      // Show success message
      this.showSaveIndicator();
      
    } catch (error) {
      console.error('Échec de l\'export PDF:', error);
      alert('Erreur lors de l\'export PDF. Veuillez vérifier que des actions sont cochées et réessayer.');
    }
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      const swCode = `
        const CACHE_NAME = 'maprimerenov-protocol72h-v2-1';
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
  new MaPrimeRenov72HProtocol();
});

// Handle app visibility changes for timer updates
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Timer will refresh on next interval
  }
});
