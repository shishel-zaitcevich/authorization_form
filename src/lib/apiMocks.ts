export const loginMock = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (email === 'info@mail.com' && password === 'password') {
    return { success: true, requires2FA: true };
  } else if (Math.random() < 0.1) {
    throw new Error('Network error');
  } else {
    throw new Error('Invalid credentials');
  }
};

export const verify2FAMock = async ({ code }: { code: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (code === '123456') {
    return { success: true };
  } else if (Math.random() < 0.1) {
    throw new Error('Expired code');
  } else {
    throw new Error('');
  }
};
