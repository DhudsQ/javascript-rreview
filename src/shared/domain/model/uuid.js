import{ v4 as uuidv4, validae as uuidValidate} from 'uuid';

export function generateUuid() {
    return uuidv4();
}

export function  validateUuid(uuid) {
    return uuidValidate(uuid);
}