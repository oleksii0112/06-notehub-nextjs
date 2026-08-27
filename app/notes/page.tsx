import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client"


const NotesPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getNotes", "", 1],
    queryFn: () => fetchNotes({ search: "", page: 1, perPage: 12 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  );
}

export default NotesPage;