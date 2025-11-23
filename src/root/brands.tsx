import { useMemo } from "react"
import { Link } from "react-router-dom"
import { Image } from "../components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@mui/material";
import { useWindow } from "../hooks";

export function Brands() {
  const brandsList = useMemo(() => [
    ['apriori', 'glenwood', 'jadore', 'maestro', 'roua-moldovei', 'taiga', 'tezaur'],
    ['apriori', 'glenwood', 'jadore', 'maestro', 'roua-moldovei', 'taiga', 'tezaur'],
  ], [])
  const isMobile = useWindow()

  return <Stack>
    {brandsList.map((brands, i) => <Slider key={i} {...{
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: isMobile ? 2 : 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      rtl: i % 2 == 0
    }}>
      {brands.map((brand, i) => <Link key={i} to={`/${brand}`} style={{width: '100%'}}>
        <Stack sx={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <Image srcList={`/static/assets/logos/${brand}-black.png`} alt={`${brand} brand`} style={{width: `calc(100vw / ${isMobile ? 3 : 6})`, height: 'auto'}} />
        </Stack>
      </Link>)}
    </Slider>)}
  </Stack>
}