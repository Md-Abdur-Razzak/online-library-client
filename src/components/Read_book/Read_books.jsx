import { useLoaderData } from "react-router-dom";


const Read_books = () => {
    const data = useLoaderData()
   const {content}=data || {}
    return (
        <div>
            {content}
        </div>
    );
};

export default Read_books;