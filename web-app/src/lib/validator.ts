
export const checkContactForm = ({name, email, organisation, subject, message} : {name : string, email : string, organisation : string, subject : string, message : string}) => {
  const nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.match(nameRegex)) return { error: "Invalid name" };
  if (!email.match(emailRegex)) return { error: "Invalid email" };
  if (subject.length <= 1) return { error: "Missing subject" };
  if (message.length <= 5) return { error: "Invalid message" };

  return { success: "Passed" };
};

export const checkMessageSubmission = ({ message, handle } : { message: string, handle:string }) => {
  if (message.length <= 5) return { error: "Invalid message" };

  return  { success: "Passed" };
};