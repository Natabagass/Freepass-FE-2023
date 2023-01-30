import { Navigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import notFound from '../../image/cover_not_found.jpg'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../Data/Data";

const baseURL = "https://openlibrary.org/works/"

const BookDetails = () => {
    const {setBooks, books} = useContext(DataContext)
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        async function getBookDetails() {
            try {
                const response = await fetch(`${baseURL}${id}.json`)
                const data = await response.json()

                if (data) {
                    const { description, title, covers, subject_places, subject_times, subject_people, subject } = data
                    const detail = {
                        description: description ? description.value : "No Description Found!",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : notFound,
                        subject_places: subject_places ? subject_places.join(", ") : "No Subject Places Found!",
                        subject_times: subject_times ? subject_times.join(", ") : "No Subject Times Found!",
                        subject_people: subject_people ? subject_people.join(", ") : "No Subject People Found!",
                        subject: subject ? subject.join(", ") : "No Subject Found!",
                    }
                    setBook(detail)
                } else {
                    setBook(null)
                }
                setLoading(false)

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getBookDetails()
    }, [id])

    if (loading) {
        return <Loader />
    }

    const handleDelete = (id) => {
        // filter out the book with the given ID
        const updatedBooks = books.filter((book) => book.id !== id);
        const print = setBooks(updatedBooks);
        console.log(print)
    }


    return (
        <div className="pt-[50px]">
            <div className="p-[50px]">
                <h1 className="font-bold text-white my-[30px] text-[20px]">{book?.title}</h1>
                <div className="flex flex-col md:flex-row px-12 py-12 rounded-xl bg-white">
                    <div className='flex md:mx-0 mx-auto max-w-[180px] '>
                        <img src={book?.cover_img} alt="cover" />
                    </div>

                    <div className="flex mt-[20px] text-center md:text-left md:mt-0 flex-col md:ml-[20px]">
                        <div className="mb-[10px]">
                            <label className="font-bold text-gray-700">Description : </label>
                            <h1 className="text-gray-600">{book?.description}</h1>
                        </div>

                        <div className="mb-[10px]">
                            <label className="font-bold text-gray-700">Subject Places : </label>
                            <h1 className="text-gray-600">{book?.subject_places}</h1>
                        </div>

                        <div className="mb-[10px]">
                            <label className="font-bold text-gray-700">Subject People : </label>
                            <h1 className="text-gray-600">{book?.subject_people}</h1>
                        </div>

                        <div className="mb-[10px]">
                            <label className="font-bold text-gray-700">Subject Times : </label>
                            <h1 className="text-gray-600">{book?.subject_times}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-[50px]">
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-3 py-3 rounded-lg hover:bg-blue-600 focus:outline-none mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                        </button>
                        <button type="submit" onClick={() => handleDelete(book.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" /></svg></button>
                    </div>

                    <div className="flex justify-start">
                        <a href='/book' className="py-3 px-4 text-white rounded-lg bg-green-500 hover:bg-green-600">Back</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;