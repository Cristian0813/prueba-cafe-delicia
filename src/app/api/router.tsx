import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';

const RECAPTCHA_SITE_KEY = '6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT';
const RECAPTCHA_SECRET_KEY = '6Ld_wnkpAAAAAMM4k2tE6DI_iyBQGjJGcbk34-Zh';

async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );
    const { success, score } = response.data;
    return success && score > 0.5;
  } catch (error) {
    console.error('Error al verificar el token reCAPTCHA:', error);
    return false;
  }
}

async function sendEmail(
  username: string,
  email: string,
  phone: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'javier.0813@hotmail.com',
      pass: 'arias0813',
    },
  });

  const mailOptions = {
    from: 'javier.0813@hotmail.com',
    to: 'cristianjariaso@gmail.com',
    subject: 'Mensaje desde formulario de contacto',
    text: `Nombre: ${username}\nCorreo: ${email}\nCorreo: ${phone}\nMensaje: ${message}`,
  };

  return new Promise<void>((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar correo electrónico:', error);
        reject(error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
        resolve();
      }
    });
  });
}

export default async function router(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, email, phone, message, token } = req.body;

    const isRecaptchaValid = await verifyRecaptchaToken(token);
    if (!isRecaptchaValid) {
      return res.status(403).json({ error: 'Token reCAPTCHA no válido' });
    }

    try {
      await sendEmail(username, email, phone, message);
      return res
        .status(200)
        .json({ message: 'Correo electrónico enviado correctamente' });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Error al enviar correo electrónico' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}