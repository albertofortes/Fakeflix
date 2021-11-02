import { FC, useEffect } from 'react'
import Head from 'next/head'

// styles:
import styled, { ThemeProvider } from 'styled-components'
import ITheme from "../styles/styled-components-types"
import theme from "../styles/styled-components-theme"

// redux toolkit:
import { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlayingMovies } from '../reducers/movies'

// components:
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainBanner from '../components/MainBanner'
import HomeList from '../components/HomeList'

const Home: FC = () => {
  const movies = useSelector((state: RootState) => state.movies)
  const movie = useSelector((state: RootState) => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayingMovies())
  }, [dispatch])

  const latestMovies = [...movies.results] // copy of the state object to avoid mutation
  const lastMovie = latestMovies.slice(0, 1)
  const followingMovies = latestMovies.slice(1, latestMovies.length - 3)

  return (
    <main className="main">
      <Head>
        <title>Fakeflix</title>
        <meta name="description" content="Fakeflix is a React, NextJS, Redux Toolkit, TypeScript clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      { lastMovie && lastMovie.map(movie => <MainBanner key={movie.id} movie={movie}/>) }

      { followingMovies && <HomeList movies={followingMovies} />}

      <Footer />

    </main>
  )
}

export default Home
