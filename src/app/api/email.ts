import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, email, phone, message } = req.body;

    // Validación básica de los datos del formulario
    if (!username || !email || !phone || !message) {
      return res
        .status(400)
        .send('Por favor, complete todos los campos del formulario');
    }

    // Convertir el campo phone a número
    const phoneNumber = parseInt(phone, 15); // Parsear como número entero

    // Verificar si la conversión fue exitosa
    if (isNaN(phoneNumber)) {
      return res
        .status(400)
        .send('El número de teléfono debe ser un número válido');
    }

    // Configurar nodemailer para enviar el correo electrónico
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Contenido del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Formulario de contacto',
      html: `
        <h2>Formulario de contacto</h2>
        <p>Nombre: ${username}</p>
        <p>Correo: ${email}</p>
        <p>Teléfono: ${phoneNumber}</p>
        <p>Mensaje: ${message}</p>
      `,
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado exitosamente:', info.response);
    return res.send('Correo electrónico enviado exitosamente');
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return res.status(500).send('Se produjo un error al procesar la solicitud');
  }
});

export default router;
