exports.handler = async function(context, event, callback) {
    const axios = require('axios');
  
    // Extracting the incoming event payload
    const { start, attendee_name, attendee_email, attendee_timezone } = event;
  
    // Define the API endpoint and headers
    const apiUrl = 'https://api.cal.com/v2/bookings';
    const headers = {
      'Authorization': `Bearer ${context.CAL_API_KEY}`,
      'cal-api-version': '2024-08-13',
      'Content-Type': 'application/json'
    };
  
    // Define the booking payload
    const bookingPayload = {
      start: start,
      eventTypeId: 1546751, // Hardcoded event type ID
      attendee: {
        name: attendee_name,
        email: attendee_email,
        timeZone: attendee_timezone,
        language: "en" // Hardcoded language
      }
    };
  
    try {
      // Make the API request to book the call
      const response = await axios.post(apiUrl, bookingPayload, { headers });
  
      // Check if the response status is success
      if (response.data.status === 'success') {
        console.log('Booking successful:', response.data.data);
        return callback(null, response.data.data);
      } else {
        console.error('Booking failed:', response.data);
        return callback('Booking failed');
      }
    } catch (error) {
      console.error('Error making API request:', error.response ? error.response.data : error.message);
      return callback('Error making API request');
    }
  };