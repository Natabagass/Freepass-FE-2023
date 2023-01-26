const Book = (book) => {
    return (
        <div className="flex flex-col">
            <div>
                <img src={book.cover_img} alt="cover" />
            </div>
        </div>
    );
}

export default Book;