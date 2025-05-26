import { useFetchAlbumsQuery } from '../store';
import Skeleton from '../components/Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading album</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>;
      return <ExpandablePanel key={album.id} header={header}>
        List of photos in the album
      </ExpandablePanel>
    })
  }
  return <div>
    <div className="flex justify-between items-center mb-2">
      <div>Albums for {user.name}</div>
      <Button tertiary outline className="rounded-md">+ Add Album</Button>
    </div>
    <div>{content}</div>
  </div>;
}

export default AlbumsList;