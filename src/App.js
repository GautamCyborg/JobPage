import React ,{useState,useEffect} from 'react';
import JobComponent from './components/JobComponent';
import data from './data.json';

function App(){
  const [jobs,setjobs]=useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setjobs(data),[]);

  const filterFunc = ({role,level,tools,languages}) => {
    if(filters.length === 0){
      return true;
    }

    const tags = [role,level];

    if(tools){
      tags.push(...tools);
    }

    if(languages){
      tags.push(...languages)
    }
    return tags.some((tag) => filters.includes(tag));
  };

const handleTagClick= (tag) => {
  setFilters([...filters,tag]);
};

const filteredjobs=jobs.filter(filterFunc);

  return(
    <div className='App'>
      <header className='bg-teal-500 mb-12'>
        <img src='/images/bg-header-desktop.svg' alt='bg-img'/>
      </header>
      <div className=' flex bg-white shadow-md my-16 mx-10 p-6 rounded'>
        {filters.length > 0 && filters.map(
          (filter) => <span>{filter}</span>)}
      </div>
      {jobs.length ===0 ?(
        <p>Jobs are fetching...</p>
      ):(filteredjobs.map((job) => (
      <JobComponent 
      job={job} 
      key={job.id} 
      handlTagClick={handleTagClick}
      />
      ))
    )}
    </div>
  );
}

export default App;