import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const dataRecordsEndpointPath = import.meta.env.VITE_DATA-RECORDS_ENDPOINT_PATH;
const dataRecordTypesEndpointPath = import.meta.env.VITE_DATA-RECORD-TYPES_ENDPOINT_PATH;
const thresholdsEndpointPath = import.meta.env.VITE_THRESHOLDS_ENDPOINT_PATH;

export class DataRecordApi extends BaseApi {
    #dataRecordsEndpoint;
    #dataRecordTypesEndpoint;
    #thresholdsEndpoint;

    constructor() {
        super();
        this.#dataRecordsEndpoint = new BaseEndpoint(this, dataRecordsEndpointPath);
        this.#dataRecordTypesEndpoint = new BaseEndpoint(this, dataRecordTypesEndpointPath);
        this.#thresholdsEndpoint = new BaseEndpoint(this, thresholdsEndpointPath);
    }

    getDataRecords() {
        return this.#dataRecordsEndpoint.getAll();
    }

    getDataRecordById(id) {
        return this.#dataRecordsEndpoint.getById(id);
    }

    createDataRecord(resource) {
        return this.#dataRecordsEndpoint.create(resource);
    }

    updateDataRecord(resource) {
        return this.#dataRecordsEndpoint.update(resource.id, resource);
    }

    deleteDataRecord(id) {
        return this.#dataRecordsEndpoint.delete(id);
    }

    getDataRecordTypes() {
        return this.#dataRecordTypesEndpoint.getAll();
    }

    getDataRecordTypeById(id) {
        return this.#dataRecordTypesEndpoint.getById(id);
    }

    createDataRecordType(resource) {
        return this.#dataRecordTypesEndpoint.create(resource);
    }

    updateDataRecordType(resource) {
        return this.#dataRecordTypesEndpoint.update(resource.id, resource);
    }

    deleteDataRecordType(id) {
        return this.#dataRecordTypesEndpoint.delete(id);
    }
}