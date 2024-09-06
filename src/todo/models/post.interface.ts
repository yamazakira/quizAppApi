export interface TodoPost {
    // ID and date optional since they are going to be atributed automatically
    id?: number;
    body?: string;
    createdAt?: Date
}