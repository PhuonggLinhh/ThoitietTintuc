import NewsCard from './NewsCard';

export default function NewsSection({ articles, city }) {
  return (
    <section className="news-section">
      <h2 className="news-title">Latest News about {city}</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}