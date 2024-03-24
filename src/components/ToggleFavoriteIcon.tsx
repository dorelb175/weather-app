import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ToggleFavoriteIcon = ({ isFavorite, handleToggleFavorite }: { isFavorite: boolean, handleToggleFavorite: () => void }) => {
    return (
        <div>
        {isFavorite ? (
            <FavoriteIcon onClick={handleToggleFavorite} />
        ) : (
            <FavoriteBorderIcon onClick={handleToggleFavorite} />
        )}
    </div>
    );
}

export default ToggleFavoriteIcon;