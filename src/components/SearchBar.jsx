import { forwardRef, useState } from 'react';

const SearchBar = forwardRef(({ onSearch, disabled }, ref) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
            onSearch(value);
            setValue('');
        }
    };
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                ref={ref}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Enter city name…"
                disabled={disabled}
                className="search-input"
            />
            <button
                type="submit"
                disabled={disabled || !value.trim()}
                className="search-btn"
            >
                Search
            </button>
        </form>
    );
});

export default SearchBar;