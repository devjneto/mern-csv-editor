import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Alerts() {
  const currentAlert: any = useSelector<any>((state) => state.alert.currentAlert);
  const [alert, setAlert] = useState<any>(null);

  useEffect(() => {
    setAlert(currentAlert);
  }, [currentAlert]);

  if (!alert || !alert.message) {
    return <></>;
  }

  return (
    <Alert status={alert.status}>
      <AlertIcon />
      <AlertTitle mr={2}>{alert.message}</AlertTitle>
      <AlertDescription>{alert.description}</AlertDescription>
    </Alert>
  );
}
