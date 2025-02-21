/**
 * List of tools to be attached to the assistant
 * @param {string} domain
 * @returns
 */
module.exports = (domain) => ({
  customerLookup: {
    name: 'Customer Lookup',
    description:
      'Use this tool at the beginning of every conversation to learn about the customer.\n\nTool Rules:\n - Mandatory at conversation start\n - Accessible fields: first name, last name, address, email, phone\n - Use to personalize greeting',
    type: 'WEBHOOK',
    method: 'GET',
    url: `https://${domain}/tools/customer-lookup`,
  },
  customerSurvey: {
    name: 'Customer Survey',
    description:
      'Use this tool when you have conducted the customer survey after you have handled all the users questions and requests. ALWAYS use this tool before ending the conversation.',
    type: 'WEBHOOK',
    method: 'POST',
    url: `https://${domain}/tools/create-survey`,
    schema: {
      rating: 'number', //the rating the user gave 1-5
      feedback: 'string', //the feedback the user gave
    },
  },
  sendToFelx: {
    name: 'Send to Flex',
    description:
      'Use this tool when the user wants to speak with a supervisor or when you are not able to fulfill their request. ALWAYS tell the user you are transferring them to a Supervisor before using this tool.',
    type: 'WEBHOOK',
    method: 'GET',
    url: `https://${domain}/tools/send-to-flex`,
  },
  bookCall: {
    name: 'Book Call',
    description:
      'Use this tool to schedule a call with the customer.',
    type: 'WEBHOOK',
    method: 'POST',
    url: `https://${domain}/tools/book-call`,
    schema: {
      start: 'string', //the meeting date in ISO 8601 format, note this should be in UTC
      attendee_name: 'string', //the name of the user
      attendee_email: 'string', //the email of the user
      attendee_timezone: 'string', //the timezone of the user in valid IANA format
    },
  },
  getDate: {
    name: 'Get Date',
    description:
      'Use this tool to get the current date and time information.',
    type: 'WEBHOOK',
    method: 'GET',
    url: `https://${domain}/tools/get-date`,
  },
});
