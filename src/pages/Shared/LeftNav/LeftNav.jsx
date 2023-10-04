import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className="text-2xl font-semibold ">All Category</h2>
            {
                categories.map(category => <Link 
                    className="block ml-8 my-10 text-[#9F9F9F] text-xl font-medium  hover:text-black "
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}
                        </Link>)
            }
        </div>
    );
};

export default LeftNav;