import { User } from "./user.model";

export class Customer {
    id!: string;
    name!: string;
    website?: string;
    address!: string;
    users?: User[] = [];
    createdOn!: string;
    modifiedOn!: string;
}