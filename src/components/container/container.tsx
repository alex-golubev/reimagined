import { cx } from '~/utils/all'
import type { JSX } from 'react'
import type { ContainerProps } from '~/components/container/container.interface'

export const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div
      className={cx(
        'container px-8 mx-auto xl:px-5',
        (props.large === true) ? 'max-w-screen-xl' : 'max-w-screen-lg',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
