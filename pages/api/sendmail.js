import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const content = {
      to: 'smyth.j.sam@gmail.com',
      from: 'Next JS App <nextjs@samsmyth.ca>',
      replyTo: email,
      subject: `New Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).send('Error sending message.');
    }
  } else {
    res.status(404).send('Not found');
  }
};
