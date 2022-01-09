import React from 'react';

export function MyHooks({title, id}: {title: string, id?: string}) {
  // React.useEffect(() => {
  //   console.log('ComponentDidMount');
  //   console.log('ComponentWillUpdate');
  // })

  // React.useEffect(() => {
  //   console.log('ComponentDidMount');
  //   return () => console.log('ComponentWillUnmount');
  // }, [])
  // React.useEffect(() => {
  //   console.log('ComponentWillReceiveProps: ', title);
  // }, [title])
  const [isMounted] = useIsMounted();

  React.useEffect(() => {
    console.log('useIsMounted: ', isMounted);
  })
  return (
    <div>{title} {id}</div>
  )
}

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, [])
  return [isMounted];
}
