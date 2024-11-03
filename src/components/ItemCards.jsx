import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ItemCards = () => {
    const { category } = useParams();  
    const allData = useLoaderData();    

    // Filter items based on the selected category
    const filteredData = allData.filter(item => item.category === category);

    return (
        <div className="container mx-auto px-4"> {/* Centering the content with padding */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                {filteredData.map(item => (
                    <Card key={item.product_id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemCards;
