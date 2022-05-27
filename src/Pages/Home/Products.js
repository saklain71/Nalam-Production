import { useNavigate } from "react-router-dom";


const Products = ({ products, children }) => {

    const { name, description, minOrderQuantity, availableQuantity, price, img } = products;
    const navigate = useNavigate();
    const handlerDetails = id => {
        navigate(`/purchase/:${id}`);
    }

    return (
        

            <div>
                <div className="">
                    <img className="w-28 text-center " src={img} alt="" />
                </div>
                <h2>{name}</h2>
                <p><b>Price : $</b>{price}/unit</p>
                <p><b> Min Order Quantity :</b>{minOrderQuantity}</p>
                <p><b> Available Quantity : </b>{availableQuantity}</p>
                <p> {description}</p>
                <button onClick={() => handlerDetails(products.id)} className='btn bg-info'>Order Place</button>
            </div>

    );
};

export default Products;