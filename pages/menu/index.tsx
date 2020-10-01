import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Nav, Navbar, NavLink, NavItem, TabContent, TabPane, UncontrolledAlert } from 'reactstrap'
import classnames from 'classnames'
import fire from './../../firebase/fire'

const Category = dynamic(() => import('./../../components/category'), {
  ssr: false
})

export async function getStaticProps() {
  const menuData = await (await fire.database().ref('/menu').once('value')).toJSON()
  return {
    props: {
      data: menuData
    }
  }
}

export default function Menu({ data }) {
  const createMenu = (query: [string]) => {
    if (query != null) {
      let categories = []
      for (let i in query) {
        categories.push(
          <Category key={i} data={query[i]} />
        )
      }
      return categories
    }
  }

  const [activeTab, setActiveTab] = useState('mainMenu')

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const menuCategories = [
    {
      category: 'mainMenu',
      name: 'Main Menu'
    },
    {
      category: 'lunch',
      name: 'Lunch Specials'
    },
    {
      category: 'specialCombination',
      name: 'Special Combinations'
    },
    {
      category: 'chinaIISpecial',
      name: 'China II Specials'
    },
    {
      category: 'specialties',
      name: 'Specialties'
    },
    {
      category: 'diet',
      name: 'Diet'
    }
  ]

  return (
    <>
      <Head>
        <title>China II - Menu</title>
      </Head>
      <nav className="bg-dark text-light">
        <Navbar dark expand="md">
          <Nav className="mr-auto" navbar>
            {
              menuCategories.map(cat => (
                <NavItem key={cat.name}>
                  <NavLink
                    className={classnames({ active: activeTab === cat.category })}
                    onClick={() => { toggle(cat.category) }}
                    style={{ cursor: 'pointer' }}
                  >
                    {activeTab === cat.category ? <strong>{cat.name}</strong> : cat.name}
                  </NavLink>
                </NavItem>
              ))
            }
          </Nav>
        </Navbar>
      </nav>
      <UncontrolledAlert color="warning" className="mb-0" style={{ textAlign: "center", fontSize: "0.8em" }}>
        Prices online may not reflect actual prices. Please visit store for more accurate prices.
      </UncontrolledAlert>
      {
        menuCategories.map(cat => (
          <TabContent activeTab={activeTab} key={cat.name}>
            <TabPane tabId={cat.category}>
              {createMenu(data[cat.category])}
            </TabPane>
          </TabContent>
        ))
      }
    </>
  )
}