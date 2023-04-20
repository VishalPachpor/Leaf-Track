import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LeafTrackForm } from '../LeafTrackForm';
import './LeafTrackSubscribe.scss'


export function LeafTrackSubscribe() {
  const auth = useAuth();

  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }
  return (
    <div className='subscribe'>

      <h1 className='subscribe__title'> 🤝 ✨</h1>
      <p className='subscribe__description'> This form is intended for reserve managers who wish to sign up for our remote sensing services. Rest assured that any information you provide will be kept secure. By filling out this form, reserve managers can easily and quickly subscribe to our services and gain access to comprehensive information on vegetation health, growth, and distribution in their respective nature reserves.</p>
      <LeafTrackForm />
    </div>
  )
}