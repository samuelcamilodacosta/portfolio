import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BASE_PATH } from './config/site'
import { ThemeProvider } from './context/ThemeContext'
import { LocaleProvider } from './context/LocaleContext'
import Layout from './layouts/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function PageFallback() {
  return <div style={{ minHeight: '50vh' }} aria-hidden="true" />
}

interface LazyPageProps {
  children: ReactNode
}

function LazyPage({ children }: LazyPageProps) {
  return <Suspense fallback={<PageFallback />}>{children}</Suspense>
}

export default function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <BrowserRouter basename={BASE_PATH || undefined}>
          <Routes>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <LazyPage>
                    <HomePage />
                  </LazyPage>
                }
              />
              <Route
                path="sobre"
                element={
                  <LazyPage>
                    <AboutPage />
                  </LazyPage>
                }
              />
              <Route
                path="tecnologias"
                element={
                  <LazyPage>
                    <SkillsPage />
                  </LazyPage>
                }
              />
              <Route
                path="experiencia"
                element={
                  <LazyPage>
                    <ExperiencePage />
                  </LazyPage>
                }
              />
              <Route
                path="projetos"
                element={
                  <LazyPage>
                    <ProjectsPage />
                  </LazyPage>
                }
              />
              <Route
                path="contato"
                element={
                  <LazyPage>
                    <ContactPage />
                  </LazyPage>
                }
              />
              <Route
                path="*"
                element={
                  <LazyPage>
                    <NotFoundPage />
                  </LazyPage>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LocaleProvider>
  )
}
