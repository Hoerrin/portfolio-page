import React from 'react'
import styled from 'styled-components'

const NavDotsContainer = styled.div`
position: fixed;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100%;
margin-left: 2rem;
`

const NavDot = styled.div`
top: 1vh/2;
background-color: #D9D9D9;
border-radius: 50%;
height: 0.8rem;
width: 0.8rem;
margin-bottom: 1rem;
`

export default function index() {
  return (
    <NavDotsContainer>
        <NavDot/>
        <NavDot/>
        <NavDot/>
        <NavDot/>
    </NavDotsContainer>
  )
}
