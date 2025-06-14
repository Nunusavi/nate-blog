import React from 'react'

function Search() {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState([]);

    // Dummy data for demonstration
    const data = [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Azure",
        "Node.js",
        "TypeScript",
        "Blogging",
        "Frontend",
        "Backend"
    ];

    React.useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
        } else {
            setResults(
                data.filter(item =>
                    item.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    }, [query]);

    return (
        <div className="relative w-full">
            <div className="flex items-center bg-white  rounded-full shadow-lg px-4 py-2 w-full">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
                </svg>
                <input
                    type="search"
                    className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 font-semibold"
                    placeholder="Search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
            {query && (
                <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-neutral-900 border border-purple-200 rounded shadow z-10 max-h-48 overflow-auto">
                    {results.length === 0 && (
                        <li className="text-gray-400 text-center px-4 py-2">No results found.</li>
                    )}
                    {results.map((item, idx) => (
                        <li
                            key={idx}
                            className="px-4 py-2 cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-800 text-purple-800 dark:text-purple-200"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search