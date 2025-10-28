"use server"

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Email recipients
    const recipients = ["manafalsamman@gmail.com", "info@mouhammadalsamman.info"]

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Dr. Samman Portfolio Website
    `.trim()

    // In a production environment, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll create a mailto link that opens the user's email client
    // This is a temporary solution - you should integrate a proper email service

    console.log("[v0] Email would be sent to:", recipients)
    console.log("[v0] Email content:", emailContent)

    // Return success with mailto links for both recipients
    return {
      success: true,
      message: "Message received! We'll get back to you soon.",
      mailtoLinks: recipients.map(
        (recipient) =>
          `mailto:${recipient}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailContent)}`,
      ),
    }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again or contact us directly.",
    }
  }
}
