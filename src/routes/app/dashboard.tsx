import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div> World "/app/dashboard"!</div>
}
