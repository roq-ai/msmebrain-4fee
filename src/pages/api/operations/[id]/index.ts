import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { operationsValidationSchema } from 'validationSchema/operations';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.operations
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getOperationsById();
    case 'PUT':
      return updateOperationsById();
    case 'DELETE':
      return deleteOperationsById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getOperationsById() {
    const data = await prisma.operations.findFirst(convertQueryToPrismaUtil(req.query, 'operations'));
    return res.status(200).json(data);
  }

  async function updateOperationsById() {
    await operationsValidationSchema.validate(req.body);
    const data = await prisma.operations.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteOperationsById() {
    const data = await prisma.operations.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
