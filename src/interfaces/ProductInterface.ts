export interface ProductInterface {
    id?: number;
    title: string;
    price: string | number;
    description: string;
    category?: string;
    image?: string;
    rating?: {
        rate: number;
        count: number
    }
}
