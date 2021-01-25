import Filters from './filters'
import JobPosts from './job-posts'

const Jobs = ({query}) => {

  return (
    <div className="flex flex-row p-5 pt-0 justify-between">
     <div className="w-3/12 mr-5"><Filters /></div>
     <div className="w-9/12"><JobPosts query={query} /></div>
    </div>
  )
};
export default Jobs;
