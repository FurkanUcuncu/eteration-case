export interface IProductCard {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    isFavorite: boolean;
    model: string;
}

export interface ICart {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

export interface IFavorite extends IProductCard {
    isFavorite: boolean;
}