export interface ProductValues {
    name: string;
    price: number;
    image: File | null;

    [key: string]: string | number | File | null
}