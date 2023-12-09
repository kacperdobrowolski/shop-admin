import { useAlertStore } from '../store/alert';

type Alert = {
  expireTime?: number;
  location?: string;
  type?: string;
  message?: string;
};

export default defineNuxtPlugin(({ $pinia }) => {
  const alertStore = useAlertStore($pinia as any);

  const a = {
    show (alert: Alert) {
      alertStore.show(alert);
    },
    
    success (message: string, alert: Alert) {
      this.show({
        ...alert,
        type: 'success',
        message,
      });
    },
    
    error (message: string, alert: Alert) {
      this.show({
        ...alert,
        type: 'error',
        message,
      });
    },
  };
  
  if (process.client) {
    setInterval(() => {
      alertStore.removeExpired();
    }, 1000);
  }

  return {
    provide: {
      alert: a,
    },
  };
});

