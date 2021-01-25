import {useEffect, useState} from 'react';
import { ConfigProvider } from 'react-avatar';
import useSWR from 'swr'

import Jobs from '../components/Jobs/index'
import Layout from '../components/Layout/index'
import SearchInput from '../components/SearchBox/index'

const Index = () => {
  const [query, setQuery] = useState();
  return (
    <ConfigProvider colors={['#D1D5DB']} >
      <Layout>
        <SearchInput setQuery={setQuery} query={query} />
        <Jobs query={query} />
      </Layout>
    </ConfigProvider>
  )
}
export default Index
