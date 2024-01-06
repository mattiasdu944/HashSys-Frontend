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
        images:      any[];
        createdAt:   string;
        updatedAt:   string;
    
    
}
