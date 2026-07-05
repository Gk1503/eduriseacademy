import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Format date with time
export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Get WhatsApp link
export const getWhatsAppLink = (message = '') => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '919427080826';
  const encodedMessage = encodeURIComponent(message || "Hi EduRise Academy! I'm interested in your courses.");
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

// Get status badge color
export const getStatusColor = (status) => {
  const colors = {
    new: 'bg-blue-500',
    contacted: 'bg-yellow-500',
    enrolled: 'bg-green-500',
    closed: 'bg-gray-500',
  };
  return colors[status] || 'bg-gray-500';
};

// Get category badge color
export const getCategoryColor = (category) => {
  const colors = {
    'job-oriented': 'bg-primary',
    'short-term': 'bg-secondary',
    'internship': 'bg-accent',
  };
  return colors[category] || 'bg-gray-500';
};

// Download file
export const downloadFile = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
