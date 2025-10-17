import {Threshold} from "../domain/domain/threshold.entity.js";


export class ThresholdAssembler {
    static toEntityFromResource(resource) {
        return new Threshold({...resource});
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['thresholds'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}
