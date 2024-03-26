import { useState } from "react";
import AsyncSelect from "react-select/async";
import { getAutoCompleteLocations } from "../api/weatherApi";
import { TSuggestedLocation } from "../types/location";

const getOptionalLocations = async (inputValue: string): Promise<TSuggestedLocation[]> => {
    try {
        const suggestedLocations = await getAutoCompleteLocations(inputValue);
        if (!suggestedLocations) {
            return [];
        }

        return suggestedLocations.map(suggestedLocation => ({
            value: parseInt(suggestedLocation.Key),
            localizedName: suggestedLocation.LocalizedName,
            label: `${suggestedLocation.LocalizedName}, ${suggestedLocation.Country.LocalizedName}`
        })) as TSuggestedLocation[];
    } catch (err) {
        console.error(err);
        return [];
    }
}

type Props = {
    onLocationSelected: (selectedLocation: TSuggestedLocation) => void;
};

const SearchBox = ({ onLocationSelected }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<TSuggestedLocation | null>(null);

    const onSelectChange = (selectedLocation: TSuggestedLocation | null) => {
        if (selectedLocation) {
            setSelectedLocation(selectedLocation);
            onLocationSelected(selectedLocation);
        }
    }

    const onInputChange = (text: string) => {
        if (!/^[a-zA-Z\s]*$/.test(text)) {
            return;
        }
        setSearchText(text);
    };
    
    return (
        <AsyncSelect
            className="w-3xl mt-4 mx-96"
            placeholder="Search for a city..."
            inputValue={searchText}
            value={selectedLocation}
            cacheOptions
            onInputChange={onInputChange}
            onChange={onSelectChange}
            loadOptions={getOptionalLocations}
        />
    );
};

export default SearchBox;