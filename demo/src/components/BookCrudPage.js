import React, { useState } from 'react';

const BookCrudPage = () => {
  const [addTarget, setAddTarget] = useState(null); // Will hold 'KEC' or 'OCLG'

  const handleAddClick = (target) => {
    setAddTarget(target); 
    // Logic to open the form for adding to the selected collection
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <button onClick={() => handleAddClick('KEC')}>Add Book to KEC</button>
      <button onClick={() => handleAddClick('OCLG')}>Add Book to OCLG</button>

      {addTarget && (
        <AddBookForm target={addTarget} onSuccess={() => setAddTarget(null)} />
      )}
    </div>
  );
};
export default BookCrudPage;
