import { useNavigate } from "react-router-dom";


const Products = ({ products, children }) => {

    const { name, description, minOrderQuantity, availableQuantity, price, img } = products;
    const navigate = useNavigate();
    const handlerDetails = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"><u>{name}</u></h2>
                <p><b>Price : $</b>{price}<span className="text-info">/unit</span></p>
                <p><b> Min Order Quantity :</b>{minOrderQuantity}</p>
                <p><b> Available Quantity : </b>{availableQuantity}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <button onClick={() => handlerDetails(products._id)} className="btn btn-info">Buy Now</button>
                </div>
            </div>
        </div>

       

    );
};

export default Products;