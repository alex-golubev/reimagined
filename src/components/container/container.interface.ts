import type { ReactElement } from 'react'

export interface ContainerProps {
  large?: boolean
  alt?: string
  className: string
  children: ReactElement
}
