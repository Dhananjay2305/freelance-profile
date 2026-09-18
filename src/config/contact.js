import { siteConfig } from "./site";

export const contactConfig = {
  whatsapp: siteConfig.whatsappNumber,
  whatsappDisplay: siteConfig.whatsappDisplay,
  email: siteConfig.email,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github
};

/**
 * Builds an official WhatsApp direct messaging URL with proper URL encoding.
 * @param {string} [customMessage] - Optional custom initial message.
 * @returns {string} - WhatsApp API link.
 */
export const getWhatsAppUrl = (customMessage) => {
  const defaultMessage = `Hi ${siteConfig.name}, I found your portfolio and would like to discuss a project.`;
  const messageToUse = customMessage || defaultMessage;
  return `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(messageToUse)}`;
};

/**
 * Builds a WhatsApp URL tailored for discussing a specific service or project.
 * @param {string} topicTitle - The service or project title.
 * @returns {string}
 */
export const getTopicWhatsAppUrl = (topicTitle) => {
  const msg = `Hi ${siteConfig.name}, I'm interested in working with you on: "${topicTitle}". Could we discuss the requirements?`;
  return getWhatsAppUrl(msg);
};

/**
 * Builds an email mailto link with pre-filled subject and body.
 * @param {Object} options
 * @param {string} options.subject
 * @param {string} options.body
 * @returns {string}
 */
export const getMailtoUrl = ({ subject, body }) => {
  const finalSubject = subject || `Freelance Inquiry for ${siteConfig.name}`;
  const finalBody = body || `Hi ${siteConfig.name},\n\nI have a project opportunity and would like to discuss it with you.\n\nBest regards,`;
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
};
