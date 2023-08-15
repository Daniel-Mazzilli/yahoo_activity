import './Stories.css';

import Instance from './Instance';

const instances = [
  {
    image: 'https://s.yimg.com/ny/api/res/1.2/MK4FSKJ.zBDcYvkKyRoeXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/sheknows_79/e3a2c30b33a950c31137a017303e9e98',
    category: ['Celebrity', 'SheKnows'],
    header: "The Internet Thinks Justin Trudeau's Wife Sophie Had an Affair With This Famous Actor",
    description: "Justin Trudeau and Sophie Grégoire Trudeau's separation announcement is still fresh but the internet is already speculating about where their trouble began. The couple, who have been married for 18 years, jointly announced their separation in Instagram posts on August 2 and while their statements didnt allude to any infidelity, the internet seems to think otherwise and …",
    stats: ["708", "3 min read"]
  },
  {
    image: 'https://s.yimg.com/uu/api/res/1.2/jQc8ri43dvLrW6wwWrl9LA--~B/Zmk9c3RyaW07aD0yODQ7cT04MDt3PTUzNjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/in_touch_weekly_336/fffe663bec8d8b89be799ddb42f381fe.cf.webp',
    category: ['Celebrity', 'In Touch Weekly'],
    header: "Tori Spelling’s Mom Candy Slammed ​for Not Helping ​out Financially After Tori Moves ​Into an RV",
    description: "Tori Spelling's mom Candy Spelling is being slammed by fans for not helping her daughter financially amid her money woes. Candy -- a successful author with a $600 million reported net worth -- faced backlash amid her latest social media post with followers pointing out Tori's unfavorable living situation and ongoing drama with estranged husband Dean McDermott. After...",
    stats: ["311", "3 min read"]
  },
  {
    image: 'https://s.yimg.com/ny/api/res/1.2/MK4FSKJ.zBDcYvkKyRoeXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/sheknows_79/e3a2c30b33a950c31137a017303e9e98',
    category: ['Celebrity', 'SheKnows'],
    header: "The Internet Thinks Justin Trudeau's Wife Sophie Had an Affair With This Famous Actor",
    description: "Justin Trudeau and Sophie Grégoire Trudeau's separation announcement is still fresh but the internet is already speculating about where their trouble began. The couple, who have been married for 18 years, jointly announced their separation in Instagram posts on August 2 and while their statements didnt allude to any infidelity, the internet seems to think otherwise and …",
    stats: ["708", "3 min read"]
  },
  {
    image: 'https://s.yimg.com/uu/api/res/1.2/jQc8ri43dvLrW6wwWrl9LA--~B/Zmk9c3RyaW07aD0yODQ7cT04MDt3PTUzNjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/in_touch_weekly_336/fffe663bec8d8b89be799ddb42f381fe.cf.webp',
    category: ['Celebrity', 'In Touch Weekly'],
    header: "Tori Spelling’s Mom Candy Slammed ​for Not Helping ​out Financially After Tori Moves ​Into an RV",
    description: "Tori Spelling's mom Candy Spelling is being slammed by fans for not helping her daughter financially amid her money woes. Candy -- a successful author with a $600 million reported net worth -- faced backlash amid her latest social media post with followers pointing out Tori's unfavorable living situation and ongoing drama with estranged husband Dean McDermott. After...",
    stats: ["311", "3 min read"]
  },
  {
    image: 'https://s.yimg.com/ny/api/res/1.2/MK4FSKJ.zBDcYvkKyRoeXQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/sheknows_79/e3a2c30b33a950c31137a017303e9e98',
    category: ['Celebrity', 'SheKnows'],
    header: "The Internet Thinks Justin Trudeau's Wife Sophie Had an Affair With This Famous Actor",
    description: "Justin Trudeau and Sophie Grégoire Trudeau's separation announcement is still fresh but the internet is already speculating about where their trouble began. The couple, who have been married for 18 years, jointly announced their separation in Instagram posts on August 2 and while their statements didnt allude to any infidelity, the internet seems to think otherwise and …",
    stats: ["708", "3 min read"]
  },
]


function Stories() {
  return (
    <div className="Stories">
      <h3>Stories for you</h3>

      {instances.map((instance, idx) => {
        return <Instance 
          key={idx}
          image={instance.image} 
          category={instance.category} 
          header={instance.header} 
          description={instance.description} 
          stats={instance.stats} 
        />
      })}
    </div>
  );
}

export default Stories;
