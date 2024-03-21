import { useState } from "react";

type Props = {
    onSearchClicked: () => void;
};

const SearchBox = ({ onSearchClicked }: Props) => {
    const [searchText, setSearchText] = useState('');
    
    return (
        <div>
            <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button onClick={onSearchClicked}>Search</button>
        </div>
    );
};

export default SearchBox;