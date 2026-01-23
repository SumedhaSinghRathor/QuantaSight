import displayImg from "../assets/pexels-photo-8539752.jpeg";

function News() {
  return (
    <div className="p-2.5 grid grid-cols-4 gap-4">
      {Array.from({ length: 5 }).map((_) => (
        <div className="bg-white border border-border rounded-lg overflow-clip cursor-pointer hover:scale-105 transition-all duration-150">
          <img
            src={displayImg}
            alt="displayImg"
            className="w-full aspect-video"
          />
          <div className="py-1 px-3">
            <h1 className="text-lg font-bold">News Headline</h1>
            <p className="line-clamp-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              commodi, harum rerum fuga quo explicabo minus? Cupiditate labore
              consectetur id, enim blanditiis eligendi quas, iste temporibus
              molestiae, adipisci voluptatem minima?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
