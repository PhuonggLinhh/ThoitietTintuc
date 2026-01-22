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
});

export default SearchBar;