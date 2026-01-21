
import React from 'react';
import { useTranslation } from 'react-i18next';

function EnergyHealingInfo() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Unlock Your Body's Natural Healing Power: Energy Healing for Back Pain, Emotions, and Mindsets")}</h1>

      <p>{t("Are you struggling with persistent back pain, emotional imbalances, or limiting mindsets that hold you back? You're not alone. Many people experience these challenges, often finding that conventional approaches only offer temporary relief. At [Your Website/Practice Name], we believe in a holistic path to well-being, harnessing the profound power of energy healing to address the root causes of your discomfort and empower you to live a life of vitality and joy.")}</p>

      <h2>{t("What is Energy Healing?")}</h2>
      <p>{t("Energy healing is an ancient, gentle, yet powerful approach that works with your body's subtle energy systems. It's based on the understanding that physical, emotional, and mental issues often stem from imbalances or blockages in your energy field. By identifying and clearing these disruptions, energy healing facilitates your body's innate ability to heal itself, promoting harmony and restoring balance on all levels.")}</p>
      
      <h2>{t("Healing Back Pain: Beyond the Physical")}</h2>
      <p>{t("Back pain can be debilitating, impacting every aspect of your life. While physical factors are often at play, chronic back pain frequently has energetic and emotional components. Stress, unresolved trauma, and suppressed emotions can manifest as tension and blockages in the spine and surrounding tissues.")}</p>
      <p>{t("Our energy healing sessions gently release these energetic imprints, alleviating muscle tension, improving energy flow, and reducing inflammation. Clients often report significant reductions in pain, increased flexibility, and a renewed sense of ease in their bodies. We don't just treat the symptom; we address the energetic patterns contributing to your discomfort, fostering lasting relief.")}</p>
      <p>{t('[Image for "Healing Back Pain" will go here]')}</p>

      <h2>{t("Releasing Emotional Burdens: Find Your Inner Peace")}</h2>
      <p>{t("Emotions are powerful, and when left unaddressed, they can create significant energetic blockages that impact your physical health and overall well-being. Feelings like anxiety, fear, anger, grief, and sadness can become trapped in your energy field, contributing to physical ailments and mental distress.")}</p>
      <p>{t("Through targeted energy healing techniques, we help you identify and release these trapped emotions. This process can lead to profound emotional shifts, allowing you to:")}</p>
      <ul>
        <li>{t("Reduce stress and anxiety: Experience a calmer, more centered state.")}</li>
        <li>{t("Process grief and trauma: Move forward with greater peace and acceptance.")}</li>
        <li>{t("Cultivate self-love and confidence: Embrace your true self without judgment.")}</li>
        <li>{t("Improve relationships: Foster healthier connections by clearing emotional baggage.")}</li>
      </ul>
      <p>{t('[Image for "Releasing Emotional Burdens" will go here]')}</p>

      <h2>{t("Transforming Mindsets: Create Your Reality")}</h2>
      <p>{t("Your mindset shapes your reality. Limiting beliefs, negative thought patterns, and self-sabotaging behaviors can keep you stuck, preventing you from achieving your full potential. These mental constructs are deeply embedded in your energetic blueprint.")}</p>
      <p>{t("Energy healing works to clear the energetic roots of these limiting mindsets, opening you up to new possibilities. By shifting your energetic vibration, you can:")}</p>
      <ul>
        <li>{t("Overcome self-doubt: Step into your power and pursue your goals with confidence.")}</li>
        <li>{t("Break free from old patterns: Release habits that no longer serve you.")}</li>
        <li>{t("Attract abundance: Align your energy with your desires.")}</li>
        <li>{t("Foster a positive outlook: Cultivate resilience and optimism.")}</li>
      </ul>
      <p>{t('[Image for "Transforming Mindsets" will go here]')}</p>
      
      <h2>{t("Your Journey to Holistic Well-being Starts Here")}</h2>
      <p>{t("Imagine a life free from chronic pain, emotional turmoil, and self-limiting beliefs. Energy healing offers a gentle yet transformative path to achieving this vision. Our compassionate and experienced practitioners are dedicated to supporting you on your healing journey, creating a safe and nurturing space for profound change.")}</p>

      <a href="https://totalhealingcentre.as.me/schedule/7ef1b0d0/appointment/1260576/calendar/514164?appointmentTypeIds[]=1260576" target="_blank" rel="noopener noreferrer">
        <button>{t('Schedule Appointment')}</button>
      </a>
      <a href="https://thcclc.com/shop" target="_blank" rel="noopener noreferrer">
        <button>{t('Visit Shop')}</button>
      </a>
    </div>
  );
}

export default EnergyHealingInfo;
