import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const UserMenu = ({ user }) =>
  <Link href="/logout">Logout, {user.name} {user.family_name}</Link>;

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
};
