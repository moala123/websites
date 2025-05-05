
function Explore() {
  const talents = [
    {
      id: 1,
      title: "Street Photography",
      category: "Photography",
      description: "Urban life captured through my lens",
      author: "Mike Johnson",
      image: "/images/photography.jpg"
    },
    {
      id: 2,
      title: "Modern Dance",
      category: "Dance",
      description: "Contemporary dance performance",
      author: "Sarah Williams",
      image: "/images/dance.png"
    }
  ];

  return (
    <div className="explore-page">
      <h1>Explore Talents</h1>
      <select className="category-select">
        <option value="">All Categories</option>
        <option value="photography">Photography</option>
        <option value="dance">Dance</option>
        <option value="music">Music</option>
        <option value="art">Art</option>
        <option value="sport">sport</option>
      </select>
      <div className="talent-grid">
        {talents.map(talent => (
          <div key={talent.id} className="talent-card">
            <img src={talent.image} alt={talent.title} />
            <div className="talent-content">
              <h3>{talent.title}</h3>
              <p className="category">{talent.category}</p>
              <p className="description">{talent.description}</p>
              <p className="author">By {talent.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;