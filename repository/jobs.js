const getJobsCount = (jobs) => {
  let jobsCount= 0;
  for (let index = 0; index < jobs.length; index++) {
    const currentJob = jobs[index];
    jobsCount += currentJob.items.length
  }

  return jobsCount
};

const filterJobsByQuery = (jobs, query) => {
  const results = []

  for(var i=0; i<jobs.length; i++) {
    for(const key in jobs[i]) {
      const currentValue = jobs[i][key];
      const isArray = Array.isArray(currentValue)
      if(!isArray && isNaN(currentValue) && currentValue.indexOf(query)!=-1) {
        results.push(jobs[i]);
      }
    }

  }
  return results
}


export { getJobsCount, filterJobsByQuery };
