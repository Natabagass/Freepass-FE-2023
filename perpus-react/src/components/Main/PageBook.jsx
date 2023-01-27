import SearchForm from "../Search/SearchForm";
import BookList from "../ViewBook/BookList";
import Navbar from "./Navbar";

const PageBook = () => {
    return (
        <div className="">
            <div className="">
                <Navbar />
                <SearchForm />
                <BookList />
            </div>
        </div>
    );
}

export default PageBook;