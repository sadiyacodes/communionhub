import React, {useState} from 'react'
import Header from '../components/Header'
import EventsList from '../components/EventsList'
import ListHeader from '../components/ListHeader'
import CreateEventForm from '../components/CreateEventForm'
const Events = () => {
  
  return (
    <>
      <Header/>
      <ListHeader/>
      <EventsList />
    <CreateEventForm />
    </>
  )
}

export default Events