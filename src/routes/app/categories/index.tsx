import Categories from '@/features/categories';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Categories />;
}
