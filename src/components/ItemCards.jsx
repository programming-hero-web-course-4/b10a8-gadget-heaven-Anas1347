import { useParams } from "react-router-dom";

const ItemCards = () => {
    const obj = useParams();
    console.log(obj);
    return (
        <div>
            <h2>Items Cards</h2>
        </div>
    );
};

export default ItemCards;