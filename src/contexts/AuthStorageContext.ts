import * as React from 'react';
import AuthStorage from '../utils/authStorage';

const AuthStorageContext = React.createContext<AuthStorage | null>(null);

export default AuthStorageContext;
