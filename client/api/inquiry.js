import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, city, courseName, mode, message, source } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and phone are required' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.ADMIN_NOTIFICATION_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error('Inquiry email not sent: GMAIL_USER / GMAIL_APP_PASSWORD env vars are missing');
    return res.status(500).json({ message: 'Email service is not configured' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: gmailUser, pass: gmailPass },
  });

  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || '-'],
    ['City', city || '-'],
    ['Course', courseName || '-'],
    ['Preferred Mode', mode || '-'],
    ['Message', message || '-'],
    ['Source', source || 'website'],
  ];

  const html = `
    <h2 style="font-family:sans-serif">New Inquiry — EduRise Academy Website</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${String(v).replace(/</g, '&lt;')}</td></tr>`).join('')}
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"EduRise Academy Website" <${gmailUser}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `New Demo/Inquiry Request — ${name}`,
      html,
    });
    return res.status(200).json({ message: 'Inquiry sent successfully' });
  } catch (err) {
    console.error('Failed to send inquiry email:', err);
    return res.status(500).json({ message: 'Failed to send inquiry' });
  }
}
