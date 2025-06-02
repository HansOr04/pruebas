export const forgotPasswordService = () => {
  return {
    sendForgotPasswordEmail: async (email: string) => {
      return await fetch(`/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
    },
  };
};
