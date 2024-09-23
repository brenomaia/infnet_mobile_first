const Ads = ({ ads }) => {
    return (
        <div class="group-ads-container">
            <h3>Anúncios</h3>
            <div class="ads-container">
                {ads.map((ad) => (
                    <div class="ad-container">
                        <img src={ad.imgPath} alt="ad image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ads;