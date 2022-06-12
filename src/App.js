import React from "react";
import './App.css'
import Reviews from './component/Reviews.jsx'

function App() {
	return (
		<main className="container flex flex-col items-center p-4">
      <h1 id="title" className="text-5xl font-semibold mb-16">Our Reviews</h1>
      <Reviews />
    </main>
	);
}

export default App;
