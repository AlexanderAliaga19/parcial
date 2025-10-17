import {DataRecordType} from "../domain/domain/data-record-type.entity.js";


export class DataRecordTypeAssembler {
    static toEntityFromResource(resource) {
        return new DataRecordType({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['data-record-types'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}