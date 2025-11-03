// src/prisma.ts

import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();
//export default prisma;
// src/prisma.ts
//import pkg from '@prisma/client';
//const { PrismaClient } = pkg as any;
//const prisma = new PrismaClient();
export default prisma;