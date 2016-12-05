import React from 'react';
import { Button } from 'react-bootstrap';
import { apiResourceUrl, applicationResourceUrl } from '../../utils/helpers';

export const Login = () => {
  const successUrl = applicationResourceUrl('/login/');
  const failureUrl = applicationResourceUrl('/asdf');
  return <Button href={apiResourceUrl(`/login?onSuccess=${successUrl}&onFailure=${failureUrl}`)} bsStyle="danger">Login with google</Button>;
};
