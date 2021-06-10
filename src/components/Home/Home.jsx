import { useState, useEffect } from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import SearchBar from './SearchBar/SearchBar'
import DesktopProjectsTable from './DesktopProjectsTable/DesktopProjectsTable'
import MobileProjectsTable from './MobileProjectsTable/MobileProjectsTable'

export default function Home () {

    const [searchParams, setSearchParams] = useState(null)

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
    
        useEffect(() => {
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
    
          window.addEventListener("resize", handleResize);
          handleResize()
          return () => window.removeEventListener("resize", handleResize)
        }, [])
        return windowSize
      }
      
    const size = useWindowSize()

    return (
        <>
            <HomeHeader />
            <SearchBar setSearchParams={setSearchParams} />
            {size.width > 900 ? <DesktopProjectsTable searchParams={searchParams} /> : <MobileProjectsTable searchParams={searchParams} />}
        </>
    )
}