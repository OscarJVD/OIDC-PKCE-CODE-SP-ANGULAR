export class Entity {
    id: string;
    entity_id: string;
    entity_name: string;
    domain: string;
    acs_url: string;

    constructor(id = '',entity_id = '',entity_name = '',domain = '',acs_url = '')
    {
        this.id = id;
        this.entity_id = entity_id;
        this.entity_name = entity_name;
        this.domain = domain;
        this.acs_url = acs_url;

    }
}
