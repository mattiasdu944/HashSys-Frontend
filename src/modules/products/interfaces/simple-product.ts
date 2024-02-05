export interface ISimpleProduct {
        id:          string;
        name:        string;
        description: string;
        price:       string;
        code:        string;
        slug:        string;
        category:    {
            name: string;
            slug: string;
        };
        productType: string;
        images:      IProductImages[];
        createdAt:   string;
        updatedAt:   string;
    
    
}

interface IProductImages {
    id: number;
    image: string;
    product_id: string;
    created_at: string;
    updated_at: string;
}