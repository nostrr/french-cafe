import { Email, MailData } from '../email/mailApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendEmail = createAsyncThunk(
  'main/sendEmail',
  async (mailBody: string) =>
    await Email.send({ ...MailData, Body: mailBody }),
);