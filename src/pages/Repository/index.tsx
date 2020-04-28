import React, { FC, useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import ReactLoading from 'react-loading'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues, Loading } from './styles'
import api from '../../api'

interface RepositoryParams {
  repository: string
}

interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repo, iss] = await Promise.all([
        await api.github.get(`repos/${params.repository}`),
        await api.github.get(`repos/${params.repository}/issues`),
      ])

      setRepository(repo.data)
      setIssues(iss.data)
    }

    loadData()
  }, [params])

  return (
    <>
      <Header>
        <img src={logoImg} alt='GitHub Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt='facebook' />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <Loading>
          <ReactLoading type='bars' color='#3d3d3d' width={400} height={300} />
        </Loading>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
