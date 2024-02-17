import React from 'react';
import SearchBar from '../components/searchBar/searchBar'
import Alerts from '../components/alerts/alerts'
import Filters from '../components/filters/filters'

export default function AlertsPage() {
  return (
    <div className='position-relative'>
        <SearchBar/>
        <Alerts/>
        <Filters/>
    </div>
  )
}