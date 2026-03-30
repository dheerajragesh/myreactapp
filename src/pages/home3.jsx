import React from 'react';
import Todolist from '../components/Todolist';

const Home3 = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">To do list</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded shadow-sm bg-light">
          <Todolist />
        </div>
      </div>
    </div>
  );
};

export default Home3;
