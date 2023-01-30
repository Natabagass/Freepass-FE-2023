import BookDetails from "../ViewBook/BookDetails";
import Navbar from "./Navbar";

const ReadBook = () => {
    return (
        <>
            <body className="bg-[#2A3342] h-full">
                <Navbar />
                <BookDetails />
            </body>
        </>
    );
}

export default ReadBook;