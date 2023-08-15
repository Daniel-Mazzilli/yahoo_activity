
import {FaAngleRight } from "react-icons/fa"
import "./TopStory.scss"

export default function TopStory (){
    return (
        <div className="topStory">
      <div className="topStory_transparent">
        <div className="topStory_transparent_header">
          Obama warned of Trump's strength in private talk with Biden
        </div>
        <div className="topStory_transparent_bodyText">
          The two presidents discussed how much was at stake in 2024, especially
          because of the continued strenth of former President Donald Trump's
          base, according to sources.
        </div>
        <div className="topStory_transparent_link">
          'Another check-in conversation'{" "}
          <FaAngleRight className="topStory_transparent_arrow1" />
          <FaAngleRight className="topStory_transparent_arrow2" />
        </div>
      </div>
    </div>
    )
}