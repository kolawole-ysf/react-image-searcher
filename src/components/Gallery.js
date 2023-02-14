const Gallery = ( {images, searchValue} ) => {
  return (
    <div className="grid-container">
        <h2>Searched results for {searchValue} </h2>
          <div className="grid">
            {images.map(image=>{ return <div className="grid-item" key={image.id}><img src={image.urls.full}  alt={image.alt_description} />
            <div className="image-details">
              <span>{image.alt_description}</span>
              <a className="btn" href={image.urls.full} target="_blank" rel="noreferrer" download>View Image</a>
            </div>
            </div>})}
          </div>
    </div>
  )
}

export default Gallery
