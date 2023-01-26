import { useContext } from "react";
import { DataContext } from "../Data/Data";
import Header from "../Main/Navbar";
import Loader from "../Loader/Loader";
import SearchForm from "../Search/SearchForm";
import Book from "../ViewBook/Book"

const BookList = () => {
    const { books, loading, resultTitle } = useContext(DataContext)
    const booksCover = books.map(data => {
        return {
            ...data,
            id: (data.id).replace("/works/", ""),
            cover_img: data.cover_id ? `https://covers.openlibrary.org/b/id/${data.cover_id}-s.jpg` : "Image Was Not Found"
        }
    })

    console.log(booksCover)

    if(loading){
        return <Loader/>
    }

    return (
        <section>
            <div>
                <div>
                    <h2>{resultTitle}</h2>
                </div>
                <div className="grid">
                    {
                        booksCover.slice(0, 30).map((data, index) => {
                            return(
                                <Book key={index} {...data}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default BookList;