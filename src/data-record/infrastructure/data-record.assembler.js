import {DataRecord} from "../domain/domain/data-record.entity.js";


export class DataRecordAssembler {
    static toEntityFromResource(resource) {
        return new DataRecord({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['data-records'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}