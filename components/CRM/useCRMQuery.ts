import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { IDeal } from '~/types/deals.types'
import { CRM_DATA } from './CRM.data'
import type { IColumn } from './CRM.types'

export function useCRMQuery() {
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newBoard: IColumn[] = CRM_DATA.map(column => ({
				...column,
				items: [],
			}))

			const deals = data.documents as unknown as IDeal[]

			for (const deal of deals) {
				const column = newBoard.find(col => col.id === deal.status)
				if (column) {
					column.items.push({
						$createdAt: deal.$createdAt,
						id: deal.$id,
						name: deal.name,
						price: deal.price,
						companyName: deal.customer.name,
						status: column.name,
					})
				}
			}

			return newBoard
		},
	})
}
