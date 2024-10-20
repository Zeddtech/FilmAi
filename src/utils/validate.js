export const validateEmailOrPhone = (inputs) => {
  let input = inputs.trim();
  if (input.trim() === "") return "Field can't be empty";

  // Email regex: basic pattern for emails
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone number regex: allows optional country code (+), digits, and separators like dashes
  const phoneRegex =
    /^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{3,4})[-.\s]?(\d{4})$/;

  // Check if the input matches either email or phone number regex
  if (emailRegex.test(input)) {
    return "";
  } else if (phoneRegex.test(input)) {
    return "";
  } else {
    return "Please enter a valid email or phone number";
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!password || !confirmPassword) {
    return "Passworld required";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "";
};
