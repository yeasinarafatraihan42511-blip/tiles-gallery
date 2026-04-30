


const FeaturedTiles = async () => {
    const res = await fetch('https://tiles-gallery-five.vercel.app/data.json');
    const tiles = await res.json();
    console.log(tiles);

    return (
        <div>
            <h2 className="text-3xl font-bold mt-5 mb-8">Featured Tiles</h2>
            
        </div>
    );
};

export default FeaturedTiles;
