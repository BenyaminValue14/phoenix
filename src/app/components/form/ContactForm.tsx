'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SuccessModal from '../modals/SuccessForm';
import LoadingButton from '../Inputs/LoadingButton';

type InputsProps = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {

  const [showModalSuccess, setShowModalSuccess] = useState(false);
  //validate form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsProps>()
  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    console.log(data);
    setShowModalSuccess(true);
  }

  return (
    <form autoComplete="off" className="contact-form" onSubmit={handleSubmit(onSubmit)} >
      <div className="input-content">
      <input type="text" className='input-text' placeholder='Your Full Name'
      {
        ...register('name', {
          required: 'Name is required',
          maxLength: {
            value: 20,
            message: 'Name should be less than 20 characters'
          }
        })
      }/>
      {
        errors.name && <p className='error'>{errors.name.message}</p>
      }
      </div>
      <div className="input-content">        
        <input type="email" placeholder='Your Email'
        {
          ...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email'
            }
          })
        }
        />
        {
          errors.email && <p className='error'>{errors.email.message}</p>
        }
        </div>
        <div className="input-content">
      <textarea  placeholder='Your Message' rows={7}
      {
        ...register('message', {
          required: 'Message is required',
          maxLength: {
            value: 200,
            message: 'Message should be less than 200 characters'
          }
        })
      }
      >
      </textarea>
      {
        errors.message && <p className='error'>{errors.message.message}</p>
      }
        </div>
        {
          !showModalSuccess 
          ? (<button type='submit' className='button active'>Send Message</button>)
          : (<LoadingButton text='Sending...' clases='active' />)

        }
      {
      showModalSuccess &&
      <SuccessModal title='El correo se envió con éxito' showButton={false} 
        handleOK={() => {
          setTimeout(() => {
            setShowModalSuccess(false);
            window.location.reload();
          }, 2000)
        }} handleClose={() => console.log('Cerrar')}
      />
      }
    </form>
  );
};

export default ContactForm;