import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY); // Make sure to set this in your environment variables

export default async function handler(req, res) {
  const { email } = req.body; // Expecting the form email submission

  try {
    await sendgrid.send({
      to: 'tbod0tqb@robot.zapier.com', // Replace with your Zapier Parser email
      from: 'nkilbride@rymedi.com', // Your verified SendGrid sender email
      text: `New CureLedger form submission: ${email}`, // The content of the email
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
