export const signupService = () => {
  return {
    signup: async (email: string, password: string) => {
      return await fetch(`/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    },
  };
};
