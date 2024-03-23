import { useState } from "react";

type Props = {
    onSearchClicked: (searchText: string) => void;
};

const SearchBox = ({ onSearchClicked }: Props) => {
    const [searchText, setSearchText] = useState('');

    const onSearchChange = (text: string) => {
        if (/^[a-zA-Z\s]*$/.test(text)) {
            setSearchText(text);
        }
    }
    
    return (
        <div className="shadow-2xl mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input 
                className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
                type="text" 
                placeholder="Search for a city..." 
                value={searchText} 
                onChange={e => onSearchChange(e.target.value)} 
            />
            <button
                className="px-4 rounded-full disabled:opacity-50 transition text-base bg-black text-white py-1.5 h-[38px] -mr-3"
                onClick={() => onSearchClicked(searchText)}
                disabled={searchText.length === 0}
            >Search</button>
        </div>
    );
};

export default SearchBox;