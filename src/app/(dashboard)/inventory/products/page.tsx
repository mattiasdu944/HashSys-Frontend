import { TitlePage } from "@/modules/shared";
import { ProductReportCard } from '../../../../modules/inventory/components/products/ProductReportCard';

export default function ProductsPage() {
    return (
        <> 
            <TitlePage title="Productos" subTitle="Gestiona los productos de tu empresa"/>
            <ProductReportCard/>
        
        </>
    );
}