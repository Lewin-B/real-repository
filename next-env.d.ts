# See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html
import { NextPageContext } from 'next'
import { AppInitialProps } from 'next/app'

declare module 'next' {
  interface NextPageContext {
    // Add any custom properties here
  }
}

declare module 'next/app' {
  interface AppInitialProps {
    // Add any custom properties here
  }
}
