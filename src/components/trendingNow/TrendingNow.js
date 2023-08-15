import "./TrendingNow.scss";

export default function TrendingNow() {
  return (
    <div className="trendingNow">
      <div className="trendingNow__header">
        <div className="trendingNow__header__shape"></div>
        <div className="trendingNow__header_text">Trending Now</div>
      </div>
      <div className="trendingNow__columns">
        <div className="trendingNow_columns__one">
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">1.</span>Donald
            Trump
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">2.</span>Hall Of
            Fame Gam...
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">3.</span>Justin
            Trudeau
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">4.</span>
            Russia-Ukraine War
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">5.</span>Tori
            Spelling
          </div>
        </div>
        <div className="trendingNow_columns_two">
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">6.</span>Leprosy in
            Florida
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">7.</span>Taylor
            Swift
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">8.</span>Hyundai
            Recall
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">9.</span>Fifa
            Women's Wo...
          </div>
          <div className="trendingNow__listItem">
            <span className="trendingNow__listItem__num">10.</span>Caroline
            Kennedy
          </div>
        </div>
      </div>
    </div>
  );
}
