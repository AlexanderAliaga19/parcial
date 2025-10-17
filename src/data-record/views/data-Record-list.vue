<script setup>
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import usePublishingStore from "../../application/publishing.store.js";
import {computed, onMounted, ref} from "vue";
import {Category, DataRecord} from "../../domain/model/data-Record.entity.js";

const {t} = useI18n();
const route = useRoute();
const router = useRouter();
const store = usePublishingStore();
const {errors, addDatarecord, updateDatarecord} = store;

const form = ref({name: ''});
const isEdit = computed(() => !!route.params.id);

onMounted(() => {
  console.log(route.params.id);
  if (isEdit.value) {
    const datarecord = getDatarecordById(route.params.id);
    console.log(datarecord);
    if (datarecord) form.value.name = datarecord.name; else router.push({name: 'publishing-datarecord'});
  }
});

function getCategoryById(id) {
  return store.getDatarecordById(id);
}

const saveCategory = () => {
  const dataRecord = new DataRecord({
    id: isEdit.value ? route.params.id : null,
    name: form.value.name,
  });
  if (isEdit.value) updateDatarecord(category); else addDatarecord(dataRecord);
  navigateBack();
};

const navigateBack = () => {
  router.push({name: 'publishing-datarecord'});
};
</script>

<template>
  <div class="p-4">
    <h1>{{ isEdit ? t('datarecord.edit-title') : t('datarecord.new-title') }}</h1>
    <form @submit.prevent="saveCategory">
      <div class="field mb-3">
        <label for="name">{{ t('datarecord.name') }}</label>
        <pv-input-text id="name" v-model="form.name" class="w-full" required/>
      </div>
      <pv-button :label="t('datarecord.save')" icon="pi pi-save" type="submit"/>
      <pv-button :label="t('datarecord.cancel')" class="ml-2" severity="secondary" @click="navigateBack"/>
    </form>
    <div v-if="errors.length" class="text-red-500 mt-3">
      {{ t('errors.occurred') }}: {{ errors.map(e => e.message).join(', ') }}
    </div>
  </div>
</template>

<style scoped>

</style>