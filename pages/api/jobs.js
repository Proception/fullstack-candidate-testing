import jobs from '../../data/jobs'
import {getJobsCount, filterJobsByQuery} from '../../repository/jobs'

export default async (req, res) => {
  const {query} = req.query;
  let filteredJobs = [];

  if (!query) {
    filteredJobs = jobs
  }

  if (query) {
    filteredJobs = await filterJobsByQuery(jobs, query)
  }
  
  const jobsCount = await getJobsCount(filteredJobs)
  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))
  
  res.json({jobs: filteredJobs, count: jobsCount})
}
