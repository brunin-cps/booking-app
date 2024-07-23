import React, { useContext, useState } from "react";

type SearchContext = {
  destination: string,
  checkIn: Date,
  checkOut: Date,
  adultCount: number,
  childCount: number,
  hotelId: string,
  saveSearchValues: (destination: string, checkIn: Date, checkOut: Date, adultCount: number, childCount: number) => void;
}

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProps = {
  children: React.ReactNode
}

export const SearchContextProvider = ({ children }: SearchContextProps) => {

  const [destination, setDestination] = useState<string>("")
  const [checkIn, setCheckIn] = useState<Date>(new Date())
  const [checkOut, setCheckOut] = useState<Date>(new Date())
  const [childCount, setChildCount] = useState<number>(0)
  const [adultCount, setAdultCount] = useState<number>(1)
  const [hotelId, setHotelId] = useState<string>("")


  const saveSearchValues = (destination: string, checkIn: Date, checkOut: Date, adultCount: number, childCount: number, hotelId?: string) => {
    setDestination(destination)
    setCheckIn(checkIn)
    setCheckOut(checkOut)
    setAdultCount(adultCount)
    setChildCount(childCount)
    if (hotelId) {
      setHotelId(hotelId)
    }
  }

  return (
    <SearchContext.Provider value={{ destination, checkIn, checkOut, childCount, adultCount, hotelId, saveSearchValues }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
}