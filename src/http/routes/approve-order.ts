import Elysia, { t } from 'elysia'
import { authentication } from '../authentication'
import { db } from '@/db/connection'
import { orders } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const approveOrder = new Elysia().use(authentication).patch(
  '/orders/:id/approve',
  async ({ getCurrentUser, set, params }) => {
    const { id: orderId } = params
    const { restaurantId } = await getCurrentUser()

    if (!restaurantId) {
      set.status = 401

      throw new Error('User is not a restaurant manager.')
    }

    const order = await db.query.orders.findFirst({
      where(fields, { eq, and }) {
        return and(
          eq(fields.id, orderId),
          eq(fields.restaurantId, restaurantId),
        )
      },
    })

    if (!order) {
      set.status = 401

      throw new Error('Order not found under the user managed restaurant.')
    }

    await db
      .update(orders)
      .set({
        status: 'approved',
      })
      .where(eq(orders.id, orderId))

    set.status = 204
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  },
)
