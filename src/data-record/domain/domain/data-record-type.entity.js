

export class DataRecordType{

    constructor({id=null, name='', description='', unit='', createdAt=null, updatedAt=null}){
        this.id=id;
        this.name=name;
        this.description=description;
        this.unit=unit;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
    }
}