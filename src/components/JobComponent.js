import React from "react";

const JobComponent = ({job:{
    company,logo,isNew,featured,position,role,level,postedAt,contract,location,languages,tools},
    handleTagClick,
}) => {
        const tags=[role,level];
        if(tools){
            tags.push(...tools);
        }
        if(languages){
            tags.push(...languages)
        }

        return( 
<div className={`flex bg-white shadow-md m-4 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'}`} >
  <div>
    <img src={logo} alt={company} />
  </div>
  <div className="flex flex-col justify-between ml-4">
    <h3 className="font-bold text-base text-teal-500">{company}
    {isNew && (<span className="bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full"> New! </span>)}
    {featured && (<span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full"> featured </span>)}
    </h3>
    <h2 className="font-bold text-xl">{position}</h2>
    <p className="text-gray-700">{postedAt}·{contract}·{location}</p>
    </div>
  <div className="flex items-center ml-auto">
    {tags 
    ? tags.map((tag) => (
    <span onClick={(e) => this.handleTagClick(tag)} className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
        {tag}
        </span>
    )) : ''}
    
    </div> 
</div>
)};

export default JobComponent;