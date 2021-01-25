import {useEffect, useState} from 'react';
import {formatDistance, set} from 'date-fns'
import Avatar from 'react-avatar'
import useSWR from 'swr'


import {numberWithCommas} from '../../utils/format-numbers'
import {fetcher} from '../../utils/axios-api'
import {getCategoryValue, useDebounce} from '../../utils/constants'

const JobPosts = ({query}) => {
  const [categories] = useState(["Location", "Role", "Department", "Education", "Experience"])
  const [expandedJob, setExpandedJob] = useState('')
  const [sort, setSortBy] = useState('')
  const debouncedSearch = useDebounce(query, 1000);

  let { data:  jobsData, error: jobsError } = useSWR(debouncedSearch ? `/api/jobs?query=${debouncedSearch}` : '/api/jobs?query=', fetcher)
  if (!jobsData ) return <div>Loading...</div>
  if (jobsError) return <div>There was an error fetching jobs data</div>

  const handleJobExpansionMenu = (jobName) => {
    if (expandedJob === jobName) {
      setExpandedJob('')
    } else {
      setExpandedJob(jobName)
    }
  }

  const handleJobSorting = (key) => {
    setSortBy(key)
  }

  return (
    <div className="flex flex-col shadow-sm bg-white p-5 mb-3 w-full rounded">
      {jobsData?.jobs?.length < 1 && <div className="flex flex-row justify-center">No job has been posted</div>}
      <div className="flex flex-row justify-between mb-10">
        <div className="" >{`${numberWithCommas(jobsData.count)} job posting(s)`}</div>
        <div className="flex flex-row">
          <div className="mr-5">Sort by</div>
          {categories.map(category => <div className="mr-5 cursor-pointer" onClick={() => handleJobSorting(category)}>{category}</div>) }
        </div>
      </div>
      {jobsData?.jobs?.map((job) => {
        return (
          <div className="flex flex-col p-5 pl-0">
            <div className="cursor-pointer" onClick={() => handleJobExpansionMenu(job.name)}>
              <Avatar className="bg-gray-300 rounded mr-5" size={40} name={job.name} maxInitials={2} />
              {`${numberWithCommas(job.total_jobs_in_hospital || 0)} jobs for ${job.name}`}
            </div>
            {expandedJob === job.name && <div className="">
              {job?.items?.map(item => <div className="flex flex-row justify-between mt-5 pb-5 border-b-2 last:border-b-0 cursor-pointer">
                <div className="">
                  <div className="">{`${item.job_title}`}</div>
                  <div className="">{`${item.job_type} | ${item.salary_range[0]} - ${item.salary_range[1]} an hour | ${item.city}`}</div>
                </div>
                <div className="">{`${formatDistance(new Date(item.created), new Date())} ago`}</div>
              </div>)}
            </div>}
          </div>
        );
      })}
    </div>
  );
};
export default JobPosts;
