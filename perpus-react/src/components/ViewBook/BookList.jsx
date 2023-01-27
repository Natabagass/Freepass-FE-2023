import { useContext } from "react";
import { DataContext } from "../Data/Data";
import Header from "../Main/Navbar";
import Loader from "../Loader/Loader";
import SearchForm from "../Search/SearchForm";
import Book from "../ViewBook/Book"
import notFound from "../../image/cover_not_found.jpg"

const BookList = () => {
    const { books, loading, result } = useContext(DataContext)
    const booksCover = books.map(data => {
        return {
            ...data,
            id: (data.id).replace("/works/", ""),
            cover_img: data.cover_id ? `https://covers.openlibrary.org/b/id/${data.cover_id}-L.jpg` : notFound,
            title: data.title ? `${data.title}` : <h1 className="text-white">Title Not Found</h1>
        }
    })

    console.log(booksCover)

    if (loading) {
        return <Loader />
    }

    return (
        <section>
            <div className="">
                <div className="text-white font-bold px-16 text-[30px]">
                    <h2>{result}</h2>
                </div>
                <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        booksCover.slice(0, 30).map((data, index) => {
                            return (
                                <Book key={index} {...data} />
                            )
                        })
                    }
                </div>
                <div class="flex justify-end py-[50px] mx-[100px]">
                    <a href="/dashboard" class="p-2 px-5 text-white rounded-lg bg-green-500 hover:bg-green-600">Back</a>
                </div>
            </div>
        </section>
    );
}

export default BookList;