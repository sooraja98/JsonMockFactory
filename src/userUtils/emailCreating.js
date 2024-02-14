const generateGmailAddress = (firstName, lastName) => {
  // Validate inputs
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    console.error('Invalid input types for generateGmailAddress:');
    // Handle error or set default values
    firstName = firstName?.toString() || 'defaultFirstName';
    lastName = lastName?.toString() || 'defaultLastName';
  }

  const simplifiedFirstName = firstName.replace(/\s+/g, '').toLowerCase();
  const simplifiedLastName = lastName.replace(/\s+/g, '').toLowerCase();

  // Generate a random number between 1 and 99 for uniqueness
  const randomNumber = Math.floor(Math.random() * 99) + 1;

  // Concatenate to form the email address
  const gmailAddress = `${simplifiedFirstName}.${simplifiedLastName}${randomNumber}@gmail.com`;

  return gmailAddress;
};
module.exports=generateGmailAddress