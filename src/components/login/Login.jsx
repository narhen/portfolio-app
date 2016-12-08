import React from 'react';
import { Link } from 'react-router';
import { apiResourceUrl, applicationResourceUrl } from '../../utils/helpers';

export const Login = () => {
  const successUrl = applicationResourceUrl('/login/');
  const failureUrl = applicationResourceUrl('/asdf');
  return <Link href={apiResourceUrl(`/login?onSuccess=${successUrl}&onFailure=${failureUrl}`)}>Login</Link>;
};
