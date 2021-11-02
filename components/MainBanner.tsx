import react, { FC } from 'react'
import styled from 'styled-components'

import { MdInfoOutline } from 'react-icons/md';

import Button from './Button'

const MainBannerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: -4rem;
  padding: 4rem 4% 12rem;
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-image: url(https://image.tmdb.org/t/p/w1400_and_h450_face/${props => props.backdrop});

  @media (min-width: 568px) and (orientation: Landscape) {
    padding-bottom: 7rem;
  }

  @media (min-width: 600px) and (orientation: Portrait) {
    height: 100vh;
    padding-bottom: 24rem;
  }

  @media (min-width: 768px) {
    height: 80vh;
    padding-bottom: 14rem;
  }

  @media (min-width: 1024px) {
    height: 90vh;
  }

  @media (min-width: 1280px) {
    height: 95vh;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 75%;
    background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
  }

  .wrapper {
    display: flex;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (min-width: 960px) {
      max-width: 120rem;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 1.4rem;
    line-height: 1.4;
    color: #fff;

    @media (min-width: 568px) and (orientation: Landscape) {
      width: 50%;
    }
  
    @media (min-width: 600px) {
      width: 100%;
    }
  
    @media (min-width: 960px) {
      width: 40rem;
    }

    h2 {
      font-size: 3rem;
      line-height: 1;
      font-weight: 600;
      margin-bottom: 1rem;
     // color: #b9090b;
    }

    p {
      margin: 0 0 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .actions {
      margin: 1.5rem 0 0;
    }
  }
`

type PropsMovie = {
  title: string,
  overview: string,
  backdrop_path: string,
  poster_path: string,
  vote_average: number,
  id: number
}

type Props = {
  movie: Array<PropsMovie>
}

const MainBanner: FC<Props> = ({ movie }) => {
  return (
    <MainBannerWrapper backdrop={movie.backdrop_path}>
      <div className="wrapper">
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="actions">
            <Button><MdInfoOutline className="icon" /> Más información</Button>
          </div>
        </div>
      </div>
    </MainBannerWrapper>
  )
}

export default MainBanner