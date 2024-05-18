<script setup lang="ts">
import dayjs from 'dayjs'
import { useDealSlideStore } from '~/store/deal-slide.store'

const store = useDealSlideStore()
</script>

<template>
	<div class="border-border bg-black/20 rounded p-3">
		<div class="uppercase bold text-xl mb-4">О сделке</div>
		<CRMSlideoverLabel label-text="Наименование">
			<h2>
				{{ store.card?.name }}
			</h2>
		</CRMSlideoverLabel>
		<CRMSlideoverLabel label-text="Сумма">
			{{ convertCurrency(store.card?.price || 0) }}
		</CRMSlideoverLabel>
		<CRMSlideoverLabel label-text="Статус">
			<UiBadge variant="outline">
				{{ store.card?.status }}
			</UiBadge>
		</CRMSlideoverLabel>
		<CRMSlideoverLabel label-text="Клиент">
			{{ store.card?.companyName }}
		</CRMSlideoverLabel>
		<CRMSlideoverLabel label-text="Дата создания">
			{{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
		</CRMSlideoverLabel>
	</div>
</template>
