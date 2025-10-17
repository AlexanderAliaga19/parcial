import {DataRecordType} from "./data-record-type.entity.js";


export class Threshold {
    constructor({
                    id = null,
                    dataRecordTypeId = null,
                    equipmentTypeId = null,
                    minValue = 0,
                    maxValue = 0,
                    alertLevel = '',
                    description = '',
                    createdAt = null,
                    updatedAt = null,
                    dataRecordType = null
                }) {
        this.id = id;
        this.dataRecordTypeId = dataRecordTypeId;
        this.equipmentTypeId = equipmentTypeId;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.alertLevel = alertLevel;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.dataRecordType = dataRecordType instanceof DataRecordType ? dataRecordType : null;
    }
}