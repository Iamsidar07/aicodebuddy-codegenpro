'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const NextThemeProvider = ({ children }:{ children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' enableSystem={true} >{ children }</ThemeProvider>
  )
}

export default NextThemeProvider