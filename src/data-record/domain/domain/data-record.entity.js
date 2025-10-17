import {DataRecordType} from "./data-record-type.entity.js";


export class DataRecord {
    constructor({
                    id = null, equipmentAssetId = null, dataRecordTypeId = null, value = 0,
                    recordedAt = null, createdAt = null, updatedAt = null, dataRecordType = null
                }) {
        this.id = id;
        this.equipmentAssetId = equipmentAssetId;
        this.dataRecordTypeId = dataRecordTypeId;
        this.value = value;
        this.recordedAt = recordedAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.dataRecordType = dataRecordType instanceof DataRecordType ? dataRecordType : null;
    }
}