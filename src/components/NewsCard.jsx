export default function NewsCard({ article }) {
  const { title, description, urlToImage, url } = article;

  return (
    <div className="news-card">
      {urlToImage ? (
        <img src={urlToImage} alt={title} className="news-thumbnail" />
      ) : (
        <div className="news-thumbnail" style={{ background: '#e5e7eb' }} />
      )}

      <div className="news-content">
        <h3 className="news-title-article">{title}</h3>
        <p className="news-description">{description || 'No description available'}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read more →
        </a>
      </div>
    </div>
  );
}