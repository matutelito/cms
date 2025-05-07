import { PrismaClient } from '../generated/prisma'; // Asegúrate de que la ruta sea correcta

const prisma = new PrismaClient();

export { prisma };