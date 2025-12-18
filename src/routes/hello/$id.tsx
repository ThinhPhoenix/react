import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/hello/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  return <div>Hello "/hello/{params.id}"!</div>;
}
