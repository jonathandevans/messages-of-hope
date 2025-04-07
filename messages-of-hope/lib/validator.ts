export const checkContactForm = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}) => {
  const nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.match(nameRegex)) return { error: "Invalid name" };
  if (!email.match(emailRegex)) return { error: "Invalid email" };
  if (subject.length <= 2) return { error: "Subject too short" };
  if (message.length <= 5) return { error: "Message too short" };

  return { success: true };
};

export const checkMessageSubmission = ({
  message,
}: {
  message: string;
  handle: string;
}) => {
  if (message.length <= 5) return { error: "Message too short" };

  return { success: true };
};
