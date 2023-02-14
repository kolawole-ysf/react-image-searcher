const Header = ({ onSubmit, onChange, onKeyDown, images}) => {
  
  return (
    <div className="header">
        <h1>Search Images</h1>
        <form className="image-search" onSubmit={onSubmit}>
            <input 
            type="search" 
            className="search-input" 
            onChange={onChange} 
            onKeyDown={onKeyDown}
            value={images}
            placeholder="Search for anything..."/>
        </form>
    </div>
  )
}

export default Header
