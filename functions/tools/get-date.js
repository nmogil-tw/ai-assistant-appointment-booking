exports.handler = (context, event, callback) => {
    // Get the current date and time in UTC
    const now = new Date();
  
    // Convert the current date and time to ISO 8601 format
    const isoDateTime = now.toISOString();
  
    // Return the ISO 8601 date string as the response
    callback(null, isoDateTime);
  };