import React, { useState } from 'react';
import './EnergyHealingInfo.css';

// --- 1. ASSET IMPORTS ---
// Using existing images from the project folder
import backPainImage from '../images copy/stress.jpg';
import emotionalBurdensImage from '../images copy/meditation.jpg';
import transformingMindsetsImage from '../images copy/mindset.jpg';
import presentationPdf from '../images copy/HealingBackPresentation.pdf'; 

// --- 2. DATA: AFFIRMATIONS (Extracted from PDF) ---
const healingAffirmations = [
  { id: 'general', condition: 'General Pain', affirmation: 'The past is over, I choose to love and approve of myself NOW!' },
  { id: 'neck', condition: 'Neck', affirmation: 'It is safe to see other viewpoints, I am peaceful with life.' },
  { id: 'upper', condition: 'Upper Back', affirmation: 'I love and approve of myself, life supports and loves me.' },
  { id: 'middle', condition: 'Middle Back', affirmation: 'I release the past. I am free to move forward with love in my heart.' },
  { id: 'lower', condition: 'Lower Back', affirmation: 'I trust the process of life. All I need is ALWAYS taken care of. I am SAFE.' },
  { id: 'sciatica', condition: 'Sciatica', affirmation: 'I move into my greater good. My good is everywhere, and I am secure and safe.' },
];

// --- 3. DATA: BODY MAP (Extracted from PDF Anatomy) ---
const bodyMappingData = [
  {
    id: 't3-zone',
    title: 'T3 Zone (Upper Back & Neck)',
    physical: 'Often caused by "fixed" positions like sitting at a computer. Muscles become "on fire" due to lack of blood flow.',
    emotional: 'Feeling unsupported or unloved. Holding onto guilt.',
    affirmation: 'I love and approve of myself. Life supports and loves me.'
  },
  {
    id: 'middle-back',
    title: 'Middle Back',
    physical: 'General stiffness and aching from posture or overuse.',
    emotional: 'Guilt and stuck in the past. "Get off my back" mentality.',
    affirmation: 'I release the past. I am free to move forward with love in my heart.'
  },
  {
    id: 'l4-s2',
    title: 'L4 - S2 (Lower Back)',
    physical: 'The most common area of "screaming pain." Often inflamed from overuse. Can involve fear of money/future.',
    emotional: 'Fear of money or financial lack. Fear of the future.',
    affirmation: 'I trust the process of life. All I need is ALWAYS taken care of.'
  },
  {
    id: 'sciatica',
    title: 'Sciatic Nerve',
    physical: 'Pinching of the nerve causing numbness and deep pain.',
    emotional: 'Being hypocritical. Fear of money and the future.',
    affirmation: 'I move into my greater good. My good is everywhere, and I am secure and safe.'
  }
];

const EnergyHealingInfo = ({ t }) => {
  // State for the interactive Body Map (Accordion)
  const [activeBodyPart, setActiveBodyPart] = useState(null);

  const toggleBodyPart = (id) => {
    setActiveBodyPart(activeBodyPart === id ? null : id);
  };

  return (
    <div className="energy-healing-container">
      
      {/* SECTION 1: VISUALS */}
      <div className="healing-intro-section">
        <h2>{t('Energy Healing & Mindset Transformation')}</h2>
        <div className="healing-visuals">
          <div className="visual-item">
            <img src={backPainImage} alt={t('Healing Back Pain')} className="energy-healing-image" />
            <p className="image-caption">{t('Healing Back Pain')}</p>
          </div>
          <div className="visual-item">
            <img src={emotionalBurdensImage} alt={t('Releasing Emotional Burdens')} className="energy-healing-image" />
            <p className="image-caption">{t('Releasing Emotional Burdens')}</p>
          </div>
          <div className="visual-item">
            <img src={transformingMindsetsImage} alt={t('Transforming Mindsets')} className="energy-healing-image" />
            <p className="image-caption">{t('Transforming Mindsets')}</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: AFFIRMATION CARDS */}
      <div className="affirmations-container">
        <h3>{t('Healing Affirmations & Thought Patterns')}</h3>
        <div className="affirmations-grid">
          {healingAffirmations.map((item) => (
            <div key={item.id} className="affirmation-card">
              <h4>{t(item.condition)}</h4>
              <p>"{t(item.affirmation)}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE BODY MAP */}
      <div className="body-map-section">
        <h3>{t('Interactive Body Map: Explore Your Pain')}</h3>
        <p style={{textAlign: 'center', marginBottom: '20px'}}>{t('Click a zone below to discover its physical triggers and emotional roots.')}</p>
        
        <div className="body-map-container">
          {bodyMappingData.map((part) => (
            <div 
              key={part.id} 
              className={`body-part-item ${activeBodyPart === part.id ? 'active' : ''}`}
              onClick={() => toggleBodyPart(part.id)}
            >
              <div className="body-part-header">
                <h4>{t(part.title)}</h4>
                <span className="toggle-icon">{activeBodyPart === part.id ? '−' : '+'}</span>
              </div>
              
              {activeBodyPart === part.id && (
                <div className="body-part-content">
                  <div className="content-block">
                    <strong>{t('Physical Trigger:')}</strong>
                    <p>{t(part.physical)}</p>
                  </div>
                  <div className="content-block">
                    <strong>{t('Emotional Root:')}</strong>
                    <p>{t(part.emotional)}</p>
                  </div>
                  <div className="affirmation-highlight">
                    <strong>{t('Healing Affirmation:')}</strong>
                    <p>"{t(part.affirmation)}"</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: DOWNLOAD PDF */}
      <div className="download-section">
        <p>{t('Want to dive deeper? Download the full guide covering detailed anatomy, emotions, and exercises.')}</p>
        <a 
          href={presentationPdf} 
          download="Healing_Your_Back_Presentation.pdf" 
          className="download-button"
        >
          {t('Download Full Presentation PDF')}
        </a>
      </div>

      {/* SECTION 5: FOOTER & CONTACT */}
      <div className="healing-footer">
        <h3>{t('Ready to Start Your Healing Journey?')}</h3>
        <div className="footer-content">
          <div className="footer-logo-text">
            <h4>{t('THC - Total Healing Centre')}</h4>
            <p>{t('Discover the power of healing your back, emotions, and mind.')}</p>
          </div>
          <div className="footer-actions">
            <p>{t('Visit us for more resources and appointments:')}</p>
            <a 
              href="http://www.totalhealingcentre.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="website-link-button"
            >
              {t('Visit www.totalhealingcentre.com')}
            </a>
          </div>
        </div>
        <p className="footer-thank-you">{t('Thanks!')}</p>
      </div>

    </div>
  );
};

export default EnergyHealingInfo;
