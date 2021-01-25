import {numberWithCommas} from '../../utils/format-numbers'
import useSWR from 'swr'


import {fetcher} from '../../utils/axios-api'
import {getCategoryValue} from '../../utils/constants'

const Filters = () => {

  const { data: filtersData, error: filtersError } = useSWR('/api/filters', fetcher)

  if (!filtersData) return <div>Loading...</div>
  if (filtersError) return <div>There was an error fetching filters data</div>
  const filterArray = Object.entries(filtersData)

  return (
    <div className="flex flex-col font-sans ">
      {filterArray.map(([key, value]) => {
        return <div className="flex flex-col shadow-sm bg-white p-5 mb-5 w-full rounded">
          <div className="mb-3 font-bold ">{getCategoryValue(key)}</div>
          <div className="font-normal">{value?.map(({key: itemKey, doc_count: value}) => <div className="" >
            {itemKey}
            <span className="ml-3 text-gray-400 font-light">{numberWithCommas(value || 0)}</span>
            </div>)}
          </div>
        </div>
      })}
    </div>
  );
};
export default Filters;
