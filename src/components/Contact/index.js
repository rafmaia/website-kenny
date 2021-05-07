import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Textarea
} from './ContactElements';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vjxsk9h', 'template_rz9vhhd', e.target, 'user_8pOKk5WmVAjKK9M64UtTA')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    }); 
    e.target.reset()
}

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>KENNY HAYES</Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Contact Kenny Hayes</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' name='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' name='email' required />
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
              <FormInput type='phone' name='phone' required />
              <FormLabel htmlFor='for'>Your Message</FormLabel>
              <Textarea name='message' required />
              <FormButton type='submit' value='Send' onClick={() => alert("Click OK to send this message!")}>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}