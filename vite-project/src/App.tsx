import { useEffect, useState } from "react";

type article = {
  id: number;
  title: string;
  slug: string;
  content: string;
  featured_image: string;

};

function App() {
  const [articles, setArticles] = useState<article[]>([]);

  useEffect(() => {
    fetch("http://localhost:8055/items/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className=" min-height bg-gray-100 " >
      <h1 className="text-3xl font-bold mb-4 text-center py-2 ">Articles</h1>

      {articles.map((articles) => (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 text-xl" >



          <div className="font-bold text-center flex flex-col text-3xl text-blue-600"> {articles.title}<br />
          </div>
          <div className="text-gray-700 text-center  font-bold flex flex-col text-lg">
            Slug: {articles.slug}<br />
           {articles.content}


          </div>
          <div className="flex justify-center">
            <img className="w-lg items-center h-auto mt-4 rounded-lg"
              src={`http://localhost:8055/assets/${articles.featured_image}`}
              alt={articles.title}
            />
          </div>
        </div>
      ))}
    </div>

  );
}

export default App;