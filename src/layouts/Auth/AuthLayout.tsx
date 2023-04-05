import { FC } from 'react';
import './AuthLayout.scss';

interface AuthLayoutProp {
  component: React.FC;
}

export const AuthLayout: FC<AuthLayoutProp> = ({ component: Component }) => {
  return (
    <section className="authContainer d-flex">
      <Component />
    </section>
  );
};
