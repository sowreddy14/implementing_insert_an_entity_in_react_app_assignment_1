import './AddBook.css'



const AddBook = ({ goBack }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Book added (hypothetically)!");

  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="author" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" required />
        </div>
        <div className="form-group">
          <label>Cover Image URL:</label>
          <input type="url" name="coverImageUrl" required />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">Submit</button>
          <button
            type="button"
            onClick={goBack}
            className="back-button"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;