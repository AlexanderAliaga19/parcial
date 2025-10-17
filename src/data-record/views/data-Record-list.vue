
<style scoped>

</style>

<script setup>
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {useConfirm} from "primevue";
import usePublishingStore from "../../application/publishing.store.js";
import {onMounted} from "vue";

const {t} = useI18n();
const router = useRouter();
const confirm = useConfirm();
const store = usePublishingStore();
const {datarecord, datarecordLoaded, errors, fetchdatarecord, deletedatarecord} = store;

onMounted(() => {
  if (!datarecordLoaded) fetchdatarecord();
  console.log(datarecord);
});

const navigateToNew = () => {
  router.push({name: 'publishing-datarecord-new'});
};

const navigateToEdit = (id) => {
  router.push({name: 'publishing-datarecord-edit', params: {id}});
};

const confirmDelete = (category) => {
  confirm.require({
    message: t('datarecord.confirm-delete', {name: datarecord.name}),
    header: t('datarecord.delete-header'),
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      deletedatarecord(datarecord);
    },
  });
};
</script>

<template>
  <div class="p-4">
    <h1>{{ t('datarecord.title') }}</h1>
    <pv-button :label="t('datarecord.new')" class="mb-3" icon="pi pi-plus" @click="navigateToNew"/>
    <pv-data-table
        :loading="!datarecordLoaded"
        :rows="5"
        :rows-per-page-options="[5, 10, 20]"
        :value="datarecord"
        paginator
        striped-rows
        table-style="min-width: 50rem">
      <pv-column :header="t('datarecord.id')" field="id" sortable/>
      <pv-column :header="t('datarecord.name')" field="name" sortable/>
      <pv-column :header="t('datarecord.actions')">
        <template #body="slotProps">
          <pv-button icon="pi pi-pencil" rounded text @click="navigateToEdit(slotProps.data.id)"/>
          <pv-button icon="pi pi-trash" rounded severity="danger" text @click="confirmDelete(slotProps.data)"/>
        </template>
      </pv-column>
    </pv-data-table>
    <div v-if="errors.length" class="text-red-500 mt-3">
      {{ t('errors.occurred') }}: {{ errors.map(e => e.message).join(', ') }}
    </div>
    <pv-confirm-dialog/>
  </div>
</template>

<style scoped>

</style>