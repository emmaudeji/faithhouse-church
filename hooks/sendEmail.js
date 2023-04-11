import emailjs from '@emailjs/browser';

export const sendEmail = (input) => {
  
    emailjs.send('service_cen8nae', 'template_a6ux6a6', input, 'KV6SG2wZFDxp4JSCT')
      .then((result) => {
          // show the user a success message
          alert('Message sent ')
      }, (error) => {
          // show the user an error
          alert('Message was not sent. Try again.')
      });
  };