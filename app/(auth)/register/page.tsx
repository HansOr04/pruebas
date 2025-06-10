import AuthLayout from '@/src/components/layout/Auth/AuthLayout';
import RegisterForm from '@/src/components/forms/Auth/RegisterForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
