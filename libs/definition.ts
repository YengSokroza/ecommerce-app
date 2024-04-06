//dashboard card type
export type ProductType = {
        id: number,
        name:string,
        price:number,
        category:string,
        desc:string,
        image:string
    
}

// ----------------card props type-------------

//card product detail type
export type DetailProductType = {
        name: string;
        image: string;
        desc: string;
}

//card listing type
export type PropsType = {
        name: string;
        image: string;
        price: number;
        onClick?: () => void
}
    
