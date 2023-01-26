import SearchForm from "../Search/SearchForm";
import BookList from "../ViewBook/BookList";
import Navbar from "./Navbar";

const PageBook = () => {
    return (
        <div>
            <Navbar/>
            <SearchForm/>
            <BookList/>
        </div>
    );
}

export default PageBook;